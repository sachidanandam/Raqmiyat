//Template File
function hdrCommon_vbox17230851706031746_onClick_seq0(eventobject) {
    frmMainMenu.show();
};

function hdrCommon_vbox17230851706032600_onClick_seq0(eventobject) {
    loadLoginForm.call(this);
};

function hdrCommon_hboxHdrMenuLan1_onClick_seq0(eventobject) {
    leftMenuAssSelect.call(this, "1");
    frmMasterPg.show();
};

function hdrCommon_hboxHdrMenuLan2_onClick_seq0(eventobject) {
    leftMenuAssSelect.call(this, "2");
    frmMasterPg.show();
};

function hdrCommon_hboxHdrMenuLan3_onClick_seq0(eventobject) {
    leftMenuAssSelect.call(this, "3");
    frmMasterPg.show();
};

function hdrCommon_hboxHdrMenu1_onClick_seq0(eventobject) {
    popupCertificateAttest.call(this);
};

function hdrCommon_hboxHdrMenu2_onClick_seq0(eventobject) {
    popupCertificateEqui.call(this);
};

function hdrCommon_vbox17230851706031746_onClick_seq0(eventobject) {
    frmMainMenu.show();
};

function hdrCommon_vbox17230851706032600_onClick_seq0(eventobject) {
    loadLoginForm.call(this);
};

function hdrCommon_hboxHdrMenuLan1_onClick_seq0(eventobject) {
    leftMenuAssSelect.call(this, "1");
    frmMasterPg.show();
};

function hdrCommon_hboxHdrMenuLan2_onClick_seq0(eventobject) {
    leftMenuAssSelect.call(this, "2");
    frmMasterPg.show();
};

function hdrCommon_hboxHdrMenuLan3_onClick_seq0(eventobject) {
    leftMenuAssSelect.call(this, "3");
    frmMasterPg.show();
};

function hdrCommon_hboxHdrMenu1_onClick_seq0(eventobject) {
    popupCertificateAttest.call(this);
};

function hdrCommon_hboxHdrMenu2_onClick_seq0(eventobject) {
    popupCertificateEqui.call(this);
};

