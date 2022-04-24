const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 4000;
const port = 4000;
var db = require("./db.json");

server.use(middlewares);
server.use(router);
server.listen(port);
server.use(
  jsonServer.rewriter({
    "/api/users": "/users",
  })
);
server.use(jsonServer.bodyParser);

server.get("/get/user", (req, res) => {
  let userId = req.query["userId"];

  if (userId != null && userId >= 0) {
    let result = db.users.find((user) => {
      return user.userId == userId;
    });

    if (result) {
      let { id, ...user } = result;
      res.status(200).jsonp(user);
    } else {
      res.status(400).jsonp({
        error: "Bad userId",
      });
    }
  } else {
    res.status(400).jsonp({
      error: "No valid userId",
    });
  }
});

server.get("/users", (req, res) => {
  try {
    const users = db.users;
    if (users.length > 0) res.status(200).jsonp(users);
    res.status(400).jsonp({ error: "No users" });
  } catch (err) {
    console.log(err);
  }
});
