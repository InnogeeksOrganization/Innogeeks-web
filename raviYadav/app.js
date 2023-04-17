var input = document.querySelector("input");
const btn = document.querySelector(".btn");

const user = document.querySelector(".githubUser");
const joined = document.querySelector(".joinedDate");
const repo = document.querySelector(".reposTotal");
const followers = document.querySelector(".followersTotal");
const following = document.querySelector(".followingTotal");
const img = document.querySelector("img");
const block = document.querySelector(".mainImg");
const locations = document.querySelector(".locationss");
const bio = document.querySelector(".githubBio");
const twitter = document.querySelector(".twitterr");
const company = document.querySelector(".companyy");
const login = document.querySelector(".githubUserName1");
const website = document.querySelector(".websitee");
const link = document.getElementById("link");
btn.addEventListener("click", function () {
  const url = `https://api.github.com/users/${input.value}`;
  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    img.src = data.avatar_url;
    block.appendChild(img);
    block.style.border = "none";

    user.textContent = data.name;
    login.textContent = "@" + data.login;
    joined.textContent = "Joined " + data.created_at.slice(0, 10);
    repo.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following;
    bio.textContent = data.bio == null ? "The profile has no bio." : data.bio;
    locations.innerHTML =
        data.location == null ? "No Location" : data.location;
    twitter.innerHTML =
        data.twitter_username == null ? "No twitter" : "@" + data.twitter_username;
    company.innerHTML =
      data.company == null ? "No Company" : data.company;
    website.innerHTML =
        data.blog == null ? "No Website" : data.blog;
    link.href = data.html_url;
      console.log(data.blog);
    
  }
  getUrl();
});
