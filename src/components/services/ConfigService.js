import customAxios from "../services/customAxios";
export const getApiProvinceService = () => {
  return customAxios.get("/api/?depth=1");
};
