import Hero from "@/components/Hero/Hero";
import HeroVideo from "@/components/HeroVideo/HeroVideo";
import JewelleryHomeSlider from "@/components/JewelleryHomeSlider/JewelleryHomeSlider";
import MainSlider from "@/components/Slider/MainSlider";
import SliderCategory from "@/components/SliderCategory/SliderCategory";

// const bestSellerData = [
//   {
//     image: "/images/data/image-1.jpg",
//   },
//   {
//     image: "/images/data/image-2.jpg",
//   },
//   {
//     image: "/images/data/image-3.jpg",
//   },
//   {
//     image: "/images/data/image-4.jpg",
//   },
//   {
//     image: "/images/data/image-5.jpg",
//   },
//   {
//     image: "/images/data/image-6.jpg",
//   },
//   {
//     image: "/images/data/image-7.jpg",
//   },
// ];
const categoriesData = [
  {
    image: "/images/categoryData/image-1.jpg",
  },
  {
    image: "/images/categoryData/image-2.jpg",
  },
  {
    image: "/images/categoryData/image-3.jpg",
  },
  {
    image: "/images/categoryData/image-4.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <HeroVideo />
      <JewelleryHomeSlider link="http://localhost:4000/products?category.en=Platinum Jewellery" />
      <MainSlider
        title={"BEST SELLERS"}
        link="http://localhost:4000/products?_limit=6"
      />
      <SliderCategory title={"SHOP CATEGORY"} data={categoriesData} />
    </>
  );
}
