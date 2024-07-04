const setTokenCookie = (res, token) =>{
  res.cookie('jwt', token,{
    httpOnly:true,
    maxAge:3600000
  });
};

module.exports = {setTokenCookie}
  