/*function submit(){
	var areFieldsProper = checkFieldsRequestStep1();
	if(areFieldsProper == false)
		return;
		
	invokeInsertCertRequest();

}*/
//certificate request validations
var FLAG = 0;

function checkFieldsRequestStep1() {
    var curFrm;
    curFrm = kony.application.getCurrentForm();
    switch (curFrm["id"]) {
    case "frmCertRequest":
    case "frmCertRequest1":
        if (curFrm.txtuniversity = undefined || curFrm.txtuniversity.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterUniversity"));
            gblErrWidgetRefId = curFrm.txtuniversity;
            return false;
        } else if (curFrm.dropdowncountryprevdegree != undefined && curFrm.dropdowncountryprevdegree.selectedKey == 0) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCountry"));
            gblErrWidgetRefId = curFrm.dropdowncountryprevdegree;
            return false;
        } else if (curFrm.txtDegree = undefined || curFrm.txtDegree.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterDegree"));
            gblErrWidgetRefId = curFrm.txtDegree;
            return false;
        } else if (curFrm.txtMajor = undefined || curFrm.txtMajor.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMajor"));
            gblErrWidgetRefId = curFrm.txtMajor;
            return false;
        } else if (curFrm.txtYears = undefined || curFrm.txtYears.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterNoOfYears"));
            gblErrWidgetRefId = curFrm.txtYears;
            return false;
        } else if ((curFrm.rbYes.src == "checked.png") & curFrm.segAttachment.data == null) {
            alertDialog(kony.i18n.getLocalizedString("errMsgPleaseSelectFile"));
            return false;
        } else {
            if (gblDeviceInfo != "tab") {
                frmCertRequest2.show();
                break;
            }
        }
    case "frmCertRequest2":
        if (curFrm.txtrequiredUniversity = undefined || curFrm.txtrequiredUniversity.text == "") {
            alertDialog("Please Enter University");
            gblErrWidgetRefId = curFrm.txtrequiredUniversity;
            return false;
        } else if (curFrm.dropdownrequiredCountry.selectedKey == 0) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCountry"));
            gblErrWidgetRefId = curFrm.dropdownrequiredCountry;
            return false;
        } else if (curFrm.dropdownStudyLevel != undefined && curFrm.dropdownStudyLevel.selectedKey == 0) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"));
            gblErrWidgetRefId = curFrm.dropdownStudyLevel;
            return false;
        } else if (curFrm.txtrequiredMajor = undefined || curFrm.txtrequiredMajor.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMajor"));
            gblErrWidgetRefId = curFrm.txtrequiredMajor;
            return false;
        } else if (curFrm.txtrequiredNoofYears = undefined || curFrm.txtrequiredNoofYears.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterNoOfYears"));
            gblErrWidgetRefId = curFrm.txtrequiredNoofYears;
            return false;
        } else if (curFrm.txtSemester = undefined || curFrm.txtSemester.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblNoOfSem"));
            gblErrWidgetRefId = curFrm.txtSemester;
            return false;
        } else if (curFrm.txtCreditHours = undefined || curFrm.txtCreditHours.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterCreditHrs"));
            gblErrWidgetRefId = curFrm.txtCreditHours;
            return false; //full time, half time
        } else if (curFrm.dropdownProgram != undefined && curFrm.dropdownProgram.selectedKey == 0) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectProgram"));
            gblErrWidgetRefId = curFrm.dropdownProgram;
            return false;
        } else {
            if (gblDeviceInfo != "tab") {
                frmCertRequest3.show();
                break;
            }
        }
    case "frmCertRequest3":
        if (curFrm.txtName = undefined || curFrm.txtName.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterName"));
            gblErrWidgetRefId = curFrm.txtName;
            return false;
        } else if (!ValidateLength(curFrm.txtTelephoneAreaCode.text, 2)) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone"));
            gblErrWidgetRefId = curFrm.txtTelephoneAreaCode;
            return false;
        } else if (!ValidateLength(curFrm.txtTelephoneNumber.text, 7)) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone"));
            gblErrWidgetRefId = curFrm.txtTelephoneNumber;
            return false;
        } else if (!ValidateLength(curFrm.txtmobilenumber.text, 7)) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidMobileNo"));
            gblErrWidgetRefId = curFrm.txtmobilenumber;
            return false;
        } else if (curFrm.txtFax = undefined || curFrm.txtFax.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterFax"));
            gblErrWidgetRefId = curFrm.txtFax;
            return false;
        } else if (curFrm.txtIdentityNo = undefined || curFrm.txtIdentityNo.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterIdentityNo"));
            gblErrWidgetRefId = curFrm.txtIdentityNo;
            return false;
        } else if (curFrm.txtemail != undefined && !validateUserEmail(curFrm.txtemail.text)) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmail"));
            gblErrWidgetRefId = curFrm.txtemail;
            return false;
        } else if (curFrm.dropdownApplicantCountry != undefined && curFrm.dropdownApplicantCountry.selectedKey == 0) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCountry"));
            gblErrWidgetRefId = curFrm.dropdownApplicantCountry;
            return false;
        } else if (curFrm.txtRemarks = undefined || curFrm.txtRemarks.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterRemarks"));
            gblErrWidgetRefId = curFrm.txtRemarks;
            return false;
        } else {
            invokeInsertCertRequest();
        }
    }
}

