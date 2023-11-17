import { Product as ProductType } from "@/types";
import axios from "axios";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<ProductType> => {
  const res = await axios.get(`${URL}/${id}`);

  const data = res.data

  return data;
};

export default getProduct;
