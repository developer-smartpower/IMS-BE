var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

var indexRouter = require("./routes/index");
const authRouter = require("./src/modules/auth/auth.router");
const userManangementRouter = require("./src/modules/userManangement/userManangement.router");
const supplierRouter = require("./src/modules/suppliers/suppliers.router");
const productRouter = require("./src/modules/products/products.router");
const purchaseRouter = require("./src/modules/purchases/purchases.router");
const stockRouter = require("./src/modules/stock/stock.router");

app.use("/", indexRouter);

app.use("/auth", authRouter);
app.use("/users", userManangementRouter);
app.use("/suppliers", supplierRouter);
app.use("/products", productRouter);
app.use("/purchases", purchaseRouter);
app.use("/stocks", stockRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
