//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Thu Feb 19 15:48:56 IST 2015
function leftMenuTempCertEquival_btnHdrCertificateEquivalency_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.1");
};
function leftMenuTempCertEquival_btnHdrStatusCertificate_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.2");
};
function leftMenuTempCertEquival_btnHdrInquire_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.3");
};
function leftMenuTempCertEquival_btnHdrCommittesDecision_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.4");
};
function leftMenuTempCertEquival_btnHdrCertificateEquivalency_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.1");
};
function leftMenuTempCertEquival_btnHdrStatusCertificate_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.2");
};
function leftMenuTempCertEquival_btnHdrInquire_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.3");
};
function leftMenuTempCertEquival_btnHdrCommittesDecision_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "2.4");
};
function initializeleftMenuTempCertEquivalAr() {
    hbxhdrCertificateEquiAr = new kony.ui.BoxTemplate({
        "id": "hbxhdrCertificateEqui",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbxhdrCertificateEquiAr
    }, {
        "containerWeight": 29,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshbxhdrCertificateEquiAr() {
        var iImgCertificateEquivalency = new kony.ui.Image2({
            "id": "iImgCertificateEquivalency",
            "isVisible": true,
            "src": "vert_ce.png",
            "imageWhenFailed": null,
            "imageWhileDownloading": null
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [ 1, 2,4, 2],
            "padding": [ 0, 0,0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 77
        }, {});
        var vbox1724038453124041 = new kony.ui.Box({
            "id": "vbox1724038453124041",
            "isVisible": true,
            "skin": "leftMenuVerticalBg",
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 26,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox1724038453124041.add(        iImgCertificateEquivalency);
        var btnHdrCertificateEquivalency = new kony.ui.Button({
            "id": "btnHdrCertificateEquivalency",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCertEqu"),
            "skin": "sknBtnBgTranFnBlackBrYellow",
            "focusSkin": "sknBtnBgYellowFnBlackBrYellowPlain",
            "onClick": leftMenuTempCertEquival_btnHdrCertificateEquivalency_onClick_seq0Ar
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": true,
            "hExpand": true,
            "margin": [ 1, 0,1, 2],
            "padding": [ 3, 6,3, 6],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 24
        }, {});
        var btnHdrStatusCertificate = new kony.ui.Button({
            "id": "btnHdrStatusCertificate",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblStatusOfCert"),
            "skin": "sknBtnBgTranFnBlackBrYellow",
            "focusSkin": "sknBtnBgTranFnBlack",
            "onClick": leftMenuTempCertEquival_btnHdrStatusCertificate_onClick_seq0Ar
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
            "vExpand": true,
            "hExpand": true,
            "margin": [ 1, 0,1, 2],
            "padding": [ 3, 6,3, 6],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 24
        }, {});
        var btnHdrInquire = new kony.ui.Button({
            "id": "btnHdrInquire",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblPageTitle3"),
            "skin": "sknBtnBgTranFnBlackBrYellow",
            "focusSkin": "sknBtnBgYellowFnBlackBrYellowPlain",
            "onClick": leftMenuTempCertEquival_btnHdrInquire_onClick_seq0Ar
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
            "vExpand": true,
            "hExpand": true,
            "margin": [ 1, 0,1, 2],
            "padding": [ 3, 6,3, 6],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 24
        }, {});
        var btnHdrCommittesDecision = new kony.ui.Button({
            "id": "btnHdrCommittesDecision",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCommitDec"),
            "skin": "sknBtnBgTranFnBlackBrYellow",
            "focusSkin": "sknBtnBgYellowFnBlackBrYellowPlain",
            "onClick": leftMenuTempCertEquival_btnHdrCommittesDecision_onClick_seq0Ar
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
            "vExpand": true,
            "hExpand": true,
            "margin": [ 1, 0,1, 0],
            "padding": [ 3, 6,3, 6],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 24
        }, {});
        var vbox1724038453126158 = new kony.ui.Box({
            "id": "vbox1724038453126158",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 74,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox1724038453126158.add(        btnHdrCertificateEquivalency, btnHdrStatusCertificate, btnHdrInquire, btnHdrCommittesDecision);
        hbxhdrCertificateEquiAr.add(         vbox1724038453126158,vbox1724038453124041);
    }
};
