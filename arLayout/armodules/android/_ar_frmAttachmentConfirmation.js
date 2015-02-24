//Do not Modify!! This is an auto generated module for 'android'. Generated on Thu Feb 19 15:40:08 IST 2015
function frmAttachmentConfirmation_btnNo_onClick_seq0Ar(eventobject) {
    onClickNoPopUp.call(this);
};
function addWidgetsfrmAttachmentConfirmationAr() {
    var labelAppSuccessMsg = new kony.ui.Label({
        "id": "labelAppSuccessMsg",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblImgConfirmSize"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
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
        "containerWeight": 34,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 5,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851703651157.add(    labelAppSuccessMsg);
    var btnNo = new kony.ui.Button({
        "id": "btnNo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("recapture"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmAttachmentConfirmation_btnNo_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 5,3, 4],
        "padding": [ 0, 3,0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {});
    var hbox17230851703654669 = new kony.ui.Box({
        "id": "hbox17230851703654669",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 3, 5,3, 3],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851703654669.add(    btnNo);
    frmAttachmentConfirmationAr.add(    hbox17230851703651157, hbox17230851703654669);
};
function frmAttachmentConfirmationGlobalsAr() {
    frmAttachmentConfirmationAr = new kony.ui.Popup({
        "id": "frmAttachmentConfirmation",
        "title": null,
        "transparencyBehindThePopup": 50,
        "skin": "sknPopup",
        "isModal": true,
        "addWidgets": addWidgetsfrmAttachmentConfirmationAr
    }, {
        "padding": [ 0, 0,0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_RESIZE,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
};
