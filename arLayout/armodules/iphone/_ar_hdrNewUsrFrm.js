//Do not Modify!! This is an auto generated module for 'iphone'. Generated on Thu Feb 19 10:02:36 IST 2015
function hdrNewUsrFrm_vbxBack_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
};
function hdrNewUsrFrm_vbxBack_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
};
function initializehdrNewUsrFrmAr() {
    hbox123914751970Ar = new kony.ui.BoxTemplate({
        "id": "hbox123914751970",
        "isVisible": true,
        "skin": "sknHeader",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox123914751970Ar
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 2,2, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshbox123914751970Ar() {
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
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var vbxBack = new kony.ui.Box({
            "id": "vbxBack",
            "isVisible": true,
            "onClick": hdrNewUsrFrm_vbxBack_onClick_seq0Ar,
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
            "text": kony.i18n.getLocalizedString("lblNewUserForm"),
            "skin": "sknLblHeader"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 1, 1,1, 1],
            "padding": [ 1, 1,20, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": 89
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        hbox123914751970Ar.add(         lblAttestation,vbxBack);
    }
};
