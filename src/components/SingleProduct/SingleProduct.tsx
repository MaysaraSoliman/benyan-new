"use client";
import React, { useEffect, useState } from "react";
import { StyledSingleProduct } from "./SingleProduct.styled";
import { Image as AntImage, Divider } from "antd";
import { useParams } from "next/navigation";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

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

  const language = "en";

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
        setMainImage(data.images[0] || "");
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
                  className="main-singleProduct-img"
                  onClick={() => setMainImage(mainImage)}
                />
              )}
            </div>

            <AntImage.PreviewGroup>
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
                      onClick={() => setMainImage(image)}
                    />
                  </div>
                ))}
              </div>
            </AntImage.PreviewGroup>
          </div>

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
            {/* <Button className="large-btn">ADD TO SHOPPING BAG</Button> */}
            {product && (
              <AddToCartBtn product={product} currentCartInputValue={1} />
            )}
          </div>
        </div>
      </div>
    </StyledSingleProduct>
  );
};

export default SingleProduct;
