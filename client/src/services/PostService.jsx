import { API } from "../utils/API";
export class PostService {
  async createPost(data) {
    try {
      const formData = new FormData();

      let hashtagRegex = data.description.match(/\#[^\s]+/g);
      let tags = hashtagRegex != null ? hashtagRegex : [];
      const photo = data.photo[0];
      formData.append("file", photo);

      data = {
        ...data,
        upvotes: 0,
        status: "PENDING",
        title: "Untitled",
        photos: [photo.name],
        tags,
      };

      const res = await API.post("/posts/create", data, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      await API.post("posts/file", formData, {
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

  async getAllPopularPosts() {
    try {
      const res = await API.get("/posts/popular", {
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
  async getAllTyphoonPostsByPopularity() {
    try {
      const res = await API.get("/posts/typhoon/popular", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {}
  }
  async getAllFirePostsByPopularity() {
    try {
      const res = await API.get("/posts/fire/popular", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {}
  }
  async getAllEarthquakePostsByPopularity() {
    try {
      const res = await API.get("/posts/earthquake/popular", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {}
  }
  async getAllCrimePostsByPopularity() {
    try {
      const res = await API.get("/posts/crimes/popular", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      console.log(res.data);
      return res.data;
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
  async upvote(id) {
    try {
      const res = await API.put(
        "/posts/popular/upvote/add",
        { id },
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  async getUserPostRelationship(id) {
    try {
      const res = await API.get(`/posts/user/relation/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
}
