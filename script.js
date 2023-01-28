function openMenu(evt, menuName) {
    var i, tabcontent, sidebar;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    sidebar = document.getElementsByClassName("sidebar");
    for (i = 0; i < sidebar.length; i++) {
      sidebar[i].className = sidebar[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
  }

