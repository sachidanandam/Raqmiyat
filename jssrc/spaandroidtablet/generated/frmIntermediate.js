//Form JS File
function frmIntermediate_frmIntermediate_postshow_seq0(eventobject, neworientation) {
    frmIntermediate_postShow.call(this);
};

function addWidgetsfrmIntermediate() {};

function frmIntermediateGlobals() {
    var MenuId = [];
    frmIntermediate = new kony.ui.Form2({
        "id": "frmIntermediate",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "postShow": frmIntermediate_frmIntermediate_postshow_seq0,
        "addWidgets": addWidgetsfrmIntermediate
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};