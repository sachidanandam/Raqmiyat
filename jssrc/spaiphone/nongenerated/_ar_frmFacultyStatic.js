//Do not Modify!! This is an auto generated module for 'ipad'. Generated on Thu Jan 29 20:03:10 IST 2015
function frmFacultyStatic_frmFacultyStatic_init_seq0Ar(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmFacultyStatic, "1");
};

function frmFacultyStatic_frmFacultyStatic_preshow_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmFacultyStatic, "1");
 */
    leftMenuUiSelect.call(this, "1.3", frmFacultyStatic);
    attestSubmenu = "1.3";
    selectedCategory = category_Faculty;
    LeftMenuChange.call(this, "1");
    frmOrient.call(this, frmFacultyStatic);
    NFCSupport.call(this);
    ValidateNFCSupport.call(this, frmFacultyStatic);
};

function frmFacultyStatic_frmFacultyStatic_onOrientationChange_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmFacultyStatic, gvModuleSelect);
 */
    frmOrient.call(this, frmFacultyStatic);
    leftMenuUiSelect.call(this, "1.3", frmFacultyStatic);
    /* 
onfrmOrientionChange.call(this,frmFacultyStatic);
 */
};

function frmFacultyStatic_btnScan_onClick_seq0Ar(eventobject) {
    resetAttestationForms.call(this);
    gblDeviceInfo = "tab";
    selectedCategory = category_Faculty;
    gvScannedCertType = 3;
    gvIsScanned = 1;
    frmAttestGrad1.show();
    invokeCompositService.call(this);
    /* 
getPrevStudyLevels.call(this);
 */
    NFCCall.call(this);
};

function frmFacultyStatic_btnAtstatnReq_onClick_seq0Ar(eventobject) {
    resetAttestationForms.call(this);
    gblDeviceInfo = "tab";
    selectedCategory = category_Faculty;
    gvIsScanned = 0;
    frmAttestGrad1.show();
    invokeCompositService.call(this);
    /* 
getPrevStudyLevels.call(this);
 */
};

function addWidgetsfrmFacultyStaticAr() {
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
        "text": kony.i18n.getLocalizedString("lblFacMembers"),
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 94
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
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1239236892712889.add(lblHeaderSubTitle);
    var browFacIns = new kony.ui.Browser({
        "id": "browFacIns",
        "text": "Browser",
        "isVisible": false,
        "screenLevelWidget": true,
        "enableZoom": false,
        "detectTelNumber": true
    }, {
        "margin": [0, 0, 0, 10],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20
    }, {});
    var lblPageTitle = new kony.ui.Label({
        "id": "lblPageTitle",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("FacultyStaticText1"),
        "skin": "lblFrmSubTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851422554 = new kony.ui.Box({
        "id": "hbox17230851422554",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851422554.add(lblPageTitle);
    var rtxtContent = new kony.ui.RichText({
        "id": "rtxtContent",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("FacultyStaticText2"),
        "skin": "sknRichText"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerWeight": 99
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851423079 = new kony.ui.Box({
        "id": "hbox17230851423079",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 2, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851423079.add(rtxtContent);
    var richtext17231149337150 = new kony.ui.RichText({
        "id": "richtext17231149337150",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("FacultyStaticText3"),
        "skin": "sknRichText"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17231149337148 = new kony.ui.Box({
        "id": "hbox17231149337148",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 2, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17231149337148.add(richtext17231149337150);
    var btnScan = new kony.ui.Button({
        "id": "btnScan",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblScanCertificate"),
        "skin": "sknbtnscan",
        "focusSkin": "sknbtnscan",
        "onClick": frmFacultyStatic_btnScan_onClick_seq0Ar
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
        "containerWeight": 24
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
        "onClick": frmFacultyStatic_btnAtstatnReq_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbox17228766336069273 = new kony.ui.Box({
        "id": "vbox17228766336069273",
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
    vbox17228766336069273.add(btnScan, btnAtstatnReq);
    var hbxFotr = new kony.ui.Box({
        "id": "hbxFotr",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 3, 0, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFotr.add(vbox17228766336069273);
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
    vbxRightMenu.add(hbox1239236892712889, browFacIns, hbox17230851422554, hbox17230851423079, hbox17231149337148, hbxFotr);
    var hbox1818863783393473 = new kony.ui.Box({
        "id": "hbox1818863783393473",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 94,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783393473.add(vbxRightMenu, vbxLeftMenu);
    frmFacultyStaticAr.add(hbox1818863783393473);
};

function frmFacultyStaticGlobalsAr() {
    var MenuId = [];
    frmFacultyStaticAr = new kony.ui.Form2({
        "id": "frmFacultyStatic",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmFacultyStatic_frmFacultyStatic_init_seq0Ar,
        "preShow": frmFacultyStatic_frmFacultyStatic_preshow_seq0Ar,
        "onOrientationChange": frmFacultyStatic_frmFacultyStatic_onOrientationChange_seq0Ar,
        "addWidgets": addWidgetsfrmFacultyStaticAr
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