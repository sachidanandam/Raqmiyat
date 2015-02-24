function checkFieldsStep1Tab()			//attestation step1 validations
{
	if(frmAttestGrad1.txtstudentname!=undefined && frmAttestGrad1.txtstudentname.text == "")
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterName"));;

		//frmAttestGrad1.lblStudentName.skin="sknLblRed";
		//frmAttestGrad1.lblStudentName.text=kony.i18n.getLocalizedString("lblPleaseEnterName");
		frmAttestGrad1.txtstudentname.setFocus(true);
		return false;
	}
	
	else if(frmAttestGrad1.dropdownnationality!=undefined && frmAttestGrad1.dropdownnationality.selectedKey == 0)
	{
		alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
		//frmAttestGrad1.lblNationality.skin="sknLblRed";
		//frmAttestGrad1.lblNationality.text=kony.i18n.getLocalizedString("lblSelectCountry");
		frmAttestGrad1.dropdownnationality.setFocus(true);
		return false;
	}
	
	else if(frmAttestGrad1.txtTelephoneAreaCode!=undefined && frmAttestGrad1.txtTelephoneAreaCode.text == "")
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterTelephoneAreaCode"));

		//frmAttestGrad1.lblTelephone.skin="sknLblRed";
		//frmAttestGrad1.lblTelephone.text=kony.i18n.getLocalizedString("lblPleaseEnterTelephoneAreaCode");
		frmAttestGrad1.txtTelephoneAreaCode.setFocus(true);
		return false;
	}
	else if(!ValidateLength(frmAttestGrad1.txtTelephoneAreaCode.text, 2))
	{	
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone"));
		//frmAttestGrad1.lblTelephone.skin="sknLblRed";
		//frmAttestGrad1.lblTelephone.text=kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone");
		frmAttestGrad1.txtTelephoneAreaCode.setFocus(true);
		return false;
	}
	
	else if(frmAttestGrad1.txtTelephoneNumber!=undefined && frmAttestGrad1.txtTelephoneNumber.text == "")
	{

		//frmAttestGrad1.lblTelephone.skin="sknLblRed";
		//frmAttestGrad1.lblTelephone.text=kony.i18n.getLocalizedString("lblPleaseEnterTelephoneNumber");
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterTelephoneNumber"));
		frmAttestGrad1.txtTelephoneNumber.setFocus(true);
		return false;
	}
	else if(!ValidateLength(frmAttestGrad1.txtTelephoneNumber.text, 7))
	{	
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone"));
		//frmAttestGrad1.lblTelephone.skin="sknLblRed";
		//frmAttestGrad1.lblTelephone.text=kony.i18n.getLocalizedString("lblPleaseEnterValidTelephone");
		frmAttestGrad1.txtTelephoneNumber.setFocus(true);
		return false;
	}		
	else if(frmAttestGrad1.txtmobilenumber!=undefined && frmAttestGrad1.txtmobilenumber.text == "")
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMobile"));

		//frmAttestGrad1.lblMobile.skin="sknLblRed";
		//frmAttestGrad1.lblMobile.text=kony.i18n.getLocalizedString("lblPleaseEnterMobile");
		frmAttestGrad1.txtmobilenumber.setFocus(true);

		return false;
	}

	else if(!ValidateLength(frmAttestGrad1.txtmobilenumber.text, 7))
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidMobileNo"));
		//frmAttestGrad1.lblMobile.skin="sknLblRed";
		//frmAttestGrad1.lblMobile.text=kony.i18n.getLocalizedString("lblPleaseEnterValidMobileNo");
		frmAttestGrad1.txtmobilenumber.setFocus(true);
		return false;
	}	
	else if(frmAttestGrad1.txtemiratesid1!=undefined && frmAttestGrad1.txtemiratesid1.text == "")
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
		//frmAttestGrad1.lblEmirateID.skin="sknLblRed";
		//frmAttestGrad1.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
		frmAttestGrad1.txtemiratesid1.setFocus(true);
		return false;
	}
	else if(!ValidateLength(frmAttestGrad1.txtemiratesid1.text, 3))
	{	
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
		//frmAttestGrad1.lblEmirateID.skin="sknLblRed";
		//frmAttestGrad1.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID");
		frmAttestGrad1.txtemiratesid1.setFocus(true);
		return false;
	}	
	
	else if(frmAttestGrad1.txtemiratesid2!=undefined && frmAttestGrad1.txtemiratesid2.text == "")
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
		//frmAttestGrad1.lblEmirateID.skin="sknLblRed";
		//frmAttestGrad1.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
		frmAttestGrad1.txtemiratesid2.setFocus(true);
		return false;
	}
	else if(!ValidateLength(frmAttestGrad1.txtemiratesid2.text, 4))
	{	
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"));
		//frmAttestGrad1.lblEmirateID.skin="sknLblRed";
		//frmAttestGrad1.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID");
		frmAttestGrad1.txtemiratesid2.setFocus(true);
		return false;
	}	
	
	else if(frmAttestGrad1.txtemiratesid3!=undefined && frmAttestGrad1.txtemiratesid3.text == "")
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
		//frmAttestGrad1.lblEmirateID.skin="sknLblRed";
		//frmAttestGrad1.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
		frmAttestGrad1.txtemiratesid3.setFocus(true);
		return false;
	}
	else if(!ValidateLength(frmAttestGrad1.txtemiratesid3.text, 7))
	{	
	alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
		//frmAttestGrad1.lblEmirateID.skin="sknLblRed";
		//frmAttestGrad1.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID");
		frmAttestGrad1.txtemiratesid3.setFocus(true);
		return false;
	}		

	else if(frmAttestGrad1.txtemiratesid4!=undefined && frmAttestGrad1.txtemiratesid4.text == "")
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmirate"));
		//frmAttestGrad1.lblEmirateID.skin="sknLblRed";
		//frmAttestGrad1.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterEmirate");
		frmAttestGrad1.txtemiratesid4.setFocus(true);
		return false;
	}
	else if(!ValidateLength(frmAttestGrad1.txtemiratesid4.text, 1))
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID"));
		//frmAttestGrad1.lblEmirateID.skin="sknLblRed";
		//frmAttestGrad1.lblEmirateID.text=kony.i18n.getLocalizedString("lblPleaseEnterValidEmirateID");
		frmAttestGrad1.txtemiratesid4.setFocus(true);
		return false;
	}	

	//
	else if(frmAttestGrad1.txtpobox!=undefined && frmAttestGrad1.txtpobox.text == "")
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterPOBox"));
		//frmAttestGrad1.lblPObox.skin="sknLblRed";
		//frmAttestGrad1.lblPObox.text=kony.i18n.getLocalizedString("lblPleaseEnterPOBox");
		frmAttestGrad1.txtpobox.setFocus(true);
		return false;
	}
	
	else if(frmAttestGrad1.dropdownemirate!=undefined && frmAttestGrad1.dropdownemirate.selectedKey == 0)
	{
		alertDialog(kony.i18n.getLocalizedString("lblSelectEmirate"));
		//frmAttestGrad1.lblEmirate.skin="sknLblRed";
		//frmAttestGrad1.lblEmirate.text=kony.i18n.getLocalizedString("lblSelectEmirate");
		
		frmAttestGrad1.dropdownemirate.setFocus(true);
		return false;
	}
	
	else if(frmAttestGrad1.txtemail!=undefined && frmAttestGrad1.txtemail.text == "")
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterEmail"));
		//frmAttestGrad1.lblEmail.skin="sknLblRed";
		//frmAttestGrad1.lblEmail.text=kony.i18n.getLocalizedString("lblPleaseEnterEmail");
		frmAttestGrad1.txtemail.setFocus(true);
		return false;
	}
	
	else if(frmAttestGrad1.txtemail!=undefined && !validateUserEmail(frmAttestGrad1.txtemail.text))
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidEmail"));
		//frmAttestGrad1.lblEmail.skin="sknLblRed";
		//frmAttestGrad1.lblEmail.text=kony.i18n.getLocalizedString("lblPleaseEnterValidEmail");
		frmAttestGrad1.txtemail.setFocus(true);
		return false;
	}
	if(frmAttestGrad1.dropdownstudylevel!=undefined && frmAttestGrad1.dropdownstudylevel.selectedKey == 0)
 	{
 		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"));
 		//frmAttestGrad1.lblStudyLevel.skin="sknLblRed";
		//frmAttestGrad1.lblStudyLevel.text=kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel");
 		//alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"));
 		frmAttestGrad1.dropdownstudylevel.setFocus(true);
 		return false;
 	}
 	
 	else if(frmAttestGrad1.dropdownmajor!=undefined && frmAttestGrad1.dropdownmajor.selectedKey == 0)
 	{	
 	alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectProgram"));
 		//frmAttestGrad1.lblMajor.skin="sknLblRed";
		//frmAttestGrad1.lblMajor.text=kony.i18n.getLocalizedString("lblPleaseSelectProgram");
 		//alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectProgram"));
 		frmAttestGrad1.dropdownmajor.setFocus(true);
 		return false;
 	}
	else if(selectedCategory == category_Graduate && frmAttestGrad1.txtgraduatedyear!=undefined && validateGraduatedYear(frmAttestGrad1.txtgraduatedyear.text) == false)
 	{
 		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidYear"));
 		//frmAttestGrad1.lblGraduatedYear.skin="sknLblRed";
		//frmAttestGrad1.lblGraduatedYear.text=kony.i18n.getLocalizedString("lblPleaseEnterValidYear");
 		frmAttestGrad1.txtgraduatedyear.setFocus(true);
 		return false;
	}
 	else if(selectedCategory == category_Graduate && frmAttestGrad1.txtgraduatedyear!=undefined && frmAttestGrad1.txtgraduatedyear.text.length<4)
 	{
 		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidYear"));
 		//frmAttestGrad1.lblGraduatedYear.skin="sknLblRed";
		//frmAttestGrad1.lblGraduatedYear.text=kony.i18n.getLocalizedString("lblPleaseEnterValidYear");
 		frmAttestGrad1.txtgraduatedyear.setFocus(true);
 		return false;
	}
 	else if(frmAttestGrad1.txtnoofdocuments!=undefined && frmAttestGrad1.txtnoofdocuments.text == "")
 	{
 		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterNoOfDocuments"));
 		//frmAttestGrad1.lblNoofDocuments.skin="sknLblRed";
		//frmAttestGrad1.lblNoofDocuments.text=kony.i18n.getLocalizedString("lblPleaseEnterNoOfDocuments");
 		frmAttestGrad1.txtnoofdocuments.setFocus(true);
      	return false;
	}
	
 	else if(selectedCategory !=category_Faculty &&  frmAttestGrad1.txtstudentid!=undefined && frmAttestGrad1.txtstudentid.text == "")
 	{
 		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterStudentID"));
 		//frmAttestGrad1.lblStudentID.skin="sknLblRed";
		//frmAttestGrad1.lblStudentID.text=kony.i18n.getLocalizedString("lblPleaseEnterStudentID");
 		//alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterStudentID"));
 		frmAttestGrad1.txtstudentid.setFocus(true);
 		return false;
 	}
 	
 	//checking for presence of special characters
 	else if(selectedCategory !=category_Faculty && frmAttestGrad1.txtstudentid!=undefined && checkForSpecialChars(frmAttestGrad1.txtstudentid.text) == true)
 	{
 		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterValidStudentID"));
 		//frmAttestGrad1.lblStudentID.skin="sknLblRed";
		//frmAttestGrad1.lblStudentID.text=kony.i18n.getLocalizedString("lblPleaseEnterValidStudentID");
 		frmAttestGrad1.txtstudentid.setFocus(true);
 		return false;
 	}
 	
	 
		/*
 	else if(frmAttestGrad1.dropdownpaymentmethod!=undefined && frmAttestGrad1.dropdownpaymentmethod.selectedKey == 0)
 	{
 		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectPaymentMethod"));
 		frmAttestGrad1.dropdownpaymentmethod.setFocus(true);
 		return false;
 	}
	
  	else if(frmAttestGrad1.dropdownpaymentcardtype!=undefined && frmAttestGrad1.dropdownpaymentcardtype.selectedKey == 0)
 	{
 		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectCardType"));
 		frmAttestGrad1.dropdownpaymentcardtype.setFocus(true);
 		return false;
 	}*/
 		if(selectedCategory == category_Graduate){
		if(frmAttestGrad1.dropdownstudylevel1!=undefined && frmAttestGrad1.dropdownstudylevel1.selectedKey == 0)
		{
			alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel"));			
			//return false;
			
			//frmAttestGrad1.lblStudyLevel1.skin="sknLblRed";
            //frmAttestGrad1.lblStudyLevel1.text=kony.i18n.getLocalizedString("lblPleaseSelectStudyLevel");
          frmAttestGrad1.dropdownstudylevel1.setFocus(true);
            return false;
			
		}
		
		else if(frmAttestGrad1.txtinstitutename!=undefined && frmAttestGrad1.txtinstitutename.text == "")
		{
			alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterInstitute"));
			//frmAttestGrad1.txtinstitutename.setFocus(true);
			//return false;
			
			//frmAttestGrad1.lblInstituteName.skin="sknLblRed";
          //  frmAttestGrad1.lblInstituteName.text=kony.i18n.getLocalizedString("lblPleaseEnterInstitute");
            frmAttestGrad1.txtinstitutename.setFocus(true);
			return false;
			
		}
		
		else if(frmAttestGrad1.txtmajor!=undefined && frmAttestGrad1.txtmajor.text == "")
		{
			alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterMajor"));
			//frmAttestGrad1.txtmajor.setFocus(true);
			//frmAttestGrad1.lblMajor.skin="sknLblRed";
            //frmAttestGrad1.lblMajor.text=kony.i18n.getLocalizedString("lblPleaseEnterMajor");
			 frmAttestGrad1.txtmajor.setFocus(true);
			return false;
		}
		else if(frmAttestGrad1.dropdownnationality.selectedKey == 0)
		{
			alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
			//frmAttestGrad1.lblCountry.skin="sknLblRed";
           // frmAttestGrad1.lblCountry.text=kony.i18n.getLocalizedString("lblSelectCountry");
           frmAttestGrad1.dropdownnationality.setFocus(true);
            return false;
			
		}
		
		
	}
	if(selectedCategory == category_Enrolled){
		if(frmAttestGrad1.txtinstitutename2!=undefined && frmAttestGrad1.txtinstitutename2.text == "")
		{
			alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterInstitute"));
			//frmAttestGrad1.txtinstitutename2.setFocus(true);
			//return false;
			
			//frmAttestGrad1.lblInstituteNameCert.skin="sknLblRed";
            //frmAttestGrad1.lblInstituteNameCert.text=kony.i18n.getLocalizedString("lblPleaseEnterInstitute");
			frmAttestGrad1.txtinstitutename2.setFocus(true);
			return false;
		}
		else if(frmAttestGrad1.dropdownnationality1!=undefined && frmAttestGrad1.dropdownnationality1.selectedKey == 0)
		{
			alertDialog(kony.i18n.getLocalizedString("lblSelectCountry"));
			//frmAttestGrad1.dropdownnationality.setFocus(true);
			//return false;

			//frmAttestGrad1.lblCountry.skin="sknLblRed";
           // frmAttestGrad1.lblCountry.text=kony.i18n.getLocalizedString("lblSelectCountry");
            frmAttestGrad1.dropdownnationality1.setFocus(true);
			return false;
		}
		
		else if(frmAttestGrad1.txtcredithours!=undefined && frmAttestGrad1.txtcredithours.text == "")
		{
			alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterCreditHrs"));
			//frmAttestGrad1.txtcredithours.setFocus(true);
			//return false;
			//frmAttestGrad1.lblCreditHours.skin="sknLblRed";
          //  frmAttestGrad1.lblCreditHours.text=kony.i18n.getLocalizedString("lblPleaseEnterCreditHrs");
            frmAttestGrad1.txtcredithours.setFocus(true);
			return false;
		}
		}
	/*
	if(camBase64 == "" || camBase64 == null)
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseTakePicture"));
		frmAttestGrad1.camCertImage.setFocus(true);
		return false;
	}
*/
}
function createAttestGrad1ObjTab(){
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
	attesGradObj["instituteId"] = frmAttestGrad1.dropdowninstitue.selectedKey;
	attesGradObj["studyLevel"] = frmAttestGrad1.dropdownstudylevel.selectedKey;
	attesGradObj["major"] = frmAttestGrad1.dropdownmajor.selectedKey;
	if(selectedCategory == category_Enrolled)
	attesGradObj["subMajor"] = frmAttestGrad1.dropdownSubMajor.selectedKey;
	attesGradObj["graduateYear"] = frmAttestGrad1.txtgraduatedyear.text;
	attesGradObj["noOfDocuments"] = frmAttestGrad1.txtnoofdocuments.text;
	gblNoOfDocs = frmAttestGrad1.txtnoofdocuments.text;
	attesGradObj["studentID"] = frmAttestGrad1.txtstudentid.text;
	attesGradObj["purpose"] = isPurpose;
	attesGradObj["paymentMethod"] = frmAttestGrad1.dropdownpaymentmethod.selectedKey;
	attesGradObj["paymentMethodType"] = frmAttestGrad1.dropdownpaymentcardtype.selectedKey;
	kony.print("result data is Grad2------------",attesGradObj);
	if(selectedCategory == category_Graduate){
		attesGradObj["prevStudyLevel"]=frmAttestGrad1.dropdownstudylevel1.selectedKey;
		attesGradObj["prevInstituteName"] = frmAttestGrad1.txtinstitutename.text;
		attesGradObj["prevMajor"] = frmAttestGrad1.txtmajor.text;
		attesGradObj["isCertifiedOrNot"]=isAttested;
		attesGradObj["transInstituteName"] = frmAttestGrad1.txtinstitutename2.text;
		attesGradObj["trnasCountry"] = frmAttestGrad1.dropdownnationality1.text;
		attesGradObj["transCreditHours"] = frmAttestGrad1.txtcredithours.text;
	}
	else{
		attesGradObj["transInstituteName"] = frmAttestGrad1.txtinstitutename2.text;
		attesGradObj["trnasCountry"] = frmAttestGrad1.dropdownnationality1.text;
		attesGradObj["transCreditHours"] = frmAttestGrad1.txtcredithours.text;
	}
	attesGradObj["captureImg"] = "";
	
}


