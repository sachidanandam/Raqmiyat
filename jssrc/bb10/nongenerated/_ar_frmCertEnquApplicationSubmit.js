//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 23 16:40:51 IST 2015
function frmCertEnquApplicationSubmit_frmCertEnquApplicationSubmit_preshow_seq0Ar(eventobject, neworientation) {
    populateApplicaitonNo.call(this);
};

function frmCertEnquApplicationSubmit_btnSubmit_onClick_seq0Ar(eventobject) {
    frmPayment.show();
};

function addWidgetsfrmCertEnquApplicationSubmitAr() {
    var labelAppSuccessMsg = new kony.ui.Label({
        "id": "labelAppSuccessMsg",
        "isVisible": true,
        "text": "Your application saved successfully and your application number is ",
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox17230851703651157 = new kony.ui.Box({
        "id": "hbox17230851703651157",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851703651157.add(labelAppSuccessMsg);
    var lblApplicationNumber = new kony.ui.Label({
        "id": "lblApplicationNumber",
        "isVisible": true,
        "text": null,
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnSubmit = new kony.ui.Button({
        "id": "btnSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPaymentProceed"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertEnquApplicationSubmit_btnSubmit_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 5, 3, 4],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    frmCertEnquApplicationSubmitAr.add(hbox17230851703651157, lblApplicationNumber, btnSubmit);
};

function frmCertEnquApplicationSubmitGlobalsAr() {
    var MenuId = [];
    frmCertEnquApplicationSubmitAr = new kony.ui.Form2({
        "id": "frmCertEnquApplicationSubmit",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "preShow": frmCertEnquApplicationSubmit_frmCertEnquApplicationSubmit_preshow_seq0Ar,
        "addWidgets": addWidgetsfrmCertEnquApplicationSubmitAr
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "directChildrenIDs": ["hbox17230851703651157", "labelAppSuccessMsg", "btnSubmit", "lblApplicationNumber"]
    });
};