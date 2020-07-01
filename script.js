var quoteSection = document.getElementById("quote-section");

fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    quoteSection.innerHTML =
      "<div>" + res[0].quote + "</div>" + "<h4>" + res[0].author + "</h4>";
  });
