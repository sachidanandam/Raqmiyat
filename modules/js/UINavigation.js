function attest1AdjustFooter()			//adjust footer for general information details page
{
	frmAttestGrad1.btnPrev.skin = "sknBtnInvisible";
	var deviceName=kony.os.deviceInfo().name;
	kony.print("device name is " + deviceName);
	var curLocale=kony.i18n.getCurrentLocale();
	kony.print("Current locale is " + curLocale);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	if(deviceName!="android")
	{
		frmAttestGrad1.vbxNext.onClick = goTofrm2;
		if(curLocale == "ar_SA") {
			//frmAttestGrad1.btnNext.skin = "sknBtnPrev";
			frmAttestGrad1.imgNext.src = "nextar.png";
		} else if(curLocale == "en_US") {
			//frmAttestGrad1.btnNext.skin = "sknBtnNext";
			frmAttestGrad1.imgNext.src = "nexteng.png";
		}
	} else {
		frmAttestGrad1.btnNext.skin = "sknBtnNext";
		frmAttestGrad1.btnNext.onClick = goTofrm2;
	}
	
	frmAttestGrad1.lblSteps.text = kony.i18n.getLocalizedString("lblStep1");//"Step 1 of 3";

	if(selectedCategory == category_Graduate)
	{
		frmAttestGrad1.lblCategory.text = kony.i18n.getLocalizedString("lblGraduate");
	}
	else if(selectedCategory == category_Enrolled)
	{
		// define i18n 
		frmAttestGrad1.lblCategory.text = kony.i18n.getLocalizedString("lblEnrolled");
	}
	else
	{
		// define i18n 
		frmAttestGrad1.lblCategory.text = kony.i18n.getLocalizedString("lblStaff");
		frmAttestGrad1.lblSteps.text = kony.i18n.getLocalizedString("lblStep1Of2");
	}
	
}

