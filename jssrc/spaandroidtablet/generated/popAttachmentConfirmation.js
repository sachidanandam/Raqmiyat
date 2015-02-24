//Form JS File
function popAttachmentConfirmation_btnYes_onClick_seq0(eventobject) {
    onClickYesPopUpTab.call(this);
};

function popAttachmentConfirmation_btnNo_onClick_seq0(eventobject) {
    onClickNoPopUpTab.call(this);
};

function addWidgetspopAttachmentConfirmation() {
    var labelAppSuccessMsg = new kony.ui.Label({
        "id": "labelAppSuccessMsg",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblImgConfirmSize"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblImgConfirmSize')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 5, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox17230851703651157 = new kony.ui.Box({
        "id": "hbox17230851703651157",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 24,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851703651157.add(
    labelAppSuccessMsg);
    var btnYes = new kony.ui.Button({
        "id": "btnYes",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblYes"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": popAttachmentConfirmation_btnYes_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblYes')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 5, 3, 4],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 48
    }, {});
    var btnNo = new kony.ui.Button({
        "id": "btnNo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNo"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": popAttachmentConfirmation_btnNo_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblNo')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 5, 3, 4],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 48
    }, {});
    var hbox17230851703654669 = new kony.ui.Box({
        "id": "hbox17230851703654669",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851703654669.add(
    btnYes, btnNo);
    popAttachmentConfirmation.add(
    hbox17230851703651157, hbox17230851703654669);
};

function popAttachmentConfirmationGlobals() {
    popAttachmentConfirmation = new kony.ui.Popup({
        "id": "popAttachmentConfirmation",
        "title": null,
        "isModal": false,
        "transparencyBehindThePopup": 50,
        "skin": "sknpopupTab",
        "isModal": false,
        "addWidgets": addWidgetspopAttachmentConfirmation
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "inTransitionConfig": {
            "popupTransition": "None"
        },
        "outTransitionConfig": {
            "popupTransition": "None"
        }
    });
};