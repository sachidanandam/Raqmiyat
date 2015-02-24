//Template File
function segmentPopFileHeader_vboxHome_onClick_seq0(eventobject) {
    showFilesAndFolders.call(this);
};

function segmentPopFileHeader_vboxBack_onClick_seq0(eventobject) {
    backPressed.call(this);
};

function segmentPopFileHeader_vboxClose_onClick_seq0(eventobject) {
    popFileExplorer.dismiss();
};

function segmentPopFileHeader_vboxHome_onClick_seq0(eventobject) {
    showFilesAndFolders.call(this);
};

function segmentPopFileHeader_vboxBack_onClick_seq0(eventobject) {
    backPressed.call(this);
};

function segmentPopFileHeader_vboxClose_onClick_seq0(eventobject) {
    popFileExplorer.dismiss();
};

function initializesegmentPopFileHeader() {
    hboxFileBrowseHeader = new kony.ui.Box({
        "id": "hboxFileBrowseHeader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 25,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshboxFileBrowseHeader() {
        var lblHome = new kony.ui.Label({
            "id": "lblHome",
            "isVisible": true,
            "text": "<<",
            "skin": "lblRoundedBtn"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "textCopyable": false
        });
        var vboxHome = new kony.ui.Box({
            "id": "vboxHome",
            "isVisible": true,
            "onClick": segmentPopFileHeader_vboxHome_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 17,
            "margin": [0, 0, 1, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vboxHome.add(
        lblHome);
        var lblBack = new kony.ui.Label({
            "id": "lblBack",
            "isVisible": true,
            "text": "<",
            "skin": "lblRoundedBtn"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "textCopyable": false
        });
        var vboxBack = new kony.ui.Box({
            "id": "vboxBack",
            "isVisible": true,
            "onClick": segmentPopFileHeader_vboxBack_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 17,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vboxBack.add(
        lblBack);
        var vbox1725796146620 = new kony.ui.Box({
            "id": "vbox1725796146620",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 51,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox1725796146620.add();
        var label1725796146619 = new kony.ui.Label({
            "id": "label1725796146619",
            "isVisible": true,
            "text": "X",
            "skin": "lblRoundedBtn"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "textCopyable": false
        });
        var vboxClose = new kony.ui.Box({
            "id": "vboxClose",
            "isVisible": true,
            "onClick": segmentPopFileHeader_vboxClose_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 15,
            "margin": [10, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vboxClose.add(
        label1725796146619);
        hboxFileBrowseHeader.add(
        vboxHome, vboxBack, vbox1725796146620, vboxClose);
    }
    addWidgetshboxFileBrowseHeader();
};