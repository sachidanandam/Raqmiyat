//Do not Modify!! This is an auto generated module for 'iphone'. Generated on Thu Feb 19 10:02:36 IST 2015
function frmInquireAboutInstStaticPage_frmInquireAboutInstStaticPage_postshow_seq0Ar(eventobject, neworientation) {
    setLocaleBasedHeaderTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblCertEqu"));
};
function frmInquireAboutInstStaticPage_btnApply_onClick_seq0Ar(eventobject) {
    isCaptureMaxlengthExceeds = false;
    uiPgNavigation.call(this, "2.3.1");
    clearInquirycertmob.call(this);
    invokeCertReqCompositService.call(this);
};
function addWidgetsfrmInquireAboutInstStaticPageAr() {
    var lblPageTitle2 = new kony.ui.Label({
        "id": "lblPageTitle2",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPageTitle2"),
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
        "containerWeight": 100
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851422554 = new kony.ui.Box({
        "id": "hbox17230851422554",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 14, 10,12, 10],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851422554.add(    lblPageTitle2);
    var rtxtContent1 = new kony.ui.RichText({
        "id": "rtxtContent1",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rtxtContent1"),
        "skin": "sknRichText"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851423079 = new kony.ui.Box({
        "id": "hbox17230851423079",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 15,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 14, 5,12, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851423079.add(    rtxtContent1);
    var rtxtContent2 = new kony.ui.RichText({
        "id": "rtxtContent2",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rtxtContent2"),
        "skin": "sknRichTxtRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox172308514249095 = new kony.ui.Box({
        "id": "hbox172308514249095",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 15,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 14, 10,12, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172308514249095.add(    rtxtContent2);
    var btnApply = new kony.ui.Button({
        "id": "btnApply",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblApplyOnline"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmInquireAboutInstStaticPage_btnApply_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 12, 10,12, 0],
        "padding": [ 0, 3,0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmInquireAboutInstStaticPageAr.add(    hbox17230851422554, hbox17230851423079, hbox172308514249095, btnApply);
};
function frmInquireAboutInstStaticPageGlobalsAr() {
    var MenuId = [];
    frmInquireAboutInstStaticPageAr = new kony.ui.Form2({
        "id": "frmInquireAboutInstStaticPage",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox172311493310632, hbox172311493310656],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "postShow": frmInquireAboutInstStaticPage_frmInquireAboutInstStaticPage_postshow_seq0Ar,
        "addWidgets": addWidgetsfrmInquireAboutInstStaticPageAr
    }, {
        "padding": [ 0, 0,0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};
