"use client";
import React, { useEffect, useState } from "react";
import { StyledSingleProduct } from "./SingleProduct.styled";
import { Image as AntImage, Button, Divider } from "antd";
import { useParams } from "next/navigation";

interface Product {
  id: number;
  barcode: string;
  name: { en: string; ar: string };
  branch_id: number;
  branch_name: string;
  branch_code: string;
  pricing_details: {
    id: number;
    price: number;
    tag_price: number;
    cost: number;
    tax_percentage: number;
    currency: string;
  };
  category: { en: string; ar: string };
  material: { en: string; ar: string };
  brand: { en: string; ar: string };
  gemstones: { en: string; ar: string };
  weight: string;
  stock_status: string;
  images: string[];
  created_at: string;
}

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);

  const language = "en"; // Adjust this value to dynamically switch between 'en' and 'ar'

  useEffect(() => {
    if (!id) {
      setError("Product ID is missing");
      setLoading(false);
      return;
    }

    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data: Product = await response.json();
        setProduct(data);
        setMainImage(data.images[0] || ""); // Set the first image or an empty string if no images are available
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Ensure that product is not null before accessing images and remove duplicates
  const uniqueImages = Array.from(new Set(product?.images || []));

  return (
    <StyledSingleProduct>
      <div className="componentsSpaces container">
        <div className="product-container">
          {/* Gallery and Main Image */}
          <div className="gallery-images-container">
            {/* Main Image */}
            <div className="main-image">
              {mainImage && (
                <AntImage
                  src={mainImage}
                  alt={product.name[language]}
                  //   width={400}
                  //   height={400}
                  className="main-singleProduct-img"
                  onClick={() => setMainImage(mainImage)} // Ensure clicking on the main image doesn't cause issues
                />
              )}
            </div>

            <AntImage.PreviewGroup>
              {/* Thumbnail Images for Preview */}
              <div className="thumbnail-images">
                {uniqueImages.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${
                      mainImage === image ? "active" : ""
                    }`}
                  >
                    <AntImage
                      src={image}
                      alt={`${product.name[language]} thumbnail`}
                      width={80}
                      height={80}
                      onClick={() => setMainImage(image)} // Set clicked thumbnail as the main image
                    />
                  </div>
                ))}
              </div>
            </AntImage.PreviewGroup>
          </div>

          {/* Product Details */}
          <div className="product-info">
            <h3 className="product-name">{product?.name[language]}</h3>
            <p className="product-price">
              {product?.pricing_details.price}{" "}
              {product?.pricing_details.currency} {"  "}
              &nbsp;&nbsp;&nbsp;
              <span>Excluding Taxes</span>
            </p>

            <div className="details">
              <h3 className="title">Details & Description</h3>
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
                quam modi. Quos, eveniet. Est quidem at itaque atque quis saepe
                perferendis pariatur temporibus asperiores nesciunt quo
                repellat, omnis dolores laboriosam?
              </div>
              <ul className="details-list">
                <li className="product-material">
                  <span>Material:</span> {product?.material[language]}
                </li>
                <li className="product-gemstones">
                  <span>Gemstone:</span> {product?.gemstones[language]}
                </li>
                <li className="product-weight">
                  <span>Weight:</span> {product?.weight}
                </li>
                <li>
                  <span>Stock Status:</span> {product?.stock_status}
                </li>
                <li>
                  <span>Category: </span>
                  {product?.category[language]}
                </li>
                <li>
                  <span>Brand: </span> {product?.brand[language]}
                </li>
              </ul>
            </div>
            <Divider />
            <Button className="large-btn">ADD TO SHOPPING BAG</Button>
            {/* <p className="product-material">
              Material: {product?.material[language]}
            </p>
            <p className="product-gemstones">
              Gemstone: {product?.gemstones[language]}
            </p>
            <p className="product-weight">Weight: {product?.weight}</p>
            <p>Stock Status: {product?.stock_status}</p>
            <p>Category: {product?.category[language]}</p>
            <p>Brand: {product?.brand[language]}</p> */}
          </div>
        </div>
      </div>
    </StyledSingleProduct>
  );
};

export default SingleProduct;

// "use client";
// import React, { useEffect, useState } from "react";
// import { StyledSingleProduct } from "./SingleProduct.styled";
// import Image from "next/image";
// import { useParams } from "next/navigation";

// interface Product {
//   id: number;
//   barcode: string;
//   name: { en: string; ar: string };
//   branch_id: number;
//   branch_name: string;
//   branch_code: string;
//   pricing_details: {
//     id: number;
//     price: number;
//     tag_price: number;
//     cost: number;
//     tax_percentage: number;
//     currency: string;
//   };
//   category: { en: string; ar: string };
//   material: { en: string; ar: string };
//   brand: { en: string; ar: string };
//   gemstones: { en: string; ar: string };
//   weight: string;
//   stock_status: string;
//   images: string[];
//   created_at: string;
// }

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [mainImage, setMainImage] = useState<string | null>(null);

//   const language = "en"; // Adjust this value to dynamically switch between 'en' and 'ar'

//   useEffect(() => {
//     if (!id) {
//       setError("Product ID is missing");
//       setLoading(false);
//       return;
//     }

//     const fetchSingleProduct = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/products/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch product");
//         }
//         const data: Product = await response.json();
//         setProduct(data);
//         setMainImage(data.images[0]); // Set the first image as the default main image
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSingleProduct();
//   }, [id]);

//   const handleThumbnailClick = (image: string) => {
//     setMainImage(image);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <StyledSingleProduct>
//       <div className="componentsSpaces container">
//         <div className="product-container">
//           {/* Main Image */}
//           <div className="gallery-images-container">
//             <div className="main-image">
//               {mainImage && (
//                 <Image
//                   src={mainImage}
//                   alt={product.name[language]}
//                   width={400}
//                   height={400}
//                   className="main-singleProduct-img"
//                 />
//               )}
//             </div>
//             {/* Thumbnail Images */}
//             <div className="thumbnail-images">
//               {product?.images.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`thumbnail ${mainImage === image ? "active" : ""}`}
//                   onClick={() => handleThumbnailClick(image)}
//                 >
//                   <Image
//                     src={image}
//                     alt={`${product.name[language]} thumbnail`}
//                     width={80}
//                     height={80}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="product-info">
//             <h3>{product?.name[language]}</h3>
//             <p>{product?.material[language]}</p>
//             <p>{product?.gemstones[language]}</p>
//             <p>
//               Price: {product?.pricing_details.price}{" "}
//               {product?.pricing_details.currency}
//             </p>
//             <p>Stock Status: {product?.stock_status}</p>
//             <p>Category: {product?.category[language]}</p>
//             <p>Brand: {product?.brand[language]}</p>
//             <p>Weight: {product?.weight}</p>
//           </div>
//         </div>
//         {/* Product Details */}
//       </div>
//     </StyledSingleProduct>
//   );
// };

// export default SingleProduct;

// "use client";
// import React, { useEffect, useState } from "react";
// import { StyledSingleProduct } from "./SingleProduct.styled";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// interface Product {
//   id: number;
//   barcode: string;
//   name: { en: string; ar: string };
//   branch_id: number;
//   branch_name: string;
//   branch_code: string;
//   pricing_details: {
//     id: number;
//     price: number;
//     tag_price: number;
//     cost: number;
//     tax_percentage: number;
//     currency: string;
//   };
//   category: { en: string; ar: string };
//   material: { en: string; ar: string };
//   brand: { en: string; ar: string };
//   gemstones: { en: string; ar: string };
//   weight: string;
//   stock_status: string;
//   images: string[];
//   created_at: string;
// }

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   const language = "en"; // Adjust this value to dynamically switch between 'en' and 'ar'

//   useEffect(() => {
//     if (!id) {
//       setError("Product ID is missing");
//       setLoading(false);
//       return;
//     }

//     const fetchSingleProduct = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/products/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch product");
//         }
//         const data: Product = await response.json();
//         setProduct(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSingleProduct();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <StyledSingleProduct>
//       <div className="componentsSpaces container">
//         <div className="porduct-container">
//           <div className="product-info">
//             <h3>{product?.name[language]}</h3>
//             <div>
//               <p>{product?.material[language]}</p>
//               <p>{product?.gemstones[language]}</p>
//               <p>
//                 Price: {product?.pricing_details.price}{" "}
//                 {product?.pricing_details.currency}
//               </p>
//               <p>Stock Status: {product?.stock_status}</p>
//               <p>Category: {product?.category[language]}</p>
//               <p>Brand: {product?.brand[language]}</p>
//               <p>Weight: {product?.weight}</p>
//             </div>
//           </div>
//           <div>
//             <Swiper
//               style={{
//                 "--swiper-navigation-color": "#fff",
//                 "--swiper-pagination-color": "#fff",
//               }}
//               loop={true}
//               spaceBetween={10}
//               navigation={true}
//               thumbs={{ swiper: thumbsSwiper }}
//               modules={[FreeMode, Navigation, Thumbs]}
//               className="mainSwiper"
//             >
//               {product?.images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <Image
//                     src={image}
//                     alt={product.name[language]}
//                     width={500}
//                     height={500}
//                     priority
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <Swiper
//               onSwiper={setThumbsSwiper}
//               loop={true}
//               spaceBetween={10}
//               slidesPerView={4}
//               freeMode={true}
//               watchSlidesProgress={true}
//               modules={[FreeMode, Thumbs]}
//               className="thumbSwiper"
//             >
//               {product?.images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <Image
//                     src={image}
//                     alt={product.name[language]}
//                     width={100}
//                     height={100}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </StyledSingleProduct>
//   );
// };

// export default SingleProduct;

// "use client";
// import React, { useEffect, useState } from "react";
// import { StyledSingleProduct } from "./SingleProduct.styled";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import dynamic from "next/dynamic";

// const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
//   ssr: false,
// });
// const SwiperSlide = dynamic(
//   () => import("swiper/react").then((mod) => mod.SwiperSlide),
//   {
//     ssr: false,
//   }
// );

// import "swiper/css"; // Import Swiper styles
// import "swiper/css/navigation"; // Import Navigation styles
// import "swiper/css/thumbs"; // Import Thumbs styles
// import { Navigation } from "swiper/modules";
// import { Thumbs } from "swiper/modules";

// interface Product {
//   id: number;
//   barcode: string;
//   name: { en: string; ar: string };
//   branch_id: number;
//   branch_name: string;
//   branch_code: string;
//   pricing_details: {
//     id: number;
//     price: number;
//     tag_price: number;
//     cost: number;
//     tax_percentage: number;
//     currency: string;
//   };
//   category: { en: string; ar: string };
//   material: { en: string; ar: string };
//   brand: { en: string; ar: string };
//   gemstones: { en: string; ar: string };
//   weight: string;
//   stock_status: string;
//   images: string[];
//   created_at: string;
// }

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); // Thumbs swiper state

//   const language = "en"; // Adjust this value to dynamically switch between 'en' and 'ar'

//   useEffect(() => {
//     if (!id) {
//       setError("Product ID is missing");
//       setLoading(false);
//       return;
//     }

//     const fetchSingleProduct = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/products/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch product");
//         }
//         const data: Product = await response.json();
//         setProduct(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSingleProduct();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <StyledSingleProduct>
//       <div className="componentsSpaces container">
//         <h3>{product?.name[language]}</h3>
//         <div>
//           <p>{product?.material[language]}</p>
//           <p>{product?.gemstones[language]}</p>
//           <p>
//             Price: {product?.pricing_details.price}{" "}
//             {product?.pricing_details.currency}
//           </p>
//           <p>Stock Status: {product?.stock_status}</p>
//           <p>Category: {product?.category[language]}</p>
//           <p>Brand: {product?.brand[language]}</p>
//           <p>Weight: {product?.weight}</p>

//           {/* Swiper Gallery with Thumbs */}
//           <div className="gallery">
//             {/* Main Image Swiper */}
//             <Swiper
//               spaceBetween={10}
//               navigation={true}
//               thumbs={{ swiper: thumbsSwiper }} // Connect thumbs swiper to main swiper
//               modules={[Navigation, Thumbs]} // Pass modules here
//               className="mainSwiper"
//             >
//               {product?.images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <Image
//                     src={image}
//                     alt={product?.name[language]}
//                     width={600}
//                     height={600}
//                     layout="intrinsic"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Thumbs Swiper */}
//             <Swiper
//               onSwiper={setThumbsSwiper} // Initialize thumbs swiper
//               spaceBetween={10}
//               slidesPerView={4}
//               freeMode={true}
//               watchSlidesProgress={true}
//               modules={[Thumbs]} // Pass Thumbs module here
//               className="thumbsSwiper"
//             >
//               {product?.images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <Image
//                     src={image}
//                     alt={product?.name[language]}
//                     width={100}
//                     height={100}
//                     layout="intrinsic"
//                     style={{ cursor: "pointer" }} // Style as clickable
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </StyledSingleProduct>
//   );
// };

// export default SingleProduct;

// "use client";
// import React, { useEffect, useState } from "react";
// import { StyledSingleProduct } from "./SingleProduct.styled";
// import Image from "next/image";
// import { useParams } from "next/navigation";

// interface Product {
//   id: number;
//   barcode: string;
//   name: { en: string; ar: string };
//   branch_id: number;
//   branch_name: string;
//   branch_code: string;
//   pricing_details: {
//     id: number;
//     price: number;
//     tag_price: number;
//     cost: number;
//     tax_percentage: number;
//     currency: string;
//   };
//   category: { en: string; ar: string };
//   material: { en: string; ar: string };
//   brand: { en: string; ar: string };
//   gemstones: { en: string; ar: string };
//   weight: string;
//   stock_status: string;
//   images: string[];
//   created_at: string;
// }

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const language = "en"; // Adjust this value to dynamically switch between 'en' and 'ar'

//   useEffect(() => {
//     if (!id) {
//       setError("Product ID is missing");
//       setLoading(false);
//       return;
//     }

//     const fetchSingleProduct = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/products/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch product");
//         }
//         const data: Product = await response.json();
//         setProduct(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSingleProduct();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <StyledSingleProduct>
//       <div className="componentsSpaces container">
//         <h3>{product?.name[language]}</h3>
//         <div>
//           <p>{product?.material[language]}</p>
//           <p>{product?.gemstones[language]}</p>
//           <p>
//             Price: {product?.pricing_details.price}{" "}
//             {product?.pricing_details.currency}
//           </p>
//           <p>Stock Status: {product?.stock_status}</p>
//           <p>Category: {product?.category[language]}</p>
//           <p>Brand: {product?.brand[language]}</p>
//           <p>Weight: {product?.weight}</p>
//           <div>
//             {product?.images.map((image, index) => (
//               <Image
//                 key={index}
//                 src={image}
//                 alt={product.name[language]}
//                 width={200}
//                 height={200}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </StyledSingleProduct>
//   );
// };

// export default SingleProduct;

// import React from "react";
// import { StyledSingleProduct } from "./SingleProduct.styled";

// const SingleProduct = () => {
//   return (
//     <StyledSingleProduct>
//       <div className="componentsSpaces container">
//         <h3>single page</h3>
//       </div>
//     </StyledSingleProduct>
//   );
// };

// export default SingleProduct;
