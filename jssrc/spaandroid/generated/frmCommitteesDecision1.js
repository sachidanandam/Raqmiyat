//Form JS File
function frmCommitteesDecision1_TxtApplicationNo_onTextChange_seq0(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCommitteesDecision1.lblApplicationNo);
};

function frmCommitteesDecision1_vbox172400866391307_onClick_seq0(eventobject) {
    clearcomitteedecisiononfind.call(this);
    committeedecisionappnovalidation.call(this);
};

function frmCommitteesDecision1_segCertificateDetails_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    frmCommitteesDecision2.txtboxObjectionReasons.text = "";
    frmCommitteesDecision2.lblApplicantNo.text = frmCommitteesDecision1.lblappno.text;
    frmCommitteesDecision2.lblApplicantNameReconApp.text = frmCommitteesDecision1.lblApplicantName.text;
    frmCommitteesDecision2.lblCertificateTitleVal.text = frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblCertTitle"];
    frmCommitteesDecision2.lblMajorval.text = frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblMajor"];
    frmCommitteesDecision2.lblCountryval.text = (isArabicLocale == true) ? frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblcountryar"] : frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblcountryen"];;
    frmCommitteesDecision2.lblcertno.text = frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblcertno"];
    frmCommitteesDecision2.lblcertissueinst.text = frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblcertissueinst"];
    frmCommitteesDecision2.lblcertissueorgcnt.text = frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblcertissorgcnt"];
    frmCommitteesDecision2.show();
    loadobjectiontype.call(this);
};

function frmCommitteesDecision1_hbox1724008663207308_onClick_seq0(eventobject, context) {
    frmCommitteesDecision2.lblApplicantNo.text = frmCommitteesDecision1.lblappno.text;
    frmCommitteesDecision2.lblApplicantNameReconApp.text = frmCommitteesDecision1.lblApplicantName.text;
    frmCommitteesDecision2.lblCertificateTitleVal.text = frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblCertTitle"];
    frmCommitteesDecision2.lblMajorval.text = frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblMajor"];
    frmCommitteesDecision2.lblCountry.text = frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblCountry"];
    frmCommitteesDecision2.lblcertno.text = frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblcertno"];
    frmCommitteesDecision2.lblcertissueinst.text = frmCommitteesDecision1["segCertificateDetails"]["selectedItems"][0]["lblcertissueinst"];
    frmCommitteesDecision2.show();
    loadobjectiontype.call(this);
};

