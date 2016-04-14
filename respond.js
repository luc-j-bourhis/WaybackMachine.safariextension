/* This script is to be loaded once. The information needed by the functions
validate and respond is contained in the event user info which is filled
by the javascript defined in `context.js` which shall be injected on every page.
*/

safari.application.addEventListener("command", respond, false);
safari.application.addEventListener("validate", validate, false);

/* Display our contextual menu if and only if the event user info is not null */
function validate(event) {
    if (event.command != "open_in_wayback_machine") return;
    if (event.userInfo == null) {
        event.target.disabled = true
    }
}

/* Open the url of the link which has been right-clicked in the
Wayback Machine, in the current tab */
function respond(event) {
    if (event.command != "open_in_wayback_machine") return;
    var p = safari.extension.settings.tab_policy;
    var w = safari.application.activeBrowserWindow;
    var tab = p == "current" ? w.activeTab
            : p == "another" ? w.openTab()
            : null;
    tab.url = 'https://web.archive.org/web/*/' + event.userInfo;
}
