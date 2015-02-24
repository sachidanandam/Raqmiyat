//Form JS File
function frmCertEquivalencyTab1_frmCertEquivalencyTab1_init_seq0(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmCertEquivalencyTab1, "2");
};

function frmCertEquivalencyTab1_frmCertEquivalencyTab1_preshow_seq0(eventobject, neworientation) {
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
};

function frmCertEquivalencyTab1_vbxPublic_onClick_seq0(eventobject) {
    setGender.call(this, true, frmCertEquivalencyTab1.rbimgPublic, frmCertEquivalencyTab1.rbimgprivate);
};

function frmCertEquivalencyTab1_vbxPrivate_onClick_seq0(eventobject) {
    setGender.call(this, false, frmCertEquivalencyTab1.rbimgPublic, frmCertEquivalencyTab1.rbimgprivate);
};

function frmCertEquivalencyTab1_vbox1728417731112013_onClick_seq0(eventobject) {
    setGender.call(this, true, frmCertEquivalencyTab1.rbimgmale, frmCertEquivalencyTab1.rbimgfemale);
};

function frmCertEquivalencyTab1_vbox1728417731112019_onClick_seq0(eventobject) {
    setGender.call(this, false, frmCertEquivalencyTab1.rbimgmale, frmCertEquivalencyTab1.rbimgfemale);
};

function frmCertEquivalencyTab1_vbox181606342714374_onClick_seq0(eventobject) {
    setGender.call(this, true, frmCertEquivalencyTab1.imgSelf, frmCertEquivalencyTab1.imgSponser);
};

function frmCertEquivalencyTab1_vbox181606342714375_onClick_seq0(eventobject) {
    setGender.call(this, false, frmCertEquivalencyTab1.imgSelf, frmCertEquivalencyTab1.imgSponser);
};

function frmCertEquivalencyTab1_dropdownpaymentmethodtype_onSelection_seq0(eventobject) {
    loadpaymentmethod.call(this);
};

function frmCertEquivalencyTab1_btnNext_onClick_seq0(eventobject) {
    validateCertEquiPgFieldGoFurther.call(this);
};

