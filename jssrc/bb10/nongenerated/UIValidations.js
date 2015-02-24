var gblWidgetRefId = "";

function checkFieldsStep1() //attestation step1 validations
{
    if (frmAttestGrad1.txtstudentname != undefined && frmAttestGrad1.txtstudentname.text == "") {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterName"));;
        frmAttestGrad1.lblStudentName.skin = "sknLblRed";
        frmAttestGrad1.lblStudentName.text = kony.i18n.getLocalizedString("lblPleaseEnterName");
        //frmAttestGrad1.txtstudentname.setFocus(true);
        return false;
    } else if (frmAttestGrad1.dropdownnationality != undefined && frmAttestGrad1.dropdownnationality.selectedKey == 0) {
        //alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
        frmAttestGrad1.lblNationality.skin = "sknLblRed";
        frmAttestGrad1.lblNationality.text = kony.i18n.getLocalizedString("lblSelectCountry");
        //frmAttestGrad1.dropdownnationality.setFocus(true);
        return false;
    } else if (frmAttestGrad1.txtTelephoneAreaCode != undefined && frmAttestGrad1.txtTelephoneAreaCode.text == "") {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterTelephoneAreaCode"));
        frmAttestGrad1.lblTelephone.skin = "sknLblRed";
        frmAttestGrad1.lblTelephone.text = kony.i18n.getLocalizedString("lblPleaseEnterTelephoneAreaCode");
        frmAttestGrad1.txtTelephoneAreaCode.setFocus(true);
        return false;
    } else if (!ValidateLength(frmAttestGrad1.txtTelephoneAreaCode.text, 2)) {
        frmAttestGrad1.lblTelephone.skin = "sknLblRed";
        frmAttestGrad1.lblTelephone.text = kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone");
        frmAttestGrad1.txtTelephoneAreaCode.setFocus(true);
        return false;
    } else if (frmAttestGrad1.txtTelephoneNumber != undefined && frmAttestGrad1.txtTelephoneNumber.text == "") {
        frmAttestGrad1.lblTelephone.skin = "sknLblRed";
        frmAttestGrad1.lblTelephone.text = kony.i18n.getLocalizedString("lblPleaseEnterTelephoneNumber");
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterTelephoneNumber"));
        frmAttestGrad1.txtTelephoneNumber.setFocus(true);
        return false;
    } else if (!ValidateLength(frmAttestGrad1.txtTelephoneNumber.text, 7)) {
        frmAttestGrad1.lblTelephone.skin = "sknLblRed";
        frmAttestGrad1.lblTelephone.text = kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone");
        frmAttestGrad1.txtTelephoneNumber.setFocus(true);
        return false;
    } else if (frmAttestGrad1.txtmobilenumber != undefined && frmAttestGrad1.txtmobilenumber.text == "") {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMobile"));
        frmAttestGrad1.lblMobile.skin = "sknLblRed";
        frmAttestGrad1.lblMobile.text = kony.i18n.getLocalizedString("lblPleaseEnterMobile");
        frmAttestGrad1.txtmobilenumber.setFocus(true);
        return false;
    } else if (!ValidateLength(frmAttestGrad1.txtmobilenumber.text, 7)) {
        frmAttestGrad1.lblMobile.skin = "sknLblRed";
        frmAttestGrad1.lblMobile.text = kony.i18n.getLocalizedString("lblPleaseEnterValidMobileNo");
        frmAttestGrad1.txtmobilenumber.setFocus(true);
        return false;
    } else if (frmAttestGrad1.txtemiratesid1 != undefined && frmAttestGrad1.txtemiratesid1.text == "") {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
        frmAttestGrad1.lblEmirateID.skin = "sknLblRed";
        frmAttestGrad1.lblEmirateID.text = kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
        frmAttestGrad1.txtemiratesid1.setFocus(true);
        return false;
    } else if (!ValidateLength(frmAttestGrad1.txtemiratesid1.text, 3)) {
        frmAttestGrad1.lblEmirateID.skin = "sknLblRed";
        frmAttestGrad1.lblEmirateID.text = kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID");
        return false;
    } else if (frmAttestGrad1.txtemiratesid2 != undefined && frmAttestGrad1.txtemiratesid2.text == "") {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
        frmAttestGrad1.lblEmirateID.skin = "sknLblRed";
        frmAttestGrad1.lblEmirateID.text = kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
        frmAttestGrad1.txtemiratesid2.setFocus(true);
        return false;
    } else if (!ValidateLength(frmAttestGrad1.txtemiratesid2.text, 4)) {
        frmAttestGrad1.lblEmirateID.skin = "sknLblRed";
        frmAttestGrad1.lblEmirateID.text = kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID");
        frmAttestGrad1.txtemiratesid2.setFocus(true);
        return false;
    } else if (frmAttestGrad1.txtemiratesid3 != undefined && frmAttestGrad1.txtemiratesid3.text == "") {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
        frmAttestGrad1.lblEmirateID.skin = "sknLblRed";
        frmAttestGrad1.lblEmirateID.text = kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
        frmAttestGrad1.txtemiratesid3.setFocus(true);
        return false;
    } else if (!ValidateLength(frmAttestGrad1.txtemiratesid3.text, 7)) {
        frmAttestGrad1.lblEmirateID.skin = "sknLblRed";
        frmAttestGrad1.lblEmirateID.text = kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID");
        frmAttestGrad1.txtemiratesid3.setFocus(true);
        return false;
    } else if (frmAttestGrad1.txtemiratesid4 != undefined && frmAttestGrad1.txtemiratesid4.text == "") {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
        frmAttestGrad1.lblEmirateID.skin = "sknLblRed";
        frmAttestGrad1.lblEmirateID.text = kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
        frmAttestGrad1.txtemiratesid4.setFocus(true);
        return false;
    } else if (!ValidateLength(frmAttestGrad1.txtemiratesid4.text, 1)) {
        frmAttestGrad1.lblEmirateID.skin = "sknLblRed";
        frmAttestGrad1.lblEmirateID.text = kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID");
        frmAttestGrad1.txtemiratesid4.setFocus(true);
        return false;
    }
    //
    else if (frmAttestGrad1.txtpobox != undefined && frmAttestGrad1.txtpobox.text == "") {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPOBox"));
        frmAttestGrad1.lblPObox.skin = "sknLblRed";
        frmAttestGrad1.lblPObox.text = kony.i18n.getLocalizedString("lblPleaseEnterPOBox");
        frmAttestGrad1.txtpobox.setFocus(true);
        return false;
    } else if (frmAttestGrad1.dropdownemirate != undefined && frmAttestGrad1.dropdownemirate.selectedKey == 0) {
        //alertDialog(kony.i18n.getLocalizedString("lblSelectEmirate"));
        frmAttestGrad1.lblEmirate.skin = "sknLblRed";
        frmAttestGrad1.lblEmirate.text = kony.i18n.getLocalizedString("lblSelectEmirate");
        frmAttestGrad1.dropdownemirate.setFocus(true);
        return false;
    } else if (frmAttestGrad1.txtemail != undefined && frmAttestGrad1.txtemail.text == "") {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmail"));
        frmAttestGrad1.lblEmail.skin = "sknLblRed";
        frmAttestGrad1.lblEmail.text = kony.i18n.getLocalizedString("lblPleaseEnterEmail");
        frmAttestGrad1.txtemail.setFocus(true);
        return false;
    } else if (frmAttestGrad1.txtemail != undefined && !validateUserEmail(frmAttestGrad1.txtemail.text)) {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmail"));
        frmAttestGrad1.lblEmail.skin = "sknLblRed";
        frmAttestGrad1.lblEmail.text = kony.i18n.getLocalizedString("lblPleaseEnterValidEmail");
        frmAttestGrad1.txtemail.setFocus(true);
        return false;
    }
}

