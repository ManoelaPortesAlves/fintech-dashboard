export function useAuth() {
  function login() {
    localStorage.setItem("auth", "true");
  }
  function logout() {
    localStorage.removeItem("auth");
  }
  return { login, logout };
}
