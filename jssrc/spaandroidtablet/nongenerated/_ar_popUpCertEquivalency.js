//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Mon Dec 29 21:41:23 IST 2014
function popUpCertEquivalency_btnCertificateEquivalency_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.1");
};

function popUpCertEquivalency_btnStatusOfCerti_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.2");
};

function popUpCertEquivalency_btnInquire_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.3");
};

function popUpCertEquivalency_btnCommitteesDeision_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.4");
};

function addWidgetspopUpCertEquivalencyAr() {
    var btnCertificateEquivalency = new kony.ui.Button({
        "id": "btnCertificateEquivalency",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertEqu"),
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus",
        "onClick": popUpCertEquivalency_btnCertificateEquivalency_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 3, 3],
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
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138251.add(btnCertificateEquivalency);
    var line17230851706020022 = new kony.ui.Line({
        "id": "line17230851706020022",
        "isVisible": true,
        "skin": "sknMenuLine"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnStatusOfCerti = new kony.ui.Button({
        "id": "btnStatusOfCerti",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStatusOfCert"),
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus",
        "onClick": popUpCertEquivalency_btnStatusOfCerti_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 3, 3],
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
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138252.add(btnStatusOfCerti);
    var line17230851706027780 = new kony.ui.Line({
        "id": "line17230851706027780",
        "isVisible": true,
        "skin": "sknMenuLine"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnInquire = new kony.ui.Button({
        "id": "btnInquire",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPageTitle3"),
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus",
        "onClick": popUpCertEquivalency_btnInquire_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1724038453138253 = new kony.ui.Box({
        "id": "hbox1724038453138253",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138253.add(btnInquire);
    var line17230851706028840 = new kony.ui.Line({
        "id": "line17230851706028840",
        "isVisible": true,
        "skin": "sknMenuLine"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnCommitteesDeision = new kony.ui.Button({
        "id": "btnCommitteesDeision",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCommitDec"),
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus",
        "onClick": popUpCertEquivalency_btnCommitteesDeision_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 3, 3],
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
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138254.add(btnCommitteesDeision);
    popUpCertEquivalencyAr.add(hbox1724038453138251, line17230851706020022, hbox1724038453138252, line17230851706027780, hbox1724038453138253, line17230851706028840, hbox1724038453138254);
};

function popUpCertEquivalencyGlobalsAr() {
    popUpCertEquivalencyAr = new kony.ui.Popup({
        "id": "popUpCertEquivalency",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "sknFrm",
        "isModal": false,
        "addWidgets": addWidgetspopUpCertEquivalencyAr
    }, {
        "padding": [0, 0, 0, 0],
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