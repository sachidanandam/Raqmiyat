//Do not Modify!! This is an auto generated module for 'android'. Generated on Thu Feb 19 15:40:08 IST 2015
function frmCertEquivalStaticPage1_btnRegister_onClick_seq0Ar(eventobject) {
    uiPgNavigation.call(this, "2.1.1");
    isNewCertReg = true;
    resetCertificateEquivalency.call(this);
};

function addWidgetsfrmCertEquivalStaticPage1Ar() {
    var browCertificateEuiqStep1 = new kony.ui.Browser({
        "id": "browCertificateEuiqStep1",
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
        "containerWeight": 74
    }, {});
    var btnRegister = new kony.ui.Button({
        "id": "btnRegister",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("Register"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertEquivalStaticPage1_btnRegister_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox18140674023073 = new kony.ui.Box({
        "id": "hbox18140674023073",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 4],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox18140674023073.add(btnRegister);
    frmCertEquivalStaticPage1Ar.add(browCertificateEuiqStep1, hbox18140674023073);
};

function frmCertEquivalStaticPage1GlobalsAr() {
    var MenuId = [];
    frmCertEquivalStaticPage1Ar = new kony.ui.Form2({
        "id": "frmCertEquivalStaticPage1",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox17231149331172, hbox172311493311196],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "addWidgets": addWidgetsfrmCertEquivalStaticPage1Ar
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};