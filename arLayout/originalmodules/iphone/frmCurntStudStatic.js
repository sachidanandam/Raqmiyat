//Form JS File
function frmCurntStudStatic_frmCurntStudStatic_preshow_seq0(eventobject, neworientation) {
    /* 
NFCSupport.call(this);

 */
    ValidateNFCSupport.call(this, frmCurntStudStatic);
};

function frmCurntStudStatic_frmCurntStudStatic_postshow_seq0(eventobject, neworientation) {
    setLocaleBasedHeaderTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblCertAttest"));
};

function frmCurntStudStatic_btnScan_onClick_seq0(eventobject) {
    gvScannedCertType = 2;
    gvIsScanned = 1;
    resetformValuesByTpe.call(this, frmMainMenu.lblCurStud.text);
    onVbxCurrentClick.call(this);
    invokeCompositService.call(this);
    checkNFC.call(this);
};

function frmCurntStudStatic_btnAtstatnReq_onClick_seq0(eventobject) {
    gvScannedCertType = 2;
    gvIsScanned = 0;
    resetformValuesByTpe.call(this, frmMainMenu.lblCurStud.text);
    onVbxCurrentClick.call(this);
    invokeCompositService.call(this);
};

function addWidgetsfrmCurntStudStatic() {
    var browCurStudIns = new kony.ui.Browser({
        "id": "browCurStudIns",
        "text": "Browser",
        "isVisible": true,
        "screenLevelWidget": true,
        "enableZoom": false,
        "detectTelNumber": true
    }, {
        "margin": [1, 1, 1, 1],
        "containerHeight": null,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 69
    }, {});
    var lblHeaderSubTitle = new kony.ui.Label({
        "id": "lblHeaderSubTitle",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCurStudents"),
        "skin": "sknSubHeaderGradAttest"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1239147519723068 = new kony.ui.Box({
        "id": "hbox1239147519723068",
        "isVisible": true,
        "skin": "sknSubHeader",
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1239147519723068.add(
    lblHeaderSubTitle);
    var btnScan = new kony.ui.Button({
        "id": "btnScan",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblScanCertificate"),
        "skin": "sknbtnscan",
        "focusSkin": "sknbtnscan",
        "onClick": frmCurntStudStatic_btnScan_onClick_seq0
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
        "containerWeight": 45
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnAtstatnReq = new kony.ui.Button({
        "id": "btnAtstatnReq",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAttestationReq"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCurntStudStatic_btnAtstatnReq_onClick_seq0
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
        "containerWeight": 45
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbox17228766336068029 = new kony.ui.Box({
        "id": "vbox17228766336068029",
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
    vbox17228766336068029.add(
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
        "margin": [0, 0, 0, 10],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFotr.add(
    vbox17228766336068029);
    frmCurntStudStatic.add(
    browCurStudIns, hbox1239147519723068, hbxFotr);
};

function frmCurntStudStaticGlobals() {
    var MenuId = [];
    frmCurntStudStatic = new kony.ui.Form2({
        "id": "frmCurntStudStatic",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox1239147519723067],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "preShow": frmCurntStudStatic_frmCurntStudStatic_preshow_seq0,
        "postShow": frmCurntStudStatic_frmCurntStudStatic_postshow_seq0,
        "addWidgets": addWidgetsfrmCurntStudStatic
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