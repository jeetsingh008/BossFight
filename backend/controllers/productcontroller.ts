import { Request, Response } from "express";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log({ message: (error as Error).message });
    res.status(404).json({ message: (error as Error).message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error: any) {
    console.log("error", { message: error.message });
    res.status(404).json({ message: error.message });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log({ message: (error as Error).message });
    res.status(404).json({ message: (error as Error).message });
  }
};

const updateProduct = async (req: Request, res: Request) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log({ message: (error as Error).message });
    res.status(404).json({ message: (error as Error).message });
  }
};

export const deleteProduct = async (req: Request, res: Request) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log({ message: (error as Error).message });
    res.status(404).json({ message: (error as Error).message });
  }
};
