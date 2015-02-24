//Form JS File
function frmGradStaticPage2_frmGradStaticPage2_preshow_seq0(eventobject, neworientation) {
    /* 
NFCSupport.call(this);

 */
    ValidateNFCSupport.call(this, frmGradStaticPage2);
};

function frmGradStaticPage2_frmGradStaticPage2_postshow_seq0(eventobject, neworientation) {
    setLocaleBasedFooterTitle2.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblStep2Of2"));
};

function frmGradStaticPage2_btnScan_onClick_seq0(eventobject) {
    gvScannedCertType = 1;
    gvIsScanned = 1;
    gblNfcFlag = true;
    resetformValuesByTpe.call(this, frmMainMenu.lblGradStud.text);
    invokeCompositService.call(this);
    checkNFC.call(this);
};

function frmGradStaticPage2_btnAtstatnReq_onClick_seq0(eventobject) {
    gvScannedCertType = 1;
    gvIsScanned = 0;
    gblNfcFlag = false;
    resetformValuesByTpe.call(this, frmMainMenu.lblGradStud.text);
    /* 
frmAttestGrad1.show();
	
 */
    invokeCompositService.call(this);
    /* 
onVbxGraduateClick.call(this);

 */
};

function addWidgetsfrmGradStaticPage2() {
    var browGradInsStep2 = new kony.ui.Browser({
        "id": "browGradInsStep2",
        "text": "Browser",
        "isVisible": true,
        "detectTelNumber": true,
        "screenLevelWidget": false,
        "enableZoom": false
    }, {
        "margin": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 70
    }, {});
    var lblHeaderSubTitle = new kony.ui.Label({
        "id": "lblHeaderSubTitle",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGradStud"),
        "skin": "sknSubHeaderGradAttest"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox1239236892712889 = new kony.ui.Box({
        "id": "hbox1239236892712889",
        "isVisible": true,
        "skin": "sknSubHeader",
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1239236892712889.add(
    lblHeaderSubTitle);
    var btnScan = new kony.ui.Button({
        "id": "btnScan",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblScanCertificate"),
        "skin": "sknbtnscan",
        "focusSkin": "sknbtnscan",
        "onClick": frmGradStaticPage2_btnScan_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 2, 3, 5],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {});
    var btnAtstatnReq = new kony.ui.Button({
        "id": "btnAtstatnReq",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAttestationReq"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmGradStaticPage2_btnAtstatnReq_onClick_seq0
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
        "containerWeight": 54
    }, {});
    var vbox17228766336069074 = new kony.ui.Box({
        "id": "vbox17228766336069074",
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
    vbox17228766336069074.add(
    btnScan, btnAtstatnReq);
    var hbxFotr = new kony.ui.Box({
        "id": "hbxFotr",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
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
    vbox17228766336069074);
    frmGradStaticPage2.add(
    browGradInsStep2, hbox1239236892712889, hbxFotr);
};

function frmGradStaticPage2Globals() {
    var MenuId = [];
    frmGradStaticPage2 = new kony.ui.Form2({
        "id": "frmGradStaticPage2",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox1239236892712888],
        "footers": [hbox1239236892720313],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "preShow": frmGradStaticPage2_frmGradStaticPage2_preshow_seq0,
        "postShow": frmGradStaticPage2_frmGradStaticPage2_postshow_seq0,
        "addWidgets": addWidgetsfrmGradStaticPage2
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};