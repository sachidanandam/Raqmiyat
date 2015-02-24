//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Thu Feb 19 15:48:56 IST 2015
function hdrNewUsrFrm_vbox17230851706029686_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
};
function hdrNewUsrFrm_vbox17230851706029686_onClick_seq0Ar(eventobject) {
    loadLoginForm.call(this);
};
function initializehdrNewUsrFrmAr() {
    hbox17257961466800Ar = new kony.ui.BoxTemplate({
        "id": "hbox17257961466800",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox17257961466800Ar
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 1,0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshbox17257961466800Ar() {
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
            "containerWeight": 72
        }, {});
        var vbox17230851706029686 = new kony.ui.Box({
            "id": "vbox17230851706029686",
            "isVisible": true,
            "onClick": hdrNewUsrFrm_vbox17230851706029686_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 21,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox17230851706029686.add(        imgBack);
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
            "containerWeight": 72
        }, {});
        var vbox17230851706029687 = new kony.ui.Box({
            "id": "vbox17230851706029687",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 61,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox17230851706029687.add(        imgHdrLogo);
        var vbox17230851706029688 = new kony.ui.Box({
            "id": "vbox17230851706029688",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 18,
            "margin": [ 0, 0,0, 0],
            "padding": [ 0, 0,0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox17230851706029688.add();
        hbox17257961466800Ar.add(         vbox17230851706029688, vbox17230851706029687,vbox17230851706029686);
    }
    hboxnewhdrtitleAr = new kony.ui.BoxTemplate({
        "id": "hboxnewhdrtitle",
        "isVisible": true,
        "skin": "sknMenuFrmHdr",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshboxnewhdrtitleAr
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,2, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshboxnewhdrtitleAr() {
        var lblHeaderSubTitle = new kony.ui.Label({
            "id": "lblHeaderSubTitle",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("lblNewRegistration"),
            "skin": "sknLblBgTranFnYellowTab"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [ 0, 0,0, 0],
            "padding": [ 1, 1,1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 97
        }, {
            "textCopyable": false
        });
        hboxnewhdrtitleAr.add(        lblHeaderSubTitle);
    }
};
