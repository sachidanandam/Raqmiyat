var attesGradObj = new Object();
var gblAppNoFromInsertApp = "";
var gblNoOfDocs = "1";
isPreStudyLevel=1;
isPurpose=true;
isAttes=true;

var gblLoggedUserID = "";
var AttestCamBase64 = "";
isSaveAttach=true;
isSaveAttachNewUser = false;
attachLength=0;
isCaptureMaxlengthExceeds=false;
gblNewRegNationalityID = "";
isSendingImageNewUser = false;
gblResetFlag=false;

function validateUser(){
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));
		var inputparam = {
	        serviceID: "Select_CheckUser",
	        userName:(kony.application.getCurrentForm().id == "frmLogin")?frmLogin.txtusername.text:frmLoginAR.txtusername.text,
	        userPassword:(kony.application.getCurrentForm().id == "frmLogin")?frmLogin.txtpassword.text:frmLoginAR.txtpassword.text
	            
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, validateUserCallback);
	}
	catch(err){
		displayError(err);
	}
}

function validateUserCallback(status, result) {
	try{
	
		var currForm = kony.application.getCurrentForm();

		// currForm.txtusername.text = "";
		// currForm.txtpassword.text = "";
	kony.print("status code is :" + status + " and result is " + result);
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				if(result["result"] == "0" || result["result"] == 0){
					dismissLoadingIndicator();
					if(kony.application.getCurrentForm().id == "frmLogin"){
						frmLogin.txtusername.text = "";
						frmLogin.txtpassword.text = "";
					}
					else{
						frmLoginAR.txtusername.text = "";
						frmLoginAR.txtpassword.text = "";
					}
					alertDialog(kony.i18n.getLocalizedString("lblInvalidUserPass"));
					gblErrWidgetRefId = currForm.txtusername;
				}
				else{
					gblLoggedUserID = result["result"];
					dismissLoadingIndicator();
					frmMainMenu.show();
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
function checkUserName(){
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblCheckUserAvail"));
		var inputparam = {
	        serviceID: "Select_ValidUser",
	        userName:frmNewReg.txtuserid.text
	        
	            
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, checkUserNameCallback);
	}
	catch(err){
		displayError(err);
	}
}
function checkUserNameCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				if(result["output"] == "FAIL"){
					dismissLoadingIndicator();
					frmNewReg.button155182739504172.setEnabled(true);
				 
				}
				else{
					dismissLoadingIndicator();
					frmNewReg.txtuserid.text = "";
					frmNewReg.txtuserid.setFocus(true);
					//alert(kony.i18n.getLocalizedString("lblUserExists"));
					alertDialog(kony.i18n.getLocalizedString("lblUserExists"));
					frmNewReg.button155182739504172.setEnabled(false);
					return;
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


function insertNewUser(){
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblProcessPlsWait"));
		var inputparam = {
	        serviceID: "Insert_NewUser",
	        appName: frmNewReg.txtname.text, 
	        nationalityId: frmNewReg.dropdownnationality.selectedKey,
	        userName: frmNewReg.txtuserid.text,
	        userPassword: frmNewReg.txtpassword.text,
	        mobile: frmNewReg.txtmobilenumber.text,
	        email: frmNewReg.txtemailid.text,
	        emiratesId: frmNewReg.txtemiratesid1.text +"-"+ frmNewReg.txtemiratesid2.text +"-"+ frmNewReg.txtemiratesid3.text +"-"+ frmNewReg.txtemiratesid4.text,
	        mobileCode: frmNewReg.dropdownmobileareacode.selectedKey,
	        passportNo: frmNewReg.txtpassportnumber.text
	        
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, insertNewUserCallback);
	}
	catch(err){
		displayError(err);
	}
}

function insertNewUserCallback(status, result) {
	try{
		if (status == 400) {
			if (kony.os.toNumber(result.opstatus) == 0) {
				kony.print("result data is------------",result);
				if(result["resultNew"] == "true" || result["resultNew"] == true){
					//saveAttachmetNewUser();
					if(isSaveAttachNewUser==true && isSendingImageNewUser == true)
						saveAttachmetNewUser();
					else{
						dismissLoadingIndicator();
						//alert(kony.i18n.getLocalizedString("lblNewUserSuccInsFail"));
						resetNewRegForm();
						alertDialog(kony.i18n.getLocalizedString("lblNewUserSuccInsFail"));
						if(isArabicLocale == true)
							frmLoginAR.show();
						else
							frmLogin.show();
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

function saveAttachmetNewUser(){
	try{
		var inputparam = {
	        serviceID: "SaveUserAttachment",
	        userID:frmNewReg.txtuserid.text,
	        content: camBase64,
	        fileName: frmNewReg.txtuserid.text
	            
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, saveAttachmetNewUserCallback);
	}
	catch(err){
		displayError(err);
	}
}
function saveAttachmetNewUserCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				resetNewRegForm();
				if(result["result"] == "true"){
					dismissLoadingIndicator();
					//alert(kony.i18n.getLocalizedString("lblNewUserSucc"));
					alertDialog(kony.i18n.getLocalizedString("lblNewUserSucc"));
					frmNewReg.imgCamPreview.setVisibility(false);
					isSendingImageNewUser = false;
					if(isArabicLocale == true)
						frmLoginAR.show();
					else
						frmLogin.show();
				}else{
					dismissLoadingIndicator();
					//alert(kony.i18n.getLocalizedString("lblNewUserSuccInsFail"));
					alertDialog(kony.i18n.getLocalizedString("lblNewUserSuccInsFail"));
					frmNewReg.imgCamPreview.setVisibility(false);
					isSendingImageNewUser = false;
					if(isArabicLocale == true)
						frmLoginAR.show();
					else
						frmLogin.show();
				}
				
					
			}
			else{
				dismissLoadingIndicator();
				frmNewReg.imgCamPreview.setVisibility(false);
				isSendingImageNewUser = false;
				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
			}
		}
	}
	catch(err){
		displayError(err);
	}
}

function saveAttachmetAttestation(){
	try{
		var inputparam = {
	        serviceID: "SaveAttachment",
	        appNOAtt:gblAppNoFromInsertApp,
	        contentAtt:camBase64 ,//AttestCamBase64
	        fileNameAtt: gblLoggedUserID+"_"+selectedCategory
	            
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, saveAttachmetAttestationCallback);
	}
	catch(err){
		displayError(err);
	}
}
function saveAttachmetAttestationCallback(status, result) {
	try{
		if (status == 400) 
		{
			if ((kony.os.toNumber(result.opstatus) == 0)) 
			{
				kony.print("result data is------------",result);
				if(result["resultAtt"] == "true")
				{
										
					
					frmApplicationSubmit.show();
					dismissLoadingIndicator();
				}
				else
				{
					dismissLoadingIndicator();
					
					alertDialog(kony.i18n.getLocalizedString("lblAttachFailed"));
					frmApplicationSubmit.show();
				}
				
					
			}
			else{
				alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
			}
		}
	}
	catch(err){
		displayError(err);
	}
}


function invokeCompositService(){
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
		var inputparam = {
	        serviceID: "getCountriesAndMobileCodes"
	        
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, compositCallback);
	}
	catch(err){
		displayError(err);
	}
	}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}

function compositCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				if(result["outputCountry"] == "SUCCESS" && result["output"] == "SUCCESS" && result["emiratesOutput"] == "SUCCESS"){
					var comboboxData = [];
					for(var i=0;i<result["countriesList"].length;i++){
						var key = result["countriesList"][i]["countryID"];
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA")
							value = result["countriesList"][i]["countyName_ar"];
						else
							value = result["countriesList"][i]["countyName_en"];
						comboboxData.push({"mykey":key,"myvalue":value})
					
					}
					
					var comboboxMobCodesData = [];
					for(var i=0;i<result["mobCodes"].length;i++){
						var key = result["mobCodes"][i]["mobileCode"];
						var value = result["mobCodes"][i]["mobileCode"];
						comboboxMobCodesData.push({"mykey":key,"myvalue":value})
					
					}
					
					var comboboxEmiratesData = [];
					for(var i=0;i<result["emiratesList"].length;i++){
						var key = result["emiratesList"][i]["emirateID"];
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA")
							value = result["emiratesList"][i]["emirateName_ar"];
						else 
							value = result["emiratesList"][i]["emirateName_en"];
							
						kony.print("value::::::::::::::::::::"+result["emiratesList"][i]["emirateName_ar"])	
						comboboxEmiratesData.push({"mykey":key,"myvalue":value})
					}
					kony.print("comboboxEmiratesData	",comboboxEmiratesData);
					
					kony.print("gblNewRegNationalityID-------------",gblNewRegNationalityID);
					frmAttestGrad1.dropdownnationality.masterDataMap=[comboboxData,"mykey","myvalue"];
					
					
					frmAttestGrad1.dropdownmobileareacode.masterDataMap=[comboboxMobCodesData,"mykey","myvalue"];
					frmAttestGrad1.dropdownemirate.masterDataMap = [comboboxEmiratesData,"mykey","myvalue"];
					//changed frmAttestGrad3 tofrmAttestGrad1
					if(gblDeviceInfo=="tab")
					{
						frmAttestGrad1.dropdownnationality1.masterDataMap=[comboboxData,"mykey","myvalue"];
					}else
					{
					
					if(selectedCategory == category_Graduate || selectedCategory == category_Enrolled)
						frmAttestGrad3.dropdownnationality.masterDataMap=[comboboxData,"mykey","myvalue"];
					
					
					}
					
					if(gvIsScanned==0)
					{
						getUserDataToAuto();
					}
					else
					{
					dismissLoadingIndicator();
					
					}
					//else
					//{
					// dismissLoadingIndicator();
					// frmAttestGrad1.show();
					//}
					
					
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


function invokeRegistrationCompositService(){
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
		var inputparam = {
	        serviceID: "registrationComposit"
	           
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, registrationCompositCallback);
	}
	catch(err){
		displayError(err);
	}
	}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}

function registrationCompositCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				if(result["outputCountry"] == "SUCCESS" && result["output"] == "SUCCESS"){
					var comboboxData = [];
					for(var i=0;i<result["countriesList"].length;i++){
						var key = result["countriesList"][i]["countryID"];
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA") 
							value = result["countriesList"][i]["countyName_ar"];
						else
							value = result["countriesList"][i]["countyName_en"];
							
						comboboxData.push({"mykey":key,"myvalue":value})
					
					}
					
					var comboboxMobCodesData = [];
					comboboxMobCodesData.push({"mykey":"0","myvalue":kony.i18n.getLocalizedString("lblSelectAreaCode")});
					for(var i=0;i<result["mobCodes"].length;i++){
						var key = result["mobCodes"][i]["mobileCode"];
						var value = result["mobCodes"][i]["mobileCode"];
						comboboxMobCodesData.push({"mykey":key,"myvalue":value})
					
					}
					
					frmNewReg.dropdownnationality.masterDataMap = [comboboxData,"mykey","myvalue"];
					frmNewReg.dropdownmobileareacode.masterDataMap = [comboboxMobCodesData,"mykey","myvalue"];
					
					dismissLoadingIndicator();
					
					frmNewReg.show();
					
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



function getInstitutesList(){
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
		var inputparam = {
	        serviceID: "Select_Institutes"
	            
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, getInstitutesListCallback);
	}
	catch(err){
		displayError(err);
	}
}
var gblDeviceInfo="";
function getInstitutesListCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result["instList"]);
				if(result["output"] == "SUCCESS"){
					var comboboxData = [];
					comboboxData=[{"mykey":"SI","myvalue":kony.i18n.getLocalizedString("lblPleaseSelectInstitute")}];
					for(var i=0;i<result["instList"].length;i++){
						var key = result["instList"][i]["instNo"];
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA")
							value = result["instList"][i]["instName_ar"];
						else
							value = result["instList"][i]["instName_en"];
							
						comboboxData.push({"mykey":key,"myvalue":value})
					
					}
//code block changed
					if(gblDeviceInfo=="tab"){
					frmAttestGrad1.dropdowninstitue.masterDataMap=[comboboxData,"mykey","myvalue"];
					frmAttestGrad1.dropdowninstitue.selectedKey = "SI"; 
					getPaymentMethodTypes();
					}else{
					frmAttestGrad2.dropdowninstitue.masterDataMap=[comboboxData,"mykey","myvalue"];
					frmAttestGrad2.dropdowninstitue.selectedKey = "SI"; 
					getPaymentMethodTypes();
	}
	
				
					if(gvIsScanned==1)
					{
						if(gblDeviceInfo=="tab")
						{
							frmAttestGrad1.dropdowninstitue.selectedKey = gvScannedInstId; 
						}
						else
						{
							frmAttestGrad2.dropdowninstitue.selectedKey = gvScannedInstId; 
						}	
						
						getScannedStudyLevels(gvScannedInstId);				
						
					}
					
				}else{
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

function verifyGraduate_studyLevels() {
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	if (selectedCategory == category_Faculty) {
		kony.print("category is faculty");
		//frmAttestGrad2.dropdowninstitue.onSelection = doNothing;
	} else {
		kony.print("calling getStudyLevels");
		//frmAttestGrad2.dropdowninstitue.onSelection = getStudyLevels;
		getStudyLevels();
	}
}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}

