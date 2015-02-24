/*function submit(){
	var areFieldsProper = checkFieldsRequestStep1();
	if(areFieldsProper == false)
		return;
		
	invokeInsertCertRequest();

}*/
//certificate request validations
var FLAG = 0;
var DegreeApplicantID = 0;
var frmName = null;
var equalized;
var deviceName = kony.os.deviceInfo().name;

function checkFieldsRequestStep1() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
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
            } else if (curFrm.txtYears = undefined || curFrm.txtYears.text == "" || (kony.os.toNumber(curFrm.txtYears.text)) == 0) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterNoOfYears"));
                gblErrWidgetRefId = curFrm.txtYears;
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
            } else if (curFrm.txtrequiredNoofYears = undefined || curFrm.txtrequiredNoofYears.text == "" || (kony.os.toNumber(curFrm.txtrequiredNoofYears.text)) == 0) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterNoOfYears"));
                gblErrWidgetRefId = curFrm.txtrequiredNoofYears;
                return false;
            } else if (curFrm.txtSemester = undefined || curFrm.txtSemester.text == "" || (kony.os.toNumber(curFrm.txtSemester.text)) == 0) {
                alertDialog(kony.i18n.getLocalizedString("lblNoOfSem"));
                gblErrWidgetRefId = curFrm.txtSemester;
                return false;
            } else if (curFrm.txtCreditHours = undefined || curFrm.txtCreditHours.text == "" || (kony.os.toNumber(curFrm.txtCreditHours.text)) == 0) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterCreditHrs"));
                gblErrWidgetRefId = curFrm.txtCreditHours;
                return false; //full time, half time
            } else if (curFrm.rdimgAttestInside.src == "unchecked.png" && curFrm.rdimgAttestOutside.src == "unchecked.png") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectTypeStudy"));
                gblErrWidgetRefId = curFrm.rdimgAttestInside;
                return false;
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
            } else if (!ValidateLength(curFrm.txtmobilenumber.text, 7)) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidMobileNo"));
                gblErrWidgetRefId = curFrm.txtmobilenumber;
                return false;
            } else if (!ValidateLength(curFrm.txtTelephoneAreaCode.text, 2)) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone"));
                gblErrWidgetRefId = curFrm.txtTelephoneAreaCode;
                return false;
            } else if (!ValidateLength(curFrm.txtTelephoneNumber.text, 7)) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone"));
                gblErrWidgetRefId = curFrm.txtTelephoneNumber;
                return false;
            } else if (curFrm.txtFax = undefined || curFrm.txtFax.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterFax"));
                gblErrWidgetRefId = curFrm.txtFax;
                return false;
            } else if (curFrm.rbimgPublic.src == "unchecked.png" && curFrm.rbimgprivate.src == "unchecked.png") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectGender"));
                gblErrWidgetRefId = curFrm.rbimgPublic;
                return false;
            } else if (curFrm.txtemiratesid1 != undefined && curFrm.txtemiratesid1.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
                gblErrWidgetRefId = curFrm.txtemiratesid1;
                return false;
            } else if (!ValidateLength(curFrm.txtemiratesid1.text, 3)) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"));
                gblErrWidgetRefId = curFrm.txtemiratesid1;
                return false;
            } else if (curFrm.txtemiratesid2 != undefined && curFrm.txtemiratesid2.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
                gblErrWidgetRefId = curFrm.txtemiratesid2;
                return false;
            } else if (!ValidateLength(curFrm.txtemiratesid2.text, 4)) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
                gblErrWidgetRefId = curFrm.txtemiratesid2;
                return false;
            } else if (curFrm.txtemiratesid3 != undefined && curFrm.txtemiratesid3.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
                gblErrWidgetRefId = curFrm.txtemiratesid3;
                return false;
            } else if (!ValidateLength(curFrm.txtemiratesid3.text, 7)) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
                gblErrWidgetRefId = curFrm.txtemiratesid3;
                return false;
            } else if (curFrm.txtemiratesid4 != undefined && curFrm.txtemiratesid4.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
                gblErrWidgetRefId = curFrm.txtemiratesid4;
                return false;
            } else if (!ValidateLength(curFrm.txtemiratesid4.text, 1)) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"));
                gblErrWidgetRefId = curFrm.txtemiratesid4;
                return false;
            } else if (curFrm.txtemail != undefined && !validateUserEmail(curFrm.txtemail.text)) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmail"));
                gblErrWidgetRefId = curFrm.txtemail;
                return false;
            } else if (curFrm.dropdownApplicantCountry != undefined && curFrm.dropdownApplicantCountry.selectedKey == 0) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCountry"));
                gblErrWidgetRefId = curFrm.dropdownApplicantCountry;
                return false;
                /*            } else if (curFrm.txtRemarks = undefined || curFrm.txtRemarks.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterRemarks"));
                gblErrWidgetRefId = curFrm.txtRemarks;
                return false;*/
            } else if ((curFrm.rbYes.src == "checked.png") & curFrm.segAttachment.data == null) {
                alertDialog(kony.i18n.getLocalizedString("errMsgPleaseSelectFile"));
                return false;
            } else if (isCaptureMaxlengthExceeds == true && curFrm.rbYes.src == "checked.png") {
                alertDialog(kony.i18n.getLocalizedString("imgmaxsizeexceeds"));
                return false
            } else {
                invokeInsertCertRequest();
            }
        }
    } else {
        alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
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
            inputparam["DegreeApplicationID"] = "0";
            inputparam["CurrMajor"] = frmCertRequest.txtMajor.text;
            inputparam["currUnversity"] = frmCertRequest.txtuniversity.text;
            inputparam["StudyLevel"] = frmCertRequest.dropdownStudyLevel.selectedKey;
            inputparam["CurrNoYears"] = frmCertRequest.txtYears.text;
            inputparam["EQUALIZED"] = (frmCertRequest.rbYes.src == "checked.png") ? "0" : "1";
            equalized = inputparam["EQUALIZED"];
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
            //inputparam["IDENTITYNO"] = frmCertRequest.txtIdentityNo.text;
            inputparam["IDENTITYNO"] = frmCertRequest.txtemiratesid1.text.toString() + "-" + frmCertRequest.txtemiratesid2.text.toString() + "-" + frmCertRequest.txtemiratesid3.text.toString() + "-" + frmCertRequest.txtemiratesid4.text.toString();
            inputparam["CurrDegree"] = frmCertRequest.txtDegree.text;
            frmName = frmCertRequest;
            kony.print("input params are tab--------------", inputparam);
        } else {
            var inputparam = [];
            inputparam["serviceID"] = "Equ_Insert_EquiMApp";
            inputparam["user"] = "Webservice";
            inputparam["password"] = "wEbsErViCe$35#";
            inputparam["DegreeApplicationID"] = "0";
            inputparam["CurrMajor"] = frmCertRequest1.txtMajor.text;
            inputparam["currUnversity"] = frmCertRequest1.txtuniversity.text;
            inputparam["EQUALIZED"] = (frmCertRequest3.rbYes.src == "checked.png") ? "0" : "1";
            equalized = inputparam["EQUALIZED"];
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
            //inputparam["IDENTITYNO"] = frmCertRequest3.txtIdentityNo.text;
            inputparam["IDENTITYNO"] = frmCertRequest3.txtemiratesid1.text.toString() + "-" + frmCertRequest3.txtemiratesid2.text.toString() + "-" + frmCertRequest3.txtemiratesid3.text.toString() + "-" + frmCertRequest3.txtemiratesid4.text.toString();
            inputparam["CurrDegree"] = frmCertRequest1.txtDegree.text;
            frmName = frmCertRequest3;
            kony.print("input params are mob--------------", inputparam);
        }
        gblNoOfDocs = "1";
        appmiddlewareinvokerasync(inputparam, insertCertRequestCallback);
    } catch (err) {
        displayError(err);
    }
}

