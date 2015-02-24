//Template File
function reqdocsfooter_button1728596477255_onClick_seq0(eventobject) {
    reqdocumentspopus.dismiss();
};

function reqdocsfooter_button1728596477255_onClick_seq0(eventobject) {
    reqdocumentspopus.dismiss();
};

function initializereqdocsfooter() {
    hbox1728596477254 = new kony.ui.BoxTemplate({
        "id": "hbox1728596477254",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox1728596477254
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox1728596477254() {
        var button1728596477255 = new kony.ui.Button({
            "id": "button1728596477255",
            "isVisible": true,
            "text": "Close",
            "skin": "sknSignIn",
            "focusSkin": "sknSignIn",
            "onClick": reqdocsfooter_button1728596477255_onClick_seq0
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
        hbox1728596477254.add(
        button1728596477255);
    }
};