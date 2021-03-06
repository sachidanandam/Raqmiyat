//Form JS File
function frmApplicationSubmit_frmApplicationSubmit_preshow_seq0(eventobject, neworientation) {
    populateApplicaitonNo.call(this);
};

function frmApplicationSubmit_btnSubmit_onClick_seq0(eventobject) {
    frmPayment.show();
};

function frmApplicationSubmit_btnCancel_onClick_seq0(eventobject) {
    resetAttestationForms.call(this);
    frmMainMenu.show();
};

function addWidgetsfrmApplicationSubmit() {
    var labelAppSuccessMsg = new kony.ui.Label({
        "id": "labelAppSuccessMsg",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAppPaymentConfirm"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851703651157 = new kony.ui.Box({
        "id": "hbox17230851703651157",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851703651157.add(
    labelAppSuccessMsg);
    var lblApplicationNumber = new kony.ui.Label({
        "id": "lblApplicationNumber",
        "isVisible": true,
        "text": null,
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnSubmit = new kony.ui.Button({
        "id": "btnSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPaymentProceed"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmApplicationSubmit_btnSubmit_onClick_seq0
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnCancel = new kony.ui.Button({
        "id": "btnCancel",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCancel"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmApplicationSubmit_btnCancel_onClick_seq0
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmApplicationSubmit.add(
    hbox17230851703651157, lblApplicationNumber, btnSubmit, btnCancel);
};

function frmApplicationSubmitGlobals() {
    var MenuId = [];
    frmApplicationSubmit = new kony.ui.Form2({
        "id": "frmApplicationSubmit",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "preShow": frmApplicationSubmit_frmApplicationSubmit_preshow_seq0,
        "addWidgets": addWidgetsfrmApplicationSubmit
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