function insertCertRequestCallback(status, result) {
    try {
        if (gblDeviceInfo != "tab") frmName = frmCertRequest3;
        else frmName = frmCertRequest;
        kony.print("status==>>" + status);
        kony.print("result data is------------", result);
        kony.print("result data JsonStringify is------------", JSON.stringify(result));
        if (status == 400) {
            kony.print("---DegreeApplicationID--" + result["DegreeApplicationID"]);
            kony.print("---Status--" + result["Status"]);
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                dismissLoadingIndicator();
                if (result["Status"] == "SUCCESS" && result["DegreeApplicationID"] > 0) {
                    DegreeApplicantID = result["DegreeApplicationID"];
                    if (equalized == "0") {
                        invokeUploadFileRequest(frmName, DegreeApplicantID);
                    } else {
                        //clearInquirycertmob();
                        showErrMsgWithHandle(kony.i18n.getLocalizedString("msgApplicationSuccess") + DegreeApplicantID, goToManiMenu);
                    }
                } else {
                    alertDialog(result["Status"]);
                }
            } else {
                dismissLoadingIndicator();
                alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
                //showErrMsgWithHandle(kony.i18n.getLocalizedString("loadingIndicator"), goToManiMenu);
            }
        }
    } catch (err) {
        displayError(err);
    }
}

