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
  data?: {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  if (req.method === "GET") {
    return GET(req, res);
  } else if (req.method === "POST") {
    return POST(req, res);
  }
  return res.status(500).json({ code: "01", error: "Method not implemented" });
}

async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  //get data passed by client in the body
  const classification = req.body;
  classification._schemaname = "propertyclassification";
  classification.state = "DRAFT";

  console.log("\n\n===> classification", classification);

  const svc = Service.lookup("PersistenceService", "etracs");
  const retval = await svc.invoke("create", classification);
  console.log("\n\n===> retval", retval);
  if (retval.status === "ERROR") {
    return res.status(200).json({ code: "02", error: retval.msg });
  }
  return res.status(200).json({ data: retval });
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

  await sleep(2);

  console.log("\n\n====>", classifications);
  return res.status(200).json(classifications);
  // return res.status(200).json({ code: "01", error: "Test Error" });
}

async function sleep(sec: number) {
  return new Promise((resolve) => {
    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
      resolve(sec);
    }, sec * 1000);
  });
}
