document.getElementById("year").textContent = new Date().getFullYear();

const tickerValues = [
  { label: "BTC", value: "+4.2%" },
  { label: "ETH", value: "+2.8%" },
  { label: "SOL", value: "+7.5%" },
  { label: "LINK", value: "-1.3%" },
  { label: "MATIC", value: "+3.9%" }
];

const ticker = document.querySelector(".ticker-inner");
if (ticker) {
  const items = [...ticker.children];
  items.forEach((item, index) => {
    if (index % 2 === 0) {
      const data = tickerValues[index / 2];
      if (data) {
        item.textContent = data.label;
      }
    } else {
      const data = tickerValues[Math.floor(index / 2)];
      if (data) {
        item.textContent = data.value;
        item.classList.toggle("up", !data.value.startsWith("-"));
        item.classList.toggle("down", data.value.startsWith("-"));
      }
    }
  });
}