function invokeCertReqCompositService() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        try {
            //if(FLAG==0){
            showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
            var inputparam = {
                serviceID: "getCountryandAreaCode"
            };
            kony.print("inputparam are ***********", inputparam);
            appmiddlewareinvokerasync(inputparam, compositCertReqCallback);
            //  FLAG=1;
            //}
        } catch (err) {
            displayError(err);
        }
    } else {
        alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
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
                    getCerificateRequestStudyLevels();
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
    /*if (frmCertRequest.dropdownInstitute.selectedKey = undefined || frmCertRequest.dropdownInstitute.selectedKey == 0) {
                alert("Please select Institute");
            } else {*/
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
    // }
}

function getCerificateRequestStudyLevelsCallback(status, result) {
    try {
        if (status == 400) {
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                kony.print("result data is------------", result["studyLevelList"]);
                if (result["outputstudylevel"] == "SUCCESS") {
                    var comboboxData = [];
                    comboboxData.push({
                        "mykey": "0",
                        "myvalue": kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel")
                    });
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
    frmCertRequest.hbxcaptureimage.setVisibility(true);
    frmCertRequest.hboxChooseFile.isVisible = true;
    frmCertRequest.txtrequiredUniversity.text = "";
    frmCertRequest.dropdownrequiredCountry.selectedKey = "0";
    frmCertRequest.dropdownStudyLevel.selectedKey = "0";
    frmCertRequest.txtrequiredMajor.text = "";
    frmCertRequest.txtrequiredNoofYears.text = "";
    frmCertRequest.txtSemester.text = "";
    frmCertRequest.txtCreditHours.text = "";
    frmCertRequest.rdimgAttestInside.src = "unchecked.png";
    frmCertRequest.rdimgAttestOutside.src = "unchecked.png";
    frmCertRequest.dropdownProgram.selectedKey = "0";
    frmCertRequest.txtName.text = "";
    frmCertRequest.txtmobilenumber.text = "";
    frmCertRequest.txtTelephoneAreaCode.text = "";
    frmCertRequest.txtTelephoneNumber.text = "";
    frmCertRequest.txtFax.text = "";
    frmCertRequest.rbimgPublic.src = "unchecked.png";
    frmCertRequest.rbimgprivate.src = "unchecked.png";
    //frmCertRequest.txtIdentityNo.text = "";
    frmCertRequest.txtemail.text = "";
    frmCertRequest.dropdownApplicantCountry.selectedKey = "0";
    frmCertRequest.dropdownmobileareacode.selectedKey = "0";
    frmCertRequest.txtRemarks.text = "";
}

function clearInquirycertmob() {
    frmCertRequest1.txtuniversity.text = "";
    frmCertRequest1.dropdowncountryprevdegree.selectedKey = "0";
    frmCertRequest1.txtDegree.text = "";
    frmCertRequest1.txtMajor.text = "";
    frmCertRequest1.txtYears.text = "";
    //frmCertRequest1.rbYes.src = "checked.png";
    //frmCertRequest1.rbNo.src = "unchecked.png";
    //frmCertRequest1.segAttachment.data=null;
    //frmCertRequest1.hboxChooseFile.isVisible=true;
    frmCertRequest2.txtrequiredUniversity.text = "";
    frmCertRequest2.dropdownrequiredCountry.selectedKey = "0";
    frmCertRequest2.dropdownStudyLevel.selectedKey = "0";
    frmCertRequest2.txtrequiredMajor.text = "";
    frmCertRequest2.txtrequiredNoofYears.text = "";
    frmCertRequest2.txtSemester.text = "";
    frmCertRequest2.txtCreditHours.text = "";
    frmCertRequest2.rdimgAttestInside.src = "unchecked.png";
    frmCertRequest2.rdimgAttestOutside.src = "unchecked.png";
    frmCertRequest2.dropdownProgram.selectedKey = "0";
    frmCertRequest3.txtName.text = "";
    frmCertRequest3.txtmobilenumber.text = "";
    frmCertRequest3.txtTelephoneAreaCode.text = "";
    frmCertRequest3.txtTelephoneNumber.text = "";
    frmCertRequest3.txtFax.text = "";
    frmCertRequest3.rbimgPublic.src = "unchecked.png";
    frmCertRequest3.rbimgprivate.src = "unchecked.png";
    //frmCertRequest3.txtIdentityNo.text = "";
    frmCertRequest3.txtemiratesid1.text = "";
    frmCertRequest3.txtemiratesid2.text = "";
    frmCertRequest3.txtemiratesid3.text = "";
    frmCertRequest3.txtemiratesid4.text = "";
    frmCertRequest3.txtemail.text = "";
    frmCertRequest3.dropdownApplicantCountry.selectedKey = "0";
    frmCertRequest3.dropdownmobileareacode.selectedKey = "0";
    frmCertRequest3.txtRemarks.text = "";
    frmCertRequest3.rbYes.src = "checked.png";
    frmCertRequest3.rbNo.src = "unchecked.png";
    frmCertRequest3.segAttachment.data = null;
    frmCertRequest3.hboxChooseFile.isVisible = true;
    frmCertRequest3.hbxcaptureimage.isVisible = true;
}

function checkVisibility() {
    var curFrm = kony.application.getCurrentForm();
    if (curFrm.rbYes.src == "checked.png") {
        curFrm.hboxChooseFile.setVisibility(true);
    } else {
        curFrm.hboxChooseFile.setVisibility(false);
    }
}

function invokeUploadFileRequest(frmName, AppNo) {
    var returnedByteData;
    try {
        showLoadingIndicator(kony.i18n.getLocalizedString("lblProcessingReq"));
        var filename = frmName.segAttachment.data[0]["lblFileName"] + ".jpg"; //(gblDeviceInfo == "tab") ? frmCertRequest.segAttachment.selectedItems[0]["lblFileName"] : frmCertRequest1.segAttachment.selectedItems[0]["lblFileName"];
        returnedByteData = frmName.segAttachment.data[0]["hdPath"];
        /*
            if(deviceName=="android"){
            	var filepath = frmName.segAttachment.data[0]["hdPath"];//(gblDeviceInfo == "tab") ? frmCertRequest.segAttachment.selectedItems[0]["hdPath"] : frmCertRequest1.segAttachment.selectedItems[0]["hdPath"];
	            returnedByteData = FileExplorer.convertIntoByte(filepath);
	            attachLength= returnedByteData.toString().length;
				if(attachLength > 5242880){
					returnedByteData = FileExplorer.convertIntoReducedByte(filepath);
				}
            } else {
            	returnedByteData = "image";//frmName.segAttachment.data[0]["hdPath"];
            }*/
        var inputfileparam = {
            serviceID: "Equi_UploadFile_2",
            APP_NO: AppNo,
            FILENAME: filename,
            DESCRIPTION: "image",
            Content: returnedByteData
        };
        //kony.print("inputfileparam are ***********", inputfileparam);
        appmiddlewareinvokerasync(inputfileparam, CertUploadReqCallback);
    } catch (err) {
        showErrMsgWithHandle(kony.i18n.getLocalizedString("msgApplicationSuccess") + DegreeApplicantID, goToManiMenu); //+"but File Not uploaded"
        clearInquirycertmob();
        displayError(err);
    }
}

function CertUploadReqCallback(status, result) {
    try {
        kony.print("file status" + status);
        kony.print("result data is------------", result);
        if (status == 400) {
            kony.print("---output--" + result["output"]);
            kony.print("---result--" + result["result"]);
            dismissLoadingIndicator();
            //clearInquirycertmob();
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                if (result["output"] == "SUCCESS" && result["result"] == "true") {
                    showErrMsgWithHandle(kony.i18n.getLocalizedString("msgApplicationSuccess") + DegreeApplicantID, goToManiMenu);
                } else {
                    showErrMsgWithHandle(kony.i18n.getLocalizedString("msgApplicationSuccess") + DegreeApplicantID, goToManiMenu); //+"but File Not uploaded"
                }
            } else {
                showErrMsgWithHandle(kony.i18n.getLocalizedString("msgApplicationSuccess") + DegreeApplicantID, goToManiMenu); // +"but File Not uploaded"
            }
        }
    } catch (err) {
        displayError(err);
    }
}

function checkEmirateId(text) {
    try {
        var temp = text.split("-");
        if (temp[0].toString().length != 3) {
            return false;
        } else if (temp[1].toString().length != 4) {
            return false;
        } else if (temp[2].toString().length != 7) {
            return false;
        } else if (temp[3].toString().length != 1) {
            return false;
        } else {
            return true;
        }
    } catch (exp) {
        kony.print(exp);
    }
}

function InquiregetUserDataToAuto() {
    try {
        showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));
        var inputparam = {
            serviceID: "Select_User",
            userID: gblLoggedUserID
        };
        kony.print("inputparam are ***********", inputparam);
        appmiddlewareinvokerasync(inputparam, InquiregetUserDataToAutoCallback);
    } catch (err) {
        displayError(err);
    }
}

