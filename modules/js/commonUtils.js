

function camCallbackAttestStep3(camObj)
{
	isCaptureMaxlengthExceeds=false;
	kony.print("Rawbytes is : "+camObj.rawBytes);
	frmAttestGrad3.imgCamPreview.rawBytes = camObj.rawBytes;
	frmAttestGrad3.imgCamPreview.setVisibility(true);
	camBase64 = kony.convertToBase64(camObj.rawBytes);
	attachLength= camBase64.toString().length;
	if(attachLength > 3145728){
		isCaptureMaxlengthExceeds=true;
		isSaveAttach=false;
	}
	else{
		isCaptureMaxlengthExceeds=false;
		isSaveAttach=true;
	}
	kony.print("Base64 is : "+camBase64);
}

function camCallbackAttestStep2(camObj)
{
	isCaptureMaxlengthExceeds=false;
	kony.print("Rawbytes is : "+camObj.rawBytes);
	frmAttestGrad2.imgCamPreview.rawBytes = camObj.rawBytes;
	frmAttestGrad2.imgCamPreview.setVisibility(true);
	camBase64 = kony.convertToBase64(camObj.rawBytes);
	attachLength= camBase64.toString().length;
	if(attachLength > 3145728){
		isCaptureMaxlengthExceeds=true;
		isSaveAttach=false;
	}
	else{
		isCaptureMaxlengthExceeds=false;
		isSaveAttach=true;
	}
	kony.print("Base64 is : "+camBase64);
}

function camCallbackNewUser(camObj)
{
	isSendingImageNewUser = true;
	kony.print("Rawbytes is : "+camObj.rawBytes);
	frmNewReg.imgCamPreview.rawBytes = camObj.rawBytes;
	frmNewReg.imgCamPreview.setVisibility(true);
	camBase64 = kony.convertToBase64(camObj.rawBytes);
	attachLength= camBase64.toString().length;
	if(attachLength > 3145728)
		isCaptureMaxlengthExceeds=true;
	else
		isCaptureMaxlengthExceeds=false;
	kony.print("Base64 is : "+camBase64);
}

function setLocaleBasedHeaderTitle(currForm, i18nToBeSet)
{
	if(currForm.headers!=undefined || currForm.headers!=null)
	{
		//currForm.headers[0].lblAttestation.text = i18nToBeSet;
		var deviceName=kony.os.deviceInfo().name;
		kony.print("device name is " + deviceName);
		var curLocale=kony.i18n.getCurrentLocale();
		kony.print("Current locale is " + curLocale);
		if(deviceName=="" || deviceName == " Simulator") {
			if (curLocale == "en_US") {
				kony.print("Inside english locale");
				currForm.headers[0].imgBack.src = "backeng.png";
			} else if (curLocale == "ar_SA") {
				kony.print("Inside arabic locale");
				currForm.headers[0].imgBack.src = "backar.png";
			}
		
		}
	}
}

function setLocaleBasedFooterTitle(currForm, i18nToBeSet)
{
	if(currForm.footers!=undefined || currForm.footers!=null)
	{
		if(currForm.footers[0].lblSteps!=undefined || currForm.footers[0].lblSteps!=null)
			currForm.footers[0].lblSteps.text = i18nToBeSet;
		
		var deviceName=kony.os.deviceInfo().name;
		kony.print("device name is " + deviceName);
		var curLocale=kony.i18n.getCurrentLocale();
		kony.print("Current locale is " + curLocale);
		
		
		if(deviceName=="android" ) {
			currForm.footers[0].btnNext.skin = "sknBtnNext";
			currForm.footers[0].btnPrev.skin = "sknBtnInvisible";
		}else{
		
			if (curLocale == "en_US") {
				kony.print("Inside english locale");
				currForm.footers[0].imgNext.src = "nexteng.png";
				currForm.footers[0].imgPrev.src = "pixel.png";
				//currForm.footers[0].btnNext.skin = "sknBtnNext";
				//currForm.footers[0].btnPrev.skin = "sknBtnInvisible";
			} else if (curLocale == "ar_SA") {
				kony.print("Inside arabic locale");
				currForm.footers[0].imgNext.src = "nextar.png";
				currForm.footers[0].imgPrev.src = "pixel.png";
				//currForm.footers[0].btnNext.skin = "sknBtnNext";
				//currForm.footers[0].btnPrev.skin = "sknBtnInvisible";
			}
		
		}  
	}
	
}

