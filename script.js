$(document).ready(function() {
  // Smooth scroll + Alert
  $("#learnMore").click(function() {
    $("html, body").animate({ scrollTop: $(".intro").offset().top + 200 }, 600);
    alert("Thanks for visiting my portfolio!");
  });

  // Dark mode toggle
  $("#theme-toggle").click(function() {
    $("body").toggleClass("dark");
    let isDark = $("body").hasClass("dark");
    $(this).text(isDark ? "☀️" : "🌙");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Remember theme
  if (localStorage.getItem("theme") === "dark") {
    $("body").addClass("dark");
    $("#theme-toggle").text("☀️");
  }
});
// Smooth scroll to About section
$("#learnMore").click(function() {
  $("html, body").animate({
    scrollTop: $(".about").offset().top - 50
  }, 800);
});
$("#profile-pic").on("error", function() {
  $(this).attr("src", "https://via.placeholder.com/150");
});
