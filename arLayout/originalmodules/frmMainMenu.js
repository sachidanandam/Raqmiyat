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
};

function frmMainMenu_frmMainMenu_postshow_seq0(eventobject, neworientation) {
    setLocaleBasedHeaderTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblMainMenu"));
};

function frmMainMenu_hbxMenu1_onClick_seq0(eventobject) {
    showHideMenu.call(this);
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblMenu1 = new kony.ui.Label({
        "id": "lblMenu1",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertAttest"),
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxMenu1 = new kony.ui.Box({
        "id": "hbxMenu1",
        "isVisible": true,
        "skin": "sknHbxMenu",
        "onClick": frmMainMenu_hbxMenu1_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblGradStud = new kony.ui.Label({
        "id": "lblGradStud",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGradStud"),
        "skin": "sknMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [16, 0, 16, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblCurStud = new kony.ui.Label({
        "id": "lblCurStud",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCurrStud"),
        "skin": "sknMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [16, 0, 16, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblFacMem = new kony.ui.Label({
        "id": "lblFacMem",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFacMembers"),
        "skin": "sknMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [5, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "containerWeight": 11,
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxMenu2 = new kony.ui.Box({
        "id": "hbxMenu2",
        "isVisible": false,
        "skin": "sknHbxMenu",
        "focusSkin": "sknHbxMenu",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 3, 5, 3],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxMenu2.add(
    imgMenu2, lblMenu2);
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblMenu3 = new kony.ui.Label({
        "id": "lblMenu3",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFahim"),
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxMenu3 = new kony.ui.Box({
        "id": "hbxMenu3",
        "isVisible": false,
        "skin": "sknHbxMenu",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 0, 5, 0],
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
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
        "containerWeight": 13,
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
    hbxMenu1, hbxGradStud, hbxCurStud, hbxFacMem, hbxMenu2, hbxMenu3, hboxLogo);
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