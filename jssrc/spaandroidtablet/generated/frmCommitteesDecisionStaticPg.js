//Form JS File
function frmCommitteesDecisionStaticPg_frmCommitteesDecisionStaticPg_init_seq0(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmCommitteesDecisionStaticPg, "2");
};

function frmCommitteesDecisionStaticPg_frmCommitteesDecisionStaticPg_preshow_seq0(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmCommitteesDecisionStaticPg, "2");

 */
    leftMenuUiSelect.call(this, "2.4", frmCommitteesDecisionStaticPg);
    clearcomitteedecisiontab.call(this);
    LeftMenuChange.call(this, "2");
    frmOrient.call(this, frmCommitteesDecisionStaticPg);
    retriveImagesFromGallery.call(this);
};

function frmCommitteesDecisionStaticPg_segCertificateDetails_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    frmCommitteesDecisionStaticPg.lblApplicantNo.text = frmCommitteesDecisionStaticPg.lblappno.text;
    frmCommitteesDecisionStaticPg.lblApplicantNameReconApp.text = frmCommitteesDecisionStaticPg.lblApplicantName.text;
    frmCommitteesDecisionStaticPg.lblCertificateTitleVal.text = frmCommitteesDecisionStaticPg["segCertificateDetails"]["selectedItems"][0]["lblCertTitle"];
    frmCommitteesDecisionStaticPg.lblMajorval.text = frmCommitteesDecisionStaticPg["segCertificateDetails"]["selectedItems"][0]["lblMajor"];
    frmCommitteesDecisionStaticPg.lblCountryval.text = (isArabicLocale == true) ? frmCommitteesDecisionStaticPg["segCertificateDetails"]["selectedItems"][0]["lblcountryar"] : frmCommitteesDecisionStaticPg["segCertificateDetails"]["selectedItems"][0]["lblcountryen"];;
    frmCommitteesDecisionStaticPg.lblcertno.text = frmCommitteesDecisionStaticPg["segCertificateDetails"]["selectedItems"][0]["lblcertno"];
    frmCommitteesDecisionStaticPg.lblcertissueinst.text = frmCommitteesDecisionStaticPg["segCertificateDetails"]["selectedItems"][0]["lblcertissueinst"];
    frmCommitteesDecisionStaticPg.lblcertissueorgcnt.text = frmCommitteesDecisionStaticPg["segCertificateDetails"]["selectedItems"][0]["lblcertissorgcnt"];
    segmentclickreconsiderapp.call(this);
    loadobjectiontype.call(this);
};

function frmCommitteesDecisionStaticPg_hbox1724008663207308_onClick_seq0(eventobject, context) {
    segmentclickreconsiderapp.call(this);
    loadobjectiontype.call(this);
};

function frmCommitteesDecisionStaticPg_hbox172761337253533_onClick_seq0(eventobject, context) {
    removeFile.call(this);
};

function frmCommitteesDecisionStaticPg_btnApplyForRec_onClick_seq0(eventobject) {
    onclicksubmitCommitteeDecision.call(this);
};

function frmCommitteesDecisionStaticPg_hboxEmail_onClick_seq0(eventobject) {
    var to = ["equalization@mohesr.gov.ae"];
    var cc = [""];
    var bcc = [""];
    var sub = "Reconsideration Application";
    var msg = "";
    kony.phone.openEmail(to, cc, bcc, sub, msg, false, []);
};

function frmCommitteesDecisionStaticPg_vbox172400866391307_onClick_seq0(eventobject) {
    clearcomitteedecisiontabonfind.call(this);
    committeedecisionappnovalidation.call(this);
};

function frmCommitteesDecisionStaticPg_button172761337239423_onClick_seq0(eventobject) {
    showFilesAndFolders.call(this);
};

function frmCommitteesDecisionStaticPg_btnSubmit_onClick_seq0(eventobject) {
    committeedecisionsumbitvalidation.call(this);
};

