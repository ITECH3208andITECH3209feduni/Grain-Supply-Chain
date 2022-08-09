// Encapsulate the return processing of the interface

const serverErrorHandler = (res, err) => { //Server Error Return Content Encapsulation
  res.status(500).json({
    code: 40000,
    msg: "Server is busy",
    err
  })
}
//Houyuan
const successHandler = (res, data, options = {}) => { //The request successfully returns the content encapsulation
  res.status(200).json(Object.assign({
    code: 20000,
    data,
    msg: "Request succeeded"
  }, options))
}//Houyuan

//Houyuan
module.exports = {
  serverErrorHandler,
  successHandler
}//Houyuan
