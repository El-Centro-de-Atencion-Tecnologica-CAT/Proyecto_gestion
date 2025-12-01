import { login } from "./auth.js";
console.log("Test login:", login("admin", "123") === "login_success");
