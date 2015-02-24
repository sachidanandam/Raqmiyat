//Form JS File
function frmCertRequest2_txtrequiredUniversity_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest2.lblUniversity);
};

function frmCertRequest2_dropdownrequiredCountry_onSelection_seq0(eventobject) {
    SknTxtChangeValidation.call(this, frmCertRequest2.lblCountry);
};

function frmCertRequest2_dropdownStudyLevel_onSelection_seq0(eventobject) {
    SknTxtChangeValidation.call(this, frmCertRequest2.lblStudyLevel);
};

function frmCertRequest2_txtrequiredMajor_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest2.lblMajor);
};

function frmCertRequest2_txtrequiredNoofYears_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest2.lblNoofyears);
};

function frmCertRequest2_txtSemester_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest2.lblNoOfSem);
};

function frmCertRequest2_txtCreditHours_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest2.lblCreditHours);
};

function frmCertRequest2_vbxAttestInside_onClick_seq0(eventobject) {
    setEquivalenceCert.call(this, true);
};

function frmCertRequest2_hbxAttestInside_onClick_seq0(eventobject) {
    setGender.call(this, true, frmCertRequest2.rdimgAttestInside, frmCertRequest2.rdimgAttestOutside);
};

function frmCertRequest2_vbxAttestOutside_onClick_seq0(eventobject) {
    setEquivalenceCert.call(this, false);
};

function frmCertRequest2_hbxAttestOutside_onClick_seq0(eventobject) {
    setGender.call(this, false, frmCertRequest2.rdimgAttestInside, frmCertRequest2.rdimgAttestOutside);
};

function frmCertRequest2_dropdownProgram_onSelection_seq0(eventobject) {
    SknTxtChangeValidation.call(this, frmCertRequest2.lblProgramm);
};

function frmCertRequest2_btnPrev_onClick_seq0(eventobject) {
    frmCertRequest1.show();
};

function frmCertRequest2_btnNext_onClick_seq0(eventobject) {
    /* 
goToRequestfrm3.call(this);

 */
    checkFieldsRequestStep1.call(this);
};

