//Do not Modify!! This is an auto generated module for 'ipad'. Generated on Thu Feb 19 10:01:07 IST 2015
function frmCertEquivalencyTab1_frmCertEquivalencyTab1_init_seq0Ar(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmCertEquivalencyTab1, "2");
};
function frmCertEquivalencyTab1_frmCertEquivalencyTab1_preshow_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmCertEquivalencyTab1, "2");
 */
    leftMenuUiSelect.call(this, "2.1", frmCertEquivalencyTab1);
    /* 
resetCertificateEquivalencytab.call(this);
 */
    loadequivalencycomposite.call(this);
    LeftMenuChange.call(this, "2");
    frmOrient.call(this, frmCertEquivalencyTab1);
    leftMenuAssignment.call(this, frmCertEquivalencyTab1, "2");
};
function frmCertEquivalencyTab1_frmCertEquivalencyTab1_onOrientationChange_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmCertEquivalencyTab1, gvModuleSelect);
 */
    frmOrient.call(this, frmCertEquivalencyTab1);
    leftMenuUiSelect.call(this, "2.1", frmCertEquivalencyTab1);
    /* 
onfrmOrientionChange.call(this,frmCertEquivalencyTab1);
 */
};
function frmCertEquivalencyTab1_vbxPublic_onClick_seq0Ar(eventobject) {
    setGender.call(this, true, frmCertEquivalencyTab1.rbimgPublic, frmCertEquivalencyTab1.rbimgprivate);
};
function frmCertEquivalencyTab1_vbxPrivate_onClick_seq0Ar(eventobject) {
    setGender.call(this, false, frmCertEquivalencyTab1.rbimgPublic, frmCertEquivalencyTab1.rbimgprivate);
};
function frmCertEquivalencyTab1_vbox1728417731112013_onClick_seq0Ar(eventobject) {
    setGender.call(this, true, frmCertEquivalencyTab1.rbimgmale, frmCertEquivalencyTab1.rbimgfemale);
};
function frmCertEquivalencyTab1_vbox1728417731112019_onClick_seq0Ar(eventobject) {
    setGender.call(this, false, frmCertEquivalencyTab1.rbimgmale, frmCertEquivalencyTab1.rbimgfemale);
};
function frmCertEquivalencyTab1_vbox181606342714374_onClick_seq0Ar(eventobject) {
    setGender.call(this, true, frmCertEquivalencyTab1.imgSelf, frmCertEquivalencyTab1.imgSponser);
};
function frmCertEquivalencyTab1_vbox181606342714375_onClick_seq0Ar(eventobject) {
    setGender.call(this, false, frmCertEquivalencyTab1.imgSelf, frmCertEquivalencyTab1.imgSponser);
};
function frmCertEquivalencyTab1_dropdownpaymentmethodtype_onSelection_seq0Ar(eventobject) {
    loadpaymentmethod.call(this);
};
function frmCertEquivalencyTab1_btnNext_onClick_seq0Ar(eventobject) {
    validateCertEquiPgFieldGoFurther.call(this);
};
function addWidgetsfrmCertEquivalencyTab1Ar() {
    var vbxLeftMenu = new kony.ui.Box({
        "id": "vbxLeftMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLeftMenu.add();
    var lblCertificateDetails = new kony.ui.Label({
        "id": "lblCertificateDetails",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertificateDetails"),
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,0, 1],
        "padding": [ 0, 0,0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblCertSubmit = new kony.ui.Label({
        "id": "lblCertSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertSubmit"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtCertSubittedBy = new kony.ui.TextBox2({
        "id": "txtCertSubittedBy",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
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
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
    var hbox1727732536457387 = new kony.ui.Box({
        "id": "hbox1727732536457387",
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
    hbox1727732536457387.add(     txtCertSubittedBy,lblCertSubmit);
    var line1727583581883540 = new kony.ui.Line({
        "id": "line1727583581883540",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
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
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownStudyLevel = new kony.ui.ComboBox({
        "id": "dropdownStudyLevel",
        "isVisible": true,
        "masterData": [["5", "Associate Diploma"],["4", "Bachelor"],["3", "Post Graduate Diploma"],["2", "Master"],["1", "Ph.D."],["0", "Select Study Level"]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1727732536459533 = new kony.ui.Box({
        "id": "hbox1727732536459533",
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
    hbox1727732536459533.add(     dropdownStudyLevel,lblStudyLevel);
    var line1727583581882692 = new kony.ui.Line({
        "id": "line1727583581882692",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
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
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
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
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
    var hbox1727732536459700 = new kony.ui.Box({
        "id": "hbox1727732536459700",
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
    hbox1727732536459700.add(     txtMajor,lblMajor);
    var line1727583581881300 = new kony.ui.Line({
        "id": "line1727583581881300",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblIssuedBy = new kony.ui.Label({
        "id": "lblIssuedBy",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblIssuedBy"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
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
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 92
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxPublic = new kony.ui.Box({
        "id": "vbxPublic",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbxPublic_onClick_seq0Ar,
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
    vbxPublic.add(    rbimgPublic);
    var rblblPublic = new kony.ui.Label({
        "id": "rblblPublic",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rblblPublic"),
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
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
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 92
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbxPrivate = new kony.ui.Box({
        "id": "vbxPrivate",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbxPrivate_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 13,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxPrivate.add(    rbimgprivate);
    var rblblPrivate = new kony.ui.Label({
        "id": "rblblPrivate",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rblblPrivete"),
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
        "containerWeight": 40
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxIssueByRadio = new kony.ui.Box({
        "id": "hbxIssueByRadio",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 2, 0,2, 0],
        "padding": [ 0, 1,0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxIssueByRadio.add(     rblblPrivate, vbxPrivate, rblblPublic,vbxPublic);
    var vbox1723085142124296 = new kony.ui.Box({
        "id": "vbox1723085142124296",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 62,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1723085142124296.add(    hbxIssueByRadio);
    var hbox1727732536459881 = new kony.ui.Box({
        "id": "hbox1727732536459881",
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
    hbox1727732536459881.add(     vbox1723085142124296,lblIssuedBy);
    var line1727583581913318 = new kony.ui.Line({
        "id": "line1727583581913318",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCountryOfExamination = new kony.ui.Label({
        "id": "lblCountryOfExamination",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCountryOfExam"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdowncountryofexam = new kony.ui.ComboBox({
        "id": "dropdowncountryofexam",
        "isVisible": true,
        "masterData": [["999", "Others"],["0", "Please Select Country"]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1727732536463109 = new kony.ui.Box({
        "id": "hbox1727732536463109",
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
    hbox1727732536463109.add(     dropdowncountryofexam,lblCountryOfExamination);
    var line1728417731110105 = new kony.ui.Line({
        "id": "line1728417731110105",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var line17248130181081909 = new kony.ui.Line({
        "id": "line17248130181081909",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label1728417731112007 = new kony.ui.Label({
        "id": "label1728417731112007",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGender"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rbimgmale = new kony.ui.Image2({
        "id": "rbimgmale",
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
        "containerWeight": 92
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbox1728417731112013 = new kony.ui.Box({
        "id": "vbox1728417731112013",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbox1728417731112013_onClick_seq0Ar,
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
    vbox1728417731112013.add(    rbimgmale);
    var label1728417731112017 = new kony.ui.Label({
        "id": "label1728417731112017",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMale"),
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rbimgfemale = new kony.ui.Image2({
        "id": "rbimgfemale",
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
        "containerWeight": 92
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbox1728417731112019 = new kony.ui.Box({
        "id": "vbox1728417731112019",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbox1728417731112019_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 13,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1728417731112019.add(    rbimgfemale);
    var label1728417731112023 = new kony.ui.Label({
        "id": "label1728417731112023",
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
        "containerWeight": 40
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1728417731112011 = new kony.ui.Box({
        "id": "hbox1728417731112011",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 2, 0,2, 0],
        "padding": [ 0, 1,0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1728417731112011.add(     label1728417731112023, vbox1728417731112019, label1728417731112017,vbox1728417731112013);
    var vbox1728417731112009 = new kony.ui.Box({
        "id": "vbox1728417731112009",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 62,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1728417731112009.add(    hbox1728417731112011);
    var hbox1728417731112005 = new kony.ui.Box({
        "id": "hbox1728417731112005",
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
    hbox1728417731112005.add(     vbox1728417731112009,label1728417731112007);
    var lblEmirate = new kony.ui.Label({
        "id": "lblEmirate",
        "isVisible": false,
        "text": kony.i18n.getLocalizedString("lblEmirate"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownemirate = new kony.ui.ComboBox({
        "id": "dropdownemirate",
        "isVisible": false,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1728417731104321 = new kony.ui.Box({
        "id": "hbox1728417731104321",
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
    hbox1728417731104321.add(     dropdownemirate,lblEmirate);
    var line1728417731103337 = new kony.ui.Line({
        "id": "line1728417731103337",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnConcentLetter = new kony.ui.Button({
        "id": "btnConcentLetter",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblConcentLetter"),
        "skin": "btnNormal",
        "focusSkin": "btnFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var labelConcentLetter = new kony.ui.Label({
        "id": "labelConcentLetter",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17239193183868225 = new kony.ui.Box({
        "id": "hbox17239193183868225",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 2, 0,2, 0],
        "padding": [ 0, 1,0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183868225.add(     labelConcentLetter,btnConcentLetter);
    var line1727583581880328 = new kony.ui.Line({
        "id": "line1727583581880328",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 0,0, 0],
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
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var cmbTypeOfStudy = new kony.ui.ComboBox({
        "id": "cmbTypeOfStudy",
        "isVisible": true,
        "masterData": [["6", kony.i18n.getLocalizedString("lblothers")],["5", kony.i18n.getLocalizedString("lbldistancelearning")],["4", kony.i18n.getLocalizedString("lblcorrespondence")],["3", kony.i18n.getLocalizedString("lblaffliation")],["2", kony.i18n.getLocalizedString("rdlblpartTime")],["1", kony.i18n.getLocalizedString("rdlblFullTime")],["0", kony.i18n.getLocalizedString("lblPleaseSelectTypeStudy")]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,6, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var txtBoxOthers = new kony.ui.TextBox2({
        "id": "txtBoxOthers",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "maxTextLength": 25,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("lblspecifyifothers"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": false,
        "margin": [ 0, 1,1, 1],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 26
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
    var hbox1727732536463548 = new kony.ui.Box({
        "id": "hbox1727732536463548",
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
    hbox1727732536463548.add(     txtBoxOthers, cmbTypeOfStudy,lblTypeOfStudy);
    var line1727583581878400 = new kony.ui.Line({
        "id": "line1727583581878400",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblSchType = new kony.ui.Label({
        "id": "lblSchType",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblScholType"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgSelf = new kony.ui.Image2({
        "id": "imgSelf",
        "isVisible": true,
        "src": "unchecked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 1,0, 0],
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
    var vbox181606342714374 = new kony.ui.Box({
        "id": "vbox181606342714374",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbox181606342714374_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 7,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox181606342714374.add(    imgSelf);
    var lblSelf = new kony.ui.Label({
        "id": "lblSelf",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSelf"),
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": false,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgSponser = new kony.ui.Image2({
        "id": "imgSponser",
        "isVisible": true,
        "src": "unchecked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 1,0, 0],
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
    var vbox181606342714375 = new kony.ui.Box({
        "id": "vbox181606342714375",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbox181606342714375_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 7,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox181606342714375.add(    imgSponser);
    var lblSponsored = new kony.ui.Label({
        "id": "lblSponsored",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSponsored"),
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": false,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1727732536463274 = new kony.ui.Box({
        "id": "hbox1727732536463274",
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
    hbox1727732536463274.add(     lblSponsored, vbox181606342714375, lblSelf, vbox181606342714374,lblSchType);
    var line1727583581879516 = new kony.ui.Line({
        "id": "line1727583581879516",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblSponsoredBy = new kony.ui.Label({
        "id": "lblSponsoredBy",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSponsoredby"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtSponsoredBy = new kony.ui.TextBox2({
        "id": "txtSponsoredBy",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
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
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
    var hbox1727732536463391 = new kony.ui.Box({
        "id": "hbox1727732536463391",
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
    hbox1727732536463391.add(     txtSponsoredBy,lblSponsoredBy);
    var line1727583581877924 = new kony.ui.Line({
        "id": "line1727583581877924",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNoofyears = new kony.ui.Label({
        "id": "lblNoofyears",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNoofyears"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtNoofyears = new kony.ui.TextBox2({
        "id": "txtNoofyears",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 1,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
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
    var vbox1725796146370992 = new kony.ui.Box({
        "id": "vbox1725796146370992",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 41,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1725796146370992.add();
    var hbox1725796146329694 = new kony.ui.Box({
        "id": "hbox1725796146329694",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1725796146329694.add(     vbox1725796146370992, txtNoofyears,lblNoofyears);
    var line1727583581877404 = new kony.ui.Line({
        "id": "line1727583581877404",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblStartYear = new kony.ui.Label({
        "id": "lblStartYear",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStartYear"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtStartYear = new kony.ui.TextBox2({
        "id": "txtStartYear",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 4,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
    var vbox1725796146329819 = new kony.ui.Box({
        "id": "vbox1725796146329819",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 41,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1725796146329819.add();
    var hbox1724783227496954 = new kony.ui.Box({
        "id": "hbox1724783227496954",
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
    hbox1724783227496954.add(     vbox1725796146329819, txtStartYear,lblStartYear);
    var line1727583581876464 = new kony.ui.Line({
        "id": "line1727583581876464",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblGraduationYear = new kony.ui.Label({
        "id": "lblGraduationYear",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGraduationYear"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtGraduationYear = new kony.ui.TextBox2({
        "id": "txtGraduationYear",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 4,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DECIMAL,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
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
    var vbox1725796146330055 = new kony.ui.Box({
        "id": "vbox1725796146330055",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 41,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1725796146330055.add();
    var hbox1724783227529783 = new kony.ui.Box({
        "id": "hbox1724783227529783",
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
    hbox1724783227529783.add(     vbox1725796146330055, txtGraduationYear,lblGraduationYear);
    var line155182739187460 = new kony.ui.Line({
        "id": "line155182739187460",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCountryWhereExam = new kony.ui.Label({
        "id": "lblCountryWhereExam",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCountryExamHeld"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownCountryWhereExam = new kony.ui.ComboBox({
        "id": "dropdownCountryWhereExam",
        "isVisible": true,
        "masterData": [["5", "India"],["4", "Egypt"],["3", "Denmark"],["2", "Canada"],["1", "Dubai"],["0", "Select Country"]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1724783227531189 = new kony.ui.Box({
        "id": "hbox1724783227531189",
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
    hbox1724783227531189.add(     dropdownCountryWhereExam,lblCountryWhereExam);
    var line17248130181073761 = new kony.ui.Line({
        "id": "line17248130181073761",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
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
        "margin": [ 3, 1,0, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var dropdownpaymentmethodtype = new kony.ui.ComboBox({
        "id": "dropdownpaymentmethodtype",
        "isVisible": true,
        "masterData": [["5", "G2 Card (Second Generation E-dirham)"],["2", "Non G2 Card (Visa , Master)"],["0", "Select Payment Method"]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertEquivalencyTab1_dropdownpaymentmethodtype_onSelection_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,6, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1724783227702108 = new kony.ui.Box({
        "id": "hbox1724783227702108",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 1, 0,1, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724783227702108.add(    dropdownpaymentmethodtype);
    var dropdownpaymentcardtype = new kony.ui.ComboBox({
        "id": "dropdownpaymentcardtype",
        "isVisible": true,
        "masterData": [["2", "Master Card"],["1", "Visa"],["0", "Select payment Type"]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,6, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW,
        "placeholder": kony.i18n.getLocalizedString("lblSelectCountry"),
        "dropDownImage": "downarrow.png"
    });
    var hbox1724783227702116 = new kony.ui.Box({
        "id": "hbox1724783227702116",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 1, 0,1, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724783227702116.add(    dropdownpaymentcardtype);
    var vbox1724783227702106 = new kony.ui.Box({
        "id": "vbox1724783227702106",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 65,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724783227702106.add(    hbox1724783227702108, hbox1724783227702116);
    var hbox1724783227682449 = new kony.ui.Box({
        "id": "hbox1724783227682449",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724783227682449.add(     vbox1724783227702106,lblPaymentMethod);
    var line1727583581927615 = new kony.ui.Line({
        "id": "line1727583581927615",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNote = new kony.ui.Label({
        "id": "lblNote",
        "isVisible": false,
        "text": kony.i18n.getLocalizedString("lblNote"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtNote = new kony.ui.TextBox2({
        "id": "txtNote",
        "isVisible": false,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,3, 2],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
        "autoCorrect": false
    });
    var hbox1727583581925779 = new kony.ui.Box({
        "id": "hbox1727583581925779",
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
    hbox1727583581925779.add(     txtNote,lblNote);
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
        "containerWeight": 7
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lblSteps = new kony.ui.Label({
        "id": "lblSteps",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStep1Of2"),
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
        "containerWeight": 82
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
        "onClick": frmCertEquivalencyTab1_btnNext_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
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
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 3,0, 0],
        "padding": [ 4, 3,4, 3],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox155182739221589.add(     btnNext, lblSteps,btnPrev);
    var vbxRightMenu = new kony.ui.Box({
        "id": "vbxRightMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 70,
        "margin": [ 0, 0,0, 0],
        "padding": [ 2, 0,2, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxRightMenu.add(    lblCertificateDetails, hbox1727732536457387, line1727583581883540, hbox1727732536459533, line1727583581882692, hbox1727732536459700, line1727583581881300, hbox1727732536459881, line1727583581913318, hbox1727732536463109, line1728417731110105, line17248130181081909, hbox1728417731112005, hbox1728417731104321, line1728417731103337, hbox17239193183868225, line1727583581880328, hbox1727732536463548, line1727583581878400, hbox1727732536463274, line1727583581879516, hbox1727732536463391, line1727583581877924, hbox1725796146329694, line1727583581877404, hbox1724783227496954, line1727583581876464, hbox1724783227529783, line155182739187460, hbox1724783227531189, line17248130181073761, hbox1724783227682449, line1727583581927615, hbox1727583581925779, hbox155182739221589);
    var hbox1727732536453133 = new kony.ui.Box({
        "id": "hbox1727732536453133",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 90,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 2,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536453133.add(     vbxRightMenu,vbxLeftMenu);
    frmCertEquivalencyTab1Ar.add(    hbox1727732536453133);
};
function frmCertEquivalencyTab1GlobalsAr() {
    var MenuId = [];
    frmCertEquivalencyTab1Ar = new kony.ui.Form2({
        "id": "frmCertEquivalencyTab1",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmCertEquivalencyTab1_frmCertEquivalencyTab1_init_seq0Ar,
        "preShow": frmCertEquivalencyTab1_frmCertEquivalencyTab1_preshow_seq0Ar,
        "onOrientationChange": frmCertEquivalencyTab1_frmCertEquivalencyTab1_onOrientationChange_seq0Ar,
        "addWidgets": addWidgetsfrmCertEquivalencyTab1Ar
    }, {
        "padding": [ 0, 0,0, 0],
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
