//Do not Modify!! This is an auto generated module for 'iphone'. Generated on Thu Feb 19 10:02:36 IST 2015
function ftrGradAttestStep2_vbxPrev_onClick_seq0Ar(eventobject) {
    frmGradStaticPage1.show();
};
function ftrGradAttestStep2_vbxPrev_onClick_seq0Ar(eventobject) {
    frmGradStaticPage1.show();
};
function initializeftrGradAttestStep2Ar() {
    hbox1239236892720313Ar = new kony.ui.BoxTemplate({
        "id": "hbox1239236892720313",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox1239236892720313Ar
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshbox1239236892720313Ar() {
        var lineFooter = new kony.ui.Line({
            "id": "lineFooter",
            "isVisible": true,
            "skin": "lineFtr"
        }, {
            "thickness": 2,
            "margin": [ 0, 0,0, 0],
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
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
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
            "onClick": ftrGradAttestStep2_vbxPrev_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 8,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 3,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxPrev.add(        imgPrev);
        var lblSteps = new kony.ui.Label({
            "id": "lblSteps",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblStep2Of2"),
            "skin": "sknFtrSteps"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 1, 1,1, 1],
            "padding": [ 1, 1,1, 1],
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
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
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
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 9,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 3,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxNext.add(        imgNext);
        var hbox155182739221589 = new kony.ui.Box({
            "id": "hbox155182739221589",
            "isVisible": true,
            "skin": "sknFooter",
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 83,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [ 0, 0,0, 0],
            "padding": [ 4, 3,4, 3],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbox155182739221589.add(         vbxNext, lblSteps,vbxPrev);
        var vbox155182739219799 = new kony.ui.Box({
            "id": "vbox155182739219799",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 100,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox155182739219799.add(        lineFooter, hbox155182739221589);
        hbox1239236892720313Ar.add(        vbox155182739219799);
    }
};
