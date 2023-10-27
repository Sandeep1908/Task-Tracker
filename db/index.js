module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/zap_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((res)=>{
  console.log("db connected",res)
})
