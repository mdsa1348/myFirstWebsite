function welcome() {
    window.open("https://getbootstrap.com/docs/5.0/");
}
function alartMsz() {
    alert("You shouldn't be click that, now u have to pay for that.");
}

function toggleDetails() {
    var details = document.getElementById('details');
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}
window.onclick = function(event) {
    var details = document.getElementById('details');
    if (event.target == details) {
      toggleDetails();
    }
  };
  function toggleCloseDetails()
  {
    exit(0);
  }

  var upButton = document.getElementById("upButton");

  // Show the up button when user scrolls down 200 pixels
  window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
      upButton.style.display = "block";
    } else {
      upButton.style.display = "none";
    }
  };

  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  function submitForm() {
    var name = document.getElementById("name").value;
    var userId = document.getElementById("userId").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;

    // You can now do further processing with the form data
    // For example, you can send it to a server or display it on the page
    console.log("Name: " + name);
    console.log("User ID: " + userId);
    console.log("Email: " + email);
    console.log("Comments: " + comments);

    // Clear the form fields after submission (optional)
    document.getElementById("name").value = "";
    document.getElementById("userId").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comments").value = "";
  }

  //darkbtn
  function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }