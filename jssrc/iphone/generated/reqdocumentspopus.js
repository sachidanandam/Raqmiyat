//Form JS File
function addWidgetsreqdocumentspopus() {
    var SegReqDocsbox = new kony.ui.Box({
        "id": "SegReqDocsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var lblReqId = new kony.ui.Label({
        "id": "lblReqId",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblReqIdVal = new kony.ui.Label({
        "id": "lblReqIdVal",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1723889499773 = new kony.ui.Box({
        "id": "hbox1723889499773",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 42,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1723889499773.add(
    lblReqId, lblReqIdVal);
    var line1728596477256 = new kony.ui.Line({
        "id": "line1728596477256",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
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
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDescVal = new kony.ui.Label({
        "id": "lblDescVal",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1723889499774 = new kony.ui.Box({
        "id": "hbox1723889499774",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 42,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1723889499774.add(
    lblDesc, lblDescVal);
    SegReqDocsbox.add(
    hbox1723889499773, line1728596477256, hbox1723889499774);
    reqdocumentspopus.add(
    SegReqDocs);
};

function reqdocumentspopusGlobals() {
    reqdocumentspopus = new kony.ui.Popup({
        "id": "reqdocumentspopus",
        "title": null,
        "footers": [hbox1728596477254],
        "transparencyBehindThePopup": 100,
        "skin": "sknPopup",
        "isModal": false,
        "addWidgets": addWidgetsreqdocumentspopus
    }, {
        "padding": [1, 1, 1, 1],
        "containerWeight": 90,
        "containerHeight": 70,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "footerOverlap": true,
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