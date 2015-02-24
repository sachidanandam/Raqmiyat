//Template File
function leftMenuTempCertAttest_btnHdrGraduateStud_onClick_seq0(eventobject) {
    leftMenuNav.call(this, "1.1");
};

function leftMenuTempCertAttest_btnhdrCurrentStud_onClick_seq0(eventobject) {
    leftMenuNav.call(this, "1.2");
};

function leftMenuTempCertAttest_btnhdrFacultyMem_onClick_seq0(eventobject) {
    leftMenuNav.call(this, "1.3");
};

function leftMenuTempCertAttest_btnHdrGraduateStud_onClick_seq0(eventobject) {
    leftMenuNav.call(this, "1.1");
};

function leftMenuTempCertAttest_btnhdrCurrentStud_onClick_seq0(eventobject) {
    leftMenuNav.call(this, "1.2");
};

function leftMenuTempCertAttest_btnhdrFacultyMem_onClick_seq0(eventobject) {
    leftMenuNav.call(this, "1.3");
};

function initializeleftMenuTempCertAttest() {
    hbxhdrCertificateAttest = new kony.ui.BoxTemplate({
        "id": "hbxhdrCertificateAttest",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbxhdrCertificateAttest
    }, {
        "containerWeight": 31,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 1, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbxhdrCertificateAttest() {
        var imghdrCertificateAttest = new kony.ui.Image2({
            "id": "imghdrCertificateAttest",
            "isVisible": true,
            "src": "vert_ca.png",
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
        var vbxhdrimgattest = new kony.ui.Box({
            "id": "vbxhdrimgattest",
            "isVisible": true,
            "skin": "leftMenuVerticalBg",
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 26,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxhdrimgattest.add(
        imghdrCertificateAttest);
        var btnHdrGraduateStud = new kony.ui.Button({
            "id": "btnHdrGraduateStud",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblGradStud"),
            "skin": "sknBtnBgTranFnBlackBrYellow",
            "focusSkin": "sknBtnBgYellowFnBlackBrYellowPlain",
            "onClick": leftMenuTempCertAttest_btnHdrGraduateStud_onClick_seq0
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 1, 1],
            "padding": [3, 13, 3, 13],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            "onClick": leftMenuTempCertAttest_btnhdrCurrentStud_onClick_seq0
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 1, 0, 1],
            "padding": [3, 13, 3, 13],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            "onClick": leftMenuTempCertAttest_btnhdrFacultyMem_onClick_seq0
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 1, 0, 0],
            "padding": [3, 13, 0, 14],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            "margin": [0, 0, 0, 0],
            "padding": [1, 0, 1, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxhdrbtnattest.add(
        btnHdrGraduateStud, btnhdrCurrentStud, btnhdrFacultyMem);
        hbxhdrCertificateAttest.add(
        vbxhdrimgattest, vbxhdrbtnattest);
    }
};