function validateStatusPgFieldAndNav()
{
//	if(gblDeviceInfo == "tab")
	if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
	if(frmApplicationStatus.rbImagStatus.src != "checked.png" && frmApplicationStatus.rbimgInquiry.src != "checked.png")
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseSelectAnyOne"));
		return false;
	}
	else if(frmApplicationStatus.txtBoxAppNum.text == null || frmApplicationStatus.txtBoxAppNum.text == "" )
	{
		alertDialog(kony.i18n.getLocalizedString("lblPleaseEnterAppNo"));
		frmApplicationStatus.txtBoxAppNum.setFocus(true);
		return false;
	}
	else if(frmApplicationStatus.rbImagStatus.src == "checked.png" && frmApplicationStatus.txtBoxAppNum.text.length != 9 ) 
	{
		alertDialog(kony.i18n.getLocalizedString("lblLengthShouldbe9"));
		frmApplicationStatus.txtBoxAppNum.setFocus(true);
		return false;
	}
	else if(frmApplicationStatus.rbimgInquiry.src == "checked.png" && frmApplicationStatus.txtBoxAppNum.text.length != 8 )
	 
	{
		alertDialog(kony.i18n.getLocalizedString("lblLengthShouldbe5"));
		frmApplicationStatus.txtBoxAppNum.setFocus(true);
		return false;
	}
	else
	{
		invokeEquiWsAppStatus();
	}
	}else{
		alert(kony.i18n.getLocalizedString("lblNetworkMsg"));
	}
}


function invokeEquiWsAppStatus()
{
	showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));;
	var inputparam = [];
	var inputparaminq = [];
	if(frmApplicationStatus.rbImagStatus.src == "checked.png")
	{
	inputparam["serviceID"] = "Equ_Select_AppStatusEqu";
//	inputparam["httpheaders"] = {};
	//inputparam["httpconfig"] = {timeout:5};

	//inputparam["wsUsrId"] = gvWsUsrId;
	//inputparam["wsPwd"] = gvWsPwd;

	//inputparam["apptype"] = ((frmApplicationStatus.rbImagStatus.src == "checked.png")?"1":((frmApplicationStatus.rbimgInquiry.src == "checked.png")?"2":"1"));
	inputparam["apptype"]="1";
	inputparam["appno"] = frmApplicationStatus.txtBoxAppNum.text;
	
	appmiddlewareinvokerasync(inputparam, equiWsAppStatusCallbackequ);
	kony.print("input param "+inputparam);
	}
	else if(frmApplicationStatus.rbimgInquiry.src == "checked.png")
	{
	var inparam = {
	serviceID:"Equ_Select_AppStatusInq",
	apptype:"2",
	appno:frmApplicationStatus.txtBoxAppNum.text
		};
	appmiddlewareinvokerasync(inparam, equiWsAppStatusCallbackinq);
	kony.print("3");
	kony.print("input param "+inparam);
	var test=JSON.stringify(inparam);
	kony.print("json"+test);
	
	
	}

}