function invokeInsertCertRequest() {
    try {
        showLoadingIndicator(kony.i18n.getLocalizedString("lblProcessingReq"));
        if (gblDeviceInfo == "tab") {
            var inputparam = [];
            inputparam["serviceID"] = "Equ_Insert_EquiMApp";
            inputparam["user"] = "Webservice";
            inputparam["password"] = "wEbsErViCe$35#";
            inputparam["DegreeApplicationID"] = "0"; //Need Clarification
            inputparam["CurrMajor"] = frmCertRequest.txtMajor.text;
            inputparam["currUnversity"] = frmCertRequest.txtuniversity.text;
            inputparam["StudyLevel"] = frmCertRequest.dropdownStudyLevel.selectedKey;
            inputparam["CurrNoYears"] = frmCertRequest.txtYears.text;
            inputparam["EQUALIZED"] = (frmCertRequest.rbYes.src == "checked.png") ? "0" : "1";
            inputparam["Major"] = frmCertRequest.txtrequiredMajor.text;
            inputparam["NoYears"] = frmCertRequest.txtrequiredNoofYears.text;
            inputparam["CreditHours"] = frmCertRequest.txtCreditHours.text;
            inputparam["NoSemester"] = frmCertRequest.txtSemester.text;
            inputparam["Unversity"] = frmCertRequest.txtrequiredUniversity.text;
            inputparam["Country"] = frmCertRequest.dropdownrequiredCountry.selectedKey;
            inputparam["StudyType"] = (frmCertRequest.rdimgAttestInside.src == "checked.png") ? "0" : "1";
            inputparam["Programme"] = frmCertRequest.dropdownProgram.selectedKey;
            inputparam["ApplicationName"] = frmCertRequest.txtName.text;
            inputparam["MobileExt"] = frmCertRequest.dropdownmobileareacode.selectedKey;
            inputparam["Mobile"] = frmCertRequest.txtmobilenumber.text;
            inputparam["Phone"] = frmCertRequest.txtTelephoneAreaCode.text + frmCertRequest.txtTelephoneNumber.text;
            inputparam["Fax"] = frmCertRequest.txtFax.text;
            inputparam["Email"] = frmCertRequest.txtemail.text;
            inputparam["CurrYear"] = "" + parseInt(new Date().getFullYear());
            inputparam["CurrCountry"] = frmCertRequest.dropdowncountryprevdegree.selectedKey;
            inputparam["NationalityID"] = frmCertRequest.dropdownApplicantCountry.selectedKey;
            inputparam["GENDERID"] = (frmCertRequest.rbimgPublic.src == "checked.png") ? "0" : "1";
            inputparam["NOTES"] = frmCertRequest.txtRemarks.text;
            inputparam["IDENTITYNO"] = frmCertRequest.txtIdentityNo.text;
            inputparam["CurrDegree"] = frmCertRequest.txtDegree.text;
            kony.print("input params are tab--------------", inputparam);
        } else {
            var inputparam = [];
            inputparam["serviceID"] = "Insert_EquiMApp";
            inputparam["user"] = "Webservice";
            inputparam["password"] = "wEbsErViCe$35#";
            inputparam["DegreeApplicationID"] = "0"; //Need Clarification
            inputparam["CurrMajor"] = frmCertRequest1.txtMajor.text;
            inputparam["currUnversity"] = frmCertRequest1.txtuniversity.text;
            inputparam["EQUALIZED"] = (frmCertRequest1.rbYes.src == "checked.png") ? "0" : "1";
            inputparam["StudyLevel"] = frmCertRequest2.dropdownStudyLevel.selectedKey;
            inputparam["CurrNoYears"] = frmCertRequest1.txtYears.text;
            inputparam["Major"] = frmCertRequest2.txtrequiredMajor.text;
            inputparam["NoYears"] = frmCertRequest2.txtrequiredNoofYears.text;
            inputparam["CreditHours"] = frmCertRequest2.txtCreditHours.text;
            inputparam["NoSemester"] = frmCertRequest2.txtSemester.text;
            inputparam["Unversity"] = frmCertRequest2.txtrequiredUniversity.text;
            inputparam["Country"] = frmCertRequest2.dropdownrequiredCountry.selectedKey;
            inputparam["StudyType"] = (frmCertRequest2.rdimgAttestInside.src == "checked.png") ? "0" : "1";
            inputparam["Programme"] = frmCertRequest2.dropdownProgram.selectedKey;
            inputparam["ApplicationName"] = frmCertRequest3.txtName.text;
            inputparam["MobileExt"] = frmCertRequest3.dropdownmobileareacode.selectedKey;
            inputparam["Mobile"] = frmCertRequest3.txtmobilenumber.text;
            inputparam["Phone"] = frmCertRequest3.txtTelephoneAreaCode.text + frmCertRequest3.txtTelephoneNumber.text;
            inputparam["Fax"] = frmCertRequest3.txtFax.text;
            inputparam["Email"] = frmCertRequest3.txtemail.text;
            inputparam["CurrYear"] = "" + parseInt(new Date().getFullYear());
            inputparam["CurrCountry"] = frmCertRequest1.dropdowncountryprevdegree.selectedKey;
            inputparam["NationalityID"] = frmCertRequest3.dropdownApplicantCountry.selectedKey;
            inputparam["GENDERID"] = (frmCertRequest3.rbimgPublic.src == "checked.png") ? "0" : "1";
            inputparam["NOTES"] = frmCertRequest3.txtRemarks.text;
            inputparam["IDENTITYNO"] = frmCertRequest3.txtIdentityNo.text;
            inputparam["CurrDegree"] = frmCertRequest1.txtDegree.text;
            kony.print("input params are mob--------------", inputparam);
        }
        appmiddlewareinvokerasync(inputparam, insertCertRequestCallback);
    } catch (err) {
        displayError(err);
    }
}

