//Template File
function hdrInquireAbtInst_vbxBack_onClick_seq0(eventobject) {
    frmMainMenu.show();
};

function hdrInquireAbtInst_vbxLogOut_onClick_seq0(eventobject) {
    loadLoginForm.call(this);
    resetAttestationForms.call(this);
};

function hdrInquireAbtInst_vbxBack_onClick_seq0(eventobject) {
    frmMainMenu.show();
};

function hdrInquireAbtInst_vbxLogOut_onClick_seq0(eventobject) {
    loadLoginForm.call(this);
    resetAttestationForms.call(this);
};

function initializehdrInquireAbtInst() {
    hbox172311493310632 = new kony.ui.BoxTemplate({
        "id": "hbox172311493310632",
        "isVisible": true,
        "skin": "sknHeader",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox172311493310632
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

    function addWidgetshbox172311493310632() {
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
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var vbxBack = new kony.ui.Box({
            "id": "vbxBack",
            "isVisible": true,
            "onClick": hdrInquireAbtInst_vbxBack_onClick_seq0,
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
        vbxBack.add(
        imgBack);
        var lblAttestation = new kony.ui.Label({
            "id": "lblAttestation",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCertEqu"),
            "skin": "sknLblHeader"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": 76
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var imgLogOut = new kony.ui.Image2({
            "id": "imgLogOut",
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
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var vbxLogOut = new kony.ui.Box({
            "id": "vbxLogOut",
            "isVisible": true,
            "onClick": hdrInquireAbtInst_vbxLogOut_onClick_seq0,
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
        vbxLogOut.add(
        imgLogOut);
        hbox172311493310632.add(
        vbxBack, lblAttestation, vbxLogOut);
    }
    hbox172311493310656 = new kony.ui.BoxTemplate({
        "id": "hbox172311493310656",
        "isVisible": true,
        "skin": "sknSubHeader",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox172311493310656
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox172311493310656() {
        var lblPgSubHdrName = new kony.ui.Label({
            "id": "lblPgSubHdrName",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblinquireaboutinstprog"),
            "skin": "sknSubHeaderGradAttest"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        hbox172311493310656.add(
        lblPgSubHdrName);
    }
};