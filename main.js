import "./src/styles/settings/colors.css";
import "./src/styles/elements/base.css";

import CardGame from  "./src/components/CardGAme";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);

