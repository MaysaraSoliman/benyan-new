"use client";
import React, { useEffect, useState } from "react";
import { StyledShopMenu } from "./ShopMenu.styled";
import ShopDrawerMenu from "../ShopDrawerMenu/ShopDrawerMenu";
import { Col, Row, Button } from "antd";
import Image from "next/image";
import { Link } from "@/i18n/routing";

interface Product {
  id: number;
  barcode: string;
  name: {
    en: string;
    ar: string;
  };
  branch_id: number;
  branch_name: string;
  branch_code: string;
  pricing_details: {
    id: number;
    barcode: string | null;
    price: number;
    tag_price: number;
    cost: number;
    tax_percentage: number;
    currency: string;
  };
  category: {
    en: string;
    ar: string;
  };
  material: {
    en: string;
    ar: string;
  };
  brand: {
    en: string;
    ar: string;
  };
  gemstones: {
    en: string;
    ar: string;
  };
  weight: string;
  stock_status: string;
  images: string[];
  created_at: string;
}

const ShopMenu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [start, setStart] = useState(0); // Track the starting point for fetching products
  const [limit, setLimit] = useState(12); // Set the initial number of products to load
  const [loading, setLoading] = useState(false); // Track loading state
  const [hasMoreProducts, setHasMoreProducts] = useState(true); // Track if there are more products

  useEffect(() => {
    // Fetch products with pagination
    setLoading(true);
    fetch(`http://localhost:4000/products?_start=${start}&_limit=${limit}`)
      .then((response) => response.json())
      .then((json) => {
        // Check if there are new products, and append them if they are not already in the list
        setProducts((prevProducts) => {
          const newProducts = json.filter(
            (product: Product) => !prevProducts.some((p) => p.id === product.id)
          );
          return [...prevProducts, ...newProducts]; // Append new products
        });
        setLoading(false);

        // If fewer products are returned than the limit, no more products are available
        if (json.length < limit) {
          setHasMoreProducts(false); // Disable the "Show More" button
        }
      })
      .catch(() => setLoading(false));
  }, [start, limit]);

  const loadMoreProducts = () => {
    if (hasMoreProducts) {
      setStart(start + limit); // Update the start point for next set of products
    }
  };

  return (
    <StyledShopMenu id="shopMenu">
      <div className="componentsSpaces container">
        <div className="head-container">
          <div className="head-info">
            <h5 className="sub-title">Jewelry</h5>
            <h2 className="title">Shop</h2>
          </div>
          <ShopDrawerMenu />
        </div>
        <div className="shop-products-container">
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Col key={product.id} xs={24} sm={8} md={6}>
                <Link href={`/product/${product.id}`}>
                  <div className="product-box">
                    <div className="image-box">
                      <Image
                        src={product.images[0]}
                        alt={product.name.en}
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="product-info">
                      <h3>{product.name.en}</h3>
                      <p>
                        Price: {product.pricing_details.price}{" "}
                        {product.pricing_details.currency}
                      </p>
                      <p>{product.stock_status}</p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
          {hasMoreProducts && !loading && (
            <Button
              className="show-more-btn"
              onClick={loadMoreProducts}
              type="primary"
              block
            >
              Show More Products
            </Button>
          )}
          {loading && <p>Loading...</p>} {/* Loading state */}
          {/* {!hasMoreProducts && !loading && (
            <p className="no-more-products">No more products available.</p> // Show message when no more products are left
          )} */}
        </div>
      </div>
    </StyledShopMenu>
  );
};

export default ShopMenu;

// "use client";
// import React, { useEffect, useState } from "react";
// import { StyledShopMenu } from "./ShopMenu.styled";
// import ShopDrawerMenu from "../ShopDrawerMenu/ShopDrawerMenu";
// import { Col, Row, Button } from "antd";
// import Image from "next/image";
// import { Link } from "@/i18n/routing";

// interface Product {
//   id: number;
//   barcode: string;
//   name: {
//     en: string;
//     ar: string;
//   };
//   branch_id: number;
//   branch_name: string;
//   branch_code: string;
//   pricing_details: {
//     id: number;
//     barcode: string | null;
//     price: number;
//     tag_price: number;
//     cost: number;
//     tax_percentage: number;
//     currency: string;
//   };
//   category: {
//     en: string;
//     ar: string;
//   };
//   material: {
//     en: string;
//     ar: string;
//   };
//   brand: {
//     en: string;
//     ar: string;
//   };
//   gemstones: {
//     en: string;
//     ar: string;
//   };
//   weight: string;
//   stock_status: string;
//   images: string[];
//   created_at: string;
// }

