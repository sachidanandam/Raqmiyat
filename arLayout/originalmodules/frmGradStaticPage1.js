//Form JS File
function frmGradStaticPage1_frmGradStaticPage1_postshow_seq0(eventobject, neworientation) {
    setLocaleBasedHeaderTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblCertAttest"));
    setLocaleBasedFooterTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblStep1Of2"));
};

function addWidgetsfrmGradStaticPage1() {
    var browGradInsStep1 = new kony.ui.Browser({
        "id": "browGradInsStep1",
        "text": "Browser",
        "isVisible": true,
        "screenLevelWidget": true,
        "enableZoom": false,
        "detectTelNumber": true
    }, {
        "margin": [1, 1, 1, 1],
        "containerHeight": null,
        "marginInPixel": true,
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
    var hbox1239236892712889 = new kony.ui.Box({
        "id": "hbox1239236892712889",
        "isVisible": true,
        "skin": "sknSubHeader",
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1239236892712889.add(
    lblHeaderSubTitle);
    frmGradStaticPage1.add(
    browGradInsStep1, hbox1239236892712889);
};

function frmGradStaticPage1Globals() {
    var MenuId = [];
    frmGradStaticPage1 = new kony.ui.Form2({
        "id": "frmGradStaticPage1",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox1239236892712888],
        "footers": [hbx1],
        "enabledForIdleTimeout": true,
        "skin": "sknFrm",
        "postShow": frmGradStaticPage1_frmGradStaticPage1_postshow_seq0,
        "addWidgets": addWidgetsfrmGradStaticPage1
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