function attest2AdjustFooter()			//adjust footer for study details page
{
	var deviceName=kony.os.deviceInfo().name;
	kony.print("device name is " + deviceName);
	var curLocale=kony.i18n.getCurrentLocale();
	kony.print("Current locale is " + curLocale);
	if(deviceName!="android")
	{
		if(curLocale == "ar_SA") {
			/*frmAttestGrad2.btnPrev.skin = "sknBtnNext";
			frmAttestGrad2.btnNext.skin = "sknBtnPrev";
			frmAttestGrad2.btnPrev.focusSkin = "sknBtnNext";
			frmAttestGrad2.btnNext.focusSkin = "sknBtnPrev";*/
			frmAttestGrad2.imgPrev.src = "prevar.png";
			frmAttestGrad2.imgNext.src = "nextar.png";
		} else if(curLocale == "en_US") {
			/*frmAttestGrad2.btnPrev.skin = "sknBtnPrev";
			frmAttestGrad2.btnNext.skin = "sknBtnNext";
			frmAttestGrad2.btnPrev.focusSkin = "sknBtnPrev";
			frmAttestGrad2.btnNext.focusSkin = "sknBtnNext";*/
			frmAttestGrad2.imgNext.src = "nexteng.png";
			frmAttestGrad2.imgPrev.src = "preveng.png";
		}
		frmAttestGrad2.vbxNext.onClick = goTofrm3;
		frmAttestGrad2.vbxPrev.onClick = goTofrm1;
	} else {
		frmAttestGrad2.btnPrev.skin = "sknBtnPrev";
		frmAttestGrad2.btnNext.skin = "sknBtnNext";
		frmAttestGrad2.btnPrev.onClick = goTofrm1;
		frmAttestGrad2.btnNext.onClick = goTofrm3;
	}
	frmAttestGrad2.lblSteps.text = kony.i18n.getLocalizedString("lblStep2");//"Step 2 of 3";

	if(selectedCategory == category_Graduate)
	{
		frmAttestGrad2.lblCategory.text = kony.i18n.getLocalizedString("lblGraduate");
		frmAttestGrad2.lblstudydetails.text = kony.i18n.getLocalizedString("lblStudyDetails");//"Study Details";
		frmAttestGrad2.lblGraduatedYear.setVisibility(true);
		frmAttestGrad2.txtgraduatedyear.setVisibility(true);
		frmAttestGrad2.lineGraduated.setVisibility(true);
		frmAttestGrad2.hbxCamStaff.setVisibility(false);
		frmAttestGrad2.hbxStudyDetails.setVisibility(true);
		frmAttestGrad2.lblStudentID.setVisibility(true);
		frmAttestGrad2.txtstudentid.setVisibility(true);
		frmAttestGrad2.lineStudyDetails.setVisibility(true);
		frmAttestGrad2.lineStudentID.setVisibility(true);
		frmAttestGrad2.lblSubMajor.setVisibility(false);
		frmAttestGrad2.dropdownSubMajor.setVisibility(false);
		frmAttestGrad2.lineSubmajor.setVisibility(false);
		
		
	}
	else if(selectedCategory == category_Enrolled)
	{
		// define i18n 
		frmAttestGrad2.lblCategory.text = kony.i18n.getLocalizedString("lblEnrolled");
		frmAttestGrad2.lblstudydetails.text = kony.i18n.getLocalizedString("lblStudyDetails");
		frmAttestGrad2.lblGraduatedYear.setVisibility(false);
		frmAttestGrad2.txtgraduatedyear.setVisibility(false);
		frmAttestGrad2.lineGraduated.setVisibility(false);
		
		frmAttestGrad2.hbxCamStaff.setVisibility(false);
		frmAttestGrad2.hbxStudyDetails.setVisibility(true);
		frmAttestGrad2.lblStudentID.setVisibility(true);
		frmAttestGrad2.txtstudentid.setVisibility(true);
		frmAttestGrad2.lineStudyDetails.setVisibility(true);
		frmAttestGrad2.lineStudentID.setVisibility(true);
		frmAttestGrad2.lblSubMajor.setVisibility(true);
		frmAttestGrad2.dropdownSubMajor.setVisibility(true);
		frmAttestGrad2.lineSubmajor.setVisibility(true);
		
		
		
	}
	else
	{	
		frmAttestGrad2.hbxCamStaff.setVisibility(true);
		frmAttestGrad2.hbxStudyDetails.setVisibility(false);
		frmAttestGrad2.lineStudyDetails.setVisibility(false);
		frmAttestGrad2.txtgraduatedyear.setVisibility(false);
		frmAttestGrad2.lblGraduatedYear.setVisibility(false);
		frmAttestGrad2.lineGraduated.setVisibility(false);
		frmAttestGrad2.lblStudentID.setVisibility(false);
		frmAttestGrad2.txtstudentid.setVisibility(false);
		frmAttestGrad2.lineStudentID.setVisibility(false);
		
		frmAttestGrad2.lblSubMajor.setVisibility(false);
		frmAttestGrad2.dropdownSubMajor.setVisibility(false);
		frmAttestGrad2.lineSubmajor.setVisibility(false);
		
		frmAttestGrad2.lblstudydetails.text = kony.i18n.getLocalizedString("lblInstitutionDetails");
		// define i18n 
		frmAttestGrad2.lblCategory.text = kony.i18n.getLocalizedString("lblStaff");
		frmAttestGrad2.lblSteps.text = kony.i18n.getLocalizedString("lblStep2Of2");
		
		if(deviceName!="android")
		{
			if (curLocale == "en_US") {
				/*frmAttestGrad2.btnNext.skin = "sknBtnNextInact";
				frmAttestGrad2.btnNext.focusSkin = "sknBtnNextInact";*/
				frmAttestGrad2.imgNext.src = "nexteng_inact.png";
			} else if (curLocale = "ar_SA") {
				/*frmAttestGrad2.btnNext.skin = "sknBtnPrevInact";
				frmAttestGrad2.btnNext.focusSkin = "sknBtnPrevInact";*/
				frmAttestGrad2.imgNext.src = "nextar_inact.png";
			}
			frmAttestGrad2.vbxNext.onClick = doNothing;
		} else {
			frmAttestGrad2.btnNext.skin = "sknBtnNextInact";
			frmAttestGrad2.btnNext.focusSkin = "sknBtnNextInact";
			frmAttestGrad2.btnNext.onClick = doNothing;
		}
		
		
		
		
	}
	
}

