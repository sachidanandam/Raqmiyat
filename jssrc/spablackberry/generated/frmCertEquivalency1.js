//Form JS File
function frmCertEquivalency1_frmCertEquivalency1_preshow_seq0(eventobject, neworientation) {
    loadequivalencycomposite.call(this);
};

function frmCertEquivalency1_txtCertSubittedBy_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertEquivalency1.lblCertSubmit);
};

function frmCertEquivalency1_txtMajor_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertEquivalency1.lblMajor);
};

function frmCertEquivalency1_txtIssueBy_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertEquivalency1.lblIssueBy);
};

function frmCertEquivalency1_vbxPublic_onClick_seq0(eventobject) {
    setGender.call(this, true, frmCertEquivalency1.rbimgPublic, frmCertEquivalency1.rbimgprivate);
};

function frmCertEquivalency1_vbxPrivate_onClick_seq0(eventobject) {
    setGender.call(this, false, frmCertEquivalency1.rbimgPublic, frmCertEquivalency1.rbimgprivate);
};

function frmCertEquivalency1_vbox18122799421288_onClick_seq0(eventobject) {
    setGender.call(this, true, frmCertEquivalency1.rbimgmale, frmCertEquivalency1.rbimgfemale);
};

function frmCertEquivalency1_vbox18122799421294_onClick_seq0(eventobject) {
    setGender.call(this, false, frmCertEquivalency1.rbimgmale, frmCertEquivalency1.rbimgfemale);
};

function frmCertEquivalency1_vbox172308514298563_onClick_seq0(eventobject) {
    setGender.call(this, true, frmCertEquivalency1.rbimgPublic, frmCertEquivalency1.rbimgprivate);
};

function frmCertEquivalency1_vbox172308514298569_onClick_seq0(eventobject) {
    setGender.call(this, false, frmCertEquivalency1.rbimgPublic, frmCertEquivalency1.rbimgprivate);
};

function frmCertEquivalency1_btnNext_onClick_seq0(eventobject) {
    validateCertEquiPgFieldGoFurther.call(this);
};

