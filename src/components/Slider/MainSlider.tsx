"use client";
import React, { useEffect, useState } from "react";
import { StyledSlider } from "./Slider.styled";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface Product {
  id: number;
  name: { en: string; ar: string };
  pricing_details: {
    price: number;
    currency: string;
  };
  images: string[];
}

interface MainSliderProps {
  title: string;
  link: string;
}

const MainSlider: React.FC<MainSliderProps> = ({ title, link }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const locale = useLocale();
  console.log("locale", locale);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(link);
        const data = await response.json();
        console.log("best sellers", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [link]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider locale={locale}>
      <div className="container">
        <div className="main-title">
          <Title level={2}>{title}</Title>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="slider-box">
                  <div className="image-box">
                    <Image
                      className="image"
                      src={product.images[0]}
                      alt={product.name.en}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 25vw"
                    />
                  </div>
                  <div className="product-info">
                    <Title className="item-title" level={3}>
                      {product.name.en}
                    </Title>
                    <p>
                      {product.pricing_details.currency}{" "}
                      {product.pricing_details.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </StyledSlider>
  );
};

export default MainSlider;

// "use client";
// import React from "react";
// import { StyledSlider } from "./Slider.styled";
// import dynamic from "next/dynamic";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import Title from "antd/es/typography/Title";

// const Slider = dynamic(() => import("react-slick"), { ssr: false });

// interface BestSellerItem {
//   image: string;
// }

// interface MainSliderProps {
//   title: string;
//   data: BestSellerItem[];
// }

// const MainSlider: React.FC<MainSliderProps> = ({ title, data }) => {
//   const settings = {
//     dots: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <StyledSlider>
//       <div className="container">
//         <div className="main-title">
//           <Title level={2}>{title}</Title>
//         </div>
//         <div className="slider-container">
//           <Slider {...settings}>
//             {data.map((item, index) => (
//               <div key={index}>
//                 <div className="slider-box">
//                   <div className="image-box">
//                     <Image
//                       className="image"
//                       src={item.image}
//                       alt={`jewellery image ${index + 1}`}
//                       fill
//                       sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 25vw"
//                     />
//                   </div>
//                   <Title className="item-title" level={3}>
//                     Example {index + 1}
//                   </Title>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </StyledSlider>
//   );
// };

// export default MainSlider;
