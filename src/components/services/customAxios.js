import axios from "axios";
const customAxios = axios.create({
  baseURL: "https://provinces.open-api.vn",
});
export default customAxios;
