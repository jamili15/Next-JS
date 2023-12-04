import Service from "@/libs/remote-service.js";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  data: {};
};

/*====================================================
* fields:
* __partnerid = local call if not specified
* __service, __method, __connection, 
====================================================*/
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    return GET(req, res);
  } else if (req.method === "POST") {
    return POST(req, res);
  }
  return res.status(503).json({ data: { error: "Service unavailable" } });
}

/*====================================================
* fields:
* __partnerid = local call if not specified
* __service, __method, __connection, 
====================================================*/
const GET = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  let params: any | undefined = { ...req.query };
  const { __partnerid, __service, __method, __connection = "default" } = params;

  delete params.__partnerid;
  delete params.__service;
  delete params.__method;
  delete params.__connection;

  if (Object.keys(params).length === 0) {
    params = undefined;
  }

  try {
    let svc = undefined;
    if (__partnerid) {
      svc = Service.lookup(`${__partnerid}:${__service}`, __connection);
    } else {
      svc = Service.lookup(`${__service}`, __connection);
    }
    const data = await svc.invoke(__method, params);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ data: { error: err } });
  }
};

const POST = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const data = await req.body();
  const { __partnerid, __service, __method, __connection, params } = data;

  try {
    let svc = undefined;
    if (__partnerid) {
      svc = Service.lookup(`${__partnerid}:${__service}`, __connection);
    } else {
      svc = Service.lookup(`${__service}`, __connection);
    }
    const data = await svc.invoke(__method, params);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ data: { error: err } });
  }
};
