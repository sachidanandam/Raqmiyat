//Do not Modify!! This is an auto generated module for 'ipad'. Generated on Thu Jan 29 16:54:21 IST 2015
function frmGradStaticPage1_frmGradStaticPage1_init_seq0Ar(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmGradStaticPage1, "1");
};

function frmGradStaticPage1_frmGradStaticPage1_preshow_seq0Ar(eventobject, neworientation) {
    loadi18GraStudStep1.call(this);
    /* 
leftMenuAssignment.call(this,frmGradStaticPage1, "1");
 */
    leftMenuUiSelect.call(this, "1.1", frmGradStaticPage1);
    attestSubmenu = "1.1";
    selectedCategory = category_Graduate;
    LeftMenuChange.call(this, "1");
    frmOrient.call(this, frmGradStaticPage1);
    NFCSupport.call(this);
    ValidateNFCSupport.call(this, frmGradStaticPage1);
};

function frmGradStaticPage1_frmGradStaticPage1_onOrientationChange_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmGradStaticPage1, gvModuleSelect);
 */
    frmOrient.call(this, frmGradStaticPage1);
    leftMenuUiSelect.call(this, "1.1", frmGradStaticPage1);
    /* 
onfrmOrientionChange.call(this,frmGradStaticPage1);
 */
};

function frmGradStaticPage1_btnScan_onClick_seq0Ar(eventobject) {
    resetAttestationForms.call(this);
    gblDeviceInfo = "tab";
    selectedCategory = category_Graduate;
    gvScannedCertType = 1
    invokeCompositService.call(this);
    getPrevStudyLevels.call(this);
    NFCCall.call(this);
};

function frmGradStaticPage1_btnAtstatnReq_onClick_seq0Ar(eventobject) {
    resetAttestationForms.call(this);
    gblDeviceInfo = "tab";
    selectedCategory = category_Graduate;
    gvIsScanned = 0;
    frmAttestGrad1.show();
    invokeCompositService.call(this);
    getPrevStudyLevels.call(this);
};

function addWidgetsfrmGradStaticPage1Ar() {
    var vbxLeftMenu = new kony.ui.Box({
        "id": "vbxLeftMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
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
        "text": kony.i18n.getLocalizedString("lblGradStud"),
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1239236892712889 = new kony.ui.Box({
        "id": "hbox1239236892712889",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1239236892712889.add(lblHeaderSubTitle);
    var brwr = new kony.ui.Browser({
        "id": "brwr",
        "text": "Browser",
        "isVisible": true,
        "screenLevelWidget": false,
        "enableZoom": false,
        "detectTelNumber": true
    }, {
        "margin": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var btnScan = new kony.ui.Button({
        "id": "btnScan",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblScanCertificate"),
        "skin": "btnAdd",
        "focusSkin": "sknbtnscan",
        "onClick": frmGradStaticPage1_btnScan_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 0, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
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
        "onClick": frmGradStaticPage1_btnAtstatnReq_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 1, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 38
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbox17228766336069075 = new kony.ui.Box({
        "id": "vbox17228766336069075",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17228766336069075.add(btnScan, btnAtstatnReq);
    var hbxFotr = new kony.ui.Box({
        "id": "hbxFotr",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 3, 0, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFotr.add(vbox17228766336069075);
    var vbxRightMenu = new kony.ui.Box({
        "id": "vbxRightMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 70,
        "margin": [0, 0, 0, 0],
        "padding": [2, 0, 2, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxRightMenu.add(hbox1239236892712889, brwr, hbxFotr);
    var hbox1818863783402420 = new kony.ui.Box({
        "id": "hbox1818863783402420",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 85,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783402420.add(vbxRightMenu, vbxLeftMenu);
    frmGradStaticPage1Ar.add(hbox1818863783402420);
};

function frmGradStaticPage1GlobalsAr() {
    var MenuId = [];
    frmGradStaticPage1Ar = new kony.ui.Form2({
        "id": "frmGradStaticPage1",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmGradStaticPage1_frmGradStaticPage1_init_seq0Ar,
        "preShow": frmGradStaticPage1_frmGradStaticPage1_preshow_seq0Ar,
        "onOrientationChange": frmGradStaticPage1_frmGradStaticPage1_onOrientationChange_seq0Ar,
        "addWidgets": addWidgetsfrmGradStaticPage1Ar
    }, {
        "padding": [0, 0, 0, 0],
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