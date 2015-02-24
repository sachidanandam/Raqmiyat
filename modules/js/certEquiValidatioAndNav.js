var isNewCertReg = true;
var isGenderMaleSerVal = true;
var deviceName=kony.os.deviceInfo().name;
/*         Certificate Equi Tablet View Validation         */

function validateCertEquiPgFieldGoFurther() 
{
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	var curFrm;
	curFrm = kony.application.getCurrentForm();
	switch(curFrm["id"])
	{
		case "frmCertEquivalency1":
		case "frmCertEquivalencyTab1":
		    if (curFrm.txtCertSubittedBy = undefined || curFrm.txtCertSubittedBy.text == "")
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCertificateSubmitBy"));
		        gblErrWidgetRefId = curFrm.txtCertSubittedBy;
		        return false;
		    }
		    else if (curFrm.dropdownStudyLevel.selectedKey == 0) 
		    {
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"));
		        gblErrWidgetRefId = curFrm.dropdownStudyLevel;
		        return false;
		    }
		    else if (curFrm.txtMajor = undefined || curFrm.txtMajor.text == "")
		    {
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMajor"));
		        gblErrWidgetRefId = curFrm.txtMajor.setFocus(true);
		        return false;
		    }
		    //else if (curFrm.txtIssueBy = undefined || curFrm.txtIssueBy.text == "") 
		    else if (curFrm.rbimgPublic.src != "checked.png" && curFrm.rbimgprivate.src != "checked.png" ) 
		    {
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterIssueBy"));
		        gblErrWidgetRefId = curFrm.txtIssueBy;
		 		return false;
		    }
		    else if (curFrm.dropdowncountryofexam.selectedKey == 0)
			{
		        alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
		        gblErrWidgetRefId = curFrm.dropdowncountryofexam;
		        return false;
		    }
		    else if (curFrm.rbimgmale.src != "checked.png" && curFrm.rbimgfemale.src != "checked.png" ) 
		    {
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectGender"));
		        gblErrWidgetRefId = curFrm.rbimgmale;
		 		return false;
		    }
		    /*else if (curFrm.dropdownemirate.selectedKey == 0)
			{
		        alertDialog(kony.i18n.getLocalizedString("lblSelectEmirate"));
		        gblErrWidgetRefId = curFrm.dropdownemirate;
		        return false;
		    }*/
		    else
		    {
		    	if(gblDeviceInfo != "tab")
		    	{
		    		frmCertEquivalency2.show();
		    		break;
		    	}
		    }
	case "frmCertEquivalency2":
			if (curFrm.cmbTypeOfStudy.selectedKey == 0)
			{
				alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectTypeStudy"));
				gblErrWidgetRefId = curFrm.cmbxTypeOfStudy;
				return false;
		    }
		    else if (curFrm.cmbTypeOfStudy.selectedKey == 6 && curFrm.txtBoxOthers.text == "")
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseTypeOfStudyDetailsOthers"));
				gblErrWidgetRefId = curFrm.txtBoxOthers;
		        return false;
		    }
			else if (curFrm.imgSelf.src != "checked.png" && (curFrm.txtSponsoredBy = undefined || curFrm.txtSponsoredBy.text == "")) 
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterSponserBy"));
             	gblErrWidgetRefId = curFrm.txtSponsoredBy;
		        return false;
		    }
			else if (curFrm.txtNoofyears = undefined || curFrm.txtNoofyears.text == "" || (kony.os.toNumber(curFrm.txtNoofyears))==0)
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterNoOfYears"));
         		gblErrWidgetRefId = curFrm.txtNoofyears;
		        return false;
		    }
			/*else if (curFrm.txtNoofTerms = undefined || curFrm.txtNoofTerms.text == "")
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterNoofTerms"));
				gblErrWidgetRefId = curFrm.txtNoofTerms;
		        return false;
		    }*/
			else if (curFrm.txtStartYear = undefined || curFrm.txtStartYear.text == "")
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterStartStudyDate"));
		 		gblErrWidgetRefId = curFrm.txtStartYear;
				return false;
		    }
			else if (!validateYear(curFrm.txtStartYear.text, "please enter valid year"))
			{
				alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidYearVaule"));
		 		gblErrWidgetRefId = curFrm.txtStartYear;
		        return false;
		    }
			else if (curFrm.txtGraduationYear = undefined || curFrm.txtGraduationYear.text == "")
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterDateOfGraduation"));
       			gblErrWidgetRefId = curFrm.txtGraduationYear;
		        return false;
		    }
			else if (!validateYear(curFrm.txtGraduationYear.text, "please enter valid year"))
			{
				alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidYearVaule"));
     			gblErrWidgetRefId = curFrm.txtGraduationYear;
				return false;
		    }
			else if (curFrm.txtStartYear.text >= curFrm.txtGraduationYear.text)
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterStartYear"));
         		gblErrWidgetRefId = curFrm.txtStartYear;
		        return false;
		    }
			else if (curFrm.dropdownCountryWhereExam.selectedKey == 0)
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCountryExam"));
        		gblErrWidgetRefId = curFrm.dropdownCountryWhereExam;
		        return false;
		    }
			else if (curFrm.dropdownpaymentmethodtype.selectedKey == "SPMT")
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectPaymentMethod"));
        		gblErrWidgetRefId = curFrm.dropdownpaymentmethodtype;
		        return false;
		    }
			else if (curFrm.dropdownpaymentcardtype.selectedKey == 0)
			{
		        alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectPaymentMethod"));
        		gblErrWidgetRefId = curFrm.dropdownpaymentcardtype;
		        return false;
		    }
		    else
		    {
		    	if(gblDeviceInfo != "tab")
		    		frmCertEquivalency3.show();
		    	else
		    		frmCertEquivalencyTab2.show();
		    }
	    	break;
	    case "frmCertEquivalency3":
	    case "frmCertEquivalencyTab2":
	    	//frmCertEquivalency2.segment21727613372409676.data.length ==;
	    	/*if(frmCertEquivalency2.segment21727613372409676.data == null || frmCertEquivalency2.segment21727613372409676.data == "" || frmCertEquivalency2.segment21727613372409676.data.length <= 0)
	    	{
		        alertDialog("please add Transfer Credit");
		        return false;
	    	}
	    	else*/
	    	if(deviceName=="android")
	    	{
		    	if(curFrm.txtUniversityOrCollege.text != "" || curFrm.dropdownTransfCountry.selectedKey != "0" || curFrm.txtTransfNoofyears.text != "")
			    {
			    	alertDialog(kony.i18n.getLocalizedString("lblPressAdd"));
			    	return false;
			    }
			    else
			    {
			    	if(gblDeviceInfo != "tab")
			    	{
			    		frmCertEquivalency4.show();
			    		break;
			    	}
			    }
		    }
		    else
		    {
		    	if(gblDeviceInfo != "tab")
		    	{
		    		frmCertEquivalency4.show();
		    		break;
		    	}
		    }
	    case "frmCertEquivalency4":
	 	   /*if(curFrm.txtSchoolCollegeUniv.text != "" || curFrm.dropdownTransfCountry.selectedKey != "0" || curFrm.txtCertificate.text != "" || curFrm.dropdownTransfCountry.comboboxPreCertCountry != "0" || curFrm.txtPeriodFrom.text != "" || curFrm.txtPeriodTo.text != "" )
		    {
		    	alertDialog("Please Press Add");
		    	return false;
		    }*/
		    if(curFrm.dropdownlevel.selectedKey != "0"||curFrm.txtSchoolCollegeUniv.text!=""||curFrm.txtCertificate.text!=""||curFrm.comboboxPreCertCountry.selectedKey != "0"||curFrm.txtPeriodFrom.text!=""||curFrm.txtPeriodTo.text!="")
	    	{
	    		alertDialog(kony.i18n.getLocalizedString("lblPressAdd"));
		    	return false;
	    	}
	    	else if(curFrm.segPreviousCertificate.data == null || curFrm.segPreviousCertificate.data == "" || curFrm.segPreviousCertificate.data.length <= 0 || isOld==true)
	    	{
		        alertDialog(kony.i18n.getLocalizedString("lblPleasePreCertDet"));
		        return false;
	    	}
		    else
		    {
		    	if(gblDeviceInfo != "tab")
		    	{
		    		frmCerEquivalencyAttach.show();
		    		break;
		    	}
		    }
	    case "frmCerEquivalencyAttach":
		    if(gvCertEQuiReqDoc.length==0){
		    	gblNoOfDocs = "1";
		    	invokeCertEquiWs();
		    }else{
		    //kony.print("---"+curFrm.segAttachment.data.length+"---"+gvCertEQuiReqDoc.length);
		 	    if(curFrm.segAttachment.data == null || curFrm.segAttachment.data == "" || curFrm.segAttachment.data.length < gvCertEQuiReqDoc.length)
		    	{
			        alertDialog(kony.i18n.getLocalizedString("lblAddCert"));
			        return false;
		    	}
		    	else
		    	{
		    		gblNoOfDocs = curFrm.segAttachment.data.length;
		    		invokeCertEquiWs();
	    		}
		    }
	    	//break;
	}
}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}

