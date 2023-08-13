//setting up inbuilt JavaScript function IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-class");
    }
    /* makes Animation goes on/off depending on observation
    else entry.target.classList.remove("slide-class"); */
  });
});

// Loops over every <section>-Element with class "toSlide"
const objectsToSlide = document.querySelectorAll(".toSlide");
objectsToSlide.forEach(function (element) {
  //observes every element in this array
  observer.observe(element);
});
