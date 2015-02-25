//Form JS File
function frmLoginAR_frmLoginAR_preshow_seq0(eventobject, neworientation) {
    resetLoginFields.call(this);
};

function frmLoginAR_lnklanguage_onClick_seq0(eventobject) {
    switchToDefaultLayout.call(this, changeAppLanguageToEnglish);
};

function frmLoginAR_btnlogin_onClick_seq0(eventobject) {
    onBtnClickSignIn.call(this);
};

function frmLoginAR_lnknewuserregistration_onClick_seq0(eventobject) {
    invokeRegistrationCompositService.call(this);
    /* 
frmNewReg.show();
	
 */
};

function addWidgetsfrmLoginAR() {
    var image21239236892720314 = new kony.ui.Image2({
        "id": "image21239236892720314",
        "isVisible": true,
        "src": "logo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 7, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var txtusername = new kony.ui.TextBox2({
        "id": "txtusername",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("lblUserName"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtLoginFrm",
        "focusSkin": "sknTxtLoginFrm"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 3, 3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 52
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": false,
        "showCloseButton": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var line153428946602 = new kony.ui.Line({
        "id": "line153428946602",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var txtpassword = new kony.ui.TextBox2({
        "id": "txtpassword",
        "isVisible": true,
        "text": null,
        "secureTextEntry": true,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("lblPassword"),
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtLoginFrm",
        "focusSkin": "sknTxtLoginFrm"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 3, 3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": false,
        "showCloseButton": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var vbox1534289464 = new kony.ui.Box({
        "id": "vbox1534289464",
        "isVisible": true,
        "skin": "sknVbxWhiteBg",
        "focusSkin": "sknVbxWhiteBg",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1534289464.add(
    txtusername, line153428946602, txtpassword);
    var hbox1534289463 = new kony.ui.Box({
        "id": "hbox1534289463",
        "isVisible": true,
        "skin": "sknHbxRoundWhite",
        "focusSkin": "sknHbxRoundWhite",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 15,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 25, 5, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1534289463.add(
    vbox1534289464);
    var vbox153428946470183 = new kony.ui.Box({
        "id": "vbox153428946470183",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 35,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox153428946470183.add();
    var lnklanguage = new kony.ui.Button({
        "id": "lnklanguage",
        "isVisible": true,
        "text": null,
        "skin": "sknArabicFocus",
        "focusSkin": "sknArabicFocus",
        "onClick": frmLoginAR_lnklanguage_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 7, 0, 7],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbox153428946470184 = new kony.ui.Box({
        "id": "vbox153428946470184",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 35,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox153428946470184.add();
    var hbox1534289467 = new kony.ui.Box({
        "id": "hbox1534289467",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 16, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1534289467.add(
    vbox153428946470183, lnklanguage, vbox153428946470184);
    var btnlogin = new kony.ui.Button({
        "id": "btnlogin",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSignIn"),
        "skin": "sknSignIn",
        "focusSkin": "sknSignIn",
        "onClick": frmLoginAR_btnlogin_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [16, 32, 16, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lnknewuserregistration = new kony.ui.Button({
        "id": "lnknewuserregistration",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNewRegistration"),
        "skin": "sknNewReg",
        "focusSkin": "sknNewReg",
        "onClick": frmLoginAR_lnknewuserregistration_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmLoginAR.add(
    image21239236892720314, hbox1534289463, hbox1534289467, btnlogin, lnknewuserregistration);
};

function frmLoginARGlobals() {
    var MenuId = [];
    frmLoginAR = new kony.ui.Form2({
        "id": "frmLoginAR",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknLoginBg",
        "preShow": frmLoginAR_frmLoginAR_preshow_seq0,
        "addWidgets": addWidgetsfrmLoginAR
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