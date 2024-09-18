// web page functionality
// imports
import "./lib/triggers/events/load.js"; // window events
import loadFooter from "./lib/element/footer.js"; // footer
import activate from "./lib/triggers/events/activate.js";
import deactivate from "./lib/triggers/events/deactivate.js"; // deactivate all elements except modal
import toggleNav from "./lib/triggers/events/navigation.js"; // navigation click (mobile)
import { showModal, hideModal } from "./lib/triggers/events/modals.js"; // test - modal view
import { disableScroll, enableScroll } from "./lib/triggers/events/scroll.js";

// functions
// showModal(deactivate);
// setTimeout(() => {
//   hideModal(activate);
// }, 4000);
loadFooter();
toggleNav(enableScroll,disableScroll);
