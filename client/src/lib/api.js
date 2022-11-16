import Axios from "axios";
const base = "http://localhost:3001";
const baseUrl = `${base}/api`;

// Refer to ProductListPage
function getProductsFiltering(sortIndex, rating, categories) {
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
  if (categories && categories.length > 0) {
    url = `${url}&category=${categories.join(",")}`;
  }
  console.log(url);
  return url;
}
export default class Api {
  static async getProduct(pid) {
    try {
      const res = await Axios.get(`${baseUrl}/product/${pid}`);
      return res.data[0];
    } catch (err) {
      throw err;
    }
  }
  static async getProducts(sortIndex, ratingIndex, selectedCategory) {
    const url = getProductsFiltering(sortIndex, ratingIndex, selectedCategory);
    try {
      const res = await Axios.get(url)
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  static async getCategories() {
    try {
      const res = await Axios.get(`${baseUrl}/categories`);
      return res.data
    } catch (err) {
      throw err;
    }
  }
  static async login(username, password) {
    try {
      const body = {
        username,
        password
      };
      const res = await Axios.post(`${baseUrl}/user/login`, body);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  static async getComments(pid) {
    try {
      const res = await Axios.get(`${baseUrl}/product/${pid}/comments`);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  static async deleteProduct(pid) {
    try {
      const res = await Axios.delete(`${baseUrl}/product/${pid}`)
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  static logError(err) {
    alert(err);
  }
}