function addWidgetsfrmCommitteesDecision1() {
    var lblCertificateReconsideration = new kony.ui.Label({
        "id": "lblCertificateReconsideration",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertificateReconsideration"),
        "skin": "sknFrmTitle",
        "i18n_text": "kony.i18n.getLocalizedString('lblCertificateReconsideration')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "textCopyable": false
    });
    var lblApplicationNo = new kony.ui.Label({
        "id": "lblApplicationNo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblApplicationNo"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblApplicationNo')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "textCopyable": false
    });
    var TxtApplicationNo = new kony.ui.TextBox2({
        "id": "TxtApplicationNo",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 9,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmCommitteesDecision1_TxtApplicationNo_onTextChange_seq0,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var image21724038454210815 = new kony.ui.Image2({
        "id": "image21724038454210815",
        "isVisible": true,
        "src": "magnifier.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 100,
        "referenceHeight": 43,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox172400866391307 = new kony.ui.Box({
        "id": "vbox172400866391307",
        "isVisible": true,
        "skin": "sknVboxFind",
        "focusSkin": "sknVboxFind",
        "onClick": frmCommitteesDecision1_vbox172400866391307_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172400866391307.add(
    image21724038454210815);
    var hbox172391929013829 = new kony.ui.Box({
        "id": "hbox172391929013829",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172391929013829.add(
    TxtApplicationNo, vbox172400866391307);
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [2, 1, 3, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblApplicationName = new kony.ui.Label({
        "id": "lblApplicationName",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblApplicationName"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblApplicationName')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var lblApplicantName = new kony.ui.Label({
        "id": "lblApplicantName",
        "isVisible": true,
        "text": null,
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var hboxApplicantName = new kony.ui.Box({
        "id": "hboxApplicantName",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxApplicantName.add(
    lblApplicationName, lblApplicantName);
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [2, 1, 3, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblappno = new kony.ui.Label({
        "id": "lblappno",
        "isVisible": false,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "textCopyable": false
    });
    var segCertificateDetailsbox = new kony.ui.Box({
        "id": "segCertificateDetailsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 58
    }, {});
    var segCertificateDetails = new kony.ui.SegmentedUI2({
        "id": "segCertificateDetails",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblTitleCountry": "lblTitleCountry",
            "lbltitleCertTitle": "lbltitleCertTitle",
            "hbox1724008663207308": "hbox1724008663207308",
            "vbox1724008663205079": "vbox1724008663205079",
            "lblMajor": "lblMajor",
            "lblTitleObjectionType": "lblTitleObjectionType",
            "lblcertno": "lblcertno",
            "hbox1724008663196488": "hbox1724008663196488",
            "lblCountry": "lblCountry",
            "hbox1724008663170544": "hbox1724008663170544",
            "hbox1724008663190824": "hbox1724008663190824",
            "lblObjectionType": "lblObjectionType",
            "lblcertissueinst": "lblcertissueinst",
            "lblTitleMajor": "lblTitleMajor",
            "lblReason": "lblReason",
            "lblcertissorgcnt": "lblcertissorgcnt",
            "lblCertTitle": "lblCertTitle",
            "vbox1724008663145390": "vbox1724008663145390",
            "lblcountryar": "lblcountryar",
            "imgNext": "imgNext",
            "hbox1724008663170556": "hbox1724008663170556",
            "lblTitleReason": "lblTitleReason",
            "hbox1724008663143645": "hbox1724008663143645",
            "lblcountryen": "lblcountryen",
            "hbox1724008663183984": "hbox1724008663183984"
        },
        "rowTemplate": segCertificateDetailsbox,
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
        "onRowClick": frmCommitteesDecision1_segCertificateDetails_onRowClick_seq0,
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
        "containerWeight": 58
    }, {});
    var lbltitleCertTitle = new kony.ui.Label({
        "id": "lbltitleCertTitle",
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
        "containerWeight": 42
    }, {
        "textCopyable": false
    });
    var lblCertTitle = new kony.ui.Label({
        "id": "lblCertTitle",
        "isVisible": true,
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 58
    }, {
        "textCopyable": false
    });
    var hbox1724008663170544 = new kony.ui.Box({
        "id": "hbox1724008663170544",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663170544.add(
    lbltitleCertTitle, lblCertTitle);
    var lblTitleMajor = new kony.ui.Label({
        "id": "lblTitleMajor",
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
        "containerWeight": 42
    }, {
        "textCopyable": false
    });
    var lblMajor = new kony.ui.Label({
        "id": "lblMajor",
        "isVisible": true,
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 58
    }, {
        "textCopyable": false
    });
    var hbox1724008663170556 = new kony.ui.Box({
        "id": "hbox1724008663170556",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663170556.add(
    lblTitleMajor, lblMajor);
    var lblTitleCountry = new kony.ui.Label({
        "id": "lblTitleCountry",
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
        "containerWeight": 42
    }, {
        "textCopyable": false
    });
    var lblCountry = new kony.ui.Label({
        "id": "lblCountry",
        "isVisible": true,
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 58
    }, {
        "textCopyable": false
    });
    var hbox1724008663183984 = new kony.ui.Box({
        "id": "hbox1724008663183984",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663183984.add(
    lblTitleCountry, lblCountry);
    var lblTitleObjectionType = new kony.ui.Label({
        "id": "lblTitleObjectionType",
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
        "containerWeight": 42
    }, {
        "textCopyable": false
    });
    var lblObjectionType = new kony.ui.Label({
        "id": "lblObjectionType",
        "isVisible": true,
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 58
    }, {
        "textCopyable": false
    });
    var hbox1724008663190824 = new kony.ui.Box({
        "id": "hbox1724008663190824",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663190824.add(
    lblTitleObjectionType, lblObjectionType);
    var lblTitleReason = new kony.ui.Label({
        "id": "lblTitleReason",
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
        "containerWeight": 42
    }, {
        "textCopyable": false
    });
    var lblReason = new kony.ui.Label({
        "id": "lblReason",
        "isVisible": true,
        "skin": "sknLblHighlight"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 58
    }, {
        "textCopyable": false
    });
    var hbox1724008663196488 = new kony.ui.Box({
        "id": "hbox1724008663196488",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663196488.add(
    lblTitleReason, lblReason);
    var vbox1724008663145390 = new kony.ui.Box({
        "id": "vbox1724008663145390",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 95,
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
    hbox1724008663170544, hbox1724008663170556, hbox1724008663183984, hbox1724008663190824, hbox1724008663196488);
    var imgNext = new kony.ui.Image2({
        "id": "imgNext",
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
        "onClick": frmCommitteesDecision1_hbox1724008663207308_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 19,
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
    imgNext);
    var vbox1724008663205079 = new kony.ui.Box({
        "id": "vbox1724008663205079",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 5,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
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
        "containerWeight": 64,
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
    segCertificateDetailsbox.add(
    hbox1724008663143645);
    frmCommitteesDecision1.add(
    lblCertificateReconsideration, lblApplicationNo, hbox172391929013829, line1, hboxApplicantName, line2, lblappno, segCertificateDetails);
};

function frmCommitteesDecision1Globals() {
    var MenuId = [];
    frmCommitteesDecision1 = new kony.ui.Form2({
        "id": "frmCommitteesDecision1",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox172311493319628, hbox172311493319652],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "addWidgets": addWidgetsfrmCommitteesDecision1
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