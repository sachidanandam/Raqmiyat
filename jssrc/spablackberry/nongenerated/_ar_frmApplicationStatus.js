//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 09 17:24:48 IST 2015
function frmApplicationStatus_frmApplicationStatus_postshow_seq0Ar(eventobject, neworientation) {
    setLocaleBasedHeaderTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblCertEqu"));
};

function frmApplicationStatus_vbxMale_onClick_seq0Ar(eventobject) {
    setGender.call(this, true, frmApplicationStatus.rbImagStatus, frmApplicationStatus.rbimgInquiry);
};

function frmApplicationStatus_vbxFemale_onClick_seq0Ar(eventobject) {
    setGender.call(this, false, frmApplicationStatus.rbImagStatus, frmApplicationStatus.rbimgInquiry);
};

function frmApplicationStatus_txtBoxAppNum_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmApplicationStatus.lblApplicationNo);
};

function frmApplicationStatus_btnSubmit_onClick_seq0Ar(eventobject) {
    validateStatusPgFieldAndNav.call(this);
};

function addWidgetsfrmApplicationStatusAr() {
    var rbImagStatus = new kony.ui.Image2({
        "id": "rbImagStatus",
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
    var vbxMale = new kony.ui.Box({
        "id": "vbxMale",
        "isVisible": true,
        "onClick": frmApplicationStatus_vbxMale_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 12,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxMale.add(rbImagStatus);
    var lblStatus = new kony.ui.Label({
        "id": "lblStatus",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStatus"),
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
        "containerWeight": 88
    }, {});
    var hbxGender = new kony.ui.Box({
        "id": "hbxGender",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxGender.add(lblStatus, vbxMale);
    var rbimgInquiry = new kony.ui.Image2({
        "id": "rbimgInquiry",
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
    var vbxFemale = new kony.ui.Box({
        "id": "vbxFemale",
        "isVisible": true,
        "onClick": frmApplicationStatus_vbxFemale_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 12,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxFemale.add(rbimgInquiry);
    var lblInquiry = new kony.ui.Label({
        "id": "lblInquiry",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblInquiry"),
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
        "containerWeight": 88
    }, {});
    var hbox1818863783407523 = new kony.ui.Box({
        "id": "hbox1818863783407523",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783407523.add(lblInquiry, vbxFemale);
    var lblApplicationNo = new kony.ui.Label({
        "id": "lblApplicationNo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblApplicationNo"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var txtBoxAppNum = new kony.ui.TextBox2({
        "id": "txtBoxAppNum",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 9,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmApplicationStatus_txtBoxAppNum_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var line17284177589748 = new kony.ui.Line({
        "id": "line17284177589748",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [1, 3, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnSubmit = new kony.ui.Button({
        "id": "btnSubmit",
        "isVisible": true,
        "text": "Submit",
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmApplicationStatus_btnSubmit_onClick_seq0Ar
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
        "containerWeight": 100
    }, {});
    var hbox1818863783336137 = new kony.ui.Box({
        "id": "hbox1818863783336137",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783336137.add(btnSubmit);
    frmApplicationStatusAr.add(hbxGender, hbox1818863783407523, lblApplicationNo, txtBoxAppNum, line17284177589748, hbox1818863783336137);
};

function frmApplicationStatusGlobalsAr() {
    var MenuId = [];
    frmApplicationStatusAr = new kony.ui.Form2({
        "id": "frmApplicationStatus",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox17231149333112, hbox17231149333136],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "postShow": frmApplicationStatus_frmApplicationStatus_postshow_seq0Ar,
        "addWidgets": addWidgetsfrmApplicationStatusAr
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "directChildrenIDs": ["hbxGender", "lblStatus", "vbxMale", "rbImagStatus", "hbox1818863783407523", "vbxFemale", "rbimgInquiry", "lblInquiry", "lblApplicationNo", "txtBoxAppNum", "line17284177589748", "hbox1818863783336137", "btnSubmit"]
    });
};