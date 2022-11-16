import Axios from "axios";
const base = "http://localhost:3001";
const baseUrl = `${base}/api`;
function getUrl(sortIndex, rating, categories) {
  let url = `${baseUrl}/products?`;
  switch (sortIndex) {
    case 1: // Price ASC
      url = `${url}&sortfield=price&sortorder=asc`;
      break;
    case 2: // Price DESC
      url = `${url}&sortfield=price&sortorder=desc`;
      break;
    case 3: // Rating ASC
      url = `${url}&sortfield=rating&sortorder=asc`;
      break;
    case 4: // Rating DESC
      url = `${url}&sortfield=rating&sortorder=desc`;
      break;
    default:
  }
  if (rating > 0) {
    url = `${url}&rating=${rating}`;
  }
  if (categories.length > 0) {
    url = `${url}&category=${categories.join(",")}`;
  }
  console.log(url);
  return url;
}
export default class Api {
  static async getProduct(pid) {
    try {
      const res = await Axios.get(`${baseUrl}/product/${pid}`)
      debugger;
      return res.data[0];
    } catch (err) {
      throw err;
    }
  }
  static async getProducts(sortIndex, ratingIndex, selectedCategory) {
    const url = getUrl(sortIndex, ratingIndex, selectedCategory);
    try {
      const res = await Axios.get(url)
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  static async getCategories() {
    try {
      const res = await Axios.get(`${baseUrl}/categories`)
      return res.data
    } catch (err) {
      throw err;
    }
  }
  static async login(username, password) {
    const loginUrl = "http://localhost:3001/api/user/login";
    const body = {
      username,
      password
    };
    try {
      const res = await Axios.post(loginUrl, body);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  static logError(err) {
    alert(err);
  }
}
