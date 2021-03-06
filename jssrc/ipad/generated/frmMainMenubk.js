//Form JS File
function frmMainMenubk_frmMainMenubk_preshow_seq0(eventobject, neworientation) {
    loadi18GraStudStep1.call(this);
    loadi18FacMembers.call(this);
    loadi18CurStud.call(this);
};

function frmMainMenubk_voxAttest_onClick_seq0(eventobject) {
    frmMainMenu.imgAttest.src = "attestation_off.png";
    frmMainMenu.imgequi.src = "equivalency_on.png";
    frmMainMenu.imgfahim.src = "fahim_on.png";
    frmSubMenu.show()
};

function frmMainMenubk_vboxEqui_onClick_seq0(eventobject) {
    frmMainMenu.imgAttest.src = "attestation_on.png";
    frmMainMenu.imgequi.src = "equivalency_off.png";
    frmMainMenu.imgfahim.src = "fahim_on.png";
};

function frmMainMenubk_vboxFahim_onClick_seq0(eventobject) {
    frmMainMenu.imgAttest.src = "attestation_on.png";
    frmMainMenu.imgequi.src = "equivalency_on.png";
    frmMainMenu.imgfahim.src = "fahim_off.png";
};

function frmMainMenubk_button1818863783365778_onClick_seq0(eventobject) {
    /* 
gblDeviceInfo="tab";
 selectedCategory=category_Graduate;


 */
    /* 
frmAttestGrad1.show();
	
 */
    /* 
invokeCompositService.call(this);

 */
    /* 
getPrevStudyLevels.call(this);

 */
    frmGradStaticPage1.show();
};

function frmMainMenubk_button17230851705877286_onClick_seq0(eventobject) {
    /* 
gblDeviceInfo="tab";
selectedCategory=category_Enrolled;


 */
    /* 
frmAttestGrad1.show();
	
 */
    /* 
invokeCompositService.call(this);

 */
    /* 
getPrevStudyLevels.call(this);

 */
    frmCurntStudStatic.show();
};

function frmMainMenubk_button17230851705877498_onClick_seq0(eventobject) {
    /* 
gblDeviceInfo="tab";
selectedCategory=category_Faculty;

 */
    /* 
frmAttestGrad1.show();
	
 */
    /* 
invokeCompositService.call(this);

 */
    /* 
getPrevStudyLevels.call(this);

 */
    frmFacultyStatic.show();
};

function addWidgetsfrmMainMenubk() {
    var image217240086902 = new kony.ui.Image2({
        "id": "image217240086902",
        "isVisible": true,
        "src": "tablogo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 5, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var imgAttest = new kony.ui.Image2({
        "id": "imgAttest",
        "isVisible": true,
        "src": "attestation_on.png",
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
        "containerWeight": 72
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var voxAttest = new kony.ui.Box({
        "id": "voxAttest",
        "isVisible": true,
        "onClick": frmMainMenubk_voxAttest_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 25,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    voxAttest.add(
    imgAttest);
    var imgequi = new kony.ui.Image2({
        "id": "imgequi",
        "isVisible": true,
        "src": "equivalency_on.png",
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
        "containerWeight": 72
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vboxEqui = new kony.ui.Box({
        "id": "vboxEqui",
        "isVisible": true,
        "onClick": frmMainMenubk_vboxEqui_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 25,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxEqui.add(
    imgequi);
    var imgfahim = new kony.ui.Image2({
        "id": "imgfahim",
        "isVisible": true,
        "src": "fahim_on.png",
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
        "containerWeight": 72
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vboxFahim = new kony.ui.Box({
        "id": "vboxFahim",
        "isVisible": true,
        "onClick": frmMainMenubk_vboxFahim_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 25,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxFahim.add(
    imgfahim);
    var hbox17240086904 = new kony.ui.Box({
        "id": "hbox17240086904",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 5, 0, 0],
        "padding": [8, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17240086904.add(
    voxAttest, vboxEqui, vboxFahim);
    var button1818863783365778 = new kony.ui.Button({
        "id": "button1818863783365778",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenubk_button1818863783365778_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button17230851705877286 = new kony.ui.Button({
        "id": "button17230851705877286",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenubk_button17230851705877286_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button17230851705877498 = new kony.ui.Button({
        "id": "button17230851705877498",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenubk_button17230851705877498_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmMainMenubk.add(
    image217240086902, hbox17240086904, button1818863783365778, button17230851705877286, button17230851705877498);
};

function frmMainMenubkGlobals() {
    var MenuId = [];
    frmMainMenubk = new kony.ui.Form2({
        "id": "frmMainMenubk",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "preShow": frmMainMenubk_frmMainMenubk_preshow_seq0,
        "addWidgets": addWidgetsfrmMainMenubk
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
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