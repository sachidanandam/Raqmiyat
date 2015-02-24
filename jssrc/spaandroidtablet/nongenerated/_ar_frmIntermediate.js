//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Mon Dec 29 21:41:22 IST 2014
function frmIntermediate_frmIntermediate_postshow_seq0Ar(eventobject, neworientation) {
    frmIntermediate_postShow.call(this);
};

function addWidgetsfrmIntermediateAr() {};

function frmIntermediateGlobalsAr() {
    var MenuId = [];
    frmIntermediateAr = new kony.ui.Form2({
        "id": "frmIntermediate",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "postShow": frmIntermediate_frmIntermediate_postshow_seq0Ar,
        "addWidgets": addWidgetsfrmIntermediateAr
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
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