var applicantno = 0;
var appname = "";
var appno = "";

function segmentclickreconsiderapp() {
    frmCommitteesDecisionStaticPg.hbox1ReconsiderApp.setVisibility(false);
    frmCommitteesDecisionStaticPg.hbox2CertReconsider.setVisibility(false);
    frmCommitteesDecisionStaticPg.hbox3ReconsiderAppfrm.setVisibility(true);
}

function clearcomitteedecision() {
    frmCommitteesDecision1.TxtApplicationNo.text = "";
    //frmCommitteesDecision2.txtboxObjectionReasons.text="";
    frmCommitteesDecision1.lblApplicantName.text = "";
    frmCommitteesDecision1.lblappno.text = "";
    frmCommitteesDecision1.hboxApplicantName.setVisibility(false);
    frmCommitteesDecision1.segCertificateDetails.setVisibility(false);
    frmCommitteesDecision1.line1.setVisibility(false);
    frmCommitteesDecision1.line2.setVisibility(false);
    frmCommitteesDecision2.segAttachment.data = null;
}

function clearcomitteedecisiononfind() {
    frmCommitteesDecision1.lblApplicantName.text = "";
    frmCommitteesDecision1.lblappno.text = "";
    frmCommitteesDecision1.hboxApplicantName.setVisibility(false);
    frmCommitteesDecision1.segCertificateDetails.setVisibility(false);
    frmCommitteesDecision1.line1.setVisibility(false);
    frmCommitteesDecision1.line2.setVisibility(false);
    frmCommitteesDecision2.segAttachment.data = null;
}

function clearcomitteedecisiontab() {
    frmCommitteesDecisionStaticPg.TxtApplicationNo.text = "";
    frmCommitteesDecisionStaticPg.txtboxObjectionReasons.text = "";
    frmCommitteesDecisionStaticPg.lblApplicantName.text = "";
    frmCommitteesDecisionStaticPg.lblappno.text = "";
    frmCommitteesDecisionStaticPg.segCertificateDetails.removeAll();
    frmCommitteesDecisionStaticPg.segAttachment.removeAll();
    frmCommitteesDecisionStaticPg.hbox1ReconsiderApp.setVisibility(true);
    frmCommitteesDecisionStaticPg.hbox2CertReconsider.setVisibility(false);
    frmCommitteesDecisionStaticPg.hbox3ReconsiderAppfrm.setVisibility(false);
    frmCommitteesDecisionStaticPg.segAttachment.data = null;
}

function clearcomitteedecisiontabonfind() {
    frmCommitteesDecisionStaticPg.txtboxObjectionReasons.text = "";
    frmCommitteesDecisionStaticPg.lblApplicantName.text = "";
    frmCommitteesDecisionStaticPg.lblappno.text = "";
    frmCommitteesDecisionStaticPg.segCertificateDetails.removeAll();
    frmCommitteesDecisionStaticPg.segAttachment.removeAll();
    frmCommitteesDecisionStaticPg.hbox1ReconsiderApp.setVisibility(false);
    frmCommitteesDecisionStaticPg.lineApplicantName.setVisibility(false);
    //frmCommitteesDecisionStaticPg.hbox2CertReconsider.setVisibility(false);
    frmCommitteesDecisionStaticPg.segCertificateDetails.setVisibility(false);
    frmCommitteesDecisionStaticPg.hbox3ReconsiderAppfrm.setVisibility(false);
    frmCommitteesDecisionStaticPg.hboxApplicantName.setVisibility(false);
    frmCommitteesDecisionStaticPg.segAttachment.data = null;
}

function onclicksubmitCommitteeDecision() {
    frmCommitteesDecisionStaticPg.hbox1ReconsiderApp.setVisibility(false);
    frmCommitteesDecisionStaticPg.hbox2CertReconsider.setVisibility(true);
    frmCommitteesDecisionStaticPg.hboxApplicantName.setVisibility(false);
    frmCommitteesDecisionStaticPg.lineApplicantName.setVisibility(false);
    frmCommitteesDecisionStaticPg.segCertificateDetails.setVisibility(false);
    frmCommitteesDecisionStaticPg.hbox3ReconsiderAppfrm.setVisibility(false);
}

