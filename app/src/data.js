export const data = {
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
      id: "xx99-mark-two-headphones",
      route: "XX99-2",
      headerName: "XX99 MARK II HEADPHONES",
      info: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      mobile: "/assets/category-headphones/mobile/image-xx99-mark-two.jpg",
      tablet: "/assets/category-headphones/tablet/image-xx99-mark-two.jpg",
      desktop: "/assets/category-headphones/desktop/image-xx99-mark-two.jpg",
    },
    {
      id: "xx99-mark-one-headphones",
      route: "XX99-1",
      headerName: "XX99 MARK I HEADPHONES",
      info: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      mobile: "/assets/category-headphones/mobile/image-xx99-mark-one.jpg",
      tablet: "/assets/category-headphones/tablet/image-xx99-mark-one.jpg",
      desktop: "/assets/category-headphones/desktop/image-xx99-mark-one.jpg",
    },
    {
      id: "XX59-headphones",
      route: "XX59-headphones",
      headerName: "XX59 HEADPHONES",
      info: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      mobile: "/assets/category-headphones/mobile/image-xx59.jpg",
      tablet: "/assets/category-headphones/tablet/image-xx59.jpg",
      desktop: "/assets/category-headphones/desktop/image-xx59.jpg",
    },
  ],
  speakers: [
    {
      id: "zx9-speaker",
      headerName: "ZX9 SPEAKER",
      info: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      mobile: "/assets/category-speakers/mobile/image-zx9.jpg",
      tablet: "/assets/category-speakers/tablet/image-zx9.jpg",
      desktop: "/assets/category-speakers/desktop/image-zx9.jpg",
    },
    {
      id: "zx7-speaker",
      headerName: "ZX7 SPEAKER",
      info: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      mobile: "/assets/category-speakers/mobile/image-zx7.jpg",
      tablet: "/assets/category-speakers/tablet/image-zx7.jpg",
      desktop: "/assets/category-speakers/desktop/image-zx7.jpg",
    },
  ],
  earphones: [
    {
      id: "yx1-earphones",
      headerName: "YX1 WIRELESS EARPHONES",
      info: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      mobile: "/assets/category-earphones/mobile/image-yx1-earphones.jpg",
      tablet: "/assets/category-earphones/tablet/image-yx1-earphones.jpg",
      desktop: "/assets/category-earphones/desktop/image-yx1-earphones.jpg",
    },
  ],
};
export const products = {
  "XX59-headphones": {
    id: "XX59-headphones",
    name: "XX59 headphones",
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
  "xx99-mark-two-headphones": {
    id: "xx99-mark-two-headphones",
    name: "XX99 MARK II HEADPHONES",
    category: "Headphones",
    images: {
      headerImg: {
        mobile:
          "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
        tablet:
          "/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
        desktop:
          "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
      },
      gallery: {
        mobile: {
          large:
            "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg",
          small: [
            "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
            "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
          ],
        },
        tablet: {
          large:
            "/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg",
          small: [
            "/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg",
            "/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg",
          ],
        },
        desktop: {
          large:
            "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
          small: [
            "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
            "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
          ],
        },
      },
    },
    price: 2999,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    inTheBox: [
      "1x Headphone unit",
      "2x Replacement earcups",
      "1x User manual",
      "1x 3.5mm 5m audio cable",
      "1x Travel bag",
    ],
  },
  "xx99-mark-one-headphones": {
    id: "xx99-mark-one-headphones",
    name: "XX99 MARK I HEADPHONES",
    category: "Headphones",
    images: {
      headerImg: {
        mobile:
          "/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
        tablet:
          "/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
        desktop:
          "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
      },
      gallery: {
        mobile: {
          large:
            "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg",
          small: [
            "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg",
            "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg",
          ],
        },
        tablet: {
          large:
            "/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg",
          small: [
            "/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg",
            "/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg",
          ],
        },
        desktop: {
          large:
            "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg",
          small: [
            "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg",
            "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg",
          ],
        },
      },
    },
    price: 1750,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    inTheBox: [
      "1x Headphone unit",
      "2x Replacement earcups",
      "1x User manual",
      "1x 3.5mm 5m audio cable",
    ],
  },
  "zx9-speaker": {
    id: "zx9-speaker",
    name: "ZX9 SPEAKER",
    category: "Headphones",
    images: {
      headerImg: {
        mobile: "/assets/product-zx9-speaker/mobile/image-product.jpg",
        tablet: "/assets/product-zx9-speaker/tablet/image-product.jpg",
        desktop: "/assets/product-zx9-speaker/desktop/image-product.jpg",
      },
      gallery: {
        mobile: {
          large: "/assets/product-zx9-speaker/mobile/image-gallery-3.jpg",
          small: [
            "/assets/product-zx9-speaker/mobile/image-gallery-1.jpg",
            "/assets/product-zx9-speaker/mobile/image-gallery-2.jpg",
          ],
        },
        tablet: {
          large: "/assets/product-zx9-speaker/tablet/image-gallery-3.jpg",
          small: [
            "/assets/product-zx9-speaker/tablet/image-gallery-1.jpg",
            "/assets/product-zx9-speaker/tablet/image-gallery-2.jpg",
          ],
        },
        desktop: {
          large: "/assets/product-zx9-speaker/desktop/image-gallery-3.jpg",
          small: [
            "/assets/product-zx9-speaker/desktop/image-gallery-1.jpg",
            "/assets/product-zx9-speaker/desktop/image-gallery-2.jpg",
          ],
        },
      },
    },
    price: 4500,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    inTheBox: [
      "2x Speaker unit",
      "2x Speaker cloth panel",
      "1x User manual",
      "1x 3.5mm 10m audio cable",
      "1x 10m optical cable",
    ],
  },
  "zx7-speaker": {
    id: "zx7-speaker",
    name: "ZX7 SPEAKER",
    category: "Headphones",
    images: {
      headerImg: {
        mobile: "/assets/product-zx7-speaker/mobile/image-product.jpg",
        tablet: "/assets/product-zx7-speaker/tablet/image-product.jpg",
        desktop: "/assets/product-zx7-speaker/desktop/image-product.jpg",
      },
      gallery: {
        mobile: {
          large: "/assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
          small: [
            "/assets/product-zx7-speaker/mobile/image-gallery-1.jpg",
            "/assets/product-zx7-speaker/mobile/image-gallery-2.jpg",
          ],
        },
        tablet: {
          large: "/assets/product-zx7-speaker/tablet/image-gallery-3.jpg",
          small: [
            "/assets/product-zx7-speaker/tablet/image-gallery-1.jpg",
            "/assets/product-zx7-speaker/tablet/image-gallery-2.jpg",
          ],
        },
        desktop: {
          large: "/assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
          small: [
            "/assets/product-zx7-speaker/desktop/image-gallery-1.jpg",
            "/assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
          ],
        },
      },
    },
    price: 4500,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    inTheBox: [
      "2x Speaker unit",
      "2x Speaker cloth panel",
      "1x User manual",
      "1x 3.5mm 7.5m audio cable",
      "1x 7.5m optical cable",
    ],
  },
  "yx1-earphones": {
    id: "yx1-earphones",
    name: "YX1 WIRELESS EARPHONES",
    category: "Headphones",
    images: {
      headerImg: {
        mobile: "/assets/product-yx1-earphones/mobile/image-product.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-product.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-product.jpg",
      },
      gallery: {
        mobile: {
          large: "/assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
          small: [
            "/assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
            "/assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
          ],
        },
        tablet: {
          large: "/assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
          small: [
            "/assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
            "/assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
          ],
        },
        desktop: {
          large: "/assets/product-yx1-earphones/desktop/image-gallery-3.jpg",
          small: [
            "/assets/product-yx1-earphones/desktop/image-gallery-1.jpg",
            "/assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
          ],
        },
      },
    },
    price: 4500,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    inTheBox: [
      "2x Earphone unit",
      "6x Multi-size earplugs",
      "1x User manual",
      "1x USB-C charging cable",
      "1x Travel pouch",
    ],
  },
};