function addWidgetsfrmCertEquivalency1() {
    var lblCertificateDetails = new kony.ui.Label({
        "id": "lblCertificateDetails",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertificateDetails"),
        "skin": "sknLblRed",
        "i18n_text": "kony.i18n.getLocalizedString('lblCertificateDetails')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 3, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var lblCertSubmit = new kony.ui.Label({
        "id": "lblCertSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertSubmit"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblCertSubmit')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "textCopyable": false
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
        "onTextChange": frmCertEquivalency1_txtCertSubittedBy_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 4, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var line155182739187460 = new kony.ui.Line({
        "id": "line155182739187460",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
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
        "margin": [3, 1, 3, 0],
        "padding": [1, 1, 1, 1],
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
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 4, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {});
    var line155182739208023 = new kony.ui.Line({
        "id": "line155182739208023",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
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
        "margin": [3, 1, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "textCopyable": false
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
        "onTextChange": frmCertEquivalency1_txtMajor_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 4, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var line155182739207158 = new kony.ui.Line({
        "id": "line155182739207158",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var lblIssueBy = new kony.ui.Label({
        "id": "lblIssueBy",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblIssuedBy"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblIssuedBy')"
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
        "textCopyable": false
    });
    var txtIssueBy = new kony.ui.TextBox2({
        "id": "txtIssueBy",
        "isVisible": false,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertEquivalency1_txtIssueBy_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 4, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var rbimgPublic = new kony.ui.Image2({
        "id": "rbimgPublic",
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
        "containerWeight": 94
    }, {});
    var vbxPublic = new kony.ui.Box({
        "id": "vbxPublic",
        "isVisible": true,
        "onClick": frmCertEquivalency1_vbxPublic_onClick_seq0,
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
    vbxPublic.add(
    rbimgPublic);
    var rblblPublic = new kony.ui.Label({
        "id": "rblblPublic",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rblblPublic"),
        "skin": "sknLblHighlight",
        "i18n_text": "kony.i18n.getLocalizedString('rblblPublic')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {
        "textCopyable": false
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
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 94
    }, {});
    var vbxPrivate = new kony.ui.Box({
        "id": "vbxPrivate",
        "isVisible": true,
        "onClick": frmCertEquivalency1_vbxPrivate_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 12,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxPrivate.add(
    rbimgprivate);
    var rblblPrivate = new kony.ui.Label({
        "id": "rblblPrivate",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rblblPrivete"),
        "skin": "sknLblHighlight",
        "i18n_text": "kony.i18n.getLocalizedString('rblblPrivete')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false
    });
    var hbxIssueByRadio = new kony.ui.Box({
        "id": "hbxIssueByRadio",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxIssueByRadio.add(
    vbxPublic, rblblPublic, vbxPrivate, rblblPrivate);
    var line18122799422674 = new kony.ui.Line({
        "id": "line18122799422674",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var label1812279942166 = new kony.ui.Label({
        "id": "label1812279942166",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGender"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblGender')"
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
        "textCopyable": false
    });
    var rbimgmale = new kony.ui.Image2({
        "id": "rbimgmale",
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
        "containerWeight": 94
    }, {});
    var vbox18122799421288 = new kony.ui.Box({
        "id": "vbox18122799421288",
        "isVisible": true,
        "onClick": frmCertEquivalency1_vbox18122799421288_onClick_seq0,
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
    vbox18122799421288.add(
    rbimgmale);
    var label18122799421292 = new kony.ui.Label({
        "id": "label18122799421292",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMale"),
        "skin": "sknLblHighlight",
        "i18n_text": "kony.i18n.getLocalizedString('lblMale')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {
        "textCopyable": false
    });
    var rbimgfemale = new kony.ui.Image2({
        "id": "rbimgfemale",
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
        "containerWeight": 94
    }, {});
    var vbox18122799421294 = new kony.ui.Box({
        "id": "vbox18122799421294",
        "isVisible": true,
        "onClick": frmCertEquivalency1_vbox18122799421294_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 12,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox18122799421294.add(
    rbimgfemale);
    var label18122799421298 = new kony.ui.Label({
        "id": "label18122799421298",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFemale"),
        "skin": "sknLblHighlight",
        "i18n_text": "kony.i18n.getLocalizedString('lblFemale')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false
    });
    var hbox18122799421286 = new kony.ui.Box({
        "id": "hbox18122799421286",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox18122799421286.add(
    vbox18122799421288, label18122799421292, vbox18122799421294, label18122799421298);
    var line155182739210581 = new kony.ui.Line({
        "id": "line155182739210581",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var lblCountryOfExamination = new kony.ui.Label({
        "id": "lblCountryOfExamination",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCountryOfExam"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblCountryOfExam')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "textCopyable": false
    });
    var dropdowncountryofexam = new kony.ui.ComboBox({
        "id": "dropdowncountryofexam",
        "isVisible": true,
        "masterData": [
            ["0", "Please Select Country"],
            ["999", "Others"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {});
    var line1563352858711837 = new kony.ui.Line({
        "id": "line1563352858711837",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var lblEmirate = new kony.ui.Label({
        "id": "lblEmirate",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblEmirate"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblEmirate')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {
        "textCopyable": false
    });
    var dropdownemirate = new kony.ui.ComboBox({
        "id": "dropdownemirate",
        "isVisible": true,
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {});
    var line1728417731103233 = new kony.ui.Line({
        "id": "line1728417731103233",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var btnConcentLetter = new kony.ui.Button({
        "id": "btnConcentLetter",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblConcentLetter"),
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "i18n_text": "kony.i18n.getLocalizedString('lblConcentLetter')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 28
    }, {});
    var labelConcentLetter = new kony.ui.Label({
        "id": "labelConcentLetter",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 71
    }, {
        "textCopyable": false
    });
    var hbox17239193183868225 = new kony.ui.Box({
        "id": "hbox17239193183868225",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183868225.add(
    btnConcentLetter, labelConcentLetter);
    var lblCertificateInstType = new kony.ui.Label({
        "id": "lblCertificateInstType",
        "isVisible": false,
        "text": kony.i18n.getLocalizedString("lblCertificateInstType"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblCertificateInstType')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "textCopyable": false
    });
    var image2172308514298565 = new kony.ui.Image2({
        "id": "image2172308514298565",
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
        "containerWeight": 94
    }, {});
    var vbox172308514298563 = new kony.ui.Box({
        "id": "vbox172308514298563",
        "isVisible": true,
        "onClick": frmCertEquivalency1_vbox172308514298563_onClick_seq0,
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
    vbox172308514298563.add(
    image2172308514298565);
    var label172308514298567 = new kony.ui.Label({
        "id": "label172308514298567",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rblblPublic"),
        "skin": "sknLblHighlight",
        "i18n_text": "kony.i18n.getLocalizedString('rblblPublic')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {
        "textCopyable": false
    });
    var image2172308514298571 = new kony.ui.Image2({
        "id": "image2172308514298571",
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
        "containerWeight": 94
    }, {});
    var vbox172308514298569 = new kony.ui.Box({
        "id": "vbox172308514298569",
        "isVisible": true,
        "onClick": frmCertEquivalency1_vbox172308514298569_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 12,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172308514298569.add(
    image2172308514298571);
    var label172308514298573 = new kony.ui.Label({
        "id": "label172308514298573",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rblblPrivete"),
        "skin": "sknLblHighlight",
        "i18n_text": "kony.i18n.getLocalizedString('rblblPrivete')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "textCopyable": false
    });
    var hbxGender = new kony.ui.Box({
        "id": "hbxGender",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxGender.add(
    vbox172308514298563, label172308514298567, vbox172308514298569, label172308514298573);
    var line15518273917502 = new kony.ui.Line({
        "id": "line15518273917502",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
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
        "skin": "sknBtnInvisible",
        "focusSkin": "sknBtnInvisible"
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
    var lblStep1of5 = new kony.ui.Label({
        "id": "lblStep1of5",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStep1of5"),
        "skin": "sknFtrSteps",
        "i18n_text": "kony.i18n.getLocalizedString('lblStep1of5')"
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
        "onClick": frmCertEquivalency1_btnNext_onClick_seq0
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
    btnPrev, lblStep1of5, btnNext);
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
    frmCertEquivalency1.add(
    lblCertificateDetails, lblCertSubmit, txtCertSubittedBy, line155182739187460, lblStudyLevel, dropdownStudyLevel, line155182739208023, lblMajor, txtMajor, line155182739207158, lblIssueBy, txtIssueBy, hbxIssueByRadio, line18122799422674, label1812279942166, hbox18122799421286, line155182739210581, lblCountryOfExamination, dropdowncountryofexam, line1563352858711837, lblEmirate, dropdownemirate, line1728417731103233, hbox17239193183868225, lblCertificateInstType, hbxGender, line15518273917502, hbxFooter);
};

function frmCertEquivalency1Globals() {
    var MenuId = [];
    frmCertEquivalency1 = new kony.ui.Form2({
        "id": "frmCertEquivalency1",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox17231149331172, hbox172311493311196],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "preShow": frmCertEquivalency1_frmCertEquivalency1_preshow_seq0,
        "addWidgets": addWidgetsfrmCertEquivalency1
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