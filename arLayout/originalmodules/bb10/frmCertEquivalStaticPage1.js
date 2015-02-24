//Form JS File
function addWidgetsfrmCertEquivalStaticPage1() {
    var lblInstructionRequirement = new kony.ui.Label({
        "id": "lblInstructionRequirement",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblInstructionRequirement"),
        "skin": "sknLblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1239236892712889.add(
    lblInstructionRequirement);
    var browCertificateEuiqStep1 = new kony.ui.Browser({
        "id": "browCertificateEuiqStep1",
        "text": "Browser",
        "isVisible": true,
        "htmlString": "<div style=\"padding-left:5px;padding-right:5px;font-size:10pt;padding-top:10px;font-family:verdana;\"><h3 style=\"color:#A50505;font-size:12pt;display:inline;\">Attestation requirements for documents of current students : </h3><div style=\"color:#615F60;\"><ol style=\"padding-left:18px;\"><li style=\"padding-bottom:18px\">The documents to be attested must be issued by a licensed educational institution and its academic programs approved by the MOHESR.</li><li style=\"padding-bottom:18px\">The documents to be attested must contain student university number and specialization.</li> <li style=\"padding-bottom:18px\">The documents to be attested must be sealed and signed as approved by the issuing institution; copies are not accepted.</li>/ol></div></div>",
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
    frmCertEquivalStaticPage1.add(
    hbox1239236892712889, browCertificateEuiqStep1);
};

function frmCertEquivalStaticPage1Globals() {
    var MenuId = [];
    frmCertEquivalStaticPage1 = new kony.ui.Form2({
        "id": "frmCertEquivalStaticPage1",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox17231149331172, hbox172311493311196],
        "footers": [hbox17239193184129614],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "addWidgets": addWidgetsfrmCertEquivalStaticPage1
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "directChildrenIDs": ["browCertificateEuiqStep1", "hbox1239236892712889", "lblInstructionRequirement"]
    });
};