//Form JS File
function frmCerEquivalencyAttach_frmCerEquivalencyAttach_preshow_seq0(eventobject, neworientation) {
    retriveImagesFromGallery.call(this);
};

function frmCerEquivalencyAttach_txtDescription_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCerEquivalencyAttach.lblDescription);
};

function frmCerEquivalencyAttach_button17228766339533_onClick_seq0(eventobject) {
    loadreqdocs.call(this);
};

function frmCerEquivalencyAttach_button172761337239423_onClick_seq0(eventobject) {
    showFilesAndFolders.call(this);
};

function frmCerEquivalencyAttach_hbox1724008663207308_onClick_seq0(eventobject, context) {
    removeFile.call(this);
};

function frmCerEquivalencyAttach_hbxcaptureimage_onClick_seq0(eventobject) {
    launchDeviceCamera.call(this, kony.application.getCurrentForm());
};

function frmCerEquivalencyAttach_btnCertEquiSubmit_onClick_seq0(eventobject) {
    validateCertEquiPgFieldGoFurther.call(this);
};

function frmCerEquivalencyAttach_btnPrev_onClick_seq0(eventobject) {
    frmCertEquivalency4.show();
};

function frmCerEquivalencyAttach_btnNext_onClick_seq0(eventobject) {
    frmCerEquivalencyAttach.show();
};

