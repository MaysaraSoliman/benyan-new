"use client";
import { Link } from "@/i18n/routing";
import Product from "@/types/cartTypes";
import { Button, Col, Drawer, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const [brandsDisplayed, setBrandsDisplayed] = useState<Set<string>>(
    new Set()
  ); // Track brands in state
  const [brandsProductDisplayed, setBrandsProductDisplayed] = useState<
    Product[]
  >([]); // Track products in state

  // const handleBrandDisplay = (product: Product) => {
  //   setBrandsDisplayed((prev) => new Set(prev).add(product.brand.en));
  //   setBrandsProductDisplayed((prev) => [...prev, product]); // Append the product to the array
  // };

  const fetchProducts = async () => {
    // Fetch data from your API or data source
    const response = await fetch("http://localhost:4000/products"); // Replace with your API endpoint
    const data: Product[] = await response.json();
    console.log("data drawer ==>", data);

    // Use a temporary Set to track brands and filter products
    const displayedBrands = new Set<string>();
    const filteredData = [];

    // Loop through products and filter them
    for (const product of data) {
      if (!displayedBrands.has(product.brand.en)) {
        displayedBrands.add(product.brand.en);
        filteredData.push(product);
      }
    }

    // Update state with the filtered products
    setBrandsProductDisplayed(filteredData); // Set filtered products
    setBrandsDisplayed(displayedBrands); // Set displayed brands set
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Run fetchProducts once

  // Use this effect to log brandsDisplayed after it has been updated
  useEffect(() => {
    console.log(
      "brandsDisplayed after update ==> ",
      Array.from(brandsDisplayed)
    );
  }, [brandsDisplayed]); // This will run whenever brandsDisplayed is updated

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showDrawer}>
        <RxHamburgerMenu className="icon" />
      </Button>
      <Drawer
        className="header-drawer"
        title="Basic Drawer"
        onClose={onClose}
        open={open}
      >
        <Row className="drawer-container">
          <Col sm={24} lg={12}>
            <ul>
              <li>
                <Link href={"/rings"}>Rings</Link>
              </li>
              <li>
                <Link href={"/necklaces"}>Necklaces</Link>
              </li>
              <li>
                <Link href={"/bracelets"}>Bracelets</Link>
              </li>
              <li>
                <Link href={"/earings"}>Earrings</Link>
              </li>
              <li>
                <Link href={"/shop"}>Discover All</Link>
              </li>
            </ul>
          </Col>
          <Col sm={24} lg={12} className="brands">
            <Row gutter={[16, 12]}>
              {/* Render the products */}
              {brandsProductDisplayed.map((product) => (
                <Col key={product.id} xs={12} className="brand-item">
                  {product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={product.brand.en}
                      className="brand-image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  ) : (
                    <div>No Image Available</div>
                  )}
                  <Link href={`/brand/${product.brand.en}`}>
                    {product.brand.en}
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default MenuDrawer;

// "use client";
// import { Link } from "@/i18n/routing";
// import Product from "@/types/cartTypes";
// import { Button, Col, Drawer, Image, Row } from "antd";
// import React, { useEffect, useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";

// const MenuDrawer = () => {
//   const [open, setOpen] = useState(false);
//   const [products, setProducts] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     // Fetch data from your API or data source
//     const response = await fetch("http://localhost:4000/products"); // Replace with your API endpoint
//     const data: Product[] = await response.json();
//     console.log("data drawer ==>", data);
//     setProducts(data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <Button onClick={showDrawer}>
//         <RxHamburgerMenu className="icon" />
//       </Button>
//       <Drawer
//         className="header-drawer"
//         title="Basic Drawer"
//         onClose={onClose}
//         open={open}
//       >
//         <Row className="drawer-container">
//           <Col sm={24} lg={12}>
//             <ul>
//               <li>
//                 <Link href={"/rings"}>Rings</Link>
//               </li>
//               <li>
//                 <Link href={"/necklaces"}>Necklaces</Link>
//               </li>
//               <li>
//                 <Link href={"/bracelets"}>Bracelets</Link>
//               </li>
//               <li>
//                 <Link href={"/earings"}>Earrings</Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link href={"/shop"}>Discover All</Link>
//               </li>
//             </ul>
//           </Col>
//           <Col sm={24} lg={12} className="brands">
//             <Row gutter={16}>
//               {products.map((product) => (
//                 <Col key={product.id} sm={12} className="brand-item">
//                   {product.images.length > 0 ? (
//                     <Image
//                       src={product.images[0]}
//                       alt={product.brand.en}
//                       className="brand-image"
//                       style={{ width: "100%", height: "auto" }}
//                     />
//                   ) : (
//                     <div>No Image Available</div>
//                   )}
//                   <div>{product.brand.en}</div>
//                 </Col>
//               ))}
//             </Row>
//           </Col>
//         </Row>
//       </Drawer>
//     </>
//   );
// };

// export default MenuDrawer;