function InquiregetUserDataToAutoCallback(status, result) {
    try {
        if (status == 400) {
            if ((kony.os.toNumber(result.opstatus) == 0)) {
                kony.print("result data is------------", result);
                var curFrm;
                curFrm = kony.application.getCurrentForm();
                if (result["userID"] == "" || result["result"] == null || result["result"] == undefined) {
                    curFrm.txtName.text = result["appName"];
                    //frmAttestGrad1.dropdownnationality.selectedKey = result["nationalityID"];
                    //frmAttestGrad1.dropdownnationality.setEnabled(false);
                    curFrm.txtemail.text = result["email"];
                    curFrm.dropdownmobileareacode.selectedKey = result["mobileCode"];
                    curFrm.txtmobilenumber.text = result["mobile"];
                    var eid = result["emiratesId"].split("-");
                    curFrm.txtemiratesid1.text = eid[0];
                    curFrm.txtemiratesid2.text = eid[1];
                    curFrm.txtemiratesid3.text = eid[2];
                    curFrm.txtemiratesid4.text = eid[3];
                    // diabling UI elements -> to make them non editable : changes made by KH843
                    curFrm.txtName.setEnabled(false);
                    //frmAttestGrad1.dropdownnationality.setEnabled(false);
                    curFrm.txtemail.setEnabled(false);
                    curFrm.dropdownmobileareacode.setEnabled(false);
                    curFrm.txtmobilenumber.setEnabled(false);
                    //frmAttestGrad1.hbxGender.setEnabled(false);
                    curFrm.txtemiratesid1.setEnabled(false);
                    curFrm.txtemiratesid2.setEnabled(false);
                    curFrm.txtemiratesid3.setEnabled(false);
                    curFrm.txtemiratesid4.setEnabled(false);
                    dismissLoadingIndicator();
                    //frmAttestGrad1.txtpobox.text = result["passportNO"];
                    //code
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