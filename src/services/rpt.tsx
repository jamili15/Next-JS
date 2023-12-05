import { makeRequest } from "@/libs/fetch";

export const getClassifications = () => {
  return makeRequest("/api/rpt/classifications");
};
