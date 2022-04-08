import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    rating: 5,
    categories: "analog",
    brand: "rolax",
    price: 8000,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:
      "https://cdn.shopify.com/s/files/1/1193/6186/products/Screen_Shot_2019-07-06_at_12.09.22_PM_large.png?v=1563571257",
    discount: 40
  },
  {
    _id: uuid(),
    rating: 4,
    categories: "digital",
    brand: "omega",
    price: 6000,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:
      "https://images.casiocdn.com/fit-in/1200x1200/gshock-v2/resource/images/backgrounds/digitalv2_banner_3_hd.jpg",
    discount: 20
  },
  {
    _id: uuid(),
    rating: 3,
    categories: "quartz",
    brand: "rolax",
    price: 12000,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:
      "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2018/08/750x800mobile-mast-1.jpg",
    discount: 40
  },
  {
    _id: uuid(),
    rating: 5,
    categories: "analog",
    brand: "patekPhilippe",
    price: 10000,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2466435/2020/2/27/0b8e7b6b-f912-4f82-9536-80544b9127631582784256862-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-1721582784-1.jpg",
    discount: 50
  },
  {
    _id: uuid(),
    rating: 5,
    categories: "luxury",
    brand: "rolax",
    price: 19000,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:
      "https://cdn.tatlerasia.com/asiatatler/i/hk/2020/09/04161923-lm-thunderdome-mbf_cover_2000x1503.jpg",
    discount: 10
  },
  {
    _id: uuid(),
    rating: 3,
    categories: "avaitor",
    brand: "patekPhilippe",
    price: 7600,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1IHQwaUZjhs7Gd_lquDx-LfflN_iVYMNug&usqp=CAU",
    discount: 22
  },
  {
    _id: uuid(),
    rating: 4,
    categories: "quartz",
    brand: "omega",
    price: 16500,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:
      "https://www.omegawatches.com/media/wysiwyg/Push-catalog-DSotM-Apollo8-800x640.jpg",
    discount: 35
  },
  {
    id: uuid(),
    rating: 5,
    categories: "avaitor",
    brand: "rolax",
    price: 7000,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMh8n6BCcF4ssRQ8L9ce7JTVworXRq-HPYcHa7rh-7p79L6Vqjzds7UDbwesVHqIDRV0&usqp=CAU",
    discount: 18
  },
  {
    id: uuid(),
    rating: 2,
    categories: "luxury",
    brand: "blancpain",
    price: 9300,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "https://cdn.luxuo.com/2013/04/Hublot-MP-05-LaFerrari.jpg",
    discount: 43
  },
  {
    _id: uuid(),
    rating: 1,
    categories: "digital",
    brand: "blancpain",
    price: 14600,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:
      "https://rukminim2.flixcart.com/image/714/857/kh0vonk0-0/watch/o/d/o/njxw-5640-black-rubber-strap-apple-led-square-dial-digital-watch-original-imafx4nmnwag2vgf.jpeg?q=50",
    discount: 15
  },
  {
    _id: uuid(),
    rating: 4,
    categories: "quartz",
    brand: "omega",
    price: 12500,
    description: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:
      "https://www.omegawatches.com/media/wysiwyg/Push-catalog-DSotM-thecollection-800x640.jpg",
    discount: 18
  }
];
