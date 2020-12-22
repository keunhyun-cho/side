const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://keunhyun:qlxkals1>u@tmax.2z5hj.mongodb.net/<dbname>?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('MongoDB connected...'))
 .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요 반가워요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})