function addWidgetsfrmCerEquivalencyAttach() {
    var lblAttachments = new kony.ui.Label({
        "id": "lblAttachments",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAttachments"),
        "skin": "sknLblRed",
        "i18n_text": "kony.i18n.getLocalizedString('lblAttachments')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 3, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblDescription"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblDescription')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var txtDescription = new kony.ui.TextBox2({
        "id": "txtDescription",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCerEquivalencyAttach_txtDescription_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var line17239193183723059 = new kony.ui.Line({
        "id": "line17239193183723059",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var button17228766339533 = new kony.ui.Button({
        "id": "button17228766339533",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblReqDoc"),
        "skin": "sknbtnscan",
        "focusSkin": "sknbtnscan",
        "onClick": frmCerEquivalencyAttach_button17228766339533_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblReqDoc')"
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
        "containerWeight": 6
    }, {});
    var line172841775811748 = new kony.ui.Line({
        "id": "line172841775811748",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var button172761337239423 = new kony.ui.Button({
        "id": "button172761337239423",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("btnChooseFile"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCerEquivalencyAttach_button172761337239423_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('btnChooseFile')"
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
        "containerWeight": 6
    }, {});
    var segAttachmentbox = new kony.ui.Box({
        "id": "segAttachmentbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 5
    }, {});
    var segAttachment = new kony.ui.SegmentedUI2({
        "id": "segAttachment",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox17239193183781032": "hbox17239193183781032",
            "lblFileName": "lblFileName",
            "hbox1724008663207308": "hbox1724008663207308",
            "hdPath": "hdPath",
            "hdnFileIndex": "hdnFileIndex",
            "imgAttachmentDel": "imgAttachmentDel",
            "vbox1724008663205079": "vbox1724008663205079",
            "hdIsNewAttach": "hdIsNewAttach",
            "vbox1724008663145390": "vbox1724008663145390",
            "hbox1724008663143645": "hbox1724008663143645"
        },
        "data": [{
            "lblFileName": "Blue Ocean Academyi",
            "hdPath": "",
            "hdnFileIndex": "",
            "imgAttachmentDel": "delete.png",
            "hdIsNewAttach": ""
        }, {
            "lblFileName": "BITS Pilani",
            "hdPath": "",
            "hdnFileIndex": "",
            "imgAttachmentDel": "delete.png",
            "hdIsNewAttach": ""
        }],
        "rowTemplate": segAttachmentbox,
        "rowSkin": "segWhiteBrBule",
        "rowFocusSkin": "segGrayBrBule",
        "alternateRowSkin": "segGrayBrBule",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 4,
        "separatorColor": "64646464",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [3, 2, 3, 2],
        "padding": [0, 2, 0, 1],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});
    var lblFileName = new kony.ui.Label({
        "id": "lblFileName",
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
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox17239193183781032 = new kony.ui.Box({
        "id": "hbox17239193183781032",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183781032.add(
    lblFileName);
    var vbox1724008663145390 = new kony.ui.Box({
        "id": "vbox1724008663145390",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 93,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724008663145390.add(
    hbox17239193183781032);
    var imgAttachmentDel = new kony.ui.Image2({
        "id": "imgAttachmentDel",
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
        "containerWeight": 100
    }, {});
    var hbox1724008663207308 = new kony.ui.Box({
        "id": "hbox1724008663207308",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "onClick": frmCerEquivalencyAttach_hbox1724008663207308_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 94,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663207308.add(
    imgAttachmentDel);
    var vbox1724008663205079 = new kony.ui.Box({
        "id": "vbox1724008663205079",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 7,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724008663205079.add(
    hbox1724008663207308);
    var hbox1724008663143645 = new kony.ui.Box({
        "id": "hbox1724008663143645",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663143645.add(
    vbox1724008663145390, vbox1724008663205079);
    segAttachmentbox.add(
    hbox1724008663143645);
    var lblChoose = new kony.ui.Label({
        "id": "lblChoose",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblchoose"),
        "skin": "sknLblRed",
        "i18n_text": "kony.i18n.getLocalizedString('lblchoose')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 3, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false
    });
    var hbxcaptureimage = new kony.ui.Box({
        "id": "hbxcaptureimage",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxCam",
        "focusSkin": "sknHbxCam",
        "onClick": frmCerEquivalencyAttach_hbxcaptureimage_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 6, 3, 0],
        "padding": [4, 1, 4, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxcaptureimage.add(
    lblChoose);
    var btnCertEquiSubmit = new kony.ui.Button({
        "id": "btnCertEquiSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSubmit"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCerEquivalencyAttach_btnCertEquiSubmit_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblSubmit')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 5, 3, 4],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lineFooter = new kony.ui.Line({
        "id": "lineFooter",
        "isVisible": true,
        "skin": "lineFtr"
    }, {
        "thickness": 2,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnPrev = new kony.ui.Button({
        "id": "btnPrev",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnPrev",
        "focusSkin": "sknBtnInvisible",
        "onClick": frmCerEquivalencyAttach_btnPrev_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var lblStep5of5 = new kony.ui.Label({
        "id": "lblStep5of5",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStep5of5"),
        "skin": "sknFtrSteps",
        "i18n_text": "kony.i18n.getLocalizedString('lblStep5of5')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 83
    }, {
        "textCopyable": false
    });
    var btnNext = new kony.ui.Button({
        "id": "btnNext",
        "isVisible": false,
        "text": null,
        "skin": "sknBtnNext",
        "focusSkin": "sknBtnNext",
        "onClick": frmCerEquivalencyAttach_btnNext_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var hbox155182739221589 = new kony.ui.Box({
        "id": "hbox155182739221589",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknFooter",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 83,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [4, 3, 4, 3],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox155182739221589.add(
    btnPrev, lblStep5of5, btnNext);
    var vbox155182739219799 = new kony.ui.Box({
        "id": "vbox155182739219799",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox155182739219799.add(
    lineFooter, hbox155182739221589);
    var hbxFooter = new kony.ui.Box({
        "id": "hbxFooter",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFooter.add(
    vbox155182739219799);
    frmCerEquivalencyAttach.add(
    lblAttachments, lblDescription, txtDescription, line17239193183723059, button17228766339533, line172841775811748, button172761337239423, segAttachment, hbxcaptureimage, btnCertEquiSubmit, hbxFooter);
};

function frmCerEquivalencyAttachGlobals() {
    var MenuId = [];
    frmCerEquivalencyAttach = new kony.ui.Form2({
        "id": "frmCerEquivalencyAttach",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox17231149331172, hbox172311493311196],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "preShow": frmCerEquivalencyAttach_frmCerEquivalencyAttach_preshow_seq0,
        "addWidgets": addWidgetsfrmCerEquivalencyAttach
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