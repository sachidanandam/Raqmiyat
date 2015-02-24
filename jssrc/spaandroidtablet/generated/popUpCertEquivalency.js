//Form JS File
function popUpCertEquivalency_btnCertificateEquivalency_onClick_seq0(eventobject) {
    leftMenuNav.call(this, "2.1");
};

function popUpCertEquivalency_btnStatusOfCerti_onClick_seq0(eventobject) {
    leftMenuNav.call(this, "2.2");
};

function popUpCertEquivalency_btnInquire_onClick_seq0(eventobject) {
    leftMenuNav.call(this, "2.3");
};

function popUpCertEquivalency_btnCommitteesDeision_onClick_seq0(eventobject) {
    leftMenuNav.call(this, "2.4");
};

function addWidgetspopUpCertEquivalency() {
    var btnCertificateEquivalency = new kony.ui.Button({
        "id": "btnCertificateEquivalency",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertEqu"),
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus",
        "onClick": popUpCertEquivalency_btnCertificateEquivalency_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblCertEqu')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [3, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138251.add(
    btnCertificateEquivalency);
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
        "onClick": popUpCertEquivalency_btnStatusOfCerti_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblStatusOfCert')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [3, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138252.add(
    btnStatusOfCerti);
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
        "onClick": popUpCertEquivalency_btnInquire_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblPageTitle3')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [3, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138253.add(
    btnInquire);
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
        "onClick": popUpCertEquivalency_btnCommitteesDeision_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblCommitDec')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [3, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724038453138254.add(
    btnCommitteesDeision);
    popUpCertEquivalency.add(
    hbox1724038453138251, line17230851706020022, hbox1724038453138252, line17230851706027780, hbox1724038453138253, line17230851706028840, hbox1724038453138254);
};

function popUpCertEquivalencyGlobals() {
    popUpCertEquivalency = new kony.ui.Popup({
        "id": "popUpCertEquivalency",
        "title": null,
        "isModal": false,
        "transparencyBehindThePopup": 100,
        "skin": "sknFrm",
        "isModal": false,
        "addWidgets": addWidgetspopUpCertEquivalency
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 34,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "inTransitionConfig": {
            "popupTransition": "None"
        },
        "outTransitionConfig": {
            "popupTransition": "None"
        }
    });
};