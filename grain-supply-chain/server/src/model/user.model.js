const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../../config');
//Houyuan
const UserSchema = new mongoose.Schema({ //Define the data type of the mongo database
  nickname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

UserSchema.pre("save", async function (next) { //Encrypt the password before storing the data
  const user = this;
  if (!user.isModified("password")) {
    return next()
  }
  const salt = await bcrypt.genSalt(config.bcrypt.saltWorkFactor) //Data encryption using the bcrypt module
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash; //Copy encrypted data to password
  return next()
})

UserSchema.methods.validatePassword = function (password, callback) { //Mount the password verification function on the model
  bcrypt.compare(password, this.password, (err, isMatch) => { //Decryption through bcrypt's compare function
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel;//Houyuan
