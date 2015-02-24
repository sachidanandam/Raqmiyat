//Form JS File
function frmCertEquivalStaticPage_btnRegister_onClick_seq0(eventobject) {
    uiPgNavigation.call(this, "2.1.1");
    isNewCertReg = true;
    resetCertificateEquivalency.call(this);
};

function addWidgetsfrmCertEquivalStaticPage() {
    var lblPageTitle = new kony.ui.Label({
        "id": "lblPageTitle",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPageTitle"),
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox17230851422554 = new kony.ui.Box({
        "id": "hbox17230851422554",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
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
    lblPageTitle);
    var rtxtContent = new kony.ui.RichText({
        "id": "rtxtContent",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rtxtContent"),
        "skin": "sknRichText"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 100
    }, {});
    var hbox17230851423079 = new kony.ui.Box({
        "id": "hbox17230851423079",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 15,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851423079.add(
    rtxtContent);
    var rtxtContent2 = new kony.ui.RichText({
        "id": "rtxtContent2",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rtxtContent3"),
        "skin": "sknRichTxtRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 100
    }, {});
    var hbox172308514249095 = new kony.ui.Box({
        "id": "hbox172308514249095",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 15,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172308514249095.add(
    rtxtContent2);
    var btnRegister = new kony.ui.Button({
        "id": "btnRegister",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("btnNext"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertEquivalStaticPage_btnRegister_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "containerWeight": 4
    }, {});
    frmCertEquivalStaticPage.add(
    hbox17230851422554, hbox17230851423079, hbox172308514249095, btnRegister);
};

function frmCertEquivalStaticPageGlobals() {
    var MenuId = [];
    frmCertEquivalStaticPage = new kony.ui.Form2({
        "id": "frmCertEquivalStaticPage",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox17231149331172, hbox172311493311196],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "addWidgets": addWidgetsfrmCertEquivalStaticPage
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "directChildrenIDs": ["hbox17230851422554", "lblPageTitle", "hbox17230851423079", "rtxtContent", "hbox172308514249095", "rtxtContent2", "btnRegister"]
    });
};