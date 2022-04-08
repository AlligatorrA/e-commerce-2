import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Aviator",
    description: `THE PILOT'S WATCH THEN AND NOW`,
    detail: "Breaking all the barriers",
    discount: 'A Fine shine leather with 40% off on 1st purchase... ',
    iconUrl: "https://logos-download.com/wp-content/uploads/2019/11/Aviator_Watches_Logo.png",
    imgUrl: 'https://i.pinimg.com/736x/a6/51/d8/a651d88a5be6faa74a957dbfb4ff88d8.jpg'
  },
  {
    _id: uuid(),
    categoryName: "Analog",
    description: `VIBE YOU JUST CANT HIDE`,
    detail: "wear brand in affordable price",
    discount: ' A Digital silicon Smart band with 29% off... ',
    iconUrl: "https://www.clipartmax.com/png/full/252-2523415_rolex-logo-transparent-background-rolex-logo-png.png",
    imgUrl: 'https://images.unsplash.com/photo-1605101232508-283d0cd4909e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9sZXh8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    _id: uuid(),
    categoryName: "Luxury",
    description: `BRANDED THOUGHT, ROYALS CHOICEr`,
    detail: "As comfertable as honey on spoon...!",
    discount: ' Silver Plated stainless stylesheet with 10% ... ',
    iconUrl: "",
    imgUrl: ' https://www.watchtime.com/wp-content/uploads/2013/09/Omega_Speedmaster_Moonwatch_black-ceramic.jpg',
    iconUrl: 'https://www.clipartmax.com/png/full/19-193680_omega-omega-logo-png.png'
  },
];