function attest3AdjustFooter()			//adjust footer for previous study details page
{
	
	var deviceName=kony.os.deviceInfo().name;
	kony.print("device name is " + deviceName);
	var curLocale=kony.i18n.getCurrentLocale();
	kony.print("Current locale is " + curLocale);
	if(deviceName!="android")
	{
		if(curLocale == "ar_SA") {
			/*frmAttestGrad3.btnNext.skin = "sknBtnPrevInact";
			frmAttestGrad3.btnPrev.skin = "sknBtnNext";*/
			frmAttestGrad3.imgNext.src = "nextar_inact.png";
			frmAttestGrad3.imgPrev.src = "prevar.png";
		} else if(curLocale == "en_US") {
			/*frmAttestGrad3.btnNext.skin = "sknBtnNextInact";
			frmAttestGrad3.btnPrev.skin = "sknBtnPrev";*/
			frmAttestGrad3.imgNext.src = "nexteng_inact.png";
			frmAttestGrad3.imgPrev.src = "preveng.png";
		}
		
		frmAttestGrad3.vbxPrev.onClick = showFrm2;
		frmAttestGrad3.vbxNext.onClick = doNothing;
	} else {
		frmAttestGrad3.btnNext.skin = "sknBtnNextInact";
		frmAttestGrad3.btnPrev.skin = "sknBtnPrev";
		//frmAttestGrad3.btnPrev.onClick = goTofrm2;
		frmAttestGrad3.btnPrev.onClick = showFrm2;
		frmAttestGrad3.btnNext.onClick = doNothing;
	}
	
	frmAttestGrad3.lblSteps.text = kony.i18n.getLocalizedString("lblStep3");//"Step 3 of 3";

	if(selectedCategory == category_Graduate)
	{
		frmAttestGrad3.dropdownstudylevel.setVisibility(true);
		frmAttestGrad3.lblCategory.text = kony.i18n.getLocalizedString("lblGraduate");
		frmAttestGrad3.lblpreviousstudydetails.setVisibility(true);
		frmAttestGrad3.line15518273941045.setVisibility(true);
		
		//Changed on 11/11/2014		
		frmAttestGrad3.lblStudyLevel.setVisibility(true);
	

		frmAttestGrad3.line155182739187460.setVisibility(true);
		frmAttestGrad3.lblInstituteName.setVisibility(true);
		frmAttestGrad3.txtinstitutename.setVisibility(true);
		frmAttestGrad3.line155182739208023.setVisibility(true);
		frmAttestGrad3.lblMajor.setVisibility(true);
		frmAttestGrad3.txtmajor.setVisibility(true);
		frmAttestGrad3.line155182739207158.setVisibility(true);
		frmAttestGrad3.radiobtniscertificateattested.setVisibility(true);
		frmAttestGrad3.hbxCertAttest.setVisibility(true);
		
	}
	else if(selectedCategory == category_Enrolled)
	{
		// define i18n 
		frmAttestGrad3.lblCategory.text =kony.i18n.getLocalizedString("lblEnrolled");
		frmAttestGrad3.lbltransfercertificatedetails.text = kony.i18n.getLocalizedString("lblCertificateDetails");
		frmAttestGrad3.lblpreviousstudydetails.setVisibility(false);
		frmAttestGrad3.line15518273941045.setVisibility(false);
		
		//Changed on 11/11/2014
		frmAttestGrad3.lblStudyLevel.setVisibility(false);
		
		frmAttestGrad3.line155182739187460.setVisibility(false);
		frmAttestGrad3.lblInstituteName.setVisibility(false);
		frmAttestGrad3.txtinstitutename.setVisibility(false);
		frmAttestGrad3.line155182739208023.setVisibility(false);
		frmAttestGrad3.lblMajor.setVisibility(false);
		frmAttestGrad3.txtmajor.setVisibility(false);
		frmAttestGrad3.line155182739207158.setVisibility(false);
		frmAttestGrad3.radiobtniscertificateattested.setVisibility(false);
		frmAttestGrad3.hbxCertAttest.setVisibility(false);
		frmAttestGrad3.dropdownstudylevel.setVisibility(false);
		
		
	}
	else			// never comes here, since Staff attestation flow has only two forms
	{
		//
	}
}
function showFrm2(){
	frmAttestGrad2.show();
}
function goTofrm3()
{
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	createAttestGrad2Obj();
	//var areFieldsProper = checkFieldsStep2();
 var areFieldsProper = validateCertAttestPgFieldGoFurther();
	if(areFieldsProper == false)
		return;
	if(selectedCategory == category_Graduate){
		//getPrevStudyLevels();
		frmAttestGrad3.show();
	}
	else{
		frmAttestGrad3.show();
	}
}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}
	
