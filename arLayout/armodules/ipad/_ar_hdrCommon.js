//Do not Modify!! This is an auto generated module for 'ipad'. Generated on Thu Feb 19 10:01:07 IST 2015
function hdrCommon_vbox17230851706031746_onClick_seq0Ar(eventobject) {
    frmMainMenu.show();
};
function hdrCommon_vbox17230851706032600_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
};
function hdrCommon_hboxHdrMenuLan1_onClick_seq0Ar(eventobject) {
    /* 
leftMenuAssSelect.call(this,"1");
 */
    gblFormAssignVariable = "1";
    frmMasterPg.show();
};
function hdrCommon_hboxHdrMenuLan2_onClick_seq0Ar(eventobject) {
    /* 
leftMenuAssSelect.call(this,"2");
 */
    gblFormAssignVariable = "2";
    frmMasterPg.show();
};
function hdrCommon_hboxHdrMenuLan3_onClick_seq0Ar(eventobject) {
    /* 
leftMenuAssSelect.call(this,"3");
 */
    gblFormAssignVariable = "3";
    frmMasterPg.show();
};
function hdrCommon_hboxHdrMenu1_onClick_seq0Ar(eventobject) {
    popupCertificateAttest.call(this);
};
function hdrCommon_hboxHdrMenu2_onClick_seq0Ar(eventobject) {
    popupCertificateEqui.call(this);
};
function hdrCommon_vbox17230851706031746_onClick_seq0Ar(eventobject) {
    frmMainMenu.show();
};
function hdrCommon_vbox17230851706032600_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
};
function hdrCommon_hboxHdrMenuLan1_onClick_seq0Ar(eventobject) {
    /* 
leftMenuAssSelect.call(this,"1");
 */
    gblFormAssignVariable = "1";
    frmMasterPg.show();
};
function hdrCommon_hboxHdrMenuLan2_onClick_seq0Ar(eventobject) {
    /* 
leftMenuAssSelect.call(this,"2");
 */
    gblFormAssignVariable = "2";
    frmMasterPg.show();
};
function hdrCommon_hboxHdrMenuLan3_onClick_seq0Ar(eventobject) {
    /* 
leftMenuAssSelect.call(this,"3");
 */
    gblFormAssignVariable = "3";
    frmMasterPg.show();
};
function hdrCommon_hboxHdrMenu1_onClick_seq0Ar(eventobject) {
    popupCertificateAttest.call(this);
};
function hdrCommon_hboxHdrMenu2_onClick_seq0Ar(eventobject) {
    popupCertificateEqui.call(this);
};
function initializehdrCommonAr() {
    hboxHdrMainAr = new kony.ui.BoxTemplate({
        "id": "hboxHdrMain",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshboxHdrMainAr
    }, {
        "containerWeight": 60,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshboxHdrMainAr() {
        var imgBack = new kony.ui.Image2({
            "id": "imgBack",
            "isVisible": true,
            "src": "back_tab.png",
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
            "containerWeight": 69
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var vbox17230851706031746 = new kony.ui.Box({
            "id": "vbox17230851706031746",
            "isVisible": true,
            "onClick": hdrCommon_vbox17230851706031746_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 17,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox17230851706031746.add(        imgBack);
        var imgHdrLogo = new kony.ui.Image2({
            "id": "imgHdrLogo",
            "isVisible": true,
            "src": "tablogo2.png",
            "imageWhenFailed": null,
            "imageWhileDownloading": null
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [ 1, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 69
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var vbox17230851706031923 = new kony.ui.Box({
            "id": "vbox17230851706031923",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 67,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox17230851706031923.add(        imgHdrLogo);
        var imgLogout = new kony.ui.Image2({
            "id": "imgLogout",
            "isVisible": true,
            "src": "logout_tab.png",
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
            "containerWeight": 54
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var vbox17230851706032600 = new kony.ui.Box({
            "id": "vbox17230851706032600",
            "isVisible": true,
            "onClick": hdrCommon_vbox17230851706032600_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 16,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox17230851706032600.add(        imgLogout);
        var hbox17230851706031589 = new kony.ui.Box({
            "id": "hbox17230851706031589",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 20,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 1,0, 1],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbox17230851706031589.add(         vbox17230851706032600, vbox17230851706031923,vbox17230851706031746);
        var imgHdrMenuLan1 = new kony.ui.Image2({
            "id": "imgHdrMenuLan1",
            "isVisible": true,
            "src": "attest_on_hdr.png",
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
            "containerWeight": 21
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var lblHdrMenuLan1 = new kony.ui.Label({
            "id": "lblHdrMenuLan1",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCertAttest"),
            "skin": "sknLblBgTranFnYellowTab"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 0,1, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 79
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var hboxHdrMenuLan1 = new kony.ui.Box({
            "id": "hboxHdrMenuLan1",
            "isVisible": true,
            "skin": "sknMenuFrmHdr",
            "onClick": hdrCommon_hboxHdrMenuLan1_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenuLan1.add(         lblHdrMenuLan1,imgHdrMenuLan1);
        var vbox1724038453544325 = new kony.ui.Box({
            "id": "vbox1724038453544325",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 33,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox1724038453544325.add(        hboxHdrMenuLan1);
        var imgHdrMenuLan2 = new kony.ui.Image2({
            "id": "imgHdrMenuLan2",
            "isVisible": true,
            "src": "attest_on_hdr.png",
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
            "containerWeight": 20
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var lblHdrMenuLan2 = new kony.ui.Label({
            "id": "lblHdrMenuLan2",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCertEqu"),
            "skin": "sknLblBgTranFnYellowTab"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 0,1, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 78
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_CHAR_WRAP
        });
        var hboxHdrMenuLan2 = new kony.ui.Box({
            "id": "hboxHdrMenuLan2",
            "isVisible": true,
            "skin": "sknHbxBgYellowCnPlain",
            "focusSkin": "sknMenuFrmHdr",
            "onClick": hdrCommon_hboxHdrMenuLan2_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "vExpand": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenuLan2.add(         lblHdrMenuLan2,imgHdrMenuLan2);
        var vbox1724038453544341 = new kony.ui.Box({
            "id": "vbox1724038453544341",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 34,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox1724038453544341.add(        hboxHdrMenuLan2);
        var imgHdrMenuLan3 = new kony.ui.Image2({
            "id": "imgHdrMenuLan3",
            "isVisible": true,
            "src": "fahim_off_hdr.png",
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
            "containerWeight": 21
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var lblHdrMenuLan3 = new kony.ui.Label({
            "id": "lblHdrMenuLan3",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblFahim"),
            "skin": "sknLblBgTranFnYellowTab"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 0,1, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 79
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var hboxHdrMenuLan3 = new kony.ui.Box({
            "id": "hboxHdrMenuLan3",
            "isVisible": true,
            "skin": "sknMenuFrmHdr",
            "focusSkin": "sknMenuFrmHdr",
            "onClick": hdrCommon_hboxHdrMenuLan3_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenuLan3.add(         lblHdrMenuLan3,imgHdrMenuLan3);
        var vbox1724038453544333 = new kony.ui.Box({
            "id": "vbox1724038453544333",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 33,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox1724038453544333.add(        hboxHdrMenuLan3);
        var hboxHdrLanc = new kony.ui.Box({
            "id": "hboxHdrLanc",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 18,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrLanc.add(         vbox1724038453544333, vbox1724038453544341,vbox1724038453544325);
        var imgHdrMenu1 = new kony.ui.Image2({
            "id": "imgHdrMenu1",
            "isVisible": true,
            "src": "attest_on_hdr.png",
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
            "containerWeight": 21
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var lblHdrMenu1 = new kony.ui.Label({
            "id": "lblHdrMenu1",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCertAttest"),
            "skin": "sknLblBgTranFnYellowTabP"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 1,1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 79
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var hboxHdrMenu1 = new kony.ui.Box({
            "id": "hboxHdrMenu1",
            "isVisible": true,
            "skin": "sknMenuFrmHdr",
            "onClick": hdrCommon_hboxHdrMenu1_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenu1.add(         lblHdrMenu1,imgHdrMenu1);
        var vbox172770274740687 = new kony.ui.Box({
            "id": "vbox172770274740687",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 33,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox172770274740687.add(        hboxHdrMenu1);
        var imgHdrMenu2 = new kony.ui.Image2({
            "id": "imgHdrMenu2",
            "isVisible": true,
            "src": "attest_on_hdr.png",
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
            "containerWeight": 20
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var lblHdrMenu2 = new kony.ui.Label({
            "id": "lblHdrMenu2",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblCertEqu"),
            "skin": "sknLblBgTranFnYellowTabP"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 1,1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 78
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_CHAR_WRAP
        });
        var hboxHdrMenu2 = new kony.ui.Box({
            "id": "hboxHdrMenu2",
            "isVisible": true,
            "focusSkin": "sknMenuFrmHdr",
            "onClick": hdrCommon_hboxHdrMenu2_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "vExpand": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenu2.add(         lblHdrMenu2,imgHdrMenu2);
        var vbox172770274740688 = new kony.ui.Box({
            "id": "vbox172770274740688",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 34,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox172770274740688.add(        hboxHdrMenu2);
        var imgHdrMenu3 = new kony.ui.Image2({
            "id": "imgHdrMenu3",
            "isVisible": true,
            "src": "fahim_off_hdr.png",
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
            "containerWeight": 21
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var lblHdrMenu3 = new kony.ui.Label({
            "id": "lblHdrMenu3",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblFahim"),
            "skin": "sknLblBgTranFnYellowTabP"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 1,1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 79
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hboxHdrMenu3.add(         lblHdrMenu3,imgHdrMenu3);
        var vbox172770274740689 = new kony.ui.Box({
            "id": "vbox172770274740689",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 33,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox172770274740689.add(        hboxHdrMenu3);
        var hbxHdrPort = new kony.ui.Box({
            "id": "hbxHdrPort",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 18,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbxHdrPort.add(         vbox172770274740689, vbox172770274740688,vbox172770274740687);
        var line1724038453544349 = new kony.ui.Line({
            "id": "line1724038453544349",
            "isVisible": true,
            "skin": "sknLineYellow"
        }, {
            "thickness": 4,
            "margin": [ 0, 0,0, 0],
            "marginInPixel": false,
            "paddingInPixel": false
        }, {});
        var vboxHdrMain = new kony.ui.Box({
            "id": "vboxHdrMain",
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
        vboxHdrMain.add(        hbox17230851706031589, hboxHdrLanc, hbxHdrPort, line1724038453544349);
        hboxHdrMainAr.add(        vboxHdrMain);
    }
};
