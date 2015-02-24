//Form JS File
function frmMainMenu_frmMainMenu_preshow_seq0(eventobject, neworientation) {
    showHideMenuItems.call(this, true);
    showMainMenuImage.call(this);
    loadi18CurStud.call(this);
    loadi18FacMembers.call(this);
    loadi18GraStudStep1.call(this);
    loadi18GraStudStep2.call(this);
    /* 
if(kony.i18n.getCurrentLocale()=="ar_SA")
frmMainMenu.imgFooter.src="imgapp.png";
else
frmMainMenu.imgFooter.src="imgappeng.png";

 */
    loadi18CertificateEqui.call(this);
};

function frmMainMenu_frmMainMenu_postshow_seq0(eventobject, neworientation) {
    setLocaleBasedHeaderTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblMainMenu"));
    if (gblResetFlag) {
        gblResetFlag = false;
        resetAttestationForms();
    }
    attachalert = false;
};

function frmMainMenu_frmMainMenu_onDeviceBack_seq0(eventobject, neworientation) {
    doNothing.call(this);
};

function frmMainMenu_hbxMenu1_onClick_seq0(eventobject) {
    showHideMenu.call(this, 1);
};

function frmMainMenu_vbxGraduate_onClick_seq0(eventobject) {
    onVbxGraduateClick.call(this);
    /* 
frmGradStaticPage1.show();
	
 */
};

function frmMainMenu_vbxCurrent_onClick_seq0(eventobject) {
    frmCurntStudStatic.show();
};

function frmMainMenu_vbxFaculty_onClick_seq0(eventobject) {
    frmFacultyStatic.show();
};

function frmMainMenu_hbxMenu2_onClick_seq0(eventobject) {
    /* 
if(frmMainMenu.hboxCert.isVisible==true){
frmMainMenu.hboxCert.isVisible=false;
}else{
frmMainMenu.hboxCert.isVisible=true
}

 */
    showHideMenu.call(this, 2);
};

function frmMainMenu_vbox1818863783236213_onClick_seq0(eventobject) {
    /* 
uiPgNavigation.call(this,"2.1");

 */
    frmCertificateEquivalencyLanding.show();
    /* 
if(gblDeviceInfo == "tab")
 frmCertEquivalencyTab1.show();
else 
 frmCertEquivalency1.show();

 */
};

function frmMainMenu_vbox1818863783288502_onClick_seq0(eventobject) {
    /* 
uiPgNavigation.call(this,"2.2");

 */
    clearinquirymobile.call(this);
    frmApplicationStatus.show();
};

function frmMainMenu_vbox1818863783243638_onClick_seq0(eventobject) {
    /* 
uiPgNavigation.call(this,"2.3");

 */
    frmInquireAboutInstStaticPage.show();
};

function frmMainMenu_hbox1818863783294434_onClick_seq0(eventobject) {
    frmCommitteesDecisionStaticPage.show();
};

function frmMainMenu_vbox1818863783294438_onClick_seq0(eventobject) {
    /* 
uiPgNavigation.call(this,"2.4");

 */
    frmCommitteesDecisionStaticPage.show();
};

function frmMainMenu_hbxMenu3_onClick_seq0(eventobject) {
    showHideMenu.call(this, 3);
};