function certEquiAddTransferCredit()
{
	var curFrm;
	curFrm = kony.application.getCurrentForm();
	if(gblDeviceInfo == "tab")
		curFrm.hboxSeg1.setVisibility(true);
	if (curFrm.txtUniversityOrCollege = undefined || curFrm.txtUniversityOrCollege.text == "") 
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterUniversity"));
		gblErrWidgetRefId = curFrm.txtUniversityOrCollege;
 		return false;
	} 
	else if (curFrm.dropdownTransfCountry.selectedKey == 0) {
		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCountry"));
		gblErrWidgetRefId = curFrm.dropdownTransfCountry;
 		return false;
	}
	else if (curFrm.txtTransfNoofyears = undefined || curFrm.txtTransfNoofyears.text == "") {
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterNoOfYears"));
		gblErrWidgetRefId = curFrm.txtTransfNoofyears;
 		return false;
	} 

	var university=curFrm.txtUniversityOrCollege.text;
	var country=curFrm.dropdownTransfCountry.selectedKeyValue[1];
	var countryId =curFrm.dropdownTransfCountry.selectedKeyValue[0];
	var tranCretNo = "";

	var years=curFrm.txtTransfNoofyears.text;
	if(curFrm.btnTransfAdd.text != kony.i18n.getLocalizedString("lblAdd") && curFrm.segTransferCredit.selectedIndex != null && curFrm.segTransferCredit.selectedIndex != "")
	{
		tranCretNo =curFrm.segTransferCredit.selectedItems[0]["hdTranCretNo"];
		var select=curFrm.segTransferCredit.selectedIndex;
		curFrm.segTransferCredit.removeAt(select[1], select[0]);
		kony.print(addSegment);
		var addSegment1 = {	
								lblTransCertTitle:kony.i18n.getLocalizedString("lblUniversity")+" : "+university,
								lblTransCertCountry:kony.i18n.getLocalizedString("lblCountry")+" : "+country,
								lblTransCertYears:kony.i18n.getLocalizedString("lblNoofyears")+" : "+years,
								imgTransEdit:"edit_on.png",
								imgTransDel:"delete.png",
								"hdUniversityOrCollege":university,
								"hdCountry":country,
								"hdNoOfYear":years,
								"hdCountryId":countryId,
								"hdTranCretNo":tranCretNo,
								"hdIsUpdate":true
							};
		kony.print(addSegment1);
		curFrm.segTransferCredit.addDataAt(addSegment1,select[1], select[0]);
		kony.print("Temp Test Done");
	}
	else
	{
		var addSegment = [
							{	
								lblTransCertTitle:kony.i18n.getLocalizedString("lblUniversity")+" : "+university,
								lblTransCertCountry:kony.i18n.getLocalizedString("lblCountry")+" : "+country,
								lblTransCertYears:kony.i18n.getLocalizedString("lblNoofyears")+" : "+years,
								imgTransEdit:"edit_on.png",
								imgTransDel:"delete.png",
								"hdUniversityOrCollege":university,
								"hdCountry":country,
								"hdNoOfYear":years,
								"hdCountryId":countryId,
								"hdTranCretNo":tranCretNo,
								"hdIsUpdate":""
							}
							];
		kony.print(addSegment);
		curFrm.segTransferCredit.addAll(addSegment);
	}
	
	curFrm.txtUniversityOrCollege.text="";
	curFrm.dropdownTransfCountry.selectedKey="0";
	curFrm.txtTransfNoofyears.text="";
	curFrm.btnTransfAdd.text=kony.i18n.getLocalizedString("lblAdd");

}

function certEquiDeleteTransferCreditRow()
{
	var curFrm;
		curFrm = kony.application.getCurrentForm();
	if(curFrm.segTransferCredit.selectedItems[0]["hdTranCretNo"] != null && curFrm.segTransferCredit.selectedItems[0]["hdTranCretNo"] != "")
		alertDialog(kony.i18n.getLocalizedString("errMsgCantDeletePreSubCret"));
	else
		showConfirmationMsgWithHandle("removeConfMsg",certEquiDeleteTransferCreditRowAlertCb,"lblYes","lblNo");	
}

function certEquiDeleteTransferCreditRowAlertCb(flag)
{
	if(flag != true)
		return;
	var curFrm;
	curFrm = kony.application.getCurrentForm();
	var select=curFrm.segTransferCredit.selectedIndex;
	curFrm.segTransferCredit.removeAt(select[1], select[0]);
	//if(curFrm.segTransferCredit.data.length==0 || curFrm.segTransferCredit.data==null){
		//curFrm.hboxSeg1.setVisibility(true);
	//}
}


function certEquiAddPreviousCertificate()
{
	var curFrm;
	curFrm = kony.application.getCurrentForm();
	if(gblDeviceInfo == "tab")
		curFrm.hboxSeg2.setVisibility(true);
	if (curFrm.dropdownlevel.selectedKey == 0) {
		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"));
		gblErrWidgetRefId = curFrm.dropdownlevel;
 		return false;
	}			
	else if (curFrm.txtSchoolCollegeUniv = undefined || curFrm.txtSchoolCollegeUniv.text == "") {
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterSchoolCollegeUniversity"));
		gblErrWidgetRefId = curFrm.txtSchoolCollegeUniv;
 		return false;	
	}
	else if (curFrm.txtCertificate = undefined || curFrm.txtCertificate.text == "") {
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterCertificate"));
		gblErrWidgetRefId = curFrm.txtCertificate;
 		return false;	
	}
	else if (curFrm.comboboxPreCertCountry.selectedKey == 0) {
		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCountry"));
		gblErrWidgetRefId = curFrm.comboboxPreCertCountry;
 		return false;
	}
	else if (curFrm.txtPeriodFrom = undefined || curFrm.txtPeriodFrom.text == "") {
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPeriodFrom"));
		gblErrWidgetRefId = curFrm.txtPeriodFrom;
 		return false;	
	}
	else if (!validateYear(curFrm.txtPeriodFrom.text, kony.i18n.getLocalizedString("lblPleaseEnterValidYearVaule"))) {
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidYearVaule"));
		gblErrWidgetRefId = curFrm.txtPeriodFrom;
 		return false;	
	}
	else if (curFrm.txtPeriodTo = undefined || curFrm.txtPeriodTo.text == "") {
		//alertDialog("Please Enter end Date");
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPeriodTo"));
		gblErrWidgetRefId = curFrm.txtPeriodTo;
 		return false;	
	}
	else if (!validateYear(curFrm.txtPeriodTo.text, "lblPleaseEnterPeriodTo")) {
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidYearVaule"));
		gblErrWidgetRefId = curFrm.txtPeriodTo;
 		return false;	
	}
	else if (curFrm.txtPeriodFrom.text >= curFrm.txtPeriodTo.text) {
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterStartYear"));
 		gblErrWidgetRefId = curFrm.txtPeriodFrom;
 		return false;	
	}
    

	var univ=curFrm.txtSchoolCollegeUniv.text;
	var certificate=curFrm.txtCertificate.text;
	var country=curFrm.comboboxPreCertCountry.selectedKeyValue[1];
	var countryId =curFrm.comboboxPreCertCountry.selectedKeyValue[0];
	
	var from=curFrm.txtPeriodFrom.text;
	var to=curFrm.txtPeriodTo.text;
	
	var studyLevel=curFrm.dropdownlevel.selectedKeyValue[1];
	var studyLevelId =curFrm.dropdownlevel.selectedKeyValue[0];
	
	var prevCretNo = "";
	
	if(curFrm.btnPreCertAdd.text != kony.i18n.getLocalizedString("lblAdd") && curFrm.segPreviousCertificate.selectedIndex != null && curFrm.segPreviousCertificate.selectedIndex != "")
	{
		prevCretNo = curFrm.segPreviousCertificate.selectedItems[0]["hdPrevCretNo"];
		var select=curFrm.segPreviousCertificate.selectedIndex;
		curFrm.segPreviousCertificate.removeAt(select[1], select[0]);
		var addPrevious={
							lblPrevCertLevel:kony.i18n.getLocalizedString("lblLevel")+" : "+studyLevel,
							lblUniversitySegDisplay:kony.i18n.getLocalizedString("lblUniversity")+" : "+univ,
							lblCertificateNameSegDisplay:kony.i18n.getLocalizedString("lblCertificate")+" : "+certificate,
							lblCountryYearSegDisplay:kony.i18n.getLocalizedString("lblCountry")+" : "+country,
							lblPrevCertYear:kony.i18n.getLocalizedString("lblPeriodFrom")+" : "+from+" "+kony.i18n.getLocalizedString("lblPeriodTo")+" : "+to,
							lblUniversityDisplay:univ,
							lblCertificateNameDisplay:certificate,
							lblCountryYearDisplay:country,
							
							imgPreCertEdit:"edit_on.png",
							imgPreCertDel:"delete.png",
							"hdStudyLevelId": studyLevelId,
							"hdStudyLevel": studyLevel,
							"hdCountry": country,
							"hdCountryId": countryId,
							"hdPeriodFrom":from,
							"hdPeriodTo":to,
							"hdPrevCretNo": prevCretNo,
							"hdIsUpdate":true
						};
		curFrm.segPreviousCertificate.addDataAt(addPrevious,select[1], select[0]);
		kony.print("Temp Test Done");
	}
	else
	{
		var addPrevious=[
							{
								lblPrevCertLevel:kony.i18n.getLocalizedString("lblLevel")+" : "+studyLevel,
								lblUniversitySegDisplay:kony.i18n.getLocalizedString("lblUniversity")+" : "+univ,
								lblCertificateNameSegDisplay:kony.i18n.getLocalizedString("lblCertificate")+" : "+certificate,
								lblCountryYearSegDisplay:kony.i18n.getLocalizedString("lblCountry")+" : "+country,
								lblPrevCertYear:kony.i18n.getLocalizedString("lblPeriodFrom")+" : "+from+" "+kony.i18n.getLocalizedString("lblPeriodTo")+" : "+to,
								lblUniversityDisplay:univ,
								lblCertificateNameDisplay:certificate,
								lblCountryYearDisplay:country,
								
								imgPreCertEdit:"edit_on.png",
								imgPreCertDel:"delete.png",
								"hdStudyLevelId": studyLevelId,
								"hdStudyLevel": studyLevel,
								"hdCountry": country,
								"hdCountryId": countryId,
								"hdPeriodFrom":from,
								"hdPeriodTo":to,
								"hdPrevCretNo": prevCretNo,
								"hdIsUpdate":""
							}
						];
		curFrm.segPreviousCertificate.addAll(addPrevious);
	}
	curFrm.dropdownlevel.selectedKey="0";
	curFrm.txtSchoolCollegeUniv.text="";
	curFrm.txtCertificate.text="";
	curFrm.comboboxPreCertCountry.selectedKey="0";
	curFrm.txtPeriodFrom.text="";
	curFrm.txtPeriodTo.text="";
	curFrm.btnPreCertAdd.text=kony.i18n.getLocalizedString("lblAdd");
}

