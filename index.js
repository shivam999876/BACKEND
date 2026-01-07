require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "shivam999876",
  id: 93633751,
  node_id: "U_kgDOBZS81w",
  avatar_url: "https://avatars.githubusercontent.com/u/93633751?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/shivam999876",
  html_url: "https://github.com/shivam999876",
  followers_url: "https://api.github.com/users/shivam999876/followers",
  following_url:
    "https://api.github.com/users/shivam999876/following{/other_user}",
  gists_url: "https://api.github.com/users/shivam999876/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/shivam999876/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/shivam999876/subscriptions",
  organizations_url: "https://api.github.com/users/shivam999876/orgs",
  repos_url: "https://api.github.com/users/shivam999876/repos",
  events_url: "https://api.github.com/users/shivam999876/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/shivam999876/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "SHIVAM KUMAR",
  company: null,
  blog: "",
  location: "Dumka, Jharkhand",
  email: null,
  hireable: null,
  bio: "LEARN & CODE",
  twitter_username: "shivam999876",
  public_repos: 48,
  public_gists: 0,
  followers: 3,
  following: 3,
  created_at: "2021-11-03T03:42:12Z",
  updated_at: "2026-01-05T16:20:40Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("shivamdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
