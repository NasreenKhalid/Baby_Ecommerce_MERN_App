// create express server
const express = require('express');
const app = express();
// connect to mongo server
const mongoose = require('mongoose')
const dotenv = require('dotenv');
// import router
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')
const path = require('path')

var cors = require('cors')

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB successful connection'))
.catch((err)=>console.log(err))

// create our routes
// app.get("/api/test", () => {
//     console.log("testing")
// })
app.use(cors())
app.use(express.json())

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use('/api/checkout', stripeRoute)

/*
app.use(express.static(path.resolve(process.cwd(), '/client/build')))
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(process.cwd(), '/client/build/index.html'))
    })
*/

app.use(express.static(path.join(__dirname,"client", "build")));
app.get('*',(req,res)=> {
  res.sendFile(path.join(__dirname,"client", "build", "index.html"));
});
console.log(__dirname);
// app.use((req, res, next) => {
//   const error = new Error("Not found");
//   error.status = 404;
//   next(error);
// });

app.listen(process.env.PORT || 5000,() => {
    console.log("Server running on port 5000")
});

