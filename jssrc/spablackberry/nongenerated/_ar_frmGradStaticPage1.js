//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 09 17:24:49 IST 2015
function frmGradStaticPage1_frmGradStaticPage1_postshow_seq0Ar(eventobject, neworientation) {
    setLocaleBasedHeaderTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblCertAttest"));
    setLocaleBasedFooterTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblStep1Of2"));
};

function addWidgetsfrmGradStaticPage1Ar() {
    var browGradInsStep1 = new kony.ui.Browser({
        "id": "browGradInsStep1",
        "text": "Browser",
        "isVisible": true,
        "detectTelNumber": true,
        "screenLevelWidget": true,
        "enableZoom": false
    }, {
        "margin": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 84
    }, {});
    var lblHeaderSubTitle = new kony.ui.Label({
        "id": "lblHeaderSubTitle",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblGradStud"),
        "skin": "sknSubHeaderGradAttest"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1239236892712889 = new kony.ui.Box({
        "id": "hbox1239236892712889",
        "isVisible": true,
        "skin": "sknSubHeader",
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 2, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1239236892712889.add(lblHeaderSubTitle);
    frmGradStaticPage1Ar.add(browGradInsStep1, hbox1239236892712889);
};

function frmGradStaticPage1GlobalsAr() {
    var MenuId = [];
    frmGradStaticPage1Ar = new kony.ui.Form2({
        "id": "frmGradStaticPage1",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox1239236892712888],
        "footers": [hbx1],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "postShow": frmGradStaticPage1_frmGradStaticPage1_postshow_seq0Ar,
        "addWidgets": addWidgetsfrmGradStaticPage1Ar
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "directChildrenIDs": ["browGradInsStep1", "hbox1239236892712889", "lblHeaderSubTitle"]
    });
};