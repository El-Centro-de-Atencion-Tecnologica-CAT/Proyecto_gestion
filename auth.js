export function login(user, pass) {
  return user === "admin" && pass === "123" ? "login_success" : "error";
}
