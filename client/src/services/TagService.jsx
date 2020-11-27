import { API } from "../utils/API";
export class TagService {
  async getAllTags() {
    try {
      const res = await API.get("/tags", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return res.data;
    } catch (error) {
      return false;
    }
  }
  async getPopularTags() {
    try {
      const res = await API.get("/tags/popular", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return res.data;
    } catch (error) {
      return false;
    }
  }
  async getAllPostsByTagById(id) {
    try {
      const res = await API.get(`/tags/post/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return res.data;
    } catch (error) {
      return false;
    }
  }
  async getAllPostsByTagByName(name) {
    try {
      const res = await API.get(`/tags/post/name/${name}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return res.data;
    } catch (error) {
      return false;
    }
  }
}
