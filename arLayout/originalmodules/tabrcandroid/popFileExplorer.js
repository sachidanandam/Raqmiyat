//Form JS File
function popFileExplorer_segFiles_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    getSubDirectories.call(this);
};

function addWidgetspopFileExplorer() {
    var segFilesbox = new kony.ui.Box({
        "id": "segFilesbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 21
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
        "separatorColor": "64646432",
        "showScrollbars": true,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": popFileExplorer_segFiles_onRowClick_seq0,
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
        "containerWeight": 21
    }, {});
    var imageName = new kony.ui.Image2({
        "id": "imageName",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {});
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {
        "textCopyable": false
    });
    var hbox1727583581286740 = new kony.ui.Box({
        "id": "hbox1727583581286740",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 66,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727583581286740.add(
    imageName, lblName);
    segFilesbox.add(
    hbox1727583581286740);
    popFileExplorer.add(
    segFiles);
};

function popFileExplorerGlobals() {
    popFileExplorer = new kony.ui.Popup({
        "id": "popFileExplorer",
        "title": null,
        "headers": [hboxFileBrowseHeader],
        "transparencyBehindThePopup": 60,
        "skin": "sknpopupTab",
        "isModal": false,
        "addWidgets": addWidgetspopFileExplorer
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_PAN,
        "inTransitionConfig": {
            "animation": 5
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
};