function addWidgetsfrmMainMenu() {
    var imgMenu1 = new kony.ui.Image2({
        "id": "imgMenu1",
        "isVisible": true,
        "src": "mic1.png",
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
        "containerWeight": 14
    }, {});
    var lblMenu1 = new kony.ui.Label({
        "id": "lblMenu1",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertAttest"),
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false
    });
    var hbxMenu1 = new kony.ui.Box({
        "id": "hbxMenu1",
        "isVisible": true,
        "skin": "sknHbxMenu",
        "onClick": frmMainMenu_hbxMenu1_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 10, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxMenu1.add(
    imgMenu1, lblMenu1);
    var image2153428946633834 = new kony.ui.Image2({
        "id": "image2153428946633834",
        "isVisible": true,
        "src": "pixel.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {});
    var lblGradStud = new kony.ui.Label({
        "id": "lblGradStud",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGradStud"),
        "skin": "sknMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var vbxGraduate = new kony.ui.Box({
        "id": "vbxGraduate",
        "isVisible": true,
        "skin": "sknVbxMenuBorder",
        "onClick": frmMainMenu_vbxGraduate_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 86,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxGraduate.add(
    lblGradStud);
    var hbxGradStud = new kony.ui.Box({
        "id": "hbxGradStud",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 33,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxGradStud.add(
    image2153428946633834, vbxGraduate);
    var image2153428946639018 = new kony.ui.Image2({
        "id": "image2153428946639018",
        "isVisible": true,
        "src": "pixel.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {});
    var lblCurStud = new kony.ui.Label({
        "id": "lblCurStud",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCurrStud"),
        "skin": "sknMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var vbxCurrent = new kony.ui.Box({
        "id": "vbxCurrent",
        "isVisible": true,
        "skin": "sknVbxMenuBorder",
        "onClick": frmMainMenu_vbxCurrent_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 86,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxCurrent.add(
    lblCurStud);
    var hbxCurStud = new kony.ui.Box({
        "id": "hbxCurStud",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 34,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxCurStud.add(
    image2153428946639018, vbxCurrent);
    var image2153428946654162 = new kony.ui.Image2({
        "id": "image2153428946654162",
        "isVisible": true,
        "src": "pixel.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {});
    var lblFacMem = new kony.ui.Label({
        "id": "lblFacMem",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFacMembers"),
        "skin": "sknMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var vbxFaculty = new kony.ui.Box({
        "id": "vbxFaculty",
        "isVisible": true,
        "skin": "sknVbxMenuBorder",
        "onClick": frmMainMenu_vbxFaculty_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 86,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxFaculty.add(
    lblFacMem);
    var hbxFacMem = new kony.ui.Box({
        "id": "hbxFacMem",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 33,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFacMem.add(
    image2153428946654162, vbxFaculty);
    var vboxCertAset = new kony.ui.Box({
        "id": "vboxCertAset",
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
    vboxCertAset.add(
    hbxGradStud, hbxCurStud, hbxFacMem);
    var hboxCertAset = new kony.ui.Box({
        "id": "hboxCertAset",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 24,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxCertAset.add(
    vboxCertAset);
    var imgMenu2 = new kony.ui.Image2({
        "id": "imgMenu2",
        "isVisible": true,
        "src": "mic2.png",
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
        "containerWeight": 14
    }, {});
    var lblMenu2 = new kony.ui.Label({
        "id": "lblMenu2",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertEqu"),
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false
    });
    var hbxMenu2 = new kony.ui.Box({
        "id": "hbxMenu2",
        "isVisible": true,
        "skin": "sknHbxMenu",
        "focusSkin": "sknHbxMenu",
        "onClick": frmMainMenu_hbxMenu2_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 3, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxMenu2.add(
    imgMenu2, lblMenu2);
    var image21818863783236211 = new kony.ui.Image2({
        "id": "image21818863783236211",
        "isVisible": true,
        "src": "pixel.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {});
    var lblCertEqu = new kony.ui.Label({
        "id": "lblCertEqu",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertEqu"),
        "skin": "sknMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var vbox1818863783236213 = new kony.ui.Box({
        "id": "vbox1818863783236213",
        "isVisible": true,
        "skin": "sknVbxMenuBorder",
        "onClick": frmMainMenu_vbox1818863783236213_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 86,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1818863783236213.add(
    lblCertEqu);
    var hbox1818863783236209 = new kony.ui.Box({
        "id": "hbox1818863783236209",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 23,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783236209.add(
    image21818863783236211, vbox1818863783236213);
    var image21818863783288500 = new kony.ui.Image2({
        "id": "image21818863783288500",
        "isVisible": true,
        "src": "pixel.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {});
    var lblStatusOfCert = new kony.ui.Label({
        "id": "lblStatusOfCert",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStatusOfCert"),
        "skin": "sknMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var vbox1818863783288502 = new kony.ui.Box({
        "id": "vbox1818863783288502",
        "isVisible": true,
        "skin": "sknVbxMenuBorder",
        "onClick": frmMainMenu_vbox1818863783288502_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 86,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1818863783288502.add(
    lblStatusOfCert);
    var hbox1818863783288498 = new kony.ui.Box({
        "id": "hbox1818863783288498",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 25,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783288498.add(
    image21818863783288500, vbox1818863783288502);
    var image21818863783243636 = new kony.ui.Image2({
        "id": "image21818863783243636",
        "isVisible": true,
        "src": "pixel.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {});
    var lblPageTitle3 = new kony.ui.Label({
        "id": "lblPageTitle3",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPageTitle3"),
        "skin": "sknMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var vbox1818863783243638 = new kony.ui.Box({
        "id": "vbox1818863783243638",
        "isVisible": true,
        "skin": "sknVbxMenuBorder",
        "onClick": frmMainMenu_vbox1818863783243638_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 86,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1818863783243638.add(
    lblPageTitle3);
    var hbox1818863783243634 = new kony.ui.Box({
        "id": "hbox1818863783243634",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 25,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783243634.add(
    image21818863783243636, vbox1818863783243638);
    var image21818863783294436 = new kony.ui.Image2({
        "id": "image21818863783294436",
        "isVisible": true,
        "src": "pixel.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {});
    var lblCommitDec = new kony.ui.Label({
        "id": "lblCommitDec",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCommitDec"),
        "skin": "sknMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var vbox1818863783294438 = new kony.ui.Box({
        "id": "vbox1818863783294438",
        "isVisible": true,
        "skin": "sknVbxMenuBorder",
        "onClick": frmMainMenu_vbox1818863783294438_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 86,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1818863783294438.add(
    lblCommitDec);
    var hbox1818863783294434 = new kony.ui.Box({
        "id": "hbox1818863783294434",
        "isVisible": true,
        "onClick": frmMainMenu_hbox1818863783294434_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 25,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1818863783294434.add(
    image21818863783294436, vbox1818863783294438);
    var vbox1818863783350283 = new kony.ui.Box({
        "id": "vbox1818863783350283",
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
    vbox1818863783350283.add(
    hbox1818863783236209, hbox1818863783288498, hbox1818863783243634, hbox1818863783294434);
    var hboxCert = new kony.ui.Box({
        "id": "hboxCert",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 31,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxCert.add(
    vbox1818863783350283);
    var imgMenu3 = new kony.ui.Image2({
        "id": "imgMenu3",
        "isVisible": true,
        "src": "mic3.png",
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
        "containerWeight": 14
    }, {});
    var lblMenu3 = new kony.ui.Label({
        "id": "lblMenu3",
        "isVisible": true,
        "text": "Fahim",
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false
    });
    var hbxMenu3 = new kony.ui.Box({
        "id": "hbxMenu3",
        "isVisible": false,
        "skin": "sknHbxMenu",
        "onClick": frmMainMenu_hbxMenu3_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 3, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxMenu3.add(
    imgMenu3, lblMenu3);
    var imgFooter = new kony.ui.Image2({
        "id": "imgFooter",
        "isVisible": true,
        "src": "imgapp.png",
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
        "containerWeight": 100
    }, {});
    var vbox1238998564730125 = new kony.ui.Box({
        "id": "vbox1238998564730125",
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
    vbox1238998564730125.add(
    imgFooter);
    var hboxLogo = new kony.ui.Box({
        "id": "hboxLogo",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
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
    hboxLogo.add(
    vbox1238998564730125);
    frmMainMenu.add(
    hbxMenu1, hboxCertAset, hbxMenu2, hboxCert, hbxMenu3, hboxLogo);
};

function frmMainMenuGlobals() {
    var MenuId = [];
    frmMainMenu = new kony.ui.Form2({
        "id": "frmMainMenu",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox153428946468519],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "preShow": frmMainMenu_frmMainMenu_preshow_seq0,
        "postShow": frmMainMenu_frmMainMenu_postshow_seq0,
        "addWidgets": addWidgetsfrmMainMenu
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
        "onDeviceBack": frmMainMenu_frmMainMenu_onDeviceBack_seq0,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};