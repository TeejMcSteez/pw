function toggleMenu() {
  let content = document.getElementById("dropdownContent");

  let bar1 = document.getElementById("bar1");
  let bar2 = document.getElementById("bar2");
  let bar3 = document.getElementById("bar3");

  if (content.style.display === "flex") {
    // Hide dropdown content
    content.style.display = "none";
    // Reset bars
    bar1.style.transform = "rotate(0deg)";
    bar2.style.opacity = "100";
    bar3.style.transform = "rotate(0deg)";
    bar3.style.translate = "0px 0px";
  } else {
    // Dropdown content into flex column menu
    content.style.display = "flex";
    content.style.flexDirection = "column";
    // Rotate top and bottom bars 45 def inward.
    // Translate bar3  up 10px to make an X.
    bar1.style.transform = "rotate(-45deg)";
    bar2.style.opacity = "0";
    bar3.style.transform = "rotate(45deg)";
    bar3.style.translate = "0px -22px";
  }
}
