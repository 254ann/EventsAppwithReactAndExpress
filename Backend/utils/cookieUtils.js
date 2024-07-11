// Backend/utils/cookieUtils.js
const setTokenCookie = (res, token) => {
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 3600000, // 1 hour
  });
};

const clearTokenCookie = (res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    maxAge: 3600000, // 1 hour
  });
};

module.exports = { setTokenCookie, clearTokenCookie };
