module.exports = function (app) {
    //Route for index page
    app.get("/", function (req, res) {
        res.render("index", {
        });
    });
    //Route for contact page
    app.get("/contactme", (req, res) => {
        res.render("contact", {

        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
}