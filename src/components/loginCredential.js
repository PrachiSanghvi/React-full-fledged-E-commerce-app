const TOKENKEY = 'prachi';
export const login = () => {
  localStorage.setItem(TOKENKEY, "User login")
}
export const logout = () => {
  localStorage.removeItem(TOKENKEY)
}
export const isLogin = () => {
  if (localStorage.getItem(TOKENKEY)) {
    return true;
  }
  return false;
}