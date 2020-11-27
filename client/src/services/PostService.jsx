import { API } from "../utils/API";
export class PostService {
  async createPost(data) {
    try {
      let hashtagRegex = data.description.match(/\#[^\s]+/g);
      let tags = hashtagRegex != null ? hashtagRegex : [];

      data = {
        ...data,
        upvotes: 0,
        status: "PENDING",
        title: "Untitled",
        photos: ["image.jpg", "image2.jpeg"],
        tags,
      };
      const res = await API.post("/posts/create", data, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return true;
    } catch (error) {
      throw {
        message: "Invalid form submission",
      };
    }
  }

  async getAllPosts() {
    try {
      const res = await API.get("/posts", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return res.data.reverse();
    } catch (error) {}
  }
  async getAllTyphoonPosts() {
    try {
      const res = await API.get("/posts/typhoon", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      console.log(res.data);
      return res.data.reverse();
    } catch (error) {}
  }
  async getAllFirePosts() {
    try {
      const res = await API.get("/posts/fire", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      console.log(res.data);
      return res.data.reverse();
    } catch (error) {}
  }
  async getAllQuakePosts() {
    try {
      const res = await API.get("/posts/earthquake", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      console.log(res.data);
      return res.data.reverse();
    } catch (error) {}
  }
  async getAllCrimePosts() {
    try {
      const res = await API.get("/posts/crimes", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      console.log(res.data);
      return res.data.reverse();
    } catch (error) {}
  }
}
