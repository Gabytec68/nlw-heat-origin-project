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
