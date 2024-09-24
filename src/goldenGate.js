// web page functionality
// imports
import "./lib/triggers/events/load.js"; // window events
import loadFooter from "./lib/element/footer.js"; // footer
import loadendpoint from './lib/element/endpoint.js'
import { activate, activateDef } from "./lib/triggers/events/activate.js";
import { deactivate, deactivateDef } from "./lib/triggers/events/deactivate.js"; // deactivate all elements except modal
import loadtoggleNav from "./lib/triggers/events/navigation.js"; // navigation click (mobile)
import { showModal, hideModal } from "./lib/triggers/events/modals.js"; // test - modal view
import { disableScroll, enableScroll } from "./lib/triggers/events/scroll.js";

// functions
// showModal(deactivate);
// setTimeout(() => {
//   hideModal(activate);
// }, 4000);
loadFooter();
loadtoggleNav(enableScroll, disableScroll, activateDef, deactivateDef);
loadendpoint();