function setLocaleBasedFooterTitle2(currForm, i18nToBeSet)
{
	kony.print("Inside setLocaleBasedFooterTitle2 method");
	if(currForm.footers!=undefined || currForm.footers!=null)
	{
		if(currForm.footers[0].lblSteps!=undefined || currForm.footers[0].lblSteps!=null)
			currForm.footers[0].lblSteps.text = i18nToBeSet;
		
		var deviceName=kony.os.deviceInfo().name;
		kony.print("device name is " + deviceName);
		var curLocale=kony.i18n.getCurrentLocale();
		kony.print("Current locale is " + curLocale);
		if(deviceName=="android") {
			currForm.footers[0].btnNext.skin = "sknBtnNextInact";
			currForm.footers[0].btnPrev.skin = "sknBtnPrev";
			currForm.footers[0].btnNext.focusSkin = "sknBtnNextInact";
			currForm.footers[0].btnPrev.focusSkin = "sknBtnPrev";
		} else {
			if (isArabicLocale == false) {
				kony.print("Inside english locale");
				currForm.footers[0].imgNext.src = "nexteng_inact.png";
				currForm.footers[0].imgPrev.src = "preveng.png";
				/*currForm.footers[0].btnNext.skin = "sknBtnNextInact";
				currForm.footers[0].btnPrev.skin = "sknBtnPrev";
				currForm.footers[0].btnNext.focusSkin = "sknBtnNextInact";
				currForm.footers[0].btnPrev.focusSkin = "sknBtnPrev";*/
			} else {
				kony.print("Inside arabic locale in page2");
				currForm.footers[0].imgNext.src = "nextar_inact.png";
				currForm.footers[0].imgPrev.src = "prevar.png";
				/*currForm.footers[0].btnNext.skin = "sknBtnNextInact";
				currForm.footers[0].btnPrev.skin = "sknBtnPrev";
				currForm.footers[0].btnNext.focusSkin = "sknBtnNextInact";
				currForm.footers[0].btnPrev.focusSkin = "sknBtnPrev";*/
			}
		}
	}
	
}

function resetLoginFields()
{
	if(isArabicLocale == true)
	{
		frmLoginAR.txtusername.text = "";
		frmLoginAR.txtpassword.text = "";
	}
	else
	{
		frmLogin.txtusername.text = "";
		frmLogin.txtpassword.text = "";
	}
}

