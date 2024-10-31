// client events
import "./lib/events/load.js";
import "./lib/events/scroll.js";
import "./lib/events/resize.js";
import nosaj from './media/gitlinx.json'
import laicos from './media/social.json'

// elements
import loadFooter from "./lib/element/footer.js"; // footer
import loadendpoint from './lib/element/endpoint.js'
import loadOffice from './lib/element/office.js'
import loadTags from './lib/element/tags.js'
import loadGames from './lib/element/games.js'
import loadNav from "./lib/element/navigation.js"; // navigation click (mobile)
import { underdev } from "./lib/data/underdev.js";
// tags

// console.log(underDev)
//------------------------------------------------
loadNav();
loadTags(underdev,nosaj);
loadOffice();
loadGames();
loadendpoint();
loadFooter(laicos);