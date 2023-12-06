import { makeRequest } from "@/libs/fetch";

export const getClassifications = () => {
  return makeRequest("/api/rpt/classifications");
};

export const saveClassifications = (classification = {}) => {
  return makeRequest("/api/rpt/classifications", {
    method: "POST",
    data: classification,
  });
};
