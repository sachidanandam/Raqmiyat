//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 23 16:40:52 IST 2015
function hdrMainMenu_vbox155182739214907_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
    resetAttestationForms.call(this);
};
function hdrMainMenu_vbox155182739214907_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
    resetAttestationForms.call(this);
};
function initializehdrMainMenuAr() {
    hbox153428946468519Ar = new kony.ui.Box({
        "id": "hbox153428946468519",
        "isVisible": true,
        "skin": "sknHeader",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 2,0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshbox153428946468519Ar() {
        var imgBack = new kony.ui.Image2({
            "id": "imgBack",
            "isVisible": false,
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
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 11,
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
            "text": kony.i18n.getLocalizedString("lblMainMenu"),
            "skin": "sknMenuFrmTitle"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 1,1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 77
        }, {});
        var image2153428946468698 = new kony.ui.Image2({
            "id": "image2153428946468698",
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
        var vbox155182739214907 = new kony.ui.Box({
            "id": "vbox155182739214907",
            "isVisible": true,
            "onClick": hdrMainMenu_vbox155182739214907_onClick_seq0Ar,
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
        vbox155182739214907.add(        image2153428946468698);
        hbox153428946468519Ar.add(         vbox155182739214907, lblAttestation,vbxBack);
    }
    addWidgetshbox153428946468519Ar();
};
