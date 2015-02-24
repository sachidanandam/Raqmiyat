//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 09 17:24:49 IST 2015
function frmPayment_frmPayment_postshow_seq0Ar(eventobject, neworientation) {
    setBrwValue.call(this);
};

function frmPayment_button287052823423201_onClick_seq0Ar(eventobject) {};

function addWidgetsfrmPaymentAr() {
    var brw = new kony.ui.Browser({
        "id": "brw",
        "text": "Browser",
        "isVisible": true,
        "detectTelNumber": false,
        "screenLevelWidget": true,
        "enableZoom": false
    }, {
        "margin": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {});
    var button287052823423201 = new kony.ui.Button({
        "id": "button287052823423201",
        "isVisible": true,
        "text": "Back",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPayment_button287052823423201_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var hbox287052823423200 = new kony.ui.Box({
        "id": "hbox287052823423200",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox287052823423200.add(button287052823423201);
    frmPaymentAr.add(brw, hbox287052823423200);
};

function frmPaymentGlobalsAr() {
    var MenuId = [];
    frmPaymentAr = new kony.ui.Form2({
        "id": "frmPayment",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "postShow": frmPayment_frmPayment_postshow_seq0Ar,
        "addWidgets": addWidgetsfrmPaymentAr
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "directChildrenIDs": ["brw", "hbox287052823423200", "button287052823423201"]
    });
};