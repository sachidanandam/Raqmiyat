//Do not Modify!! This is an auto generated module for 'ipad'. Generated on Thu Jan 29 20:03:10 IST 2015
function frmCertRequest_frmCertRequest_init_seq0Ar(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmCertRequest, "2");
};

function frmCertRequest_frmCertRequest_preshow_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmCertRequest, "2");
 */
    leftMenuUiSelect.call(this, "2.3", frmCertRequest);
    clearInquirycerttab.call(this);
    LeftMenuChange.call(this, "2");
    frmOrient.call(this, frmCertRequest);
    retriveImagesFromGallery.call(this);
    loadreqdocs.call(this);
};

function frmCertRequest_frmCertRequest_onOrientationChange_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmCertRequest, "2");
 */
    frmOrient.call(this, frmCertRequest);
    leftMenuUiSelect.call(this, "2.3", frmCertRequest);
    /* 
onfrmOrientionChange.call(this,frmCertRequest);
 */
};

function frmCertRequest_hbox172761337253533_onClick_seq0Ar(eventobject, context) {
    removeFile.call(this);
};

function frmCertRequest_txtuniversity_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblUniversity);
};

function frmCertRequest_dropdowncountryprevdegree_onSelection_seq0Ar(eventobject) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblCountry);
};

function frmCertRequest_txtDegree_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblDegree);
};

function frmCertRequest_txtMajor_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblMajor);
};

function frmCertRequest_txtYears_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblNoofyears);
};

function frmCertRequest_hbxAttestInside_onClick_seq0Ar(eventobject) {
    checkVisibility.call(this);
};

function frmCertRequest_vbxAttestOutside_onClick_seq0Ar(eventobject) {
    setGender.call(this, true, frmCertRequest.rbYes, frmCertRequest.rbNo);
    frmCertRequest.hboxChooseFile.isVisible = true;
};

function frmCertRequest_hbxAttestOutside_onClick_seq0Ar(eventobject) {
    checkVisibility.call(this);
};

function frmCertRequest_vbox1818863783308050_onClick_seq0Ar(eventobject) {
    setGender.call(this, false, frmCertRequest.rbYes, frmCertRequest.rbNo);
    frmCertRequest.hboxChooseFile.isVisible = false;
};

function frmCertRequest_button172761337239423_onClick_seq0Ar(eventobject) {
    showFilesAndFolders.call(this);
};

function frmCertRequest_txtrequiredUniversity_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblUniversity);
};

function frmCertRequest_dropdownrequiredCountry_onSelection_seq0Ar(eventobject) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblCountry1);
};

function frmCertRequest_txtrequiredMajor_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblUniversity);
};

function frmCertRequest_txtrequiredNoofYears_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.txtNoOfYears1);
};

function frmCertRequest_txtSemester_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblNoOfSem);
};

function frmCertRequest_txtCreditHours_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblCreditHours);
};

function frmCertRequest_vbxAttestInside_onClick_seq0Ar(eventobject) {
    setEquivalenceCert.call(this, true);
};

function frmCertRequest_hbox17230851705737249_onClick_seq0Ar(eventobject) {
    setGender.call(this, true, frmCertRequest.rdimgAttestInside, frmCertRequest.rdimgAttestOutside);
};

function frmCertRequest_vbox17230851705737255_onClick_seq0Ar(eventobject) {
    setGender.call(this, false, frmCertRequest.rdimgAttestInside, frmCertRequest.rdimgAttestOutside);
};

function frmCertRequest_hbox17230851705737257_onClick_seq0Ar(eventobject) {
    setGender.call(this, false, frmCertRequest.rdimgAttestInside, frmCertRequest.rdimgAttestOutside);
};

function frmCertRequest_dropdownProgram_onSelection_seq0Ar(eventobject) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblProgram);
};

function frmCertRequest_txtName_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblName);
};

function frmCertRequest_txtmobilenumber_onDone_seq0Ar(eventobject, changedtext) {
    frmNewReg.txtemiratesid1.setFocus(true);
};

function frmCertRequest_txtmobilenumber_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblMobile);
};

function frmCertRequest_vbxMale_onClick_seq0Ar(eventobject) {
    setGender.call(this, true, frmCertRequest.rbimgPublic, frmCertRequest.rbimgprivate);
};

