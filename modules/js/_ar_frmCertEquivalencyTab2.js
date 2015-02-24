//Do not Modify!! This is an auto generated module for 'tabrcandroid'. Generated on Thu Feb 19 15:48:55 IST 2015
function frmCertEquivalencyTab2_frmCertEquivalencyTab2_init_seq0Ar(eventobject, neworientation) {
    leftMenuAssignment.call(this, frmCertEquivalencyTab2, "2");
};
function frmCertEquivalencyTab2_frmCertEquivalencyTab2_preshow_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmCertEquivalencyTab2, "2");
 */
    leftMenuUiSelect.call(this, "2.1", frmCertEquivalencyTab2);
    LeftMenuChange.call(this, "2");
    frmOrient.call(this, frmCertEquivalencyTab2);
    /* 
retriveImagesFromGallery.call(this);
 */
    leftMenuAssignment.call(this, frmCertEquivalencyTab2, "2");
    /* 
if(kony.os.deviceInfo().name=="android"){
alertDialog(kony.i18n.getLocalizedString("rtxtCameraMsg"));
} else {
alertDialog(kony.i18n.getLocalizedString("rtxtCameraMsgIOS"));
}
 */
};
function frmCertEquivalencyTab2_frmCertEquivalencyTab2_postshow_seq0Ar(eventobject, neworientation) {
    loadreqdocs.call(this);
};
function frmCertEquivalencyTab2_frmCertEquivalencyTab2_onOrientationChange_seq0Ar(eventobject, neworientation) {
    /* 
leftMenuAssignment.call(this,frmCertEquivalencyTab2, gvModuleSelect);
 */
    frmOrient.call(this, frmCertEquivalencyTab2);
    leftMenuUiSelect.call(this, "2.1", frmCertEquivalencyTab2);
    /* 
onfrmOrientionChange.call(this,frmCertEquivalencyTab2);
 */
};
function frmCertEquivalencyTab2_hbox1724008663207308_onClick_seq0Ar(eventobject, context) {
    frmCertEquivalencyTab2.txtUniversityOrCollege.text = frmCertEquivalencyTab2["segTransferCredit"]["selectedItems"][0]["hdUniversityOrCollege"];
    frmCertEquivalencyTab2.dropdownTransfCountry.selectedKey = frmCertEquivalencyTab2["segTransferCredit"]["selectedItems"][0]["hdCountryId"];
    frmCertEquivalencyTab2.txtTransfNoofyears.text = frmCertEquivalencyTab2["segTransferCredit"]["selectedItems"][0]["hdNoOfYear"];
    frmCertEquivalencyTab2.btnTransfAdd.text = kony.i18n.getLocalizedString("lblUpdate");
};
function frmCertEquivalencyTab2_hbox17239193183777387_onClick_seq0Ar(eventobject, context) {
    certEquiDeleteTransferCreditRow.call(this);
};
function frmCertEquivalencyTab2_hbox305704285164755_onClick_seq0Ar(eventobject, context) {
    frmCertEquivalencyTab2.txtSchoolCollegeUniv.text = frmCertEquivalencyTab2["segPreviousCertificate"]["selectedItems"][0]["lblUniversityDisplay"];
    frmCertEquivalencyTab2.dropdownlevel.selectedKey = frmCertEquivalencyTab2["segPreviousCertificate"]["selectedItems"][0]["hdStudyLevelId"];
    frmCertEquivalencyTab2.txtCertificate.text = frmCertEquivalencyTab2["segPreviousCertificate"]["selectedItems"][0]["lblCertificateNameDisplay"];
    frmCertEquivalencyTab2.comboboxPreCertCountry.selectedKey = frmCertEquivalencyTab2["segPreviousCertificate"]["selectedItems"][0]["hdCountryId"];
    frmCertEquivalencyTab2.txtPeriodFrom.text = frmCertEquivalencyTab2["segPreviousCertificate"]["selectedItems"][0]["hdPeriodFrom"];
    frmCertEquivalencyTab2.txtPeriodTo.text = frmCertEquivalencyTab2["segPreviousCertificate"]["selectedItems"][0]["hdPeriodTo"];
    frmCertEquivalencyTab2.btnPreCertAdd.text = "Update";
    frmCertEquivalencyTab2.btnPreCertAdd.text = kony.i18n.getLocalizedString("lblUpdate");
};
function frmCertEquivalencyTab2_hbox17239193183863976_onClick_seq0Ar(eventobject, context) {
    certEquiDeletePreviousCertificateRow.call(this);
};
function frmCertEquivalencyTab2_hbox172761337253533_onClick_seq0Ar(eventobject, context) {
    removeFile.call(this);
};
function frmCertEquivalencyTab2_btnTransfAdd_onClick_seq0Ar(eventobject) {
    certEquiAddTransferCredit.call(this);
};
function frmCertEquivalencyTab2_btnPreCertAdd_onClick_seq0Ar(eventobject) {
    certEquiAddPreviousCertificate.call(this);
};
function frmCertEquivalencyTab2_button172380015410073_onClick_seq0Ar(eventobject) {
    loadreqdocs.call(this);
};
function frmCertEquivalencyTab2_hbxcaptureimage_onClick_seq0Ar(eventobject) {
    /* 
launchDeviceCamera.call(this,kony.application.getCurrentForm());
 */
};
function frmCertEquivalencyTab2_button181245868612039_onClick_seq0Ar(eventobject) {
    camerafficall.call(this);
};
function frmCertEquivalencyTab2_button172761337239423_onClick_seq0Ar(eventobject) {
    showFilesAndFolders.call(this);
};
function frmCertEquivalencyTab2_btnCertEquiSubmit_onClick_seq0Ar(eventobject) {
    validateCertEquiPgFieldGoFurther.call(this);
};
function frmCertEquivalencyTab2_btnPrev_onClick_seq0Ar(eventobject) {
    btnbackpressed = true;
    frmCertEquivalencyTab1.show();
};
function frmCertEquivalencyTab2_btnNext_onClick_seq0Ar(eventobject) {
    /* 
goToEquiValencyFrm2.call(this);
 */
};
function addWidgetsfrmCertEquivalencyTab2Ar() {
    var vbxLeftMenu = new kony.ui.Box({
        "id": "vbxLeftMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLeftMenu.add();
    var lblTransferCredit = new kony.ui.Label({
        "id": "lblTransferCredit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblTransferCredit"),
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,0, 0],
        "padding": [ 0, 0,0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox1727732536459700 = new kony.ui.Box({
        "id": "hbox1727732536459700",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536459700.add(    lblTransferCredit);
    var line17275835811072935 = new kony.ui.Line({
        "id": "line17275835811072935",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblUniversityOrCollege = new kony.ui.Label({
        "id": "lblUniversityOrCollege",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblUniversityOrCollege"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var txtUniversityOrCollege = new kony.ui.TextBox2({
        "id": "txtUniversityOrCollege",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1727732536459881 = new kony.ui.Box({
        "id": "hbox1727732536459881",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536459881.add(     txtUniversityOrCollege,lblUniversityOrCollege);
    var line17275835811072303 = new kony.ui.Line({
        "id": "line17275835811072303",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblTransfCountry = new kony.ui.Label({
        "id": "lblTransfCountry",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCountry"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var dropdownTransfCountry = new kony.ui.ComboBox({
        "id": "dropdownTransfCountry",
        "isVisible": true,
        "masterData": [["0", "Select Country"],["1", "India"]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "popupTitle": null
    });
    var hbox1727732536462972 = new kony.ui.Box({
        "id": "hbox1727732536462972",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536462972.add(     dropdownTransfCountry,lblTransfCountry);
    var line17275835811071867 = new kony.ui.Line({
        "id": "line17275835811071867",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblTransfNoofyears = new kony.ui.Label({
        "id": "lblTransfNoofyears",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblNoofyears"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var txtTransfNoofyears = new kony.ui.TextBox2({
        "id": "txtTransfNoofyears",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 2,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1727732536463741 = new kony.ui.Box({
        "id": "hbox1727732536463741",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536463741.add(     txtTransfNoofyears,lblTransfNoofyears);
    var btnTransfAdd = new kony.ui.Button({
        "id": "btnTransfAdd",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAdd"),
        "skin": "btnAdd",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertEquivalencyTab2_btnTransfAdd_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,0, 1],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {});
    var segTransferCreditbox = new kony.ui.Box({
        "id": "segTransferCreditbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_RIGHT,
        "containerWeight": 569
    }, {});
    var segTransferCredit = new kony.ui.SegmentedUI2({
        "id": "segTransferCredit",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblTransCertTitle": "lblTransCertTitle",
            "hdIsUpdate": "hdIsUpdate",
            "hdCountryId": "hdCountryId",
            "hbox1724008663207308": "hbox1724008663207308",
            "hbox17239193183777387": "hbox17239193183777387",
            "vbox1724008663205079": "vbox1724008663205079",
            "vbox1724008663145390": "vbox1724008663145390",
            "vbox17239193183777385": "vbox17239193183777385",
            "hdTranCretNo": "hdTranCretNo",
            "imgTransEdit": "imgTransEdit",
            "hdNoOfYear": "hdNoOfYear",
            "hdCountry": "hdCountry",
            "lblTransCertYears": "lblTransCertYears",
            "lblTransCertCountry": "lblTransCertCountry",
            "hbox1724008663143645": "hbox1724008663143645",
            "imgTransDel": "imgTransDel",
            "hdUniversityOrCollege": "hdUniversityOrCollege"
        },
        "rowTemplate": segTransferCreditbox,
        "rowSkin": "segWhiteBrBule",
        "rowFocusSkin": "segGrayBrBule",
        "alternateRowSkin": "segGrayBrBule",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 4,
        "separatorColor": "64646464",
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
        "margin": [ 3, 2,3, 2],
        "padding": [ 0, 2,0, 1],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 569
    }, {});
    var imgTransEdit = new kony.ui.Image2({
        "id": "imgTransEdit",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
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
        "onClick": frmCertEquivalencyTab2_hbox1724008663207308_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663207308.add(    imgTransEdit);
    var vbox1724008663205079 = new kony.ui.Box({
        "id": "vbox1724008663205079",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 5,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724008663205079.add(    hbox1724008663207308);
    var lblTransCertTitle = new kony.ui.Label({
        "id": "lblTransCertTitle",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {
        "textCopyable": false
    });
    var lblTransCertCountry = new kony.ui.Label({
        "id": "lblTransCertCountry",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {
        "textCopyable": false
    });
    var lblTransCertYears = new kony.ui.Label({
        "id": "lblTransCertYears",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {
        "textCopyable": false
    });
    var vbox1724008663145390 = new kony.ui.Box({
        "id": "vbox1724008663145390",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 87,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1724008663145390.add(    lblTransCertTitle, lblTransCertCountry, lblTransCertYears);
    var imgTransDel = new kony.ui.Image2({
        "id": "imgTransDel",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox17239193183777387 = new kony.ui.Box({
        "id": "hbox17239193183777387",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab2_hbox17239193183777387_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183777387.add(    imgTransDel);
    var vbox17239193183777385 = new kony.ui.Box({
        "id": "vbox17239193183777385",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 5,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox17239193183777385.add(    hbox17239193183777387);
    var hbox1724008663143645 = new kony.ui.Box({
        "id": "hbox1724008663143645",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724008663143645.add(     vbox17239193183777385, vbox1724008663145390,vbox1724008663205079);
    segTransferCreditbox.add(    hbox1724008663143645);
    var scrollboxTransferCredit = new kony.ui.ScrollBox({
        "id": "scrollboxTransferCredit",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "skin": "scrlBxWhite",
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "containerHeight": 10,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    scrollboxTransferCredit.add(    segTransferCredit);
    var hboxSeg1 = new kony.ui.Box({
        "id": "hboxSeg1",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxSeg1.add(    scrollboxTransferCredit);
    var lblPreviousCertificates = new kony.ui.Label({
        "id": "lblPreviousCertificates",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPrecertificateHeader"),
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,0, 1],
        "padding": [ 0, 0,0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox1727583581731150 = new kony.ui.Box({
        "id": "hbox1727583581731150",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727583581731150.add(    lblPreviousCertificates);
    var line17275835811069957 = new kony.ui.Line({
        "id": "line17275835811069957",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblSchoolCollegeUniversity = new kony.ui.Label({
        "id": "lblSchoolCollegeUniversity",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSchoolCollegeUniversity"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var txtSchoolCollegeUniv = new kony.ui.TextBox2({
        "id": "txtSchoolCollegeUniv",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1724783227707144 = new kony.ui.Box({
        "id": "hbox1724783227707144",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724783227707144.add(     txtSchoolCollegeUniv,lblSchoolCollegeUniversity);
    var line17275835811069885 = new kony.ui.Line({
        "id": "line17275835811069885",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblLevel = new kony.ui.Label({
        "id": "lblLevel",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblLevel"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var dropdownlevel = new kony.ui.ComboBox({
        "id": "dropdownlevel",
        "isVisible": true,
        "masterData": [["0", "Select Study Level"],["1", "Ph.D."],["2", "Master"],["3", "Post Graduate Diploma"],["4", "Bachelor"],["5", "Associate Diploma"]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "popupTitle": null
    });
    var hbox1727583581735314 = new kony.ui.Box({
        "id": "hbox1727583581735314",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727583581735314.add(     dropdownlevel,lblLevel);
    var line17275835811068499 = new kony.ui.Line({
        "id": "line17275835811068499",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblCertificate = new kony.ui.Label({
        "id": "lblCertificate",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCertificate"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var txtCertificate = new kony.ui.TextBox2({
        "id": "txtCertificate",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var hbox1727583581738464 = new kony.ui.Box({
        "id": "hbox1727583581738464",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727583581738464.add(     txtCertificate,lblCertificate);
    var line17275835811067569 = new kony.ui.Line({
        "id": "line17275835811067569",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblPreCertCountry = new kony.ui.Label({
        "id": "lblPreCertCountry",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCountry"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var comboboxPreCertCountry = new kony.ui.ComboBox({
        "id": "comboboxPreCertCountry",
        "isVisible": true,
        "masterData": [["0", "Select Country"],["1", "India"]],
        "selectedKey": "0",
        "skin": "cmbSkin",
        "focusSkin": "cmbSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 0, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "popupTitle": null
    });
    var hbox1724783227710737 = new kony.ui.Box({
        "id": "hbox1724783227710737",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 3,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724783227710737.add(     comboboxPreCertCountry,lblPreCertCountry);
    var line17275835811067033 = new kony.ui.Line({
        "id": "line17275835811067033",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblPeriodFrom = new kony.ui.Label({
        "id": "lblPeriodFrom",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPeriodFrom"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var txtPeriodFrom = new kony.ui.TextBox2({
        "id": "txtPeriodFrom",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 4,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var vbox1725796146342470 = new kony.ui.Box({
        "id": "vbox1725796146342470",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 38,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1725796146342470.add();
    var hbox1724783227496954 = new kony.ui.Box({
        "id": "hbox1724783227496954",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724783227496954.add(     vbox1725796146342470, txtPeriodFrom,lblPeriodFrom);
    var line17275835811066413 = new kony.ui.Line({
        "id": "line17275835811066413",
        "isVisible": true,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblPeriodTo = new kony.ui.Label({
        "id": "lblPeriodTo",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblPeriodTo"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var txtPeriodTo = new kony.ui.TextBox2({
        "id": "txtPeriodTo",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 4,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtFields",
        "focusSkin": "sknTxtFields",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DECIMAL
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "containerHeight": 5,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,4, 0],
        "padding": [ 1, 0,1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxtLoginPlcHldr"
    });
    var vbox1725796146342688 = new kony.ui.Box({
        "id": "vbox1725796146342688",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 38,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1725796146342688.add();
    var hbox1724783227529783 = new kony.ui.Box({
        "id": "hbox1724783227529783",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1724783227529783.add(     vbox1725796146342688, txtPeriodTo,lblPeriodTo);
    var btnPreCertAdd = new kony.ui.Button({
        "id": "btnPreCertAdd",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAdd"),
        "skin": "btnAdd",
        "focusSkin": "btnAdd",
        "onClick": frmCertEquivalencyTab2_btnPreCertAdd_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,0, 1],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {});
    var line17275835811065501 = new kony.ui.Line({
        "id": "line17275835811065501",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,1, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var segPreviousCertificatebox = new kony.ui.Box({
        "id": "segPreviousCertificatebox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_RIGHT,
        "containerWeight": 318
    }, {});
    var segPreviousCertificate = new kony.ui.SegmentedUI2({
        "id": "segPreviousCertificate",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox305704285146763": "hbox305704285146763",
            "hbox17239193183863976": "hbox17239193183863976",
            "lblPrevCertYear": "lblPrevCertYear",
            "hdPeriodFrom": "hdPeriodFrom",
            "lblUniversityDisplay": "lblUniversityDisplay",
            "hdStudyLevel": "hdStudyLevel",
            "lblCertificateNameDisplay": "lblCertificateNameDisplay",
            "hdCountry": "hdCountry",
            "hdPrevCretNo": "hdPrevCretNo",
            "hbox305704285145939": "hbox305704285145939",
            "imgPreCertDel": "imgPreCertDel",
            "hbox17239193183857992": "hbox17239193183857992",
            "hdPeriodTo": "hdPeriodTo",
            "hbox17239193183781032": "hbox17239193183781032",
            "hdIsUpdate": "hdIsUpdate",
            "hbox305704285164723": "hbox305704285164723",
            "hdCountryId": "hdCountryId",
            "lblUniversitySegDisplay": "lblUniversitySegDisplay",
            "vbox305704285127551": "vbox305704285127551",
            "hbox305704285164755": "hbox305704285164755",
            "lblPrevCertLevel": "lblPrevCertLevel",
            "lblCountryYearDisplay": "lblCountryYearDisplay",
            "hbox17239193183862144": "hbox17239193183862144",
            "lblCertificateNameSegDisplay": "lblCertificateNameSegDisplay",
            "hdStudyLevelId": "hdStudyLevelId",
            "lblCountryYearSegDisplay": "lblCountryYearSegDisplay",
            "vbox305704285164725": "vbox305704285164725",
            "vbox305704285164747": "vbox305704285164747",
            "imgPreCertEdit": "imgPreCertEdit",
            "Id": "Id"
        },
        "rowTemplate": segPreviousCertificatebox,
        "rowSkin": "segWhiteBrBule",
        "rowFocusSkin": "segGrayBrBule",
        "alternateRowSkin": "segGrayBrBule",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 4,
        "separatorColor": "64646464",
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
        "margin": [ 3, 2,3, 2],
        "padding": [ 0, 2,0, 1],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 318
    }, {});
    var imgPreCertEdit = new kony.ui.Image2({
        "id": "imgPreCertEdit",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 81
    }, {});
    var hbox305704285164755 = new kony.ui.Box({
        "id": "hbox305704285164755",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab2_hbox305704285164755_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox305704285164755.add(    imgPreCertEdit);
    var vbox305704285127551 = new kony.ui.Box({
        "id": "vbox305704285127551",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox305704285127551.add(    hbox305704285164755);
    var lblPrevCertLevel = new kony.ui.Label({
        "id": "lblPrevCertLevel",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox305704285146763 = new kony.ui.Box({
        "id": "hbox305704285146763",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox305704285146763.add(    lblPrevCertLevel);
    var lblUniversitySegDisplay = new kony.ui.Label({
        "id": "lblUniversitySegDisplay",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
        "containerWeight": 17,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183781032.add(    lblUniversitySegDisplay);
    var lblCertificateNameSegDisplay = new kony.ui.Label({
        "id": "lblCertificateNameSegDisplay",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox17239193183857992 = new kony.ui.Box({
        "id": "hbox17239193183857992",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 17,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183857992.add(    lblCertificateNameSegDisplay);
    var lblCountryYearSegDisplay = new kony.ui.Label({
        "id": "lblCountryYearSegDisplay",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox17239193183862144 = new kony.ui.Box({
        "id": "hbox17239193183862144",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 17,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183862144.add(    lblCountryYearSegDisplay);
    var lblPrevCertYear = new kony.ui.Label({
        "id": "lblPrevCertYear",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox305704285145939 = new kony.ui.Box({
        "id": "hbox305704285145939",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 17,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox305704285145939.add(    lblPrevCertYear);
    var vbox305704285164725 = new kony.ui.Box({
        "id": "vbox305704285164725",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 84,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox305704285164725.add(    hbox305704285146763, hbox17239193183781032, hbox17239193183857992, hbox17239193183862144, hbox305704285145939);
    var imgPreCertDel = new kony.ui.Image2({
        "id": "imgPreCertDel",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox17239193183863976 = new kony.ui.Box({
        "id": "hbox17239193183863976",
        "isVisible": true,
        "onClick": frmCertEquivalencyTab2_hbox17239193183863976_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox17239193183863976.add(    imgPreCertDel);
    var vbox305704285164747 = new kony.ui.Box({
        "id": "vbox305704285164747",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 7,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox305704285164747.add(    hbox17239193183863976);
    var hbox305704285164723 = new kony.ui.Box({
        "id": "hbox305704285164723",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 80,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox305704285164723.add(     vbox305704285164747, vbox305704285164725,vbox305704285127551);
    segPreviousCertificatebox.add(    hbox305704285164723);
    var scrollbox1727583581764910 = new kony.ui.ScrollBox({
        "id": "scrollbox1727583581764910",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "skin": "scrlBxWhite",
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "containerHeight": 10,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    scrollbox1727583581764910.add(    segPreviousCertificate);
    var hboxSeg2 = new kony.ui.Box({
        "id": "hboxSeg2",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxSeg2.add(    scrollbox1727583581764910);
    var lblAttachments = new kony.ui.Label({
        "id": "lblAttachments",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblAttachments"),
        "skin": "sknStaticFrmTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,0, 0],
        "padding": [ 0, 0,0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox1727583581825446 = new kony.ui.Box({
        "id": "hbox1727583581825446",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727583581825446.add(    lblAttachments);
    var line1725796146368498 = new kony.ui.Line({
        "id": "line1725796146368498",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 0, 1,0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblDescription"),
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 3, 1,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var txtDescription = new kony.ui.TextArea2({
        "id": "txtDescription",
        "isVisible": true,
        "text": null,
        "maxTextLength": null,
        "numberOfVisibleLines": 2,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "skin": "txt2Normal",
        "focusSkin": "txt2Focus",
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {});
    var hbox1727583581825454 = new kony.ui.Box({
        "id": "hbox1727583581825454",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727583581825454.add(     txtDescription,lblDescription);
    var button172380015410073 = new kony.ui.Button({
        "id": "button172380015410073",
        "isVisible": false,
        "text": kony.i18n.getLocalizedString("lblReqDoc"),
        "skin": "btnAdd",
        "focusSkin": "btnAdd",
        "onClick": frmCertEquivalencyTab2_button172380015410073_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,0, 1],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {});
    var line172841775811748 = new kony.ui.Line({
        "id": "line172841775811748",
        "isVisible": false,
        "skin": "sknLine"
    }, {
        "thickness": 1,
        "margin": [ 3, 1,1, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblChoose = new kony.ui.Label({
        "id": "lblChoose",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblCaptureImage"),
        "skin": "sknLblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 17, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 83
    }, {
        "textCopyable": false
    });
    var button181245868612039 = new kony.ui.Button({
        "id": "button181245868612039",
        "isVisible": true,
        "text": null,
        "skin": "skmCamera",
        "focusSkin": "btnFocus",
        "onClick": frmCertEquivalencyTab2_button181245868612039_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 3,0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    var hbxcaptureimage = new kony.ui.Box({
        "id": "hbxcaptureimage",
        "isVisible": true,
        "skin": "sknHbxCam",
        "focusSkin": "sknHbxCam",
        "onClick": frmCertEquivalencyTab2_hbxcaptureimage_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 3, 6,3, 0],
        "padding": [ 4, 1,4, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxcaptureimage.add(     button181245868612039,lblChoose);
    var button172761337239423 = new kony.ui.Button({
        "id": "button172761337239423",
        "isVisible": false,
        "text": kony.i18n.getLocalizedString("btnChooseFile"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertEquivalencyTab2_button172761337239423_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {});
    var segAttachmentbox = new kony.ui.Box({
        "id": "segAttachmentbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_RIGHT,
        "containerWeight": 2
    }, {});
    var segAttachment = new kony.ui.SegmentedUI2({
        "id": "segAttachment",
        "isVisible": false,
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
        "data": [{
            "lblFileName": "",
            "hdPath": "",
            "hdnFileIndex": "",
            "imgAttachmentDel": ""
        }, {
            "lblFileName": "",
            "hdPath": "",
            "hdnFileIndex": "",
            "imgAttachmentDel": ""
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
        "margin": [ 3, 2,3, 2],
        "padding": [ 0, 2,0, 1],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {});
    var lblFileName = new kony.ui.Label({
        "id": "lblFileName",
        "isVisible": true,
        "skin": "sknLblFields"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172761337253523.add(    lblFileName);
    var vbox172761337253521 = new kony.ui.Box({
        "id": "vbox172761337253521",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 91,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172761337253521.add(    hbox172761337253523);
    var imgAttachmentDel = new kony.ui.Image2({
        "id": "imgAttachmentDel",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
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
        "onClick": frmCertEquivalencyTab2_hbox172761337253533_onClick_seq0Ar,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172761337253533.add(    imgAttachmentDel);
    var vbox172761337253531 = new kony.ui.Box({
        "id": "vbox172761337253531",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox172761337253531.add(    hbox172761337253533);
    var hbox172761337253519 = new kony.ui.Box({
        "id": "hbox172761337253519",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox172761337253519.add(     vbox172761337253531,vbox172761337253521);
    segAttachmentbox.add(    hbox172761337253519);
    var btnCertEquiSubmit = new kony.ui.Button({
        "id": "btnCertEquiSubmit",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblSubmit"),
        "skin": "sknBtnSubmit",
        "focusSkin": "sknBtnSubmit",
        "onClick": frmCertEquivalencyTab2_btnCertEquiSubmit_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 1,0, 1],
        "padding": [ 1, 1,0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 2
    }, {});
    var btnPrev = new kony.ui.Button({
        "id": "btnPrev",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnPrev",
        "focusSkin": "sknBtnInvisible",
        "onClick": frmCertEquivalencyTab2_btnPrev_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": false,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var lblSteps = new kony.ui.Label({
        "id": "lblSteps",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("lblStep2Of2"),
        "skin": "sknFtrSteps"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 1, 1,1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 76
    }, {
        "textCopyable": false
    });
    var btnNext = new kony.ui.Button({
        "id": "btnNext",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnInvisible",
        "focusSkin": "sknBtnInvisible",
        "onClick": frmCertEquivalencyTab2_btnNext_onClick_seq0Ar
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [ 0, 0,0, 0],
        "padding": [ 0, 0,0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {});
    var hbox155182739221589 = new kony.ui.Box({
        "id": "hbox155182739221589",
        "isVisible": true,
        "skin": "sknFooter",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 2,0, 0],
        "padding": [ 4, 3,4, 3],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox155182739221589.add(     btnNext, lblSteps,btnPrev);
    var vbxRightMenu = new kony.ui.Box({
        "id": "vbxRightMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 70,
        "margin": [ 0, 0,0, 0],
        "padding": [ 2, 0,2, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxRightMenu.add(    hbox1727732536459700, line17275835811072935, hbox1727732536459881, line17275835811072303, hbox1727732536462972, line17275835811071867, hbox1727732536463741, btnTransfAdd, hboxSeg1, hbox1727583581731150, line17275835811069957, hbox1724783227707144, line17275835811069885, hbox1727583581735314, line17275835811068499, hbox1727583581738464, line17275835811067569, hbox1724783227710737, line17275835811067033, hbox1724783227496954, line17275835811066413, hbox1724783227529783, btnPreCertAdd, line17275835811065501, hboxSeg2, hbox1727583581825446, line1725796146368498, hbox1727583581825454, button172380015410073, line172841775811748, hbxcaptureimage, button172761337239423, segAttachment, btnCertEquiSubmit, hbox155182739221589);
    var hbox1727732536453133 = new kony.ui.Box({
        "id": "hbox1727732536453133",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [ 0, 2,0, 0],
        "padding": [ 0, 0,0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1727732536453133.add(     vbxRightMenu,vbxLeftMenu);
    frmCertEquivalencyTab2Ar.add(    hbox1727732536453133);
};
function frmCertEquivalencyTab2GlobalsAr() {
    var MenuId = [];
    frmCertEquivalencyTab2Ar = new kony.ui.Form2({
        "id": "frmCertEquivalencyTab2",
        "title": null,
        "needAppMenu": true,
        "headers": [hboxHdrMain],
        "enabledForIdleTimeout": false,
        "skin": "sknFrm",
        "init": frmCertEquivalencyTab2_frmCertEquivalencyTab2_init_seq0Ar,
        "preShow": frmCertEquivalencyTab2_frmCertEquivalencyTab2_preshow_seq0Ar,
        "postShow": frmCertEquivalencyTab2_frmCertEquivalencyTab2_postshow_seq0Ar,
        "onOrientationChange": frmCertEquivalencyTab2_frmCertEquivalencyTab2_onOrientationChange_seq0Ar,
        "addWidgets": addWidgetsfrmCertEquivalencyTab2Ar
    }, {
        "padding": [ 0, 0,0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
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
