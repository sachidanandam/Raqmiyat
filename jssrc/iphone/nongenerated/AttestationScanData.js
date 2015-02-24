function ScanNfcAttestation(scanval) {
    try {
        showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));
        kony.print("Enter Scan Service Call---");
        //scanval="BB48343D";
        var inputparam = {
            serviceID: "GetStudentDetails",
            ChipSN: scanval,
            Username: "WSMOHE",
            Password: "Mohe@Webservice"
        }
        kony.print("service calling--------->");
        appmiddlewareinvokerasync(inputparam, UserCallback);
        kony.print("call callback--------->");
    } catch (Ex) {
        dismissLoadingIndicator();
    }
}

function UserCallback(status, Response) {
    try {
        kony.print("Enter UserCallback Service Callback---");
        if (status == 400) {
            kony.print("processServiceResults -- > Status 400");
            if (Response != null) {
                kony.print("processServiceResults -- > Not Null");
                kony.print(JSON.stringify(Response));
                kony.print("processServiceResults Response -- >:" + Response["studid"]);
                kony.print("substring id----------------------------->" + Response["studid"].substring(17));
                validateCertificateResponse(Response);
            }
        }
    } catch (Ex) {
        dismissLoadingIndicator();
    }
}

function validateCertificateResponse(Response) {
    try {
        kony.print("Enter validateCertificateResponse ---");
        var certtypid = Response["certtypeid"].substring(25);
        kony.print("Check Certificate type ---" + certtypid);
        if (certtypid == gvScannedCertType) {
            kony.print(" Certificate type Success ---" + certtypid);
            //	invokeCompositService();
            assignCertificateData(Response);
        } else {
            dismissLoadingIndicator();
            alertDialog(kony.i18n.getLocalizedString("lblErrorMsgCertificateNotMatch"));
        }
    } catch (Ex) {
        dismissLoadingIndicator();
    }
}
var gblStudyLevelTemp = [];
gblStudyLevelTemp["BACHELOR"] = "4";
gblStudyLevelTemp["UNDERGRADUATE HIGHER DIPLOMA"] = "104";
gblStudyLevelTemp["UNDERGRADUATE DIPLOMA"] = "107";
gblStudyLevelTemp["MASTER"] = "59";
gblStudyLevelTemp["DOCTORATE"] = "103";
gblStudyLevelTemp["GRADUATE DIPLOMA"] = "105";
gblStudyLevelTemp["UNDERGRADUATE HIGHER DIPLOMA"] = "108";
gblFlagToAssignEmiratesId = false;
gblFlagToAssignMobileCode = false;
//Nithya & Deepa code
function assignCertificateData(Response) {
    try {
        var stuid = Response["studid"].substring(17);
        var stuname = Response["studname"].substring(19);
        kony.print("substring name----------------------------->" + stuname);
        var gend = Response["gender"].substring(13);
        kony.print("substring gender----------------------------->" + gend);
        var nation = Response["nationality"].substring(18);
        kony.print("substring nationality----------------------------->" + nation);
        var mail = Response["email"].substring(12);
        kony.print("substring email----------------------------->" + mail);
        var emi = Response["emirate"].substring(14);
        kony.print("substring emirate----------------------------->" + emi);
        //var mob=Response["mobile"].substring(13);
        var mobileSplit = Response["mobile"].split("___-___");
        var mob = mobileSplit[1].split("-");
        kony.print("substring mobile----------------------------->" + mob);
        var reqtyp = Response["reqtype"].substring(19);
        kony.print("substring request type----------------------------->" + reqtyp);
        var title = Response["certtitle"].substring(24);
        kony.print("substring certificate title----------------------------->" + title);
        var institu = Response["institute"].substring(16);
        kony.print("substring institute----------------------------->" + institu);
        var levels = Response["level"].substring(18);
        kony.print("substring level----------------------------->" + levels);
        var graduateyear = Response["gradyear"].substring(22);
        kony.print("substring graduate year----------------------------->" + graduateyear);
        var semester = Response["sem"].substring(15);
        kony.print("substring semester----------------------------->" + semester);
        var previoustitle = Response["prevtitle"].substring(21);
        kony.print("substring previous title----------------------------->" + previoustitle);
        var previousstudylvl = Response["prevstylevel"].substring(27);
        kony.print("substring previous study level----------------------------->" + previousstudylvl);
        var previouscertcountry = Response["prevcertcountry"].substring(35);
        kony.print("substring previous cert country----------------------------->" + previouscertcountry);
        var previouscertinst = Response["prevcertinst"].substring(37);
        kony.print("substring previous cert institute----------------------------->" + previouscertinst);
        var accredicountry = Response["accrecountry"].substring(28);
        kony.print("substring accreditation country----------------------------->" + accredicountry);
        var accrediinst = Response["accreinst"].substring(30);
        kony.print("substring accreditation inst----------------------------->" + accrediinst);
        var accredihours = Response["accrehours"].substring(26);
        kony.print("substring accreditation hour----------------------------->" + accredihours);
        var uaenationalid = Response["uaeid"].substring(24);
        kony.print("substring uae national id----------------------------->" + uaenationalid);
        var pgnum = Response["pgno"].substring(12);
        kony.print("substring pg no----------------------------->" + pgnum);
        var gendid = Response["genderid"].substring(16);
        kony.print("substring gender id----------------------------->" + gendid);
        var nationalityids = Response["nationalityid"].substring(21);
        kony.print("substring nationality id----------------------------->" + nationalityids);
        var emirateids = Response["emirateid"].substring(17);
        kony.print("substring emirate id----------------------------->" + emirateids);
        var certtypid = Response["certtypeid"].substring(25);
        kony.print("substring cert type id----------------------------->" + certtypid);
        var instituteid = Response["instno"].substring(14);
        kony.print("substring institute id----------------------------->" + instituteid);
        var pglvlid = Response["pglevelid"].substring(16);
        kony.print("substring pg level id----------------------------->" + pglvlid);
        var semesterid = Response["semid"].substring(18);
        kony.print("substring sem id----------------------------->" + semesterid);
        var previousstylevelid = Response["prevstylvlid"].substring(24);
        kony.print("substring prev study level id----------------------------->" + previousstylevelid);
        var previouscertcountryid = Response["prevcertcountryid"].substring(32);
        kony.print("substring previous certificate country id----------------------------->" + previouscertcountryid);
        gvScannedInstId = instituteid;
        frmAttestGrad1.txtstudentname.text = stuname;
        frmAttestGrad1.txtstudentname.setEnabled(false);
        if (gendid == 1) {
            frmAttestGrad1.rbimgMale.src = "checked.png";
            frmAttestGrad1.rbimgFemale.src = "unchecked.png";
        } else {
            frmAttestGrad1.rbimgMale.src = "unchecked.png";
            frmAttestGrad1.rbimgFemale.src = "checked.png";
        }
        frmAttestGrad1.txtemail.text = mail;
        frmAttestGrad1.txtemail.setEnabled(false);
        var temp = [];
        try {
            temp = uaenationalid.split("-");
        } catch (exp) {
            temp = ["123", "1234", "1234567", "1"];
        }
        //------------------------------------------------------------
        if (uaenationalid.length == 18 && mobileSplit[1].length == 11) {
            kony.print("emirates Id,Mobile  is coming");
            frmAttestGrad1.txtemiratesid1.text = temp[0];
            frmAttestGrad1.txtemiratesid2.text = temp[1];
            frmAttestGrad1.txtemiratesid3.text = temp[2];
            frmAttestGrad1.txtemiratesid4.text = temp[3];
            frmAttestGrad1.txtmobilenumber.text = mob[1];
        } else if (uaenationalid.length != 18 && mobileSplit[1].length != 11) {
            kony.print("emirates Id,Mobile  is not coming");
            getUserDataToAuto();
        } else if (uaenationalid.length == 18) {
            frmAttestGrad1.txtemiratesid1.text = temp[0];
            frmAttestGrad1.txtemiratesid2.text = temp[1];
            frmAttestGrad1.txtemiratesid3.text = temp[2];
            frmAttestGrad1.txtemiratesid4.text = temp[3];
            gblFlagToAssignMobileCode = true;
            kony.print("emirates Id coming");
            getUserDataToAuto();
        } else if (mobileSplit[1].length == 11) {
            var tempMob;
            try {
                if (mobileSplit[1].indexOf("-") > 0) tempMob = mobileSplit[1].split("-");
                else tempMob = mobileSplit[1].split(" ");
            } catch (exp) {
                //some NFC tags giving data like "155 9999987" it should give data like "151-1234567";
                tempMob == mobileSplit[1].split(" ");
            }
            kony.print("Mobile  is coming" + tempMob[0] + "ggggggggggggggggg" + tempMob[1]);
            frmAttestGrad1.txtmobilenumber.text = tempMob[1];
            frmAttestGrad1.dropdownmobileareacode.selectedKey = tempMob[0];
            gblFlagToAssignEmiratesId = true;
            getUserDataToAuto();
        }
        //----------------------------------------------------------
        //  frmAttestGrad1.txtmobilenumber.setEnabled(false);	
        // alert("nation :"+nationalityids+" emirates :"+emirateids);	
        frmAttestGrad1.dropdownnationality.selectedKey = nationalityids;
        //   frmAttestGrad1.dropdownnationality.setEnabled(false);	
        frmAttestGrad1.dropdownemirate.selectedKey = emirateids;
        //  frmAttestGrad1.dropdownemirate.setEnabled(false);	
        if (gblDeviceInfo == "tab") {
            frmAttestGrad1.txtstudentid.text = stuid;
            frmAttestGrad1.txtgraduatedyear.text = graduateyear;
            frmAttestGrad1.dropdowninstitue.selectedKey = instituteid;
            frmAttestGrad1.txtinstitutename.text = previouscertinst;
            frmAttestGrad1.txtinstitutename2.text = previouscertinst;
            frmAttestGrad1.txtcredithours.text = accredihours;
            frmAttestGrad1.dropdownstudylevel.selectedKey = previousstylevelid;
            /*
					  frmAttestGrad1.txtstudentid.setEnabled(false);	
					  frmAttestGrad1.txtgraduatedyear.setEnabled(false);	
					//   frmAttestGrad1.dropdowninstitue.setEnabled(false);	
					    frmAttestGrad1.txtinstitutename.setEnabled(false);	
					     frmAttestGrad1.txtcredithours.setEnabled(false);	
					      frmAttestGrad1.txtinstitutename2.setEnabled(false);	
					    //   frmAttestGrad1.dropdownstudylevel.setEnabled(false);
					 */
        } else {
            frmAttestGrad2.txtstudentid.text = stuid;
            frmAttestGrad2.txtgraduatedyear.text = graduateyear;
            //-----------------------------------
            frmAttestGrad2.dropdowninstitue.masterDataMap = [
                [{
                    "key": instituteid,
                    "value": institu
                }], "key", "value"];
            frmAttestGrad2.dropdowninstitue.selectedKey = instituteid;
            frmAttestGrad2.dropdowninstitue.setEnabled(false);
            //
            frmAttestGrad2.dropdownstudylevel.masterDataMap = [
                [{
                    "key": gblStudyLevelTemp[levels.toUpperCase()],
                    "value": levels.toUpperCase()
                }], "key", "value"];
            frmAttestGrad2.dropdownstudylevel.selectedKey = gblStudyLevelTemp[levels]; //Should change after getting from chip
            frmAttestGrad2.dropdownstudylevel.setEnabled(false);
            frmAttestGrad3.txtinstitutename.text = previouscertinst;
            frmAttestGrad3.txtinstitutename2.text = previouscertinst;
            frmAttestGrad3.txtcredithours.text = accredihours;
            //
            frmAttestGrad3.dropdownstudylevel.masterDataMap = [
                [{
                    "key": previousstylevelid,
                    "value": previousstudylvl
                }], "key", "value"];
            frmAttestGrad3.dropdownstudylevel.selectedKey = previousstylevelid;
            frmAttestGrad3.dropdownstudylevel.setEnabled(false);
            frmAttestGrad3.dropdownnationality.selectedKey = previouscertcountryid;
            frmAttestGrad3.dropdownnationality.setEnabled(false);
            /*
					frmAttestGrad2.txtstudentid.setEnabled(false);	
					 frmAttestGrad2.txtgraduatedyear.setEnabled(false);	
					 frmAttestGrad3.txtinstitutename.setEnabled(false);	
					 frmAttestGrad3.txtinstitutename2.setEnabled(false);	
					 frmAttestGrad3.txtcredithours.setEnabled(false);	
					 */
        }
        dismissLoadingIndicator();
        /*	
			if(mob[1]!=null)
				 else
				  frmAttestGrad1.txtmobilenumber.text=mobileSplit[1];
				  if(mobileSplit[1].length==11){			  
					 frmAttestGrad1.txtmobilenumber.text=mob[1];
				  }else{
				  
				  }
			*/
        frmAttestGrad1.show();
    } catch (Ex) {
        dismissLoadingIndicator();
    }
}