import axios from "axios";
const API_URL = "http://localhost:8000";

export default class AdminsService {
  getAdmin() {
    const url = `${API_URL}/api/admin/`;
    return axios.get(url).then((response) => response.data);
  }
  getAdminByURL(link) {
    const url = `${API_URL}${link}`;
    return axios.get(url).then((response) => response.data);
  }
  getAdmin(pk) {
    const url = `${API_URL}/api/admin/${pk}`;
    return axios.get(url).then((response) => response.data);
  }
  deleteAdmin(admin) {
    const url = `${API_URL}/api/admin/${admin.pk}`;
    return axios.delete(url);
  }
  createAdmin(admin) {
    const url = `${API_URL}/api/admin/`;
    return axios.post(url, admin);
  }
  updateAdmin(admin) {
    const url = `${API_URL}/api/admin/${admin.pk}`;
    return axios.put(url, admin);
  }
}
