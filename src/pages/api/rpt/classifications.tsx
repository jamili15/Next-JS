/* API-ENDPOINT /api/rpt/classifications */

import Service from "@/libs/remote-service";

import type { NextApiRequest, NextApiResponse } from "next";
import type { ResponseError } from "@/libs/fetch";

type Classifications = {
  objid: string;
  code: string;
  name: string;
};

type ResponseData = {
  Classifications?: Classifications[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  if (req.method === "GET") {
    return GET(req, res);
  }
  return res.status(500).json({ code: "01", error: "Method not implemented" });
}

async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  const svc = Service.lookup("FAASListService", "etracs");
  const list = await svc.invoke("getClassifications", null);
  const classifications = list.map((item: any) => ({
    objid: item.objid,
    code: item.code,
    name: item.name,
  }));

  console.log("\n\n====>", classifications);
  return res.status(200).json(classifications);
}
