//Template File
function ftrGradAttestStep1_vbxNext_onClick_seq0(eventobject) {
    frmGradStaticPage2.show();
};

function ftrGradAttestStep1_vbxNext_onClick_seq0(eventobject) {
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
        var imgPrev = new kony.ui.Image2({
            "id": "imgPrev",
            "isVisible": true,
            "src": "pixel.png",
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
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var vbxPrev = new kony.ui.Box({
            "id": "vbxPrev",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 8,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxPrev.add(
        imgPrev);
        var lblSteps = new kony.ui.Label({
            "id": "lblSteps",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblStep1Of2"),
            "skin": "sknFtrSteps"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": 83
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
            "textCopyable": false
        });
        var imgNext = new kony.ui.Image2({
            "id": "imgNext",
            "isVisible": true,
            "src": "pixel.png",
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
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var vbxNext = new kony.ui.Box({
            "id": "vbxNext",
            "isVisible": true,
            "onClick": ftrGradAttestStep1_vbxNext_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 9,
            "margin": [0, 0, 0, 0],
            "padding": [0, 3, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxNext.add(
        imgNext);
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
        vbxPrev, lblSteps, vbxNext);
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