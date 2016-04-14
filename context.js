/* This script is to be injected in every page after they have loaded */

document.addEventListener("contextmenu", parse_context, false);

/* If this is a right-click on a link, put his href in the event user info,
otherwise put nil in there */
function parse_context(event) {
    safari.self.tab.setContextMenuEventUserInfo(event, event.target.href);
}
