//Do not Modify!! This is an auto generated module for 'android'. Generated on Thu Feb 19 15:40:08 IST 2015
function addWidgetsreqdocumentspopusAr() {
    var SegReqDocsbox = new kony.ui.Box({
        "id": "SegReqDocsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_RIGHT,
        "containerWeight": 25
    }, {});
    var SegReqDocs = new kony.ui.SegmentedUI2({
        "id": "SegReqDocs",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "line1728596477256": "line1728596477256",
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
        "separatorThickness": 4,
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
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {});
    var lblReqId = new kony.ui.Label({
        "id": "lblReqId",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
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
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
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
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1723889499773.add(     lblReqIdVal,lblReqId);
    var line1728596477256 = new kony.ui.Line({
        "id": "line1728596477256",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [ 0, 0,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
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
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
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
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1723889499774.add(     lblDescVal,lblDesc);
    SegReqDocsbox.add(    hbox1723889499773, line1728596477256, hbox1723889499774);
    reqdocumentspopusAr.add(    SegReqDocs);
};
function reqdocumentspopusGlobalsAr() {
    reqdocumentspopusAr = new kony.ui.Popup({
        "id": "reqdocumentspopus",
        "title": null,
        "footers": [hbox1728596477254],
        "transparencyBehindThePopup": 100,
        "skin": "sknPopup",
        "isModal": false,
        "addWidgets": addWidgetsreqdocumentspopusAr
    }, {
        "padding": [ 1, 1,1, 1],
        "containerWeight": 90,
        "containerHeight": 70,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
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