function checkFieldsStep2() //attestation step2 validations
{
    //removed as per Raqmiyat requirement (22/09/2014)
    /*if(frmAttestGrad2.dropdowninstitue!=undefined && frmAttestGrad2.dropdowninstitue.selectedKey == 0)
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectInstitute"));
		frmAttestGrad2.dropdowninstitue.setFocus(true);
		return false;
	}*/
    if (frmAttestGrad2.dropdownstudylevel != undefined && frmAttestGrad2.dropdownstudylevel.selectedKey == 0) {
        frmAttestGrad2.lblStudyLevel.skin = "sknLblRed";
        frmAttestGrad2.lblStudyLevel.text = kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel");
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"));
        frmAttestGrad2.dropdownstudylevel.setFocus(true);
        return false;
    } else if (frmAttestGrad2.dropdownmajor != undefined && frmAttestGrad2.dropdownmajor.selectedKey == 0) {
        frmAttestGrad2.lblMajor.skin = "sknLblRed";
        frmAttestGrad2.lblMajor.text = kony.i18n.getLocalizedString("lblPleaseSelectProgram");
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectProgram"));
        frmAttestGrad2.dropdownmajor.setFocus(true);
        return false;
    } else if (selectedCategory == category_Graduate && frmAttestGrad2.txtgraduatedyear != undefined && validateGraduatedYear(frmAttestGrad2.txtgraduatedyear.text) == false) {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidYear"));
        frmAttestGrad2.lblGraduatedYear.skin = "sknLblRed";
        frmAttestGrad2.lblGraduatedYear.text = kony.i18n.getLocalizedString("lblPleaseEnterValidYear");
        frmAttestGrad2.txtgraduatedyear.setFocus(true);
        return false;
    } else if (selectedCategory == category_Graduate && frmAttestGrad2.txtgraduatedyear != undefined && frmAttestGrad2.txtgraduatedyear.text.length < 4) {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidYear"));
        frmAttestGrad2.lblGraduatedYear.skin = "sknLblRed";
        frmAttestGrad2.lblGraduatedYear.text = kony.i18n.getLocalizedString("lblPleaseEnterValidYear");
        frmAttestGrad2.txtgraduatedyear.setFocus(true);
        return false;
    } else if (frmAttestGrad2.txtnoofdocuments != undefined && frmAttestGrad2.txtnoofdocuments.text == "") {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterNoOfDocuments"));
        frmAttestGrad2.lblNoofDocuments.skin = "sknLblRed";
        frmAttestGrad2.lblNoofDocuments.text = kony.i18n.getLocalizedString("lblPleaseEnterNoOfDocuments");
        frmAttestGrad2.txtnoofdocuments.setFocus(true);
        return false;
    } else if (frmAttestGrad2.txtstudentid != undefined && frmAttestGrad2.txtstudentid.text == "") {
        frmAttestGrad2.lblStudentID.skin = "sknLblRed";
        frmAttestGrad2.lblStudentID.text = kony.i18n.getLocalizedString("lblPleaseEnterStudentID");
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterStudentID"));
        frmAttestGrad2.txtstudentid.setFocus(true);
        return false;
    }
    //checking for presence of special characters
    else if (frmAttestGrad2.txtstudentid != undefined && checkForSpecialChars(frmAttestGrad2.txtstudentid.text) == true) {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidStudentID"));
        frmAttestGrad2.lblStudentID.skin = "sknLblRed";
        frmAttestGrad2.lblStudentID.text = kony.i18n.getLocalizedString("lblPleaseEnterValidStudentID");
        frmAttestGrad2.txtstudentid.setFocus(true);
        return false;
    } else if (selectedCategory == category_Enrolled && frmAttestGrad2.dropdownSubMajor != undefined && frmAttestGrad2.dropdownSubMajor.selectedKey == 0) {
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectSubMajor"));
        frmAttestGrad2.lblSubMajor.skin = "sknLblRed";
        frmAttestGrad2.lblSubMajor.text = kony.i18n.getLocalizedString("lblPleaseSelectSubMajor");
        frmAttestGrad2.dropdownSubMajor.setFocus(true);
        return false;
    }
    /*
 	else if(frmAttestGrad2.dropdownpaymentmethod!=undefined && frmAttestGrad2.dropdownpaymentmethod.selectedKey == 0)
 	{
 		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectPaymentMethod"));
 		frmAttestGrad2.dropdownpaymentmethod.setFocus(true);
 		return false;
 	}
	
  	else if(frmAttestGrad2.dropdownpaymentcardtype!=undefined && frmAttestGrad2.dropdownpaymentcardtype.selectedKey == 0)
 	{
 		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCardType"));
 		frmAttestGrad2.dropdownpaymentcardtype.setFocus(true);
 		return false;
 	}
	*/
    if (selectedCategory == category_Faculty) // in case of Faculty members,camera is present in step2
    {
        /*
		if(camBase64 == "" || camBase64 == null)
		{
			alertDialog(kony.i18n.getLocalizedString("lblPleaseTakePicture"));
			frmAttestGrad2.camCertImage.setFocus(true);
			return false;
		}
*/
    }
}

