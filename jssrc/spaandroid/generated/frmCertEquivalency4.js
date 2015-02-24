//Form JS File
function frmCertEquivalency4_dropdownlevel_onSelection_seq0(eventobject) {
    SknTxtChangeValidation.call(this, frmCertEquivalency4.lblLevel);
};

function frmCertEquivalency4_txtSchoolCollegeUniv_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertEquivalency4.lblSchoolCollegeUniversity);
};

function frmCertEquivalency4_txtCertificate_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertEquivalency4.lblCertificate);
};

function frmCertEquivalency4_comboboxPreCertCountry_onSelection_seq0(eventobject) {
    SknTxtChangeValidation.call(this, frmCertRequest1.lblCountry);
};

function frmCertEquivalency4_txtPeriodFrom_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertEquivalency4.lblPeriodFrom);
};

function frmCertEquivalency4_txtPeriodTo_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCertEquivalency4.lblPeriodTo);
};

function frmCertEquivalency4_btnPreCertAdd_onClick_seq0(eventobject) {
    certEquiAddPreviousCertificate.call(this);
};

function frmCertEquivalency4_hbox1724008663207308_onClick_seq0(eventobject, context) {
    frmCertEquivalency4.dropdownlevel.selectedKey = frmCertEquivalency4["segPreviousCertificate"]["selectedItems"][0]["hdStudyLevelId"];
    frmCertEquivalency4.txtSchoolCollegeUniv.text = frmCertEquivalency4["segPreviousCertificate"]["selectedItems"][0]["lblUniversityDisplay"];
    frmCertEquivalency4.txtCertificate.text = frmCertEquivalency4["segPreviousCertificate"]["selectedItems"][0]["lblCertificateNameDisplay"];
    frmCertEquivalency4.comboboxPreCertCountry.selectedKey = frmCertEquivalency4["segPreviousCertificate"]["selectedItems"][0]["hdCountryId"];
    frmCertEquivalency4.txtPeriodFrom.text = frmCertEquivalency4["segPreviousCertificate"]["selectedItems"][0]["hdPeriodFrom"];
    frmCertEquivalency4.txtPeriodTo.text = frmCertEquivalency4["segPreviousCertificate"]["selectedItems"][0]["hdPeriodTo"];
    frmCertEquivalency4.btnPreCertAdd.text = "Update";
};

function frmCertEquivalency4_hbox17239193183863976_onClick_seq0(eventobject, context) {
    certEquiDeletePreviousCertificateRow.call(this);
};

function frmCertEquivalency4_btnPrev_onClick_seq0(eventobject) {
    frmCertEquivalency3.show();
};

function frmCertEquivalency4_btnNext_onClick_seq0(eventobject) {
    validateCertEquiPgFieldGoFurther.call(this);
};

