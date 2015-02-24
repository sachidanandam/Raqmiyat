//Form JS File
function frmCurntStudStatic_frmCurntStudStatic_init_seq0(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmCurntStudStatic, "1");
};

function frmCurntStudStatic_frmCurntStudStatic_preshow_seq0(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmCurntStudStatic, "1");

 */
    leftMenuUiSelect.call(this, "1.2", frmCurntStudStatic);
    attestSubmenu = "1.2";
    selectedCategory = category_Enrolled;
    LeftMenuChange.call(this, "1");
    frmOrient.call(this, frmCurntStudStatic);
    NFCSupport.call(this);
    ValidateNFCSupport.call(this, frmCurntStudStatic);
};

function frmCurntStudStatic_btnScan_onClick_seq0(eventobject) {
    gblDeviceInfo = "tab";
    selectedCategory = category_Enrolled;
    gvScannedCertType = 2;
    gvIsScanned = 1;
    resetAttestationForms.call(this);
    frmAttestGrad1.show();
    invokeCompositService.call(this);
    /* 
getPrevStudyLevels.call(this);

 */
    NFCCall.call(this);
};

function frmCurntStudStatic_btnAtstatnReq_onClick_seq0(eventobject) {
    resetAttestationForms.call(this);
    gblDeviceInfo = "tab";
    selectedCategory = category_Enrolled;
    gvIsScanned = 0;
    frmAttestGrad1.show();
    invokeCompositService.call(this);
    /* 
getPrevStudyLevels.call(this);

 */
};

function addWidgetsfrmCurntStudStatic() {
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
    var lblHeaderSubTitle = new kony.ui.Label({
        "id": "lblHeaderSubTitle",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCurStudents"),
        "skin": "sknStaticFrmTitle",
        "i18n_text": "kony.i18n.getLocalizedString('lblCurStudents')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 94
    }, {
        "textCopyable": false
    });
    var hbox1239236892712889 = new kony.ui.Box({
        "id": "hbox1239236892712889",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1239236892712889.add(
    lblHeaderSubTitle);
    var browCurStudIns = new kony.ui.Browser({
        "id": "browCurStudIns",
        "text": "Browser",
        "isVisible": false,
        "detectTelNumber": true
    }, {
        "margin": [0, 0, 0, 10],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var lblPageTitle = new kony.ui.Label({
        "id": "lblPageTitle",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("CurrentStaticText1"),
        "skin": "lblFrmSubTitle",
        "i18n_text": "kony.i18n.getLocalizedString('CurrentStaticText1')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 94
    }, {
        "textCopyable": false
    });
    var hbox17230851422554 = new kony.ui.Box({
        "id": "hbox17230851422554",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851422554.add(
    lblPageTitle);
    var rtxtContent = new kony.ui.RichText({
        "id": "rtxtContent",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("CurrentStaticText1"),
        "skin": "sknRichText",
        "i18n_text": "kony.i18n.getLocalizedString('CurrentStaticText1')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 94
    }, {});
    var hbox17230851423079 = new kony.ui.Box({
        "id": "hbox17230851423079",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851423079.add(
    rtxtContent);
    var richtext172311493311100 = new kony.ui.RichText({
        "id": "richtext172311493311100",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("CurrentStaticText3"),
        "skin": "sknRichText",
        "i18n_text": "kony.i18n.getLocalizedString('CurrentStaticText3')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 94
    }, {});
    var hbox172311493311098 = new kony.ui.Box({
        "id": "hbox172311493311098",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172311493311098.add(
    richtext172311493311100);
    var richtext172311493311732 = new kony.ui.RichText({
        "id": "richtext172311493311732",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("CurrentStaticText4"),
        "skin": "sknRichText",
        "i18n_text": "kony.i18n.getLocalizedString('CurrentStaticText4')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 94
    }, {});
    var hbox172311493311730 = new kony.ui.Box({
        "id": "hbox172311493311730",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172311493311730.add(
    richtext172311493311732);
    var btnScan = new kony.ui.Button({
        "id": "btnScan",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblScanCertificate"),
        "skin": "sknbtnscan",
        "focusSkin": "sknbtnscan",
        "onClick": frmCurntStudStatic_btnScan_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblScanCertificate')"
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
        "containerWeight": 26
    }, {});
    var btnAtstatnReq = new kony.ui.Button({
        "id": "btnAtstatnReq",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAttestationReq"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCurntStudStatic_btnAtstatnReq_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblAttestationReq')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {});
    var vbox17228766336069212 = new kony.ui.Box({
        "id": "vbox17228766336069212",
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
    vbox17228766336069212.add(
    btnScan, btnAtstatnReq);
    var hbxFotr = new kony.ui.Box({
        "id": "hbxFotr",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 3, 0, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFotr.add(
    vbox17228766336069212);
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
    hbox1239236892712889, browCurStudIns, hbox17230851422554, hbox17230851423079, hbox172311493311098, hbox172311493311730, hbxFotr);
    var hbox1818863783393473 = new kony.ui.Box({
        "id": "hbox1818863783393473",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 94,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783393473.add(
    vbxLeftMenu, vbxRightMenu);
    frmCurntStudStatic.add(
    hbox1818863783393473);
};

function frmCurntStudStaticGlobals() {
    var MenuId = [];
    frmCurntStudStatic = new kony.ui.Form2({
        "id": "frmCurntStudStatic",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmCurntStudStatic_frmCurntStudStatic_init_seq0,
        "preShow": frmCurntStudStatic_frmCurntStudStatic_preshow_seq0,
        "addWidgets": addWidgetsfrmCurntStudStatic
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