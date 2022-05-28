export const auth = {
  secret:
    String(process.env.SECRET) ||
    "8fd68707bffece116ce56b886f85436cdc0bb88cc51cc80749163ae781909f58",
  expires: String(process.env.TOKEN_EXPIRE_IN) || "4h",
};
