import consolepic from "@/public/assets/console.png";
import { StaticImageData } from "next/image";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  MRP: number;
  imagesrc: StaticImageData;
  aosDelay: string;
};
const products: Array<Product> = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    price: 990,
    MRP: 1999,
    imagesrc: consolepic,
    aosDelay: "100",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    price: 4690,
    MRP: 7890,
    imagesrc: consolepic,
    aosDelay: "200",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3",
    price: 2990,
    MRP: 3990,
    imagesrc: consolepic,
    aosDelay: "300",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is product 4",
    price: 4590,
    MRP: 6999,
    imagesrc: consolepic,
    aosDelay: "400",
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is product 4",
    price: 4590,
    MRP: 6999,
    imagesrc: consolepic,
    aosDelay: "500",
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is product 4",
    price: 4590,
    MRP: 6999,
    imagesrc: consolepic,
    aosDelay: "600",
  },
];

export default products;