function setPurposeTab(widgetRef1,widgetRef2,attestInside)
{
	isAttestedInside = attestInside;
	if (isAttestedInside == true)
	{
		widgetRef1.src = "checked.png";
		widgetRef2.src = "unchecked.png";
	}
	else
	{
		widgetRef1.src = "unchecked.png";
		widgetRef2.src = "checked.png";
	}
}


//Attestation 

function attestAdjustFormWidget()			//adjust footer for study details page
{
	var deviceName=kony.os.deviceInfo().name;
	
	if(selectedCategory == category_Graduate)
	{
		//frmAttestGrad1.lblCategory.text = kony.i18n.getLocalizedString("lblGraduate");
		frmAttestGrad1.lblstudydetails.text = kony.i18n.getLocalizedString("lblStudyDetails");//"Study Details";
		frmAttestGrad1.lblGraduatedYear.setVisibility(true);
		frmAttestGrad1.txtgraduatedyear.setVisibility(true);
		
		frmAttestGrad1.lblStudentID.setVisibility(true);
		frmAttestGrad1.txtstudentid.setVisibility(true);
	
		frmAttestGrad1.hboxSubmajor.setVisibility(false);
		frmAttestGrad1.lblSubMajor.setVisibility(false);
		frmAttestGrad1.dropdownSubMajor.setVisibility(false);
		
		
		frmAttestGrad1.lineGraduateYear.setVisibility(true);
		//frmAttestGrad1.hbxCamStaff.setVisibility(false);
		frmAttestGrad1.hboxStudyLevel.setVisibility(true);
		frmAttestGrad1.hboxMajor.setVisibility(true);
		frmAttestGrad1.lineStudyLevel.setVisibility(true);
		frmAttestGrad1.lineStudentLine.setVisibility(true);
		//frmAttestGrad1.lblMajor.setVisibility(false);
		
		
		//step2

		frmAttestGrad1.dropdownstudylevel1.setVisibility(true);
		//frmAttestGrad1.lblCategory.text = kony.i18n.getLocalizedString("lblGraduate");
		frmAttestGrad1.lblpreviousstudydetails.setVisibility(true);
		//	frmAttestGrad3.line15518273941045.setVisibility(true);
		
		//Changed on 11/11/2014		
		frmAttestGrad1.lblStudyLevel1.setVisibility(true);
	
		
		frmAttestGrad1.lineStudyLevel1.setVisibility(true);
		//frmAttestGrad1.lblInstituteName.setVisibility(true);
		//frmAttestGrad3.txtinstitutename.setVisibility(true);
		frmAttestGrad1.hboxInstitute1.setVisibility(true);
		frmAttestGrad1.lblInstituteName.setVisibility(true);
		frmAttestGrad1.txtinstitutename.setVisibility(true);
		
		frmAttestGrad1.lineInstitute1.setVisibility(true);
		//frmAttestGrad3.lblMajor.setVisibility(true);
		//frmAttestGrad3.txtmajor.setVisibility(true);
		
		frmAttestGrad1.hboxMajor1.setVisibility(true);
			
		frmAttestGrad1.lineMajor1.setVisibility(true);
		//frmAttestGrad1.radiobtniscertificateattested.setVisibility(true);
		//frmAttestGrad3.hbxCertAttest.setVisibility(true);
		frmAttestGrad1.hboxIsAttested.setVisibility(true);
		frmAttestGrad1.hboxCertificateDetails.setVisibility(true);
		
		frmAttestGrad1.lineBeforePrevCert.setVisibility(true);
	}
	else if(selectedCategory == category_Enrolled)
	{
		// define i18n 
		//frmAttestGrad1.lblCategory.text = kony.i18n.getLocalizedString("lblEnrolled");
		frmAttestGrad1.lblstudydetails.text = kony.i18n.getLocalizedString("lblStudyDetails");
		frmAttestGrad1.lblGraduatedYear.setVisibility(false);
		frmAttestGrad1.txtgraduatedyear.setVisibility(false);
		frmAttestGrad1.lineGraduateYear.setVisibility(false);
		
		//frmAttestGrad1.hbxCamStaff.setVisibility(false);
		frmAttestGrad1.hboxStudyLevel.setVisibility(true);
			frmAttestGrad1.hboxMajor.setVisibility(true);
		frmAttestGrad1.lblStudentID.setVisibility(true);
		frmAttestGrad1.txtstudentid.setVisibility(true);
		frmAttestGrad1.lineStudyLevel.setVisibility(true);
		frmAttestGrad1.lineStudentLine.setVisibility(true);
		frmAttestGrad1.lblSubMajor.setVisibility(true);
		frmAttestGrad1.dropdownSubMajor.setVisibility(true);
		frmAttestGrad1.hboxSubmajor.setVisibility(true);
		//frmAttestGrad1.lineSubmajor.setVisibility(true);
		
		
		//step2

		//frmAttestGrad1.lblCategory.text =kony.i18n.getLocalizedString("lblEnrolled");
		frmAttestGrad1.lbltransfercertificatedetails.text = kony.i18n.getLocalizedString("lblCertificateDetails");
		frmAttestGrad1.lblpreviousstudydetails.setVisibility(false);
		//frmAttestGrad3.line15518273941045.setVisibility(false);
		
		//Changed on 11/11/2014
		frmAttestGrad1.lblStudyLevel1.setVisibility(false);
		
		frmAttestGrad1.lineStudyLevel1.setVisibility(false);
		//frmAttestGrad1.lblInstituteName.setVisibility(false);
		//frmAttestGrad1.txtinstitutename.setVisibility(false);
		
		frmAttestGrad1.hboxInstitute1.setVisibility(false);
		
		frmAttestGrad1.lineInstitute1.setVisibility(false);
		//frmAttestGrad1.lblMajor.setVisibility(false);
		//frmAttestGrad1.txtmajor.setVisibility(false);
	frmAttestGrad1.hboxMajor1.setVisibility(false);
		frmAttestGrad1.lineMajor1.setVisibility(false);
		//frmAttestGrad1.radiobtniscertificateattested.setVisibility(false);
		frmAttestGrad1.hboxIsAttested.setVisibility(false);
		frmAttestGrad1.dropdownstudylevel1.setVisibility(false);
		
		frmAttestGrad1.hboxCertificateDetails.setVisibility(true);
		
		frmAttestGrad1.lineBeforePrevCert.setVisibility(false);
	}
	else
	{	
		//frmAttestGrad1.hbxCamStaff.setVisibility(true);
		frmAttestGrad1.hboxStudyLevel.setVisibility(false);
		frmAttestGrad1.hboxMajor.setVisibility(false);
		frmAttestGrad1.lineStudyLevel.setVisibility(false);
		frmAttestGrad1.txtgraduatedyear.setVisibility(false);
		frmAttestGrad1.lblGraduatedYear.setVisibility(false);
		frmAttestGrad1.lineGraduateYear.setVisibility(false);
	//	frmAttestGrad1.lblStudentID.setVisibility(false);
	//	frmAttestGrad1.txtstudentid.setVisibility(false);
	//	frmAttestGrad1.lineStudentLine.setVisibility(false);
		frmAttestGrad1.hboxSubmajor.setVisibility(false);
		frmAttestGrad1.lblSubMajor.setVisibility(false);
		frmAttestGrad1.dropdownSubMajor.setVisibility(false);
		//frmAttestGrad1.linesub.setVisibility(false);
		
		frmAttestGrad1.lblstudydetails.text = kony.i18n.getLocalizedString("lblInstitutionDetails");
		// define i18n 

	//check
		//frmAttestGrad1.lblCategory.text = kony.i18n.getLocalizedString("lblStaff");
		//frmAttestGrad1.lblSteps.text = kony.i18n.getLocalizedString("lblStep2Of2");
		
		//step2 
frmAttestGrad1.hboxCertificateDetails.setVisibility(false);


frmAttestGrad1.lblpreviousstudydetails.setVisibility(false);
		//frmAttestGrad3.line15518273941045.setVisibility(false);
		
		//Changed on 11/11/2014
		frmAttestGrad1.lblStudyLevel1.setVisibility(false);
		
		frmAttestGrad1.lineStudyLevel1.setVisibility(false);
		//frmAttestGrad1.lblInstituteName.setVisibility(false);
		//frmAttestGrad1.txtinstitutename.setVisibility(false);
		
		frmAttestGrad1.hboxInstitute1.setVisibility(false);
		
		frmAttestGrad1.lineInstitute1.setVisibility(false);
		//frmAttestGrad1.lblMajor.setVisibility(false);
		//frmAttestGrad1.txtmajor.setVisibility(false);
	frmAttestGrad1.hboxMajor1.setVisibility(false);
		frmAttestGrad1.lineMajor1.setVisibility(false);
		//frmAttestGrad1.radiobtniscertificateattested.setVisibility(false);
		frmAttestGrad1.hboxIsAttested.setVisibility(false);
		frmAttestGrad1.dropdownstudylevel1.setVisibility(false);

		frmAttestGrad1.lineBeforePrevCert.setVisibility(false);
		
		frmAttestGrad1.lblStudentID.setVisibility(false);
		frmAttestGrad1.txtstudentid.setVisibility(false);
			frmAttestGrad1.lineStudentLine.setVisibility(false);
	}
	
}