function certEquiDeletePreviousCertificateRow()
{
	var curFrm;
		curFrm = kony.application.getCurrentForm();
	if(curFrm.segPreviousCertificate.selectedItems[0]["hdPrevCretNo"] != null && curFrm.segPreviousCertificate.selectedItems[0]["hdPrevCretNo"] != "")
		alertDialog(kony.i18n.getLocalizedString("errMsgCantDeletePreSubCret"));
	else
		showConfirmationMsgWithHandle("removeConfMsg",certEquiDeletePreviousCertificateRowAlertCb,"lblYes","lblNo");	
}

function certEquiDeletePreviousCertificateRowAlertCb(flag)
{
	if(flag != true)
		return;
	var curFrm;
	curFrm = kony.application.getCurrentForm();
	var select=curFrm.segPreviousCertificate.selectedIndex;
	curFrm.segPreviousCertificate.removeAt(select[1], select[0]);
	//if(curFrm.segPreviousCertificate.data==null||curFrm.segPreviousCertificate.data.length==0){
		//curFrm.hboxSeg2.setVisibility(true);
	//}
}

function invokeCertEquiWs()
{
	btnbackpressed=false;	
	gblCounterFileUpload=0;
	showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));
	var curFrm;
	if(gblDeviceInfo == "tab")
		curFrm = frmCertEquivalencyTab1;
	else
		curFrm = frmCertEquivalency1;
		
	if(gvAppNo == null || gvAppNo == "")
		invokeEquiWsInsertApp();
	else if(isGenderMaleSerVal != (curFrm.rbimgmale.src = "checked.png"?true:false))
		invokeEquiWsUpdateApp();
	else
		invokeEquiWsInsertCert();
}

function invokeEquiWsInsertApp()
{
	var inputparam = [];
	inputparam["serviceID"] = "getUserDetails_EquInsertApp";
	// inputparam["httpheaders"] = {};
	// inputparam["httpconfig"] = {timeout:5};
	inputparam["wsUsrId"] = gvWsUsrId;
	inputparam["wsPwd"] = gvWsPwd;
	
	inputparam["userID"] = gblLoggedUserID;
	
	var curFrm;
	if(gblDeviceInfo == "tab")
		curFrm = frmCertEquivalencyTab1;
	else
		curFrm = frmCertEquivalency1;
	inputparam["GENDER"] = curFrm.rbimgmale.src = "checked.png"?"1":"2";
	inputparam["EMIRATE_ID"] = curFrm.dropdownemirate.selectedKey;
	
	/*inputparam["ODT"] = "" + 
			"<LOGINNAME>mm</LOGINNAME>" + 
			"<PWD>mm</PWD>" + 
			"<EMAIL>test@test.com</EMAIL>" + 
			"<ARB_NAME>test</ARB_NAME>" +  
			"<GENDER>1</GENDER>" + 
			"<NATIONALITY_ID>22</NATIONALITY_ID>" + 
			"<EMIRATE_ID>1</EMIRATE_ID>" + 
			"<MOBILE_CD>050</MOBILE_CD>" + 
			"<MOBILE>559862641</MOBILE>" + 
			"";*/
	appmiddlewareinvokerasync(inputparam, equiWsInsertAppCallback);

}


function invokeEquiWsUpdateApp()
{
	var inputparam = [];
	inputparam["serviceID"] = "getUserDetails_EquUpdateApp";
	// inputparam["httpheaders"] = {};
	// inputparam["httpconfig"] = {timeout:5};
	inputparam["wsUsrId"] = gvWsUsrId;
	inputparam["wsPwd"] = gvWsPwd;
	
	inputparam["userID"] = gblLoggedUserID;
	inputparam["APP_NO"] = gvAppNo;
	
	var curFrm;
	if(gblDeviceInfo == "tab")
		curFrm = frmCertEquivalencyTab1;
	else
		curFrm = frmCertEquivalency1;
		
	inputparam["GENDER"] = curFrm.rbimgmale.src = "checked.png"?"1":"2";
	inputparam["EMIRATE_ID"] = curFrm.dropdownemirate.selectedKey;
	
	appmiddlewareinvokerasync(inputparam, equiWsInsertAppCallback);

}



function equiWsInsertAppCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("equiWsInsertAppCallback result data is------------",result);
				if(result["outPut"] != null && result["outPut"].trim().toUpperCase() == "SUCCESS")
				{
					if(result["appNo"] != null && result["appNo"] != "")
						gvAppNo = result["appNo"];
					invokeEquiWsInsertCert();
						
				}
				else{
					dismissLoadingIndicator();
					alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
					//frmMainMenu.show();
				}
			}
			else{
				dismissLoadingIndicator();
				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
				//frmMainMenu.show();
				}
		}
	}
	catch(err){
		displayError(err);
	}
}


