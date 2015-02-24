//Template File
function hdrCommon_vbxHdrBack_onClick_seq0(eventobject) {};

function hdrCommon_vbox155182739214907_onClick_seq0(eventobject) {
    loadLoginForm.call(this);
    resetAttestationForms.call(this);
};

function hdrCommon_vbxHdrBack_onClick_seq0(eventobject) {};

function hdrCommon_vbox155182739214907_onClick_seq0(eventobject) {
    loadLoginForm.call(this);
    resetAttestationForms.call(this);
};

function initializehdrCommon() {
    hbxCommonHdr = new kony.ui.Box({
        "id": "hbxCommonHdr",
        "isVisible": true,
        "skin": "sknHeader",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbxCommonHdr() {
        var imgHdrBack = new kony.ui.Image2({
            "id": "imgHdrBack",
            "isVisible": true,
            "src": "back.png",
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
        }, {});
        var vbxHdrBack = new kony.ui.Box({
            "id": "vbxHdrBack",
            "isVisible": true,
            "onClick": hdrCommon_vbxHdrBack_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 12,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxHdrBack.add(
        imgHdrBack);
        var lblPgHdrName = new kony.ui.Label({
            "id": "lblPgHdrName",
            "isVisible": true,
            "text": "Register New Certificate",
            "skin": "sknLblHeader"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 77
        }, {
            "textCopyable": false
        });
        var vbox155182739214907 = new kony.ui.Box({
            "id": "vbox155182739214907",
            "isVisible": true,
            "onClick": hdrCommon_vbox155182739214907_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 11,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox155182739214907.add();
        hbxCommonHdr.add(
        vbxHdrBack, lblPgHdrName, vbox155182739214907);
    }
    addWidgetshbxCommonHdr();
};