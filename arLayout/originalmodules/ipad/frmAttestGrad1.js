//Form JS File
function frmAttestGrad1_frmAttestGrad1_init_seq0(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmAttestGrad1, "1");
};

function frmAttestGrad1_frmAttestGrad1_preshow_seq0(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmAttestGrad1, "1");

 */
    attestAdjustFormWidget.call(this);
    leftMenuUiSelect.call(this, attestSubmenu, frmAttestGrad1);
    LeftMenuChange.call(this, "1");
    frmOrient.call(this, frmAttestGrad1);
    leftMenuAssignment.call(this, frmApplicationSubmit, "1");
    if (kony.os.deviceInfo().name == "android") {
        alertDialog(kony.i18n.getLocalizedString("rtxtCameraMsg"));
    } else {
        alertDialog(kony.i18n.getLocalizedString("rtxtCameraMsgIOS"));
    }
};

function frmAttestGrad1_frmAttestGrad1_onOrientationChange_seq0(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmAttestGrad1, gvModuleSelect);

 */
    frmOrient.call(this, frmAttestGrad1);
    leftMenuUiSelect.call(this, "1.1", frmAttestGrad1);
    /* 
onfrmOrientionChange.call(this,frmFacultyStatic);

 */
};

function frmAttestGrad1_txtstudentname_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblgeneralinformation);
};

function frmAttestGrad1_vbxMale_onClick_seq0(eventobject) {
    setGender.call(this, true, frmAttestGrad1.rbimgMale, frmAttestGrad1.rbimgFemale);
};

function frmAttestGrad1_vbxFemale_onClick_seq0(eventobject) {
    setGender.call(this, false, frmAttestGrad1.rbimgMale, frmAttestGrad1.rbimgFemale);
};

function frmAttestGrad1_dropdownnationality_onSelection_seq0(eventobject) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblNationality, "lblNationality");
};

function frmAttestGrad1_txtTelephoneAreaCode_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblTelephone);
};

function frmAttestGrad1_txtTelephoneNumber_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblTelephone);
};

function frmAttestGrad1_txtmobilenumber_onDone_seq0(eventobject, changedtext) {
    frmAttestGrad1.txtemiratesid1.setFocus(true);
};

function frmAttestGrad1_txtmobilenumber_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblMobile);
};

function frmAttestGrad1_txtemiratesid1_onDone_seq0(eventobject, changedtext) {
    frmAttestGrad1.txtemiratesid2.setFocus(true);
};

function frmAttestGrad1_txtemiratesid1_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblEmirateID);
};

function frmAttestGrad1_txtemiratesid2_onDone_seq0(eventobject, changedtext) {
    frmAttestGrad1.txtemiratesid3.setFocus(true);
};

function frmAttestGrad1_txtemiratesid2_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblEmirateID);
};

function frmAttestGrad1_txtemiratesid3_onDone_seq0(eventobject, changedtext) {
    frmAttestGrad1.txtemiratesid4.setFocus(true);
};

function frmAttestGrad1_txtemiratesid3_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblEmirateID);
};

function frmAttestGrad1_txtemiratesid4_onDone_seq0(eventobject, changedtext) {
    frmAttestGrad1.txtpobox.setFocus(true);
};

function frmAttestGrad1_txtemiratesid4_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblEmirateID);
};

function frmAttestGrad1_txtpobox_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblPObox);
};

function frmAttestGrad1_dropdownemirate_onSelection_seq0(eventobject) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblEmirate);
};

function frmAttestGrad1_txtemail_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblEmail);
};

function frmAttestGrad1_dropdowninstitue_onSelection_seq0(eventobject) {
    gblDeviceInfo = "tab"
    verifyGraduate_studyLevels.call(this);
};

function frmAttestGrad1_dropdownstudylevel_onSelection_seq0(eventobject) {
    getMajor.call(this);
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblStudyLevel);
};

function frmAttestGrad1_dropdownmajor_onSelection_seq0(eventobject) {
    currSubMajorDecision.call(this);
    /* 
SknTxtChangeValidation.call(this,frmAttestGrad1.lblMajor);

 */
};

function frmAttestGrad1_dropdownSubMajor_onSelection_seq0(eventobject) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblSubMajor);
};

