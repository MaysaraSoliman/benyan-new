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

// const categories = [
//   { label: "Pearl Jewellery", value: "Pearl Jewellery" },
//   { label: "Diamond Jewellery", value: "Diamond Jewellery" },
//   { label: "Gold Jewellery", value: "Gold Jewellery" },
//   { label: "Silver Jewellery", value: "Silver Jewellery" },
//   { label: "Platinum Jewellery", value: "Platinum Jewellery" },
// ];

interface ShopMenuProps {
  subTitle?: string;
  title: string;
  url: string;
  categories?: { label: string; value: string }[];
  materials?: { label: string; value: string }[];
}

const ShopMenu: React.FC<ShopMenuProps> = ({
  subTitle,
  title,
  url,
  categories,
  materials,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [start, setStart] = useState(0); // Track the starting point for fetching products
  const [limit] = useState(12); // Set the initial number of products to load
  const [loading, setLoading] = useState(false); // Track loading state
  const [hasMoreProducts, setHasMoreProducts] = useState(true); // Track if there are more products
  const [filters, setFilters] = useState<{
    category?: string;
    material?: string;
    sort?: string;
    priceRange?: [number, number];
  }>({});

  // const fetchProducts = () => {
  //   setLoading(true);
  //   const { category, sort } = filters;

  //   let url = `http://localhost:4000/products?_start=${start}&_limit=${limit}`;
  //   if (category) url += `&category=${category}`;
  //   console.log("category ==>", category);
  //   if (sort) {
  //     if (sort === "priceLowToHigh")
  //       url += `&_sort=pricing_details.price&_order=asc`;
  //     if (sort === "priceHighToLow")
  //       url += `&_sort=pricing_details.price&_order=desc`;
  //   }

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setProducts((prevProducts) => [...prevProducts, ...json]);
  //       setLoading(false);
  //       console.log("json products ==>", json);

  //       if (json.length < limit) {
  //         setHasMoreProducts(false);
  //       }
  //     })
  //     .catch(() => setLoading(false));
  // };

  const fetchProducts = () => {
    setLoading(true);
    let apiUrl = `${url}${
      url.includes("?") ? "&" : "?"
    }_start=${start}&_limit=${limit}`;
    console.log("apiUrl ===>", apiUrl);
    // url = `${url}?_start=${start}&_limit=${limit}`;
    // console.log("url ===>", url);
    const { category, sort, priceRange, material } = filters;
    // let url = `http://localhost:4000/products?_start=${start}&_limit=${limit}`;
    if (category) apiUrl += `&category.en=${category}`;
    if (material) apiUrl += `&material.en=${material}`;
    if (priceRange) {
      apiUrl += `&pricing_details.price_gte=${priceRange[0]}&pricing_details.price_lte=${priceRange[1]}`;
    }
    if (sort) {
      if (sort === "priceLowToHigh")
        apiUrl += `&_sort=pricing_details.price&_order=asc`;
      if (sort === "priceHighToLow")
        apiUrl += `&_sort=pricing_details.price&_order=desc`;
    }

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     //************* START This is Temporary now but change when make the backend , then delete this code **************** */
    //     console.log("json products ===>", json);
    //     let sortedProducts = json;
    //     let filteredProducts = json;
    //     if (sort === "priceLowToHigh") {
    //       sortedProducts = [...json].sort(
    //         (a, b) => a.pricing_details.price - b.pricing_details.price
    //       );
    //     } else if (sort === "priceHighToLow") {
    //       sortedProducts = [...json].sort(
    //         (a, b) => b.pricing_details.price - a.pricing_details.price
    //       );
    //     }
    //     if (priceRange) {
    //       filteredProducts = json.filter(
    //         (product) =>
    //           product.pricing_details.price >= priceRange[0] &&
    //           product.pricing_details.price <= priceRange[1]
    //       );
    //     }
    //     setProducts((prevProducts) => [
    //       ...prevProducts,
    //       ...sortedProducts.filter(
    //         (product) => !prevProducts.some((p) => p.id === product.id)
    //       ),
    //     ]);
    //     //************* End This is Temporary now but change when make the backend , then delete this code **************** */

    //     //************* START This is True Code after backend **************** */
    //     // setProducts((prevProducts) => {
    //     //   const newProducts = json.filter(
    //     //     (product) => !prevProducts.some((p) => p.id === product.id)
    //     //   );
    //     //   return [...prevProducts, ...newProducts];
    //     // });
    //     //************* End This is True Code after backend **************** */

    //     setLoading(false);

    //     if (json.length < limit) {
    //       setHasMoreProducts(false);
    //     }
    //   })
    //   .catch(() => setLoading(false));

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        //************* START This is Temporary now but change when make the backend , then delete this code **************** */
        let sortedProducts = json;
        if (sort === "priceLowToHigh") {
          sortedProducts = [...json].sort(
            (a, b) => a.pricing_details.price - b.pricing_details.price
          );
        } else if (sort === "priceHighToLow") {
          sortedProducts = [...json].sort(
            (a, b) => b.pricing_details.price - a.pricing_details.price
          );
        }
        const filteredProducts = priceRange
          ? sortedProducts.filter(
              (product) =>
                product.pricing_details.price >= priceRange[0] &&
                product.pricing_details.price <= priceRange[1]
            )
          : sortedProducts;

        setProducts((prevProducts) => [
          ...prevProducts,
          ...filteredProducts.filter(
            (product) => !prevProducts.some((p) => p.id === product.id)
          ),
        ]);
        //************* End This is Temporary now but change when make the backend , then delete this code **************** */

        //************* START This is True Code after backend **************** */
        // setProducts((prevProducts) => {
        //   const newProducts = json.filter(
        //     (product) => !prevProducts.some((p) => p.id === product.id)
        //   );
        //   return [...prevProducts, ...newProducts];
        // });
        //************* End This is True Code after backend **************** */

        setLoading(false);

        if (json.length < limit) {
          setHasMoreProducts(false);
        }
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, [start, filters]);

  const handleFilterChange = (newFilters: {
    category?: string;
    material?: string;
    sort?: string;
    priceRange?: [number, number];
  }) => {
    setProducts([]); // Reset products when filters change
    setStart(0); // Reset pagination
    setFilters(newFilters);
    setHasMoreProducts(true); // Reset "has more" to allow further loading
  };

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
            <h5 className="sub-title">{subTitle}</h5>
            <h2 className="title">{title}</h2>
          </div>
          <ShopDrawerMenu
            onFilterChange={handleFilterChange}
            categories={categories}
            materials={materials}
          />
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
            {products.length == 0 && <p>No Products found</p>}
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
          {loading && <p>Loading...</p>}
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
//   const [limit] = useState(12); // Set the initial number of products to load
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [hasMoreProducts, setHasMoreProducts] = useState(true); // Track if there are more products
//   const [filters, setFilters] = useState<{ category?: string; sort?: string }>(
//     {}
//   );

//   // const fetchProducts = () => {
//   //   setLoading(true);
//   //   const { category, sort } = filters;

//   //   let url = `http://localhost:4000/products?_start=${start}&_limit=${limit}`;
//   //   if (category) url += `&category=${category}`;
//   //   console.log("category ==>", category);
//   //   if (sort) {
//   //     if (sort === "priceLowToHigh")
//   //       url += `&_sort=pricing_details.price&_order=asc`;
//   //     if (sort === "priceHighToLow")
//   //       url += `&_sort=pricing_details.price&_order=desc`;
//   //   }

//   //   fetch(url)
//   //     .then((response) => response.json())
//   //     .then((json) => {
//   //       setProducts((prevProducts) => [...prevProducts, ...json]);
//   //       setLoading(false);
//   //       console.log("json products ==>", json);

//   //       if (json.length < limit) {
//   //         setHasMoreProducts(false);
//   //       }
//   //     })
//   //     .catch(() => setLoading(false));
//   // };

//   const fetchProducts = () => {
//     setLoading(true);
//     const { category, sort } = filters;

//     let url = `http://localhost:4000/products?_start=${start}&_limit=${limit}`;
//     if (category) url += `&category.en=${category}`;
//     if (sort) {
//       if (sort === "priceLowToHigh")
//         url += `&_sort=pricing_details.price&_order=asc`;
//       if (sort === "priceHighToLow")
//         url += `&_sort=pricing_details.price&_order=desc`;
//     }

//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => {
//         //************* START This is Temporary now but change when make the backend , then delete this code **************** */
//         console.log("json products ===>", json);
//         let sortedProducts = json;
//         if (sort === "priceLowToHigh") {
//           sortedProducts = [...json].sort(
//             (a, b) => a.pricing_details.price - b.pricing_details.price
//           );
//         } else if (sort === "priceHighToLow") {
//           sortedProducts = [...json].sort(
//             (a, b) => b.pricing_details.price - a.pricing_details.price
//           );
//         }
//         setProducts((prevProducts) => [
//           ...prevProducts,
//           ...sortedProducts.filter(
//             (product) => !prevProducts.some((p) => p.id === product.id)
//           ),
//         ]);
//         //************* End This is Temporary now but change when make the backend , then delete this code **************** */

//         //************* START This is True Code after backend **************** */
//         // setProducts((prevProducts) => {
//         //   const newProducts = json.filter(
//         //     (product) => !prevProducts.some((p) => p.id === product.id)
//         //   );
//         //   return [...prevProducts, ...newProducts];
//         // });
//         //************* End This is True Code after backend **************** */

//         setLoading(false);

//         if (json.length < limit) {
//           setHasMoreProducts(false);
//         }
//       })
//       .catch(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [start, filters]);

//   const handleFilterChange = (newFilters: {
//     category?: string;
//     sort?: string;
//   }) => {
//     setProducts([]); // Reset products when filters change
//     setStart(0); // Reset pagination
//     setFilters(newFilters);
//     setHasMoreProducts(true); // Reset "has more" to allow further loading
//   };

//   const loadMoreProducts = () => {
//     if (hasMoreProducts) {
//       setStart(start + limit); // Update the start point for next set of products
//     }
//   };

//   return (
//     <StyledShopMenu id="shopMenu">
//       <div className="componentsSpaces container">
//         <div className="head-container">
//           <div className="head-info">
//             <h5 className="sub-title">Jewelry</h5>
//             <h2 className="title">Shop</h2>
//           </div>
//           <ShopDrawerMenu onFilterChange={handleFilterChange} />
//         </div>
//         <div className="shop-products-container">
//           <Row gutter={[16, 16]}>
//             {products.map((product) => (
//               <Col key={product.id} xs={24} sm={8} md={6}>
//                 <Link href={`/product/${product.id}`}>
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
//           {hasMoreProducts && !loading && (
//             <Button
//               className="show-more-btn"
//               onClick={loadMoreProducts}
//               type="primary"
//               block
//             >
//               Show More Products
//             </Button>
//           )}
//           {loading && <p>Loading...</p>}
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
//   const [limit] = useState(12); // Set the initial number of products to load
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [hasMoreProducts, setHasMoreProducts] = useState(true); // Track if there are more products

//   useEffect(() => {
//     // Fetch products with pagination
//     setLoading(true);
//     fetch(`http://localhost:4000/products?_start=${start}&_limit=${limit}`)
//       .then((response) => response.json())
//       .then((json) => {
//         // Check if there are new products, and append them if they are not already in the list
//         setProducts((prevProducts) => {
//           const newProducts = json.filter(
//             (product: Product) => !prevProducts.some((p) => p.id === product.id)
//           );
//           return [...prevProducts, ...newProducts]; // Append new products
//         });
//         setLoading(false);

//         // If fewer products are returned than the limit, no more products are available
//         if (json.length < limit) {
//           setHasMoreProducts(false); // Disable the "Show More" button
//         }
//       })
//       .catch(() => setLoading(false));
//   }, [start, limit]);

//   const loadMoreProducts = () => {
//     if (hasMoreProducts) {
//       setStart(start + limit); // Update the start point for next set of products
//     }
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
//                 <Link href={`/product/${product.id}`}>
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
//           {hasMoreProducts && !loading && (
//             <Button
//               className="show-more-btn"
//               onClick={loadMoreProducts}
//               type="primary"
//               block
//             >
//               Show More Products
//             </Button>
//           )}
//           {loading && <p>Loading...</p>} {/* Loading state */}
//           {/* {!hasMoreProducts && !loading && (
//             <p className="no-more-products">No more products available.</p> // Show message when no more products are left
//           )} */}
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
