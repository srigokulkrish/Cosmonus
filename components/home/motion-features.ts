import { domMax } from "framer-motion";

/**
 * framer-motion's full feature set (layout animations included), in its own module so `StudioTabs` can load it
 * after the page is interactive instead of shipping it with the home page's first JS. Nothing in the Studio
 * tabs animates on arrival — the accent dot only slides when a visitor picks another practice — so there is
 * nothing for it to be late for.
 */
export default domMax;
