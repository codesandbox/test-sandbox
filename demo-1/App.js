import { sum } from "lodash";

let beep = false;
setInterval(() => {
  const thingie = document.getElementById("nice-text");

  if (thingie) {
    thingie.style.color = beep ? "blue" : "tomato";
    thingie.style.fontSize = (beep ? 10 : 100) + "px";
  }

  beep = !beep;
}, 600);

export default () => (
  <h1>
    <div id="nice-text" style={{ color: "tomato", transition: "2s ease all" }}>
      I need to make changes for Christian!!!!
    </div>
    {sum([2, 2])}
  </h1>
);