function addWidgetsfrmCertRequest2() {
    var lblGenInfoQualiProg = new kony.ui.Label({
        "id": "lblGenInfoQualiProg",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGenInfoQualiProg"),
        "skin": "sknFrmTitle",
        "i18n_text": "kony.i18n.getLocalizedString('lblGenInfoQualiProg')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var lblUniversity = new kony.ui.Label({
        "id": "lblUniversity",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblUniversity"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblUniversity')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var txtrequiredUniversity = new kony.ui.TextBox2({
        "id": "txtrequiredUniversity",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest2_txtrequiredUniversity_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var line15518273911 = new kony.ui.Line({
        "id": "line15518273911",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCountry = new kony.ui.Label({
        "id": "lblCountry",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCountry"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblCountry')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var dropdownrequiredCountry = new kony.ui.ComboBox({
        "id": "dropdownrequiredCountry",
        "isVisible": true,
        "masterData": [
            ["0", "Select Country"],
            ["1", "India"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertRequest2_dropdownrequiredCountry_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {});
    var line17284177585448 = new kony.ui.Line({
        "id": "line17284177585448",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblStudyLevel = new kony.ui.Label({
        "id": "lblStudyLevel",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStudyLevel"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblStudyLevel')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var dropdownStudyLevel = new kony.ui.ComboBox({
        "id": "dropdownStudyLevel",
        "isVisible": true,
        "masterData": [
            ["0", "Select Study Level"],
            ["1", "Ph.D."],
            ["2", "Master"],
            ["3", "Post Graduate Diploma"],
            ["4", "Bachelor"],
            ["5", "Associate Diploma"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertRequest2_dropdownStudyLevel_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {});
    var line17284177589748 = new kony.ui.Line({
        "id": "line17284177589748",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblMajor = new kony.ui.Label({
        "id": "lblMajor",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMajor"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblMajor')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var txtrequiredMajor = new kony.ui.TextBox2({
        "id": "txtrequiredMajor",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest2_txtrequiredMajor_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var line172841775811128 = new kony.ui.Line({
        "id": "line172841775811128",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNoofyears = new kony.ui.Label({
        "id": "lblNoofyears",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNoofyears"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblNoofyears')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var vbox1818863783241762 = new kony.ui.Box({
        "id": "vbox1818863783241762",
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
    vbox1818863783241762.add();
    var lblNoOfSem = new kony.ui.Label({
        "id": "lblNoOfSem",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNoOfSem"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblNoOfSem')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var hbox1818863783241372 = new kony.ui.Box({
        "id": "hbox1818863783241372",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783241372.add(
    lblNoofyears, vbox1818863783241762, lblNoOfSem);
    var txtrequiredNoofYears = new kony.ui.TextBox2({
        "id": "txtrequiredNoofYears",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 2,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest2_txtrequiredNoofYears_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var vbox1818863783241875 = new kony.ui.Box({
        "id": "vbox1818863783241875",
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
    vbox1818863783241875.add();
    var txtSemester = new kony.ui.TextBox2({
        "id": "txtSemester",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 2,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest2_txtSemester_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var hbox1818863783241521 = new kony.ui.Box({
        "id": "hbox1818863783241521",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783241521.add(
    txtrequiredNoofYears, vbox1818863783241875, txtSemester);
    var line172841775811748 = new kony.ui.Line({
        "id": "line172841775811748",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCreditHours = new kony.ui.Label({
        "id": "lblCreditHours",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCreditHours"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblCreditHours')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var txtCreditHours = new kony.ui.TextBox2({
        "id": "txtCreditHours",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 2,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest2_txtCreditHours_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var line172844754981627 = new kony.ui.Line({
        "id": "line172844754981627",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblTypeOfStudy = new kony.ui.Label({
        "id": "lblTypeOfStudy",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblTypeOfStudy"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblTypeOfStudy')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "textCopyable": false
    });
    var rdimgAttestInside = new kony.ui.Image2({
        "id": "rdimgAttestInside",
        "isVisible": true,
        "src": "checked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {});
    var rdlblFullTime = new kony.ui.Label({
        "id": "rdlblFullTime",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rdlblFullTime"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('rdlblFullTime')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 79
    }, {
        "textCopyable": false
    });
    var hbxAttestInside = new kony.ui.Box({
        "id": "hbxAttestInside",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "onClick": frmCertRequest2_hbxAttestInside_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 62,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxAttestInside.add(
    rdimgAttestInside, rdlblFullTime);
    var vbxAttestInside = new kony.ui.Box({
        "id": "vbxAttestInside",
        "isVisible": true,
        "onClick": frmCertRequest2_vbxAttestInside_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 48,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxAttestInside.add(
    hbxAttestInside);
    var rdimgAttestOutside = new kony.ui.Image2({
        "id": "rdimgAttestOutside",
        "isVisible": true,
        "src": "unchecked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {});
    var rdlblpartTime = new kony.ui.Label({
        "id": "rdlblpartTime",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rdlblpartTime"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('rdlblpartTime')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 79
    }, {
        "textCopyable": false
    });
    var hbxAttestOutside = new kony.ui.Box({
        "id": "hbxAttestOutside",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "onClick": frmCertRequest2_hbxAttestOutside_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 62,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxAttestOutside.add(
    rdimgAttestOutside, rdlblpartTime);
    var vbxAttestOutside = new kony.ui.Box({
        "id": "vbxAttestOutside",
        "isVisible": true,
        "onClick": frmCertRequest2_vbxAttestOutside_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 52,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxAttestOutside.add(
    hbxAttestOutside);
    var hbxPurpose = new kony.ui.Box({
        "id": "hbxPurpose",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxPurpose.add(
    vbxAttestInside, vbxAttestOutside);
    var line1728447549129607 = new kony.ui.Line({
        "id": "line1728447549129607",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblProgramm = new kony.ui.Label({
        "id": "lblProgramm",
        "isVisible": true,
        "text": "Program",
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var dropdownProgram = new kony.ui.ComboBox({
        "id": "dropdownProgram",
        "isVisible": true,
        "masterData": [
            ["0", "Select Programme"],
            ["1", "Research System"],
            ["2", "Courses + Research system"],
            ["3", "Courses system"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertRequest2_dropdownProgram_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var line1728447549130543 = new kony.ui.Line({
        "id": "line1728447549130543",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lineFooter = new kony.ui.Line({
        "id": "lineFooter",
        "isVisible": true,
        "skin": "lineFtr"
    }, {
        "thickness": 2,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnPrev = new kony.ui.Button({
        "id": "btnPrev",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnPrev",
        "focusSkin": "sknBtnPrev",
        "onClick": frmCertRequest2_btnPrev_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var lblSteps = new kony.ui.Label({
        "id": "lblSteps",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStep2"),
        "skin": "sknFtrSteps",
        "i18n_text": "kony.i18n.getLocalizedString('lblStep2')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 83
    }, {
        "textCopyable": false
    });
    var btnNext = new kony.ui.Button({
        "id": "btnNext",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnNext",
        "focusSkin": "sknBtnNext",
        "onClick": frmCertRequest2_btnNext_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var hbox155182739221589 = new kony.ui.Box({
        "id": "hbox155182739221589",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknFooter",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 87,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [4, 3, 4, 3],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox155182739221589.add(
    btnPrev, lblSteps, btnNext);
    var vbox155182739219799 = new kony.ui.Box({
        "id": "vbox155182739219799",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox155182739219799.add(
    lineFooter, hbox155182739221589);
    var hbxFooter = new kony.ui.Box({
        "id": "hbxFooter",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFooter.add(
    vbox155182739219799);
    frmCertRequest2.add(
    lblGenInfoQualiProg, lblUniversity, txtrequiredUniversity, line15518273911, lblCountry, dropdownrequiredCountry, line17284177585448, lblStudyLevel, dropdownStudyLevel, line17284177589748, lblMajor, txtrequiredMajor, line172841775811128, hbox1818863783241372, hbox1818863783241521, line172841775811748, lblCreditHours, txtCreditHours, line172844754981627, lblTypeOfStudy, hbxPurpose, line1728447549129607, lblProgramm, dropdownProgram, line1728447549130543, hbxFooter);
};

function frmCertRequest2Globals() {
    var MenuId = [];
    frmCertRequest2 = new kony.ui.Form2({
        "id": "frmCertRequest2",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox172311493310632, hbox172311493310656],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "addWidgets": addWidgetsfrmCertRequest2
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