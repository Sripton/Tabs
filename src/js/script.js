window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab__item"),
    tab__items = document.querySelector(".tab__items"),
    contents = document.querySelectorAll(".content");

  function hideTabs() {
    contents.forEach((content) => {
      content.style.display = "none";
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  }
  hideTabs();

  function showTabs(index) {
    contents[index].style.display = "block";
    tabs[index].classList.add("active");
  }
  showTabs(0);

  tab__items.addEventListener("click", (e) => {
    if (e.target || e.target.classList.contains("tab__item")) {
      tabs.forEach((tab, index) => {
        if (e.target === tab) {
          hideTabs();
          showTabs(index);
        }
      });
    }
  });
});
