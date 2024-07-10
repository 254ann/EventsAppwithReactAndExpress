const setTokenCookie = (res, token) => {
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 3600000,
    // You can add other cookie options if needed
  });
};