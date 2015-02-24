//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 09 17:24:50 IST 2015
function segmentPopFileHeader_vboxBack_onClick_seq0Ar(eventobject) {
    backPressed.call(this);
};

function segmentPopFileHeader_vboxHome_onClick_seq0Ar(eventobject) {
    showFilesAndFolders.call(this);
};

function segmentPopFileHeader_vboxBack_onClick_seq0Ar(eventobject) {
    backPressed.call(this);
};

function segmentPopFileHeader_vboxHome_onClick_seq0Ar(eventobject) {
    showFilesAndFolders.call(this);
};

function initializesegmentPopFileHeaderAr() {
    hboxFileBrowseHeaderAr = new kony.ui.Box({
        "id": "hboxFileBrowseHeader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshboxFileBrowseHeaderAr() {
        var lblBack = new kony.ui.Label({
            "id": "lblBack",
            "isVisible": true,
            "text": "Back",
            "skin": "lblNormal"
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
        }, {});
        var vboxBack = new kony.ui.Box({
            "id": "vboxBack",
            "isVisible": true,
            "onClick": segmentPopFileHeader_vboxBack_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 50,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vboxBack.add(lblBack);
        var lblHome = new kony.ui.Label({
            "id": "lblHome",
            "isVisible": true,
            "text": "Home",
            "skin": "lblNormal"
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
        }, {});
        var vboxHome = new kony.ui.Box({
            "id": "vboxHome",
            "isVisible": true,
            "onClick": segmentPopFileHeader_vboxHome_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 50,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vboxHome.add(lblHome);
        hboxFileBrowseHeaderAr.add(vboxHome, vboxBack);
    }
    addWidgetshboxFileBrowseHeaderAr();
};