function addWidgetsfrmCommitteesDecisionStaticPg() {
    var vbxLeftMenu = new kony.ui.Box({
        "id": "vbxLeftMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLeftMenu.add();
    var LblReconsiderationApp = new kony.ui.Label({
        "id": "LblReconsiderationApp",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertificateReconsideration"),
        "skin": "sknStaticFrmTitle",
        "i18n_text": "kony.i18n.getLocalizedString('lblCertificateReconsideration')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 0, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox17230851422554 = new kony.ui.Box({
        "id": "hbox17230851422554",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851422554.add(
    LblReconsiderationApp);
    var rtxtContent4 = new kony.ui.RichText({
        "id": "rtxtContent4",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("rtxtContent4"),
        "skin": "sknRichText",
        "i18n_text": "kony.i18n.getLocalizedString('rtxtContent4')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 100
    }, {});
    var hbox17230851423079 = new kony.ui.Box({
        "id": "hbox17230851423079",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 27,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 1, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17230851423079.add(
    rtxtContent4);
    var btnApplyForRec = new kony.ui.Button({
        "id": "btnApplyForRec",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("btnApplyForRec"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCommitteesDecisionStaticPg_btnApplyForRec_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('btnApplyForRec')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "containerWeight": 7
    }, {});
    var lblEmail = new kony.ui.Label({
        "id": "lblEmail",
        "isVisible": true,
        "text": "equalization@mohesr.gov.ae",
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false
    });
    var imgEmail = new kony.ui.Image2({
        "id": "imgEmail",
        "isVisible": true,
        "src": "ic_email_red.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var hboxEmail = new kony.ui.Box({
        "id": "hboxEmail",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknYellowRounded",
        "focusSkin": "sknYellowRounded",
        "onClick": frmCommitteesDecisionStaticPg_hboxEmail_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 1, 0, 1],
        "padding": [2, 0, 2, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxEmail.add(
    lblEmail, imgEmail);
    var lblFax = new kony.ui.Label({
        "id": "lblFax",
        "isVisible": true,
        "text": "02/6427701",
        "skin": "sknFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false
    });
    var imgFax = new kony.ui.Image2({
        "id": "imgFax",
        "isVisible": true,
        "src": "ic_fax_red.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var hboxFax = new kony.ui.Box({
        "id": "hboxFax",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknYellowRounded",
        "focusSkin": "sknYellowRounded",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 1, 0, 1],
        "padding": [2, 0, 2, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxFax.add(
    lblFax, imgFax);
    var vbox1724038453915854 = new kony.ui.Box({
        "id": "vbox1724038453915854",
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
    vbox1724038453915854.add(
    hbox17230851422554, hbox17230851423079, btnApplyForRec, hboxEmail, hboxFax);
    var hbox1ReconsiderApp = new kony.ui.Box({
        "id": "hbox1ReconsiderApp",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 22,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1ReconsiderApp.add(
    vbox1724038453915854);
    var lblCertificateReconsideration = new kony.ui.Label({
        "id": "lblCertificateReconsideration",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertificateReconsideration"),
        "skin": "sknFrmTitle",
        "i18n_text": "kony.i18n.getLocalizedString('lblCertificateReconsideration')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "textCopyable": false
    });
    var vbox1725796146101468 = new kony.ui.Box({
        "id": "vbox1725796146101468",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1725796146101468.add(
    lblApplicationNo);
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
        "skin": "sknTxtFields",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeight": 10,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var vbox1725796146101469 = new kony.ui.Box({
        "id": "vbox1725796146101469",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 50,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1725796146101469.add(
    TxtApplicationNo);
    var ImgSearch = new kony.ui.Image2({
        "id": "ImgSearch",
        "isVisible": true,
        "src": "magnifier.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox172400866391307 = new kony.ui.Box({
        "id": "vbox172400866391307",
        "isVisible": true,
        "skin": "sknVboxFind",
        "focusSkin": "sknVboxFind",
        "onClick": frmCommitteesDecisionStaticPg_vbox172400866391307_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 8,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172400866391307.add(
    ImgSearch);
    var hboxApplicationNo = new kony.ui.Box({
        "id": "hboxApplicationNo",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 1, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxApplicationNo.add(
    vbox1725796146101468, vbox1725796146101469, vbox172400866391307);
    var lineApplicantNo = new kony.ui.Line({
        "id": "lineApplicantNo",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
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
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxApplicantName.add(
    lblApplicationName, lblApplicantName);
    var lineApplicantName = new kony.ui.Line({
        "id": "lineApplicantName",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var segCertificateDetailsbox = new kony.ui.Box({
        "id": "segCertificateDetailsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 61
    }, {});
    var segCertificateDetails = new kony.ui.SegmentedUI2({
        "id": "segCertificateDetails",
        "isVisible": false,
        "retainSelection": false,
        "widgetDataMap": {
            "lblTitleCountry": "lblTitleCountry",
            "lbltitleCertTitle": "lbltitleCertTitle",
            "hbox1724008663207308": "hbox1724008663207308",
            "vbox1724008663205079": "vbox1724008663205079",
            "lblMajor": "lblMajor",
            "line1725796146102489": "line1725796146102489",
            "lblTitleObjectionType": "lblTitleObjectionType",
            "lblcertno": "lblcertno",
            "hbox1724008663196488": "hbox1724008663196488",
            "lblCountry": "lblCountry",
            "hbox1724008663170544": "hbox1724008663170544",
            "hbox1724008663190824": "hbox1724008663190824",
            "line1725796146102505": "line1725796146102505",
            "line1725796146102506": "line1725796146102506",
            "lblcertissueinst": "lblcertissueinst",
            "lblObjectionType": "lblObjectionType",
            "lblTitleMajor": "lblTitleMajor",
            "lblReason": "lblReason",
            "line1725796146102490": "line1725796146102490",
            "lblcertissorgcnt": "lblcertissorgcnt",
            "lblCertTitle": "lblCertTitle",
            "vbox1724008663145390": "vbox1724008663145390",
            "lblcountryar": "lblcountryar",
            "imgNext": "imgNext",
            "hbox1724008663170556": "hbox1724008663170556",
            "lblTitleReason": "lblTitleReason",
            "lblcountryen": "lblcountryen",
            "hbox1724008663143645": "hbox1724008663143645",
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
        "onRowClick": frmCommitteesDecisionStaticPg_segCertificateDetails_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [0, 1, 0, 1],
        "padding": [0, 2, 0, 1],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 61
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
        "containerWeight": 40
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
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663170544.add(
    lbltitleCertTitle, lblCertTitle);
    var line1725796146102489 = new kony.ui.Line({
        "id": "line1725796146102489",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
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
        "containerWeight": 40
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
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663170556.add(
    lblTitleMajor, lblMajor);
    var line1725796146102490 = new kony.ui.Line({
        "id": "line1725796146102490",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
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
        "containerWeight": 40
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
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663183984.add(
    lblTitleCountry, lblCountry);
    var line1725796146102505 = new kony.ui.Line({
        "id": "line1725796146102505",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
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
        "containerWeight": 40
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
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663190824.add(
    lblTitleObjectionType, lblObjectionType);
    var line1725796146102506 = new kony.ui.Line({
        "id": "line1725796146102506",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
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
        "containerWeight": 40
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
        "padding": [0, 0, 0, 0],
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
        "containerWeight": 96,
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
    hbox1724008663170544, line1725796146102489, hbox1724008663170556, line1725796146102490, hbox1724008663183984, line1725796146102505, hbox1724008663190824, line1725796146102506, hbox1724008663196488);
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
        "onClick": frmCommitteesDecisionStaticPg_hbox1724008663207308_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 19,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
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
        "containerWeight": 4,
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
    segCertificateDetailsbox.add(
    hbox1724008663143645);
    var lblappno = new kony.ui.Label({
        "id": "lblappno",
        "isVisible": true,
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
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var vbox1724038453613379 = new kony.ui.Box({
        "id": "vbox1724038453613379",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724038453613379.add(
    lblCertificateReconsideration, hboxApplicationNo, lineApplicantNo, hboxApplicantName, lineApplicantName, segCertificateDetails, lblappno);
    var hbox2CertReconsider = new kony.ui.Box({
        "id": "hbox2CertReconsider",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 22,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox2CertReconsider.add(
    vbox1724038453613379);
    var LblCertificateReconsideration = new kony.ui.Label({
        "id": "LblCertificateReconsideration",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPageTitle1"),
        "skin": "sknFrmTitle",
        "i18n_text": "kony.i18n.getLocalizedString('lblPageTitle1')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "textCopyable": false
    });
    var label1725796146102845 = new kony.ui.Label({
        "id": "label1725796146102845",
        "isVisible": true,
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
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblApplicationNoReconApp = new kony.ui.Label({
        "id": "lblApplicationNoReconApp",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblApplicationNo"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblApplicationNo')"
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
    var lblApplicantNo = new kony.ui.Label({
        "id": "lblApplicantNo",
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
    var hbox17240384531286425 = new kony.ui.Box({
        "id": "hbox17240384531286425",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17240384531286425.add(
    lblApplicationNoReconApp, lblApplicantNo);
    var line17240384531286431 = new kony.ui.Line({
        "id": "line17240384531286431",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblApplicationNameReconApp = new kony.ui.Label({
        "id": "lblApplicationNameReconApp",
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
    var lblApplicantNameReconApp = new kony.ui.Label({
        "id": "lblApplicantNameReconApp",
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
    var hbox172400866366001 = new kony.ui.Box({
        "id": "hbox172400866366001",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172400866366001.add(
    lblApplicationNameReconApp, lblApplicantNameReconApp);
    var line172400866366493 = new kony.ui.Line({
        "id": "line172400866366493",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCertificateTitle = new kony.ui.Label({
        "id": "lblCertificateTitle",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertificateTitle"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblCertificateTitle')"
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
    var lblCertificateTitleVal = new kony.ui.Label({
        "id": "lblCertificateTitleVal",
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
    var hbox172400866368285 = new kony.ui.Box({
        "id": "hbox172400866368285",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172400866368285.add(
    lblCertificateTitle, lblCertificateTitleVal);
    var line172400866371393 = new kony.ui.Line({
        "id": "line172400866371393",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblMajorReconApp = new kony.ui.Label({
        "id": "lblMajorReconApp",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblMajor"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblMajor')"
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
    var lblMajorval = new kony.ui.Label({
        "id": "lblMajorval",
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
    var hbox172400866372325 = new kony.ui.Box({
        "id": "hbox172400866372325",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172400866372325.add(
    lblMajorReconApp, lblMajorval);
    var line172400866373837 = new kony.ui.Line({
        "id": "line172400866373837",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCountryReconApp = new kony.ui.Label({
        "id": "lblCountryReconApp",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCountry"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblCountry')"
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
    var lblCountryval = new kony.ui.Label({
        "id": "lblCountryval",
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
    var hbox172400866374685 = new kony.ui.Box({
        "id": "hbox172400866374685",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172400866374685.add(
    lblCountryReconApp, lblCountryval);
    var line172400866376437 = new kony.ui.Line({
        "id": "line172400866376437",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblObjectionTypeReconApp = new kony.ui.Label({
        "id": "lblObjectionTypeReconApp",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblObjectionType"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblObjectionType')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var dropdownObjectionType = new kony.ui.ComboBox({
        "id": "dropdownObjectionType",
        "isVisible": true,
        "masterData": [
            ["0", "Adoption of University"],
            ["1", "Change of Name"],
            ["2", "Change of Major"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var hbox172400866377141 = new kony.ui.Box({
        "id": "hbox172400866377141",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172400866377141.add(
    lblObjectionTypeReconApp, dropdownObjectionType);
    var lblcertissueorgcnt = new kony.ui.Label({
        "id": "lblcertissueorgcnt",
        "isVisible": false,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var line172400866382650 = new kony.ui.Line({
        "id": "line172400866382650",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblObjectionReason = new kony.ui.Label({
        "id": "lblObjectionReason",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblObjectionReason"),
        "skin": "sknLblFields",
        "i18n_text": "kony.i18n.getLocalizedString('lblObjectionReason')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var txtboxObjectionReasons = new kony.ui.TextArea2({
        "id": "txtboxObjectionReasons",
        "isVisible": true,
        "text": null,
        "maxTextLength": null,
        "numberOfVisibleLines": 2,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtArea",
        "focusSkin": "txt2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "autoCorrect": false
    });
    var hbox172400866383594 = new kony.ui.Box({
        "id": "hbox172400866383594",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172400866383594.add(
    lblObjectionReason, txtboxObjectionReasons);
    var lblcertno = new kony.ui.Label({
        "id": "lblcertno",
        "isVisible": false,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var lblcertissueinst = new kony.ui.Label({
        "id": "lblcertissueinst",
        "isVisible": false,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var line172400866388052 = new kony.ui.Line({
        "id": "line172400866388052",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblUploadFile = new kony.ui.Label({
        "id": "lblUploadFile",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("btnChooseFile"),
        "skin": "sknFrmTitle",
        "i18n_text": "kony.i18n.getLocalizedString('btnChooseFile')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 84
    }, {
        "textCopyable": false
    });
    var imgChooseFile = new kony.ui.Image2({
        "id": "imgChooseFile",
        "isVisible": true,
        "src": "camera.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {});
    var hbox172400866388232 = new kony.ui.Box({
        "id": "hbox172400866388232",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxCam",
        "focusSkin": "sknHbxCam",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172400866388232.add(
    lblUploadFile, imgChooseFile);
    var button172761337239423 = new kony.ui.Button({
        "id": "button172761337239423",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("btnChooseFile"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCommitteesDecisionStaticPg_button172761337239423_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('btnChooseFile')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
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
            "vbox172761337253531": "vbox172761337253531",
            "lblFileName": "lblFileName",
            "hdPath": "hdPath",
            "hdnFileIndex": "hdnFileIndex",
            "imgAttachmentDel": "imgAttachmentDel",
            "hbox172761337253533": "hbox172761337253533",
            "vbox172761337253521": "vbox172761337253521",
            "hbox172761337253523": "hbox172761337253523",
            "hbox172761337253519": "hbox172761337253519"
        },
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
    var hbox172761337253523 = new kony.ui.Box({
        "id": "hbox172761337253523",
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
    hbox172761337253523.add(
    lblFileName);
    var vbox172761337253521 = new kony.ui.Box({
        "id": "vbox172761337253521",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 90,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172761337253521.add(
    hbox172761337253523);
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
    var hbox172761337253533 = new kony.ui.Box({
        "id": "hbox172761337253533",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "onClick": frmCommitteesDecisionStaticPg_hbox172761337253533_onClick_seq0,
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
    hbox172761337253533.add(
    imgAttachmentDel);
    var vbox172761337253531 = new kony.ui.Box({
        "id": "vbox172761337253531",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 10,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172761337253531.add(
    hbox172761337253533);
    var hbox172761337253519 = new kony.ui.Box({
        "id": "hbox172761337253519",
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
    hbox172761337253519.add(
    vbox172761337253521, vbox172761337253531);
    segAttachmentbox.add(
    hbox172761337253519);
    var btnSubmit = new kony.ui.Button({
        "id": "btnSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSubmit"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCommitteesDecisionStaticPg_btnSubmit_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('lblSubmit')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 1, 0, 1],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {});
    var vbox1724038453692187 = new kony.ui.Box({
        "id": "vbox1724038453692187",
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
    vbox1724038453692187.add(
    LblCertificateReconsideration, label1725796146102845, hbox17240384531286425, line17240384531286431, hbox172400866366001, line172400866366493, hbox172400866368285, line172400866371393, hbox172400866372325, line172400866373837, hbox172400866374685, line172400866376437, hbox172400866377141, lblcertissueorgcnt, line172400866382650, hbox172400866383594, lblcertno, lblcertissueinst, line172400866388052, hbox172400866388232, button172761337239423, segAttachment, btnSubmit);
    var hbox17240384531274603 = new kony.ui.Box({
        "id": "hbox17240384531274603",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 97,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17240384531274603.add(
    vbox1724038453692187);
    var vbox17240384531138850 = new kony.ui.Box({
        "id": "vbox17240384531138850",
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
    vbox17240384531138850.add(
    hbox17240384531274603);
    var hbox3ReconsiderAppfrm = new kony.ui.Box({
        "id": "hbox3ReconsiderAppfrm",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 44,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox3ReconsiderAppfrm.add(
    vbox17240384531138850);
    var vbxRightMenu = new kony.ui.Box({
        "id": "vbxRightMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 70,
        "margin": [0, 0, 0, 0],
        "padding": [2, 0, 2, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxRightMenu.add(
    hbox1ReconsiderApp, hbox2CertReconsider, hbox3ReconsiderAppfrm);
    var hboxMain = new kony.ui.Box({
        "id": "hboxMain",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxMain.add(
    vbxLeftMenu, vbxRightMenu);
    frmCommitteesDecisionStaticPg.add(
    hboxMain);
};

function frmCommitteesDecisionStaticPgGlobals() {
    var MenuId = [];
    frmCommitteesDecisionStaticPg = new kony.ui.Form2({
        "id": "frmCommitteesDecisionStaticPg",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmCommitteesDecisionStaticPg_frmCommitteesDecisionStaticPg_init_seq0,
        "preShow": frmCommitteesDecisionStaticPg_frmCommitteesDecisionStaticPg_preshow_seq0,
        "addWidgets": addWidgetsfrmCommitteesDecisionStaticPg
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