function resetAttestationForms()
{
	resetBase64();			//release previous camera base64	
	if(gblDeviceInfo != "tab")
	{	
				//release previous camera base64
		//	clear step1 fields
		isAttested = false;
		isAttestedInside = true;
		frmAttestGrad1.rbimgMale.src = "unchecked.png";
		frmAttestGrad1.rbimgFemale.src = "unchecked.png";
		isMale = true;
		frmAttestGrad1.txtemail.text = "";
		frmAttestGrad1.txtemiratesid1.text = "";
		frmAttestGrad1.txtemiratesid2.text = "";
		frmAttestGrad1.txtemiratesid3.text = "";
		frmAttestGrad1.txtemiratesid4.text = "";
		frmAttestGrad1.txtmobilenumber.text = "";
		frmAttestGrad1.txtpobox.text = "";
		frmAttestGrad1.txtstudentname.text = "";
		frmAttestGrad1.txtTelephoneAreaCode.text = "";
		frmAttestGrad1.txtTelephoneNumber.text = "";
		frmAttestGrad1.dropdownemirate.selectedKey = "0";
		frmAttestGrad1.dropdownmobileareacode.selectedKey = "0";
		frmAttestGrad1.dropdownnationality.selectedKey = "0";
		
		//	clear step2 fields
		frmAttestGrad2.txtgraduatedyear.text = "";
		frmAttestGrad2.txtnoofdocuments.text = "";
		frmAttestGrad2.txtstudentid.text = "";
		frmAttestGrad2.dropdowninstitue.selectedKey = "0";
		frmAttestGrad2.dropdownmajor.selectedKey = "0";
		frmAttestGrad2.dropdownpaymentcardtype.selectedKey = "0";
		frmAttestGrad2.dropdownpaymentmethod.selectedKey = "0";
		frmAttestGrad2.dropdownstudylevel.selectedKey = "0";
		frmAttestGrad2.imgCamPreview.src = "pixel.png";
		
		//	clear step3 fields
		frmAttestGrad3.txtcredithours.text = "";
		frmAttestGrad3.txtinstitutename.text = "";
		frmAttestGrad3.txtinstitutename2.text = "";
		frmAttestGrad3.txtmajor.text = "";
		frmAttestGrad3.dropdownnationality.selectedKey = "0";
		frmAttestGrad3.imgCamPreview.src = "pixel.png";
		frmAttestGrad3.dropdownstudylevel.selectedKey = "0";
	}
	else
	{
			
		//	clear step1 fields
		isAttested = false;
		isAttestedInside = true;
		frmAttestGrad1.rbimgMale.src = "unchecked.png";
		frmAttestGrad1.rbimgFemale.src = "unchecked.png";
		isMale = true;
		frmAttestGrad1.txtemail.text = "";
		frmAttestGrad1.txtemiratesid1.text = "";
		frmAttestGrad1.txtemiratesid2.text = "";
		frmAttestGrad1.txtemiratesid3.text = "";
		frmAttestGrad1.txtemiratesid4.text = "";
		frmAttestGrad1.txtmobilenumber.text = "";
		frmAttestGrad1.txtpobox.text = "";
		frmAttestGrad1.txtstudentname.text = "";
		frmAttestGrad1.txtTelephoneAreaCode.text = "";
		frmAttestGrad1.txtTelephoneNumber.text = "";
		frmAttestGrad1.dropdownemirate.selectedKey = "0";
		frmAttestGrad1.dropdownmobileareacode.selectedKey = "0";
		frmAttestGrad1.dropdownnationality.selectedKey = "0";
		
		//	clear step2 fields
		frmAttestGrad1.txtgraduatedyear.text = "";
		frmAttestGrad1.txtnoofdocuments.text = "";
		frmAttestGrad1.txtstudentid.text = "";
		frmAttestGrad1.dropdowninstitue.selectedKey = "0";
		frmAttestGrad1.dropdownmajor.selectedKey = "0";
		frmAttestGrad1.dropdownpaymentcardtype.selectedKey = "0";
		frmAttestGrad1.dropdownpaymentmethod.selectedKey = "0";
		frmAttestGrad1.dropdownstudylevel.selectedKey = "0";
	//frmAttestGrad1.imgCamPreview.src = "pixel.png";
		
		//	clear step3 fields
		frmAttestGrad1.txtcredithours.text = "";
		frmAttestGrad1.txtinstitutename.text = "";
		frmAttestGrad1.txtinstitutename2.text = "";
		frmAttestGrad1.txtmajor.text = "";
		frmAttestGrad1.dropdownnationality.selectedKey = "0";
		//frmAttestGrad1.imgCamPreview.src = "pixel.png";
		frmAttestGrad1.dropdownstudylevel.selectedKey = "0";
		frmAttestGrad1.imgCamPreview.setVisibility(false);
	}
}

function resetBase64()		//release previous camera base64
{
	camBase64 = "";
}

function resetNewRegForm()
{
	resetBase64();		//release previous camera base64
	frmNewReg.imgCamPreview.src = "pixel.png";
	frmNewReg.txtconfirmpassword.text = "";
	frmNewReg.txtemailid.text = "";
	frmNewReg.txtemiratesid1.text = "";
	frmNewReg.txtemiratesid2.text = "";
	frmNewReg.txtemiratesid3.text = "";
	frmNewReg.txtemiratesid4.text = "";
	frmNewReg.txtmobilenumber.text = "";
	frmNewReg.txtname.text = "";
	frmNewReg.txtpassportnumber.text = "";
	frmNewReg.txtpassword.text = "";
	frmNewReg.txtuserid.text = "";
	frmNewReg.dropdownnationality.selectedKey = "0";
	frmNewReg.dropdownmobileareacode.selectedKey = "0";
}
/*
function showHideMenu()
{
	if(frmMainMenu.hbxGradStud.isVisible==true)
	{
		showHideMenuItems(false);
	}
	else
	{
		showHideMenuItems(true);
	}
}*/
function showMainMenuImage() {
	var deviceName=kony.os.deviceInfo().name;
	kony.print("device name is " + deviceName);
	var curLocale=kony.i18n.getCurrentLocale();
	kony.print("Current locale is " + curLocale);
	if(deviceName=="" || deviceName == " Simulator")
	{
		if (curLocale == "en_US") {
			frmMainMenu.imgFooter.src = "imgappeng.png";
		} else if (curLocale == "ar_SA") {
			frmMainMenu.imgFooter.src = "imgappar.png";
		}
	} else {
		frmMainMenu.imgFooter.src = "imgapp.png";
	}
}

