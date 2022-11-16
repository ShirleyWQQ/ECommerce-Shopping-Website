import Axios from "axios";
const base = "http://localhost:3001";
const baseUrl = `${base}/api`;

export default class Api {
  static getProduct = (pid, setter) => {
    Axios.get(`${baseUrl}/product/${pid}`)
      .then(res => {
        setter(res.data[0]);
      })
      .catch(err => {
        alert(`Failed to retrieve product ${pid}`);
      });
  }
}
