import { Size } from "@/types";
import axios from "axios";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await axios.get(URL);

  const data = res.data

  return data;
};

export default getSizes;
