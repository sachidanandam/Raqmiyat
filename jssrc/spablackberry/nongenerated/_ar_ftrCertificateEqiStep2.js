//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 09 17:24:49 IST 2015
function ftrCertificateEqiStep2_btnPrev_onClick_seq0Ar(eventobject) {
    frmCertEquivalStaticPage1.show();
};

function ftrCertificateEqiStep2_btnNext_onClick_seq0Ar(eventobject) {
    frmCertificateEquivalencyLanding.show();
};

function ftrCertificateEqiStep2_btnPrev_onClick_seq0Ar(eventobject) {
    frmCertEquivalStaticPage1.show();
};

function ftrCertificateEqiStep2_btnNext_onClick_seq0Ar(eventobject) {
    frmCertificateEquivalencyLanding.show();
};

function initializeftrCertificateEqiStep2Ar() {
    hbox17239193184129613Ar = new kony.ui.Box({
        "id": "hbox17239193184129613",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox17239193184129613Ar() {
        var lineFooter = new kony.ui.Line({
            "id": "lineFooter",
            "isVisible": true,
            "skin": "lineFtr"
        }, {
            "thickness": 2,
            "margin": [0, 0, 0, 0],
            "marginInPixel": false,
            "paddingInPixel": false
        }, {});
        var btnPrev = new kony.ui.Button({
            "id": "btnPrev",
            "isVisible": true,
            "text": null,
            "skin": "sknBtnPrev",
            "focusSkin": "sknBtnPrev",
            "onClick": ftrCertificateEqiStep2_btnPrev_onClick_seq0Ar
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 8
        }, {});
        var lblSteps = new kony.ui.Label({
            "id": "lblSteps",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblStep2Of2"),
            "skin": "sknFtrSteps"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 83
        }, {});
        var btnNext = new kony.ui.Button({
            "id": "btnNext",
            "isVisible": true,
            "text": null,
            "skin": "sknBtnNextInact",
            "focusSkin": "sknBtnNextInact",
            "onClick": ftrCertificateEqiStep2_btnNext_onClick_seq0Ar
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 9
        }, {});
        var hbox155182739221589 = new kony.ui.Box({
            "id": "hbox155182739221589",
            "isVisible": true,
            "skin": "sknFooter",
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 83,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [0, 0, 0, 0],
            "padding": [4, 3, 4, 3],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbox155182739221589.add(btnNext, lblSteps, btnPrev);
        var vbox155182739219799 = new kony.ui.Box({
            "id": "vbox155182739219799",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 100,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox155182739219799.add(lineFooter, hbox155182739221589);
        hbox17239193184129613Ar.add(vbox155182739219799);
    }
    addWidgetshbox17239193184129613Ar();
};