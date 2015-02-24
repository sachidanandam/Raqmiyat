//Form JS File
function frmAttestGrad2_frmAttestGrad2_preshow_seq0(eventobject, neworientation) {
    attest2AdjustFooter.call(this);
    checkCameraSupport.call(this);
};

function frmAttestGrad2_dropdowninstitue_onSelection_seq0(eventobject) {
    verifyGraduate_studyLevels.call(this);
};

function frmAttestGrad2_dropdownstudylevel_onSelection_seq0(eventobject) {
    getMajor.call(this);
};

function frmAttestGrad2_dropdownmajor_onSelection_seq0(eventobject) {
    currSubMajorDecision.call(this);
};

function frmAttestGrad2_vbxAttestInside_onClick_seq0(eventobject) {
    setPurpose.call(this, true);
};

function frmAttestGrad2_vbxAttestOutside_onClick_seq0(eventobject) {
    setPurpose.call(this, false);
};

function frmAttestGrad2_dropdownpaymentmethod_onSelection_seq0(eventobject) {
    getPaymentMethods.call(this);
};

function frmAttestGrad2_hbxCamAttest_onClick_seq0(eventobject) {
    launchDeviceCamera.call(this, kony.application.getCurrentForm());
};

function frmAttestGrad2_camCertImage_onCapture_seq0(eventobject) {
    camCallbackAttestStep2.call(this, eventobject);
};

function frmAttestGrad2_button155182739486040_onClick_seq0(eventobject) {
    createAttestGrad2Obj.call(this);
    OnClickAttestationCheckAttachment.call(this);
    /* 
invokeInsertApp.call(this);

 */
};