function getStudyLevels(){
	kony.print("Inside getStudyLevels");
	try{
		var comboboxEmptyData = [];
		if(kony.application.getCurrentForm().dropdowninstitue.selectedKey=="SI")
		{
					kony.print("Inside clear data");
					
				kony.application.getCurrentForm().dropdownstudylevel.setEnabled(true);
				kony.application.getCurrentForm().dropdownmajor.setEnabled(true);
				kony.application.getCurrentForm().dropdownSubMajor.setEnabled(true);
				
					
				kony.application.getCurrentForm().dropdownstudylevel.masterDataMap=[[{"mykey":"0","myvalue":""}],"mykey","myvalue"];
				kony.application.getCurrentForm().dropdownmajor.masterDataMap=[[{"mykey":"0","myvalue":""}],"mykey","myvalue"];;//[comboboxEmptyData,"mykey","myvalue"];
				kony.application.getCurrentForm().dropdownSubMajor.masterDataMap=[[{"mykey":"0","myvalue":""}],"mykey","myvalue"];//[comboboxEmptyData,"mykey","myvalue"];

				kony.application.getCurrentForm().dropdownstudylevel.setEnabled(false);
				kony.application.getCurrentForm().dropdownmajor.setEnabled(false);
				kony.application.getCurrentForm().dropdownSubMajor.setEnabled(false);
				return;
		}
		kony.application.getCurrentForm().dropdownstudylevel.setEnabled(true);
kony.application.getCurrentForm().dropdownmajor.setEnabled(true);
kony.application.getCurrentForm().dropdownSubMajor.setEnabled(true);
		showLoadingIndicator(kony.i18n.getLocalizedString("lblLoadingStudyLevel"));
		var inputparam = {
	        serviceID: "Select_StudyLevel",	  
		instNo:kony.application.getCurrentForm().dropdowninstitue.selectedKey
		  //instNo:frmAttestGrad2.dropdowninstitue.selectedKey
	            
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, getStudyLevelsCallback);
	}
	catch(err){
		displayError(err);
	}
}

