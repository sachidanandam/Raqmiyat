var gvCertEQuiReqDoc = [];
var gvCertEQuiReqDocCurtDoc = "";

function loadreqdocs() {
    try {
        var curFrm = "";
        gvCertEQuiReqDoc = [];
        gvCertEQuiReqDocCurtDoc == "";
        var cnt = 0;
        //if(gvCertEQuiReqDoc.length > 0 )
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
        showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
        //input param for mobile
        var inputparam = {
            serviceID: "Equ_Select_ReqDocuments",
            countryid: "77",
            //replace
            studylevelid: "1",
            //replace
            username: "webservice",
            password: "wEbsErViCe$35#"
        };
        kony.print("inputparam for Equ_Select_ReqDocuments are ***********", inputparam);
        appmiddlewareinvokerasync(inputparam, reqdocscallback);
    } catch (err) {
        displayError(err);
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
                    kony.print("3");
                    if (result["reqdocs"] == undefined || result["reqdocs"] == null) {
                        dismissLoadingIndicator();
                        alertDialog(kony.i18n.getLocalizedString("lblnorecordsfound"));
                    } else {
                        if (gblDeviceInfo != "tab") {
                            var setData = [];
                            kony.print("4");
                            if (result["reqdocs"] != null) {
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
                                //reqdocumentspopus.SegReqDocs.setData(setData);
                                gvCertEQuiReqDoc = setData;
                                //reqdocumentspopus.show();
                                dismissLoadingIndicator();
                            }
                        }
                        if (gvCertEQuiReqDoc != null || gvCertEQuiReqDoc != "") {
                            if (gvCertEQuiReqDoc.length > 0) {
                                kony.print("111111111111");
                                if (gblDeviceInfo != "tab") {
                                    curFrm = frmCerEquivalencyAttach;
                                } else {
                                    curFrm = frmCertEquivalencyTab2;
                                }
                                if (gvCertEQuiReqDocCurtDoc == null || gvCertEQuiReqDocCurtDoc == "") gvCertEQuiReqDocCurtDoc = 0;
                                else kony.print("22222222222");
                                gvCertEQuiReqDocCurtDoc = curFrm.segAttachment.data.length;
                                gvCertEQuiReqDocCurtDoc++;
                                curFrm.txtDescription.text = gvCertEQuiReqDoc[gvCertEQuiReqDocCurtDoc]["lblDescVal"];
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