function addWidgetsfrmAttestGrad2() {
    var lblstudydetails = new kony.ui.Label({
        "id": "lblstudydetails",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStudyDetails"),
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var lblInstitute = new kony.ui.Label({
        "id": "lblInstitute",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblInstitute"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var dropdowninstitue = new kony.ui.ComboBox({
        "id": "dropdowninstitue",
        "isVisible": true,
        "masterData": [
            ["0", kony.i18n.getLocalizedString("lblSelectInstitute")],
            ["999", "Others"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad2_dropdowninstitue_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "dropDownImage": "downarrow.png",
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": "Select Institute"
    });
    var line15518273920405 = new kony.ui.Line({
        "id": "line15518273920405",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblStudyLevel = new kony.ui.Label({
        "id": "lblStudyLevel",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStudyLevel"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var dropdownstudylevel = new kony.ui.ComboBox({
        "id": "dropdownstudylevel",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad2_dropdownstudylevel_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "dropDownImage": "downarrow.png",
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": null
    });
    var vbxStudyLevel = new kony.ui.Box({
        "id": "vbxStudyLevel",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxStudyLevel.add(
    lblStudyLevel, dropdownstudylevel);
    var vbxPlaceHolder1 = new kony.ui.Box({
        "id": "vbxPlaceHolder1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 13,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxPlaceHolder1.add();
    var lblMajor = new kony.ui.Label({
        "id": "lblMajor",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMajor"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var dropdownmajor = new kony.ui.ComboBox({
        "id": "dropdownmajor",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad2_dropdownmajor_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "dropDownImage": "downarrow.png",
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": null
    });
    var vbxMajor = new kony.ui.Box({
        "id": "vbxMajor",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 47,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxMajor.add(
    lblMajor, dropdownmajor);
    var hbxStudyDetails = new kony.ui.Box({
        "id": "hbxStudyDetails",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxStudyDetails.add(
    vbxStudyLevel, vbxPlaceHolder1, vbxMajor);
    var lineStudyDetails = new kony.ui.Line({
        "id": "lineStudyDetails",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblSubMajor = new kony.ui.Label({
        "id": "lblSubMajor",
        "isVisible": true,
        "text": "Sub Major",
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var dropdownSubMajor = new kony.ui.ComboBox({
        "id": "dropdownSubMajor",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 1
    }, {
        "dropDownImage": "downarrow.png",
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": null
    });
    var lineSubmajor = new kony.ui.Line({
        "id": "lineSubmajor",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [1, 3, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblGraduatedYear = new kony.ui.Label({
        "id": "lblGraduatedYear",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGraduatedYear"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 1
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var txtgraduatedyear = new kony.ui.TextBox2({
        "id": "txtgraduatedyear",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 4,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": kony.i18n.getLocalizedString("lblEnterYear"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknTxtLoginPlcHldr",
        "autoCorrect": false
    });
    var lineGraduated = new kony.ui.Line({
        "id": "lineGraduated",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [1, 3, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNoOfDocuments = new kony.ui.Label({
        "id": "lblNoOfDocuments",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNoofDocuments"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var txtnoofdocuments = new kony.ui.TextBox2({
        "id": "txtnoofdocuments",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": kony.i18n.getLocalizedString("lblEnterHere"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknTxtLoginPlcHldr",
        "autoCorrect": false
    });
    var vbxNoOfDocuments = new kony.ui.Box({
        "id": "vbxNoOfDocuments",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 26,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxNoOfDocuments.add(
    txtnoofdocuments);
    var vbxPlaceHolder = new kony.ui.Box({
        "id": "vbxPlaceHolder",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 74,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxPlaceHolder.add();
    var hbox15518273924783 = new kony.ui.Box({
        "id": "hbox15518273924783",
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
    hbox15518273924783.add(
    vbxNoOfDocuments, vbxPlaceHolder);
    var line15518273924788 = new kony.ui.Line({
        "id": "line15518273924788",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [1, 3, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblStudentID = new kony.ui.Label({
        "id": "lblStudentID",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStudentID"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 1
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var txtstudentid = new kony.ui.TextBox2({
        "id": "txtstudentid",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("lblEnterHere"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknTxtLoginPlcHldr",
        "autoCorrect": false
    });
    var lineStudentID = new kony.ui.Line({
        "id": "lineStudentID",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [1, 3, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var radiobtnpurpose = new kony.ui.Label({
        "id": "radiobtnpurpose",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPurpose"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var rdimgAttestInside = new kony.ui.Image2({
        "id": "rdimgAttestInside",
        "isVisible": true,
        "src": "checked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var rdlblAttestInside = new kony.ui.Label({
        "id": "rdlblAttestInside",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAttestreqdInside"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 79
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var hbxAttestInside = new kony.ui.Box({
        "id": "hbxAttestInside",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
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
    rdimgAttestInside, rdlblAttestInside);
    var vbxAttestInside = new kony.ui.Box({
        "id": "vbxAttestInside",
        "isVisible": true,
        "onClick": frmAttestGrad2_vbxAttestInside_onClick_seq0,
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
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var rdlblAttestOutside = new kony.ui.Label({
        "id": "rdlblAttestOutside",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAttestreqdOutside"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 79
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var hbxAttestOutside = new kony.ui.Box({
        "id": "hbxAttestOutside",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
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
    rdimgAttestOutside, rdlblAttestOutside);
    var vbxAttestOutside = new kony.ui.Box({
        "id": "vbxAttestOutside",
        "isVisible": true,
        "onClick": frmAttestGrad2_vbxAttestOutside_onClick_seq0,
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
        "containerWeight": 5,
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
    var line15518273925609 = new kony.ui.Line({
        "id": "line15518273925609",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [1, 3, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblPaymentMethod = new kony.ui.Label({
        "id": "lblPaymentMethod",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPaymentMethod"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var dropdownpaymentmethod = new kony.ui.ComboBox({
        "id": "dropdownpaymentmethod",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad2_dropdownpaymentmethod_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "dropDownImage": "downarrow.png",
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": null
    });
    var dropdownpaymentcardtype = new kony.ui.ComboBox({
        "id": "dropdownpaymentcardtype",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "dropDownImage": "downarrow.png",
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": null
    });
    var lineFooter = new kony.ui.Line({
        "id": "lineFooter",
        "isVisible": true,
        "skin": "lineFtr"
    }, {
        "thickness": 2,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var imgPrev = new kony.ui.Image2({
        "id": "imgPrev",
        "isVisible": true,
        "src": "pixel.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxPrev = new kony.ui.Box({
        "id": "vbxPrev",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 8,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxPrev.add(
    imgPrev);
    var lblSteps = new kony.ui.Label({
        "id": "lblSteps",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStep2"),
        "skin": "sknFtrSteps"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 83
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var imgNext = new kony.ui.Image2({
        "id": "imgNext",
        "isVisible": true,
        "src": "pixel.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxNext = new kony.ui.Box({
        "id": "vbxNext",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxNext.add(
    imgNext);
    var hbox155182739221589 = new kony.ui.Box({
        "id": "hbox155182739221589",
        "isVisible": true,
        "skin": "sknFooter",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 83,
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
    vbxPrev, lblSteps, vbxNext);
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
        "containerWeight": 8,
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
    var lblCategory = new kony.ui.Label({
        "id": "lblCategory",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGraduate"),
        "skin": "sknSubHeaderGradAttest"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var hbxSubTitle = new kony.ui.Box({
        "id": "hbxSubTitle",
        "isVisible": true,
        "skin": "sknSubHeader",
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxSubTitle.add(
    lblCategory);
    var lineCamera = new kony.ui.Line({
        "id": "lineCamera",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label155182739486028 = new kony.ui.Label({
        "id": "label155182739486028",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCaptureCertImage"),
        "skin": "sknLblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 6, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 87
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var camCertImage = new kony.ui.Camera({
        "id": "camCertImage",
        "isVisible": true,
        "text": null,
        "skin": "sknCameraCertImage",
        "focusSkin": "camFocus",
        "onCapture": frmAttestGrad2_camCertImage_onCapture_seq0,
        "scaleFactor": 80,
        "compressionLevel": 0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "overlayConfig": {},
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": true,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_DEFAULT,
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false
    });
    var hbxCamAttest = new kony.ui.Box({
        "id": "hbxCamAttest",
        "isVisible": true,
        "skin": "sknHbxCam",
        "focusSkin": "sknHbxCam",
        "onClick": frmAttestGrad2_hbxCamAttest_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 26,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 6, 3, 0],
        "padding": [4, 1, 4, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxCamAttest.add(
    label155182739486028, camCertImage);
    var imgCamPreview = new kony.ui.Image2({
        "id": "imgCamPreview",
        "isVisible": true,
        "src": "pixel.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 3, 0, 3],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var button155182739486040 = new kony.ui.Button({
        "id": "button155182739486040",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSubmit"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmAttestGrad2_button155182739486040_onClick_seq0
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
        "containerWeight": 20
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbox155182739480962 = new kony.ui.Box({
        "id": "vbox155182739480962",
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
    vbox155182739480962.add(
    lineCamera, hbxCamAttest, imgCamPreview, button155182739486040);
    var hbxCamStaff = new kony.ui.Box({
        "id": "hbxCamStaff",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxCamStaff.add(
    vbox155182739480962);
    frmAttestGrad2.add(
    lblstudydetails, lblInstitute, dropdowninstitue, line15518273920405, hbxStudyDetails, lineStudyDetails, lblSubMajor, dropdownSubMajor, lineSubmajor, lblGraduatedYear, txtgraduatedyear, lineGraduated, lblNoOfDocuments, hbox15518273924783, line15518273924788, lblStudentID, txtstudentid, lineStudentID, radiobtnpurpose, hbxPurpose, line15518273925609, lblPaymentMethod, dropdownpaymentmethod, dropdownpaymentcardtype, hbxFooter, hbxSubTitle, hbxCamStaff);
};

function frmAttestGrad2Globals() {
    var MenuId = [];
    frmAttestGrad2 = new kony.ui.Form2({
        "id": "frmAttestGrad2",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox155182739418707],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "preShow": frmAttestGrad2_frmAttestGrad2_preshow_seq0,
        "addWidgets": addWidgetsfrmAttestGrad2
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "titleBarRightSideView": "none",
            "titleBarLeftSideView": "none"
        },
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false
    });
};