function showHideMenuItems(flag)
{
	frmMainMenu.hbxGradStud.setVisibility(flag);
	frmMainMenu.hbxCurStud.setVisibility(flag);
	frmMainMenu.hbxFacMem.setVisibility(flag);
}

function showHideMenu(menuId)
{
	switch(menuId)
	{
		case 1:
			frmMainMenu.hboxCertAset.isVisible = !frmMainMenu.hboxCertAset.isVisible; 
			frmMainMenu.hboxCert.isVisible = false;
			break;
		case 2:
			frmMainMenu.hboxCertAset.isVisible = false; 
			frmMainMenu.hboxCert.isVisible = !frmMainMenu.hboxCert.isVisible;
			break;
		case 3:
			frmMainMenu.hboxCertAset.isVisible = false; 
			frmMainMenu.hboxCert.isVisible = false;
			frmFahim.show();
			//alert("Under Construstion");
			break;
	}
}

function setGender(selectedGender, widget1, widget2) {
    isMale = selectedGender;
    if (isMale == true) {
        widget1.src = "checked.png";
        widget2.src = "unchecked.png";
        /*
		frmNewReg2.rbimgPublic.src = "checked.png";
		frmNewReg2.rbimgprivate.src = "unchecked.png";
		*/
    } else {
        widget2.src = "checked.png";
        widget1.src = "unchecked.png";
        /*
		frmNewReg2.rbimgPublic.src = "unchecked.png";
		frmNewReg2.rbimgprivate.src = "checked.png";
		*/
    }
}
/*
function setGender(selectedGender)
{
	isMale = selectedGender;
	if (isMale == true)
	{
		frmAttestGrad1.rbimgMale.src = "checked.png";
		frmAttestGrad1.rbimgFemale.src = "unchecked.png";
	}
	else
	{
		frmAttestGrad1.rbimgMale.src = "unchecked.png";
		frmAttestGrad1.rbimgFemale.src = "checked.png";
	}
}
*/
function setPurpose(attestInside)
{
	isAttestedInside = attestInside;
	if (isAttestedInside == true)
	{
		frmAttestGrad2.rdimgAttestInside.src = "checked.png";
		frmAttestGrad2.rdimgAttestOutside.src = "unchecked.png";
	}
	else
	{
		frmAttestGrad2.rdimgAttestInside.src = "unchecked.png";
		frmAttestGrad2.rdimgAttestOutside.src = "checked.png";
	}
}

function setIsCertificateAttested(isAttestedVar)
{	
	isAttested = isAttestedVar
	if(gblDeviceInfo=="tab"){
	if (isAttested == true)
	{
		frmAttestGrad1.rbimgYes.src = "checked.png";
		frmAttestGrad1.rbimgNo.src = "unchecked.png";
	}
	else
	{
		frmAttestGrad1.rbimgYes.src = "unchecked.png";
		frmAttestGrad1.rbimgNo.src = "checked.png";
	}
	}else{
	if (isAttested == true)
	{
		frmAttestGrad3.rbimgYes.src = "checked.png";
		frmAttestGrad3.rbimgNo.src = "unchecked.png";
	}
	else
	{
		frmAttestGrad3.rbimgYes.src = "unchecked.png";
		frmAttestGrad3.rbimgNo.src = "checked.png";
	}
	}
}



//function setStudyLevel(boxID)
//{
//	if (boxID == 1)
//	{
//		frmAttestGrad3.rbimgSecondary.src = "checked.png";
//		frmAttestGrad3.rbimgDiploma.src = "unchecked.png";
//		frmAttestGrad3.rbimgBachelor.src = "unchecked.png";
//		frmAttestGrad3.rbimgMaster.src = "unchecked.png";
//	}
//	else if(boxID == 2)
//	{
//		frmAttestGrad3.rbimgSecondary.src = "unchecked.png";
//		frmAttestGrad3.rbimgDiploma.src = "checked.png";
//		frmAttestGrad3.rbimgBachelor.src = "unchecked.png";
//		frmAttestGrad3.rbimgMaster.src = "unchecked.png";
//	}
//	else if(boxID == 3)
//	{
//		frmAttestGrad3.rbimgSecondary.src = "unchecked.png";
//		frmAttestGrad3.rbimgDiploma.src = "unchecked.png";
//		frmAttestGrad3.rbimgBachelor.src = "checked.png";
//		frmAttestGrad3.rbimgMaster.src = "unchecked.png";
//	}
//	else if(boxID == 4)
//	{
//		frmAttestGrad3.rbimgSecondary.src = "unchecked.png";
//		frmAttestGrad3.rbimgDiploma.src = "unchecked.png";
//		frmAttestGrad3.rbimgBachelor.src = "unchecked.png";
//		frmAttestGrad3.rbimgMaster.src = "checked.png";
//	}
//}

