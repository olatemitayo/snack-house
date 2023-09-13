export interface CartItem {
  id: string;
  img: string;
  title: string;
  number: string;
  price: string;
}

//  json-server --watch db.json --port 8000

export const cartdata: CartItem[] = [
  {
    id: "1",
    img: "/butter.png",
    title: "ORIGINAL CASHEW BUTTER",
    number: "1",
    price: "$25.43",
  },
  {
    id: "2",
    img: "/img3.png",
    title: "ORIGINAL CASHEW YOGHURT",
    number: "1",
    price: "$45.43",
  },
  {
    id: "3",
    img: "/img4.png",
    title: "ORIGINAL ROASTED CASHEW ",
    number: "1",
    price: "$15.43",
  },
];

export function calculateTotal(cartItems: CartItem[]) {
  return cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace("$", ""));
    return total + itemPrice;
  }, 0);
}

// export interface ProfileLinkItem {
//   id: string;
//   title: string;
//   link: string;
// }

// const bestSellers = [
//   {
//     id: "1",
//     alt: "yoghurt",
//     img: "/yoghurt.svg",
//     name: " ORGANIC CASHEW YOGURT",
//     origin: "DOUBLE ORIGIN",
//     price: "$12.43",
//     measure: "cup",
//   },
//   {
//     id: "2",
//     alt: "roasted",
//     img: "/roasted.svg",
//     name: "  ORGANIC ROASTED CASHEW",
//     origin: "DOUBLE ORIGIN",
//     price: "$21.43",
//     measure: "plate",
//   },
// ];

// const products = [
//   {
//     id: "2",
//     alt: "butter",
//     img: "/butter.svg",
//     name: "ORIGINAL CASHEW BUTTER",
//     origin: "SINGLE ORIGIN",
//     price: "$45.43",
//     measure: "bottle",
//   },
//   {
//     id: "1",
//     alt: "yoghurt",
//     img: "/yoghurt.svg",
//     name: "ORGANIC CASHEW YOGURT",
//     origin: "DOUBLE ORIGIN",
//     price: "$12.43",
//     measure: "cup",
//   },

//   {
//     id: "3",
//     alt: "cashew",
//     img: "/roasted.svg",
//     name: "ORIGINAL ROASTED CASHEW",
//     origin: "DOUBLE ORIGIN",
//     price: "$21.43",
//     measure: "plate",
//   },
//   {
//     id: "3",
//     alt: "cashew",
//     img: "/roasted.svg",
//     name: "ORIGINAL ROASTED CASHEW",
//     origin: "DOUBLE ORIGIN",
//     price: "$21.43",
//     measure: "plate",
//   },
//   {
//     id: "4",
//     alt: "yoghurt",
//     img: "/yoghurt.svg",
//     name: "ORGANIC CASHEW YOGURT",
//     origin: "DOUBLE ORIGIN",
//     price: "$12.43",
//     measure: "cup",
//   },
//   {
//     id: "2",
//     alt: "butter",
//     img: "/butter.svg",
//     name: "ORIGINAL CASHEW BUTTER",
//     origin: "SINGLE ORIGIN",
//     price: "$45.43",
//     measure: "bottle",
//   },
// ];
