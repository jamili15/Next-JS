import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  data: {};
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  return res.status(200).json({ data: { message: "hello!" } });
}
