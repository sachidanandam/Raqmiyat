//Do not Modify!! This is an auto generated module for 'iphone'. Generated on Thu Feb 19 10:02:36 IST 2015
function popFileExplorer_segFiles_onRowClick_seq0Ar(eventobject, sectionNumber, rowNumber) {
    getSubDirectories.call(this);
};
function addWidgetspopFileExplorerAr() {
    var segFilesbox = new kony.ui.Box({
        "id": "segFilesbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_RIGHT,
        "containerWeight": 26
    }, {});
    var segFiles = new kony.ui.SegmentedUI2({
        "id": "segFiles",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "imageName": "imageName",
            "hbox1727583581286740": "hbox1727583581286740",
            "lblName": "lblName"
        },
        "rowTemplate": segFilesbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": true,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": popFileExplorer_segFiles_onRowClick_seq0Ar,
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
        "containerWeight": 26
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var imageName = new kony.ui.Image2({
        "id": "imageName",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 1, 1,1, 1],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1727583581286740 = new kony.ui.Box({
        "id": "hbox1727583581286740",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 52,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727583581286740.add(     lblName,imageName);
    segFilesbox.add(    hbox1727583581286740);
    popFileExplorerAr.add(    segFiles);
};
function popFileExplorerGlobalsAr() {
    popFileExplorerAr = new kony.ui.Popup({
        "id": "popFileExplorer",
        "title": null,
        "headers": [hboxFileBrowseHeader],
        "transparencyBehindThePopup": 100,
        "skin": "sknpopupTab",
        "isModal": false,
        "addWidgets": addWidgetspopFileExplorerAr
    }, {
        "padding": [ 0, 0,0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
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
