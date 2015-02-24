//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Thu Feb 19 15:48:56 IST 2015
function addWidgetspoplandattestAr() {
    var btngs = new kony.ui.Button({
        "id": "btngs",
        "isVisible": true,
        "text": "Graduate Students",
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var btncs = new kony.ui.Button({
        "id": "btncs",
        "isVisible": true,
        "text": "Current Students",
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var btnfm = new kony.ui.Button({
        "id": "btnfm",
        "isVisible": true,
        "text": "Faculty Members",
        "skin": "sknbtnpop",
        "focusSkin": "btnFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var vbox1724693878489891 = new kony.ui.Box({
        "id": "vbox1724693878489891",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724693878489891.add(btngs, btncs, btnfm);
    var hbox1724693878489890 = new kony.ui.Box({
        "id": "hbox1724693878489890",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 19,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724693878489890.add(vbox1724693878489891);
    poplandattestAr.add(hbox1724693878489890);
};

function poplandattestGlobalsAr() {
    poplandattestAr = new kony.ui.Popup({
        "id": "poplandattest",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "sknFrm",
        "isModal": false,
        "addWidgets": addWidgetspoplandattestAr
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 33,
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