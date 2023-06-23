const url =
"https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=Y431ITMYNB45WYH9";
fetch(url)
.then((response) => response.json())
.then((stockData) => {
  const newsItems = [
    document.getElementById("stockText1"),
    document.getElementById("stockText2"),
    document.getElementById("stockText3"),
    document.getElementById("stockText4"),
    document.getElementById("stockText5"),
  ];
  for (let i = 0; i < 5; i++) {
    const newsText = stockData.feed[i].title;
    const url = stockData.feed[i].url;
    stockTextElements[i].innerHTML = newsText;

    // Assign click event handler to each link
    links[i].addEventListener("click", () => {
      window.open(url, "_blank"); // Open the URL in a new tab/window
    });
  }
});
