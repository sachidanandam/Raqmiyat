//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 23 16:40:52 IST 2015
function frmCommitteesDecisionStaticPage_frmCommitteesDecisionStaticPage_postshow_seq0Ar(eventobject, neworientation) {
    setLocaleBasedHeaderTitle.call(this, kony.application.getCurrentForm(), kony.i18n.getLocalizedString("lblCommitDec"));
};

function frmCommitteesDecisionStaticPage_btnApplyForRec_onClick_seq0Ar(eventobject) {
    clearcomitteedecision.call(this);
    frmCommitteesDecision1.show();
};

function frmCommitteesDecisionStaticPage_hboxEmail_onClick_seq0Ar(eventobject) {
    var to = ["equalization@mohesr.gov.ae"];
    var cc = [""];
    var bcc = [""];
    var sub = "Reconsideration Application";
    var msg = "";
    kony.phone.openEmail(to, cc, bcc, sub, msg, false, []);
};

function addWidgetsfrmCommitteesDecisionStaticPageAr() {
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [3, 3, 3, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851422554.add(LblReconsiderationApp);
    var rtxtContent4 = new kony.ui.RichText({
        "id": "rtxtContent4",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rtxtContent4"),
        "skin": "sknRichText"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [3, 1, 3, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851423079.add(rtxtContent4);
    var btnApplyForRec = new kony.ui.Button({
        "id": "btnApplyForRec",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("btnApplyForRec"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCommitteesDecisionStaticPage_btnApplyForRec_onClick_seq0Ar
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
    }, {});
    var lblEmail = new kony.ui.Label({
        "id": "lblEmail",
        "isVisible": true,
        "text": "equalization@mohesr.gov.ae",
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 3, 1, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {});
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
    }, {});
    var hboxEmail = new kony.ui.Box({
        "id": "hboxEmail",
        "isVisible": true,
        "skin": "sknHbxCam",
        "focusSkin": "sknHbxCam",
        "onClick": frmCommitteesDecisionStaticPage_hboxEmail_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 4,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [3, 2, 3, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxEmail.add(imgEmail, lblEmail);
    var lblFax = new kony.ui.Label({
        "id": "lblFax",
        "isVisible": true,
        "text": "02/6427701",
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 3, 1, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {});
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
    }, {});
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [3, 2, 3, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxFax.add(imgFax, lblFax);
    frmCommitteesDecisionStaticPageAr.add(hbox17230851422554, hbox17230851423079, btnApplyForRec, hboxEmail, hboxFax);
};

function frmCommitteesDecisionStaticPageGlobalsAr() {
    var MenuId = [];
    frmCommitteesDecisionStaticPageAr = new kony.ui.Form2({
        "id": "frmCommitteesDecisionStaticPage",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox172311493319628, hbox172311493319652],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "postShow": frmCommitteesDecisionStaticPage_frmCommitteesDecisionStaticPage_postshow_seq0Ar,
        "addWidgets": addWidgetsfrmCommitteesDecisionStaticPageAr
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "directChildrenIDs": ["hbox17230851422554", "LblReconsiderationApp", "hbox17230851423079", "rtxtContent4", "btnApplyForRec", "hboxEmail", "lblEmail", "imgEmail", "hboxFax", "lblFax", "imgFax"]
    });
};