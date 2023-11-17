import { Color } from "@/types";
import axios from "axios";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await axios.get(URL);

  const data = res.data

  return data;
};

export default getColors;
