//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Thu Feb 19 15:48:55 IST 2015
function frmCertificateEquivalencyLanding_frmCertificateEquivalencyLanding_init_seq0Ar(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmCertificateEquivalencyLanding, "2");
};
function frmCertificateEquivalencyLanding_frmCertificateEquivalencyLanding_preshow_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmCertificateEquivalencyLanding, "2");
 */
    leftMenuUiSelect.call(this, "2.1", frmCertificateEquivalencyLanding);
    LeftMenuChange.call(this, "2");
    frmOrient.call(this, frmCertificateEquivalencyLanding);
    /* 
invokeEquiWsGetCertList.call(this);
 */
    leftMenuAssignment.call(this, frmCertificateEquivalencyLanding, "2");
};
function frmCertificateEquivalencyLanding_frmCertificateEquivalencyLanding_postshow_seq0Ar(eventobject, neworientation) {
    /* 
frmCertEquivalStaticPage.brwr.htmlString=kony.i18n.getLocalizedString("statictextCe1");
 */
};
function frmCertificateEquivalencyLanding_frmCertificateEquivalencyLanding_onOrientationChange_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmCertificateEquivalencyLanding, gvModuleSelect);
 */
    frmOrient.call(this, frmCertificateEquivalencyLanding);
    leftMenuUiSelect.call(this, "2.1", frmCertificateEquivalencyLanding);
    /* 
onfrmOrientionChange.call(this,frmCertificateEquivalencyLanding);
 */
};
function frmCertificateEquivalencyLanding_segRegisteredCertificate_onRowClick_seq0Ar(eventobject, sectionNumber, rowNumber) {
    frmCertificateEquivalencyLanding_segRegisteredCertificate_onRowClick.call(this);
};
function frmCertificateEquivalencyLanding_hbox1724008663207308_onClick_seq0Ar(eventobject, context) {};
function frmCertificateEquivalencyLanding_btnRegNewCertificate_onClick_seq0Ar(eventobject) {
    /* 
isNewCertReg = true;
 */
    /* 
resetCertificateEquivalencytab.call(this);
 */
    frmCertEquivalStaticPage.brwr.htmlString = kony.i18n.getLocalizedString("statictextCe1");
    frmCertEquivalStaticPage.show();
};
function addWidgetsfrmCertificateEquivalencyLandingAr() {
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
    var lblApplicantName = new kony.ui.Label({
        "id": "lblApplicantName",
        "isVisible": true,
        "text": "Test Applicant - 2011120202",
        "skin": "sknLblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox17239193183868225 = new kony.ui.Box({
        "id": "hbox17239193183868225",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 2, 0,2, 0],
        "padding": [ 0, 1,0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183868225.add(    lblApplicantName);
    var lblRegisteredCertificates = new kony.ui.Label({
        "id": "lblRegisteredCertificates",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblRegisteredCertificates"),
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,0, 1],
        "padding": [ 0, 0,0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "textCopyable": false
    });
    var segRegisteredCertificatebox = new kony.ui.Box({
        "id": "segRegisteredCertificatebox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_RIGHT,
        "containerWeight": 36
    }, {});
    var segRegisteredCertificate = new kony.ui.SegmentedUI2({
        "id": "segRegisteredCertificate",
        "isVisible": false,
        "retainSelection": false,
        "widgetDataMap": {
            "lblStatus": "lblStatus",
            "hbox1724008663207308": "hbox1724008663207308",
            "lblCert": "lblCert",
            "lblStudyLevel": "lblStudyLevel",
            "vbox1724008663205079": "vbox1724008663205079",
            "vbox1724008663145390": "vbox1724008663145390",
            "imgNext": "imgNext",
            "hbox1724008663170556": "hbox1724008663170556",
            "line1725796146314642": "line1725796146314642",
            "line1725796146314488": "line1725796146314488",
            "lblStatusVal": "lblStatusVal",
            "line1725796146315882": "line1725796146315882",
            "hbox1724008663170544": "hbox1724008663170544",
            "lblStudyLevelVal": "lblStudyLevelVal",
            "hbox1724008663190824": "hbox1724008663190824",
            "lblCertNoVal": "lblCertNoVal",
            "hbox1724008663143645": "hbox1724008663143645",
            "hbox1724008663183984": "hbox1724008663183984",
            "lblCertNo": "lblCertNo",
            "lblCertVal": "lblCertVal"
        },
        "data": [{
            "imgNext": "next.png",
            "lblStatus": "",
            "lblStatusVal": "",
            "lblStudyLevel": "",
            "lblCert": "",
            "lblStudyLevelVal": "",
            "lblCertNoVal": "",
            "lblCertNo": "",
            "lblCertVal": ""
        }],
        "rowTemplate": segRegisteredCertificatebox,
        "rowSkin": "segWhiteBrBule",
        "rowFocusSkin": "segGrayBrBule",
        "alternateRowSkin": "segGrayBrBule",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 4,
        "separatorColor": "64646464",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmCertificateEquivalencyLanding_segRegisteredCertificate_onRowClick_seq0Ar,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [ 0, 2,0, 2],
        "padding": [ 0, 2,0, 1],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {});
    var lblCertNo = new kony.ui.Label({
        "id": "lblCertNo",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false
    });
    var lblCertNoVal = new kony.ui.Label({
        "id": "lblCertNoVal",
        "isVisible": true,
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
        "containerWeight": 64
    }, {
        "textCopyable": false
    });
    var hbox1724008663170544 = new kony.ui.Box({
        "id": "hbox1724008663170544",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,1, 0],
        "padding": [ 0, 1,0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663170544.add(     lblCertNoVal,lblCertNo);
    var line1725796146315882 = new kony.ui.Line({
        "id": "line1725796146315882",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 0,1, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCert = new kony.ui.Label({
        "id": "lblCert",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false
    });
    var lblCertVal = new kony.ui.Label({
        "id": "lblCertVal",
        "isVisible": true,
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
        "containerWeight": 64
    }, {
        "textCopyable": false
    });
    var hbox1724008663170556 = new kony.ui.Box({
        "id": "hbox1724008663170556",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,1, 0],
        "padding": [ 0, 1,0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663170556.add(     lblCertVal,lblCert);
    var line1725796146314488 = new kony.ui.Line({
        "id": "line1725796146314488",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 0,1, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblStudyLevel = new kony.ui.Label({
        "id": "lblStudyLevel",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false
    });
    var lblStudyLevelVal = new kony.ui.Label({
        "id": "lblStudyLevelVal",
        "isVisible": true,
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
        "containerWeight": 64
    }, {
        "textCopyable": false
    });
    var hbox1724008663183984 = new kony.ui.Box({
        "id": "hbox1724008663183984",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,1, 0],
        "padding": [ 0, 1,0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663183984.add(     lblStudyLevelVal,lblStudyLevel);
    var line1725796146314642 = new kony.ui.Line({
        "id": "line1725796146314642",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 0,1, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblStatus = new kony.ui.Label({
        "id": "lblStatus",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false
    });
    var lblStatusVal = new kony.ui.Label({
        "id": "lblStatusVal",
        "isVisible": true,
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
        "containerWeight": 64
    }, {
        "textCopyable": false
    });
    var hbox1724008663190824 = new kony.ui.Box({
        "id": "hbox1724008663190824",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,1, 0],
        "padding": [ 0, 1,0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663190824.add(     lblStatusVal,lblStatus);
    var vbox1724008663145390 = new kony.ui.Box({
        "id": "vbox1724008663145390",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 96,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724008663145390.add(    hbox1724008663170544, line1725796146315882, hbox1724008663170556, line1725796146314488, hbox1724008663183984, line1725796146314642, hbox1724008663190824);
    var imgNext = new kony.ui.Image2({
        "id": "imgNext",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1724008663207308 = new kony.ui.Box({
        "id": "hbox1724008663207308",
        "isVisible": true,
        "onClick": frmCertificateEquivalencyLanding_hbox1724008663207308_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 19,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663207308.add(    imgNext);
    var vbox1724008663205079 = new kony.ui.Box({
        "id": "vbox1724008663205079",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 4,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724008663205079.add(    hbox1724008663207308);
    var hbox1724008663143645 = new kony.ui.Box({
        "id": "hbox1724008663143645",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663143645.add(     vbox1724008663205079,vbox1724008663145390);
    segRegisteredCertificatebox.add(    hbox1724008663143645);
    var btnRegNewCertificate = new kony.ui.Button({
        "id": "btnRegNewCertificate",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblRegNewCertificate"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertificateEquivalencyLanding_btnRegNewCertificate_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 3],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
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
    vbxRightMenu.add(    hbox17239193183868225, lblRegisteredCertificates, segRegisteredCertificate, btnRegNewCertificate);
    var hbox17231149615879782 = new kony.ui.Box({
        "id": "hbox17231149615879782",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 98,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 2,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17231149615879782.add(     vbxRightMenu,vbxLeftMenu);
    frmCertificateEquivalencyLandingAr.add(    hbox17231149615879782);
};
function frmCertificateEquivalencyLandingGlobalsAr() {
    var MenuId = [];
    frmCertificateEquivalencyLandingAr = new kony.ui.Form2({
        "id": "frmCertificateEquivalencyLanding",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmCertificateEquivalencyLanding_frmCertificateEquivalencyLanding_init_seq0Ar,
        "preShow": frmCertificateEquivalencyLanding_frmCertificateEquivalencyLanding_preshow_seq0Ar,
        "postShow": frmCertificateEquivalencyLanding_frmCertificateEquivalencyLanding_postshow_seq0Ar,
        "onOrientationChange": frmCertificateEquivalencyLanding_frmCertificateEquivalencyLanding_onOrientationChange_seq0Ar,
        "addWidgets": addWidgetsfrmCertificateEquivalencyLandingAr
    }, {
        "padding": [ 0, 0,0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
