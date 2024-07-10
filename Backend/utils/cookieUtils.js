const setTokenCookie = (res, token) => {
  return res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 3600000,
  });
};