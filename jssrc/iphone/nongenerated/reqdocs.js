var gvCertEQuiReqDoc = [];
var gvCertEQuiReqDocCurtDoc = "";
var btnbackpressed = false;

function loadreqdocs() {
    if (deviceName == "android" && btnbackpressed == false) {
        try {
            var curFrm = "";
            gvCertEQuiReqDoc = [];
            gvCertEQuiReqDocCurtDoc = "";
            var cnt = 0;
            //		if(gvCertEQuiReqDoc.length > 0 )
            //		{
            //			if(gblDeviceInfo!="tab")
            //			{
            //				curFrm = frmCerEquivalencyAttach;
            //			}
            //			else
            //			{
            //				curFrm = frmCertEquivalencyTab2;
            //			}
            //			gvCertEQuiReqDocCurtDoc = curFrm.segAttachment.data.length;
            //			if(gvCertEQuiReqDocCurtDoc == null || gvCertEQuiReqDocCurtDoc == "" )
            //				gvCertEQuiReqDocCurtDoc = 0;
            //			curFrm.txtDescription.text = gvCertEQuiReqDoc[gvCertEQuiReqDocCurtDoc]["lblDescVal"];
            //			return;
            //			
            //		}
            var countryIdReqDocs = "";
            var studyLevelReqDocs = "";
            if (gblDeviceInfo == "tab") {
                countryIdReqDocs = frmCertEquivalencyTab1.dropdowncountryofexam.selectedKey;
                studyLevelReqDocs = frmCertEquivalencyTab1.dropdownStudyLevel.selectedKey;
            } else {
                countryIdReqDocs = frmCertEquivalency1.dropdowncountryofexam.selectedKey;
                studyLevelReqDocs = frmCertEquivalency1.dropdownStudyLevel.selectedKey;
            }
            showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
            //input param for mobile
            var inputparam = {
                serviceID: "Equ_Select_ReqDocuments",
                countryid: countryIdReqDocs,
                //replace
                studylevelid: studyLevelReqDocs,
                //replace
                username: "webservice",
                password: "wEbsErViCe$35#"
            };
            kony.print("inputparam for Equ_Select_ReqDocuments are ***********", inputparam);
            appmiddlewareinvokerasync(inputparam, reqdocscallback);
        } catch (err) {
            displayError(err);
        }
    } else {
        btnbackpressed = false;
        if (deviceName == "iPhone") {
            currentForm.lblDescription.setVisibility(false);
            currentForm.txtDescription.setVisibility(false);
            currentForm.hbxcaptureimage.setVisibility(false);
        } else if (deviceName == "iPad") {
            currentForm.hbox1727583581825446.setVisibility(false);
            currentForm.hbox1727583581825454.setVisibility(false);
            currentForm.hbxcaptureimage.setVisibility(false);
        }
    }
}

function reqdocscallback(status, result) {
    try {
        if (status == 400) {
            kony.print("1");
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                kony.print("result data is------------", result);
                kony.print("2");
                if (result["output"] == "SUCCESS") {
                    if (gblDeviceInfo != "tab") {
                        curFrm = frmCerEquivalencyAttach;
                    } else {
                        curFrm = frmCertEquivalencyTab2;
                    }
                    kony.print("3");
                    if (result["reqdocs"] == undefined || result["reqdocs"] == null) {
                        dismissLoadingIndicator();
                        alertDialog(kony.i18n.getLocalizedString("lblnorecordsfound"));
                        //curFrm.hbxcaptureimage.setVisibility(false);
                    } else {
                        if (gblDeviceInfo != "tab") {
                            var setData = [];
                            kony.print("4");
                            for (var i = 0; i < result["reqdocs"].length; i++) {
                                var desc;
                                if (kony.i18n.getCurrentLocale() == "ar_SA") {
                                    desc = result["reqdocs"][i]["DESCRIPTION_A"];
                                } else {
                                    desc = result["reqdocs"][i]["DESCRIPTION_E"];
                                    kony.print("English" + result["reqdocs"][i]["DESCRIPTION_E"]);
                                }
                                setData.push({
                                    lblReqId: "Request ID",
                                    lblReqIdVal: result["reqdocs"][i]["REQ_ID"],
                                    lblDesc: "Description",
                                    lblDescVal: desc
                                });
                            }
                            //reqdocumentspopus.SegReqDocs.setData(setData);
                            gvCertEQuiReqDoc = setData;
                            dismissLoadingIndicator();
                            //reqdocumentspopus.show();
                        } else {
                            kony.print("tab success");
                            var setData = [];
                            for (var i = 0; i < result["reqdocs"].length; i++) {
                                var desc;
                                if (kony.i18n.getCurrentLocale() == "ar_SA") {
                                    desc = result["reqdocs"][i]["DESCRIPTION_A"];
                                } else {
                                    desc = result["reqdocs"][i]["DESCRIPTION_E"];
                                    kony.print("English" + result["reqdocs"][i]["DESCRIPTION_E"]);
                                }
                                setData.push({
                                    lblReqId: "Request ID",
                                    lblReqIdVal: result["reqdocs"][i]["REQ_ID"],
                                    lblDesc: "Description",
                                    lblDescVal: desc
                                });
                            }
                            //reqdocumentspopus.SegReqDocs.setData(setData);
                            gvCertEQuiReqDoc = setData;
                            kony.print("---" + gvCertEQuiReqDoc.length);
                            dismissLoadingIndicator();
                            //reqdocumentspopus.show();
                        }
                        //curFrm.hbxcaptureimage.setVisibility(true);
                        if (gvCertEQuiReqDoc != null || gvCertEQuiReqDoc != "" || gvCertEQuiReqDoc != null) {
                            if (gvCertEQuiReqDoc.length > 0) {
                                if (gvCertEQuiReqDocCurtDoc == null || gvCertEQuiReqDocCurtDoc == "" || curFrm.segAttachment.data == null) {
                                    gvCertEQuiReqDocCurtDoc = 0;
                                } else {
                                    gvCertEQuiReqDocCurtDoc = curFrm.segAttachment.data.length;
                                }
                                //gvCertEQuiReqDocCurtDoc++;
                                curFrm.segAttachment.data = null;
                                curFrm.txtDescription.text = gvCertEQuiReqDoc[gvCertEQuiReqDocCurtDoc]["lblDescVal"];
                                curFrm.txtDescription.setEnabled(false);
                                //alertDialog(kony.i18n.getLocalizedString("rtxtCameraMsg"));
                            }
                        }
                    }
                } else {
                    dismissLoadingIndicator();
                    alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
                }
            } else {
                dismissLoadingIndicator();
                alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
            }
        }
    } catch (err) {
        displayError(err);
    }
}