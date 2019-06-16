// Instantiation

var MDCDrawer = mdc.drawer.MDCDrawer
var MDCList = mdc.list.MDCList
var MDCTopAppBar = mdc.topAppBar.MDCTopAppBar

const list = new MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;
const drawer = new MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = new MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));

topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
})