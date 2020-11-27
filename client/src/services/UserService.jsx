import { API } from "../utils/API";
export class UserService {
  async getAllVolunteers() {
    try {
      const res = await API.get("/users/volunteers", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return res.data;
    } catch (error) {}
  }
}
