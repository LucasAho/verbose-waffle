module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        res.render("index", {
        });
    });
    app.get("/contactme", (req, res) => {
        res.render("contact", {

        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
}