function invokeEquiWsInsertCert()
{
	
	
	var inputparam = [];
	if(isNewCertReg == true)
		inputparam["serviceID"] = "Equ_Insert_Cert";
	else
		inputparam["serviceID"] = "Equ_Update_Cert";
	// inputparam["httpheaders"] = {};
	// inputparam["httpconfig"] = {timeout:5};
	inputparam["wsUsrId"] = gvWsUsrId;
	inputparam["wsPwd"] = gvWsPwd;
	/*
	var	inputXml = "" + "<APP_NO>" + gvAppNo + "</APP_NO>";
		inputXml = inputXml + "<CERT_TITLE>" + frmCertEquivalency1.txtCertSubittedBy.text + "</CERT_TITLE>";
		inputXml = inputXml + "<STUDYLEVEL_ID>" + frmCertEquivalency1.dropdownStudyLevel.selectedKey + "</STUDYLEVEL_ID>";
		inputXml = inputXml + "<MAJOR>" + frmCertEquivalency1.txtMajor.text + "</MAJOR>";
		//inputXml = inputXml + "<SPECIALIZATION>" + frmCertEquivalency1.txtS + "</SPECIALIZATION>";
		inputXml = inputXml + "<CERT_ISSUE_ORG>" + frmCertEquivalency1.txtIssuedBy.text + "</CERT_ISSUE_ORG>";
		inputXml = inputXml + "<CERT_ISSUE_ORG_CNT>" + frmCertEquivalency1.dropdowncountryofexam.selectedKey + "</CERT_ISSUE_ORG_CNT>";
		inputXml = inputXml + "<STUDYTYPE_ID>" + frmCertEquivalency1.cmbxTypeOfStudy.selectedKey + "</STUDYTYPE_ID>";
		inputXml = inputXml + "<STUDYTYPE_OTH>" + frmCertEquivalency1.txtBoxOthers.text + "</STUDYTYPE_OTH>";
		inputXml = inputXml + "<SPONSER_ID>" + (frmCertEquivalency1.imgSelf.src == "checked.png"? "1" : "2")  + "</SPONSER_ID>";
		inputXml = inputXml + "<SPONSER_AUTH>" + frmCertEquivalency1.txtSponsoredBy.text + "</SPONSER_AUTH>";
		inputXml = inputXml + "<NOOF_YEARS>" + frmCertEquivalency1.txtNoofyears.text + "</NOOF_YEARS>";
		//inputXml = inputXml + "<NOOF_TERMS>" + frmCertEquivalency1.txtno + "</NOOF_TERMS>";
		//inputXml = inputXml + "<NOOF_HOURS>" + frmCertEquivalency1 + "</NOOF_HOURS>";
		inputXml = inputXml + "<STUDY_START_DT>" + frmCertEquivalency1.txtStartYear.text + "</STUDY_START_DT>";
		inputXml = inputXml + "<GRADUATION_DT>" + frmCertEquivalency1.txtGraduationYear.text + "</GRADUATION_DT>";
		inputXml = inputXml + "<EXAM_HELD_COUNTRY_ID>" + frmCertEquivalency1.dropdownSelectCountry.selectedKey + "</EXAM_HELD_COUNTRY_ID>";
		inputXml = inputXml + "";
	inputparam["ODT"] = inputXml;*/
	
	inputparam["APP_NO"] = gvAppNo;
	
	kony.print("invokeEquiWsInsertCert gvCretNo " + gvCretNo);
	if(isNewCertReg != true)
		inputparam["CERT_NO"] = gvCretNo;
	
	var curFrm;
	if(gblDeviceInfo == "tab")
		curFrm = frmCertEquivalencyTab1;
	else
		curFrm = frmCertEquivalency1;
	inputparam["CERT_TITLE"] = curFrm.txtCertSubittedBy.text;
	inputparam["STUDYLEVEL_ID"] = curFrm.dropdownStudyLevel.selectedKey;
	inputparam["MAJOR"] = curFrm.txtMajor.text;
	//inputparam["SPECIALIZATION"] = frmCertEquivalency1.txtS;
	inputparam["SPECIALIZATION"] = "";
	//inputparam["CERT_ISSUE_ORG"] = curFrm.txtIssueBy.text;
	inputparam["CERT_ISSUE_ORG"] = (curFrm.rbimgPublic.src == "checked.png"? "1" : "2") ;
	inputparam["CERT_ISSUE_ORG_CNT"] = curFrm.dropdowncountryofexam.selectedKey;
		
	if(gblDeviceInfo != "tab")
		curFrm = frmCertEquivalency2;
		
	inputparam["STUDYTYPE_ID"] = curFrm.cmbTypeOfStudy.selectedKey;
	inputparam["STUDYTYPE_OTH"] = curFrm.txtBoxOthers.text;
	inputparam["SPONSER_ID"] = (curFrm.imgSelf.src == "checked.png"? "1" : "2") ;
	inputparam["SPONSER_AUTH"] = curFrm.txtSponsoredBy.text;
	inputparam["NOOF_YEARS"] = curFrm.txtNoofyears.text;
	//inputparam["NOOF_TERMS"] = frmCertEquivalency1.txtno;
	//inputparam["NOOF_HOURS"] = frmCertEquivalency1;
	inputparam["NOOF_TERMS"] = "0";
	inputparam["NOOF_HOURS"] = "0";
	inputparam["STUDY_START_DT"] = curFrm.txtStartYear.text;
	inputparam["GRADUATION_DT"] = curFrm.txtGraduationYear.text;
	inputparam["EXAM_HELD_COUNTRY_ID"] = curFrm.dropdownCountryWhereExam.selectedKey;

	appmiddlewareinvokerasync(inputparam, equiWsInsertCertCallback);

}


function equiWsInsertCertCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("equiWsInsertCertCallback result data is------------" + result);
				if(result["outPut"] != null && result["outPut"].trim().toUpperCase() == "SUCCESS")
				{
					if(result["CERT_NO"] != null && result["CERT_NO"] != "" && isNewCertReg == true)
						gvCretNo = result["CERT_NO"];
					gvPreTranCretCnt = null;
					invokeEquiWsInsertPreCert();
					//invokeEquiWsInsertTranCert();
				}
				else{
					dismissLoadingIndicator();
					alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
					//frmMainMenu.show();
				}
			}
			else{
				dismissLoadingIndicator();
				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
				//frmMainMenu.show();
				}
		}
	}
	catch(err){
		displayError(err);
	}
}


function invokeEquiWsInsertPreCert()
{
	var segData;
	if(gblDeviceInfo == "tab")
		segData = frmCertEquivalencyTab2.segPreviousCertificate.data;
	else
		segData = frmCertEquivalency4.segPreviousCertificate.data;
	
	if(gvPreTranCretCnt == null || gvPreTranCretCnt == "" )
		if(segData == null || segData == "" || segData.length <= 0) {
			gvPreTranCretCnt = null;
			invokeEquiWsInsertTranCert();
			return;
		} else {
			gvPreTranCretCnt = segData.length; 
		}
	
	if(isNewCertReg == true)
		gvPreTranCretCnt--;
	else
	{
		skipUnchangePreCertRecord:do{		
				gvPreTranCretCnt--;
				if(gvPreTranCretCnt < 0 )
				{
					gvPreTranCretCnt = null;
					invokeEquiWsInsertTranCert();
					return;
				}
				if(segData[gvPreTranCretCnt]["hdPrevCretNo"] != "" && segData[gvPreTranCretCnt]["hdIsUpdate"] != true)
					continue skipUnchangePreCertRecord;
				else
					break;
		}while(1);
	}

	
	if(gvPreTranCretCnt < 0 )
	{
		gvPreTranCretCnt = null;
		invokeEquiWsInsertTranCert();
		return;
	}
	
	var inputparam = [];
	if(isNewCertReg == true || (isNewCertReg != true && (segData[gvPreTranCretCnt]["hdPrevCretNo"] == null || segData[gvPreTranCretCnt]["hdPrevCretNo"] == "")))
		inputparam["serviceID"] = "Equ_Insert_PreCert";
	else
	{
		inputparam["serviceID"] = "Equ_Update_PreCert";
		inputparam["PREVCERT_NO"] = segData[gvPreTranCretCnt]["hdPrevCretNo"];
	}
	
	// inputparam["httpheaders"] = {};
	// inputparam["httpconfig"] = {timeout:5};
	inputparam["wsUsrId"] = gvWsUsrId;
	inputparam["wsPwd"] = gvWsPwd;
	/*
	var	inputXml = "";
		inputXml = inputXml + "<APP_NO>" + gvAppNo + "</APP_NO>";
		inputXml = inputXml + "<CERT_NO>" + gvCretNo + "</CERT_NO>";
		inputXml = inputXml + "<SCH_COL_UNIV>" + segData[gvPreTranCretCnt][""]  + "</SCH_COL_UNIV>";
		inputXml = inputXml + "<CERT_TITLE>" + segData[gvPreTranCretCnt][""] + "</CERT_TITLE>";
		inputXml = inputXml + "<STUDY_FROM>" + segData[gvPreTranCretCnt][""] + "</STUDY_FROM>";
		inputXml = inputXml + "<STUDY_TO>" + segData[gvPreTranCretCnt][""] + "</STUDY_TO>";
		inputXml = inputXml + "<COUNTRY_ID>" + segData[gvPreTranCretCnt][""] + "</COUNTRY_ID>";
		inputXml = inputXml + "<STUDYLEVEL_ID>" + segData[gvPreTranCretCnt][""] + "</STUDYLEVEL_ID>";
		inputXml = inputXml + "";
	inputparam["ODT"] = inputXml;*/
	
	inputparam["APP_NO"] = gvAppNo;
	inputparam["CERT_NO"] = gvCretNo;
			
	inputparam["SCH_COL_UNIV"] = segData[gvPreTranCretCnt]["lblUniversityDisplay"];
	inputparam["CERT_TITLE"] = segData[gvPreTranCretCnt]["lblCertificateNameDisplay"];
	inputparam["STUDY_FROM"] = segData[gvPreTranCretCnt]["hdPeriodFrom"];
	inputparam["STUDY_TO"] = segData[gvPreTranCretCnt]["hdPeriodTo"];
	inputparam["COUNTRY_ID"] = segData[gvPreTranCretCnt]["hdCountryId"];
	inputparam["STUDYLEVEL_ID"] = segData[gvPreTranCretCnt]["hdStudyLevelId"];
	
	appmiddlewareinvokerasync(inputparam, equiWsInsertPreCertCallback);

}


function equiWsInsertPreCertCallback(status, result) {
	try{
		if (status == 400) 
		{
			if ((kony.os.toNumber(result.opstatus) == 0)) 
			{
				kony.print("result data is------------",result);
				if(result["outPut"] != null && result["outPut"].trim().toUpperCase() == "SUCCESS")
				{
					if(result["prevcertno"] != "" && result["prevcertno"] != null)
						gvPreCretNo = result["prevcertno"] + "~";
					if(gvPreTranCretCnt > 0){
						invokeEquiWsInsertPreCert();
					}
					else
					{				
						gvPreCretNo = gvPreCretNo.substring(0, (gvPreCretNo.length -1));
						gvPreTranCretCnt = "";
						invokeEquiWsInsertTranCert();
						
					}
					
				}
				else
				{
					dismissLoadingIndicator();
					alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
					//frmMainMenu.show();
				}
			}
			else
			{
				dismissLoadingIndicator();
				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
				//frmMainMenu.show();
			}
		}
	}
	catch(err){
		displayError(err);
	}
}

