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
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};