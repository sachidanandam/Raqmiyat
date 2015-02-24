//Form JS File
function frmCertEnquApplicationSubmit_frmCertEnquApplicationSubmit_init_seq0(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmCertEnquApplicationSubmit, "2");
};

function frmCertEnquApplicationSubmit_frmCertEnquApplicationSubmit_preshow_seq0(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmApplicationSubmit, "1");

 */
    populateApplicaitonNo.call(this);
    leftMenuUiSelect.call(this, "2.1", frmCertEnquApplicationSubmit);
    LeftMenuChange.call(this, "2");
    frmOrient.call(this, frmCertEnquApplicationSubmit);
    leftMenuAssignment.call(this, frmApplicationSubmit, "1");
};

function frmCertEnquApplicationSubmit_frmCertEnquApplicationSubmit_onOrientationChange_seq0(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmApplicationSubmit, "2");

 */
    frmOrient.call(this, frmApplicationSubmit);
    leftMenuUiSelect.call(this, "2.3", frmApplicationSubmit);
    /* 
onfrmOrientionChange.call(this,frmInquireAboutInstStaticPage);

 */
};

function frmCertEnquApplicationSubmit_btnSubmit_onClick_seq0(eventobject) {
    frmPayment.show();
};

function frmCertEnquApplicationSubmit_button181239910629691_onClick_seq0(eventobject) {
    frmMainMenu.show();
};

function addWidgetsfrmCertEnquApplicationSubmit() {
    var vbxLeftMenu = new kony.ui.Box({
        "id": "vbxLeftMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLeftMenu.add();
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
        "containerWeight": 14,
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
        "containerWeight": 7
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
        "onClick": frmCertEnquApplicationSubmit_btnSubmit_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 5, 3, 4],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button181239910629691 = new kony.ui.Button({
        "id": "button181239910629691",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCancel"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertEnquApplicationSubmit_button181239910629691_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 5, 3, 4],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbxRightMenu = new kony.ui.Box({
        "id": "vbxRightMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 70,
        "margin": [0, 0, 0, 0],
        "padding": [2, 0, 2, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxRightMenu.add(
    hbox17230851703651157, lblApplicationNumber, btnSubmit, button181239910629691);
    var hbox17230851705887950 = new kony.ui.Box({
        "id": "hbox17230851705887950",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 54,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705887950.add(
    vbxLeftMenu, vbxRightMenu);
    frmCertEnquApplicationSubmit.add(
    hbox17230851705887950);
};

function frmCertEnquApplicationSubmitGlobals() {
    var MenuId = [];
    frmCertEnquApplicationSubmit = new kony.ui.Form2({
        "id": "frmCertEnquApplicationSubmit",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "init": frmCertEnquApplicationSubmit_frmCertEnquApplicationSubmit_init_seq0,
        "preShow": frmCertEnquApplicationSubmit_frmCertEnquApplicationSubmit_preshow_seq0,
        "onOrientationChange": frmCertEnquApplicationSubmit_frmCertEnquApplicationSubmit_onOrientationChange_seq0,
        "addWidgets": addWidgetsfrmCertEnquApplicationSubmit
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