function invokeEquiWsInsertTranCert()
{	
	var segData;
	if(gblDeviceInfo == "tab")
		segData = frmCertEquivalencyTab2.segTransferCredit.data;
	else
		segData = frmCertEquivalency3.segTransferCredit.data;
	
	if(gvPreTranCretCnt == null || gvPreTranCretCnt == "" )
		if(segData == null || segData == "" || segData.length <= 0)
		{
			gvPreTranCretCnt = null;
			invokeEquiWsUploadCert();
			return;
		}
		else
			gvPreTranCretCnt = segData.length;
	
	
	if(isNewCertReg == true)
		gvPreTranCretCnt--;
	else
	{
		skipUnchangeTranCertRecord:do{		
				gvPreTranCretCnt--;
				if(gvPreTranCretCnt < 0 )
				{
					gvPreTranCretCnt = null;
					invokeEquiWsUploadCert();
					return;
				}
				if(segData[gvPreTranCretCnt]["hdTranCretNo"] != "" && segData[gvPreTranCretCnt]["hdIsUpdate"] != true)
					continue skipUnchangeTranCertRecord;
				else
					break;
		}while(1);
	}
	
	
	
	if(gvPreTranCretCnt < 0 )
	{
		gvPreTranCretCnt = null;
		invokeEquiWsUploadCert();
	}

	var inputparam = [];
	//if(isNewCertReg == true)
	if(isNewCertReg == true || (isNewCertReg != true && (segData[gvPreTranCretCnt]["hdTranCretNo"] == null || segData[gvPreTranCretCnt]["hdTranCretNo"] == "")))
		inputparam["serviceID"] = "Equ_Insert_TransCert";
	else
	{
		inputparam["serviceID"] = "Equ_Update_PreCert";
		inputparam["TRANCERT_NO"] = segData[gvPreTranCretCnt]["hdTranCretNo"];
	}
	
	// inputparam["httpheaders"] = {};
	// inputparam["httpconfig"] = {timeout:5};
	inputparam["wsUsrId"] = gvWsUsrId;
	inputparam["wsPwd"] = gvWsPwd;
	/*
	var	inputXml = "";	
		inputXml = inputXml + "<APP_NO>" + gvCretNo + "</APP_NO>";
		inputXml = inputXml + "<CERT_NO>" + gvPreCretNo + "</CERT_NO>";
		inputXml = inputXml + "<SCH_COL_UNIV>" + segData[gvPreTranCretCnt][""] + "</SCH_COL_UNIV>";
		inputXml = inputXml + "<CREDIT_HRS>" + segData[gvPreTranCretCnt][""] + "</CREDIT_HRS>";
		inputXml = inputXml + "<COUNTRY_ID>" + segData[gvPreTranCretCnt][""] + "</COUNTRY_ID>";
		inputXml = inputXml + "";
		
	inputparam["ODT"] = inputXml;*/
	
	inputparam["APP_NO"] = gvCretNo;
	inputparam["CERT_NO"] = gvCretNo;
	
	inputparam["SCH_COL_UNIV"] = segData[gvPreTranCretCnt]["hdUniversityOrCollege"];
	inputparam["CREDIT_HRS"] = segData[gvPreTranCretCnt]["hdNoOfYear"];
	inputparam["COUNTRY_ID"] = segData[gvPreTranCretCnt]["hdCountryId"];
	
	appmiddlewareinvokerasync(inputparam, equiWsInsertTranCertCallback);

}


function equiWsInsertTranCertCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				if(result["outPut"] != null && result["outPut"].trim().toUpperCase() == "SUCCESS")
				{ 
					if(result["TRANCERT_NO"] != "" && result["TRANCERT_NO"] != null)
						gvTranNo = result["TRANCERT_NO"];
					if(gvPreTranCretCnt > 0)
						invokeEquiWsInsertTranCert();
					else
					{
						gvPreTranCretCnt = "";
						invokeEquiWsUploadCert();
					}
				}
				else{
					dismissLoadingIndicator();
					alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
					//frmMainMenu.show();
				}
			}
			else{
				dismissLoadingIndicator();
				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
				//frmMainMenu.show();
				}
		}
	}
	catch(err){
		displayError(err);
	}
}

//var binaryFile;

function invokeEquiWsUploadCert()
{
	try
	{
	/*
	gblAppNoFromInsertApp = gvAppNo;
	resetCertificateEquivalencytab();
	frmCertEnquApplicationSubmit.show();
	dismissLoadingIndicator();
	return;
		*/
	var segData;
	if(gblDeviceInfo == "tab")
		segData = frmCertEquivalencyTab2.segAttachment.data;
	else
		segData = frmCerEquivalencyAttach.segAttachment.data;
		
	if(gvPreTranCretCnt == null || gvPreTranCretCnt == "" )
		if(segData == null || segData == "" || segData.length <= 0)
		{
			gblAppNoFromInsertApp = gvAppNo;
			//resetCertificateEquivalencytab();
			
			frmCertEnquApplicationSubmit.show();
			dismissLoadingIndicator();
			return;
		}
		else
			gvPreTranCretCnt = segData.length;
	
	gvPreTranCretCnt--;
	
	
	if(gvPreTranCretCnt < 0 )	//Commented Out due to Demo
	{
		
		gblAppNoFromInsertApp = gvAppNo;
		frmCertEnquApplicationSubmit.show();
		dismissLoadingIndicator();
		return;
	}

	var inputparam = [];
	inputparam["serviceID"] = "Equi_UploadFile_2";
	//inputparam["httpheaders"] = {};
	//inputparam["httpconfig"] = {timeout:5};
	inputparam["wsUsrId"] = gvWsUsrId;
	inputparam["wsPwd"] = gvWsPwd;
	
	var binaryFile=segData[gvPreTranCretCnt]["hdPath"];
	
	/*
	if(deviceName=="android"){
		var filepath = segData[gvPreTranCretCnt]["hdPath"]; 
	    binaryFile = FileExplorer.convertIntoByte(filepath);
	  	attachLength= binaryFile.toString().length;
		if(attachLength > 5242880){
			binaryFile = FileExplorer.convertIntoReducedByte(filepath);
		}
    } else {
    	binaryFile = "image";//segData[gvPreTranCretCnt]["hdPath"]
    } 
		var	inputXml = "";	
		inputXml = inputXml + "<APP_NO>" + gvAppNo + "</APP_NO>";
		inputXml = inputXml + "<FILENAME>" + segData[gvPreTranCretCnt][""] + "</FILENAME>";
		inputXml = inputXml + "<DESCRIPTION>" + segData[gvPreTranCretCnt][""] + "</DESCRIPTION>";
		inputXml = inputXml + "<FILEDATA>" + binaryFile + "</FILEDATA>";
		inputXml = inputXml + "";
		
	inputparam["ODT"] = inputXml;*/
	
	inputparam["APP_NO"] = gvAppNo;
	inputparam["FILENAME"] = segData[gvPreTranCretCnt]["lblFileName"]+".jpg";
	inputparam["DESCRIPTION"] = segData[gvPreTranCretCnt]["hdFileDesc"];
	inputparam["Content"] = binaryFile.toString();

	// kony.print("inputparam for Equi_UploadFile_2 are ***********",inputparam);
	
	appmiddlewareinvokerasync(inputparam, equiWsUploadCallback);
	}
	catch(err)
	{
	dismissLoadingIndicator();
	alertDialog(kony.i18n.getLocalizedString("imgmaxsizeexceeds"));
	}
	
}

