//Template File
function hdrGradAttestStaticStep1_vbxBack_onClick_seq0(eventobject) {
    frmMainMenu.show();
};

function hdrGradAttestStaticStep1_vbox155182739214907_onClick_seq0(eventobject) {
    loadLoginForm.call(this);
    resetAttestationForms.call(this);
};

function hdrGradAttestStaticStep1_vbxBack_onClick_seq0(eventobject) {
    frmMainMenu.show();
};

function hdrGradAttestStaticStep1_vbox155182739214907_onClick_seq0(eventobject) {
    loadLoginForm.call(this);
    resetAttestationForms.call(this);
};

function initializehdrGradAttestStaticStep1() {
    hbox1239236892712888 = new kony.ui.Box({
        "id": "hbox1239236892712888",
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

    function addWidgetshbox1239236892712888() {
        var imgBack = new kony.ui.Image2({
            "id": "imgBack",
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
        var vbxBack = new kony.ui.Box({
            "id": "vbxBack",
            "isVisible": true,
            "onClick": hdrGradAttestStaticStep1_vbxBack_onClick_seq0,
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
        vbxBack.add(
        imgBack);
        var lblAttestation = new kony.ui.Label({
            "id": "lblAttestation",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCertAttest"),
            "skin": "sknLblHeader",
            "i18n_text": "kony.i18n.getLocalizedString('lblCertAttest')"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 79
        }, {
            "textCopyable": false
        });
        var imglogout = new kony.ui.Image2({
            "id": "imglogout",
            "isVisible": true,
            "src": "logout.png",
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
        var vbox155182739214907 = new kony.ui.Box({
            "id": "vbox155182739214907",
            "isVisible": true,
            "onClick": hdrGradAttestStaticStep1_vbox155182739214907_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 10,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox155182739214907.add(
        imglogout);
        hbox1239236892712888.add(
        vbxBack, lblAttestation, vbox155182739214907);
    }
    addWidgetshbox1239236892712888();
};