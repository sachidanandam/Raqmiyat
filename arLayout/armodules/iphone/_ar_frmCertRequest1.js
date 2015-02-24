//Do not Modify!! This is an auto generated module for 'iphone'. Generated on Thu Feb 19 10:02:35 IST 2015
function frmCertRequest1_frmCertRequest1_preshow_seq0Ar(eventobject, neworientation) {
    /* 
attest1AdjustFooter.call(this);
 */
    /* 
invokeCertReqCompositService.call(this);
 */
    /* 
retriveImagesFromGallery.call(this);
 */
    /* 
loadreqdocs.call(this);
 */
};
function frmCertRequest1_frmCertRequest1_postshow_seq0Ar(eventobject, neworientation) {
    /* 
loadreqdocs.call(this);
 */
    /* 
if(kony.os.deviceInfo().name=="android"){
alertDialog(kony.i18n.getLocalizedString("rtxtCameraMsg"));
} else {
alertDialog(kony.i18n.getLocalizedString("rtxtCameraMsgIOS"));
}
 */
};
function frmCertRequest1_txtuniversity_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest1.lblUniversity);
};
function frmCertRequest1_dropdowncountryprevdegree_onSelection_seq0Ar(eventobject) {
    SknTxtChangeValidation.call(this, frmCertRequest1.lblCountry);
};
function frmCertRequest1_txtDegree_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest1.lblDegree);
};
function frmCertRequest1_txtMajor_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest1.lblMajor);
};
function frmCertRequest1_txtYears_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertRequest1.lblNoofyears);
};
function frmCertRequest1_hbxPurpose_onClick_seq0Ar(eventobject) {
    checkVisibility.call(this);
};
function frmCertRequest1_vbxAttestInside_onClick_seq0Ar(eventobject) {
    /* 
setEquivalenceCert.call(this,true);
 */
};
function frmCertRequest1_vbxAttestOutside_onClick_seq0Ar(eventobject) {
    setGender.call(this, true, frmCertRequest1.rbYes, frmCertRequest1.rbNo);
    frmCertRequest3.hboxChooseFile.isVisible = true;
};
function frmCertRequest1_hbxAttestOutside_onClick_seq0Ar(eventobject) {
    checkVisibility.call(this);
};
function frmCertRequest1_hbox1816033636207774_onClick_seq0Ar(eventobject) {
    checkVisibility.call(this);
};
function frmCertRequest1_vbox1816033636207776_onClick_seq0Ar(eventobject) {
    /* 
setEquivalenceCert.call(this,true);
 */
};
function frmCertRequest1_vbox1818863783308050_onClick_seq0Ar(eventobject) {
    setGender.call(this, false, frmCertRequest1.rbYes, frmCertRequest1.rbNo);
    frmCertRequest3.hboxChooseFile.isVisible = false;
};
function frmCertRequest1_hbox172761337253533_onClick_seq0Ar(eventobject, context) {
    removeFile.call(this);
};
function frmCertRequest1_button172761337239423_onClick_seq0Ar(eventobject) {
    showFilesAndFolders.call(this);
};
function frmCertRequest1_hbxcaptureimage_onClick_seq0Ar(eventobject) {
    launchDeviceCamera.call(this, kony.application.getCurrentForm());
};
function frmCertRequest1_camCertImage_onCapture_seq0Ar(eventobject) {
    /* 
camCallbackAttestStep3.call(this,eventobject);
 */
    certFileSelection.call(this, eventobject);
};
function frmCertRequest1_btnNext_onClick_seq0Ar(eventobject) {
    /* 
goToRequestfrm2.call(this);
 */
    checkFieldsRequestStep1.call(this);
};
function addWidgetsfrmCertRequest1Ar() {
    var lblGenInfoPrvDegree = new kony.ui.Label({
        "id": "lblGenInfoPrvDegree",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGenInfoPrvDegree"),
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
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
        "onTextChange": frmCertRequest1_txtuniversity_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var line15518273911 = new kony.ui.Line({
        "id": "line15518273911",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 10, 10,5, 10],
        "marginInPixel": true,
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdowncountryprevdegree = new kony.ui.ComboBox({
        "id": "dropdowncountryprevdegree",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertRequest1_dropdowncountryprevdegree_onSelection_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,2, 0],
        "padding": [ 1, 2,0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var line17284177585448 = new kony.ui.Line({
        "id": "line17284177585448",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 10, 10,5, 10],
        "marginInPixel": true,
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
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
        "onTextChange": frmCertRequest1_txtDegree_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var line17284177589748 = new kony.ui.Line({
        "id": "line17284177589748",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 10, 10,5, 10],
        "marginInPixel": true,
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
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
        "onTextChange": frmCertRequest1_txtMajor_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var line172841775811128 = new kony.ui.Line({
        "id": "line172841775811128",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 10, 10,5, 10],
        "marginInPixel": true,
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
        "margin": [ 3, 0,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
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
        "onTextChange": frmCertRequest1_txtYears_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 0,3, 0],
        "padding": [ 1, 2,1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var vbox1818863783240914 = new kony.ui.Box({
        "id": "vbox1818863783240914",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 70,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1818863783240914.add();
    var hbox1818863783240913 = new kony.ui.Box({
        "id": "hbox1818863783240913",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783240913.add(     vbox1818863783240914,txtYears);
    var line172841775811748 = new kony.ui.Line({
        "id": "line172841775811748",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 10, 10,5, 10],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var lblEquilFrmMoHESR = new kony.ui.Label({
        "id": "lblEquilFrmMoHESR",
        "isVisible": false,
        "text": kony.i18n.getLocalizedString("lblEquilFrmMoHESR"),
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rbYes = new kony.ui.Image2({
        "id": "rbYes",
        "isVisible": true,
        "src": "checked.png",
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
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxAttestOutside = new kony.ui.Box({
        "id": "vbxAttestOutside",
        "isVisible": true,
        "onClick": frmCertRequest1_vbxAttestOutside_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 21,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxAttestOutside.add(    rbYes);
    var rbYes1 = new kony.ui.Label({
        "id": "rbYes1",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rbYes1"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 1, 1,1, 1],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxAttestInside.add(     rbYes1,vbxAttestOutside);
    var vbxAttestInside = new kony.ui.Box({
        "id": "vbxAttestInside",
        "isVisible": true,
        "onClick": frmCertRequest1_vbxAttestInside_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 48,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxAttestInside.add(    hbxAttestInside);
    var vbox1818863783308049 = new kony.ui.Box({
        "id": "vbox1818863783308049",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 52,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1818863783308049.add();
    var hbxPurpose = new kony.ui.Box({
        "id": "hbxPurpose",
        "isVisible": false,
        "onClick": frmCertRequest1_hbxPurpose_onClick_seq0Ar,
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
    hbxPurpose.add(     vbox1818863783308049,vbxAttestInside);
    var hbxAttestOutside = new kony.ui.Box({
        "id": "hbxAttestOutside",
        "isVisible": false,
        "onClick": frmCertRequest1_hbxAttestOutside_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 2,0, 2],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxAttestOutside.add();
    var rbNo = new kony.ui.Image2({
        "id": "rbNo",
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
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbox1818863783308050 = new kony.ui.Box({
        "id": "vbox1818863783308050",
        "isVisible": true,
        "onClick": frmCertRequest1_vbox1818863783308050_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 22,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1818863783308050.add(    rbNo);
    var lblNo = new kony.ui.Label({
        "id": "lblNo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNo"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 1, 1,1, 1],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 78
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1816033636207778 = new kony.ui.Box({
        "id": "hbox1816033636207778",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1816033636207778.add(     lblNo,vbox1818863783308050);
    var vbox1816033636207776 = new kony.ui.Box({
        "id": "vbox1816033636207776",
        "isVisible": true,
        "onClick": frmCertRequest1_vbox1816033636207776_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 48,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1816033636207776.add(    hbox1816033636207778);
    var vbox1816033636207786 = new kony.ui.Box({
        "id": "vbox1816033636207786",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 52,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1816033636207786.add();
    var hbox1816033636207774 = new kony.ui.Box({
        "id": "hbox1816033636207774",
        "isVisible": false,
        "onClick": frmCertRequest1_hbox1816033636207774_onClick_seq0Ar,
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
    hbox1816033636207774.add(     vbox1816033636207786,vbox1816033636207776);
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": false,
        "text": kony.i18n.getLocalizedString("lblDescription"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,3, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtDescription = new kony.ui.TextArea2({
        "id": "txtDescription",
        "isVisible": false,
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
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "pasteboardType": constants.TEXTAREA_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showProgressIndicator": true,
        "autoCorrect": false
    });
    var button172761337239423 = new kony.ui.Button({
        "id": "button172761337239423",
        "isVisible": false,
        "text": kony.i18n.getLocalizedString("btnChooseFile"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertRequest1_button172761337239423_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 2,3, 2],
        "padding": [ 0, 2,0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lblChoose = new kony.ui.Label({
        "id": "lblChoose",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCaptureImage"),
        "skin": "sknLblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 1, 1,1, 1],
        "padding": [ 17, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var camCertImage = new kony.ui.Camera({
        "id": "camCertImage",
        "isVisible": true,
        "text": null,
        "skin": "sknCameraCertImage",
        "focusSkin": "camFocus",
        "onCapture": frmCertRequest1_camCertImage_onCapture_seq0Ar,
        "scaleFactor": 80,
        "compressionLevel": 0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 1, 1,1, 1],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": true,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_DEFAULT,
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "overlayConfig": {}
    });
    var hbxcaptureimage = new kony.ui.Box({
        "id": "hbxcaptureimage",
        "isVisible": false,
        "skin": "sknHbxCam",
        "focusSkin": "sknHbxCam",
        "onClick": frmCertRequest1_hbxcaptureimage_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 33,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 3, 6,3, 0],
        "padding": [ 4, 1,4, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxcaptureimage.add(     camCertImage,lblChoose);
    var segAttachmentbox = new kony.ui.Box({
        "id": "segAttachmentbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_RIGHT,
        "containerWeight": 25
    }, {});
    var segAttachment = new kony.ui.SegmentedUI2({
        "id": "segAttachment",
        "isVisible": false,
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
        "margin": [ 3, 2,3, 2],
        "padding": [ 0, 2,0, 1],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {
        "indicator": constants.SEGUI_NONE,
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
        "margin": [ 1, 1,1, 1],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
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
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172761337253523.add(    lblFileName);
    var vbox172761337253521 = new kony.ui.Box({
        "id": "vbox172761337253521",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 92,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172761337253521.add(    hbox172761337253523);
    var imgAttachmentDel = new kony.ui.Image2({
        "id": "imgAttachmentDel",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
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
        "onClick": frmCertRequest1_hbox172761337253533_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172761337253533.add(    imgAttachmentDel);
    var vbox172761337253531 = new kony.ui.Box({
        "id": "vbox172761337253531",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 8,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172761337253531.add(    hbox172761337253533);
    var hbox172761337253519 = new kony.ui.Box({
        "id": "hbox172761337253519",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172761337253519.add(     vbox172761337253531,vbox172761337253521);
    segAttachmentbox.add(    hbox172761337253519);
    var vbox1727613372152878 = new kony.ui.Box({
        "id": "vbox1727613372152878",
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
    vbox1727613372152878.add(    button172761337239423, hbxcaptureimage, segAttachment);
    var hboxChooseFile = new kony.ui.Box({
        "id": "hboxChooseFile",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxChooseFile.add(    vbox1727613372152878);
    var line172380012618 = new kony.ui.Line({
        "id": "line172380012618",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 10, 10,5, 10],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var btnPrev = new kony.ui.Button({
        "id": "btnPrev",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnInvisible",
        "focusSkin": "sknBtnInvisible"
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lblSteps = new kony.ui.Label({
        "id": "lblSteps",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStep1"),
        "skin": "sknFtrSteps"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 1, 1,1, 1],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 83
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnNext = new kony.ui.Button({
        "id": "btnNext",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnNext",
        "focusSkin": "sknBtnNext",
        "onClick": frmCertRequest1_btnNext_onClick_seq0Ar
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbox155182739221589 = new kony.ui.Box({
        "id": "hbox155182739221589",
        "isVisible": true,
        "skin": "sknFooter",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 80,
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
    vbox155182739219799.add(    hbox155182739221589);
    var hbxFooter = new kony.ui.Box({
        "id": "hbxFooter",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
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
    frmCertRequest1Ar.add(    lblGenInfoPrvDegree, lblUniversity, txtuniversity, line15518273911, lblCountry, dropdowncountryprevdegree, line17284177585448, lblDegree, txtDegree, line17284177589748, lblMajor, txtMajor, line172841775811128, lblNoofyears, hbox1818863783240913, line172841775811748, lblEquilFrmMoHESR, hbxPurpose, hbxAttestOutside, hbox1816033636207774, lblDescription, txtDescription, hboxChooseFile, line172380012618, hbxFooter);
};
function frmCertRequest1GlobalsAr() {
    var MenuId = [];
    frmCertRequest1Ar = new kony.ui.Form2({
        "id": "frmCertRequest1",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox172311493310632, hbox172311493310656],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "preShow": frmCertRequest1_frmCertRequest1_preshow_seq0Ar,
        "postShow": frmCertRequest1_frmCertRequest1_postshow_seq0Ar,
        "addWidgets": addWidgetsfrmCertRequest1Ar
    }, {
        "padding": [ 0, 0,0, 0],
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