function insertCertRequestCallback(status, result) {
    try {
        kony.print("status==>>" + status);
        kony.print("result data is------------", result);
        kony.print("result data JsonStringify is------------", JSON.stringify(result));
        if (status == 400) {
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                kony.print("---DegreeApplicationID--" + result["DegreeApplicationID"]);
                kony.print("---Status--" + result["Status"]);
                if (result["Status"] == "SUCCESS") {
                    kony.print("---DegreeApplicationID--" + result["DegreeApplicationID"]);
                    alert(kony.i18n.getLocalizedString("msgApplicationSuccess") + result["DegreeApplicationID"]);
                } else {
                    alert(result["Status"]);
                }
                dismissLoadingIndicator();
            } else {
                kony.print("result data is------------", JSON.stringify(result));
                kony.print("---DegreeApplicationID--" + result["DegreeApplicationID"]);
                kony.print("---Status--" + result["Status"]);
                dismissLoadingIndicator();
                alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
                frmMainMenu.show();
            }
        }
    } catch (err) {
        displayError(err);
    }
}

function invokeCertReqCompositService() {
    try {
        if (FLAG == 0) {
            showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
            var inputparam = {
                serviceID: "getCountryandAreaCode"
            };
            kony.print("inputparam are ***********", inputparam);
            appmiddlewareinvokerasync(inputparam, compositCertReqCallback);
            FLAG = 1;
        }
    } catch (err) {
        displayError(err);
    }
}

