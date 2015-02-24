//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 09 17:24:49 IST 2015
function frmCertEquivalStaticPage_btnRegister_onClick_seq0Ar(eventobject) {
    uiPgNavigation.call(this, "2.1.1");
    resetCertificateEquivalency.call(this);
};

function addWidgetsfrmCertEquivalStaticPageAr() {
    var lblPageTitle = new kony.ui.Label({
        "id": "lblPageTitle",
        "isVisible": true,
        "text": "Electronic Applications for Academic Qualifications Equivalency",
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851422554.add(lblPageTitle);
    var rtxtContent = new kony.ui.RichText({
        "id": "rtxtContent",
        "isVisible": true,
        "text": "For equalizing any academic qualification issued by a higher education institution from countries other than UAE, please provide the Department with the correct documents and information required as is illustrated in the online-application.<br/> The Ministry has the right to reject an application in the absence of any required document or information.",
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
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851423079.add(rtxtContent);
    var rtxtContent2 = new kony.ui.RichText({
        "id": "rtxtContent2",
        "isVisible": true,
        "text": "The Ministry of Higher Education and Scientific Research announces launching delivery service in cooperation with Empost beginning from February 2011 where applications concerning the equivalence of documents issued abroad will be delivered through the offices of Empost throughout the country. As for receiving the finalized applications, they will be received through Customer Service Center at the Ministry.",
        "skin": "sknRichTxtRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172308514249095.add(rtxtContent2);
    var btnRegister = new kony.ui.Button({
        "id": "btnRegister",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblRegister"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertEquivalStaticPage_btnRegister_onClick_seq0Ar
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
    frmCertEquivalStaticPageAr.add(hbox17230851422554, hbox17230851423079, hbox172308514249095, btnRegister);
};

function frmCertEquivalStaticPageGlobalsAr() {
    var MenuId = [];
    frmCertEquivalStaticPageAr = new kony.ui.Form2({
        "id": "frmCertEquivalStaticPage",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox17231149331172, hbox172311493311196],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "addWidgets": addWidgetsfrmCertEquivalStaticPageAr
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "directChildrenIDs": ["hbox17230851422554", "lblPageTitle", "hbox17230851423079", "rtxtContent", "hbox172308514249095", "rtxtContent2", "btnRegister"]
    });
};