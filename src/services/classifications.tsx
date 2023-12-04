import { makeRequest } from "@/libs/fetch";

export const getClassification = () => {
  return makeRequest("/api/service", {
    method: "GET",
    data: {
      __service: "FAASListService",
      __method: "getClassification",
      __connection: "etracs",
    },
    options: {}, // Empty object as options
  });
};
