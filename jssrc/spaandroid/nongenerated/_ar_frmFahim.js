//Do not Modify!! This is an auto generated module for 'android'. Generated on Mon Feb 02 12:55:17 IST 2015
function frmFahim_frmFahim_preshow_seq0Ar(eventobject, neworientation) {
    frmFahim.txtsearch.text = "";
    frmFahim.dropdownselectfaqcategory.selectedKey = 0;
    frmFahim.hboxFaqType.setVisibility(false);
};

function frmFahim_txtsearch_onTextChange_seq0Ar(eventobject, changedtext) {
    SknTxtChangeValidation.call(this, frmCommitteesDecision1.lblApplicationNo);
};

function frmFahim_dropdownselectfaqcategory_onSelection_seq0Ar(eventobject) {
    SknTxtChangeValidation.call(this, frmFahim.lblfahimfaq);
    frmFahim.hboxFaqType.setVisibility(true);
};

function frmFahim_hbox1724008663207308_onClick_seq0Ar(eventobject, context) {
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

function addWidgetsfrmFahimAr() {
    var txtsearch = new kony.ui.TextBox2({
        "id": "txtsearch",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTextChange": frmFahim_txtsearch_onTextChange_seq0Ar,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 12,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnsearch = new kony.ui.Image2({
        "id": "btnsearch",
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
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172400866391307.add(btnsearch);
    var hbox172391929013829 = new kony.ui.Box({
        "id": "hbox172391929013829",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172391929013829.add(vbox172400866391307, txtsearch);
    var lblfahimfaq = new kony.ui.Label({
        "id": "lblfahimfaq",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFAQs"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var dropdownselectfaqcategory = new kony.ui.ComboBox({
        "id": "dropdownselectfaqcategory",
        "isVisible": true,
        "masterData": [
            ["0", "Select FAQs"],
            ["1", "Scholarship"]
        ],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin",
        "onSelection": frmFahim_dropdownselectfaqcategory_onSelection_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "popupTitle": null
    });
    var lblFAQsType = new kony.ui.Label({
        "id": "lblFAQsType",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblFAQsType"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 29
    }, {
        "textCopyable": false
    });
    var segment2181499092125625box = new kony.ui.Box({
        "id": "segment2181499092125625box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_RIGHT,
        "containerWeight": 67
    }, {});
    var segment2181499092125625 = new kony.ui.SegmentedUI2({
        "id": "segment2181499092125625",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "imgNext": "imgNext",
            "hbox1724008663207308": "hbox1724008663207308",
            "hbox181499092125662": "hbox181499092125662",
            "vbox1724008663205079": "vbox1724008663205079",
            "vbox181499092127570": "vbox181499092127570",
            "label181499092130140": "label181499092130140"
        },
        "rowTemplate": segment2181499092125625box,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
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
        "containerWeight": 67
    }, {});
    var label181499092130140 = new kony.ui.Label({
        "id": "label181499092130140",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var vbox181499092127570 = new kony.ui.Box({
        "id": "vbox181499092127570",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 95,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox181499092127570.add(label181499092130140);
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
        "onClick": frmFahim_hbox1724008663207308_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 64,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663207308.add(imgNext);
    var vbox1724008663205079 = new kony.ui.Box({
        "id": "vbox1724008663205079",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 5,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724008663205079.add(hbox1724008663207308);
    var hbox181499092125662 = new kony.ui.Box({
        "id": "hbox181499092125662",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 48,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox181499092125662.add(vbox1724008663205079, vbox181499092127570);
    segment2181499092125625box.add(hbox181499092125662);
    var vbox181499092141722 = new kony.ui.Box({
        "id": "vbox181499092141722",
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
    vbox181499092141722.add(lblFAQsType, segment2181499092125625);
    var hboxFaqType = new kony.ui.Box({
        "id": "hboxFaqType",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 22,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxFaqType.add(vbox181499092141722);
    frmFahimAr.add(hbox172391929013829, lblfahimfaq, dropdownselectfaqcategory, hboxFaqType);
};

function frmFahimGlobalsAr() {
    var MenuId = [];
    frmFahimAr = new kony.ui.Form2({
        "id": "frmFahim",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox181499092127451],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "preShow": frmFahim_frmFahim_preshow_seq0Ar,
        "addWidgets": addWidgetsfrmFahimAr
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};