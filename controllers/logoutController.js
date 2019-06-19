module.exports = (req, res) => {
  if (req.session.user && req.cookies.indCookie) {
    res.clearCookie("indCookie");
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
};