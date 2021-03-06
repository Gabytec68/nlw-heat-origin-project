const linksSocialMidia = {
  github: "Gabytec68",
  youtube: "channel/UCDZtGoyOxj_itJPBCTRx65g",
  instagram: "gabytec",
  facebook: "Gabytec1968",
  twitter: "AmadoriGabriela",
};

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`;
  }
}

changeSocialMidiaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
