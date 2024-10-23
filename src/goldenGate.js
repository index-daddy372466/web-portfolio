// client events
import "./lib/events/load.js";
import "./lib/events/scroll.js";
import "./lib/events/resize.js";

// elements
import loadFooter from "./lib/element/footer.js"; // footer
import loadendpoint from './lib/element/endpoint.js'
import loadNav from "./lib/element/navigation.js"; // navigation click (mobile)

//------------------------------------------------
loadNav();
loadendpoint();
loadFooter();