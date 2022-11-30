const handleDarkModeChange = (isDark) => {
  if (isDark) {
    console.log("DARKMODE");
    for (const doc of document.getElementsByClassName("product-card")) {
      doc.style.background = "#000000"
    }
    console.log(document.body.style.background = "#000000");
  } else {
    console.log("LIGHTMODE");
    console.log(document.body.style.background = "white");
  }
};

export default handleDarkModeChange;