function equiWsUploadCallback(status, result) {
	try{
		if (status == 400) {
				kony.print("result data is----------",result);
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				if (result["output"] == "SUCCESS" && result["result"]  == "true") {
					if(gvPreTranCretCnt > 0)
					{
						//binaryFile="";
						invokeEquiWsUploadCert();
					}
					else
					{	
						gblAppNoFromInsertApp = gvAppNo;
						frmCertEnquApplicationSubmit.show();
						gvPreTranCretCnt = "";
						dismissLoadingIndicator();
						return;
					}
				}
				else{
					dismissLoadingIndicator();
					alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
					//frmMainMenu.show();
				}
			}
			else{
				dismissLoadingIndicator();
				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
				//frmMainMenu.show();
				}
		}
	}
	catch(err){
		//displayError(err);
		alertDialog(kony.i18n.getLocalizedString("imgmaxsizeexceeds"));
	}
}
function resetCertificateEquivalency()
{
	//cert equi page1
	frmCertEquivalency1.txtCertSubittedBy.text="";
	frmCertEquivalency1.dropdownStudyLevel.selectedKey="0";
	frmCertEquivalency1.txtMajor.text="";
	frmCertEquivalency1.txtIssueBy.text="";
	frmCertEquivalency1.dropdowncountryofexam.selectedKey="0";
	frmCertEquivalency1.rbimgPublic.src="unchecked.png";
	frmCertEquivalency1.rbimgprivate.src="unchecked.png";
	frmCertEquivalency1.rbimgmale.src="unchecked.png";
	frmCertEquivalency1.rbimgfemale.src="unchecked.png";
	
	//cert equi page2
	frmCertEquivalency2.dropdowncountryofexam.selectedKey="0";
	frmCertEquivalency2.cmbTypeOfStudy.selectedKey="0";
	frmCertEquivalency2.txtBoxOthers.text="";
	frmCertEquivalency2.imgSelf.src="unchecked.png";
	frmCertEquivalency2.imgSponser.src="unchecked.png";
	frmCertEquivalency2.txtSponsoredBy.text="";
	frmCertEquivalency2.txtNoofyears.text="";
	frmCertEquivalency2.txtStartYear.text="";
	frmCertEquivalency2.txtGraduationYear.text="";
	frmCertEquivalency2.dropdownCountryWhereExam.selectedKey="0";
	frmCertEquivalency2.dropdownpaymentmethodtype.selectedKey="SPMT";
	frmCertEquivalency2.dropdownpaymentcardtype.selectedKey="0";
	frmCertEquivalency2.txtNote.text="";
	
	//cert equi page3
	frmCertEquivalency3.txtUniversityOrCollege.text="";
	frmCertEquivalency3.dropdownTransfCountry.selectedKey="0";
	frmCertEquivalency3.txtTransfNoofyears.text="";
	frmCertEquivalency3.segTransferCredit.data=null;
	//cert equi page4

	frmCertEquivalency4.dropdownlevel.selectedKey="0";
	frmCertEquivalency4.txtSchoolCollegeUniv.text="";
	frmCertEquivalency4.txtCertificate.text="";
	frmCertEquivalency4.comboboxPreCertCountry.selectedKey="0";
	frmCertEquivalency4.txtPeriodFrom.text="";
	frmCertEquivalency4.txtPeriodTo.text="";
	frmCertEquivalency4.segPreviousCertificate.data=null;
	
	//cert equi page5
	frmCerEquivalencyAttach.txtDescription.text="";
	frmCerEquivalencyAttach.segAttachment.data=null;
	
	
}
function resetCertificateEquivalencytab()
{
	//cert equi page1
	frmCertEquivalencyTab1.txtCertSubittedBy.text="";
	frmCertEquivalencyTab1.dropdownStudyLevel.selectedKey="0";
	frmCertEquivalencyTab1.txtMajor.text="";
	//frmCertEquivalencyTab1.txtIssueBy.text="";
	frmCertEquivalencyTab1.dropdowncountryofexam.selectedKey="0";
	frmCertEquivalencyTab1.rbimgPublic.src="unchecked.png";
	frmCertEquivalencyTab1.rbimgprivate.src="unchecked.png";
	frmCertEquivalencyTab1.rbimgmale.src="unchecked.png";
	frmCertEquivalencyTab1.rbimgfemale.src="unchecked.png";
	
	//cert equi page2
	frmCertEquivalencyTab1.dropdowncountryofexam.selectedKey="0";
	frmCertEquivalencyTab1.cmbTypeOfStudy.selectedKey="0";
	frmCertEquivalencyTab1.txtBoxOthers.text="";
	frmCertEquivalencyTab1.imgSelf.src="unchecked.png";
	frmCertEquivalencyTab1.imgSponser.src="unchecked.png";
	frmCertEquivalencyTab1.txtSponsoredBy.text="";
	frmCertEquivalencyTab1.txtNoofyears.text="";
	frmCertEquivalencyTab1.txtStartYear.text="";
	frmCertEquivalencyTab1.txtGraduationYear.text="";
	frmCertEquivalencyTab1.dropdownCountryWhereExam.selectedKey="0";
	frmCertEquivalencyTab1.dropdownpaymentmethodtype.selectedKey="SPMT";
	frmCertEquivalencyTab1.dropdownpaymentcardtype.selectedKey="0";
	frmCertEquivalencyTab1.txtNote.text="";
	
	//cert equi page3
	frmCertEquivalencyTab2.txtUniversityOrCollege.text="";
	frmCertEquivalencyTab2.dropdownTransfCountry.selectedKey="0";
	frmCertEquivalencyTab2.txtTransfNoofyears.text="";
	frmCertEquivalencyTab2.segAttachment.data=null;
	
	//cert equi page4

	frmCertEquivalencyTab2.dropdownlevel.selectedKey="0";
	frmCertEquivalencyTab2.txtSchoolCollegeUniv.text="";
	frmCertEquivalencyTab2.txtCertificate.text="";
	frmCertEquivalencyTab2.comboboxPreCertCountry.selectedKey="0";
	frmCertEquivalencyTab2.txtPeriodFrom.text="";
	frmCertEquivalencyTab2.txtPeriodTo.text="";
	frmCertEquivalencyTab2.segPreviousCertificate.data=null;
	frmCertEquivalencyTab2.segTransferCredit.data=null;
	
	//cert equi page5
	frmCertEquivalencyTab2.txtDescription.text="";
	
	
}



function loadequivalencycomposite()
{
	// gvAppNo = "201415357";
	try{
		if((gblDeviceInfo == "tab" && kony.application.getCurrentForm() == frmCertEquivalencyTab2) || ( gblDeviceInfo != "tab" && (kony.application.getCurrentForm() == frmCertEquivalency2 || kony.application.getPreviousForm() == frmCertEquivalency2)))
			return;
		showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
			    
		//gvAppNo = "201412160";
		var inputparam = [];
		inputparam["serviceID"] = "EquivalencyCompositeService";
		if(gvAppNo != null && gvAppNo != "")
		{
			inputparam["serviceID"] = "getRegCretRelatedDetails";
			inputparam["APP_NO"] = gvAppNo;
			if(isNewCertReg != true)
				inputparam["CERT_NO"] = gvCretNo;
			else
				inputparam["CERT_NO"] = "";
				
		}
		isGenderMaleSerVal="";
		// inputparam["httpheaders"] = {};
		// inputparam["httpconfig"] = {timeout:5};
		inputparam["wsUsrId"] = gvWsUsrId;
		inputparam["wsPwd"] = gvWsPwd;
	
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, equivalencycompositcallback);
	}
	catch(err){
		displayError(err);
	}
}