function equiWsAppStatusCallbackequ(status, result) {
	try{
		if (status == 400) {
			kony.print("result data ------------"+result);
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("os is 0",result);
				if(result["output"] == "SUCCESS"){
					var appStatusResult = result["output"];
					var segData = [];
					kony.print("result is"+JSON.stringify(appStatusResult));
					
					//if(frmApplicationStatus.rbImagStatus.src == "checked.png") 
					//{
						
						if(result["selectappequ"]==undefined||result["selectappequ"]==null)
						{
						dismissLoadingIndicator();
						alertDialog(kony.i18n.getLocalizedString("lblnorecordsfound"));
						}
						else
						{
								
						for(var i = 0; i < result["selectappequ"].length; i++)
						{
							var studyLevel = "";
							var statusAppNo = "";
							if(kony.i18n.getCurrentLocale() != "ar_SA")
							{
								studyLevel = result["selectappequ"][i]["studylevelen"];
								
								statusAppNo = result["selectappequ"][i]["statusen"];
							}
							else
							{
								studyLevel = result["selectappequ"][i]["studylevelar"];
								kony.print(studyLevel)
								statusAppNo = result["selectappequ"][i]["statusar"];
								kony.print(statusAppNo);
								kony.print("name is set");
							}
							
							segData.push({
											"lblCertificateNo":kony.i18n.getLocalizedString("lblcertno"),
											"lblCertificateNoVal":result["selectappequ"][i]["certno"],
											"lblCertificate":kony.i18n.getLocalizedString("lblCertificate"),
											"lblCertificateVal":result["selectappequ"][i]["certtitle"],
											"lblStudyLevel":kony.i18n.getLocalizedString("lblStudyLevel"),
											"lblStudyLevelVal":studyLevel,
											"lblStatus":kony.i18n.getLocalizedString("status"),
											"lblStatusVal":statusAppNo
											}
											);
							kony.print("Segment data push " +  JSON.stringify(segData));
						//}
								if(segData != null && segData != "" && segData.length > 0)
								{
									if(gblDeviceInfo != "tab")
									{
										frmApplicationStatusDetails.lblApplicationNoVal.text = result["selectappequ"][0]["appno"]; 
										frmApplicationStatusDetails.lblNameVal.text = result["selectappequ"][0]["arname"];
										frmApplicationStatusDetails.segCertificateDetails.setData(segData);
										kony.print("Segment is set");
										dismissLoadingIndicator();			
										frmApplicationStatusDetails.show();
									}
									else
									{
										frmApplicationStatus.lblApplicationNoVal.text = result["selectappequ"][0]["appno"]; 
										frmApplicationStatus.lblNameVal.text = result["selectappequ"][0]["arname"];
										frmApplicationStatus.segCertificateDetails.setData(segData);
										kony.print("Segment is set");	
										dismissLoadingIndicator();	
										frmApplicationStatus.hboxApplicationStatusDetails.isVisible = true;			
									}
								}
								
								else
								{
								dismissLoadingIndicator();
								alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
									
								}				
					}
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
function equiWsAppStatusCallbackinq(status, result) {
	try{
		if (status == 400) {
			kony.print("result data ------------"+result);
			if ((kony.os.toNumber(result.opstatus) == 0)) {
				kony.print("os is 0",result);
				if(result["output"] == "SUCCESS"){
					var appStatusResult = result["output"];
					var segData = [];
					kony.print("result is"+JSON.stringify(appStatusResult));
					
					if(result["selectappinq"]==undefined||result["selectappinq"]==null)
						{
						dismissLoadingIndicator();
						alertDialog(kony.i18n.getLocalizedString("lblnorecordsfound"));
						}
						else
						{
						for(var i = 0; i < result["selectappinq"].length; i++)
						{
							var studyLevel = "";
							var statusAppNo = "";
							if(kony.i18n.getCurrentLocale() != "ar_SA")
							{
								studyLevel = result["selectappinq"][i]["studylevelen"];
								
								country = result["selectappinq"][i]["countryen"];
							}
							else
							{
								studyLevel = result["selectappinq"][i]["studylevelar"];
								kony.print(studyLevel)
								country = result["selectappinq"][i]["countryar"];
								kony.print(statusAppNo);
								kony.print("name is set");
							}
							
							segData.push({
											"lblCountry":kony.i18n.getLocalizedString("lblCountry"),
											"lblCountryVal":country,
											"lblUniversity":kony.i18n.getLocalizedString("lblUniversity"),
											"lblUniversityVal":result["selectappinq"][i]["univ"],
											"lblEnquiryStudyLevel":kony.i18n.getLocalizedString("lblStudyLevel"),
											"lblEnquiryStudyLevelVal":studyLevel,
											"lblMajor":kony.i18n.getLocalizedString("lblMajor"),
											"lblMajorVal":result["selectappinq"][i]["currmajor"],
											"lblEnquiryStatus":kony.i18n.getLocalizedString("status"),
											"lblEnquiryStatusVal":result["selectappinq"][i]["status"]
											
											}
											);
							kony.print("Segment data push " +  JSON.stringify(segData));
					
						if(segData != null && segData != "" && segData.length > 0)
						{
							if(gblDeviceInfo != "tab")
							{
								frmApplicationInquiryStatus.lblEnquiryApplicationNoVal.text = frmApplicationStatus.txtBoxAppNum.text;//result["selectappinq"][0]["appno"]; 
								//frmApplicationInquiryStatus.lblEnquiryNameVal.text = result["selectappinq"][0]["arname"];
								frmApplicationInquiryStatus.segEnquiryCertificateDetails.setData(segData);
								kony.print("Segment is set");
								dismissLoadingIndicator();			
								frmApplicationInquiryStatus.show();
							}
							else
							{
								frmApplicationStatus.lblEnquiryApplicationNoVal.text = frmApplicationStatus.txtBoxAppNum.text; 
								frmApplicationStatus.lblEnquiryNameVal.text = result["selectappinq"][0]["arname"];
								frmApplicationStatus.segEnquiryCertificateDetails.setData(segData);
								kony.print("Segment is set");	
								dismissLoadingIndicator();	
								frmApplicationStatus.hboxApplicationEnquiryStatus.isVisible = true;			
							}
						}
						else
						{
						dismissLoadingIndicator();
						alertDialog(kony.i18n.getLocalizedString("loadingIndicator"));
						}	
						}
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
function clearinquirymobile()
{
	frmApplicationStatus.rbImagStatus.src="checked.png";
	frmApplicationStatus.rbimgInquiry.src="unchecked.png";
	frmApplicationStatus.txtBoxAppNum.text="";
}
function clearinquirytab()
{
frmApplicationStatus.rbImagStatus.src="checked.png";
frmApplicationStatus.rbimgInquiry.src="unchecked.png";
frmApplicationStatus.txtBoxAppNum.text="";
frmApplicationStatus.lblEnquiryApplicationNoVal.text="";
frmApplicationStatus.lblApplicationNoVal.text="";
frmApplicationStatus.lblNameVal.text="";
frmApplicationStatus.hboxApplicationEnquiryStatus.setVisibility(false);
frmApplicationStatus.hboxApplicationStatusDetails.setVisibility(false);
}
function clearinquirytabonfind()
{
frmApplicationStatus.lblEnquiryApplicationNoVal.text="";
frmApplicationStatus.lblApplicationNoVal.text="";
frmApplicationStatus.lblNameVal.text="";
frmApplicationStatus.hboxApplicationEnquiryStatus.setVisibility(false);
frmApplicationStatus.hboxApplicationStatusDetails.setVisibility(false);

}