function addWidgetsfrmCertEquivalency4() {
    var lblPreviousCertificates = new kony.ui.Label({
        "id": "lblPreviousCertificates",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPrecertificateHeader"),
        "skin": "sknLblRed",
        "i18n_text": "kony.i18n.getLocalizedString('lblPrecertificateHeader')"
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
    var lblLevel = new kony.ui.Label({
        "id": "lblLevel",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblLevel"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblLevel')"
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
    var dropdownlevel = new kony.ui.ComboBox({
        "id": "dropdownlevel",
        "isVisible": true,
        "masterData": [
            ["0", "kony.i18n.getLocalizedString(\"lblPleaseSelectStudyLevel\")"],
            ["30", "kony.i18n.getLocalizedString(\"lblSecondary\")"],
            ["2", "kony.i18n.getLocalizedString(\"lblMaster\")"],
            ["3", "kony.i18n.getLocalizedString(\"lblPostGradDiploma\")"],
            ["4", "kony.i18n.getLocalizedString(\"lblBachelor\")"],
            ["5", "kony.i18n.getLocalizedString(\"lblAssociateDegree\")"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertEquivalency4_dropdownlevel_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {});
    var line155182739187460 = new kony.ui.Line({
        "id": "line155182739187460",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var lblSchoolCollegeUniversity = new kony.ui.Label({
        "id": "lblSchoolCollegeUniversity",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSchoolCollegeUniversity"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblSchoolCollegeUniversity')"
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
    var txtSchoolCollegeUniv = new kony.ui.TextBox2({
        "id": "txtSchoolCollegeUniv",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertEquivalency4_txtSchoolCollegeUniv_onTextChange_seq0,
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
        "containerWeight": 2
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var line155182739208023 = new kony.ui.Line({
        "id": "line155182739208023",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var lblCertificate = new kony.ui.Label({
        "id": "lblCertificate",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertificate"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblCertificate')"
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
    var txtCertificate = new kony.ui.TextBox2({
        "id": "txtCertificate",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertEquivalency4_txtCertificate_onTextChange_seq0,
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
    var lblPreCertCountry = new kony.ui.Label({
        "id": "lblPreCertCountry",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCountry"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblCountry')"
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
    var comboboxPreCertCountry = new kony.ui.ComboBox({
        "id": "comboboxPreCertCountry",
        "isVisible": true,
        "masterData": [
            ["0", "Select Country"],
            ["1", "India"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmCertEquivalency4_comboboxPreCertCountry_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 4, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var line155182739210581 = new kony.ui.Line({
        "id": "line155182739210581",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var lblPeriodFrom = new kony.ui.Label({
        "id": "lblPeriodFrom",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPeriodFrom"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblPeriodFrom')"
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
        "textCopyable": false
    });
    var txtPeriodFrom = new kony.ui.TextBox2({
        "id": "txtPeriodFrom",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 4,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": kony.i18n.getLocalizedString("lblEnterHere"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertEquivalency4_txtPeriodFrom_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 43,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
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
        "autoCorrect": false,
        "autoComplete": false
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
    txtPeriodFrom);
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
    var line1563352858711837 = new kony.ui.Line({
        "id": "line1563352858711837",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var lblPeriodTo = new kony.ui.Label({
        "id": "lblPeriodTo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPeriodTo"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblPeriodTo')"
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
        "textCopyable": false
    });
    var txtPeriodTo = new kony.ui.TextBox2({
        "id": "txtPeriodTo",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 4,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": kony.i18n.getLocalizedString("lblEnterHere"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCertEquivalency4_txtPeriodTo_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 43,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
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
        "autoCorrect": false,
        "autoComplete": false
    });
    var vbox17239193183811618 = new kony.ui.Box({
        "id": "vbox17239193183811618",
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
    vbox17239193183811618.add(
    txtPeriodTo);
    var vbox17239193183811621 = new kony.ui.Box({
        "id": "vbox17239193183811621",
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
    vbox17239193183811621.add();
    var hbox17239193183811616 = new kony.ui.Box({
        "id": "hbox17239193183811616",
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
    hbox17239193183811616.add(
    vbox17239193183811618, vbox17239193183811621);
    var line15518273917502 = new kony.ui.Line({
        "id": "line15518273917502",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var btnPreCertAdd = new kony.ui.Button({
        "id": "btnPreCertAdd",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAdd"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertEquivalency4_btnPreCertAdd_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblAdd')"
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
        "containerWeight": 4
    }, {});
    var segPreviousCertificatebox = new kony.ui.Box({
        "id": "segPreviousCertificatebox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 37
    }, {});
    var segPreviousCertificate = new kony.ui.SegmentedUI2({
        "id": "segPreviousCertificate",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox305704285146763": "hbox305704285146763",
            "hbox17239193183863976": "hbox17239193183863976",
            "hbox1724008663207308": "hbox1724008663207308",
            "lblPrevCertYear": "lblPrevCertYear",
            "vbox1724008663205079": "vbox1724008663205079",
            "hdPeriodFrom": "hdPeriodFrom",
            "lblUniversityDisplay": "lblUniversityDisplay",
            "hdStudyLevel": "hdStudyLevel",
            "lblCertificateNameDisplay": "lblCertificateNameDisplay",
            "hdCountry": "hdCountry",
            "hdPrevCretNo": "hdPrevCretNo",
            "hbox305704285145939": "hbox305704285145939",
            "imgPreCertDel": "imgPreCertDel",
            "hbox17239193183857992": "hbox17239193183857992",
            "hdPeriodTo": "hdPeriodTo",
            "hbox17239193183781032": "hbox17239193183781032",
            "hdIsUpdate": "hdIsUpdate",
            "hdCountryId": "hdCountryId",
            "lblUniversitySegDisplay": "lblUniversitySegDisplay",
            "vbox305704285127551": "vbox305704285127551",
            "vbox1724008663145390": "vbox1724008663145390",
            "lblPrevCertLevel": "lblPrevCertLevel",
            "lblCountryYearDisplay": "lblCountryYearDisplay",
            "hbox17239193183862144": "hbox17239193183862144",
            "lblCertificateNameSegDisplay": "lblCertificateNameSegDisplay",
            "hdStudyLevelId": "hdStudyLevelId",
            "lblCountryYearSegDisplay": "lblCountryYearSegDisplay",
            "imgPreCertEdit": "imgPreCertEdit",
            "Id": "Id",
            "hbox1724008663143645": "hbox1724008663143645"
        },
        "rowTemplate": segPreviousCertificatebox,
        "rowSkin": "segWhiteBrBule",
        "rowFocusSkin": "segGrayBrBule",
        "alternateRowSkin": "segGrayBrBule",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 4,
        "separatorColor": "64646464",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [3, 2, 3, 2],
        "padding": [0, 2, 0, 1],
        "containerHeight": 60,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {});
    var imgPreCertEdit = new kony.ui.Image2({
        "id": "imgPreCertEdit",
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
        "containerWeight": 52
    }, {});
    var hbox1724008663207308 = new kony.ui.Box({
        "id": "hbox1724008663207308",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "onClick": frmCertEquivalency4_hbox1724008663207308_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663207308.add(
    imgPreCertEdit);
    var vbox305704285127551 = new kony.ui.Box({
        "id": "vbox305704285127551",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox305704285127551.add(
    hbox1724008663207308);
    var lblPrevCertLevel = new kony.ui.Label({
        "id": "lblPrevCertLevel",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {
        "textCopyable": false
    });
    var hbox305704285146763 = new kony.ui.Box({
        "id": "hbox305704285146763",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
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
    hbox305704285146763.add(
    lblPrevCertLevel);
    var lblUniversitySegDisplay = new kony.ui.Label({
        "id": "lblUniversitySegDisplay",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {
        "textCopyable": false
    });
    var hbox17239193183781032 = new kony.ui.Box({
        "id": "hbox17239193183781032",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183781032.add(
    lblUniversitySegDisplay);
    var lblCertificateNameSegDisplay = new kony.ui.Label({
        "id": "lblCertificateNameSegDisplay",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {
        "textCopyable": false
    });
    var hbox17239193183857992 = new kony.ui.Box({
        "id": "hbox17239193183857992",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183857992.add(
    lblCertificateNameSegDisplay);
    var lblCountryYearSegDisplay = new kony.ui.Label({
        "id": "lblCountryYearSegDisplay",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {
        "textCopyable": false
    });
    var hbox17239193183862144 = new kony.ui.Box({
        "id": "hbox17239193183862144",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183862144.add(
    lblCountryYearSegDisplay);
    var lblPrevCertYear = new kony.ui.Label({
        "id": "lblPrevCertYear",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {
        "textCopyable": false
    });
    var hbox305704285145939 = new kony.ui.Box({
        "id": "hbox305704285145939",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox305704285145939.add(
    lblPrevCertYear);
    var vbox1724008663145390 = new kony.ui.Box({
        "id": "vbox1724008663145390",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 84,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724008663145390.add(
    hbox305704285146763, hbox17239193183781032, hbox17239193183857992, hbox17239193183862144, hbox305704285145939);
    var imgPreCertDel = new kony.ui.Image2({
        "id": "imgPreCertDel",
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
        "containerWeight": 63
    }, {});
    var hbox17239193183863976 = new kony.ui.Box({
        "id": "hbox17239193183863976",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "onClick": frmCertEquivalency4_hbox17239193183863976_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183863976.add(
    imgPreCertDel);
    var vbox1724008663205079 = new kony.ui.Box({
        "id": "vbox1724008663205079",
        "isVisible": true,
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
    vbox1724008663205079.add(
    hbox17239193183863976);
    var hbox1724008663143645 = new kony.ui.Box({
        "id": "hbox1724008663143645",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 94,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663143645.add(
    vbox305704285127551, vbox1724008663145390, vbox1724008663205079);
    segPreviousCertificatebox.add(
    hbox1724008663143645);
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
        "focusSkin": "sknBtnInvisible",
        "onClick": frmCertEquivalency4_btnPrev_onClick_seq0
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
    var lblStep4of5 = new kony.ui.Label({
        "id": "lblStep4of5",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStep4of5"),
        "skin": "sknFtrSteps",
        "i18n_text": "kony.i18n.getLocalizedString('lblStep4of5')"
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
        "onClick": frmCertEquivalency4_btnNext_onClick_seq0
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
    btnPrev, lblStep4of5, btnNext);
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
    frmCertEquivalency4.add(
    lblPreviousCertificates, lblLevel, dropdownlevel, line155182739187460, lblSchoolCollegeUniversity, txtSchoolCollegeUniv, line155182739208023, lblCertificate, txtCertificate, line155182739207158, lblPreCertCountry, comboboxPreCertCountry, line155182739210581, lblPeriodFrom, hbox15518273924783, line1563352858711837, lblPeriodTo, hbox17239193183811616, line15518273917502, btnPreCertAdd, segPreviousCertificate, hbxFooter);
};

function frmCertEquivalency4Globals() {
    var MenuId = [];
    frmCertEquivalency4 = new kony.ui.Form2({
        "id": "frmCertEquivalency4",
        "title": null,
        "needAppMenu": true,
        "headers": [hbxCommonHdr],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "addWidgets": addWidgetsfrmCertEquivalency4
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