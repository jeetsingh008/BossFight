import consolepic from "@/public/assets/console.png"
import { StaticImageData } from "next/image";

type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    MRP: number,
    imagesrc: StaticImageData;
}
const products: Array<Product> = [
    {
      id: 1,
      name: "Product 1",
      description: "This is product 1",
      price: 990,
      MRP: 1999,
      imagesrc: consolepic
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is product 2",
      price: 4690,
      MRP: 7890,
      imagesrc: consolepic
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is product 3",
      price: 2990,
      MRP: 3990,
      imagesrc: consolepic
    },
    {
      id: 4,
      name: "Product 4",
      description: "This is product 4",
      price: 4590,
      MRP: 6999,
      imagesrc: consolepic
    },

]

export default products;