import { Billboard as BillboardType } from "@/types";
import axios from "axios";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string | undefined): Promise<BillboardType> => {
  const res = await axios.get(`${URL}/${id}`);

  const data = res.data

  return data;
};

export default getBillboard;
