//Do not Modify!! This is an auto generated module for 'bb10'. Generated on Fri Jan 23 16:40:52 IST 2015
function segmentPopFileHeader_vboxHome_onClick_seq0Ar(eventobject) {
    showFilesAndFolders.call(this);
};
function segmentPopFileHeader_vboxBack_onClick_seq0Ar(eventobject) {
    backPressed.call(this);
};
function segmentPopFileHeader_vboxClose_onClick_seq0Ar(eventobject) {
    popFileExplorer.dismiss();
};
function segmentPopFileHeader_vboxHome_onClick_seq0Ar(eventobject) {
    showFilesAndFolders.call(this);
};
function segmentPopFileHeader_vboxBack_onClick_seq0Ar(eventobject) {
    backPressed.call(this);
};
function segmentPopFileHeader_vboxClose_onClick_seq0Ar(eventobject) {
    popFileExplorer.dismiss();
};
function initializesegmentPopFileHeaderAr() {
    hboxFileBrowseHeaderAr = new kony.ui.Box({
        "id": "hboxFileBrowseHeader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 25,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshboxFileBrowseHeaderAr() {
        var lblHome = new kony.ui.Label({
            "id": "lblHome",
            "isVisible": true,
            "text": "<<",
            "skin": "lblRoundedBtn"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
            "vExpand": false,
            "hExpand": true,
            "containerWeight": 100
        }, {});
        var vboxHome = new kony.ui.Box({
            "id": "vboxHome",
            "isVisible": true,
            "onClick": segmentPopFileHeader_vboxHome_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 17,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vboxHome.add(        lblHome);
        var lblBack = new kony.ui.Label({
            "id": "lblBack",
            "isVisible": true,
            "text": "<",
            "skin": "lblRoundedBtn"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "vExpand": false,
            "hExpand": true,
            "containerWeight": 100
        }, {});
        var vboxBack = new kony.ui.Box({
            "id": "vboxBack",
            "isVisible": true,
            "onClick": segmentPopFileHeader_vboxBack_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 17,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vboxBack.add(        lblBack);
        var vbox1725796146620 = new kony.ui.Box({
            "id": "vbox1725796146620",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 51,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
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
            "containerWeight": 100
        }, {});
        var vboxClose = new kony.ui.Box({
            "id": "vboxClose",
            "isVisible": true,
            "onClick": segmentPopFileHeader_vboxClose_onClick_seq0Ar,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 15,
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vboxClose.add(        label1725796146619);
        hboxFileBrowseHeaderAr.add(         vboxClose, vbox1725796146620, vboxBack,vboxHome);
    }
    addWidgetshboxFileBrowseHeaderAr();
};
