//Form JS File
function frmInquireAboutInstStaticPage_frmInquireAboutInstStaticPage_init_seq0(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmInquireAboutInstStaticPage, "2");
};

function frmInquireAboutInstStaticPage_frmInquireAboutInstStaticPage_preshow_seq0(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmInquireAboutInstStaticPage, "2");

 */
    leftMenuUiSelect.call(this, "2.3", frmInquireAboutInstStaticPage);
    LeftMenuChange.call(this, "2");
    frmOrient.call(this, frmInquireAboutInstStaticPage);
};

function frmInquireAboutInstStaticPage_btnApply_onClick_seq0(eventobject) {
    invokeCertReqCompositService.call(this);
    frmCertRequest.show();
};

function addWidgetsfrmInquireAboutInstStaticPage() {
    var vbxLeftMenu = new kony.ui.Box({
        "id": "vbxLeftMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
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
        "skin": "sknStaticFrmTitle",
        "i18n_text": "kony.i18n.getLocalizedString('lblPageTitle2')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 94
    }, {
        "textCopyable": false
    });
    var hbox17230851422554 = new kony.ui.Box({
        "id": "hbox17230851422554",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851422554.add(
    lblPageTitle2);
    var rtxtContent1 = new kony.ui.RichText({
        "id": "rtxtContent1",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rtxtContent1"),
        "skin": "sknRichText",
        "i18n_text": "kony.i18n.getLocalizedString('rtxtContent1')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 94
    }, {});
    var hbox17230851423079 = new kony.ui.Box({
        "id": "hbox17230851423079",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851423079.add(
    rtxtContent1);
    var rtxtContent2 = new kony.ui.RichText({
        "id": "rtxtContent2",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rtxtContent2"),
        "skin": "sknRichTxtRed",
        "i18n_text": "kony.i18n.getLocalizedString('rtxtContent2')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 94
    }, {});
    var hbox172308514249095 = new kony.ui.Box({
        "id": "hbox172308514249095",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172308514249095.add(
    rtxtContent2);
    var btnApply = new kony.ui.Button({
        "id": "btnApply",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblApplyOnline"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmInquireAboutInstStaticPage_btnApply_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblApplyOnline')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "containerWeight": 4
    }, {});
    var vbxRightMenu = new kony.ui.Box({
        "id": "vbxRightMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 70,
        "margin": [0, 0, 0, 0],
        "padding": [2, 0, 2, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxRightMenu.add(
    hbox17230851422554, hbox17230851423079, hbox172308514249095, btnApply);
    var hbox1727732536453133 = new kony.ui.Box({
        "id": "hbox1727732536453133",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 96,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536453133.add(
    vbxLeftMenu, vbxRightMenu);
    frmInquireAboutInstStaticPage.add(
    hbox1727732536453133);
};

function frmInquireAboutInstStaticPageGlobals() {
    var MenuId = [];
    frmInquireAboutInstStaticPage = new kony.ui.Form2({
        "id": "frmInquireAboutInstStaticPage",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmInquireAboutInstStaticPage_frmInquireAboutInstStaticPage_init_seq0,
        "preShow": frmInquireAboutInstStaticPage_frmInquireAboutInstStaticPage_preshow_seq0,
        "addWidgets": addWidgetsfrmInquireAboutInstStaticPage
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};