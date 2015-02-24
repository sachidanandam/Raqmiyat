//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Mon Dec 29 21:41:22 IST 2014
function frmMainMenu_frmMainMenu_init_seq0Ar(eventobject, neworientation) {
    leftMenuAssignmentMasterPg.call(this);
};

function frmMainMenu_frmMainMenu_preshow_seq0Ar(eventobject, neworientation) {
    homeorientation.call(this);
    loadi18GraStudStep1.call(this);
    loadi18FacMembers.call(this);
    loadi18CurStud.call(this);
    frmOrientLogo.call(this, frmMainMenu);
};

function frmMainMenu_frmMainMenu_onOrientationChange_seq0Ar(eventobject, neworientation) {
    homeorientation.call(this);
    frmOrientLogo.call(this, frmMainMenu);
};

function frmMainMenu_vbox17230851706029688_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
};

function frmMainMenu_btnhomeLandAttest_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "1");
    frmMasterPg.show();
};

function frmMainMenu_btnhomeLandEqui_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "2");
    frmMasterPg.show();
};

function frmMainMenu_btnhomeLandFah_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "3");
    frmMasterPg.show();
};

function frmMainMenu_btnhomePortAttest_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "1");
    frmMasterPg.show();
};

function frmMainMenu_btnhomePortEqui_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "2");
    frmMasterPg.show();
};

function frmMainMenu_btnhomePortFah_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "3");
    frmMasterPg.show();
};

function frmMainMenu_button17230851705900044_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "1");
    frmMasterPg.show();
};

function frmMainMenu_button17230851705900048_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "2");
    frmMasterPg.show();
};

function frmMainMenu_button17230851705900052_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "3");
    frmMasterPg.show();
};

function frmMainMenu_button17230851705935436_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "1");
    frmMasterPg.show();
};

function frmMainMenu_button17230851705935440_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "2");
    frmMasterPg.show();
};

function frmMainMenu_button17230851705935444_onClick_seq0Ar(eventobject) {
    leftMenuAssSelect.call(this, "3");
    frmMasterPg.show();
};

