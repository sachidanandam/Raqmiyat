//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 23 16:40:52 IST 2015
function frmCertRequest3_frmCertRequest3_preshow_seq0Ar(eventobject, neworientation) {
    /* 
attest3AdjustFooter.call(this);
 */
};
function frmCertRequest3_txtName_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest3.lblName);
};
function frmCertRequest3_txtmobilenumber_onDone_seq0Ar(eventobject, changedtext) {
    frmNewReg.txtemiratesid1.setFocus(true);
};
function frmCertRequest3_txtmobilenumber_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest3.lblMobile);
};
function frmCertRequest3_vbxMale_onClick_seq0Ar(eventobject) {
    setGender.call(this, true, frmCertRequest3.rbimgPublic, frmCertRequest3.rbimgprivate);
};
function frmCertRequest3_vbxFemale_onClick_seq0Ar(eventobject) {
    setGender.call(this, false, frmCertRequest3.rbimgPublic, frmCertRequest3.rbimgprivate);
};
function frmCertRequest3_txtIdentityNo_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest3.lblIdNo);
};
function frmCertRequest3_txtemail_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest3.lblEmail);
};
function frmCertRequest3_dropdownApplicantCountry_onSelection_seq0Ar(eventobject) {
    SknTxtChangeValidation.call(this, frmCertRequest3.lblNationality);
};
function frmCertRequest3_btnSubmit_onClick_seq0Ar(eventobject) {
    /* 
onBtnClickSubmitCertReqStep3.call(this);
 */
    checkFieldsRequestStep1.call(this);
};
function frmCertRequest3_btnPrev_onClick_seq0Ar(eventobject) {
    frmCertRequest2.show();
};
function addWidgetsfrmCertRequest3Ar() {
    var lblAppInfo = new kony.ui.Label({
        "id": "lblAppInfo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAppInfo"),
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var txtName = new kony.ui.TextBox2({
        "id": "txtName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest3_txtName_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var line15518273911 = new kony.ui.Line({
        "id": "line15518273911",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var dropdownmobileareacode = new kony.ui.ComboBox({
        "id": "dropdownmobileareacode",
        "isVisible": true,
        "masterData": [["0", "050"],["1", "055"],["2", "056"],["3", "052"]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 1,0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {});
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
        "onDone": frmCertRequest3_txtmobilenumber_onDone_seq0Ar,
        "onTextChange": frmCertRequest3_txtmobilenumber_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,3, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 69
    }, {});
    var hbox1551827399094 = new kony.ui.Box({
        "id": "hbox1551827399094",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1551827399094.add(     txtmobilenumber,dropdownmobileareacode);
    var line17284177585448 = new kony.ui.Line({
        "id": "line17284177585448",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var label17284177589742 = new kony.ui.Label({
        "id": "label17284177589742",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPhone"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var txtTelephoneAreaCode = new kony.ui.TextBox2({
        "id": "txtTelephoneAreaCode",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 3,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {});
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
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,3, 0],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 69
    }, {});
    var hbox1551827398673 = new kony.ui.Box({
        "id": "hbox1551827398673",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1551827398673.add(     txtTelephoneNumber,txtTelephoneAreaCode);
    var line17284177589748 = new kony.ui.Line({
        "id": "line17284177589748",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
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
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var line172841775811128 = new kony.ui.Line({
        "id": "line172841775811128",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 3, 3,2, 1],
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var rbimgPublic = new kony.ui.Image2({
        "id": "rbimgPublic",
        "isVisible": true,
        "src": "unchecked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 94
    }, {});
    var vbxMale = new kony.ui.Box({
        "id": "vbxMale",
        "isVisible": true,
        "onClick": frmCertRequest3_vbxMale_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 10,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxMale.add(    rbimgPublic);
    var lblMale = new kony.ui.Label({
        "id": "lblMale",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMale"),
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {});
    var rbimgprivate = new kony.ui.Image2({
        "id": "rbimgprivate",
        "isVisible": true,
        "src": "unchecked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 94
    }, {});
    var vbxFemale = new kony.ui.Box({
        "id": "vbxFemale",
        "isVisible": true,
        "onClick": frmCertRequest3_vbxFemale_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 12,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxFemale.add(    rbimgprivate);
    var lblFemale = new kony.ui.Label({
        "id": "lblFemale",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFemale"),
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {});
    var hbxGender = new kony.ui.Box({
        "id": "hbxGender",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 2, 0,2, 0],
        "padding": [ 0, 1,0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxGender.add(     lblFemale, vbxFemale, lblMale,vbxMale);
    var line172841775811748 = new kony.ui.Line({
        "id": "line172841775811748",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 3, 3,2, 1],
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var txtIdentityNo = new kony.ui.TextBox2({
        "id": "txtIdentityNo",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest3_txtIdentityNo_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var line1728447549198247 = new kony.ui.Line({
        "id": "line1728447549198247",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 3, 3,2, 1],
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {});
    var txtemail = new kony.ui.TextBox2({
        "id": "txtemail",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertRequest3_txtemail_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {});
    var line1728447549198547 = new kony.ui.Line({
        "id": "line1728447549198547",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 3, 3,2, 1],
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var dropdownApplicantCountry = new kony.ui.ComboBox({
        "id": "dropdownApplicantCountry",
        "isVisible": true,
        "masterData": [["0", "Select Country"],["1", "India"]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertRequest3_dropdownApplicantCountry_onSelection_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {});
    var line1723800126286 = new kony.ui.Line({
        "id": "line1723800126286",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 3, 3,2, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label1728447549204171 = new kony.ui.Label({
        "id": "label1728447549204171",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblRemarks"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {});
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
        "margin": [ 3, 0,3, 4],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});
    var btnSubmit = new kony.ui.Button({
        "id": "btnSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSubmit"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertRequest3_btnSubmit_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 5,3, 4],
        "padding": [ 0, 3,0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1818863783319607 = new kony.ui.Box({
        "id": "hbox1818863783319607",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783319607.add(    btnSubmit);
    var lineFooter = new kony.ui.Line({
        "id": "lineFooter",
        "isVisible": true,
        "skin": "lineFtr"
    }, {
        "thickness": 2,
        "margin": [ 0, 0,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnPrev = new kony.ui.Button({
        "id": "btnPrev",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnPrev",
        "focusSkin": "sknBtnPrev",
        "onClick": frmCertRequest3_btnPrev_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var lblSteps = new kony.ui.Label({
        "id": "lblSteps",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStep3"),
        "skin": "sknFtrSteps"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 83
    }, {});
    var btnNext = new kony.ui.Button({
        "id": "btnNext",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnNextInact",
        "focusSkin": "sknBtnNextInact"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var hbox155182739221589 = new kony.ui.Box({
        "id": "hbox155182739221589",
        "isVisible": true,
        "skin": "sknFooter",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 85,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 4, 3,4, 3],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox155182739221589.add(     btnNext, lblSteps,btnPrev);
    var vbox155182739219799 = new kony.ui.Box({
        "id": "vbox155182739219799",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox155182739219799.add(    lineFooter, hbox155182739221589);
    var hbxFooter = new kony.ui.Box({
        "id": "hbxFooter",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFooter.add(    vbox155182739219799);
    frmCertRequest3Ar.add(    lblAppInfo, lblName, txtName, line15518273911, lblMobile, hbox1551827399094, line17284177585448, label17284177589742, hbox1551827398673, line17284177589748, lblFax, txtFax, line172841775811128, lblGender, hbxGender, line172841775811748, lblIdNo, txtIdentityNo, line1728447549198247, lblEmail, txtemail, line1728447549198547, lblNationality, dropdownApplicantCountry, line1723800126286, label1728447549204171, txtRemarks, hbox1818863783319607, hbxFooter);
};
function frmCertRequest3GlobalsAr() {
    var MenuId = [];
    frmCertRequest3Ar = new kony.ui.Form2({
        "id": "frmCertRequest3",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox172311493310632, hbox172311493310656],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "preShow": frmCertRequest3_frmCertRequest3_preshow_seq0Ar,
        "addWidgets": addWidgetsfrmCertRequest3Ar
    }, {
        "padding": [ 0, 0,0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "directChildrenIDs": ["lblAppInfo", "lblName", "txtName", "line15518273911", "lblMobile", "hbox1551827399094", "dropdownmobileareacode", "txtmobilenumber", "line17284177585448", "label17284177589742", "hbox1551827398673", "txtTelephoneAreaCode", "txtTelephoneNumber", "line17284177589748", "lblFax", "txtFax", "line172841775811128", "lblGender", "hbxGender", "vbxMale", "rbimgPublic", "lblMale", "vbxFemale", "rbimgprivate", "lblFemale", "line172841775811748", "lblIdNo", "txtIdentityNo", "line1728447549198247", "lblEmail", "txtemail", "line1728447549198547", "lblNationality", "dropdownApplicantCountry", "line1723800126286", "label1728447549204171", "txtRemarks", "hbox1818863783319607", "btnSubmit", "hbxFooter", "vbox155182739219799", "lineFooter", "hbox155182739221589", "btnPrev", "lblSteps", "btnNext"]
    });
};