function frmAttestGrad1_txtnoofdocuments_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblNoofDocuments);
};

function frmAttestGrad1_txtstudentid_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblStudentID);
};

function frmAttestGrad1_vbxAttestInside_onClick_seq0(eventobject) {
    setPurposeTab.call(this, frmAttestGrad1.rdimgAttestInside, frmAttestGrad1.rdimgAttestOutside, true);
};

function frmAttestGrad1_vbxAttestOutside_onClick_seq0(eventobject) {
    setPurposeTab.call(this, frmAttestGrad1.rdimgAttestInside, frmAttestGrad1.rdimgAttestOutside, false);
};

function frmAttestGrad1_dropdownpaymentmethod_onSelection_seq0(eventobject) {
    getPaymentMethods.call(this);
};

function frmAttestGrad1_dropdownpaymentcardtype_onSelection_seq0(eventobject) {
    getPaymentMethods.call(this);
};

function frmAttestGrad1_txtinstitutename_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblInstituteName);
};

function frmAttestGrad1_txtmajor_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblMajor);
};

function frmAttestGrad1_vbxNo_onClick_seq0(eventobject) {
    setIsCertificateAttested.call(this, false);
};

function frmAttestGrad1_vbxYes_onClick_seq0(eventobject) {
    setIsCertificateAttested.call(this, true);
};

function frmAttestGrad1_hboxCertificateDetails_onClick_seq0(eventobject) {
    launchDeviceCamera.call(this, kony.application.getCurrentForm());
};

function frmAttestGrad1_txtinstitutename2_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblInstituteNameCert);
};

function frmAttestGrad1_dropdownnationality1_onSelection_seq0(eventobject) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblCountry);
};

function frmAttestGrad1_txtcredithours_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmAttestGrad1.lblCreditHours);
};

function frmAttestGrad1_hbxcaptureimage_onClick_seq0(eventobject) {
    launchDeviceCamera.call(this, kony.application.getCurrentForm());
};

function frmAttestGrad1_camCertImage_onCapture_seq0(eventobject) {
    camCallback.call(this, eventobject);
};

function frmAttestGrad1_btnSubmit_onClick_seq0(eventobject) {
    /* 
createAttestGrad3Obj.call(this);

 */
    /* 
onBtnClickSubmitAttestStep3.call(this);

 */
    onBtnClickTabSubmitAttestStep3.call(this);
};

