//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 23 16:40:52 IST 2015
function hdrCertEquStatus_vbxBack_onClick_seq0Ar(eventobject) {
    frmMainMenu.show();
};
function hdrCertEquStatus_vbxLogOut_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
    resetAttestationForms.call(this);
};
function hdrCertEquStatus_vbxBack_onClick_seq0Ar(eventobject) {
    frmMainMenu.show();
};
function hdrCertEquStatus_vbxLogOut_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
    resetAttestationForms.call(this);
};
function initializehdrCertEquStatusAr() {
    hbox17231149333112Ar = new kony.ui.Box({
        "id": "hbox17231149333112",
        "isVisible": true,
        "skin": "sknHeader",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 2,1, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshbox17231149333112Ar() {
        var imgBack = new kony.ui.Image2({
            "id": "imgBack",
            "isVisible": true,
            "src": "back.png",
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
        }, {});
        var vbxBack = new kony.ui.Box({
            "id": "vbxBack",
            "isVisible": true,
            "onClick": hdrCertEquStatus_vbxBack_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 12,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxBack.add(        imgBack);
        var lblAttestation = new kony.ui.Label({
            "id": "lblAttestation",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblStatusOfCert"),
            "skin": "sknLblHeader"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 1,1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 76
        }, {});
        var imgLogOut = new kony.ui.Image2({
            "id": "imgLogOut",
            "isVisible": true,
            "src": "logout.png",
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
        }, {});
        var vbxLogOut = new kony.ui.Box({
            "id": "vbxLogOut",
            "isVisible": true,
            "onClick": hdrCertEquStatus_vbxLogOut_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 12,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxLogOut.add(        imgLogOut);
        hbox17231149333112Ar.add(         vbxLogOut, lblAttestation,vbxBack);
    }
    addWidgetshbox17231149333112Ar();
    hbox17231149333136Ar = new kony.ui.Box({
        "id": "hbox17231149333136",
        "isVisible": true,
        "skin": "sknSubHeader",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 2,2, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshbox17231149333136Ar() {
        var lblPgSubHdrName = new kony.ui.Label({
            "id": "lblPgSubHdrName",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCertEqu"),
            "skin": "sknSubHeaderGradAttest"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 1,1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {});
        hbox17231149333136Ar.add(        lblPgSubHdrName);
    }
    addWidgetshbox17231149333136Ar();
};
