import { API } from "../utils/API";
export class AuthService {
  async signIn(username, password) {
    try {
      const res = await API.post("/users/authenticate", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.error(error.message);
      throw {
        message: "Wrong username/password",
      };
    }
  }
  async signUp(firstName, lastName, username, password) {
    try {
      const res = await API.post("/users/register", {
        firstName,
        lastName,
        username,
        password,
      });
    } catch (error) {
      throw {
        message: "Sorry, Please try again!",
      };
    }
  }
  async checkAuthenticated() {
    try {
      const res = await API.get("/users/current", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  }

  signOut() {
    localStorage.removeItem("token");
  }
}