function checkFieldsStep3() //attestation step3 validations
{
    if (selectedCategory == category_Graduate) {
        if (frmAttestGrad3.dropdownstudylevel != undefined && frmAttestGrad3.dropdownstudylevel.selectedKey == 0) {
            //alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"));			
            //return false;
            frmAttestGrad3.lblStudyLevel.skin = "sknLblRed";
            frmAttestGrad3.lblStudyLevel.text = kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel");
            return false;
        } else if (frmAttestGrad3.txtinstitutename != undefined && frmAttestGrad3.txtinstitutename.text == "") {
            //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterInstitute"));
            //frmAttestGrad3.txtinstitutename.setFocus(true);
            //return false;
            frmAttestGrad3.lblInstituteName.skin = "sknLblRed";
            frmAttestGrad3.lblInstituteName.text = kony.i18n.getLocalizedString("lblPleaseEnterInstitute");
            frmAttestGrad3.txtinstitutename.setFocus(true);
            return false;
        } else if (frmAttestGrad3.txtmajor != undefined && frmAttestGrad3.txtmajor.text == "") {
            //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMajor"));
            //frmAttestGrad3.txtmajor.setFocus(true);
            frmAttestGrad3.lblMajor.skin = "sknLblRed";
            frmAttestGrad3.lblMajor.text = kony.i18n.getLocalizedString("lblPleaseEnterMajor");
            frmAttestGrad3.txtmajor.setFocus(true);
            return false;
        } else if (frmAttestGrad3.dropdownnationality.selectedKey == 0) {
            frmAttestGrad3.lblCountry.skin = "sknLblRed";
            frmAttestGrad3.lblCountry.text = kony.i18n.getLocalizedString("lblSelectCountry");
            frmAttestGrad3.dropdownnationality.setFocus(true);
            return false;
        }
    } else if (selectedCategory == category_Enrolled) {
        if (frmAttestGrad3.txtinstitutename2 != undefined && frmAttestGrad3.txtinstitutename2.text == "") {
            //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterInstitute"));
            //frmAttestGrad3.txtinstitutename2.setFocus(true);
            //return false;
            frmAttestGrad3.lblInstituteNameCert.skin = "sknLblRed";
            frmAttestGrad3.lblInstituteNameCert.text = kony.i18n.getLocalizedString("lblPleaseEnterInstitute");
            frmAttestGrad3.txtinstitutename2.setFocus(true);
            return false;
        } else if (frmAttestGrad3.dropdownnationality != undefined && frmAttestGrad3.dropdownnationality.selectedKey == 0) {
            //alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
            //frmAttestGrad3.dropdownnationality.setFocus(true);
            //return false;
            frmAttestGrad3.lblCountry.skin = "sknLblRed";
            frmAttestGrad3.lblCountry.text = kony.i18n.getLocalizedString("lblSelectCountry");
            frmAttestGrad3.dropdownnationality.setFocus(true);
            return false;
        } else if (frmAttestGrad3.txtcredithours != undefined && frmAttestGrad3.txtcredithours.text == "") {
            //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterCreditHrs"));
            //frmAttestGrad3.txtcredithours.setFocus(true);
            //return false;
            frmAttestGrad3.lblCreditHours.skin = "sknLblRed";
            frmAttestGrad3.lblCreditHours.text = kony.i18n.getLocalizedString("lblPleaseEnterCreditHrs");
            frmAttestGrad3.txtcredithours.setFocus(true);
            return false;
        }
    }
    /*
	if(camBase64 == "" || camBase64 == null)
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseTakePicture"));
		frmAttestGrad3.camCertImage.setFocus(true);
		return false;
	}
*/
}

function validateLogin() //login validation
{
    var curFrm = kony.application.getCurrentForm();
    if (curFrm.txtusername != undefined && curFrm.txtusername.text == "") {
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterUsername"));
        gblErrWidgetRefId = curFrm.txtusername;
        return false;
    }
    //checking for special characters
    else if (curFrm.txtusername != undefined && checkForSpecialChars(curFrm.txtusername.text) == true) {
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidUsername"));
        gblErrWidgetRefId = curFrm.txtusername;
        return false;
    } else if (curFrm.txtpassword != undefined && curFrm.txtpassword.text == "") {
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPassword"));
        gblErrWidgetRefId = curFrm.txtpassword;
        return false;
    }
}

function onClickSubmitNewUser() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        var areAllFieldsCorrect = checkNewRegFields();
        kony.print("areAllFieldsCorrect is :" + areAllFieldsCorrect);
        if (areAllFieldsCorrect == false || areAllFieldsCorrect == "false") {
            return;
        }
        /*if(isArabicLocale == true)
		frmLoginAR.show();
	else
		frmLogin.show();
	*/
        //		insertNewUser();
        if (isCaptureMaxlengthExceeds == true) {
            isCaptureMaxlengthExceeds = false;
            if (gblDeviceInfo != "tab") {
                frmAttachmentConfirmation.show();
            } else {
                popAttachmentConfirmation.show();
            }
        } else {
            insertNewUser();
            isSaveAttachNewUser = true;
        }
    } else {
        alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
    }
}

