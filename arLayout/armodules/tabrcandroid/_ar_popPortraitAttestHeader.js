//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Thu Feb 19 15:48:56 IST 2015
function popPortraitAttestHeader_btngs_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "1.1");
};
function popPortraitAttestHeader_btncs_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "1.2");
};
function popPortraitAttestHeader_btnfm_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "1.3");
};
function addWidgetspopPortraitAttestHeaderAr() {
    var btngs = new kony.ui.Button({
        "id": "btngs",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGradStud"),
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus",
        "onClick": popPortraitAttestHeader_btngs_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 3,3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1724038453138254 = new kony.ui.Box({
        "id": "hbox1724038453138254",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138254.add(    btngs);
    var line17230851706020022 = new kony.ui.Line({
        "id": "line17230851706020022",
        "isVisible": true,
        "skin": "sknMenuLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 0,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btncs = new kony.ui.Button({
        "id": "btncs",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCurrStud"),
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus",
        "onClick": popPortraitAttestHeader_btncs_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 3,3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1724038453138251 = new kony.ui.Box({
        "id": "hbox1724038453138251",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138251.add(    btncs);
    var line17230851706020048 = new kony.ui.Line({
        "id": "line17230851706020048",
        "isVisible": true,
        "skin": "sknMenuLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 0,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnfm = new kony.ui.Button({
        "id": "btnfm",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFacMembers"),
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus",
        "onClick": popPortraitAttestHeader_btnfm_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 3,3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1724038453138252 = new kony.ui.Box({
        "id": "hbox1724038453138252",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138252.add(    btnfm);
    popPortraitAttestHeaderAr.add(    hbox1724038453138254, line17230851706020022, hbox1724038453138251, line17230851706020048, hbox1724038453138252);
};
function popPortraitAttestHeaderGlobalsAr() {
    popPortraitAttestHeaderAr = new kony.ui.Popup({
        "id": "popPortraitAttestHeader",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "sknFrm",
        "isModal": false,
        "addWidgets": addWidgetspopPortraitAttestHeaderAr
    }, {
        "padding": [ 0, 0,0, 0],
        "containerWeight": 34,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_RESIZE,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
};