function initializehdrCommon() {
    hboxHdrMain = new kony.ui.Box({
        "id": "hboxHdrMain",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 60,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshboxHdrMain() {
        var imgBack = new kony.ui.Image2({
            "id": "imgBack",
            "isVisible": true,
            "src": "back_tab.png",
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
            "containerWeight": 69
        }, {});
        var vbox17230851706031746 = new kony.ui.Box({
            "id": "vbox17230851706031746",
            "isVisible": true,
            "onClick": hdrCommon_vbox17230851706031746_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 17,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox17230851706031746.add(
        imgBack);
        var imgHdrLogo = new kony.ui.Image2({
            "id": "imgHdrLogo",
            "isVisible": true,
            "src": "tablogo2.png",
            "imageWhenFailed": null,
            "imageWhileDownloading": null
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [0, 0, 1, 0],
            "padding": [0, 0, 0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 69
        }, {});
        var vbox17230851706031923 = new kony.ui.Box({
            "id": "vbox17230851706031923",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 67,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox17230851706031923.add(
        imgHdrLogo);
        var imgLogout = new kony.ui.Image2({
            "id": "imgLogout",
            "isVisible": true,
            "src": "logout_tab.png",
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
            "containerWeight": 54
        }, {});
        var vbox17230851706032600 = new kony.ui.Box({
            "id": "vbox17230851706032600",
            "isVisible": true,
            "onClick": hdrCommon_vbox17230851706032600_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 16,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox17230851706032600.add(
        imgLogout);
        var hbox17230851706031589 = new kony.ui.Box({
            "id": "hbox17230851706031589",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 20,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 1, 0, 1],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbox17230851706031589.add(
        vbox17230851706031746, vbox17230851706031923, vbox17230851706032600);
        var imgHdrMenuLan1 = new kony.ui.Image2({
            "id": "imgHdrMenuLan1",
            "isVisible": true,
            "src": "attest_on_hdr.png",
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
            "containerWeight": 21
        }, {});
        var lblHdrMenuLan1 = new kony.ui.Label({
            "id": "lblHdrMenuLan1",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCertAttest"),
            "skin": "sknLblBgTranFnYellowTab",
            "i18n_text": "kony.i18n.getLocalizedString('lblCertAttest')"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 0, 1, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 79
        }, {
            "textCopyable": false
        });
        var hboxHdrMenuLan1 = new kony.ui.Box({
            "id": "hboxHdrMenuLan1",
            "isVisible": true,
            "skin": "sknMenuFrmHdr",
            "onClick": hdrCommon_hboxHdrMenuLan1_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenuLan1.add(
        imgHdrMenuLan1, lblHdrMenuLan1);
        var vbox1724038453544325 = new kony.ui.Box({
            "id": "vbox1724038453544325",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 33,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox1724038453544325.add(
        hboxHdrMenuLan1);
        var imgHdrMenuLan2 = new kony.ui.Image2({
            "id": "imgHdrMenuLan2",
            "isVisible": true,
            "src": "attest_on_hdr.png",
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
            "containerWeight": 20
        }, {});
        var lblHdrMenuLan2 = new kony.ui.Label({
            "id": "lblHdrMenuLan2",
            "isVisible": true,
            "text": "Certificate Equivalency",
            "skin": "sknLblBgTranFnYellowTab"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 0, 1, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 78
        }, {
            "textCopyable": false
        });
        var hboxHdrMenuLan2 = new kony.ui.Box({
            "id": "hboxHdrMenuLan2",
            "isVisible": true,
            "skin": "sknHbxBgYellowCnPlain",
            "focusSkin": "sknMenuFrmHdr",
            "onClick": hdrCommon_hboxHdrMenuLan2_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenuLan2.add(
        imgHdrMenuLan2, lblHdrMenuLan2);
        var vbox1724038453544341 = new kony.ui.Box({
            "id": "vbox1724038453544341",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 34,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox1724038453544341.add(
        hboxHdrMenuLan2);
        var imgHdrMenuLan3 = new kony.ui.Image2({
            "id": "imgHdrMenuLan3",
            "isVisible": true,
            "src": "fahim_off_hdr.png",
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
            "containerWeight": 21
        }, {});
        var lblHdrMenuLan3 = new kony.ui.Label({
            "id": "lblHdrMenuLan3",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblFahim"),
            "skin": "sknLblBgTranFnYellowTab",
            "i18n_text": "kony.i18n.getLocalizedString('lblFahim')"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 0, 1, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 79
        }, {
            "textCopyable": false
        });
        var hboxHdrMenuLan3 = new kony.ui.Box({
            "id": "hboxHdrMenuLan3",
            "isVisible": true,
            "skin": "sknMenuFrmHdr",
            "focusSkin": "sknMenuFrmHdr",
            "onClick": hdrCommon_hboxHdrMenuLan3_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenuLan3.add(
        imgHdrMenuLan3, lblHdrMenuLan3);
        var vbox1724038453544333 = new kony.ui.Box({
            "id": "vbox1724038453544333",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 33,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox1724038453544333.add(
        hboxHdrMenuLan3);
        var hboxHdrLanc = new kony.ui.Box({
            "id": "hboxHdrLanc",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 18,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrLanc.add(
        vbox1724038453544325, vbox1724038453544341, vbox1724038453544333);
        var imgHdrMenu1 = new kony.ui.Image2({
            "id": "imgHdrMenu1",
            "isVisible": true,
            "src": "attest_on_hdr.png",
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
            "containerWeight": 21
        }, {});
        var lblHdrMenu1 = new kony.ui.Label({
            "id": "lblHdrMenu1",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCertAttest"),
            "skin": "sknLblBgTranFnYellowTabP",
            "i18n_text": "kony.i18n.getLocalizedString('lblCertAttest')"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 79
        }, {
            "textCopyable": false
        });
        var hboxHdrMenu1 = new kony.ui.Box({
            "id": "hboxHdrMenu1",
            "isVisible": true,
            "skin": "sknMenuFrmHdr",
            "onClick": hdrCommon_hboxHdrMenu1_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenu1.add(
        imgHdrMenu1, lblHdrMenu1);
        var vbox172770274740687 = new kony.ui.Box({
            "id": "vbox172770274740687",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 33,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox172770274740687.add(
        hboxHdrMenu1);
        var imgHdrMenu2 = new kony.ui.Image2({
            "id": "imgHdrMenu2",
            "isVisible": true,
            "src": "attest_on_hdr.png",
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
            "containerWeight": 20
        }, {});
        var lblHdrMenu2 = new kony.ui.Label({
            "id": "lblHdrMenu2",
            "isVisible": true,
            "text": "Certificate Equivalency",
            "skin": "sknLblBgTranFnYellowTabP"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 78
        }, {
            "textCopyable": false
        });
        var hboxHdrMenu2 = new kony.ui.Box({
            "id": "hboxHdrMenu2",
            "isVisible": true,
            "focusSkin": "sknMenuFrmHdr",
            "onClick": hdrCommon_hboxHdrMenu2_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenu2.add(
        imgHdrMenu2, lblHdrMenu2);
        var vbox172770274740688 = new kony.ui.Box({
            "id": "vbox172770274740688",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 34,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox172770274740688.add(
        hboxHdrMenu2);
        var imgHdrMenu3 = new kony.ui.Image2({
            "id": "imgHdrMenu3",
            "isVisible": true,
            "src": "fahim_off_hdr.png",
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
            "containerWeight": 21
        }, {});
        var lblHdrMenu3 = new kony.ui.Label({
            "id": "lblHdrMenu3",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblFahim"),
            "skin": "sknLblBgTranFnYellowTabP",
            "i18n_text": "kony.i18n.getLocalizedString('lblFahim')"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 79
        }, {
            "textCopyable": false
        });
        var hboxHdrMenu3 = new kony.ui.Box({
            "id": "hboxHdrMenu3",
            "isVisible": true,
            "skin": "sknMenuFrmHdr",
            "focusSkin": "sknMenuFrmHdr",
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenu3.add(
        imgHdrMenu3, lblHdrMenu3);
        var vbox172770274740689 = new kony.ui.Box({
            "id": "vbox172770274740689",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 33,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox172770274740689.add(
        hboxHdrMenu3);
        var hbxHdrPort = new kony.ui.Box({
            "id": "hbxHdrPort",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 18,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbxHdrPort.add(
        vbox172770274740687, vbox172770274740688, vbox172770274740689);
        var line1724038453544349 = new kony.ui.Line({
            "id": "line1724038453544349",
            "isVisible": true,
            "skin": "sknLineYellow"
        }, {
            "thickness": 4,
            "margin": [0, 0, 0, 0],
            "marginInPixel": false,
            "paddingInPixel": false
        }, {});
        var vboxHdrMain = new kony.ui.Box({
            "id": "vboxHdrMain",
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
        vboxHdrMain.add(
        hbox17230851706031589, hboxHdrLanc, hbxHdrPort, line1724038453544349);
        hboxHdrMain.add(
        vboxHdrMain);
    }
    addWidgetshboxHdrMain();
};