function equivalencycompositcallback(status, result) {
	try{
		kony.print("in call back");
		kony.print("result is "+result);
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				if(result["outputCountry"] == "SUCCESS" && result["outputstudylevel"]=="SUCCESS" && result["output"]=="SUCCESS" ){
					var comboboxData = [];
					comboboxData=[{"mykey":"0","myvalue":kony.i18n.getLocalizedString("lblSelectCountry")}];
					for(var i=0;i<result["countriesList"].length;i++){
						var key = result["countriesList"][i]["countryID"];
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA")
							value = result["countriesList"][i]["countyName_ar"];
						else
							value = result["countriesList"][i]["countyName_en"];
							comboboxData.push({"mykey":key,"myvalue":value})
						}
							
						var emiratesListData = [];
						emiratesListData=[{"mykey":"0","myvalue":kony.i18n.getLocalizedString("lblSelectEmirate")}];
						for(var i=0;i<result["emiratesList"].length;i++){
							var key = result["emiratesList"][i]["emirateID"];
							var value = "";
							if (kony.i18n.getCurrentLocale() == "ar_SA")
								value = result["emiratesList"][i]["emirateName_ar"];
							else
								value = result["emiratesList"][i]["emirateName_en"];
							emiratesListData.push({"mykey":key,"myvalue":value})
						}
							var comboboxStudyLevelData = [];
							comboboxStudyLevelData=[{"mykey":"0","myvalue":kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel")}];
							for(var i=0;i<result["studyLevelList"].length;i++)
							{
							var key = result["studyLevelList"][i]["studyLevelID"];
							var value = "";
								if (kony.i18n.getCurrentLocale() == "ar_SA")
									value = result["studyLevelList"][i]["studyLevel_ar"];
								else
									value = result["studyLevelList"][i]["studyLevel_en"];
								comboboxStudyLevelData.push({"mykey":key,"myvalue":value})
					
							}
					
							var comboboxPaymentMethodTypeData = [];
							comboboxPaymentMethodTypeData=[{"mykey":"SPMT","myvalue":kony.i18n.getLocalizedString("lblPleaseSelectProperPayment")}];
							for(var i=0;i<result["paymentsList"].length;i++)
							{
							var key = result["paymentsList"][i]["paymentMethodTypelID"];
							var value = "";
								if (kony.i18n.getCurrentLocale() == "ar_SA")
									value = result["paymentsList"][i]["paymentMethodType_ar"];
								else
									value = result["paymentsList"][i]["paymentMethodType_en"];
								comboboxPaymentMethodTypeData.push({"mykey":key,"myvalue":value})
					
							}
							//alert("emiratesListData " + JSON.stringify(emiratesListData));
								if(gblDeviceInfo!="tab")
								{	
								kony.print("mob success");
									frmCertEquivalency1.dropdowncountryofexam.masterDataMap=[comboboxData,"mykey","myvalue"];
									frmCertEquivalency1.dropdowncountryofexam.selectedKey="0";
									frmCertEquivalency1.dropdownemirate.masterDataMap=[emiratesListData,"mykey","myvalue"];
									frmCertEquivalency1.dropdownemirate.selectedKey="0";
									frmCertEquivalency2.dropdownCountryWhereExam.masterDataMap=[comboboxData,"mykey","myvalue"];
									frmCertEquivalency2.dropdownCountryWhereExam.selectedKey="0";
									frmCertEquivalency3.dropdownTransfCountry.masterDataMap=[comboboxData,"mykey","myvalue"];
									frmCertEquivalency3.dropdownTransfCountry.selectedKey="0";
									frmCertEquivalency4.comboboxPreCertCountry.masterDataMap=[comboboxData,"mykey","myvalue"];
									frmCertEquivalency4.comboboxPreCertCountry.selectedKey="0";
									frmCertEquivalency1.dropdownStudyLevel.masterDataMap=[comboboxStudyLevelData,"mykey","myvalue"];
									frmCertEquivalency1.dropdownStudyLevel.selectedKey="0";
									//frmCertEquivalency4.dropdownlevel.masterDataMap=[comboboxStudyLevelData,"mykey","myvalue"];
									//frmCertEquivalency4.dropdownlevel.selectedKey="0";
									frmCertEquivalency2.dropdownpaymentmethodtype.masterDataMap=[comboboxPaymentMethodTypeData,"mykey","myvalue"];
									frmCertEquivalency2.dropdownpaymentmethodtype.selectedKey = "SPMT";
								}
								else
								{
									frmCertEquivalencyTab1.dropdowncountryofexam.masterDataMap=[comboboxData,"mykey","myvalue"];
									frmCertEquivalencyTab1.dropdowncountryofexam.selectedKey="0";
									frmCertEquivalencyTab1.dropdownemirate.masterDataMap=[emiratesListData,"mykey","myvalue"];
									frmCertEquivalencyTab1.dropdownemirate.selectedKey="0";
									frmCertEquivalencyTab1.dropdownCountryWhereExam.masterDataMap=[comboboxData,"mykey","myvalue"];
									frmCertEquivalencyTab1.dropdownCountryWhereExam.selectedKey="0";
									frmCertEquivalencyTab2.dropdownTransfCountry.masterDataMap=[comboboxData,"mykey","myvalue"];
									frmCertEquivalencyTab2.dropdownTransfCountry.selectedKey="0";
									frmCertEquivalencyTab2.comboboxPreCertCountry.masterDataMap=[comboboxData,"mykey","myvalue"];
									frmCertEquivalencyTab2.comboboxPreCertCountry.selectedKey="0";
									frmCertEquivalencyTab1.dropdownStudyLevel.masterDataMap=[comboboxStudyLevelData,"mykey","myvalue"];
									frmCertEquivalencyTab1.dropdownStudyLevel.selectedKey="0";
									frmCertEquivalencyTab2.dropdownlevel.masterDataMap=[comboboxStudyLevelData,"mykey","myvalue"];
									frmCertEquivalencyTab2.dropdownlevel.selectedKey="0";
									frmCertEquivalencyTab1.dropdownpaymentmethodtype.masterDataMap=[comboboxPaymentMethodTypeData,"mykey","myvalue"];
									frmCertEquivalencyTab1.dropdownpaymentmethodtype.selectedKey = "SPMT";
									
								}
							if(isNewCertReg != true)
								assignRegCretRelatedDetails(result);
							else
								dismissLoadingIndicator();
								
					
				}
				else{
					dismissLoadingIndicator();
					alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
					//showErrMsgWithHandle(kony.i18n.getLocalizedString("loadingIndicator"),goToManiMenu);
					}
			}
			else{
				dismissLoadingIndicator();
				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
					//showErrMsgWithHandle(kony.i18n.getLocalizedString("loadingIndicator"),goToManiMenu);
				}
		}
	}
	catch(err){
		displayError("equivalencycompositcallback" + err);
		dismissLoadingIndicator();
	}
}
function loadpaymentmethod(){
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
		if(gblDeviceInfo!="tab")
				{
					var inputparam = {
	        		serviceID: "Select_PaymentMethod",
	        		paymentMethodTypeID:frmCertEquivalency2.dropdownpaymentmethodtype.selectedKey
	    			};
	    		}
	    else
	    		{
	    			var inputparam = {
	        		serviceID: "Select_PaymentMethod",
	        		paymentMethodTypeID:frmCertEquivalencyTab1.dropdownpaymentmethodtype.selectedKey
	    			};
	    		}
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, paymentmethodcallback);
	}
	catch(err){
		displayError(err);
	}
}
function paymentmethodcallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				if(result["output"] == "SUCCESS"){
					var comboboxData = [];
					comboboxData=[{"mykey":"0","myvalue":kony.i18n.getLocalizedString("lblPleaseSelectPaymentMethod")}];
					kony.print("success");
					for(var i=0;i<result["paymentMethodsList"].length;i++){
						var key = result["paymentMethodsList"][i]["paymentMethodCode"];
						kony.print("key set");
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA")
							value = result["paymentMethodsList"][i]["paymentMethod_ar"];
						else
							value = result["paymentMethodsList"][i]["paymentMethod_en"];
							kony.print("en set");
							comboboxData.push({"mykey":key,"myvalue":value})
					}
					if(gblDeviceInfo!="tab")
					{	
					frmCertEquivalency2.dropdownpaymentcardtype.masterDataMap=[comboboxData,"mykey","myvalue"];
					frmCertEquivalency2.dropdownpaymentcardtype.selectedKeyValue="0";
					dismissLoadingIndicator();
					}
					else
					{
					frmCertEquivalencyTab1.dropdownpaymentcardtype.masterDataMap=[comboboxData,"mykey","myvalue"];
					frmCertEquivalencyTab1.dropdownpaymentcardtype.selectedKeyValue="0";
					dismissLoadingIndicator();
					}
					
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

function invokeEquiWsGetCertList() 
{
	//gvAppNo = "201412160";
	//gvAppNo = "";
	if(gvAppNo == null || gvAppNo == "")
	{
		//frmCertEquivalency1.show();
		if(gblDeviceInfo == "tab")
			frmCertEquivalencyTab1.show();
		else 
			frmCertEquivalency1.show();
		return;
	} else {
	showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
	
	var inputparam = [];
	inputparam["serviceID"] = "getRegCretList";
	// inputparam["httpheaders"] = {};
	// inputparam["httpconfig"] = {timeout:5};
	inputparam["wsUsrId"] = gvWsUsrId;
	inputparam["wsPwd"] = gvWsPwd;
	
	inputparam["APP_NO"] = gvAppNo;
	appmiddlewareinvokerasync(inputparam, equiWsGetCertListCallback);
	}
	
}

function equiWsGetCertListCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				var certList = result["CERT_Details"];
				var studyLevelList = result["studyLevelList"];
				var segCertListData = [];
				var studyLevel;
				
				for(var i=0;i<certList.length;i++)
					for(var j=0;j<studyLevelList.length;j++)
						if(studyLevelList[j]["studyLevelID"] == certList[i]["STUDYLEVEL_ID"])
						{
							if (kony.i18n.getCurrentLocale() == "ar_SA")
								studyLevel = studyLevelList[j]["studyLevel_ar"];
							else
								studyLevel = studyLevelList[j]["studyLevel_en"];
							segCertListData.push(
												{
													"lblCertNo" : "Certificate No.:",
													"lblCertNoVal" :certList[i]["CERT_NO"],
													"lblCert" : "Certificate:",
													"lblCertVal" :certList[i]["CERT_TITLE"],
													"lblStudyLevel" : "Study Level:",
													"lblStudyLevelVal" :studyLevel,
													"lblStatus" : "Status:",
													"lblStatusVal" :certList[i]["STATUS_ID"],
													"imgNext":"next.png"
													
												}
											);
							break;
						}
				if(segCertListData.length > 0)
					frmCertificateEquivalencyLanding.segRegisteredCertificate.setData(segCertListData);
				dismissLoadingIndicator();
				
			}
			else{
				dismissLoadingIndicator();
				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
				//frmMainMenu.show();
				}
		}
	}
	catch(err){
		displayError(err);
	}
}




