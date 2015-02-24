//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Thu Feb 19 15:48:56 IST 2015
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727583581286740.add(lblName, imageName);
    segFilesbox.add(hbox1727583581286740);
    popFileExplorerAr.add(segFiles);
};

function popFileExplorerGlobalsAr() {
    popFileExplorerAr = new kony.ui.Popup({
        "id": "popFileExplorer",
        "title": null,
        "headers": [hboxFileBrowseHeader],
        "transparencyBehindThePopup": 60,
        "skin": "sknpopupTab",
        "isModal": false,
        "addWidgets": addWidgetspopFileExplorerAr
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