//Form JS File
function addWidgetsfrmApplicationInquiryStatus() {};

function frmApplicationInquiryStatusGlobals() {
    var MenuId = [];
    frmApplicationInquiryStatus = new kony.ui.Form2({
        "id": "frmApplicationInquiryStatus",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "addWidgets": addWidgetsfrmApplicationInquiryStatus
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