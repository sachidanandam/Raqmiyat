//Form JS File
function frmPayment_frmPayment_postshow_seq0(eventobject, neworientation) {
    setBrwValue.call(this);
};

function frmPayment_button287052823423201_onClick_seq0(eventobject) {};

function addWidgetsfrmPayment() {
    var brw = new kony.ui.Browser({
        "id": "brw",
        "text": "Browser",
        "isVisible": true,
        "screenLevelWidget": true,
        "enableZoom": false,
        "detectTelNumber": false
    }, {
        "margin": [1, 1, 1, 1],
        "containerHeight": null,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {});
    var button287052823423201 = new kony.ui.Button({
        "id": "button287052823423201",
        "isVisible": true,
        "text": "Back",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPayment_button287052823423201_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbox287052823423200 = new kony.ui.Box({
        "id": "hbox287052823423200",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox287052823423200.add(
    button287052823423201);
    frmPayment.add(
    brw, hbox287052823423200);
};

function frmPaymentGlobals() {
    var MenuId = [];
    frmPayment = new kony.ui.Form2({
        "id": "frmPayment",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "postShow": frmPayment_frmPayment_postshow_seq0,
        "addWidgets": addWidgetsfrmPayment
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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