function addWidgetsfrmCertEquivalencyTab1() {
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
    var lblCertificateDetails = new kony.ui.Label({
        "id": "lblCertificateDetails",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertificateDetails"),
        "skin": "sknStaticFrmTitle",
        "i18n_text": "kony.i18n.getLocalizedString('lblCertificateDetails')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 0, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
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
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
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
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var hbox1727732536457387 = new kony.ui.Box({
        "id": "hbox1727732536457387",
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
    hbox1727732536457387.add(
    lblCertSubmit, txtCertSubittedBy);
    var line1727583581883540 = new kony.ui.Line({
        "id": "line1727583581883540",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
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
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {});
    var hbox1727732536459533 = new kony.ui.Box({
        "id": "hbox1727732536459533",
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
    hbox1727732536459533.add(
    lblStudyLevel, dropdownStudyLevel);
    var line1727583581882692 = new kony.ui.Line({
        "id": "line1727583581882692",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
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
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
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
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var hbox1727732536459700 = new kony.ui.Box({
        "id": "hbox1727732536459700",
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
    hbox1727732536459700.add(
    lblMajor, txtMajor);
    var line1727583581881300 = new kony.ui.Line({
        "id": "line1727583581881300",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblIssuedBy = new kony.ui.Label({
        "id": "lblIssuedBy",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblIssuedBy"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblIssuedBy')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 92
    }, {});
    var vbxPublic = new kony.ui.Box({
        "id": "vbxPublic",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbxPublic_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 12,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
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
        "containerWeight": 35
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
        "containerWeight": 92
    }, {});
    var vbxPrivate = new kony.ui.Box({
        "id": "vbxPrivate",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbxPrivate_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 13,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
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
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var hbxIssueByRadio = new kony.ui.Box({
        "id": "hbxIssueByRadio",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
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
    var vbox1723085142124296 = new kony.ui.Box({
        "id": "vbox1723085142124296",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 62,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1723085142124296.add(
    hbxIssueByRadio);
    var hbox1727732536459881 = new kony.ui.Box({
        "id": "hbox1727732536459881",
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
    hbox1727732536459881.add(
    lblIssuedBy, vbox1723085142124296);
    var line1727583581913318 = new kony.ui.Line({
        "id": "line1727583581913318",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCountryOfExamination = new kony.ui.Label({
        "id": "lblCountryOfExamination",
        "isVisible": true,
        "text": "Country of Examination",
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 58
    }, {});
    var hbox1727732536463109 = new kony.ui.Box({
        "id": "hbox1727732536463109",
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
    hbox1727732536463109.add(
    lblCountryOfExamination, dropdowncountryofexam);
    var line17248130181081909 = new kony.ui.Line({
        "id": "line17248130181081909",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label1728417731112007 = new kony.ui.Label({
        "id": "label1728417731112007",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGender"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblGender')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
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
        "containerWeight": 92
    }, {});
    var vbox1728417731112013 = new kony.ui.Box({
        "id": "vbox1728417731112013",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbox1728417731112013_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 12,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1728417731112013.add(
    rbimgmale);
    var label1728417731112017 = new kony.ui.Label({
        "id": "label1728417731112017",
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
        "containerWeight": 35
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
        "containerWeight": 92
    }, {});
    var vbox1728417731112019 = new kony.ui.Box({
        "id": "vbox1728417731112019",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbox1728417731112019_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 13,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1728417731112019.add(
    rbimgfemale);
    var label1728417731112023 = new kony.ui.Label({
        "id": "label1728417731112023",
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
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var hbox1728417731112011 = new kony.ui.Box({
        "id": "hbox1728417731112011",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1728417731112011.add(
    vbox1728417731112013, label1728417731112017, vbox1728417731112019, label1728417731112023);
    var vbox1728417731112009 = new kony.ui.Box({
        "id": "vbox1728417731112009",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 62,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1728417731112009.add(
    hbox1728417731112011);
    var hbox1728417731112005 = new kony.ui.Box({
        "id": "hbox1728417731112005",
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
    hbox1728417731112005.add(
    label1728417731112007, vbox1728417731112009);
    var line1728417731110105 = new kony.ui.Line({
        "id": "line1728417731110105",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblEmirate = new kony.ui.Label({
        "id": "lblEmirate",
        "isVisible": true,
        "text": "Emirate",
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 58
    }, {});
    var hbox1728417731104321 = new kony.ui.Box({
        "id": "hbox1728417731104321",
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
    hbox1728417731104321.add(
    lblEmirate, dropdownemirate);
    var line1728417731103337 = new kony.ui.Line({
        "id": "line1728417731103337",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
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
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
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
        "containerWeight": 57
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
    var line1727583581880328 = new kony.ui.Line({
        "id": "line1727583581880328",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
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
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var cmbTypeOfStudy = new kony.ui.ComboBox({
        "id": "cmbTypeOfStudy",
        "isVisible": true,
        "masterData": [
            ["0", "Please Select Type of Study"],
            ["1", "Full Time"],
            ["2", "Part Time"],
            ["3", "Affiliation"],
            ["4", "Correspondence"],
            ["5", "Distance Learning"],
            ["6", "Others"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 1, 0, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 38
    }, {});
    var txtBoxOthers = new kony.ui.TextBox2({
        "id": "txtBoxOthers",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "maxTextLength": 25,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Specify If Others",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": false,
        "margin": [1, 1, 0, 1],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var hbox1727732536463548 = new kony.ui.Box({
        "id": "hbox1727732536463548",
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
    hbox1727732536463548.add(
    lblTypeOfStudy, cmbTypeOfStudy, txtBoxOthers);
    var line1727583581878400 = new kony.ui.Line({
        "id": "line1727583581878400",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblSchType = new kony.ui.Label({
        "id": "lblSchType",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblScholType"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblScholType')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var imgSelf = new kony.ui.Image2({
        "id": "imgSelf",
        "isVisible": true,
        "src": "unchecked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 1, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox181606342714374 = new kony.ui.Box({
        "id": "vbox181606342714374",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbox181606342714374_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 7,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox181606342714374.add(
    imgSelf);
    var lblSelf = new kony.ui.Label({
        "id": "lblSelf",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSelf"),
        "skin": "sknLblHighlight",
        "i18n_text": "kony.i18n.getLocalizedString('lblSelf')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {
        "textCopyable": false
    });
    var imgSponser = new kony.ui.Image2({
        "id": "imgSponser",
        "isVisible": true,
        "src": "unchecked.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 1, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox181606342714375 = new kony.ui.Box({
        "id": "vbox181606342714375",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab1_vbox181606342714375_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 7,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox181606342714375.add(
    imgSponser);
    var lblSponsored = new kony.ui.Label({
        "id": "lblSponsored",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSponsored"),
        "skin": "sknLblHighlight",
        "i18n_text": "kony.i18n.getLocalizedString('lblSponsored')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {
        "textCopyable": false
    });
    var hbox1727732536463274 = new kony.ui.Box({
        "id": "hbox1727732536463274",
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
    hbox1727732536463274.add(
    lblSchType, vbox181606342714374, lblSelf, vbox181606342714375, lblSponsored);
    var line1727583581879516 = new kony.ui.Line({
        "id": "line1727583581879516",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblSponsoredBy = new kony.ui.Label({
        "id": "lblSponsoredBy",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSponsoredby"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblSponsoredby')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 58
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var hbox1727732536463391 = new kony.ui.Box({
        "id": "hbox1727732536463391",
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
    hbox1727732536463391.add(
    lblSponsoredBy, txtSponsoredBy);
    var line1727583581877924 = new kony.ui.Line({
        "id": "line1727583581877924",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var vbox1725796146370992 = new kony.ui.Box({
        "id": "vbox1725796146370992",
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
    vbox1725796146370992.add();
    var hbox1725796146329694 = new kony.ui.Box({
        "id": "hbox1725796146329694",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1725796146329694.add(
    lblNoofyears, txtNoofyears, vbox1725796146370992);
    var line1727583581877404 = new kony.ui.Line({
        "id": "line1727583581877404",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblStartYear = new kony.ui.Label({
        "id": "lblStartYear",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStartYear"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblStartYear')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var vbox1725796146329819 = new kony.ui.Box({
        "id": "vbox1725796146329819",
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
    vbox1725796146329819.add();
    var hbox1724783227496954 = new kony.ui.Box({
        "id": "hbox1724783227496954",
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
    hbox1724783227496954.add(
    lblStartYear, txtStartYear, vbox1725796146329819);
    var line1727583581876464 = new kony.ui.Line({
        "id": "line1727583581876464",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblGraduationYear = new kony.ui.Label({
        "id": "lblGraduationYear",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGraduationYear"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblGraduationYear')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var vbox1725796146330055 = new kony.ui.Box({
        "id": "vbox1725796146330055",
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
    vbox1725796146330055.add();
    var hbox1724783227529783 = new kony.ui.Box({
        "id": "hbox1724783227529783",
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
    hbox1724783227529783.add(
    lblGraduationYear, txtGraduationYear, vbox1725796146330055);
    var line155182739187460 = new kony.ui.Line({
        "id": "line155182739187460",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCountryWhereExam = new kony.ui.Label({
        "id": "lblCountryWhereExam",
        "isVisible": true,
        "text": "Country where Examination was held",
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var dropdownCountryWhereExam = new kony.ui.ComboBox({
        "id": "dropdownCountryWhereExam",
        "isVisible": true,
        "masterData": [
            ["0", "Select Country"],
            ["1", "Dubai"],
            ["2", "Canada"],
            ["3", "Denmark"],
            ["4", "Egypt"],
            ["5", "India"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 58
    }, {});
    var hbox1724783227531189 = new kony.ui.Box({
        "id": "hbox1724783227531189",
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
    hbox1724783227531189.add(
    lblCountryWhereExam, dropdownCountryWhereExam);
    var line17248130181073761 = new kony.ui.Line({
        "id": "line17248130181073761",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblPaymentMethod = new kony.ui.Label({
        "id": "lblPaymentMethod",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPaymentMethod"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblPaymentMethod')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var dropdownpaymentmethodtype = new kony.ui.ComboBox({
        "id": "dropdownpaymentmethodtype",
        "isVisible": true,
        "masterData": [
            ["0", "Select Payment Method"],
            ["2", "Non G2 Card (Visa , Master)"],
            ["5", "G2 Card (Second Generation E-dirham)"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertEquivalencyTab1_dropdownpaymentmethodtype_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 1, 0, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {});
    var hbox1724783227702108 = new kony.ui.Box({
        "id": "hbox1724783227702108",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724783227702108.add(
    dropdownpaymentmethodtype);
    var dropdownpaymentcardtype = new kony.ui.ComboBox({
        "id": "dropdownpaymentcardtype",
        "isVisible": true,
        "masterData": [
            ["0", "Select payment Type"],
            ["1", "Visa"],
            ["2", "Master Card"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 1, 0, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {});
    var hbox1724783227702116 = new kony.ui.Box({
        "id": "hbox1724783227702116",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724783227702116.add(
    dropdownpaymentcardtype);
    var vbox1724783227702106 = new kony.ui.Box({
        "id": "vbox1724783227702106",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 58,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724783227702106.add(
    hbox1724783227702108, hbox1724783227702116);
    var hbox1724783227682449 = new kony.ui.Box({
        "id": "hbox1724783227682449",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724783227682449.add(
    lblPaymentMethod, vbox1724783227702106);
    var line1727583581927615 = new kony.ui.Line({
        "id": "line1727583581927615",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNote = new kony.ui.Label({
        "id": "lblNote",
        "isVisible": false,
        "text": kony.i18n.getLocalizedString("lblNote"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblNote')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 3, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 0, 2],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var hbox1727583581925779 = new kony.ui.Box({
        "id": "hbox1727583581925779",
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
    hbox1727583581925779.add(
    lblNote, txtNote);
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
        "containerWeight": 7
    }, {});
    var lblSteps = new kony.ui.Label({
        "id": "lblSteps",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStep1Of2"),
        "skin": "sknFtrSteps",
        "i18n_text": "kony.i18n.getLocalizedString('lblStep1Of2')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 82
    }, {
        "textCopyable": false
    });
    var btnNext = new kony.ui.Button({
        "id": "btnNext",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnNext",
        "focusSkin": "sknBtnNext",
        "onClick": frmCertEquivalencyTab1_btnNext_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var hbox155182739221589 = new kony.ui.Box({
        "id": "hbox155182739221589",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknFooter",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 3, 0, 0],
        "padding": [4, 3, 4, 3],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox155182739221589.add(
    btnPrev, lblSteps, btnNext);
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
    lblCertificateDetails, hbox1727732536457387, line1727583581883540, hbox1727732536459533, line1727583581882692, hbox1727732536459700, line1727583581881300, hbox1727732536459881, line1727583581913318, hbox1727732536463109, line17248130181081909, hbox1728417731112005, line1728417731110105, hbox1728417731104321, line1728417731103337, hbox17239193183868225, line1727583581880328, hbox1727732536463548, line1727583581878400, hbox1727732536463274, line1727583581879516, hbox1727732536463391, line1727583581877924, hbox1725796146329694, line1727583581877404, hbox1724783227496954, line1727583581876464, hbox1724783227529783, line155182739187460, hbox1724783227531189, line17248130181073761, hbox1724783227682449, line1727583581927615, hbox1727583581925779, hbox155182739221589);
    var hbox1727732536453133 = new kony.ui.Box({
        "id": "hbox1727732536453133",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 90,
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
    frmCertEquivalencyTab1.add(
    hbox1727732536453133);
};

function frmCertEquivalencyTab1Globals() {
    var MenuId = [];
    frmCertEquivalencyTab1 = new kony.ui.Form2({
        "id": "frmCertEquivalencyTab1",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmCertEquivalencyTab1_frmCertEquivalencyTab1_init_seq0,
        "preShow": frmCertEquivalencyTab1_frmCertEquivalencyTab1_preshow_seq0,
        "addWidgets": addWidgetsfrmCertEquivalencyTab1
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