//doing additional adjustments because for frmAttestGrad1, the adjustment is in post show,
// so to avoid the delay, adjusting while navigating itself
function goTofrm1()			
{							
	frmAttestGrad1.show();
}

function goTofrm2()
{
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	//var areFieldsProper = checkFieldsStep1();
	var areFieldsProper = validateCertAttestPgFieldGoFurther();
	if(areFieldsProper == false)
		return;
	createAttestGrad1Obj();
	if(!gblNfcFlag)
	getInstitutesList();
	else
	getPaymentMethodTypes();
	
	frmAttestGrad2.show();
}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}

function doNothing()
{
	//
}

function onVbxGraduateClick()
{
	selectedCategory = category_Graduate;
	//logic to set proper UI adjustments based upon selectedCategory to be written here
	//frmAttestGrad1.show();
	frmGradStaticPage1.show();
}

function onVbxCurrentClick()
{
	selectedCategory = category_Enrolled;
	
	//frmAttestGrad1.show();
}

function onVbxFacultyClick()
{
	selectedCategory = category_Faculty;
	
	//frmAttestGrad1.show();
}

function onBtnClickSignIn()
{
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	var isLoginCorrect = validateLogin();
	if(isLoginCorrect == false)
		return;
//	frmMainMenu.show();
	validateUser();
	}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}


function onBtnClickSubmitAttestStep3()
{
	//var areAllFieldsCorrect = checkFieldsStep3();
	var areAllFieldsCorrect = validateCertAttestPgFieldGoFurther()();
	if(areAllFieldsCorrect == false)
		return;
	//alert("Successfully registered");
	//frmMainMenu.show();

	if(isCaptureMaxlengthExceeds==false)
		invokeInsertApp();
	else
	{
		frmAttachmentConfirmation.show();
	}
	
}
function loadi18GraStudStep1()
{
	//frmGradStaticPage1.browGradInsStep1.htmlString=kony.i18n.getLocalizedString("lblGradStaticTextStep1");
	
	if(gblDeviceInfo=="tab")
	{	
	var string=kony.i18n.getLocalizedString("lblGradStaticTextStep1")+"</br>"+kony.i18n.getLocalizedString("lblGradStaticTextStep2");
	frmGradStaticPage1.brwr.htmlString=string;//kony.i18n.getLocalizedString("lblGradStaticTextStep1");
	}
	else
	frmGradStaticPage1.browGradInsStep1.htmlString=kony.i18n.getLocalizedString("lblGradStaticTextStep1");
}

function loadi18GraStudStep2()
{
	frmGradStaticPage2.browGradInsStep2.htmlString=kony.i18n.getLocalizedString("lblGradStaticTextStep2");
}

function loadi18CurStud()
{
	frmCurntStudStatic.browCurStudIns.htmlString=kony.i18n.getLocalizedString("lblCurStudStatic");
}
function loadi18CertificateEqui()
{
	frmCertEquivalStaticPage1.browCertificateEuiqStep1.htmlString=kony.i18n.getLocalizedString("lblCertificateStatic1");
}
function loadi18FacMembers()
{
	frmFacultyStatic.browFacIns.htmlString=kony.i18n.getLocalizedString("lblFacStaticText");
}
function goToEquiValencyFrm2(){
	var areFieldsProper = checkFieldsEquiStep1();
	if(areFieldsProper == false)
		return;
	
	frmCertEquivalency2.show();
	//alert("ready to navigate next form");

}
function goToEquiValencyFrm3(){
	var areFieldsProper = checkFieldsEquiStep2();
	if(areFieldsProper == false)
		return;

	frmCertEquivalency3.show();
}
function goToRequestfrm2()
{
	var areFieldsProper = checkFieldsReqStep1();
	if(areFieldsProper == false)
		return;
	
	frmCertRequest2.show();
	//alert("ready to navigate next form");
}
function goToRequestfrm3()
{
	var areFieldsProper = checkFieldsReqStep2();
	if(areFieldsProper == false)
		return;
	frmCertRequest3.show();
	
}