function loadLoginForm()
{
	if(isArabicLocale == true)//(kony.i18n.getCurrentLocale()=="ar_SA")
	{
		//alert("locale is " + kony.i18n.getCurrentLocale());
		frmLoginAR.destroy();
		frmLoginAR.show();
		//gvAppNo="";
	}
	else
	{
		//alert("locale is " + kony.i18n.getCurrentLocale());
		frmLogin.destroy();
		frmLogin.show();
		//gvAppNo="";
	}
}

function destroyAllForms()
{
	frmAttestGrad1.destroy();
	frmAttestGrad2.destroy();
	frmAttestGrad3.destroy();
	frmFacultyStatic.destroy();
	frmCurntStudStatic.destroy();
	frmGradStaticPage1.destroy();
	frmGradStaticPage2.destroy();
	frmMainMenu.destroy();
	frmNewReg.destroy();
}


function destroyAllTabletForms()
{
	frmAttestGrad1.destroy();
	frmFacultyStatic.destroy();
	frmCurntStudStatic.destroy();
	frmGradStaticPage1.destroy();
	frmMainMenu.destroy();
	frmNewReg.destroy();
}
function checkCameraSupport()
{
	isCaptureMaxlengthExceeds=false;
	if(kony.os.hasCameraSupport() == false)
	{
		//do not render camera widget for frmNewReg
		frmNewReg.lineCamera.setVisibility(false);
		frmNewReg.hbxcaptureimage.setVisibility(false);
		frmNewReg.imgCamPreview.setVisibility(false);
		
		//do not render camera widget for frmAttestGrad2
		frmAttestGrad2.hbxCamStaff.setVisibility(false);
		
		//do not render camera widget for frmNewReg
		frmAttestGrad3.lineCamera.setVisibility(false);
		frmAttestGrad3.hbxcaptureimage.setVisibility(false);
		frmAttestGrad3.imgCamPreview.setVisibility(false);
		
	}
	
	
}

//to disable fields that would receive data from service
//function disableFieldsComingFromService()
//{
//	frmAttestGrad1.txtTelephoneAreaCode.setEnabled(false);
//	frmAttestGrad1.txtTelephoneNumber.setEnabled(false);
//	frmAttestGrad1.txtemiratesid.setEnabled(false);
//	
//	if(selectedCategory == category_Graduate)
//	{
//		frmAttestGrad1.txtmobilenumber.setEnabled(false);
//	}
//}

function launchDeviceCamera(currFrm)
{
	kony.print("current form is : " + currFrm);
	kony.print("Operating system is " + kony.os.deviceInfo().name);
	if (kony.os.deviceInfo().name == "android") {
		currFrm.camCertImage.openCamera();
	} else {
	}
}

function hideLanguageToggleButton()
{
	frmLogin.lnklanguage.setVisibility(isArabicSupported);
}

function hideDefaultAppLoadingIndicator()
{
	kony.application.setApplicationBehaviors({"hideDefaultLoadingIndicator":true});
}

function exitMoHESRApp()
{
	kony.application.exit();
}

function setAppIdleTimeOut()
{
	//please modify callback as per requirement
	kony.application.registerForIdleTimeout(5, onSessionTimeout);
}

function onSessionTimeout()
{
	loadLoginForm();
	resetAttestationForms();
}


function camCallback(camObj)
{
	isCaptureMaxlengthExceeds=false;
	kony.print("Rawbytes is : "+camObj.rawBytes);
	frmAttestGrad1.imgCamPreview.rawBytes = camObj.rawBytes;
	frmAttestGrad1.imgCamPreview.setVisibility(true);
	camBase64 = kony.convertToBase64(camObj.rawBytes);
	attachLength= camBase64.toString().length;
	if(attachLength > 3145728){
		isCaptureMaxlengthExceeds=true;
		isSaveAttach=false;
		}
	else
		{
		isCaptureMaxlengthExceeds=false;
		isSaveAttach=false;
		}
	kony.print("Base64 is : "+camBase64);
}