function addWidgetsfrmAttestGrad1() {
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
    var label172579614690476 = new kony.ui.Label({
        "id": "label172579614690476",
        "isVisible": true,
        "text": "Attestation Request",
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox172579614690395 = new kony.ui.Box({
        "id": "hbox172579614690395",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172579614690395.add(
    label172579614690476);
    var lblgeneralinformation = new kony.ui.Label({
        "id": "lblgeneralinformation",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGeneralInformation"),
        "skin": "lblFrmSubTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 3, 0],
        "padding": [0, 1, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var line172579614691554 = new kony.ui.Line({
        "id": "line172579614691554",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblStudentName = new kony.ui.Label({
        "id": "lblStudentName",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStudentName"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtstudentname = new kony.ui.TextBox2({
        "id": "txtstudentname",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("lblEnterName"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmAttestGrad1_txtstudentname_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1818863783238756 = new kony.ui.Box({
        "id": "hbox1818863783238756",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783238756.add(
    lblStudentName, txtstudentname);
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
    var radiobtngender = new kony.ui.Label({
        "id": "radiobtngender",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGender"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rbimgMale = new kony.ui.Image2({
        "id": "rbimgMale",
        "isVisible": true,
        "src": "unchecked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 0, 0, 0],
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
    var vbxMale = new kony.ui.Box({
        "id": "vbxMale",
        "isVisible": true,
        "onClick": frmAttestGrad1_vbxMale_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 10,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxMale.add(
    rbimgMale);
    var rblblMale = new kony.ui.Label({
        "id": "rblblMale",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMale"),
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 32
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rbimgFemale = new kony.ui.Image2({
        "id": "rbimgFemale",
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
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxFemale = new kony.ui.Box({
        "id": "vbxFemale",
        "isVisible": true,
        "onClick": frmAttestGrad1_vbxFemale_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 11,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxFemale.add(
    rbimgFemale);
    var rblblFemale = new kony.ui.Label({
        "id": "rblblFemale",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFemale"),
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 38
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxGender = new kony.ui.Box({
        "id": "hbxGender",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [4, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxGender.add(
    vbxMale, rblblMale, vbxFemale, rblblFemale);
    var vbox1818863783374123 = new kony.ui.Box({
        "id": "vbox1818863783374123",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 64,
        "margin": [4, 0, 0, 0],
        "padding": [0, 1, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1818863783374123.add(
    hbxGender);
    var hbox1818863783239645 = new kony.ui.Box({
        "id": "hbox1818863783239645",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783239645.add(
    radiobtngender, vbox1818863783374123);
    var line1818863783269675 = new kony.ui.Line({
        "id": "line1818863783269675",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNationality = new kony.ui.Label({
        "id": "lblNationality",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNationality"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownnationality = new kony.ui.ComboBox({
        "id": "dropdownnationality",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad1_dropdownnationality_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1818863783269770 = new kony.ui.Box({
        "id": "hbox1818863783269770",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783269770.add(
    lblNationality, dropdownnationality);
    var line1818863783288730 = new kony.ui.Line({
        "id": "line1818863783288730",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblTelephone = new kony.ui.Label({
        "id": "lblTelephone",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblTelephone"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtTelephoneAreaCode = new kony.ui.TextBox2({
        "id": "txtTelephoneAreaCode",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 2,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmAttestGrad1_txtTelephoneAreaCode_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var txtTelephoneNumber = new kony.ui.TextBox2({
        "id": "txtTelephoneNumber",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 7,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmAttestGrad1_txtTelephoneNumber_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1818863783270579 = new kony.ui.Box({
        "id": "hbox1818863783270579",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783270579.add(
    lblTelephone, txtTelephoneAreaCode, txtTelephoneNumber);
    var line1818863783272265 = new kony.ui.Line({
        "id": "line1818863783272265",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblMobile = new kony.ui.Label({
        "id": "lblMobile",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMobile"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownmobileareacode = new kony.ui.ComboBox({
        "id": "dropdownmobileareacode",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": "050",
        "dropDownImage": "downarrow.png"
    });
    var txtmobilenumber = new kony.ui.TextBox2({
        "id": "txtmobilenumber",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 7,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onDone": frmAttestGrad1_txtmobilenumber_onDone_seq0,
        "onTextChange": frmAttestGrad1_txtmobilenumber_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1818863783272524 = new kony.ui.Box({
        "id": "hbox1818863783272524",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783272524.add(
    lblMobile, dropdownmobileareacode, txtmobilenumber);
    var line1818863783273884 = new kony.ui.Line({
        "id": "line1818863783273884",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblEmirateID = new kony.ui.Label({
        "id": "lblEmirateID",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblEmirateID"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtemiratesid1 = new kony.ui.TextBox2({
        "id": "txtemiratesid1",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 3,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onDone": frmAttestGrad1_txtemiratesid1_onDone_seq0,
        "onTextChange": frmAttestGrad1_txtemiratesid1_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 1, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var txtemiratesid2 = new kony.ui.TextBox2({
        "id": "txtemiratesid2",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 4,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onDone": frmAttestGrad1_txtemiratesid2_onDone_seq0,
        "onTextChange": frmAttestGrad1_txtemiratesid2_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 1, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var txtemiratesid3 = new kony.ui.TextBox2({
        "id": "txtemiratesid3",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 7,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onDone": frmAttestGrad1_txtemiratesid3_onDone_seq0,
        "onTextChange": frmAttestGrad1_txtemiratesid3_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 1, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var txtemiratesid4 = new kony.ui.TextBox2({
        "id": "txtemiratesid4",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 1,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onDone": frmAttestGrad1_txtemiratesid4_onDone_seq0,
        "onTextChange": frmAttestGrad1_txtemiratesid4_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1818863783273971 = new kony.ui.Box({
        "id": "hbox1818863783273971",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783273971.add(
    lblEmirateID, txtemiratesid1, txtemiratesid2, txtemiratesid3, txtemiratesid4);
    var hbxEmiratesID = new kony.ui.Box({
        "id": "hbxEmiratesID",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 1,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxEmiratesID.add();
    var line1818863783283828 = new kony.ui.Line({
        "id": "line1818863783283828",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblPObox = new kony.ui.Label({
        "id": "lblPObox",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPObox"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtpobox = new kony.ui.TextBox2({
        "id": "txtpobox",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 7,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": kony.i18n.getLocalizedString("lblEnterHere"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmAttestGrad1_txtpobox_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1818863783282910 = new kony.ui.Box({
        "id": "hbox1818863783282910",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783282910.add(
    lblPObox, txtpobox);
    var line1818863783285248 = new kony.ui.Line({
        "id": "line1818863783285248",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblEmirate = new kony.ui.Label({
        "id": "lblEmirate",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblEmirate"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownemirate = new kony.ui.ComboBox({
        "id": "dropdownemirate",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad1_dropdownemirate_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectEmirate"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1818863783285451 = new kony.ui.Box({
        "id": "hbox1818863783285451",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783285451.add(
    lblEmirate, dropdownemirate);
    var line1818863783286557 = new kony.ui.Line({
        "id": "line1818863783286557",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblEmail = new kony.ui.Label({
        "id": "lblEmail",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblEmail"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtemail = new kony.ui.TextBox2({
        "id": "txtemail",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "placeholder": kony.i18n.getLocalizedString("lblEnterHere"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmAttestGrad1_txtemail_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1818863783286680 = new kony.ui.Box({
        "id": "hbox1818863783286680",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783286680.add(
    lblEmail, txtemail);
    var line1818863783322520 = new kony.ui.Line({
        "id": "line1818863783322520",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblstudydetails = new kony.ui.Label({
        "id": "lblstudydetails",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStudyDetails"),
        "skin": "lblFrmSubTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var line172579614691971 = new kony.ui.Line({
        "id": "line172579614691971",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblInstitute = new kony.ui.Label({
        "id": "lblInstitute",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblInstitute"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "onSelection": frmAttestGrad1_dropdowninstitue_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectInstitute"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1818863783289997 = new kony.ui.Box({
        "id": "hbox1818863783289997",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783289997.add(
    lblInstitute, dropdowninstitue);
    var line1818863783296406 = new kony.ui.Line({
        "id": "line1818863783296406",
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
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownstudylevel = new kony.ui.ComboBox({
        "id": "dropdownstudylevel",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad1_dropdownstudylevel_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": null,
        "dropDownImage": "downarrow.png"
    });
    var hboxStudyLevel = new kony.ui.Box({
        "id": "hboxStudyLevel",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxStudyLevel.add(
    lblStudyLevel, dropdownstudylevel);
    var lineStudyLevel = new kony.ui.Line({
        "id": "lineStudyLevel",
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
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownmajor = new kony.ui.ComboBox({
        "id": "dropdownmajor",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad1_dropdownmajor_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": null,
        "dropDownImage": "downarrow.png"
    });
    var hboxMajor = new kony.ui.Box({
        "id": "hboxMajor",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxMajor.add(
    lblMajor, dropdownmajor);
    var lineMajor = new kony.ui.Line({
        "id": "lineMajor",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblSubMajor = new kony.ui.Label({
        "id": "lblSubMajor",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSubMajor"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownSubMajor = new kony.ui.ComboBox({
        "id": "dropdownSubMajor",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad1_dropdownSubMajor_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": null,
        "dropDownImage": "downarrow.png"
    });
    var hboxSubmajor = new kony.ui.Box({
        "id": "hboxSubmajor",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxSubmajor.add(
    lblSubMajor, dropdownSubMajor);
    var lblGraduatedYear = new kony.ui.Label({
        "id": "lblGraduatedYear",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGraduatedYear"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var vbox172579614646700 = new kony.ui.Box({
        "id": "vbox172579614646700",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 41,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172579614646700.add();
    var hbox1818863783391251 = new kony.ui.Box({
        "id": "hbox1818863783391251",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783391251.add(
    lblGraduatedYear, txtgraduatedyear, vbox172579614646700);
    var lineGraduateYear = new kony.ui.Line({
        "id": "lineGraduateYear",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNoofDocuments = new kony.ui.Label({
        "id": "lblNoofDocuments",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNoofDocuments"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtnoofdocuments = new kony.ui.TextBox2({
        "id": "txtnoofdocuments",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 2,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": kony.i18n.getLocalizedString("lblEnterHere"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmAttestGrad1_txtnoofdocuments_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var vbox172579614647537 = new kony.ui.Box({
        "id": "vbox172579614647537",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 41,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172579614647537.add();
    var hbox1818863783300465 = new kony.ui.Box({
        "id": "hbox1818863783300465",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783300465.add(
    lblNoofDocuments, txtnoofdocuments, vbox172579614647537);
    var line1818863783302732 = new kony.ui.Line({
        "id": "line1818863783302732",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
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
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "onTextChange": frmAttestGrad1_txtstudentid_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1818863783301280 = new kony.ui.Box({
        "id": "hbox1818863783301280",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783301280.add(
    lblStudentID, txtstudentid);
    var lineStudentLine = new kony.ui.Line({
        "id": "lineStudentLine",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
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
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rdimgAttestInside = new kony.ui.Image2({
        "id": "rdimgAttestInside",
        "isVisible": true,
        "src": "checked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [3, 0, 0, 0],
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 79
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "onClick": frmAttestGrad1_vbxAttestInside_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [6, 0, 0, 0],
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 79
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "onClick": frmAttestGrad1_vbxAttestOutside_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 28,
        "margin": [4, 0, 0, 0],
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
    var hbox1818863783304545 = new kony.ui.Box({
        "id": "hbox1818863783304545",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783304545.add(
    radiobtnpurpose, vbxAttestInside, vbxAttestOutside);
    var line1818863783320067 = new kony.ui.Line({
        "id": "line1818863783320067",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
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
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownpaymentmethod = new kony.ui.ComboBox({
        "id": "dropdownpaymentmethod",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad1_dropdownpaymentmethod_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": null,
        "dropDownImage": "downarrow.png"
    });
    var hbox172579614661259 = new kony.ui.Box({
        "id": "hbox172579614661259",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 56,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172579614661259.add(
    dropdownpaymentmethod);
    var dropdownpaymentcardtype = new kony.ui.ComboBox({
        "id": "dropdownpaymentcardtype",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad1_dropdownpaymentcardtype_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": null,
        "dropDownImage": "downarrow.png"
    });
    var hbox172579614661628 = new kony.ui.Box({
        "id": "hbox172579614661628",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 44,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172579614661628.add(
    dropdownpaymentcardtype);
    var vbox172579614659850 = new kony.ui.Box({
        "id": "vbox172579614659850",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 64,
        "margin": [9, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172579614659850.add(
    hbox172579614661259, hbox172579614661628);
    var hbox1818863783320210 = new kony.ui.Box({
        "id": "hbox1818863783320210",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
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
    hbox1818863783320210.add(
    lblPaymentMethod, vbox172579614659850);
    var lineBeforePrevCert = new kony.ui.Line({
        "id": "lineBeforePrevCert",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblpreviousstudydetails = new kony.ui.Label({
        "id": "lblpreviousstudydetails",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPrevStudyDetails"),
        "skin": "lblFrmSubTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var line172579614691972 = new kony.ui.Line({
        "id": "line172579614691972",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblStudyLevel1 = new kony.ui.Label({
        "id": "lblStudyLevel1",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStudyLevel"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownstudylevel1 = new kony.ui.ComboBox({
        "id": "dropdownstudylevel1",
        "isVisible": true,
        "masterData": [
            ["0", kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel")],
            ["1", kony.i18n.getLocalizedString("lblSecondarySchool")],
            ["2", kony.i18n.getLocalizedString("lblDiploma")],
            ["3", kony.i18n.getLocalizedString("lblBachelor")],
            ["4", kony.i18n.getLocalizedString("lblMaster")]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1818863783326187 = new kony.ui.Box({
        "id": "hbox1818863783326187",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783326187.add(
    lblStudyLevel1, dropdownstudylevel1);
    var lineStudyLevel1 = new kony.ui.Line({
        "id": "lineStudyLevel1",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblInstituteName = new kony.ui.Label({
        "id": "lblInstituteName",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblInstituteName"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtinstitutename = new kony.ui.TextBox2({
        "id": "txtinstitutename",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("lblEnterName"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmAttestGrad1_txtinstitutename_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hboxInstitute1 = new kony.ui.Box({
        "id": "hboxInstitute1",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxInstitute1.add(
    lblInstituteName, txtinstitutename);
    var lineInstitute1 = new kony.ui.Line({
        "id": "lineInstitute1",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label1818863783330605 = new kony.ui.Label({
        "id": "label1818863783330605",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMajor"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtmajor = new kony.ui.TextBox2({
        "id": "txtmajor",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("lblEnterHere"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmAttestGrad1_txtmajor_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hboxMajor1 = new kony.ui.Box({
        "id": "hboxMajor1",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxMajor1.add(
    label1818863783330605, txtmajor);
    var lineMajor1 = new kony.ui.Line({
        "id": "lineMajor1",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var radiobtniscertificateattested = new kony.ui.Label({
        "id": "radiobtniscertificateattested",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblIsCertificateAttested"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rbimgNo = new kony.ui.Image2({
        "id": "rbimgNo",
        "isVisible": true,
        "src": "checked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [3, 0, 0, 0],
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
    var rblblNo = new kony.ui.Label({
        "id": "rblblNo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNo"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 69
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxNo = new kony.ui.Box({
        "id": "hbxNo",
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
    hbxNo.add(
    rbimgNo, rblblNo);
    var vbxNo = new kony.ui.Box({
        "id": "vbxNo",
        "isVisible": true,
        "onClick": frmAttestGrad1_vbxNo_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 32,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxNo.add(
    hbxNo);
    var rbimgYes = new kony.ui.Image2({
        "id": "rbimgYes",
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
        "containerWeight": 24
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var rblblYes = new kony.ui.Label({
        "id": "rblblYes",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblYes"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 76
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxYes = new kony.ui.Box({
        "id": "hbxYes",
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
    hbxYes.add(
    rbimgYes, rblblYes);
    var vbxYes = new kony.ui.Box({
        "id": "vbxYes",
        "isVisible": true,
        "onClick": frmAttestGrad1_vbxYes_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 29,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxYes.add(
    hbxYes);
    var hboxIsAttested = new kony.ui.Box({
        "id": "hboxIsAttested",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxIsAttested.add(
    radiobtniscertificateattested, vbxNo, vbxYes);
    var line1818863783358014 = new kony.ui.Line({
        "id": "line1818863783358014",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lbltransfercertificatedetails = new kony.ui.Label({
        "id": "lbltransfercertificatedetails",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblTransferCertDetails"),
        "skin": "lblFrmSubTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var line172579614692457 = new kony.ui.Line({
        "id": "line172579614692457",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblInstituteNameCert = new kony.ui.Label({
        "id": "lblInstituteNameCert",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblInstituteName"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtinstitutename2 = new kony.ui.TextBox2({
        "id": "txtinstitutename2",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("lblEnterName"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmAttestGrad1_txtinstitutename2_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1818863783358673 = new kony.ui.Box({
        "id": "hbox1818863783358673",
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
    hbox1818863783358673.add(
    lblInstituteNameCert, txtinstitutename2);
    var line1818863783359643 = new kony.ui.Line({
        "id": "line1818863783359643",
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
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownnationality1 = new kony.ui.ComboBox({
        "id": "dropdownnationality1",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmAttestGrad1_dropdownnationality1_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1818863783359730 = new kony.ui.Box({
        "id": "hbox1818863783359730",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 15,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783359730.add(
    lblCountry, dropdownnationality1);
    var line1818863783360980 = new kony.ui.Line({
        "id": "line1818863783360980",
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
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtcredithours = new kony.ui.TextBox2({
        "id": "txtcredithours",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 2,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("lblEnterHere"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmAttestGrad1_txtcredithours_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1818863783361167 = new kony.ui.Box({
        "id": "hbox1818863783361167",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783361167.add(
    lblCreditHours, txtcredithours);
    var line1818863783363235 = new kony.ui.Line({
        "id": "line1818863783363235",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var vbox17230851705920846 = new kony.ui.Box({
        "id": "vbox17230851705920846",
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
    vbox17230851705920846.add(
    lbltransfercertificatedetails, line172579614692457, hbox1818863783358673, line1818863783359643, hbox1818863783359730, line1818863783360980, hbox1818863783361167, line1818863783363235);
    var hboxCertificateDetails = new kony.ui.Box({
        "id": "hboxCertificateDetails",
        "isVisible": true,
        "focusSkin": "sknHbxCam",
        "onClick": frmAttestGrad1_hboxCertificateDetails_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxCertificateDetails.add(
    vbox17230851705920846);
    var lblCaptureCertImage = new kony.ui.Label({
        "id": "lblCaptureCertImage",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCaptureCertImage"),
        "skin": "lblFrmSubTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox172579614668022 = new kony.ui.Box({
        "id": "vbox172579614668022",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 87,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172579614668022.add(
    lblCaptureCertImage);
    var camCertImage = new kony.ui.Camera({
        "id": "camCertImage",
        "isVisible": true,
        "text": null,
        "skin": "sknCameraCertImage",
        "focusSkin": "camFocus",
        "onCapture": frmAttestGrad1_camCertImage_onCapture_seq0,
        "scaleFactor": 80,
        "compressionLevel": 0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": false,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": true,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_DEFAULT,
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "overlayConfig": {}
    });
    var vbox172579614666665 = new kony.ui.Box({
        "id": "vbox172579614666665",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 13,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172579614666665.add(
    camCertImage);
    var hbxcaptureimage = new kony.ui.Box({
        "id": "hbxcaptureimage",
        "isVisible": true,
        "skin": "sknHbxCam",
        "focusSkin": "sknHbxCam",
        "onClick": frmAttestGrad1_hbxcaptureimage_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 1, 0, 1],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxcaptureimage.add(
    vbox172579614668022, vbox172579614666665);
    var imgCamPreview = new kony.ui.Image2({
        "id": "imgCamPreview",
        "isVisible": true,
        "src": null,
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
        "containerWeight": 2
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var btnSubmit = new kony.ui.Button({
        "id": "btnSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSubmit"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmAttestGrad1_btnSubmit_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 0, 1],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
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
    hbox172579614690395, lblgeneralinformation, line172579614691554, hbox1818863783238756, line15518273911, hbox1818863783239645, line1818863783269675, hbox1818863783269770, line1818863783288730, hbox1818863783270579, line1818863783272265, hbox1818863783272524, line1818863783273884, hbox1818863783273971, hbxEmiratesID, line1818863783283828, hbox1818863783282910, line1818863783285248, hbox1818863783285451, line1818863783286557, hbox1818863783286680, line1818863783322520, lblstudydetails, line172579614691971, hbox1818863783289997, line1818863783296406, hboxStudyLevel, lineStudyLevel, hboxMajor, lineMajor, hboxSubmajor, hbox1818863783391251, lineGraduateYear, hbox1818863783300465, line1818863783302732, hbox1818863783301280, lineStudentLine, hbox1818863783304545, line1818863783320067, hbox1818863783320210, lineBeforePrevCert, lblpreviousstudydetails, line172579614691972, hbox1818863783326187, lineStudyLevel1, hboxInstitute1, lineInstitute1, hboxMajor1, lineMajor1, hboxIsAttested, line1818863783358014, hboxCertificateDetails, hbxcaptureimage, imgCamPreview, btnSubmit);
    var hbox1727732536453133 = new kony.ui.Box({
        "id": "hbox1727732536453133",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536453133.add(
    vbxLeftMenu, vbxRightMenu);
    frmAttestGrad1.add(
    hbox1727732536453133);
};

function frmAttestGrad1Globals() {
    var MenuId = [];
    frmAttestGrad1 = new kony.ui.Form2({
        "id": "frmAttestGrad1",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmAttestGrad1_frmAttestGrad1_init_seq0,
        "preShow": frmAttestGrad1_frmAttestGrad1_preshow_seq0,
        "onOrientationChange": frmAttestGrad1_frmAttestGrad1_onOrientationChange_seq0,
        "addWidgets": addWidgetsfrmAttestGrad1
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