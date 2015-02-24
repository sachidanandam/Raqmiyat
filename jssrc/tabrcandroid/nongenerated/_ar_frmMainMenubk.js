//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Thu Feb 19 15:48:56 IST 2015
function frmMainMenubk_frmMainMenubk_preshow_seq0Ar(eventobject, neworientation) {
    loadi18GraStudStep1.call(this);
    loadi18FacMembers.call(this);
    loadi18CurStud.call(this);
};

function frmMainMenubk_voxAttest_onClick_seq0Ar(eventobject) {
    frmMainMenu.imgAttest.src = "attestation_off.png";
    frmMainMenu.imgequi.src = "equivalency_on.png";
    frmMainMenu.imgfahim.src = "fahim_on.png";
    frmSubMenu.show()
};

function frmMainMenubk_vboxEqui_onClick_seq0Ar(eventobject) {
    frmMainMenu.imgAttest.src = "attestation_on.png";
    frmMainMenu.imgequi.src = "equivalency_off.png";
    frmMainMenu.imgfahim.src = "fahim_on.png";
};

function frmMainMenubk_vboxFahim_onClick_seq0Ar(eventobject) {
    frmMainMenu.imgAttest.src = "attestation_on.png";
    frmMainMenu.imgequi.src = "equivalency_on.png";
    frmMainMenu.imgfahim.src = "fahim_off.png";
};

function frmMainMenubk_button1818863783365778_onClick_seq0Ar(eventobject) {
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

function frmMainMenubk_button17230851705877286_onClick_seq0Ar(eventobject) {
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

function frmMainMenubk_button17230851705877498_onClick_seq0Ar(eventobject) {
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

function addWidgetsfrmMainMenubkAr() {
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
    }, {});
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
    }, {});
    var voxAttest = new kony.ui.Box({
        "id": "voxAttest",
        "isVisible": true,
        "onClick": frmMainMenubk_voxAttest_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 25,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    voxAttest.add(imgAttest);
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
    }, {});
    var vboxEqui = new kony.ui.Box({
        "id": "vboxEqui",
        "isVisible": true,
        "onClick": frmMainMenubk_vboxEqui_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 25,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxEqui.add(imgequi);
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
    }, {});
    var vboxFahim = new kony.ui.Box({
        "id": "vboxFahim",
        "isVisible": true,
        "onClick": frmMainMenubk_vboxFahim_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 25,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxFahim.add(imgfahim);
    var hbox17240086904 = new kony.ui.Box({
        "id": "hbox17240086904",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 5, 0, 0],
        "padding": [0, 0, 8, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17240086904.add(vboxFahim, vboxEqui, voxAttest);
    var button1818863783365778 = new kony.ui.Button({
        "id": "button1818863783365778",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenubk_button1818863783365778_onClick_seq0Ar
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
    }, {});
    var button17230851705877286 = new kony.ui.Button({
        "id": "button17230851705877286",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenubk_button17230851705877286_onClick_seq0Ar
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
    }, {});
    var button17230851705877498 = new kony.ui.Button({
        "id": "button17230851705877498",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMainMenubk_button17230851705877498_onClick_seq0Ar
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
    }, {});
    frmMainMenubkAr.add(image217240086902, hbox17240086904, button1818863783365778, button17230851705877286, button17230851705877498);
};

function frmMainMenubkGlobalsAr() {
    var MenuId = [];
    frmMainMenubkAr = new kony.ui.Form2({
        "id": "frmMainMenubk",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "preShow": frmMainMenubk_frmMainMenubk_preshow_seq0Ar,
        "addWidgets": addWidgetsfrmMainMenubkAr
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
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