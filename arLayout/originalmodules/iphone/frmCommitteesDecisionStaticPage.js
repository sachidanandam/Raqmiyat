//Form JS File
function frmCommitteesDecisionStaticPage_frmCommitteesDecisionStaticPage_postshow_seq0(eventobject, neworientation) {
    setLocaleBasedHeaderTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblCommitDec"));
};

function frmCommitteesDecisionStaticPage_btnApplyForRec_onClick_seq0(eventobject) {
    clearcomitteedecision.call(this);
    frmCommitteesDecision1.show();
    isCaptureMaxlengthExceeds = false;
};

function frmCommitteesDecisionStaticPage_hboxEmail_onClick_seq0(eventobject) {
    var to = ["equalization@mohesr.gov.ae"];
    var cc = [""];
    var bcc = [""];
    var sub = "Reconsideration Application";
    var msg = "";
    kony.phone.openEmail(to, cc, bcc, sub, msg, false, []);
};

function addWidgetsfrmCommitteesDecisionStaticPage() {
    var LblReconsiderationApp = new kony.ui.Label({
        "id": "LblReconsiderationApp",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblReconsiderationApp"),
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 3, 3, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851422554.add(
    LblReconsiderationApp);
    var rtxtContent4 = new kony.ui.RichText({
        "id": "rtxtContent4",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rtxtContent4"),
        "skin": "sknRichText"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 1, 3, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851423079.add(
    rtxtContent4);
    var btnApplyForRec = new kony.ui.Button({
        "id": "btnApplyForRec",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("btnApplyForRec"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCommitteesDecisionStaticPage_btnApplyForRec_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 5, 3, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lblEmail = new kony.ui.Label({
        "id": "lblEmail",
        "isVisible": true,
        "text": "equalization@mohesr.gov.ae",
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 3, 1, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgEmail = new kony.ui.Image2({
        "id": "imgEmail",
        "isVisible": true,
        "src": "email.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hboxEmail = new kony.ui.Box({
        "id": "hboxEmail",
        "isVisible": true,
        "skin": "sknHbxCam",
        "focusSkin": "sknHbxCam",
        "onClick": frmCommitteesDecisionStaticPage_hboxEmail_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 2, 3, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxEmail.add(
    lblEmail, imgEmail);
    var lblFax = new kony.ui.Label({
        "id": "lblFax",
        "isVisible": true,
        "text": "02/6427701",
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 3, 1, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgFax = new kony.ui.Image2({
        "id": "imgFax",
        "isVisible": true,
        "src": "fax.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hboxFax = new kony.ui.Box({
        "id": "hboxFax",
        "isVisible": true,
        "skin": "sknHbxCam",
        "focusSkin": "sknHbxCam",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 2, 3, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxFax.add(
    lblFax, imgFax);
    frmCommitteesDecisionStaticPage.add(
    hbox17230851422554, hbox17230851423079, btnApplyForRec, hboxEmail, hboxFax);
};

function frmCommitteesDecisionStaticPageGlobals() {
    var MenuId = [];
    frmCommitteesDecisionStaticPage = new kony.ui.Form2({
        "id": "frmCommitteesDecisionStaticPage",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox172311493319628, hbox172311493319652],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "postShow": frmCommitteesDecisionStaticPage_frmCommitteesDecisionStaticPage_postshow_seq0,
        "addWidgets": addWidgetsfrmCommitteesDecisionStaticPage
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