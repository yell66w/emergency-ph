import { API } from "../utils/API";
export class NotificationService {
  async getAllMyNotifications() {
    try {
      const res = await API.get("/notifications/my-notifications", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return res.data.reverse();
    } catch (error) {}
  }
  async alertVolunteer(data, volunteer_id) {
    try {
      data = { ...data, volunteer_id };
      const res = await API.post("/notifications/create", data, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return true;
    } catch (error) {
      throw {
        message: "Invalid form submission",
      };
    }
  }
}