function loadcertificatereconsider() {
    try {
        showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
        //input param for mobile
        if (gblDeviceInfo != "tab") {
            var inputparam = {
                serviceID: "Select_ForReconsider",
                appno: frmCommitteesDecision1.TxtApplicationNo.text
            };
            kony.print("inputparam are ***********", inputparam);
            appmiddlewareinvokerasync(inputparam, certificatereconsidercallback);
        }
        //input param for tab
        else {
            var inputparam = {
                serviceID: "Select_ForReconsider",
                appno: frmCommitteesDecisionStaticPg.TxtApplicationNo.text
            };
            kony.print("inputparam are ***********", inputparam);
            appmiddlewareinvokerasync(inputparam, certificatereconsidercallback);
        }
    } catch (err) {
        displayError(err);
    }
}

function certificatereconsidercallback(status, result) {
    try {
        if (status == 400) {
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                kony.print("result data is------------", result);
                if (result["output"] == "SUCCESS") {
                    if (result["reconsider"] == undefined || result["reconsider"] == null) {
                        dismissLoadingIndicator();
                        frmCommitteesDecision1.hboxApplicantName.setVisibility(false);
                        frmCommitteesDecision1.lblappno.setVisibility(false);
                        alertDialog(kony.i18n.getLocalizedString("lblnorecordsfound"));
                    } else {
                        if (gblDeviceInfo != "tab") {
                            kony.print("mob success");
                            //frmCommitteesDecision1.segCertificateDetails=result.reconsider[0];
                            kony.print("result.reconsider[0] " + JSON.stringify(result.reconsider[0]));
                            //frmCommitteesDecision1.segCertificateDetails.widgetDataMap={"lbltitleCertTitle":kony.i18n.getLocalizedString("lblCertTitle"),"lblCertTitle":result["reconsider"][0]["certTitle"],"lblTitleMajor":kony.i18n.getLocalizedString("lblMajor"),"lblMajor":result["reconsider"][0]["major"],"lblTitleCountry":kony.i18n.getLocalizedString("lblCountry"),"lblCountry":result["reconsider"][0]["certCountry"],"lblTitleObjectionType":kony.i18n.getLocalizedString("lblObjectionType"),"lblObjectionType":result["reconsider"][0]["objType"],"lblTitleReason":kony.i18n.getLocalizedString("lblReason"),"lblReason":result["reconsider"][0]["objReason"],"imgNext":"next.png","lblcertno":result["reconsider"][0]["certno"],lblcertissueinst:result["reconsider"][0]["certInstitute"]};
                            var setData = [];
                            for (var i = 0; i < result["reconsider"].length; i++)
                            setData.push({
                                lbltitleCertTitle: kony.i18n.getLocalizedString("lblCertTitle"),
                                lblCertTitle: result["reconsider"][i]["certTitle"],
                                lblTitleMajor: kony.i18n.getLocalizedString("lblMajor"),
                                lblMajor: result["reconsider"][i]["major"],
                                lblTitleCountry: kony.i18n.getLocalizedString("lblCountry"),
                                lblCountry: (isArabicLocale == true) ? result["reconsider"][i]["countryAr"] : result["reconsider"][i]["countryEn"],
                                lblTitleObjectionType: kony.i18n.getLocalizedString("lblObjectionType"),
                                lblObjectionType: result["reconsider"][i]["objType"],
                                lblTitleReason: kony.i18n.getLocalizedString("lblReason"),
                                lblReason: result["reconsider"][i]["objReason"],
                                imgNext: "next.png",
                                lblcertno: result["reconsider"][i]["certno"],
                                lblcertissueinst: result["reconsider"][i]["certInstitute"],
                                lblcountryen: result["reconsider"][i]["countryEn"],
                                lblcountryar: result["reconsider"][i]["countryAr"],
                                lblcertissorgcnt: result["reconsider"][i]["certCountry"]
                            });
                            //frmCommitteesDecision1.segCertificateDetails.widgetDataMap = test;
                            kony.print("cert title " + result["reconsider"][0]["certTitle"]);
                            //frmCommitteesDecision1.segCertificateDetails.setData(result.reconsider);
                            kony.print("segment data is " + frmCommitteesDecision1.segCertificateDetails.data);
                            frmCommitteesDecision1.lblApplicantName.text = appname;
                            frmCommitteesDecision1.lblappno.text = appno;
                            frmCommitteesDecision1.line1.setVisibility(true);
                            frmCommitteesDecision1.line2.setVisibility(true);
                            frmCommitteesDecision1.hboxApplicantName.setVisibility(true);
                            frmCommitteesDecision1.segCertificateDetails.setData(setData);
                            frmCommitteesDecision1.segCertificateDetails.setVisibility(true);
                            kony.print("ASDF segment data is " + frmCommitteesDecision1.segCertificateDetails.data);
                            dismissLoadingIndicator();
                        } else {
                            kony.print("tab success");
                            var setData = [];
                            for (var i = 0; i < result["reconsider"].length; i++)
                            setData.push({
                                lbltitleCertTitle: kony.i18n.getLocalizedString("lblCertTitle"),
                                lblCertTitle: result["reconsider"][i]["certTitle"],
                                lblTitleMajor: kony.i18n.getLocalizedString("lblMajor"),
                                lblMajor: result["reconsider"][i]["major"],
                                lblTitleCountry: kony.i18n.getLocalizedString("lblCountry"),
                                lblCountry: (isArabicLocale == true) ? result["reconsider"][i]["countryAr"] : result["reconsider"][i]["countryEn"],
                                lblTitleObjectionType: kony.i18n.getLocalizedString("lblObjectionType"),
                                lblObjectionType: result["reconsider"][i]["objType"],
                                lblTitleReason: kony.i18n.getLocalizedString("lblReason"),
                                lblReason: result["reconsider"][i]["objReason"],
                                imgNext: "next.png",
                                lblcertno: result["reconsider"][i]["certno"],
                                lblcertissueinst: result["reconsider"][i]["certInstitute"],
                                lblcountryen: result["reconsider"][i]["countryEn"],
                                lblcountryar: result["reconsider"][i]["countryAr"],
                                lblcertissorgcnt: result["reconsider"][i]["certCountry"]
                            });
                            kony.print("segment data is " + frmCommitteesDecisionStaticPg.segCertificateDetails.data);
                            frmCommitteesDecisionStaticPg.segCertificateDetails.setData(setData);
                            kony.print("ASDF segment data is " + frmCommitteesDecisionStaticPg.segCertificateDetails.data);
                            frmCommitteesDecisionStaticPg.segCertificateDetails.setVisibility(true);
                            frmCommitteesDecisionStaticPg.lblApplicantName.text = appname;
                            frmCommitteesDecisionStaticPg.lblappno.text = appno;
                            frmCommitteesDecisionStaticPg.hboxApplicantName.setVisibility(true);
                            frmCommitteesDecisionStaticPg.lineApplicantName.setVisibility(true)
                            frmCommitteesDecisionStaticPg.segCertificateDetails.setVisibility(true);
                            //frmCommitteesDecisionStaticPg.segCertificateDetails=result.reconsider[0];
                            //frmCommitteesDecisionStaticPg.segCertificateDetails.widgetDataMap={lbltitleCertTitle:"kony.i18n.getLocalizedString(lblCertTitle)",lblCertTitle:result["reconsider"][0]["certTitle"],lblTitleMajor:"kony.i18n.getLocalizedString(lblMajor)",lblMajor:result["reconsider"][0]["major"],lblTitleCountry:"kony.i18n.getLocalizedString(lblCountry)",lblCountry:result["reconsider"][0]["certCountry"],lblTitleObjectionType:"kony.i18n.getLocalizedString(lblObjectionType)",lblObjectionType:result["reconsider"][0]["objType"],lblTitleReason:"kony.i18n.getLocalizedString(lblReason)",lblReason:result["reconsider"][0]["objReason"],imgNext:"next.png",lblappno:result["reconsider"][0]["appno"],lblcertno:result["reconsider"][0]["certno"],lblcertissueinst:result["reconsider"][0]["certInstitute"]};
                            //frmCommitteesDecisionStaticPg.segCertificateDetails.setData(result.reconsider);
                            dismissLoadingIndicator();
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

function loadapplicantname() {
    try {
        showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));
        if (gblDeviceInfo != "tab") {
            var inputparam = {
                serviceID: "Select_App",
                appno: frmCommitteesDecision1.TxtApplicationNo.text
            };
            kony.print("inputparam are ***********", inputparam);
            appmiddlewareinvokerasync(inputparam, applicantnamecallback);
        } else {
            var inputparam = {
                serviceID: "Select_App",
                appno: frmCommitteesDecisionStaticPg.TxtApplicationNo.text
            };
            kony.print("inputparam are ***********", inputparam);
            appmiddlewareinvokerasync(inputparam, applicantnamecallback);
        }
    } catch (err) {
        displayError(err);
    }
}

function applicantnamecallback(status, result) {
    try {
        if (status == 400) {
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                kony.print("result data is------------", result);
                if (result["output"] == "SUCCESS") {
                    kony.print("success");
                    if (result["selectapp"] == undefined || result["selectapp"] == null) {
                        dismissLoadingIndicator();
                        alertDialog(kony.i18n.getLocalizedString("lblinvalidappno"));
                    } else {
                        appname = result["selectapp"][0]["name_arb"];
                        appno = result["selectapp"][0]["app_no"];
                        loadcertificatereconsider();
                        dismissLoadingIndicator();
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

function loadobjectiontype() {
    try {
        showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
        var inputparam = {
            serviceID: "Lookup_ObjectionType",
            user: "webservice",
            password: "wEbsErViCe$35#"
        };
        kony.print("inputparam are ***********", inputparam);
        appmiddlewareinvokerasync(inputparam, objectiontypecallback);
    } catch (err) {
        displayError(err);
    }
}

function objectiontypecallback(status, result) {
    try {
        if (status == 400) {
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                kony.print("result data is------------", result);
                if (result["output"] == "SUCCESS") {
                    var comboboxData = [];
                    comboboxData = [{
                        "mykey": "0",
                        "myvalue": kony.i18n.getLocalizedString("lblpleaseselectobjectiontype")
                    }];
                    for (var i = 0; i < result["objtype"].length; i++) {
                        var key = result["objtype"][i]["obj_id"];
                        var value = "";
                        if (kony.i18n.getCurrentLocale() == "ar_SA") value = result["objtype"][i]["objname_ar"];
                        else value = result["objtype"][i]["objname_en"];
                        comboboxData.push({
                            "mykey": key,
                            "myvalue": value
                        })
                    }
                    //mobile
                    if (gblDeviceInfo != "tab") {
                        frmCommitteesDecision2.dropdownObjectionType.masterDataMap = [comboboxData, "mykey", "myvalue"];
                        frmCommitteesDecision2.dropdownObjectionType.selectedKeyValue = "0";
                        dismissLoadingIndicator();
                    } else {
                        frmCommitteesDecisionStaticPg.dropdownObjectionType.masterDataMap = [comboboxData, "mykey", "myvalue"];
                        frmCommitteesDecisionStaticPg.dropdownObjectionType.selectedKeyValue = "0";
                        dismissLoadingIndicator();
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

function submitreconsiderapp() {
    try {
        showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));
        //input for mobile
        if (gblDeviceInfo != "tab") {
            frmName = frmCommitteesDecision2;
            applicantno = frmCommitteesDecision2.lblApplicantNo.text;
            var inputparam = {
                serviceID: "Equ_Insert_Reconsider",
                username: "webservice",
                password: "wEbsErViCe$35#",
                appno: applicantno,
                certno: frmCommitteesDecision2.lblcertno.text,
                certissorgcnt: frmCommitteesDecision2.lblcertissueorgcnt.text,
                certtitle: frmCommitteesDecision2.lblCertificateTitleVal.text,
                committeeno: "1234",
                certissueinst: frmCommitteesDecision2.lblcertissueinst.text,
                major: frmCommitteesDecision2.lblMajorval.text,
                objtype: frmCommitteesDecision2.dropdownObjectionType.selectedKey,
                objreason: frmCommitteesDecision2.txtboxObjectionReasons.text
            };
            var test = JSON.stringify(inputparam);
            kony.print(test);
            kony.print("inputparam are *********** " + inputparam);
            appmiddlewareinvokerasync(inputparam, reconsidercallback);
        } else {
            frmName = frmCommitteesDecisionStaticPg;
            applicantno = frmCommitteesDecisionStaticPg.lblApplicantNo.text;
            var inputparam = {
                serviceID: "Equ_Insert_Reconsider",
                username: "webservice",
                password: "wEbsErViCe$35#",
                appno: applicantno,
                certno: frmCommitteesDecisionStaticPg.lblcertno.text,
                certissorgcnt: frmCommitteesDecisionStaticPg.lblcertissueorgcnt.text,
                certtitle: frmCommitteesDecisionStaticPg.lblCertificateTitleVal.text,
                committeeno: "1234",
                certissueinst: frmCommitteesDecisionStaticPg.lblcertissueinst.text,
                major: frmCommitteesDecisionStaticPg.lblMajorval.text,
                objtype: frmCommitteesDecisionStaticPg.dropdownObjectionType.selectedKey,
                objreason: frmCommitteesDecisionStaticPg.txtboxObjectionReasons.text
            };
            kony.print("inputparam are ***********", inputparam);
            appmiddlewareinvokerasync(inputparam, reconsidercallback);
        }
    } catch (err) {
        displayError(err);
    }
}

function reconsidercallback(status, result) {
    try {
        if (status == 400) {
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                kony.print("result data is------------ " + result);
                kony.print("result output " + result["output"]);
                if (result["output"] == "SUCCESS") {
                    /*if(gblDeviceInfo!="tab")
						{
							kony.print("success");
							dismissLoadingIndicator();
							alertDialog(kony.i18n.getLocalizedString("lblreconsiderapp"));
							frmMainMenu.show();
						}
						else
						{
							kony.print("success");
							dismissLoadingIndicator();
							alertDialog(kony.i18n.getLocalizedString("lblreconsiderapp"));
							frmMainMenu.show();
						}*/
                    dismissLoadingIndicator();
                    showErrMsgWithHandle(kony.i18n.getLocalizedString("lblreconsiderapp"), goToManiMenu); // , invokeUploadFileRequest(frmName,applicantno));
                } else {
                    dismissLoadingIndicator();
                    showErrMsgWithHandle(kony.i18n.getLocalizedString("loadingIndicator"), goToManiMenu);
                }
            } else {
                dismissLoadingIndicator();
                showErrMsgWithHandle(kony.i18n.getLocalizedString("loadingIndicator"), goToManiMenu);
            }
        }
    } catch (err) {
        displayError(err);
    }
}

function committeedecisionappnovalidation() {
    curFrm = kony.application.getCurrentForm();
    if (curFrm.TxtApplicationNo.text == null || curFrm.TxtApplicationNo.text.length != 9) {
        alertDialog(kony.i18n.getLocalizedString("lblLengthShouldbe9"));
        gblErrWidgetRefId = curFrm.TxtApplicationNo;
        return false;
    } else {
        loadapplicantname();
    }
}

function committeedecisionsumbitvalidation() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        curFrm = kony.application.getCurrentForm();
        if (curFrm.dropdownObjectionType.selectedKey == "0") {
            alertDialog(kony.i18n.getLocalizedString("lblpleaseselectobjectiontype"));
            gblErrWidgetRefId = curFrm.dropdownObjectionType;
            return false;
        } else if (curFrm.txtboxObjectionReasons.text == "" || curFrm.txtboxObjectionReasons.text == null) {
            alertDialog(kony.i18n.getLocalizedString("lblpleaseenterobjreason"));
            gblErrWidgetRefId = curFrm.txtboxObjectionReasons;
            return false;
        } else {
            submitreconsiderapp();
        }
    } else {
        alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
    }
}