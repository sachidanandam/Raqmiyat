//Do not Modify!! This is an auto generated module for 'ipad'. Generated on Thu Jan 29 20:03:11 IST 2015
function frmInquireAboutInstStaticPage_frmInquireAboutInstStaticPage_init_seq0Ar(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmInquireAboutInstStaticPage, "2");
};

function frmInquireAboutInstStaticPage_frmInquireAboutInstStaticPage_preshow_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmInquireAboutInstStaticPage, "2");
 */
    leftMenuUiSelect.call(this, "2.3", frmInquireAboutInstStaticPage);
    LeftMenuChange.call(this, "2");
    frmOrient.call(this, frmInquireAboutInstStaticPage);
};

function frmInquireAboutInstStaticPage_btnApply_onClick_seq0Ar(eventobject) {
    invokeCertReqCompositService.call(this);
    frmCertRequest.show();
};

function addWidgetsfrmInquireAboutInstStaticPageAr() {
    var vbxLeftMenu = new kony.ui.Box({
        "id": "vbxLeftMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLeftMenu.add();
    var lblPageTitle2 = new kony.ui.Label({
        "id": "lblPageTitle2",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPageTitle2"),
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 94
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
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851422554.add(lblPageTitle2);
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
        "containerWeight": 94
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox17230851423079 = new kony.ui.Box({
        "id": "hbox17230851423079",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851423079.add(rtxtContent1);
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
        "containerWeight": 94
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox172308514249095 = new kony.ui.Box({
        "id": "hbox172308514249095",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172308514249095.add(rtxtContent2);
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
        "margin": [0, 2, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "containerWeight": 4
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbxRightMenu = new kony.ui.Box({
        "id": "vbxRightMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 70,
        "margin": [0, 0, 0, 0],
        "padding": [2, 0, 2, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxRightMenu.add(hbox17230851422554, hbox17230851423079, hbox172308514249095, btnApply);
    var hbox1727732536453133 = new kony.ui.Box({
        "id": "hbox1727732536453133",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 96,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536453133.add(vbxRightMenu, vbxLeftMenu);
    frmInquireAboutInstStaticPageAr.add(hbox1727732536453133);
};

function frmInquireAboutInstStaticPageGlobalsAr() {
    var MenuId = [];
    frmInquireAboutInstStaticPageAr = new kony.ui.Form2({
        "id": "frmInquireAboutInstStaticPage",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmInquireAboutInstStaticPage_frmInquireAboutInstStaticPage_init_seq0Ar,
        "preShow": frmInquireAboutInstStaticPage_frmInquireAboutInstStaticPage_preshow_seq0Ar,
        "addWidgets": addWidgetsfrmInquireAboutInstStaticPageAr
    }, {
        "padding": [0, 0, 0, 0],
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