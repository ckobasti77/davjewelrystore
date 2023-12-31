import axios from "axios";

import queryString from 'query-string';

import { Product } from "@/types";


const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}


const getProducts = async (query: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    }
  })

  const res = await axios.get(url);

  const data = res.data

  return data;
};

export default getProducts;
