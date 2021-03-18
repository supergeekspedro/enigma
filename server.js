const express = require("express")
const path = require("path")

const app = express()
const port = process.env.PORT || 8080

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "/views"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/public", express.static(path.join(__dirname, "public")))

app.get("/", function(req, res) {
    res.render("index.pug")
})

app.get("/inicio", function(req, res) {
    res.render("01.pug")
})

app.get("/livros", function(req, res) {
    res.render("02.pug")
})

app.get("/regras", function(req, res) {
    res.render("03.pug")
})

app.get("/sabios", function(req, res) {
    res.render("04.pug")
})

app.get("/sapos", function(req, res) {
    res.render("final.pug")
})

app.get("/error", function(req, res) {
    res.render("error.pug")
})

app.get("*", function(req, res) {
    res.redirect("/error")
})

app.post("/", function(req, res) {
    const password = req.body.password
    if (password == "livros")
        res.redirect("/livros")
    else if (password == "regras")
        res.redirect("/regras")
    else if (password == "sabios")
        res.redirect("/sabios")
    else if (password == "sapos")
        res.redirect("/sapos")
    else
        res.redirect("/error")
})

app.listen(port, function() {
    console.log("SERVER ON")
})