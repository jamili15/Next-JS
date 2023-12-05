import { makeRequest } from "@/libs/fetch";

export const getClassifications = () => {
  return makeRequest("/api/service", {
    method: "GET",
    data: {
      __service: "FAASListService",
      __method: "getClassifications",
      __connection: "etracs",
    },
  });
};