function assignRegCretRelatedDetails(result) {
	try{
		if ((kony.os.toNumber(result.opstatus) == 0)) 
		{
			kony.print("result data is------------",result);
			var appNoDetails = result["appNoDetails"];
			var certdetails = result["certdetails"];
			var transcertdetails = result["transcertdetails"];
			var precertdetails = result["precertdetails"];
			
			var countriesList = result["countriesList"];
			var studyLevelList = result["studyLevelList"];
			
			var curFrm;
			kony.print("certdetails " + certdetails);
			kony.print("Json certdetails " + JSON.stringify(certdetails));
			//kony.print("Json certdetails[0] " + JSON.stringify(certdetails[0]));
			
			if(appNoDetails != null && appNoDetails != "" && appNoDetails.length > 0 )
			{
				kony.print("appNoDetails 123in " + appNoDetails);
				//alert("appNoDetails 123in " + appNoDetails);
				//alert("dropdownemirate.masterDataMap 123in " + JSON.stringify(frmCertEquivalency1.dropdownemirate.masterDataMap));
				//alert("EMIRATE_ID 123in " + appNoDetails[0]["EMIRATE_ID"]);
				if(gblDeviceInfo == "tab")
					curFrm = frmCertEquivalencyTab1;
				else
					curFrm = frmCertEquivalency1;
					
				curFrm.rbimgmale.src = "unchecked.png";
				curFrm.rbimgfemale.src = "unchecked.png";
				setGender((appNoDetails[0]["GENDER"] == "1"?true:false),curFrm.rbimgmale,curFrm.rbimgfemale);
				
				//var emirateId = appNoDetails[0]["EMIRATE_ID"];
				//frmCertEquivalency1.dropdownemirate["selectedKey"] = emirateId;
				//frmCertEquivalency1.dropdownemirate.selectedKey = kony.os.toNumber(appNoDetails[0]["EMIRATE_ID"]);
				/*	
				curFrm.dropdownemirate.selectedKey = ((appNoDetails[0]["EMIRATE_ID"] == null || appNoDetails[0]["EMIRATE_ID"] == "")? 0:appNoDetails[0]["EMIRATE_ID"]);
					
				*/
				isGenderMaleSerVal = (curFrm.rbimgmale.src == "checked.png"?true:false);
			}
			if(certdetails != null && certdetails != "")
			{
				kony.print("certdetails 123in " + certdetails);
				if(gblDeviceInfo == "tab")
					curFrm = frmCertEquivalencyTab1;
				else
					curFrm = frmCertEquivalency1;
				//frmCertEquivalency1.txtCertSubittedBy.text = ""; 	
				curFrm.txtCertSubittedBy.text = certdetails[0]["CERT_TITLE"];
				//curFrm.dropdownStudyLevel.selectedKey = certdetails[0]["STUDYLEVEL_ID"];
				curFrm.txtMajor.text = certdetails[0]["MAJOR"];
				setGender((certdetails[0]["CERT_ISSUE_ORG"] == "1"?true:false),curFrm.rbimgPublic,curFrm.rbimgprivate);
				//curFrm.dropdowncountryofexam.selectedKey = certdetails[0]["CERT_ISSUE_ORG_CNT"];
					
				if(gblDeviceInfo != "tab")
					curFrm = frmCertEquivalency2;
					
				curFrm.cmbTypeOfStudy.selectedKey = certdetails[0]["STUDYTYPE_ID"];
				curFrm.txtBoxOthers.text = certdetails[0]["STUDYTYPE_OTH"];
				setGender((certdetails[0]["SPONSER_ID"] == "1"?true:false),curFrm.imgSelf,curFrm.imgSponser)
				curFrm.txtSponsoredBy.text = certdetails[0]["SPONSER_AUTH"];
				curFrm.txtNoofyears.text = certdetails[0]["NOOF_YEARS"];
				curFrm.txtStartYear.text = certdetails[0]["STUDY_START_DT"];
				curFrm.txtGraduationYear.text = certdetails[0]["GRADUATION_DT"];
				//curFrm.dropdownCountryWhereExam.selectedKey = certdetails[0]["EXAM_HELD_COUNTRY_ID"];
			}
			if(transcertdetails != null && transcertdetails != "")
			{
				kony.print("transcertdetails 123in " + transcertdetails);
				var transSegCertListData = [];
				
				if(gblDeviceInfo == "tab")
					curFrm = frmCertEquivalencyTab2;
				else
					curFrm = frmCertEquivalency3;
				
				for(var i=0;i<transcertdetails.length;i++)
				{
					
					if(transcertdetails[i]["CERT_NO"] == null || transcertdetails[i]["CERT_NO"] == "" || transcertdetails[i]["CERT_NO"] != gvCretNo)
						continue;					
										
					var tranCretNo=transcertdetails[i]["TRANCERT_NO"];
					var university=transcertdetails[i]["SCH_COL_UNIV"];
					var years=transcertdetails[i]["CREDIT_HRS"];
					var countryId = transcertdetails[i]["COUNTRY_ID"];
					var country;
					
					kony.print("transcertdetails[\"CERT_NO\"] " + transcertdetails[i]["CERT_NO"]);
					kony.print("gvCretNo " + gvCretNo);
					kony.print("countryId " + countryId);
					kony.print("countriesList " + countriesList);
					kony.print("Json countriesList " + JSON.stringify(countriesList));
					kony.print("Json countriesList[0] " + JSON.stringify(countriesList[0]));
					for(var j=0;j<countriesList.length;j++)
						if(countriesList[j]["countryID"] != countryId)
							kony.print("Json countriesList["+j.toString()+"] " + JSON.stringify(countriesList[j]));
						else if(countriesList[j]["countryID"] == countryId)
						{
							if (kony.i18n.getCurrentLocale() == "ar_SA")
								country = countriesList[j]["countyName_ar"];
							else
								country = countriesList[j]["countyName_en"];
							break;
						}
					
					transSegCertListData.push(
										{	
											lblTransCertTitle:university+", "+country+", "+years+".",
											imgTransEdit:"edit_on.png",
											imgTransDel:"delete.png",
											"hdUniversityOrCollege":university,
											"hdCountry":country,
											"hdNoOfYear":years,
											"hdCountryId":countryId,
											"hdTranCretNo":tranCretNo,
											"hdIsUpdate":""
										});
				}
				if(transSegCertListData.length > 0)
					curFrm.segTransferCredit.setData(transSegCertListData);
			}
			if(precertdetails != null && precertdetails != "")
			{
				kony.print("precertdetails 123in " + precertdetails);
					
				if(gblDeviceInfo == "tab")
					curFrm = frmCertEquivalencyTab2;
				else
					curFrm = frmCertEquivalency4;
					
				var preCertSegListData = [];
				
				
				for(var i=0;i<precertdetails.length;i++)
				{		
					//if(precertdetails[i]["CERT_NO"] == null || precertdetails[i]["CERT_NO"] == "" || precertdetails[i]["CERT_NO"] != gvCretNo)
					//	continue;					
				
					var country;
					var studyLevel;
					
					kony.print("1countriesList " + countriesList);
					kony.print("Json 1countriesList " + JSON.stringify(countriesList));
					for(var j=0;j<countriesList.length;j++)
						if(countriesList[j]["countryID"] == precertdetails[i]["COUNTRY_ID"])
						{
							if (kony.i18n.getCurrentLocale() == "ar_SA")
								country = countriesList[j]["countyName_ar"];
							else
								country = countriesList[j]["countyName_en"];
							break;
						}
					for(var j=0;j<studyLevelList.length;j++)
						if(studyLevelList[j]["studyLevelID"] == precertdetails[i]["STUDYLEVEL_ID"])
						{
							if (kony.i18n.getCurrentLocale() == "ar_SA")
								country = studyLevelList[j]["studyLevel_ar"];
							else
								country = studyLevelList[j]["studyLevel_en"];
							break;
						}
					
						preCertSegListData.push(
										{	
											lblPrevCertLevel:"Level : "+studyLevel,
											lblUniversitySegDisplay:"University : "+precertdetails[i]["SCH_COL_UNIV"],
											lblCertificateNameSegDisplay:"Certificate : "+precertdetails[i]["CERT_TITLE"],
											lblCountryYearSegDisplay:"Country : "+"indiaTest",	
											lblPrevCertYear:"Period From : "+precertdetails[i]["STUDY_FROM"]+" to : "+precertdetails[i]["STUDY_TO"],
											lblUniversityDisplay:precertdetails[i]["SCH_COL_UNIV"],
											lblCertificateNameDisplay:precertdetails[i]["CERT_TITLE"],
											lblCountryYearDisplay:"egypt",
											imgPreCertEdit:"edit_on.png",
											imgPreCertDel:"delete.png",
											"hdStudyLevelId": precertdetails[i]["STUDYLEVEL_ID"],
											"hdStudyLevel": studyLevel,
											"hdCountry": "egypt",
											"hdCountryId": "66",
											"hdPeriodFrom":precertdetails[i]["STUDY_FROM"],
											"hdPeriodTo":precertdetails[i]["STUDY_TO"],
											"hdPrevCretNo": precertdetails[i]["PREVCERT_NO"],
											"hdIsUpdate":""
											});
				}
				if(preCertSegListData.length > 0)
					curFrm.segPreviousCertificate.setData(preCertSegListData);
			}
			
			dismissLoadingIndicator();
		}
		else{
			dismissLoadingIndicator();
			alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
			//frmMainMenu.show();
			}
	}
	catch(err){
		displayError("assignRegCretRelatedDetails " + err);
		dismissLoadingIndicator();
	}
}

function frmCertificateEquivalencyLanding_segRegisteredCertificate_onRowClick()
{
	isNewCertReg = false;
	gvCretNo = frmCertificateEquivalencyLanding.segRegisteredCertificate.selectedItems[0]["lblCertNoVal"];
	if(gblDeviceInfo == "tab")
		frmCertEquivalencyTab1.show();
	else 
		frmCertEquivalency1.show();
}