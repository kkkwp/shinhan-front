import axios from "axios";

// const SERVER_URL = "http://localhost:3001";
const SERVER_URL = "https://raw.githubusercontent.com/congchu/shinhan-front/main/src/data/db.json";

/** 해외주식 이벤트 리스트 GET API 호출 */
export const getStockGlobalEvents = () => {
  // return axios
  //   .get(`${SERVER_URL}/globalStockEvents`)
  //   .then((response) => response.data);
  return axios
    .get(`${SERVER_URL}`)
    .then((response) => response.data.globalStockEvents);
};