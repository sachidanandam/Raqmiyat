//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Mon Dec 29 21:41:23 IST 2014
function reqdocumentspopus_btnclose_onClick_seq0Ar(eventobject) {
    reqdocumentspopus.dismiss();
};

function addWidgetsreqdocumentspopusAr() {
    var SegReqDocsbox = new kony.ui.Box({
        "id": "SegReqDocsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_RIGHT,
        "containerWeight": 63
    }, {});
    var SegReqDocs = new kony.ui.SegmentedUI2({
        "id": "SegReqDocs",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblDesc": "lblDesc",
            "lblDescVal": "lblDescVal",
            "lblReqIdVal": "lblReqIdVal",
            "lblReqId": "lblReqId",
            "hbox1723889499774": "hbox1723889499774",
            "hbox1723889499773": "hbox1723889499773"
        },
        "rowTemplate": SegReqDocsbox,
        "rowSkin": "segWhiteBrBule",
        "rowFocusSkin": "segGrayBrBule",
        "alternateRowSkin": "segGrayBrBule",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 2,
        "separatorColor": "64646464",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 63
    }, {});
    var lblReqId = new kony.ui.Label({
        "id": "lblReqId",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "textCopyable": false
    });
    var lblReqIdVal = new kony.ui.Label({
        "id": "lblReqIdVal",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "textCopyable": false
    });
    var hbox1723889499773 = new kony.ui.Box({
        "id": "hbox1723889499773",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 42,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1723889499773.add(lblReqIdVal, lblReqId);
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "textCopyable": false
    });
    var lblDescVal = new kony.ui.Label({
        "id": "lblDescVal",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "textCopyable": false
    });
    var hbox1723889499774 = new kony.ui.Box({
        "id": "hbox1723889499774",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 42,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1723889499774.add(lblDescVal, lblDesc);
    SegReqDocsbox.add(hbox1723889499773, hbox1723889499774);
    var btnclose = new kony.ui.Button({
        "id": "btnclose",
        "isVisible": true,
        "text": "Close",
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": reqdocumentspopus_btnclose_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox17238894993965 = new kony.ui.Box({
        "id": "hbox17238894993965",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 5, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17238894993965.add(btnclose);
    reqdocumentspopusAr.add(SegReqDocs, hbox17238894993965);
};

function reqdocumentspopusGlobalsAr() {
    reqdocumentspopusAr = new kony.ui.Popup({
        "id": "reqdocumentspopus",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "sknFrm",
        "isModal": false,
        "addWidgets": addWidgetsreqdocumentspopusAr
    }, {
        "padding": [0, 0, 0, 0],
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