function addWidgetsfrmMainMenuAr() {
    var vbox17230851706029686 = new kony.ui.Box({
        "id": "vbox17230851706029686",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 21,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17230851706029686.add();
    var imgMainMenuLogo = new kony.ui.Image2({
        "id": "imgMainMenuLogo",
        "isVisible": true,
        "src": "tablogo.png",
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
    var vbox17230851706029687 = new kony.ui.Box({
        "id": "vbox17230851706029687",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 61,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17230851706029687.add(imgMainMenuLogo);
    var imgLogOut = new kony.ui.Image2({
        "id": "imgLogOut",
        "isVisible": false,
        "src": "logout_tab.png",
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
        "containerWeight": 61
    }, {});
    var vbox17230851706029688 = new kony.ui.Box({
        "id": "vbox17230851706029688",
        "isVisible": true,
        "onClick": frmMainMenu_vbox17230851706029688_onClick_seq0Ar,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17230851706029688.add(imgLogOut);
    var hbox1724693878712377 = new kony.ui.Box({
        "id": "hbox1724693878712377",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 10, 0, 0],
        "padding": [0, 0, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724693878712377.add(vbox17230851706029688, vbox17230851706029687, vbox17230851706029686);
    var btnhomeLandAttest = new kony.ui.Button({
        "id": "btnhomeLandAttest",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnlandattestoff",
        "focusSkin": "sknbtnlandatteston",
        "onClick": frmMainMenu_btnhomeLandAttest_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1724693878712367 = new kony.ui.Box({
        "id": "vbox1724693878712367",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [0, 0, 6, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724693878712367.add(btnhomeLandAttest);
    var btnhomeLandEqui = new kony.ui.Button({
        "id": "btnhomeLandEqui",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnlandequioff",
        "focusSkin": "sknbtnlandequion",
        "onClick": frmMainMenu_btnhomeLandEqui_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1724693878712368 = new kony.ui.Box({
        "id": "vbox1724693878712368",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724693878712368.add(btnhomeLandEqui);
    var btnhomeLandFah = new kony.ui.Button({
        "id": "btnhomeLandFah",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnlandfahoff",
        "focusSkin": "sknbtnlandfahon",
        "onClick": frmMainMenu_btnhomeLandFah_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1724693878712369 = new kony.ui.Box({
        "id": "vbox1724693878712369",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [6, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724693878712369.add(btnhomeLandFah);
    var hbxhomelands = new kony.ui.Box({
        "id": "hbxhomelands",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 5, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxhomelands.add(vbox1724693878712369, vbox1724693878712368, vbox1724693878712367);
    var btnhomePortAttest = new kony.ui.Button({
        "id": "btnhomePortAttest",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnportattestoff",
        "focusSkin": "sknbtnportatteston",
        "onClick": frmMainMenu_btnhomePortAttest_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 1, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1724693878712374 = new kony.ui.Box({
        "id": "vbox1724693878712374",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [0, 0, 6, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724693878712374.add(btnhomePortAttest);
    var btnhomePortEqui = new kony.ui.Button({
        "id": "btnhomePortEqui",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnportequioff",
        "focusSkin": "sknbtnportequion",
        "onClick": frmMainMenu_btnhomePortEqui_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1724693878712375 = new kony.ui.Box({
        "id": "vbox1724693878712375",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724693878712375.add(btnhomePortEqui);
    var btnhomePortFah = new kony.ui.Button({
        "id": "btnhomePortFah",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnportfahoff",
        "focusSkin": "sknbtnportfahon",
        "onClick": frmMainMenu_btnhomePortFah_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1724693878712379 = new kony.ui.Box({
        "id": "vbox1724693878712379",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [6, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724693878712379.add(btnhomePortFah);
    var hbxhomeport = new kony.ui.Box({
        "id": "hbxhomeport",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 20, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxhomeport.add(vbox1724693878712379, vbox1724693878712375, vbox1724693878712374);
    var button17230851705900044 = new kony.ui.Button({
        "id": "button17230851705900044",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnlandattestoffar",
        "focusSkin": "sknbtnlandattestonar",
        "onClick": frmMainMenu_button17230851705900044_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 1, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox17230851705900042 = new kony.ui.Box({
        "id": "vbox17230851705900042",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [3, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17230851705900042.add(button17230851705900044);
    var button17230851705900048 = new kony.ui.Button({
        "id": "button17230851705900048",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnlandequioffar",
        "focusSkin": "sknbtnlandequionar",
        "onClick": frmMainMenu_button17230851705900048_onClick_seq0Ar
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
        "containerWeight": 100
    }, {});
    var vbox17230851705900046 = new kony.ui.Box({
        "id": "vbox17230851705900046",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 34,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17230851705900046.add(button17230851705900048);
    var button17230851705900052 = new kony.ui.Button({
        "id": "button17230851705900052",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnlandfahoffar",
        "focusSkin": "sknbtnlandfahonar",
        "onClick": frmMainMenu_button17230851705900052_onClick_seq0Ar
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
        "containerWeight": 100
    }, {});
    var vbox17230851705900050 = new kony.ui.Box({
        "id": "vbox17230851705900050",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [5, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17230851705900050.add(button17230851705900052);
    var hbxhomelandar = new kony.ui.Box({
        "id": "hbxhomelandar",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 6, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxhomelandar.add(vbox17230851705900050, vbox17230851705900046, vbox17230851705900042);
    var button17230851705935436 = new kony.ui.Button({
        "id": "button17230851705935436",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnportattestoffar",
        "focusSkin": "sknbtnportattestonar",
        "onClick": frmMainMenu_button17230851705935436_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 1, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 97
    }, {});
    var vbox17230851705935434 = new kony.ui.Box({
        "id": "vbox17230851705935434",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [3, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17230851705935434.add(button17230851705935436);
    var button17230851705935440 = new kony.ui.Button({
        "id": "button17230851705935440",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnportequioffar",
        "focusSkin": "sknbtnportequionar",
        "onClick": frmMainMenu_button17230851705935440_onClick_seq0Ar
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
        "containerWeight": 97
    }, {});
    var vbox17230851705935438 = new kony.ui.Box({
        "id": "vbox17230851705935438",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 34,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17230851705935438.add(button17230851705935440);
    var button17230851705935444 = new kony.ui.Button({
        "id": "button17230851705935444",
        "isVisible": true,
        "text": null,
        "skin": "sknbtnportfahoffar",
        "focusSkin": "sknbtnportfahonar",
        "onClick": frmMainMenu_button17230851705935444_onClick_seq0Ar
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
        "containerWeight": 97
    }, {});
    var vbox17230851705935442 = new kony.ui.Box({
        "id": "vbox17230851705935442",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [5, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17230851705935442.add(button17230851705935444);
    var hbxhomeportar = new kony.ui.Box({
        "id": "hbxhomeportar",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 50, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxhomeportar.add(vbox17230851705935442, vbox17230851705935438, vbox17230851705935434);
    frmMainMenuAr.add(hbox1724693878712377, hbxhomelands, hbxhomeport, hbxhomelandar, hbxhomeportar);
};

function frmMainMenuGlobalsAr() {
    var MenuId = [];
    frmMainMenuAr = new kony.ui.Form2({
        "id": "frmMainMenu",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmMainMenu_frmMainMenu_init_seq0Ar,
        "preShow": frmMainMenu_frmMainMenu_preshow_seq0Ar,
        "onOrientationChange": frmMainMenu_frmMainMenu_onOrientationChange_seq0Ar,
        "addWidgets": addWidgetsfrmMainMenuAr
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
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