// const ShopMenu = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [start, setStart] = useState(0); // Track the starting point for fetching products
//   const [limit, setLimit] = useState(12); // Set the initial number of products to load
//   const [loading, setLoading] = useState(false); // Track loading state

//   useEffect(() => {
//     // Fetch products with pagination
//     setLoading(true);
//     fetch(`http://localhost:4000/products?_start=${start}&_limit=${limit}`)
//       .then((response) => response.json())
//       .then((json) => {
//         setProducts(json);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [start, limit]);

//   const loadMoreProducts = () => {
//     setStart(start + limit);
//   };

//   return (
//     <StyledShopMenu id="shopMenu">
//       <div className="componentsSpaces container">
//         <div className="head-container">
//           <div className="head-info">
//             <h5 className="sub-title">Jewelry</h5>
//             <h2 className="title">Shop</h2>
//           </div>
//           <ShopDrawerMenu />
//         </div>
//         <div className="shop-products-container">
//           <Row gutter={[16, 16]}>
//             {products.map((product) => (
//               <Col key={product.id} xs={24} sm={8} md={6}>
//                 <Link href={"#"}>
//                   <div className="product-box">
//                     <div className="image-box">
//                       <Image
//                         src={product.images[0]}
//                         alt={product.name.en}
//                         width={300}
//                         height={300}
//                       />
//                     </div>
//                     <div className="product-info">
//                       <h3>{product.name.en}</h3>
//                       <p>
//                         Price: {product.pricing_details.price}{" "}
//                         {product.pricing_details.currency}
//                       </p>
//                       <p>{product.stock_status}</p>
//                     </div>
//                   </div>
//                 </Link>
//               </Col>
//             ))}
//           </Row>
//           {products.length > 0 && !loading && (
//             <Button onClick={loadMoreProducts} type="primary" block>
//               Show More Products
//             </Button>
//           )}
//           {loading && <p>Loading...</p>} {/* Loading state */}
//         </div>
//       </div>
//     </StyledShopMenu>
//   );
// };

// export default ShopMenu;

// "use client";
// import React, { useEffect, useState } from "react";
// import { StyledShopMenu } from "./ShopMenu.styled";
// import ShopDrawerMenu from "../ShopDrawerMenu/ShopDrawerMenu";
// import { Col, Row } from "antd";
// import Image from "next/image";
// import { Link } from "@/i18n/routing";

// interface Product {
//   id: number;
//   barcode: string;
//   name: {
//     en: string;
//     ar: string;
//   };
//   branch_id: number;
//   branch_name: string;
//   branch_code: string;
//   pricing_details: {
//     id: number;
//     barcode: string | null;
//     price: number;
//     tag_price: number;
//     cost: number;
//     tax_percentage: number;
//     currency: string;
//   };
//   category: {
//     en: string;
//     ar: string;
//   };
//   material: {
//     en: string;
//     ar: string;
//   };
//   brand: {
//     en: string;
//     ar: string;
//   };
//   gemstones: {
//     en: string;
//     ar: string;
//   };
//   weight: string;
//   stock_status: string;
//   images: string[];
//   created_at: string;
// }

// const ShopMenu = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:4000/products")
//       .then((response) => response.json())
//       .then((json) => {
//         setProducts(json);
//         console.log("Fetched products:", json);
//       });
//   }, []);

//   return (
//     <StyledShopMenu id="shopMenu">
//       <div className="componentsSpaces container">
//         <div className="head-container">
//           <div className="head-info">
//             <h5 className="sub-title">Jewelry</h5>
//             <h2 className="title">Shop</h2>
//           </div>
//           <ShopDrawerMenu />
//         </div>
//         <div className="shop-products-container">
//           <Row gutter={[16, 16]}>
//             {products.map((product) => (
//               <Col key={product.id} xs={24} sm={8} md={6}>
//                 <Link href={"#"}>
//                   <div className="product-box">
//                     <div className="image-box">
//                       <Image
//                         src={product.images[0]}
//                         alt={product.name.en}
//                         width={300}
//                         height={300}
//                       />
//                     </div>
//                     <div className="product-info">
//                       <h3>{product.name.en}</h3>
//                       <p>
//                         Price: {product.pricing_details.price}{" "}
//                         {product.pricing_details.currency}
//                       </p>
//                       <p>{product.stock_status}</p>
//                     </div>
//                   </div>
//                 </Link>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       </div>
//     </StyledShopMenu>
//   );
// };

// export default ShopMenu;