function compositCertReqCallback(status, result) {
    try {
        if (status == 400) {
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                kony.print("result data is------------", result);
                if (result["outputCountry"] == "SUCCESS" && result["output"] == "SUCCESS") {
                    var comboboxCountryData = [];
                    for (var i = 0; i < result["countriesList"].length; i++) {
                        var key = result["countriesList"][i]["countryID"];
                        var value = "";
                        if (kony.i18n.getCurrentLocale() == "ar_SA") value = result["countriesList"][i]["countyName_ar"];
                        else value = result["countriesList"][i]["countyName_en"];
                        comboboxCountryData.push({
                            "mykey": key,
                            "myvalue": value
                        })
                    }
                    /*
					var comboboxInstitutesData = [];
					for(var i=0;i<result["instList"].length;i++){
						var key = result["instList"][i]["instNo"];
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA")
							value = result["instList"][i]["instName_ar"];
						else
							value = result["instList"][i]["instName_en"];
						comboboxInstitutesData.push({"mykey":key,"myvalue":value})
					
					}
					*/
                    var comboboxMobCodesData = [];
                    for (var i = 0; i < result["mobCodes"].length; i++) {
                        var key = result["mobCodes"][i]["mobileCode"];
                        var value = result["mobCodes"][i]["mobileCode"];
                        comboboxMobCodesData.push({
                            "mykey": key,
                            "myvalue": value
                        })
                    }
                    if (gblDeviceInfo != "tab") {
                        frmCertRequest1.segAttachment.data = null;
                        frmCertRequest1.dropdowncountryprevdegree.masterDataMap = [comboboxCountryData, "mykey", "myvalue"];
                        frmCertRequest2.dropdownrequiredCountry.masterDataMap = [comboboxCountryData, "mykey", "myvalue"];
                        frmCertRequest3.dropdownApplicantCountry.masterDataMap = [comboboxCountryData, "mykey", "myvalue"];
                        frmCertRequest3.dropdownmobileareacode.masterDataMap = [comboboxMobCodesData, "mykey", "myvalue"];
                        dismissLoadingIndicator();
                    } else {
                        frmCertRequest.segAttachment.data = null;
                        frmCertRequest.dropdowncountryprevdegree.masterDataMap = [comboboxCountryData, "mykey", "myvalue"];
                        frmCertRequest.dropdownrequiredCountry.masterDataMap = [comboboxCountryData, "mykey", "myvalue"];
                        frmCertRequest.dropdownApplicantCountry.masterDataMap = [comboboxCountryData, "mykey", "myvalue"];
                        //frmCertRequest.dropdownInstitute.masterDataMap=[comboboxInstitutesData,"mykey","myvalue"];
                        frmCertRequest.dropdownmobileareacode.masterDataMap = [comboboxMobCodesData, "mykey", "myvalue"];
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

function getCerificateRequestStudyLevels() {
    kony.print("Inside getCerificateRequestStudyLevels");
    if (frmCertRequest.dropdownInstitute.selectedKey = undefined || frmCertRequest.dropdownInstitute.selectedKey == 0) {
        alert("Please select Institute");
    } else {
        try {
            showLoadingIndicator(kony.i18n.getLocalizedString("lblLoadingStudyLevel"));
            var inputparam = {
                serviceID: "Lookup_StudyLevel",
                user: "webservice",
                password: "wEbsErViCe$35#"
            };
            kony.print("inputparam are ***********", inputparam);
            appmiddlewareinvokerasync(inputparam, getCerificateRequestStudyLevelsCallback);
        } catch (err) {
            displayError(err);
        }
    }
}

function getCerificateRequestStudyLevelsCallback(status, result) {
    try {
        if (status == 400) {
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                kony.print("result data is------------", result["studyLevelList"]);
                if (result["outputstudylevel"] == "SUCCESS") {
                    var comboboxData = [];
                    for (var i = 0; i < result["studyLevelList"].length; i++) {
                        var key = result["studyLevelList"][i]["studyLevelID"];
                        var value = "";
                        if (kony.i18n.getCurrentLocale() == "ar_SA") value = result["studyLevelList"][i]["studyLevel_ar"];
                        else value = result["studyLevelList"][i]["studyLevel_en"];
                        comboboxData.push({
                            "mykey": key,
                            "myvalue": value
                        })
                    }
                    if (gblDeviceInfo != "tab") {
                        frmCertRequest2.dropdownStudyLevel.masterDataMap = [comboboxData, "mykey", "myvalue"];
                    } else {
                        frmCertRequest.dropdownStudyLevel.masterDataMap = [comboboxData, "mykey", "myvalue"];
                    }
                    dismissLoadingIndicator();
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
/*
            function getCerificateRequestMajor(){
            	kony.print("Inside getCerificateRequestMajor");
            	if(frmCertRequest.dropdownStudyLevel.selectedKey = undefined || frmCertRequest.dropdownStudyLevel.selectedKey == 0) {
            		alert("Please select Study Level");
            	} else {
            		try{
            			showLoadingIndicator(kony.i18n.getLocalizedString("lblLoadingMajor"));
            			var inputparam = {
            		        serviceID: "Select_Major",
            		        instNo:frmCertRequest.dropdownInstitute.selectedKey,
            		        studyLevel:frmCertRequest.dropdownStudyLevel.selectedKey
            		            
            		    };
            		    kony.print("inputparam are ***********",inputparam);
            			appmiddlewareinvokerasync(inputparam, getCerificateRequestMajorCallback);
            		}
            		catch(err){
            			displayError(err);
            		}
            	}
            }

            function getCerificateRequestMajorCallback(status, result) {
            	try{
            		if (status == 400) {
            			if ((kony.os.toNumber(result.opstatus) == 0)) {
            				kony.print("result data is------------",result["pgList"]);
            				if(result["output"] == "SUCCESS"){
            					var comboboxData = [];
            					for(var i=0;i<result["pgList"].length;i++){
            						var key = result["pgList"][i]["pgNo"];
            						var value = "";
            						if (kony.i18n.getCurrentLocale() == "ar_SA")
            							value = result["pgList"][i]["pgName_ar"];
            						else
            							value = result["pgList"][i]["pgName_en"];
            						
            						comboboxData.push({"mykey":key,"myvalue":value})
            					
            					}
            					
            					frmCertRequest.dropdownMajor.masterDataMap=[comboboxData,"mykey","myvalue"];
            					dismissLoadingIndicator();
            				}
            				else{
            					dismissLoadingIndicator();
            					alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
            				}
            				
            			}
            			else{
            				dismissLoadingIndicator();
            				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
            			}
            		}
            	}
            	catch(err){
            		displayError(err);
            	}
            }

            function getCerificateRequestSubMajor(){
            	kony.print("Inside getCerificateRequestSubMajor");
            	if(frmCertRequest.dropdownMajor.selectedKey = undefined || frmCertRequest.dropdownMajor.selectedKey == 0) {
            		alert("Please select Major");
            	} else {
            		try{
            			showLoadingIndicator(kony.i18n.getLocalizedString("lblLoadingMajor"));
            			var inputparam = {
            		        serviceID: "Select_SubMajor",
            		        instNo:frmCertRequest.dropdownInstitute.selectedKey,
            		        studyLevel:frmCertRequest.dropdownStudyLevel.selectedKey,
            		        majorID:frmCertRequest.dropdownMajor.selectedKey
            		            
            		    };
            		    kony.print("inputparam are ***********",inputparam);
            			appmiddlewareinvokerasync(inputparam, getCerificateRequestSubMajorCallback);
            		}
            		catch(err){
            			displayError(err);
            		}
            	}
            }

            function getCerificateRequestSubMajorCallback(status, result) {
            	try{
            		if (status == 400) {
            			if ((kony.os.toNumber(result.opstatus) == 0)) {
            				kony.print("result data is------------",result["pgList"]);
            				if(result["output"] == "SUCCESS"){
            					var comboboxData = [];
            					for(var i=0;i<result["pgList"].length;i++){
            						var key = result["pgList"][i]["pgNo"];
            						var value = "";
            						if (kony.i18n.getCurrentLocale() == "ar_SA")
            							value = result["pgList"][i]["pgName_ar"];
            						else
            							value = result["pgList"][i]["pgName_en"];
            						
            						comboboxData.push({"mykey":key,"myvalue":value})
            					
            					}
            					
            					frmCertRequest.dropdownProgram.masterDataMap=[comboboxData,"mykey","myvalue"];
            					dismissLoadingIndicator();
            				}
            				else{
            					dismissLoadingIndicator();
            					alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
            				}
            				
            			}
            			else{
            				dismissLoadingIndicator();
            				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
            			}
            		}
            	}
            	catch(err){
            		displayError(err);
            	}
            }
            */
function clearInquirycerttab() {
    frmCertRequest.txtuniversity.text = "";
    frmCertRequest.dropdowncountryprevdegree.selectedKey = "0";
    frmCertRequest.txtDegree.text = "";
    frmCertRequest.txtMajor.text = "";
    frmCertRequest.txtYears.text = "";
    frmCertRequest.rbYes.src = "checked.png";
    frmCertRequest.rbNo.src = "unchecked.png";
    frmCertRequest.segAttachment.data = null;
    frmCertRequest.hboxChooseFile.isVisible = true;
    frmCertRequest.txtrequiredUniversity.text = "";
    frmCertRequest.dropdownrequiredCountry.selectedKey = "0";
    frmCertRequest.dropdownStudyLevel.selectedKey = "0";
    frmCertRequest.txtrequiredMajor.text = "";
    frmCertRequest.txtrequiredNoofYears.text = "";
    frmCertRequest.txtSemester.text = "";
    frmCertRequest.txtCreditHours.text = "";
    frmCertRequest.rdimgAttestInside.src = "checked.png";
    frmCertRequest.rdimgAttestOutside.src = "unchecked.png";
    frmCertRequest.dropdownProgram.selectedKey = "0";
    frmCertRequest.txtName.text = "";
    frmCertRequest.txtmobilenumber.text = "";
    frmCertRequest.txtTelephoneAreaCode.text = "";
    frmCertRequest.txtTelephoneNumber.text = "";
    frmCertRequest.txtFax.text = "";
    frmCertRequest.rbimgPublic.src = "checked.png";
    frmCertRequest.rbimgprivate.src = "unchecked.png";
    frmCertRequest.txtIdentityNo.text = "";
    frmCertRequest.txtemail.text = "";
    frmCertRequest.dropdownApplicantCountry.selectedKey = "0";
    frmCertRequest.txtRemarks.text = "";
}

function clearInquirycertmob() {
    frmCertRequest1.txtuniversity.text = "";
    frmCertRequest1.dropdowncountryprevdegree.selectedKey = "0";
    frmCertRequest1.txtDegree.text = "";
    frmCertRequest1.txtMajor.text = "";
    frmCertRequest1.txtYears.text = "";
    frmCertRequest1.rbYes.src = "checked.png";
    frmCertRequest1.rbNo.src = "unchecked.png";
    frmCertRequest1.segAttachment.data = null;
    frmCertRequest1.hboxChooseFile.isVisible = true;
    frmCertRequest2.txtrequiredUniversity.text = "";
    frmCertRequest2.dropdownrequiredCountry.selectedKey = "0";
    frmCertRequest2.dropdownStudyLevel.selectedKey = "0";
    frmCertRequest2.txtrequiredMajor.text = "";
    frmCertRequest2.txtrequiredNoofYears.text = "";
    frmCertRequest2.txtSemester.text = "";
    frmCertRequest2.txtCreditHours.text = "";
    frmCertRequest2.rdimgAttestInside.src = "checked.png";
    frmCertRequest2.rdimgAttestOutside.src = "unchecked.png";
    frmCertRequest2.dropdownProgram.selectedKey = "0";
    frmCertRequest3.txtName.text = "";
    frmCertRequest3.txtmobilenumber.text = "";
    frmCertRequest3.txtTelephoneAreaCode.text = "";
    frmCertRequest3.txtTelephoneNumber.text = "";
    frmCertRequest3.txtFax.text = "";
    frmCertRequest3.rbimgPublic.src = "checked.png";
    frmCertRequest3.rbimgprivate.src = "unchecked.png";
    frmCertRequest3.txtIdentityNo.text = "";
    frmCertRequest3.txtemail.text = "";
    frmCertRequest3.dropdownApplicantCountry.selectedKey = "0";
    frmCertRequest3.txtRemarks.text = "";
}

function checkVisibility() {
    var curFrm = kony.application.getCurrentForm();
    if (curFrm.rbYes.src == "checked.png") {
        curFrm.hboxChooseFile.setVisibility(true);
    } else {
        curFrm.hboxChooseFile.setVisibility(false);
    }
}