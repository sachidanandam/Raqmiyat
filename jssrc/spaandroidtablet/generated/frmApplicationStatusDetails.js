//Form JS File
function addWidgetsfrmApplicationStatusDetails() {};

function frmApplicationStatusDetailsGlobals() {
    var MenuId = [];
    frmApplicationStatusDetails = new kony.ui.Form2({
        "id": "frmApplicationStatusDetails",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "addWidgets": addWidgetsfrmApplicationStatusDetails
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};