document.addEventListener("DOMContentLoaded", function () {
  const inputContent = document.getElementById("input").value;
  const Button = document.getElementById("button");
  const facebookDebbugerLink =
    "https://developers.facebook.com/tools/debug/?q=";
  const linkedinDebbugerLink =
    "https://www.linkedin.com/post-inspector/inspect/";

  function executeFunction() {
    const slash = /[/]/g;
    const colon = /[:]/g;
    // const reSlash = new RegExp(replace, "%2F");
    const linkValue = document.getElementById("input").value;
    const linkWithoutSlash = linkValue.replace(slash, "%2F");
    const linkWithoutColon = linkWithoutSlash.replace(colon, "%3A");
    console.log(linkValue.replace(slash, "%2F"));

    window.open(facebookDebbugerLink + linkWithoutColon, "_blank");
    window.open(linkedinDebbugerLink + linkWithoutSlash, "_blank");
  }
  Button.addEventListener("click", executeFunction);
});
