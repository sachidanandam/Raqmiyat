//Form JS File
function frmIntermediate_frmIntermediate_postshow_seq0(eventobject, neworientation) {
    frmIntermediate_postShow.call(this);
};

function addWidgetsfrmIntermediate() {};

function frmIntermediateGlobals() {
    var MenuId = [];
    frmIntermediate = new kony.ui.Form2({
        "id": "frmIntermediate",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "postShow": frmIntermediate_frmIntermediate_postshow_seq0,
        "addWidgets": addWidgetsfrmIntermediate
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};