function onBtnClickSubmitAttestStep3()
{
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	//var areAllFieldsCorrect = checkFieldsStep3();
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
//Tab 
function onBtnClickTabSubmitAttestStep3()
{
if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	//var areAllFieldsCorrect = checkFieldsStep1Tab();
	var areAllFieldsCorrect = validateCertAttestPgFieldGoFurther();	
	kony.print("success validation :"+areAllFieldsCorrect)
	if(areAllFieldsCorrect == false)
		return;
		else{
				kony.print("success validation 1")
				createAttestGrad1ObjTab();		
				//alert("validation success");

				
				if(isCaptureMaxlengthExceeds==false)
					invokeInsertApp();
				else
				{
					popAttachmentConfirmation.show();
				}
				
		}
		//invokeInsertApp();
	/*
	if(isCaptureMaxlengthExceeds==false)
		invokeInsertApp();
	else
	{
		frmAttachmentConfirmation.show();
	}
	*/
	}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}

function onBtnClickSubmitCertReqStep3()
{
	var areAllFieldsCorrect = checkFieldsReqStep3();
	if(areAllFieldsCorrect == false)
		return;
	
	alert("Document submitted successfully");
}

//function uiPgNavigation(pgId,isSubHdrEnable){} 
function uiPgNavigation(pgId) 
{
	switch(pgId)
	{
		case "2.1":
			//updateHeader(pgId)
			frmCertEquivalStaticPage1.show();
			break;
		case "2.1.1":
			//updateHeader(pgId)
			frmCertEquivalency1.show();
			break;
		case "2.2":
			//updateHeader(pgId)
			frmApplicationStatus.show();
			break;
		case "2.2.1":
			//updateHeader(pgId)
			frmApplicationStatusDetails.show();
			break;
		case "2.2.2":
			//updateHeader(pgId)
			frmApplicationInquiryStatus.show();
			break;
		case "2.3":
			//updateHeader(pgId)
			frmInquireAboutInstStaticPage.show();
			break;
		case "2.3.1":
			//updateHeader(pgId)
			frmCertRequest1.show();
			break;
		case "2.4":
			//updateHeader(pgId)
			//hbxCommonHdr.lblPgHdrName.text = "Committees Decision";
			frmCommitteesDecisionStaticPage.show();
			break;
	}
}


function updateHeader(pgId) 
{
	switch(pgId)
	{
		case "2.1":
		case "2.1.1":
			hbxCommonSubHdr.lblPgSubHdrName.text = "Certificate Equivalency";
			hbxCommonHdrWtSub.lblPgHdrName.text = "Certificate Equivalency";
			break;
		case "2.2":
		case "2.2.1":
		case "2.2.2":
			hbxCommonSubHdr.lblPgSubHdrName.text = "Certificate Equivalency";
			hbxCommonHdrWtSub.lblPgHdrName.text = "Status of the certificate";
			break;
		case "2.3":
			hbxCommonSubHdr.lblPgSubHdrName.text = "Certificate Equivalency";
			hbxCommonHdrWtSub.lblPgHdrName.text = "Inquire about Educational Institutions / Academic Programs";
			break;
		case "2.3.1":
			hbxCommonSubHdr.lblPgSubHdrName.text = "Institute Study Programme Form";
			hbxCommonHdrWtSub.lblPgHdrName.text = "Certificate Equivalency";
			break;
		case "2.4":
			hbxCommonSubHdr.lblPgSubHdrName.text = "Certificate Equivalency";
			hbxCommonHdrWtSub.lblPgHdrName.text = "Committees Decision";
			break;
	}
}

function goBack()
{
	var curtFrm = kony.application.getCurrentForm();
	var curtFrmId = curtFrm["id"];
	switch(curtFrmId)
	{
		case "frmCertEquivalency1":
		case "frmCertEquivalency2":
			frmCertEquivalStaticPage.show();
			break;
		case "frmApplicationStatusDetails":
		case "frmApplicationInquiryStatus":
			frmApplicationStatus.show();
			break;
		case "frmCertRequest1":
		case "frmCertRequest2":
		case "frmCertRequest3":
			frmInquireAboutInstStaticPage.show();
			break;
		case "frmCertEquivalStaticPage":
		case "frmApplicationStatus":
		case "frmInquireAboutInstStaticPage":
			frmMainMenu.show();
		case "frmCommitteesDecisionStaticPage":		
			 frmMainMenu.show();
			break;
	}
} 