function getScannedStudyLevels(InstId){
	kony.print("Inside getStudyLevels");
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblLoadingStudyLevel"));
		var inputparam = {
	        serviceID: "Select_StudyLevel",	  
			instNo:InstId
		  //instNo:frmAttestGrad2.dropdowninstitue.selectedKey
	            
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, getStudyLevelsCallback);
	}
	catch(err){
		displayError(err);
	}
}

function getStudyLevelsCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result["studyLevelList"]);
				if(result["output"] == "SUCCESS"){
					var comboboxData = [];
					for(var i=0;i<result["studyLevelList"].length;i++){
					
						var key = result["studyLevelList"][i]["studyLevelID"];
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA")
							value = result["studyLevelList"][i]["studyLevel_ar"];
						else
							value = result["studyLevelList"][i]["studyLevel_en"];
						
						comboboxData.push({"mykey":key,"myvalue":value});
					}
					
					//frmAttestGrad2.dropdownstudylevel.masterDataMap=[comboboxData,"mykey","myvalue"];
					kony.application.getCurrentForm().dropdownstudylevel.masterDataMap=[comboboxData,"mykey","myvalue"];
					dismissLoadingIndicator();
					//frmStudyDetails.comboNationality.selectedKey = "0";
				
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

function getPrevStudyLevels(){
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
		var inputparam = {
	        serviceID: "Select_PrevStudyLevel"
	            
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, getPrevStudyLevelsCallback);
	}
	catch(err){
		displayError(err);
	}
}

function getPrevStudyLevelsCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result["studyLevelList"]);
				if(result["output"] == "SUCCESS"){
					var comboboxData = [];
					for(var i=0;i<result["studyLevelList"].length;i++){
						var key = result["studyLevelList"][i]["studyLevelID"];
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA")
							value = result["studyLevelList"][i]["studyLevel_ar"];
						else
							value = result["studyLevelList"][i]["studyLevel_en"];
						
						comboboxData.push({"mykey":key,"myvalue":value})
					
					}
					
	//code changed
					if(gblDeviceInfo=="tab"){
					frmAttestGrad1.dropdownstudylevel1.masterDataMap=[comboboxData,"mykey","myvalue"];
					dismissLoadingIndicator();
					}else{
					frmAttestGrad3.dropdownstudylevel.masterDataMap=[comboboxData,"mykey","myvalue"];
					dismissLoadingIndicator();
					frmAttestGrad3.show();
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

function getMajor(){
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	try{
		
		var comboboxEmptyData = [];
		kony.print("get major entry");
		if(kony.application.getCurrentForm().dropdownstudylevel.selectedKey==0)
		{			
		kony.print("get major entry 1");
				kony.application.getCurrentForm().dropdownmajor.setEnabled(true);
				//kony.application.getCurrentForm().dropdownSubMajor.setEnabled(true);
				kony.print("get major entry 2");
				kony.application.getCurrentForm().dropdownmajor.masterData=[[{"mykey":"1","myvalue":""}],"mykey","myvalue"];//[comboboxEmptyData,"mykey","myvalue"];
				//kony.application.getCurrentForm().dropdownSubMajor.masterData=[[{"mykey":"0","myvalue":""}],"mykey","myvalue"];//[comboboxEmptyData,"mykey","myvalue"];
kony.print("get major entry 3");
				kony.application.getCurrentForm().dropdownmajor.setEnabled(false);
				//kony.application.getCurrentForm().dropdownSubMajor.setEnabled(false);
				return;
		}
		kony.application.getCurrentForm().dropdownmajor.setEnabled(true);
				//kony.application.getCurrentForm().dropdownSubMajor.setEnabled(true);
		showLoadingIndicator(kony.i18n.getLocalizedString("lblLoadingMajor"));
		var inputparam = {
	        serviceID: "Select_Major",
		 instNo:kony.application.getCurrentForm().dropdowninstitue.selectedKey,
	        studyLevel:kony.application.getCurrentForm().dropdownstudylevel.selectedKey
	      // instNo:frmAttestGrad2.dropdowninstitue.selectedKey,
	       // studyLevel:frmAttestGrad2.dropdownstudylevel.selectedKey
	            
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, getMajorCallback);
	}
	catch(err){
		displayError(err);
	}
	}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}

function getMajorCallback(status, result) {
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
					//frmAttestGrad2.dropdownmajor.masterDataMap=[comboboxData,"mykey","myvalue"];
										kony.application.getCurrentForm().dropdownmajor.masterDataMap=[comboboxData,"mykey","myvalue"];
					dismissLoadingIndicator();
					//frmStudyDetails.comboNationality.selectedKey = "0";
				
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
function currSubMajorDecision(){
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	if(selectedCategory == category_Enrolled)
		getSubMajor();
		else{
		
		}
	
	}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}
function getSubMajor(){
	try{
	
	    var comboboxEmptyData = [];
		if(kony.application.getCurrentForm().dropdownmajor.selectedKey==0)
		{						
				kony.application.getCurrentForm().dropdownSubMajor.setEnabled(true);
				kony.application.getCurrentForm().dropdownSubMajor.masterData=[[{"mykey":"0","myvalue":""}],"mykey","myvalue"];//[comboboxEmptyData,"mykey","myvalue"];
				kony.application.getCurrentForm().dropdownSubMajor.setEnabled(false);

				return;
		}
		kony.application.getCurrentForm().dropdownSubMajor.setEnabled(true);
		showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));
		var inputparam = {
	        serviceID: "Select_SubMajor",
	        instID:kony.application.getCurrentForm().dropdowninstitue.selectedKey,
	        levelID:kony.application.getCurrentForm().dropdownstudylevel.selectedKey,
	        majorID: kony.application.getCurrentForm().dropdownmajor.selectedKey
	            
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, getSubMajorCallback);
	}
	catch(err){
		displayError(err);
	}
}



function getSubMajorCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0))
			 {
				kony.print("result data is------------",result["pgList"]);
				if(result["output"] == "SUCCESS")
				{
					
							var comboboxData = [];
							for(var i=0;i<result["pgList"].length;i++)
							{
								var key = result["pgList"][i]["pgNo"];
								var value = "";
								if (kony.i18n.getCurrentLocale() == "ar_SA")
									value = result["pgList"][i]["pgName_ar"];
								else
									value = result["pgList"][i]["pgName_en"];
								
								comboboxData.push({"mykey":key,"myvalue":value})
							
							}
							kony.application.getCurrentForm().dropdownSubMajor.masterDataMap=[comboboxData,"mykey","myvalue"];
							dismissLoadingIndicator();
							//frmStudyDetails.comboNationality.selectedKey = "0";
						
						
				}
				else{
					dismissLoadingIndicator();
					//alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
					kony.application.getCurrentForm().dropdownSubMajor.masterDataMap=[[{"mykey":"1","myvalue":""}],"mykey","myvalue"];
					//alertDialog(kony.i18n.getLocalizedString("msgSubMajorNotAvailable"));
					
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

function getPaymentMethodTypes(){
	try{
		var inputparam = {
	        serviceID: "Select_PaymentMethodType"
	         
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, getPaymentMethodTypesCallback);
	}
	catch(err){
		displayError(err);
	}
}

function getPaymentMethodTypesCallback(status, result) {
	try{
	kony.print("Step -------------1 :")
		if (status == 400) {
			kony.print("Step -----------2 :")
			if ((kony.os.toNumber(result.opstatus) == 0))
			 {
			 	kony.print("Step-------------- 3 :")
				if(result["output"] == "SUCCESS")
				{
					kony.print("Step-------------- 4 :")
					var comboboxData = [];
					comboboxData=[{"mykey":"SPMT","myvalue":kony.i18n.getLocalizedString("lblPleaseSelectProperPayment")}];
					for(var i=0;i<result["paymentsList"].length;i++)
					{
						var key = result["paymentsList"][i]["paymentMethodTypelID"];
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA")
							value = result["paymentsList"][i]["paymentMethodType_ar"];
						else
							value = result["paymentsList"][i]["paymentMethodType_en"];
						comboboxData.push({"mykey":key,"myvalue":value})
					
					}
					//code block changed
					if(gblDeviceInfo=="tab"){
						kony.print("Step TAb ------------5 :")
					frmAttestGrad1.dropdownpaymentmethod.masterDataMap=[comboboxData,"mykey","myvalue"];
					frmAttestGrad1.dropdownpaymentmethod.selectedKey = "SPMT";
					dismissLoadingIndicator();
					}else{
						kony.print("Step mobile ------------5 :")
					frmAttestGrad2.dropdownpaymentmethod.masterDataMap=[comboboxData,"mykey","myvalue"];
					frmAttestGrad2.dropdownpaymentmethod.selectedKey = "SPMT";
					dismissLoadingIndicator();
					frmAttestGrad2.show();
					}
				
				}
				else
				{
					kony.print("Step ------------5 :")
					dismissLoadingIndicator();
					alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
					//frmMainMenu.show();
				}
				
			}
			else
			{
				kony.print("Step------------ 6 :")
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
function getPaymentMethods(){
	kony.print("Inside getPaymentMethods");
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblLoadingPaymentType"));
		
		var inputparam = {
	        serviceID: "Select_PaymentMethod",
	        //paymentMethodTypeID:frmAttestGrad2.dropdownpaymentmethod.selectedKey
		 paymentMethodTypeID:kony.application.getCurrentForm().dropdownpaymentmethod.selectedKey
	             
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, getPaymentMethodsCallback);
	}
	catch(err){
		displayError(err);
	}
}

function getPaymentMethodsCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result["paymentMethodsList"]);
				if(result["output"] == "SUCCESS"){
					var comboboxData = [];
					for(var i=0;i<result["paymentMethodsList"].length;i++){
						var key = result["paymentMethodsList"][i]["paymentMethodCode"];
						var value = "";
						if (kony.i18n.getCurrentLocale() == "ar_SA")
							value = result["paymentMethodsList"][i]["paymentMethod_ar"];
						else
							value = result["paymentMethodsList"][i]["paymentMethod_en"];

						comboboxData.push({"mykey":key,"myvalue":value})
					
					}
					//frmAttestGrad2.dropdownpaymentcardtype.masterDataMap=[comboboxData,"mykey","myvalue"];
						kony.application.getCurrentForm().dropdownpaymentcardtype.masterDataMap=[comboboxData,"mykey","myvalue"];
					dismissLoadingIndicator();
					
				
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
function generalInfoForInsertApp(inputparam){
	try{
		if(selectedCategory == category_Graduate){
			inputparam["serviceID"] = "Insert_App_Grad";
			inputparam["requestID"] = "1";
			inputparam["telPhoneCD"] = attesGradObj["telephoneAreaCode"];
			inputparam["mobileCD"] = attesGradObj["mobileAreaCode"];
			inputparam["universityID"] = attesGradObj["studentID"];
			inputparam["studyLevelID"] = attesGradObj["studyLevel"];
			inputparam["major"] = attesGradObj["major"];
			inputparam["graduationDT"] = attesGradObj["graduateYear"];
			inputparam["concentrat"] = "";	
			inputparam["totalNoOfDocs"] = attesGradObj["noOfDocuments"];
		}
		else if(selectedCategory == category_Enrolled){
			inputparam["serviceID"] = "Insert_App";
			inputparam["requestID"] = "2";
			inputparam["telPhoneCD"] = attesGradObj["telephoneAreaCode"];
			inputparam["mobileCD"] = attesGradObj["mobileAreaCode"];
			inputparam["universityID"] = attesGradObj["studentID"];
			inputparam["studyLevelID"] = attesGradObj["studyLevel"];
			inputparam["major"] = attesGradObj["major"];
			inputparam["concentrat"] = attesGradObj["subMajor"];
			
				
			inputparam["totalNoOfDocs"] = attesGradObj["noOfDocuments"];
		}
		else{
			inputparam["serviceID"] = "Insert_App";
			inputparam["requestID"] = "3";
			inputparam["telPhoneCD"] = attesGradObj["telephoneAreaCode"];
			inputparam["mobileCD"] = attesGradObj["mobileAreaCode"];
				
			inputparam["universityID"] = "";
			inputparam["studyLevelID"] = "";
			inputparam["major"] = "";
			inputparam["concentrat"] = "";
			inputparam["totalNoOfDocs"] = attesGradObj["noOfDocuments"];
		}
			
			
		
			
		kony.print("input params are--------------",inputparam);
		appmiddlewareinvokerasync(inputparam, insertAppCallback);
	}
	catch(err){
		displayError(err);
	}
}
function invokeInsertApp(){
	try{
		gblAppNoFromInsertApp = "";
		showLoadingIndicator(kony.i18n.getLocalizedString("lblProcessingReq"));
		var inputparam = [];
		
		//inputparam["user"] = "Webservice";
		//inputparam["password"] = "wEbsErViCe$35#";
		
		//general information 

		inputparam["appName"] = attesGradObj["studentName"];
		inputparam["gender"] = (attesGradObj["gender"] == true)?"1":"2";
		inputparam["nationalityID"] = attesGradObj["nationality"];
		inputparam["telPhone"] = attesGradObj["telephoneNo"];
		inputparam["mobile"] = attesGradObj["mobileNo"];
		inputparam["emirateID"] = attesGradObj["emiratesID"];
		inputparam["poBox"] = attesGradObj["POBoxNo"];
		inputparam["email"] = attesGradObj["email"];
		
		//common for all users
		inputparam["instituteID"] = attesGradObj["instituteId"];
		inputparam["noOfDocs"] = attesGradObj["noOfDocuments"];
		inputparam["purposeID"] = (attesGradObj["purpose"] == true)?"0":"1";
		
		//hardcoded values for all users
		//inputparam["isNew"] = "";
//		inputparam["appNo"] = "";
//		inputparam["address"] = "TEST";
//		inputparam["scientificCert"] = "0";
//		inputparam["scoreSheet"] = "0";
//		inputparam["graduateCert"] = "0";
//		inputparam["toWhom"] = "0";
//		inputparam["attAmount"] = "0";
//		inputparam["statusID"] = "0";
//		inputparam["attestNO"] = "0";
//		inputparam["attesterID"] = "0";
//		inputparam["uUser"] = "ONLINE";
//		inputparam["cUser"] = "ONLINE";
//		inputparam["receivedBy"] = "ONLINE";
//		inputparam["certCopy"] = "0";
//		inputparam["attReceipt"] = "0";
//		inputparam["prevEmirateID"] = "1111";
//		inputparam["semisterID"] = "0";
//		inputparam["requestBy"] = "0";
//		inputparam["incompleteApp"] = "0";
		
		
		generalInfoForInsertApp(inputparam);
		
	}
	catch(err){
		displayError(err);
	}
}

function insertAppCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				if(result["result"] == "true" || result["result"] == true){
					gblAppNoFromInsertApp = result["appno"];
					if(selectedCategory == category_Graduate)
						invokeInsertPreCertApp();
					else{
						if(isSaveAttach==true)
							saveAttachmetAttestation();
						else{
							
							dismissLoadingIndicator();
							frmApplicationSubmit.show();
						}
						
						
						//frmPayment.show();
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


function invokeInsertPreCertApp(){
	try{
		var inputparam = {
	        serviceID: "Insert_PreCert",
	        appNo:gblAppNoFromInsertApp,
	        instituteName:attesGradObj["prevInstituteName"],//"test",
	        countryID:attesGradObj["nationality"],//"269",
	        studyLevelID:attesGradObj["prevStudyLevel"],//"108",
	        major:attesGradObj["major"],//"4",
	        noOfDocs:attesGradObj["noOfDocuments"],//"0",
	        creditHRS:attesGradObj["transCreditHours"],
	        emirateNationalID:attesGradObj["emiratesID"]
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, invokeInsertPreCertAppCallback);
	}
	catch(err){
		displayError(err);
	}
}

function invokeInsertPreCertAppCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				if(result["result"] == "true" || result["result"] == true){
					
					if(isSaveAttach==true)
						saveAttachmetAttestation();
					else{
						dismissLoadingIndicator();
						frmApplicationSubmit.show();
					}
					//frmPayment.show();
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

function createAttestGrad1Obj(){
	attesGradObj["studentName"] = frmAttestGrad1.txtstudentname.text;
	attesGradObj["gender"] = isMale;
	attesGradObj["nationality"] = frmAttestGrad1.dropdownnationality.selectedKey;
	attesGradObj["telephoneAreaCode"] = frmAttestGrad1.txtTelephoneAreaCode.text;
	attesGradObj["telephoneNo"] = frmAttestGrad1.txtTelephoneNumber.text;
	attesGradObj["mobileAreaCode"] = frmAttestGrad1.dropdownmobileareacode.selectedKey;
	attesGradObj["mobileNo"] = frmAttestGrad1.txtmobilenumber.text;
	attesGradObj["emiratesID"] = frmAttestGrad1.txtemiratesid1.text.toString()+"-"+frmAttestGrad1.txtemiratesid2.text.toString()+"-"+frmAttestGrad1.txtemiratesid3.text.toString()+"-"+frmAttestGrad1.txtemiratesid4.text.toString();
	attesGradObj["POBoxNo"] = frmAttestGrad1.txtpobox.text;
	attesGradObj["emirateNo"] = frmAttestGrad1.dropdownemirate.selectedKey;
	attesGradObj["email"] = frmAttestGrad1.txtemail.text;
}

function createAttestGrad2Obj(){
	attesGradObj["instituteId"] = frmAttestGrad2.dropdowninstitue.selectedKey;
	attesGradObj["studyLevel"] = frmAttestGrad2.dropdownstudylevel.selectedKey;
	attesGradObj["major"] = frmAttestGrad2.dropdownmajor.selectedKey;
	
	if(selectedCategory == category_Enrolled)
		attesGradObj["subMajor"] = frmAttestGrad2.dropdownSubMajor.selectedKey;
		
	attesGradObj["graduateYear"] = frmAttestGrad2.txtgraduatedyear.text;
	attesGradObj["noOfDocuments"] = frmAttestGrad2.txtnoofdocuments.text;
	gblNoOfDocs = frmAttestGrad2.txtnoofdocuments.text;
	attesGradObj["studentID"] = frmAttestGrad2.txtstudentid.text;
	attesGradObj["purpose"] = isPurpose;
	attesGradObj["paymentMethod"] = frmAttestGrad2.dropdownpaymentmethod.selectedKey;
	attesGradObj["paymentMethodType"] = frmAttestGrad2.dropdownpaymentcardtype.selectedKey;
	kony.print("result data is Grad2------------",attesGradObj);
}

function createAttestGrad3Obj(){


	if(selectedCategory == category_Graduate){
		attesGradObj["prevStudyLevel"]=frmAttestGrad3.dropdownstudylevel.selectedKey;
		attesGradObj["prevInstituteName"] = frmAttestGrad3.txtinstitutename.text;
		attesGradObj["prevMajor"] = frmAttestGrad3.txtmajor.text;
		attesGradObj["isCertifiedOrNot"]=isAttested;
		attesGradObj["transInstituteName"] = frmAttestGrad3.txtinstitutename2.text;
		attesGradObj["trnasCountry"] = frmAttestGrad3.dropdownnationality.text;
		attesGradObj["transCreditHours"] = frmAttestGrad3.txtcredithours.text;
	}
	else{
		attesGradObj["transInstituteName"] = frmAttestGrad3.txtinstitutename2.text;
		attesGradObj["trnasCountry"] = frmAttestGrad3.dropdownnationality.text;
		attesGradObj["transCreditHours"] = frmAttestGrad3.txtcredithours.text;
	}
	attesGradObj["captureImg"] = "";
	
}
function displayError(err){
	dismissLoadingIndicator();
	kony.print("Error message is :"+err.message);
}
function showLoadingIndicator(){
	kony.application.showLoadingScreen("loadSkin","Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null)
}
function showLoadingIndicator(text){
	kony.application.showLoadingScreen("loadSkin",text, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null)
}
function dismissLoadingIndicator(){
	kony.application.dismissLoadingScreen();
}



function setBrwValue()
{
	//var myurl = "<html><head><title>3D Secure Page</title></head><body onload=\"document.getElementById('3dform').submit();\"><form method=\"GET\" action=\"https://services.mohesr.gov.ae/SharePointAttestation/Payment.aspx\" id=\"3dform\"><input type=\"hidden\" name=\"PaymentType\" value=\"1-1\" /><input type=\"text\" name=\"AppNo\" value=\"55008\" /><input type=\"text\" name=\"Qty\" value=\"1\" /><input type=\"text\" name=\"ServiceCode\" value=\"145602-0001\"/><br/><div style=\"text-align: center\">\n<h1>Processing your 3-D Secure Transaction </h1>\n<p>Please click continue to continue the processing of your 3-D Secure transaction.</p>\n</div></noscript></form></body></html>"; 
	//var myurl = "<html><head><title>3D Secure Page</title></head><body onload=\"document.getElementById('3dform').submit();\"><form method=\"GET\" action=\"https://services.mohesr.gov.ae/SharePointAttestation/Payment.aspx\" id=\"3dform\"><input type=\"hidden\" name=\"PaymentType\" value=\"1-1\" /><input type=\"text\" name=\"AppNo\" value="+gblAppNoFromInsertApp+" /><input type=\"text\" name=\"Qty\" value=\"1\" /><input type=\"text\" name=\"ServiceCode\" value=\"145602-0001\"/><br/><div style=\"text-align: center\">\n<h1>Processing your 3-D Secure Transaction </h1>\n<p>Please click continue to continue the processing of your 3-D Secure transaction.</p>\n</div></noscript></form></body></html>";
	var myurl = "<html><head><title>3D Secure Page</title></head><body onload=\"document.getElementById('3dform').submit();\"><form method=\"GET\" action=\"https://services.mohesr.gov.ae/SharePointAttestation/Payment.aspx\" id=\"3dform\"><input type=\"hidden\" name=\"PaymentType\" value=\"1-1\" /><input type=\"hidden\" name=\"AppNo\" value="+gblAppNoFromInsertApp+" /><input type=\"hidden\" name=\"Qty\" value="+gblNoOfDocs+" /><input type=\"hidden\" name=\"ServiceCode\" value=\"145602-0001\"/><br/><div style=\"text-align: center\">\n<h1>"+kony.i18n.getLocalizedString("lblTransactionProc")+"</h1>\n<p></p>\n</div></noscript></form></body></html>";
	frmPayment.brw.htmlString = myurl;
	
	
	frmPayment.brw.handleRequest = handleBrowserCallback;

}


function handleBrowserCallback(browserWidget,params)
{
	kony.print("check1: handleRequest event triggered");
	kony.print("check1: Original URL: " + params ["originalURL"]);
	kony.print("check1: Request Method: " + params ["requestMethod"]);
	kony.print("check1: Header: " + JSON.stringify(params["header"]));
	kony.print("check1: queryParams: " + JSON.stringify(params["queryParams"]));
	kony.print("check1: complete params obj: " + JSON.stringify(params));
	
	var queryParams = params["queryParams"];
	
		//if(queryParams["statusCode"]=="Success"){
		//	alert("Payment Done")
		//	frmHome.show(); Go back to the Phone UI.
		//}
									

	//If false is returned, platform will load the originalurl in the browser widget.
//	if ("https://services.mohesr.gov.ae/SharePointAttestation/Default.aspx" == params ["originalURL"])
	/*
	var ConfigJSONObj = kony.store.getItem("configObject");
	var paymentURL = ConfigJSONObj["DefaultURL"];
	paymentURL = paymentURL.replace("\/", "/");
	kony.print("ConfigJSONOBJ====="+ConfigJSONObj);
	kony.print("payment url from store api is====="+paymentURL);
	kony.print("payment url original from store api is====="+params["originalURL"]);
	*/
	if ("https://services.mohesr.gov.ae/SharePointAttestation/Default.aspx" == params["originalURL"])
	{
		//kony.print("check1: completed payment process going to native form: " + frmHome.title);
		gblResetFlag=true;
		//resetAttestationForms();
		frmPayment.destroy();
		frmMainMenu.show();
		return true;
	}
	else {
		return false;	
	} 
}


/*
function handleBrowserCallback(browserWidget,params)
{
	kony.print("check1: handleRequest event triggered");
	kony.print("check1: Original URL: " + params ["originalURL"]);
	kony.print("check1: Request Method: " + params ["requestMethod"]);
	kony.print("check1: Header: " + JSON.stringify(params["header"]));
	kony.print("check1: queryParams: " + JSON.stringify(params["queryParams"]));
	kony.print("check1: complete params obj: " + JSON.stringify(params));
	
	var queryParams = params["queryParams"];
	
		//if(queryParams["statusCode"]=="Success"){
		//	alert("Payment Done")
		//	frmHome.show(); Go back to the Phone UI.
		//}
									

	//If false is returned, platform will load the originalurl in the browser widget.
	if ("https://services.mohesr.gov.ae/SharePointAttestation/Default.aspx" == params ["originalURL"])
	{
		//kony.print("check1: completed payment process going to native form: " + frmHome.title);
		resetAttestationForms();
		frmPayment.destroy();
		frmMainMenu.show();
		return true;
	}
	else {
		return false;	
	} 
}
 */


function appExit(){
	kony.application.exit();
}


function getUserDataToAuto(){
	try{
		showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));
		var inputparam = {
	        serviceID: "Select_User",
	        userID:gblLoggedUserID
	        
	    };
	    kony.print("inputparam are ***********",inputparam);
		appmiddlewareinvokerasync(inputparam, getUserDataToAutoCallback);
	}
	catch(err){
		displayError(err);
	}
}
function getUserDataToAutoCallback(status, result) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("result data is------------",result);
				if(result["userID"] == "" || result["result"] == null || result["result"] == undefined){
				if(!gblNfcFlag){
					frmAttestGrad1.txtstudentname.text = result["appName"];
					frmAttestGrad1.dropdownnationality.selectedKey = result["nationalityID"];
					frmAttestGrad1.dropdownnationality.setEnabled(false);
					frmAttestGrad1.txtemail.text = result["email"];
					frmAttestGrad1.dropdownmobileareacode.selectedKey = result["mobileCode"]; 
					frmAttestGrad1.txtmobilenumber.text = result["mobile"]; 
					
					var eid=result["emiratesId"].split("-");
					frmAttestGrad1.txtemiratesid1.text=eid[0];
					frmAttestGrad1.txtemiratesid2.text=eid[1];
					frmAttestGrad1.txtemiratesid3.text=eid[2];
					frmAttestGrad1.txtemiratesid4.text=eid[3];
					
					
					
					// diabling UI elements -> to make them non editable : changes made by KH843
					frmAttestGrad1.txtstudentname.setEnabled(false);
					frmAttestGrad1.dropdownnationality.setEnabled(false);
					frmAttestGrad1.txtemail.setEnabled(false);
					frmAttestGrad1.dropdownmobileareacode.setEnabled(false);
					frmAttestGrad1.txtmobilenumber.setEnabled(false);
					//frmAttestGrad1.hbxGender.setEnabled(false);
					frmAttestGrad1.txtemiratesid1.setEnabled(false);
					frmAttestGrad1.txtemiratesid2.setEnabled(false);
					frmAttestGrad1.txtemiratesid3.setEnabled(false);
					frmAttestGrad1.txtemiratesid4.setEnabled(false);
					//frmAttestGrad1.txtpobox.text = result["passportNO"];
					//code
					if(gblDeviceInfo=="tab"){
					getInstitutesList();
					}else{
							dismissLoadingIndicator();
							frmAttestGrad1.show();
					}
				}else{
				if(gblFlagToAssignEmiratesId){
				
					var eid=result["emiratesId"].split("-");
					frmAttestGrad1.txtemiratesid1.text=eid[0];
					frmAttestGrad1.txtemiratesid2.text=eid[1];
					frmAttestGrad1.txtemiratesid3.text=eid[2];
					frmAttestGrad1.txtemiratesid4.text=eid[3];
					frmAttestGrad1.txtemiratesid1.setEnabled(false);
					frmAttestGrad1.txtemiratesid2.setEnabled(false);
					frmAttestGrad1.txtemiratesid3.setEnabled(false);
					frmAttestGrad1.txtemiratesid4.setEnabled(false);
					kony.print("Assigning emiratesId from prefill");
					gblFlagToAssignEmiratesId=false;
				}else if(gblFlagToAssignMobileCode){
				kony.print("Assigning Mobile from prefill");
					frmAttestGrad1.dropdownmobileareacode.selectedKey = result["mobileCode"]; 
					frmAttestGrad1.txtmobilenumber.text = result["mobile"]; 
					gblFlagToAssignMobileCode=false;
				}else{
				kony.print("Assigning EmiratesId,Mobile from prefill");
					frmAttestGrad1.txtemiratesid1.text=eid[0];
					frmAttestGrad1.txtemiratesid2.text=eid[1];
					frmAttestGrad1.txtemiratesid3.text=eid[2];
					frmAttestGrad1.txtemiratesid4.text=eid[3];
					frmAttestGrad1.dropdownmobileareacode.selectedKey = result["mobileCode"]; 
					frmAttestGrad1.txtmobilenumber.text = result["mobile"]; 
					frmAttestGrad1.txtemiratesid1.setEnabled(false);
					frmAttestGrad1.txtemiratesid2.setEnabled(false);
					frmAttestGrad1.txtemiratesid3.setEnabled(false);
					frmAttestGrad1.txtemiratesid4.setEnabled(false);
				}
				
				}
				}
				else{
					dismissLoadingIndicator();
				}
			}
			else{
				dismissLoadingIndicator();
			}
		}
	}
	catch(err){
		displayError(err);
	}
}

function onClickNoPopUp()
{	
	isCaptureMaxlengthExceeds=false;
	isSaveAttach=false;
	var currentFrm = kony.application.getCurrentForm();
	if(kony.application.getCurrentForm().id=="frmNewReg")
	{
		isSendingImageNewUser = false;
		frmNewReg.imgCamPreview.setVisibility(false);	
	}
	currentFrm.imgCamPreview.setVisibility(false);
	frmAttachmentConfirmation.dismiss();
}

function onClickNoPopUpTab()
{	
	isCaptureMaxlengthExceeds=false;
	var currentFrm = kony.application.getCurrentForm();
	currentFrm.imgCamPreview.setVisibility(false);
	popAttachmentConfirmation.dismiss();
}

function onClickYesPopUp()
{
	isSaveAttachNewUser = false;
	CurrentForm=kony.application.getCurrentForm().id;
	if(CurrentForm=="frmNewReg")
	{
		frmAttachmentConfirmation.dismiss();
		insertNewUser();
	}
	else
	{
		frmAttachmentConfirmation.dismiss();
		invokeInsertApp();
	}
	
	
}

function onClickYesPopUpTab()
{
	isSaveAttachNewUser = false;
	popAttachmentConfirmation.dismiss();
	invokeInsertApp();
	
}

function OnClickAttestationCheckAttachment()
{
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
		var areAllFieldsCorrect = validateCertAttestPgFieldGoFurther();
	if(areAllFieldsCorrect == false)
		return;
	if(isCaptureMaxlengthExceeds==false)
		invokeInsertApp();
	else
	{
		frmAttachmentConfirmation.show();
	}
}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}

function populateApplicaitonNo()
{
	frmApplicationSubmit.lblApplicationNumber.text=gblAppNoFromInsertApp;
	frmCertEnquApplicationSubmit.lblApplicationNumber.text=gblAppNoFromInsertApp;
}
var gblFlagToRemoveFormFeilds="";
function resetformValuesByTpe(text){
kony.print(gblFlagToRemoveFormFeilds+"	"+"text::::"+text);
 if(gblFlagToRemoveFormFeilds!=text){
 	if(gblFlagToRemoveFormFeilds==""){
			gblFlagToRemoveFormFeilds=text;
		}else{
			gblFlagToRemoveFormFeilds=text;
			resetAttestationForms();
		}
}else{
	kony.print("same:::::::::::::::::");
}
}
function invokeJavaService(){
	try{
		var modTime = kony.store.getItem("lastModifiedTime");
		kony.print("last modifiedtime from store is----"+modTime)
		var inputParam = {};
		inputParam["serviceID"] = "LoadConfigurables";
		inputParam["clientLastModifiedTime"] = (modTime == undefined || modTime == null)?"":modTime;
		kony.print("input parameters are ----------",inputParam);
		appmiddlewareinvokerasync(inputParam, javaSerCallback);
	}
	catch(err){
		displayError(err);
	}
}

function javaSerCallback(status, resultTable) {
	try{
		if (status == 400) {
			if ((kony.os.toNumber(resultTable.opstatus) == 0)) {
				kony.print("result is------------",resultTable);
				if(resultTable["isModified"] == "true"){
					kony.print("modifications done on properties file..")
					var jsonObj = JSON.parse(resultTable["JSONString"]);
					kony.store.setItem("lastModifiedTime", resultTable["lastModifiedTime"]);
					kony.print("jsonObj			",JSON.parse(resultTable["JSONString"]));
					kony.store.setItem("configObject", jsonObj);
				}
				else
					kony.print("no modification found on properties file..")
				
			}
		}
	}
	catch(err){
		displayError(err);
	}	
}