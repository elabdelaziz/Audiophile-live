const data = {
  categories: [
    {
      id: 1,
      name: "HEADPHONES",
      image: "/assets/shared/desktop/image-headphones.png",
    },
    {
      id: 2,
      name: "SPEAKERS",
      image: "/assets/shared/desktop/image-speakers.png",
    },
    {
      id: 3,
      name: "EARPHONES",
      image: "/assets/shared/desktop/image-earphones.png",
    },
  ],
  headphones: [
    {
      id: 4,
      headerName: "XX99 MARK II HEADPHONES",
      info: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      mobile: "/assets/category-headphones/mobile/image-xx99-mark-two.jpg",
      tablet: "/assets/category-headphones/tablet/image-xx99-mark-two.jpg",
      desktop: "/assets/category-headphones/desktop/image-xx99-mark-two.jpg",
    },
    {
      id: 5,
      headerName: "XX99 MARK I HEADPHONES",
      info: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      mobile: "/assets/category-headphones/mobile/image-xx99-mark-one.jpg",
      tablet: "/assets/category-headphones/tablet/image-xx99-mark-one.jpg",
      desktop: "/assets/category-headphones/desktop/image-xx99-mark-one.jpg",
    },
    {
      id: 6,
      headerName: "XX59 HEADPHONES",
      info: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      mobile: "/assets/category-headphones/mobile/image-xx59.jpg",
      tablet: "/assets/category-headphones/tablet/image-xx59.jpg",
      desktop: "/assets/category-headphones/desktop/image-xx59.jpg",
    },
  ],
  speakers: [
    {
      id: 7,
      headerName: "ZX9 SPEAKER",
      info: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      mobile: "/assets/category-speakers/mobile/image-zx9.jpg",
      tablet: "/assets/category-speakers/tablet/image-zx9.jpg",
      desktop: "/assets/category-speakers/desktop/image-zx9.jpg",
    },
    {
      id: 8,
      headerName: "ZX7 SPEAKER",
      info: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      mobile: "/assets/category-speakers/mobile/image-zx7.jpg",
      tablet: "/assets/category-speakers/tablet/image-zx7.jpg",
      desktop: "/assets/category-speakers/desktop/image-zx7.jpg",
    },
  ],
  earphones: [
    {
      id: 9,
      headerName: "YX1 WIRELESS EARPHONES",
      info: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      mobile: "/assets/category-earphones/mobile/image-yx1-earphones.jpg",
      tablet: "/assets/category-earphones/tablet/image-yx1-earphones.jpg",
      desktop: "/assets/category-earphones/desktop/image-yx1-earphones.jpg",
    },
  ],
};
const products = [
  {
    id: "10",
    name: "xx59 headphones",
    category: "Headphones",
    images: {
      headerImg: {
        mobile: "/assets/product-xx59-headphones/mobile/image-product.jpg",
        tablet: "/assets/product-xx59-headphones/tablet/image-product.jpg",
        desktop: "/assets/product-xx59-headphones/desktop/image-product.jpg",
      },
      gallery: {
        mobile: {
          large: "/assets/product-xx59-headphones/mobile/image-gallery-3.jpg",
          small: [
            "/assets/product-xx59-headphones/mobile/image-gallery-1.jpg",
            "/assets/product-xx59-headphones/mobile/image-gallery-2.jpg",
          ],
        },
        tablet: {
          large: "/assets/product-xx59-headphones/tablet/image-gallery-3.jpg",
          small: [
            "/assets/product-xx59-headphones/tablet/image-gallery-1.jpg",
            "/assets/product-xx59-headphones/tablet/image-gallery-2.jpg",
          ],
        },
        desktop: {
          large: "/assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
          small: [
            "/assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
            "/assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
          ],
        },
      },
    },
    price: 899,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    inTheBox: [
      "1x Headphone unit",
      "2x Replacement earcups",
      "1x User manual",
      "1x 3.5mm 5m audio cable",
    ],
  },
];
export default data;
