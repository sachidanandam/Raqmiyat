//Do not Modify!! This is an auto generated module for 'ipad'. Generated on Thu Feb 19 10:01:07 IST 2015
function leftMenuTempCertAttest_btnHdrGraduateStud_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "1.1");
};
function leftMenuTempCertAttest_btnhdrCurrentStud_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "1.2");
};
function leftMenuTempCertAttest_btnhdrFacultyMem_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "1.3");
};
function leftMenuTempCertAttest_btnHdrGraduateStud_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "1.1");
};
function leftMenuTempCertAttest_btnhdrCurrentStud_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "1.2");
};
function leftMenuTempCertAttest_btnhdrFacultyMem_onClick_seq0Ar(eventobject) {
    leftMenuNav.call(this, "1.3");
};
function initializeleftMenuTempCertAttestAr() {
    hbxhdrCertificateAttestAr = new kony.ui.BoxTemplate({
        "id": "hbxhdrCertificateAttest",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbxhdrCertificateAttestAr
    }, {
        "containerWeight": 31,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 1,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshbxhdrCertificateAttestAr() {
        var imghdrCertificateAttest = new kony.ui.Image2({
            "id": "imghdrCertificateAttest",
            "isVisible": true,
            "src": "vert_ca.png",
            "imageWhenFailed": null,
            "imageWhileDownloading": null
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 72
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var vbxhdrimgattest = new kony.ui.Box({
            "id": "vbxhdrimgattest",
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
        vbxhdrimgattest.add(        imghdrCertificateAttest);
        var btnHdrGraduateStud = new kony.ui.Button({
            "id": "btnHdrGraduateStud",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblGradStud"),
            "skin": "sknBtnBgTranFnBlackBrYellow",
            "focusSkin": "sknBtnBgYellowFnBlackBrYellowPlain",
            "onClick": leftMenuTempCertAttest_btnHdrGraduateStud_onClick_seq0Ar
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 1, 0,0, 1],
            "padding": [ 3, 13,3, 13],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 22
        }, {
            "glowEffect": false,
            "showProgressIndicator": true
        });
        var btnhdrCurrentStud = new kony.ui.Button({
            "id": "btnhdrCurrentStud",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCurrStud"),
            "skin": "sknBtnBgTranFnBlackBrYellow",
            "focusSkin": "sknBtnBgYellowFnBlackBrYellowPlain",
            "onClick": leftMenuTempCertAttest_btnhdrCurrentStud_onClick_seq0Ar
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 1,0, 1],
            "padding": [ 3, 13,3, 13],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 26
        }, {
            "glowEffect": false,
            "showProgressIndicator": true
        });
        var btnhdrFacultyMem = new kony.ui.Button({
            "id": "btnhdrFacultyMem",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblFacMembers"),
            "skin": "sknBtnBgTranFnBlackBrYellow",
            "focusSkin": "sknBtnBgYellowFnBlackBrYellowPlain",
            "onClick": leftMenuTempCertAttest_btnhdrFacultyMem_onClick_seq0Ar
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 1,0, 0],
            "padding": [ 0, 13,3, 14],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 29
        }, {
            "glowEffect": false,
            "showProgressIndicator": true
        });
        var vbxhdrbtnattest = new kony.ui.Box({
            "id": "vbxhdrbtnattest",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 74,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 0,1, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxhdrbtnattest.add(        btnHdrGraduateStud, btnhdrCurrentStud, btnhdrFacultyMem);
        hbxhdrCertificateAttestAr.add(         vbxhdrbtnattest,vbxhdrimgattest);
    }
};
