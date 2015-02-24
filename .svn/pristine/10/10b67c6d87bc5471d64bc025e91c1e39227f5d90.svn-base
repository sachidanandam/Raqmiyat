//Template File
function ftrGradAttestStep1_btnNext_onClick_seq0(eventobject) {
    frmGradStaticPage2.show();
};

function ftrGradAttestStep1_btnNext_onClick_seq0(eventobject) {
    frmGradStaticPage2.show();
};

function initializeftrGradAttestStep1() {
    hbx1 = new kony.ui.BoxTemplate({
        "id": "hbx1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbx1
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbx1() {
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
            "skin": "sknBtnInvisible",
            "focusSkin": "btnFocus"
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
            "text": kony.i18n.getLocalizedString("lblStep1Of2"),
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
        }, {
            "textCopyable": false
        });
        var btnNext = new kony.ui.Button({
            "id": "btnNext",
            "isVisible": true,
            "text": null,
            "skin": "sknBtnNext",
            "focusSkin": "btnFocus",
            "onClick": ftrGradAttestStep1_btnNext_onClick_seq0
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
        var hbx2 = new kony.ui.Box({
            "id": "hbx2",
            "isVisible": true,
            "skin": "sknFooter",
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 83,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [4, 3, 4, 3],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbx2.add(
        btnPrev, lblSteps, btnNext);
        var vbx1 = new kony.ui.Box({
            "id": "vbx1",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 100,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbx1.add(
        lineFooter, hbx2);
        hbx1.add(
        vbx1);
    }
};