function frmCertRequest_vbxFemale_onClick_seq0Ar(eventobject) {
    setGender.call(this, false, frmCertRequest.rbimgPublic, frmCertRequest.rbimgprivate);
};

function frmCertRequest_txtIdentityNo_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblIdNo);
};

function frmCertRequest_txtemail_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblEmail);
};

function frmCertRequest_dropdownApplicantCountry_onSelection_seq0Ar(eventobject) {
    SknTxtChangeValidation.call(this, frmCertRequest.lblNationality);
};

function frmCertRequest_btnSubmit_onClick_seq0Ar(eventobject) {
    checkFieldsRequestStep1.call(this);
};

function addWidgetsfrmCertRequestAr() {
    var vbxLeftMenu = new kony.ui.Box({
        "id": "vbxLeftMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLeftMenu.add();
    var lblGenInfoPrvDegree = new kony.ui.Label({
        "id": "lblGenInfoPrvDegree",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGenInfoPrvDegree"),
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblUniversity = new kony.ui.Label({
        "id": "lblUniversity",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblUniversity"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtuniversity = new kony.ui.TextBox2({
        "id": "txtuniversity",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest_txtuniversity_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox1727732536457387 = new kony.ui.Box({
        "id": "hbox1727732536457387",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536457387.add(txtuniversity, lblUniversity);
    var line1727583581877404 = new kony.ui.Line({
        "id": "line1727583581877404",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
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
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdowncountryprevdegree = new kony.ui.ComboBox({
        "id": "dropdowncountryprevdegree",
        "isVisible": true,
        "masterData": [
            ["1", "India"],
            ["0", "Select Country"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertRequest_dropdowncountryprevdegree_onSelection_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox17230851705616087 = new kony.ui.Box({
        "id": "hbox17230851705616087",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705616087.add(dropdowncountryprevdegree, lblCountry);
    var line17230851705625687 = new kony.ui.Line({
        "id": "line17230851705625687",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblDegree = new kony.ui.Label({
        "id": "lblDegree",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblDegree"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtDegree = new kony.ui.TextBox2({
        "id": "txtDegree",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest_txtDegree_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705618097 = new kony.ui.Box({
        "id": "hbox17230851705618097",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705618097.add(txtDegree, lblDegree);
    var line17230851705628315 = new kony.ui.Line({
        "id": "line17230851705628315",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
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
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtMajor = new kony.ui.TextBox2({
        "id": "txtMajor",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest_txtMajor_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705618285 = new kony.ui.Box({
        "id": "hbox17230851705618285",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705618285.add(txtMajor, lblMajor);
    var line17230851705630549 = new kony.ui.Line({
        "id": "line17230851705630549",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNoofyears = new kony.ui.Label({
        "id": "lblNoofyears",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNoofyears"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtYears = new kony.ui.TextBox2({
        "id": "txtYears",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 1,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest_txtYears_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705618453 = new kony.ui.Box({
        "id": "hbox17230851705618453",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705618453.add(txtYears, lblNoofyears);
    var line17230851705631825 = new kony.ui.Line({
        "id": "line17230851705631825",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblEquilFrmMoHESR = new kony.ui.Label({
        "id": "lblEquilFrmMoHESR",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblEquilFrmMoHESR"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851705618609 = new kony.ui.Box({
        "id": "hbox17230851705618609",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705618609.add(lblEquilFrmMoHESR);
    var line17230851705632929 = new kony.ui.Line({
        "id": "line17230851705632929",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var rbYes = new kony.ui.Image2({
        "id": "rbYes",
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
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxAttestOutside = new kony.ui.Box({
        "id": "vbxAttestOutside",
        "isVisible": true,
        "onClick": frmCertRequest_vbxAttestOutside_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 16,
        "margin": [0, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxAttestOutside.add(rbYes);
    var rbYes1 = new kony.ui.Label({
        "id": "rbYes1",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rbYes1"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 57
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxAttestInside = new kony.ui.Box({
        "id": "hbxAttestInside",
        "isVisible": true,
        "onClick": frmCertRequest_hbxAttestInside_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxAttestInside.add(rbYes1, vbxAttestOutside);
    var rbNo = new kony.ui.Image2({
        "id": "rbNo",
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
    var vbox1818863783308050 = new kony.ui.Box({
        "id": "vbox1818863783308050",
        "isVisible": true,
        "onClick": frmCertRequest_vbox1818863783308050_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 16,
        "margin": [0, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1818863783308050.add(rbNo);
    var lblNo = new kony.ui.Label({
        "id": "lblNo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNo"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 57
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxAttestOutside = new kony.ui.Box({
        "id": "hbxAttestOutside",
        "isVisible": true,
        "onClick": frmCertRequest_hbxAttestOutside_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 2, 0, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxAttestOutside.add(lblNo, vbox1818863783308050);
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblDescription"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 1
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtDescription = new kony.ui.TextArea2({
        "id": "txtDescription",
        "isVisible": true,
        "text": null,
        "maxTextLength": null,
        "numberOfVisibleLines": 2,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "skin": "txt2Normal",
        "focusSkin": "txt2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "pasteboardType": constants.TEXTAREA_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": null,
        "autoCorrect": false
    });
    var button172761337239423 = new kony.ui.Button({
        "id": "button172761337239423",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("btnChooseFile"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertRequest_button172761337239423_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var segAttachmentbox = new kony.ui.Box({
        "id": "segAttachmentbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_RIGHT,
        "containerWeight": 45
    }, {});
    var segAttachment = new kony.ui.SegmentedUI2({
        "id": "segAttachment",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "vbox172761337253531": "vbox172761337253531",
            "lblFileName": "lblFileName",
            "hdPath": "hdPath",
            "hdnFileIndex": "hdnFileIndex",
            "imgAttachmentDel": "imgAttachmentDel",
            "hbox172761337253533": "hbox172761337253533",
            "vbox172761337253521": "vbox172761337253521",
            "hbox172761337253523": "hbox172761337253523",
            "hbox172761337253519": "hbox172761337253519"
        },
        "data": [{
            "lblFileName": "",
            "hdPath": "",
            "hdnFileIndex": "",
            "imgAttachmentDel": ""
        }, {
            "lblFileName": "",
            "hdPath": "",
            "hdnFileIndex": "",
            "imgAttachmentDel": ""
        }],
        "rowTemplate": segAttachmentbox,
        "rowSkin": "segWhiteBrBule",
        "rowFocusSkin": "segGrayBrBule",
        "alternateRowSkin": "segGrayBrBule",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 4,
        "separatorColor": "64646464",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [3, 2, 3, 2],
        "padding": [0, 2, 0, 1],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var lblFileName = new kony.ui.Label({
        "id": "lblFileName",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox172761337253523 = new kony.ui.Box({
        "id": "hbox172761337253523",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172761337253523.add(lblFileName);
    var vbox172761337253521 = new kony.ui.Box({
        "id": "vbox172761337253521",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 90,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172761337253521.add(hbox172761337253523);
    var imgAttachmentDel = new kony.ui.Image2({
        "id": "imgAttachmentDel",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
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
    var hbox172761337253533 = new kony.ui.Box({
        "id": "hbox172761337253533",
        "isVisible": true,
        "onClick": frmCertRequest_hbox172761337253533_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172761337253533.add(imgAttachmentDel);
    var vbox172761337253531 = new kony.ui.Box({
        "id": "vbox172761337253531",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 10,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172761337253531.add(hbox172761337253533);
    var hbox172761337253519 = new kony.ui.Box({
        "id": "hbox172761337253519",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172761337253519.add(vbox172761337253531, vbox172761337253521);
    segAttachmentbox.add(hbox172761337253519);
    var vbox1727613372152878 = new kony.ui.Box({
        "id": "vbox1727613372152878",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1727613372152878.add(button172761337239423, segAttachment);
    var hboxChooseFile = new kony.ui.Box({
        "id": "hboxChooseFile",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxChooseFile.add(vbox1727613372152878);
    var lblGenInfoQualiProg = new kony.ui.Label({
        "id": "lblGenInfoQualiProg",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGenInfoQualiProg"),
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblInstitute = new kony.ui.Label({
        "id": "lblInstitute",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblUniversity"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "onTextChange": frmCertRequest_txtrequiredUniversity_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705710925 = new kony.ui.Box({
        "id": "hbox17230851705710925",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705710925.add(txtrequiredUniversity, lblInstitute);
    var line15518273911 = new kony.ui.Line({
        "id": "line15518273911",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCountry1 = new kony.ui.Label({
        "id": "lblCountry1",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCountry"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownrequiredCountry = new kony.ui.ComboBox({
        "id": "dropdownrequiredCountry",
        "isVisible": true,
        "masterData": [
            ["1", "India"],
            ["0", "Select Country"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertRequest_dropdownrequiredCountry_onSelection_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox17230851705713015 = new kony.ui.Box({
        "id": "hbox17230851705713015",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705713015.add(dropdownrequiredCountry, lblCountry1);
    var line17230851705716819 = new kony.ui.Line({
        "id": "line17230851705716819",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
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
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownStudyLevel = new kony.ui.ComboBox({
        "id": "dropdownStudyLevel",
        "isVisible": true,
        "masterData": [
            ["5", "Associate Diploma"],
            ["4", "Bachelor"],
            ["3", "Post Graduate Diploma"],
            ["2", "Master"],
            ["1", "Ph.D."],
            ["0", "Select Study Level"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox17230851705713335 = new kony.ui.Box({
        "id": "hbox17230851705713335",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705713335.add(dropdownStudyLevel, lblStudyLevel);
    var line17230851705720703 = new kony.ui.Line({
        "id": "line17230851705720703",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblMajor1 = new kony.ui.Label({
        "id": "lblMajor1",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMajor"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "onTextChange": frmCertRequest_txtrequiredMajor_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705713645 = new kony.ui.Box({
        "id": "hbox17230851705713645",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705713645.add(txtrequiredMajor, lblMajor1);
    var line17230851705724443 = new kony.ui.Line({
        "id": "line17230851705724443",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var txtNoOfYears1 = new kony.ui.Label({
        "id": "txtNoOfYears1",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNoofyears"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtrequiredNoofYears = new kony.ui.TextBox2({
        "id": "txtrequiredNoofYears",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 1,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest_txtrequiredNoofYears_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705722747 = new kony.ui.Box({
        "id": "hbox17230851705722747",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705722747.add(txtrequiredNoofYears, txtNoOfYears1);
    var line17230851705727871 = new kony.ui.Line({
        "id": "line17230851705727871",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNoOfSem = new kony.ui.Label({
        "id": "lblNoOfSem",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNoOfSem"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
        "onTextChange": frmCertRequest_txtSemester_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705722207 = new kony.ui.Box({
        "id": "hbox17230851705722207",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705722207.add(txtSemester, lblNoOfSem);
    var line17230851705728631 = new kony.ui.Line({
        "id": "line17230851705728631",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
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
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "onTextChange": frmCertRequest_txtCreditHours_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705722467 = new kony.ui.Box({
        "id": "hbox17230851705722467",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705722467.add(txtCreditHours, lblCreditHours);
    var line17230851705729425 = new kony.ui.Line({
        "id": "line17230851705729425",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblTypeOfStudy = new kony.ui.Label({
        "id": "lblTypeOfStudy",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblTypeOfStudy"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851705731137 = new kony.ui.Box({
        "id": "hbox17230851705731137",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705731137.add(lblTypeOfStudy);
    var rdimgAttestInside = new kony.ui.Image2({
        "id": "rdimgAttestInside",
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
    var rdlblFullTime = new kony.ui.Label({
        "id": "rdlblFullTime",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rdlblFullTime"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 79
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851705737249 = new kony.ui.Box({
        "id": "hbox17230851705737249",
        "isVisible": true,
        "onClick": frmCertRequest_hbox17230851705737249_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 30,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705737249.add(rdlblFullTime, rdimgAttestInside);
    var vbxAttestInside = new kony.ui.Box({
        "id": "vbxAttestInside",
        "isVisible": true,
        "onClick": frmCertRequest_vbxAttestInside_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 48,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxAttestInside.add(hbox17230851705737249);
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
    var rdlblpartTime = new kony.ui.Label({
        "id": "rdlblpartTime",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rdlblpartTime"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 79
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851705737257 = new kony.ui.Box({
        "id": "hbox17230851705737257",
        "isVisible": true,
        "onClick": frmCertRequest_hbox17230851705737257_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 30,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705737257.add(rdlblpartTime, rdimgAttestOutside);
    var vbox17230851705737255 = new kony.ui.Box({
        "id": "vbox17230851705737255",
        "isVisible": true,
        "onClick": frmCertRequest_vbox17230851705737255_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 52,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17230851705737255.add(hbox17230851705737257);
    var hbxPurpose = new kony.ui.Box({
        "id": "hbxPurpose",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxPurpose.add(vbox17230851705737255, vbxAttestInside);
    var line17230851705744065 = new kony.ui.Line({
        "id": "line17230851705744065",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblProgram = new kony.ui.Label({
        "id": "lblProgram",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblProgram"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownProgram = new kony.ui.ComboBox({
        "id": "dropdownProgram",
        "isVisible": true,
        "masterData": [
            ["3", "Courses system"],
            ["2", "Courses + Research system"],
            ["1", "Research System"],
            ["0", "Select Programme"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertRequest_dropdownProgram_onSelection_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectProgram"),
        "dropDownImage": "downarrow.png"
    });
    var hbox17230851705734921 = new kony.ui.Box({
        "id": "hbox17230851705734921",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705734921.add(dropdownProgram, lblProgram);
    var line1723085142618 = new kony.ui.Line({
        "id": "line1723085142618",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblAppInfo = new kony.ui.Label({
        "id": "lblAppInfo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAppInfo"),
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var line17230851705756857 = new kony.ui.Line({
        "id": "line17230851705756857",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblName"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtName = new kony.ui.TextBox2({
        "id": "txtName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest_txtName_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705749449 = new kony.ui.Box({
        "id": "hbox17230851705749449",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705749449.add(txtName, lblName);
    var line17230851705753159 = new kony.ui.Line({
        "id": "line17230851705753159",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblMobile = new kony.ui.Label({
        "id": "lblMobile",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMobile"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
        "masterData": [
            ["3", "052"],
            ["2", "056"],
            ["1", "055"],
            ["0", "050"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": "050",
        "dropDownImage": null
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
        "onDone": frmCertRequest_txtmobilenumber_onDone_seq0Ar,
        "onTextChange": frmCertRequest_txtmobilenumber_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 2, 0],
        "padding": [2, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
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
    var hbox17230851705755409 = new kony.ui.Box({
        "id": "hbox17230851705755409",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705755409.add(txtmobilenumber, dropdownmobileareacode, lblMobile);
    var line17230851705763477 = new kony.ui.Line({
        "id": "line17230851705763477",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblPhone = new kony.ui.Label({
        "id": "lblPhone",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPhone"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
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
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 2, 0],
        "padding": [2, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
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
    var hbox17230851705757393 = new kony.ui.Box({
        "id": "hbox17230851705757393",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705757393.add(txtTelephoneNumber, txtTelephoneAreaCode, lblPhone);
    var line17230851705766343 = new kony.ui.Line({
        "id": "line17230851705766343",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblFax = new kony.ui.Label({
        "id": "lblFax",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFax"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtFax = new kony.ui.TextBox2({
        "id": "txtFax",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 10,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705767211 = new kony.ui.Box({
        "id": "hbox17230851705767211",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705767211.add(txtFax, lblFax);
    var line17230851705771987 = new kony.ui.Line({
        "id": "line17230851705771987",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblGender = new kony.ui.Label({
        "id": "lblGender",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGender"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rbimgPublic = new kony.ui.Image2({
        "id": "rbimgPublic",
        "isVisible": true,
        "src": "unchecked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 89
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxMale = new kony.ui.Box({
        "id": "vbxMale",
        "isVisible": true,
        "onClick": frmCertRequest_vbxMale_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 13,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxMale.add(rbimgPublic);
    var lblMale = new kony.ui.Label({
        "id": "lblMale",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMale"),
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rbimgprivate = new kony.ui.Image2({
        "id": "rbimgprivate",
        "isVisible": true,
        "src": "unchecked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 89
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxFemale = new kony.ui.Box({
        "id": "vbxFemale",
        "isVisible": true,
        "onClick": frmCertRequest_vbxFemale_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 16,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxFemale.add(rbimgprivate);
    var lblFemale = new kony.ui.Label({
        "id": "lblFemale",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFemale"),
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851705769965 = new kony.ui.Box({
        "id": "hbox17230851705769965",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705769965.add(lblFemale, vbxFemale, lblMale, vbxMale, lblGender);
    var line17230851705786303 = new kony.ui.Line({
        "id": "line17230851705786303",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblIdNo = new kony.ui.Label({
        "id": "lblIdNo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblIdNo"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtIdentityNo = new kony.ui.TextBox2({
        "id": "txtIdentityNo",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest_txtIdentityNo_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705787095 = new kony.ui.Box({
        "id": "hbox17230851705787095",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705787095.add(txtIdentityNo, lblIdNo);
    var line17230851705791087 = new kony.ui.Line({
        "id": "line17230851705791087",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblEmail = new kony.ui.Label({
        "id": "lblEmail",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblEmail"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
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
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest_txtemail_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
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
    var hbox17230851705790181 = new kony.ui.Box({
        "id": "hbox17230851705790181",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705790181.add(txtemail, lblEmail);
    var line17230851705792263 = new kony.ui.Line({
        "id": "line17230851705792263",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNationality = new kony.ui.Label({
        "id": "lblNationality",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNationality"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownApplicantCountry = new kony.ui.ComboBox({
        "id": "dropdownApplicantCountry",
        "isVisible": true,
        "masterData": [
            ["1", "India"],
            ["0", "Select Country"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertRequest_dropdownApplicantCountry_onSelection_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox17230851705792947 = new kony.ui.Box({
        "id": "hbox17230851705792947",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705792947.add(dropdownApplicantCountry, lblNationality);
    var line17230851705794947 = new kony.ui.Line({
        "id": "line17230851705794947",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [3, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblRemarks = new kony.ui.Label({
        "id": "lblRemarks",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblRemarks"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtRemarks = new kony.ui.TextArea2({
        "id": "txtRemarks",
        "isVisible": true,
        "text": null,
        "maxTextLength": null,
        "numberOfVisibleLines": 2,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtArea",
        "focusSkin": "txt2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 4],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
    }, {
        "pasteboardType": constants.TEXTAREA_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": null,
        "autoCorrect": false
    });
    var hbox17230851705795387 = new kony.ui.Box({
        "id": "hbox17230851705795387",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851705795387.add(txtRemarks, lblRemarks);
    var btnSubmit = new kony.ui.Button({
        "id": "btnSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSubmit"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertRequest_btnSubmit_onClick_seq0Ar
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
        "containerWeight": 1
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbxRightMenu = new kony.ui.Box({
        "id": "vbxRightMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 66,
        "margin": [2, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxRightMenu.add(lblGenInfoPrvDegree, hbox1727732536457387, line1727583581877404, hbox17230851705616087, line17230851705625687, hbox17230851705618097, line17230851705628315, hbox17230851705618285, line17230851705630549, hbox17230851705618453, line17230851705631825, hbox17230851705618609, line17230851705632929, hbxAttestInside, hbxAttestOutside, lblDescription, txtDescription, hboxChooseFile, lblGenInfoQualiProg, hbox17230851705710925, line15518273911, hbox17230851705713015, line17230851705716819, hbox17230851705713335, line17230851705720703, hbox17230851705713645, line17230851705724443, hbox17230851705722747, line17230851705727871, hbox17230851705722207, line17230851705728631, hbox17230851705722467, line17230851705729425, hbox17230851705731137, hbxPurpose, line17230851705744065, hbox17230851705734921, line1723085142618, lblAppInfo, line17230851705756857, hbox17230851705749449, line17230851705753159, hbox17230851705755409, line17230851705763477, hbox17230851705757393, line17230851705766343, hbox17230851705767211, line17230851705771987, hbox17230851705769965, line17230851705786303, hbox17230851705787095, line17230851705791087, hbox17230851705790181, line17230851705792263, hbox17230851705792947, line17230851705794947, hbox17230851705795387, btnSubmit);
    var hbox1727732536453133 = new kony.ui.Box({
        "id": "hbox1727732536453133",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 96,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536453133.add(vbxRightMenu, vbxLeftMenu);
    frmCertRequestAr.add(hbox1727732536453133);
};

function frmCertRequestGlobalsAr() {
    var MenuId = [];
    frmCertRequestAr = new kony.ui.Form2({
        "id": "frmCertRequest",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmCertRequest_frmCertRequest_init_seq0Ar,
        "preShow": frmCertRequest_frmCertRequest_preshow_seq0Ar,
        "onOrientationChange": frmCertRequest_frmCertRequest_onOrientationChange_seq0Ar,
        "addWidgets": addWidgetsfrmCertRequestAr
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