function checkNewRegFields() {
    kony.print("object is " + frmNewReg.txtconfirmpassword + " and frmNewReg.txtconfirmpassword.text is " + frmNewReg.txtconfirmpassword.text)
    if (frmNewReg.txtuserid != undefined && frmNewReg.txtuserid.text == "") {
        kony.print("1");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterUserID"));;
        gblErrWidgetRefId = frmNewReg.txtuserid;
        //return false;
        //frmNewReg.lblUserid.skin="sknLblRed";
        //frmNewReg.lblUserid.text=kony.i18n.getLocalizedString("lblPleaseEnterUserID");
        //frmNewReg.txtuserid.setFocus(true);
        return false;
    }
    //checking for special characters
    if (frmNewReg.txtuserid != undefined && checkForSpecialChars(frmNewReg.txtuserid.text) == true) {
        kony.print("2");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidUserID"));
        gblErrWidgetRefId = frmNewReg.txtuserid;
        //frmNewReg.lblUserid.skin="sknLblRed";
        //frmNewReg.lblUserid.text=kony.i18n.getLocalizedString("lblPleaseEnterValidUserID");
        //frmNewReg.txtuserid.setFocus(true);
        return false;
    }
    if (frmNewReg.txtpassword != undefined && frmNewReg.txtpassword.text == "") {
        kony.print("3");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPassword"));
        gblErrWidgetRefId = frmNewReg.txtpassword;
        //frmNewReg.lblPassword.skin="sknLblRed";
        //frmNewReg.lblPassword.text=kony.i18n.getLocalizedString("lblPleaseEnterPassword");
        //frmNewReg.txtpassword.setFocus(true);
        return false;
    }
    //checking for special characters
    /*else if(frmNewReg.txtpassword!=undefined && checkForSpecialChars(frmNewReg.txtpassword.text) == true)
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidPassword"));
		frmNewReg.txtpassword.setFocus(true);
		return false;
	}*/
    /*if(!passWordValidation(frmNewReg.txtpassword.text,kony.i18n.getLocalizedString("lblPleaseEnterValidPassword")))
	{
		kony.print("4");
		//return false;
			alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPassword"));		
			gblErrWidgetRefId = frmNewReg.txtpassword;
			//frmNewReg.lblPassword.skin="sknLblRed";
            //frmNewReg.lblPassword.text=kony.i18n.getLocalizedString("lblPleaseEnterValidPassword");
            //frmNewReg.txtpassword.setFocus(true);
			return false;
	}*/
    if (!confirmPassword(frmNewReg.txtpassword.text, frmNewReg.txtconfirmpassword.text, kony.i18n.getLocalizedString("lblPleaseReenterPassword"), kony.i18n.getLocalizedString("lblPasswordsDonotMatch"))) {
        kony.print("5");
        //return false;
        //alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPassword"));		
        //gblErrWidgetRefId = frmNewReg.txtconfirmpassword;
        //frmNewReg.lblConfirmPassword.skin="sknLblRed";
        //frmNewReg.lblConfirmPassword.text=kony.i18n.getLocalizedString("lblPleaseReenterPassword");
        //frmNewReg.txtconfirmpassword.setFocus(true);
        return false;
    }
    if (frmNewReg.txtname != undefined && frmNewReg.txtname.text == "") {
        kony.print("7");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterName"));
        gblErrWidgetRefId = frmNewReg.txtname;
        //return false;
        //frmNewReg.lblName.skin="sknLblRed";
        //frmNewReg.lblName.text=kony.i18n.getLocalizedString("lblPleaseEnterName");
        //frmNewReg.txtname.setFocus(true);
        return false;
    }
    if (frmNewReg.txtemailid != undefined && frmNewReg.txtemailid.text == "") {
        kony.print("8");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmail"));
        gblErrWidgetRefId = frmNewReg.txtemailid;
        //frmNewReg.txtemailid.setFocus(true);
        //return false;
        //frmNewReg.lblEmailID.skin="sknLblRed";
        //frmNewReg.lblEmailID.text=kony.i18n.getLocalizedString("lblPleaseEnterEmail");
        //frmNewReg.txtemailid.setFocus(true);
        return false;
    }
    if (frmNewReg.txtemailid != undefined && !validateUserEmail(frmNewReg.txtemailid.text)) {
        kony.print("9");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmail"));
        gblErrWidgetRefId = frmNewReg.txtemailid;
        //frmNewReg.txtemailid.setFocus(true);
        //return false;
        //frmNewReg.lblEmailID.skin="sknLblRed";
        //frmNewReg.lblEmailID.text=kony.i18n.getLocalizedString("lblPleaseEnterValidEmail");
        //frmNewReg.txtemailid.setFocus(true);
        return false;
    }
    if (frmNewReg.dropdownmobileareacode.selectedKey == "0") {
        alertDialog(kony.i18n.getLocalizedString("lblSelectAreaCode"));
        gblErrWidgetRefId = frmNewReg.dropdownmobileareacode;
        return false;
    }
    if (frmNewReg.txtmobilenumber != undefined && frmNewReg.txtmobilenumber.text == "") {
        kony.print("10");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMobile"));
        gblErrWidgetRefId = frmNewReg.txtmobilenumber;
        //frmNewReg.txtmobilenumber.setFocus(true);
        //return false;
        //frmNewReg.lblMobile.skin="sknLblRed";
        //frmNewReg.lblMobile.text=kony.i18n.getLocalizedString("lblPleaseEnterMobile");
        //frmNewReg.txtmobilenumber.setFocus(true);
        return false;
    }
    if (!ValidateLength(frmNewReg.txtmobilenumber.text, 7, kony.i18n.getLocalizedString("lblPleaseEnterValidMobileNo"))) {
        kony.print("11");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidMobileNo"));
        gblErrWidgetRefId = frmNewReg.txtmobilenumber;
        return false;
    }
    if (frmNewReg.dropdownnationality != undefined && frmNewReg.dropdownnationality.selectedKey == 0) {
        kony.print("12");
        alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
        gblErrWidgetRefId = frmNewReg.dropdownnationality;
        //frmNewReg.dropdownnationality.setFocus(true);
        //return false;
        //frmNewReg.lblNationality.skin="sknLblRed";
        //frmNewReg.lblNationality.text=kony.i18n.getLocalizedString("lblSelectCountry");
        //frmNewReg.dropdownnationality.setFocus(true);
        return false;
    }
    if (frmNewReg.txtemiratesid1 != undefined && frmNewReg.txtemiratesid1.text == "") {
        kony.print("13");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
        gblErrWidgetRefId = frmNewReg.txtemiratesid1;
        //frmNewReg.txtemiratesid1.setFocus(true);
        //return false;
        //frmNewReg.lblEmirateID.skin="sknLblRed";
        //frmNewReg.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
        //frmNewReg.txtemiratesid1.setFocus(true);
        return false;
    }
    if (!ValidateLength(frmNewReg.txtemiratesid1.text, 3, kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"))) {
        kony.print("14");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"));
        gblErrWidgetRefId = frmNewReg.txtemiratesid1;
        return false;
    }
    if (frmNewReg.txtemiratesid2 != undefined && frmNewReg.txtemiratesid2.text == "") {
        kony.print("15");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
        gblErrWidgetRefId = frmNewReg.txtemiratesid2;
        //frmNewReg.txtemiratesid2.setFocus(true);
        //return false;
        //frmNewReg.lblEmirateID.skin="sknLblRed";
        //frmNewReg.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
        //frmNewReg.txtemiratesid2.setFocus(true);
        return false;
    }
    if (!ValidateLength(frmNewReg.txtemiratesid2.text, 4, kony.i18n.getLocalizedString("lblPleaseEnterEmirate"))) {
        kony.print("16");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"));
        gblErrWidgetRefId = frmNewReg.txtemiratesid2;
        return false;
    }
    if (frmNewReg.txtemiratesid3 != undefined && frmNewReg.txtemiratesid3.text == "") {
        kony.print("17");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
        gblErrWidgetRefId = frmNewReg.txtemiratesid3;
        //frmNewReg.txtemiratesid3.setFocus(true);
        //return false;
        //rmNewReg.lblEmirateID.skin="sknLblRed";
        //frmNewReg.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
        //frmNewReg.txtemiratesid3.setFocus(true);
        return false;
    }
    if (!ValidateLength(frmNewReg.txtemiratesid3.text, 7, kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"))) {
        kony.print("18");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"));
        gblErrWidgetRefId = frmNewReg.txtemiratesid3;
        return false;
    }
    if (frmNewReg.txtemiratesid4 != undefined && frmNewReg.txtemiratesid4.text == "") {
        kony.print("19");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
        gblErrWidgetRefId = frmNewReg.txtemiratesid4;
        //frmNewReg.txtemiratesid4.setFocus(true);
        //return false;
        //frmNewReg.lblEmirateID.skin="sknLblRed";
        //frmNewReg.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
        //frmNewReg.txtemiratesid4.setFocus(true);
        return false;
    }
    if (!ValidateLength(frmNewReg.txtemiratesid4.text, 1, kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"))) {
        kony.print("20");
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"));
        gblErrWidgetRefId = frmNewReg.txtemiratesid4;
        return false;
    } else if (frmNewReg.txtpassportnumber != undefined && frmNewReg.txtpassportnumber.text == "") {
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPassportNumber"));
        gblErrWidgetRefId = frmNewReg.txtpassportnumber;
        //frmNewReg.txtpassportnumber.setFocus(true);
        //frmNewReg.lblPassportNo.skin="sknLblRed";
        //frmNewReg.lblPassportNo.text=kony.i18n.getLocalizedString("lblPleaseEnterPassportNumber");
        //frmNewReg.txtpassportnumber.setFocus(true);
        return false;
    }
    //checking for special characters
    else if (frmNewReg.txtpassportnumber != undefined && checkForSpecialChars(frmNewReg.txtpassportnumber.text) == true) {
        alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPassportNumber"));
        gblErrWidgetRefId = frmNewReg.txtpassportnumber;
        //frmNewReg.txtpassportnumber.setFocus(true);
        //return false;
        //frmNewReg.lblPassportNo.skin="sknLblRed";
        //frmNewReg.lblPassportNo.text=kony.i18n.getLocalizedString("lblPleaseEnterPassportNumber");
        //frmNewReg.txtpassportnumber.setFocus(true);
        return false;
    }
    /*
	else if(camBase64 == "" || camBase64 == null)
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseTakePicture"));
		frmNewReg.camCertImage.setFocus(true);
		return false;
	}f
		*/
    return true;
}
//to check for special characters in the entry field
//Validate if the graduated year is within the range or not
function validateGraduatedYear(str) {
    if (str == "") {
        return false;
    }
    var enteredYear = kony.os.toNumber(str);
    var currentYear = new Date().getFullYear();
    kony.print("Entered year is : " + enteredYear + " and currentYear is : " + currentYear);
    if ((enteredYear < 1920) || (enteredYear > currentYear)) {
        kony.print("Inside the year validation");
        return false;
    }
}

function onchangecall(WidgetRef) {
    WidgetRef.skin = "sknLblRed";
    WidgetRef.text = kony.i18n.getLocalizedString(WidgetRef.id);
}

function SknTxtChangeValidation(WidgetRef) {
    try {
        formName = kony.application.getCurrentForm().id;
        //kony.print("skin            "+formName.widgetName);
        if (WidgetRef.skin != "sknLblFields") {
            WidgetRef.skin = "sknLblFields";
            WidgetRef.text = kony.i18n.getLocalizedString(WidgetRef.id);
        }
    } catch (err) {
        kony.print("err" + err);
    }
}
//certificate equivalancy 1st page validations
function checkFieldsEquiStep1() {
    if (frmCertEquivalency1.txtCertSubittedBy = undefined || frmCertEquivalency1.txtCertSubittedBy.text == "") {
        //alert("Please enter certificate submitted by feild");
        frmCertEquivalency1.lblCertSubmit.skin = "sknLblRed";
        frmCertEquivalency1.lblCertSubmit.text = kony.i18n.getLocalizedString("lblPleaseSelectCertificateSubmitBy");
        frmCertEquivalency1.txtCertSubittedBy.setFocus(true);
        return false;
    } else if (frmCertEquivalency1.dropdownStudyLevel.selectedKey == 0) {
        //alert("Please select study level");
        frmCertEquivalency1.lblStudyLevel.skin = "sknLblRed";
        frmCertEquivalency1.lblStudyLevel.text = kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel");
        frmCertEquivalency1.dropdownStudyLevel.setFocus(true);
        return false;
    } else if (frmCertEquivalency1.txtMajor = undefined || frmCertEquivalency1.txtMajor.text == "") {
        //alert("Please enter Major");
        frmCertEquivalency1.lblMajor.skin = "sknLblRed";
        frmCertEquivalency1.lblMajor.text = kony.i18n.getLocalizedString("lblPleaseEnterMajor");
        frmCertEquivalency1.txtMajor.setFocus(true);
        return false;
    } else if (frmCertEquivalency1.txtIssuedBy = undefined || frmCertEquivalency1.txtIssuedBy.text == "") {
        //alert("Please enter Minor");
        frmCertEquivalency1.lblIssueBy.skin = "sknLblRed";
        frmCertEquivalency1.lblIssueBy.text = kony.i18n.getLocalizedString("lblPleaseSelectMinor");
        frmCertEquivalency1.txtIssuedBy.setFocus(true);
        return false;
    }
}
//certificate equivalancy 2nd page validations
function checkFieldsEquiStep2() {
    if (frmCertEquivalency2.cmbxTypeOfStudy.selectedKey == 0) {
        //alert("Please select Type of study");
        frmCertEquivalency2.lblTypeOfStudy.skin = "sknLblRed";
        frmCertEquivalency2.lblTypeOfStudy.text = kony.i18n.getLocalizedString("lblPleaseSelectTypeStudy");
        frmCertEquivalency2.cmbxTypeOfStudy.setFocus(true);
        return false;
    } else if (frmCertEquivalency2.cmbxTypeOfStudy.selectedKey == 6) {
        if (frmCertEquivalency2.txtBoxOthers.text == "") {
            // alert("Please enter Type of study details");
            frmCertEquivalency2.lblTypeOfStudy.skin = "sknLblRed";
            frmCertEquivalency2.lblTypeOfStudy.text = kony.i18n.getLocalizedString("lblPleaseTypeOfStudyDetailsOthers");
            frmCertEquivalency2.txtBoxOthers.setFocus(true);
            return false;
        }
    }
    if (frmCertEquivalency2.imgSelf.src != "checked.png") {
        if (frmCertEquivalency2.txtSponsoredBy = undefined || frmCertEquivalency2.txtSponsoredBy.text == "") {
            //alert("Please Enter sponseredBy");
            frmCertEquivalency2.lblScholType.skin = "sknLblRed";
            frmCertEquivalency2.lblScholType.text = kony.i18n.getLocalizedString("lblPleaseEnterSponserBy");
            frmCertEquivalency2.txtSponsoredBy.setFocus(true);
            return false;
        }
    }
    if (frmCertEquivalency2.txtNoofyears = undefined || frmCertEquivalency2.txtNoofyears.text == "") {
        //alert("Please enter No.of years");
        //return false;
        frmCertEquivalency2.lblNoofyears.skin = "sknLblRed";
        frmCertEquivalency2.lblNoofyears.text = kony.i18n.getLocalizedString("lblPleaseEnterNoOfYears");
        frmCertEquivalency2.txtNoofyears.setFocus(true);
        return false;
    } else if (frmCertEquivalency2.txtStartYear = undefined || frmCertEquivalency2.txtStartYear.text == "") {
        //alert("Please enter Starting Date of Study");
        //return false;
        frmCertEquivalency2.lblStartYear.skin = "sknLblRed";
        frmCertEquivalency2.lblStartYear.text = kony.i18n.getLocalizedString("lblPleaseEnterStartStudyDate");
        frmCertEquivalency2.txtStartYear.setFocus(true);
        return false;
    } else if (!validateYear(frmCertEquivalency2.txtStartYear.text, "please enter valid year")) {
        // return false;
        frmCertEquivalency2.lblStartYear.skin = "sknLblRed";
        frmCertEquivalency2.lblStartYear.text = kony.i18n.getLocalizedString("lblPleaseEnterValidYear");
        frmCertEquivalency2.txtStartYear.setFocus(true);
        return false;
    } else if (frmCertEquivalency2.txtGraduationYear = undefined || frmCertEquivalency2.txtGraduationYear.text == "") {
        //alert("Please enter Date of Graduation");
        //return false;
        frmCertEquivalency2.lblGraduationYear.skin = "sknLblRed";
        frmCertEquivalency2.lblGraduationYear.text = kony.i18n.getLocalizedString("lblPleaseEnterDateOfGraduation");
        frmCertEquivalency2.txtGraduationYear.setFocus(true);
        return false;
    } else if (!validateYear(frmCertEquivalency2.txtGraduationYear.text, "please enter valid year")) {
        frmCertEquivalency2.lblGraduationYear.skin = "sknLblRed";
        frmCertEquivalency2.lblGraduationYear.text = kony.i18n.getLocalizedString("lblPleaseEnterValidYear");
        frmCertEquivalency2.txtGraduationYear.setFocus(true);
        return false;
    } else if (frmCertEquivalency2.txtStartYear.text > frmCertEquivalency2.txtGraduationYear.text) {
        //alert("please enter correct Starting Date of Study");
        frmCertEquivalency2.lblStartYear.skin = "sknLblRed";
        frmCertEquivalency2.lblStartYear.text = kony.i18n.getLocalizedString("lblPleaseEnterStartYear");
        frmCertEquivalency2.txtStartYear.setFocus(true);
        return false;
    } else if (frmCertEquivalency2.dropdownSelectCountry.selectedKey == 0) {
        // alert("please select Country of Examination");
        frmCertEquivalency2.lblCountryExamHeld.skin = "sknLblRed";
        frmCertEquivalency2.lblCountryExamHeld.text = kony.i18n.getLocalizedString("lblPleaseSelectCountryExam");
        frmCertEquivalency2.dropdownSelectCountry.setFocus(true);
        return false;
    } else if (frmCertEquivalency2.dropdownpaymentmethod.selectedKey == 0) {
        //alert("please select payment method");
        frmCertEquivalency2.lblPaymentMethod.skin = "sknLblRed";
        frmCertEquivalency2.lblPaymentMethod.text = kony.i18n.getLocalizedString("lblPleaseSelectPaymentMethod");
        frmCertEquivalency2.dropdownpaymentmethod.setFocus(true);
        return false;
    } else if (frmCertEquivalency2.dropdownpaymentcardtype.selectedKey == 0) {
        //alert("please select payment Type");
        frmCertEquivalency2.lblPaymentMethod.skin = "sknLblRed";
        frmCertEquivalency2.lblPaymentMethod.text = kony.i18n.getLocalizedString("lblPleasePaymentType");
        frmCertEquivalency2.dropdownpaymentcardtype.setFocus(true);
        return false;
    }
    //  else if (frmCertEquivalency2.txtNoofTerms = undefined || frmCertEquivalency2.txtNoofTerms.text == "") {
    //	frmCertEquivalency2.lblNoofTerms.skin="sknLblRed";
    //	frmCertEquivalency2.lblNoofTerms.text=kony.i18n.getLocalizedString("lblPleaseEnterNoofTerms"); 		
    //frmCertEquivalency2.txtNoofTerms.setFocus(true);
    //return false;
    //  }
}
//
//
function checkFieldsReqStep1() //frmReq1 step1 validations
{
    if (frmCertRequest1.txtuniversity = undefined || frmCertRequest1.txtuniversity.text == "") {
        frmCertRequest1.lblUniversity.skin = "sknLblRed";
        frmCertRequest1.lblUniversity.text = kony.i18n.getLocalizedString("lblPleaseEnterUniversity");
        frmCertRequest1.txtuniversity.setFocus(true);
        //alert("Please enter University");
        return false;
    } else if (frmCertRequest1.dropdownnationality != undefined && frmCertRequest1.dropdownnationality.selectedKey == 0) {
        //alert("Please select Country");
        frmCertRequest1.lblCountry.skin = "sknLblRed";
        frmCertRequest1.lblCountry.text = kony.i18n.getLocalizedString("lblPleaseSelectCountry");
        frmCertRequest1.dropdownnationality.setFocus(true);
        return false;
    } else if (frmCertRequest1.textDegree = undefined || frmCertRequest1.textDegree.text == "") {
        frmCertRequest1.lblDegree.skin = "sknLblRed";
        frmCertRequest1.lblDegree.text = kony.i18n.getLocalizedString("lblPleaseEnterDegree");
        frmCertRequest1.textDegree.setFocus(true);
        //alert("Please enter Degree");
        return false;
    } else if (frmCertRequest1.txtMajor = undefined || frmCertRequest1.txtMajor.text == "") {
        frmCertRequest1.lblMajor.skin = "sknLblRed";
        frmCertRequest1.lblMajor.text = kony.i18n.getLocalizedString("lblPleaseEnterMajor");
        frmCertRequest1.txtMajor.setFocus(true);
        //alert("Please enter Major");
        return false;
    } else if (frmCertRequest1.txtYears = undefined || frmCertRequest1.txtYears.text == "" || frmCertRequest1.txtYears.text.length < 1) {
        //alert("Please enter Years");
        frmCertRequest1.lblNoofyears.skin = "sknLblRed";
        frmCertRequest1.lblNoofyears.text = kony.i18n.getLocalizedString("lblPleaseEnterNoOfYears");
        frmCertRequest1.txtYears.setFocus(true);
        return false;
    }
}

function checkFieldsReqStep2() //frmReq2 step2 validations
{
    if (frmCertRequest2.txtuniversity = undefined || frmCertRequest2.txtuniversity.text == "") {
        //alert("Please enter University");
        frmCertRequest2.lblUniversity.skin = "sknLblRed";
        frmCertRequest2.lblUniversity.text = kony.i18n.getLocalizedString("lblPleaseEnterUniversity");
        frmCertRequest2.txtuniversity.setFocus(true);
        return false;
    } else if (frmCertRequest2.dropdownnationality != undefined && frmCertRequest2.dropdownnationality.selectedKey == 0) {
        // alert("Please select Country");
        frmCertRequest2.lblCountry.skin = "sknLblRed";
        frmCertRequest2.lblCountry.text = kony.i18n.getLocalizedString("lblPleaseSelectCountry");
        frmCertRequest2.dropdownnationality.setFocus(true);
        return false;
    } else if (frmCertRequest2.dropdownStudyLevel != undefined && frmCertRequest2.dropdownStudyLevel.selectedKey == 0) {
        //alert("Please select Study Level");
        frmCertRequest2.lblStudyLevel.skin = "sknLblRed";
        frmCertRequest2.lblStudyLevel.text = kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel");
        frmCertRequest2.dropdownStudyLevel.setFocus(true);
        return false;
    } else if (frmCertRequest2.txtMajor = undefined || frmCertRequest2.txtMajor.text == "") {
        //alert("Please enter Major");
        frmCertRequest2.lblMajor.skin = "sknLblRed";
        frmCertRequest2.lblMajor.text = kony.i18n.getLocalizedString("lblPleaseEnterMajor");
        frmCertRequest2.txtMajor.setFocus(true);
        return false;
    } else if (frmCertRequest2.txtYears = undefined || frmCertRequest2.txtYears.text == "") {
        //alert("lblPleaseEnterNoOfYears");
        frmCertRequest2.lblNoofyears.skin = "sknLblRed";
        frmCertRequest2.lblNoofyears.text = kony.i18n.getLocalizedString("lblPleaseEnterNoOfYears");
        frmCertRequest2.txtYears.setFocus(true);
        return false;
    } else if (frmCertRequest2.txtSemester = undefined || frmCertRequest2.txtSemester.text == "") {
        //alert("lblPleaseEnterNoOfYears");
        frmCertRequest2.lblNoOfSem.skin = "sknLblRed";
        frmCertRequest2.lblNoOfSem.text = kony.i18n.getLocalizedString("lblPleaseEnterNoOfYears"); //need to change key
        frmCertRequest2.txtSemester.setFocus(true);
        return false;
    } else if (frmCertRequest2.txtCreditHours = undefined || frmCertRequest2.txtCreditHours.text == "") {
        //alert("lblPleaseEnterNoOfYears");
        frmCertRequest2.lblCreditHours.skin = "sknLblRed";
        frmCertRequest2.lblCreditHours.text = kony.i18n.getLocalizedString("lblPleaseEnterCreditHrs");
        frmCertRequest2.txtCreditHours.setFocus(true);
        return false;
    } else if (frmCertRequest2.dropdownProgramme != undefined && frmCertRequest2.dropdownProgramme.selectedKey == 0) {
        // alert("lblPleaseSelectProgram");
        frmCertRequest2.lblProgramm.skin = "sknLblRed";
        frmCertRequest2.lblProgramm.text = kony.i18n.getLocalizedString("lblPleaseSelectProgram");
        frmCertRequest2.dropdownProgramme.setFocus(true);
        return false;
    }
}

function checkFieldsReqStep3() //frmReq3 step3  validations
{
    if (frmCertRequest3.txtName = undefined || frmCertRequest3.txtName.text == "") {
        //alert("Please enter Name");lblPleaseEnterName
        frmCertRequest3.lblName.skin = "sknLblRed";
        frmCertRequest3.lblName.text = kony.i18n.getLocalizedString("lblPleaseEnterName");
        frmCertRequest3.txtName.setFocus(true);
        return false;
    } else if (frmCertRequest3.txtmobilenumber != undefined && frmCertRequest3.txtmobilenumber.text == "") {
        //alert("Please enter Mobile Number");lblPleaseEnterMobile
        frmCertRequest3.lblMobile.skin = "sknLblRed";
        frmCertRequest3.lblMobile.text = kony.i18n.getLocalizedString("lblPleaseEnterMobile");
        frmCertRequest3.txtmobilenumber.setFocus(true);
        return false;
    } else if (frmCertRequest3.txtIdentityNo != undefined && frmCertRequest3.txtIdentityNo.text == "") {
        // alert("Please enter Identity Number");lblPleaseEnterIdNo
        frmCertRequest3.lblIdNo.skin = "sknLblRed";
        frmCertRequest3.lblIdNo.text = kony.i18n.getLocalizedString("lblPleaseEnterIdNo");
        frmCertRequest3.txtIdentityNo.setFocus(true);
        return false;
    } else if (frmCertRequest3.txtemail != undefined && frmCertRequest3.txtemail.text == "") {
        //alert("Please enter Email");lblPleaseEnterEmail,lblPleaseEnterValidMobileNo
        frmCertRequest3.lblEmail.skin = "sknLblRed";
        frmCertRequest3.lblEmail.text = kony.i18n.getLocalizedString("lblPleaseEnterEmail");
        frmCertRequest3.txtemail.setFocus(true);
        return false;
    } else if (frmCertRequest3.txtemail != undefined && !validateUserEmail(frmCertRequest3.txtemail.text)) {
        //alert("Please enter valid Email");lblPleaseEnterValidEmail
        frmCertRequest3.lblEmail.skin = "sknLblRed";
        frmCertRequest3.lblEmail.text = kony.i18n.getLocalizedString("lblPleaseEnterValidEmail");
        frmCertRequest3.txtemail.setFocus(true);
        return false;
    }
}
//attestation Mobile & Tab
function validateCertAttestPgFieldGoFurther() //attestation step1 validations
{
    var curFrm;
    curFrm = kony.application.getCurrentForm();
    switch (curFrm["id"]) {
    case "frmAttestGrad1":
        if (curFrm.txtstudentname != undefined && curFrm.txtstudentname.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterName"));;
            gblErrWidgetRefId = curFrm.txtstudentname;
            return false;
        } else if (curFrm.dropdownnationality != undefined && curFrm.dropdownnationality.selectedKey == 0) {
            alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
            gblErrWidgetRefId = curFrm.dropdownnationality;
            return false;
        } else if (curFrm.txtTelephoneAreaCode != undefined && curFrm.txtTelephoneAreaCode.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterTelephoneAreaCode"));
            gblErrWidgetRefId = curFrm.txtTelephoneAreaCode;
            return false;
        } else if (!ValidateLength(curFrm.txtTelephoneAreaCode.text, 2)) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone"));
            gblErrWidgetRefId = curFrm.txtTelephoneAreaCode;
            return false;
        } else if (curFrm.txtTelephoneNumber != undefined && curFrm.txtTelephoneNumber.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterTelephoneNumber"));
            gblErrWidgetRefId = curFrm.txtTelephoneNumber;
            return false;
        } else if (!ValidateLength(curFrm.txtTelephoneNumber.text, 7)) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone"));
            gblErrWidgetRefId = curFrm.txtTelephoneNumber;
            return false;
        } else if (curFrm.txtmobilenumber != undefined && curFrm.txtmobilenumber.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMobile"));
            gblErrWidgetRefId = curFrm.txtmobilenumber;
            return false;
        } else if (!ValidateLength(curFrm.txtmobilenumber.text, 7)) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMobile"));
            gblErrWidgetRefId = curFrm.txtmobilenumber;
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
        }
        //
        else if (curFrm.txtpobox != undefined && curFrm.txtpobox.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPOBox"));
            gblErrWidgetRefId = curFrm.txtpobox;
            return false;
        } else if (curFrm.dropdownemirate != undefined && curFrm.dropdownemirate.selectedKey == 0) {
            alertDialog(kony.i18n.getLocalizedString("lblSelectEmirate"));
            gblErrWidgetRefId = curFrm.dropdownemirate;
            return false;
        } else if (curFrm.txtemail != undefined && curFrm.txtemail.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmail"));
            gblErrWidgetRefId = curFrm.txtemail;
            return false;
        } else if (curFrm.txtemail != undefined && !validateUserEmail(curFrm.txtemail.text)) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmail"));
            gblErrWidgetRefId = curFrm.txtemail;
            return false;
        } else {
            if (gblDeviceInfo != "tab") {
                //frmAttestGrad2.show();
                break;
            }
        }
        //removed as per Raqmiyat requirement (22/09/2014)
        /*if(frmAttestGrad2.dropdowninstitue!=undefined && frmAttestGrad2.dropdowninstitue.selectedKey == 0)
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectInstitute"));
		frmAttestGrad2.dropdowninstitue.setFocus(true);
		return false;
	}*/
    case "frmAttestGrad2":
        kony.print("Selected keysssss-----" + curFrm.dropdowninstitue.selectedKey)
        kony.print("Selected major-----" + curFrm.dropdownSubMajor.selectedKey)
        if (curFrm.dropdowninstitue.selectedKey == "SI") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectInstitute"));
            gblErrWidgetRefId = curFrm.dropdowninstitue;
            return false;
        } else if (selectedCategory != category_Faculty && curFrm.dropdownstudylevel != undefined && curFrm.dropdownstudylevel.selectedKey == 0) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"));
            gblErrWidgetRefId = curFrm.dropdownstudylevel;
            return false;
        } else if (selectedCategory != category_Faculty && curFrm.dropdownmajor != undefined && curFrm.dropdownmajor.selectedKey == 0) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectProgram"));
            gblErrWidgetRefId = curFrm.dropdownmajor;
            return false;
        } else if (selectedCategory == category_Graduate && curFrm.txtgraduatedyear != undefined && validateGraduatedYear(curFrm.txtgraduatedyear.text) == false) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidYear"));
            gblErrWidgetRefId = curFrm.txtgraduatedyear;
            return false;
        } else if (selectedCategory == category_Graduate && curFrm.txtgraduatedyear != undefined && curFrm.txtgraduatedyear.text.length < 4) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidYear"));
            gblErrWidgetRefId = curFrm.txtgraduatedyear;
            return false;
        } else if (curFrm.txtnoofdocuments != undefined && curFrm.txtnoofdocuments.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterNoOfDocuments"));
            gblErrWidgetRefId = curFrm.txtnoofdocuments;
            return false;
        } else if (selectedCategory == category_Graduate && curFrm.txtstudentid != undefined && curFrm.txtstudentid.text == "") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterStudentID"));
            gblErrWidgetRefId = curFrm.txtstudentid;
            return false;
        }
        //checking for presence of special characters
        else if (selectedCategory == category_Graduate && curFrm.txtstudentid != undefined && checkForSpecialChars(curFrm.txtstudentid.text) == true) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidStudentID"));
            gblErrWidgetRefId = curFrm.txtstudentid;
            return false;
        } else if (selectedCategory == category_Enrolled && curFrm.dropdownSubMajor != undefined && curFrm.dropdownSubMajor.selectedKey == 0) {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectSubMajor"));
            gblErrWidgetRefId = curFrm.dropdownSubMajor;
            return false;
        } else if (curFrm.dropdownpaymentmethod != undefined && curFrm.dropdownpaymentmethod.selectedKey == "SPMT") {
            alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectPaymentMethod"));
            gblErrWidgetRefId = curFrm.dropdownpaymentmethod;
            return false;
        } else {
            if (gblDeviceInfo != "tab") {
                //if(selectedCategory != category_Faculty)
                //{
                //frmAttestGrad3.show();
                //}
                break;
            }
        }
        /*
	 	else if(frmAttestGrad2.dropdownpaymentmethod!=undefined && frmAttestGrad2.dropdownpaymentmethod.selectedKey == 0)
	 	{
	 		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectPaymentMethod"));
	 		frmAttestGrad2.dropdownpaymentmethod.setFocus(true);
	 		return false;
	 	}
		
	  	else if(frmAttestGrad2.dropdownpaymentcardtype!=undefined && frmAttestGrad2.dropdownpaymentcardtype.selectedKey == 0)
	 	{
	 		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCardType"));
	 		frmAttestGrad2.dropdownpaymentcardtype.setFocus(true);
	 		return false;
	 	}
		*/
        if (selectedCategory == category_Faculty) // in case of Faculty members,camera is present in step2
        {
            /*
			if(camBase64 == "" || camBase64 == null)
			{
				alertDialog(kony.i18n.getLocalizedString("lblPleaseTakePicture"));
				frmAttestGrad2.camCertImage.setFocus(true);
				return false;
			}
	*/
        }
    case "frmAttestGrad3":
        if (selectedCategory == category_Graduate) {
            if (curFrm.dropdownstudylevel != undefined && curFrm.dropdownstudylevel.selectedKey == 0) {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"));
                gblErrWidgetRefId = curFrm.dropdownstudylevel;
                return false;
            } else if (curFrm.txtinstitutename != undefined && curFrm.txtinstitutename.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterInstitute"));
                gblErrWidgetRefId = curFrm.txtinstitutename;
                return false;
            } else if (curFrm.txtmajor != undefined && curFrm.txtmajor.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMajor"));
                gblErrWidgetRefId = curFrm.txtmajor;
                return false;
            } else if (curFrm.dropdownnationality.selectedKey == 0) {
                alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
                gblErrWidgetRefId = curFrm.dropdownnationality;
                return false;
            } else if (curFrm.txtcredithours != undefined && curFrm.txtcredithours.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterCreditHrs"));
                gblErrWidgetRefId = curFrm.txtcredithours;
                return false;
            } else if (gblDeviceInfo == "tab" && curFrm.dropdownnationality1.selectedKey == 0) {
                alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
                gblErrWidgetRefId = curFrm.dropdownnationality1;
                return false;
            }
        } else if (selectedCategory == category_Enrolled) {
            if (curFrm.txtinstitutename2 != undefined && curFrm.txtinstitutename2.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterInstitute"));
                gblErrWidgetRefId = curFrm.txtinstitutename2;
                return false;
            } else if (curFrm.dropdownnationality != undefined && curFrm.dropdownnationality.selectedKey == 0) {
                alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
                gblErrWidgetRefId = curFrm.dropdownnationality;
                return false;
            } else if (curFrm.txtcredithours != undefined && curFrm.txtcredithours.text == "") {
                alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterCreditHrs"));
                gblErrWidgetRefId = curFrm.txtcredithours;
                return false;
            }
        }
    }
    /*
	if(camBase64 == "" || camBase64 == null)
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseTakePicture"));
		frmAttestGrad3.camCertImage.setFocus(true);
		return false;
	}
*/
}