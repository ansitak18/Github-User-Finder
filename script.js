const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
document.querySelector(".profile-card").style.display = "flex";
//Elements

const avatar = document.getElementById("avatar");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const profileLink = document.getElementById("profileLink");

// Fetch function 
async function getUser(usernameValue) {
    try {
        const response = await fetch(`https://api.github.com/users/${usernameValue}`);

        if (!response.ok) {
            throw new Error("User Not found");
        }
        const data = await response.json();
       //Update UI
       avatar.src = data.avatar_url;
       username.textContent = data.login;
       bio.textContent = data.bio || "No bio available";
       repos.textContent = data.public_repos;
       followers.textContent = data.followers;
       following.textContent = data.following;
       profileLink.href = data.html_url;

    }
     catch (error) {
        alert(error.message);
     }
}

//Button click
button.addEventListener("click", () => {
    const user = input.value.trim();
    if (user !== ""){
       getUser(user);
     }
});

//Enter Key support
 input.addEventListener("keypress", (e)=>{
    if (e.key == "Enter"){
        const user = input.value.trim();
        if(user !== ""){
            getUser(user);
        }
    }
 });