function useAuth() {
  const auth = localStorage.getItem("token");

  return auth ? true : false;
}

export default useAuth;
