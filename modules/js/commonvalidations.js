
function validateUserEmail(inputText)
{
	var emailString = inputText;
	kony.print("user entered mail id is : "+emailString);
    var isEmailProper = kony.string.isValidEmail(emailString);//re.test(email);
    return isEmailProper;
}

function ValidateNumber(inputText,msg) {
    try {
        if (!isNaN(inputText)) {
            return true;
        } else {
        	//alertDialog(msg);
            return false;
        }
    } catch (err) {
        kony.print("Exception in ValidateNumber  :" + err);
    }
}

function ValidateAlphaNumeric(inputText,msg) {

    try {
        var Exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
        if (inputText.match(Exp)) {
            return true;
        } else {
        	//alertDialog(msg);
            return false;
        }
    } catch (err) {
        kony.print("Exception in ValidateAlphaNumeric  :" + err);
    }
}

function ValidateLength(inputText, lennum,msg) {
    try {

        if (inputText.toString().length < lennum) {
        	//alertDialog(msg);
            return false;
        } else {
            return true;
        }
    } catch (err) {
        kony.print("Exception in ValidateLength  :" + err);
    }
}

function checkForSpecialChars(str) {
    try {
        var splChar = ["=", "!", "@", "#", "$", "%", "^",
            "&", "*", "(", "[", "]", "_", ")", "+", "{", "}",
            "|", ":", "<", ">", "/", "\\", ".", "`", "~", "\"",
            "-", ";", ",", "?", ";", "'", "?", "?", "?", "?", "¤", "€", "£", "¥", "?", " ", "?"
        ];
        return kony.string.containsChars(str, splChar);
    } catch (err) {
        kony.print("Exception in checkForSpecialChars  :" + err);
    }
}

function validateYear(str,msg) {
    try {
        var enteredYear = kony.os.toNumber(str);
        if (str == "") {
        	//alertDialog(msg);
            return false;
        } else if ((enteredYear < 1901) || str.length != 4) {
        	//alertDialog(msg);
            return false;
        } else {
            return true;
        }
    } catch (err) {
        kony.print("Exception in validateYear  :" + err);
    }
}

function validateIndianMobileNumber(str,msg) {
    try {
        if (str == "") {
        	//alertDialog(msg);
            return false;
        } else if (str.length != 10) {
        	//alertDialog(msg);
            return false;
        } else {
            return true;
        }
    } catch (err) {
        kony.print("Exception in validateIndianMobileNumber  :" + err);
    }
}

function confirmPassword(pass1, pass2,msg,msg1) {
    try {
    	if(pass2.length==0||pass2==""){
    		alertDialog(msg);
    		gblErrWidgetRefId = frmNewReg.txtconfirmpassword;
    		return false;
    	}
    
        if (pass1.toString().length != pass2.toString().length || pass1.toString() != pass2.toString()) {
           alertDialog(msg1);
           gblErrWidgetRefId = frmNewReg.txtconfirmpassword;
            return false;
        } else {
            return true;
        }
    } catch (err) {
        kony.print("Exception in confirmPassword  :" + err);
    }
}

function onlyalphabate(inputText,msg) {
    try {
        var regexp = /^[a-zA-Z]+$/;
        if (inputText.match(regexp)) {
            return true;
        } else {
        	//alertDialog(msg);
            return false;
        }
    } catch (err) {
        kony.print("Exception in onlyalphabate  :" + err);
    }
}

function isValidDate(inputText,msg) {
    try {
        var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!inputText.match(re)) {
            return false;
        } else {
            var inpArray = inputText.split("/");
            if (inpArray[0] > 31 || inpArray[1] > 12 || inpArray[2] < 1901) {
            	//alertDialog(msg);
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        kony.print("Exception in isValidDate  :" + e);
    }
}

function passWordValidation(strPaswd,msg) {
        try {
            var alphaPos = strPaswd.search(/[a-z]/i);
            if (alphaPos != -1) {
                kony.print("alpha found");
            }
            var noPos = strPaswd.search(/\d+/g);
            if (noPos != -1) {
                kony.print("Nos found");
            }
            if (checkForSpecialChars(strPaswd) == true) {
                kony.print("special char found");
            }
            kony.print("alphaPos" + alphaPos);
            kony.print("noPos" + noPos);
            kony.print(checkForSpecialChars(strPaswd));
            if (alphaPos == "-1" || alphaPos == -1 || noPos == "-1" || noPos == -1 || checkForSpecialChars(strPaswd) == false) {
                kony.print("invalid");
				alertDialog(msg);
                gblErrWidgetRefId = frmNewReg.txtpassword;
                return false;
            } else {
                return true;
            }
        } catch (e) {
            kony.print("Exception in passWordValidation  :" + e);
        }

    }
    //validation fails if image size exceeds 5Mb
function camCallbackImgSize(camObj) {
    try {
        var camBase64 = kony.convertToBase64(camObj.rawBytes);
        var attachLength = camBase64.toString().length;
        if (attachLength > 3145728)
            return false;
        else
            return true;
    } catch (e) {
        kony.print("Exception in camCallbackImgSize  :" + e);
    }

}


function alertDialog(msg) 
{
	var OkMsg = kony.i18n.getLocalizedString("lblOk");
	var basicConf = {message: msg,
	alertType: constants.ALERT_TYPE_ERROR,
	alertTitle: "",yesLabel:OkMsg,
	noLabel: null, alertHandler: msgBxCallBack};
	//Defining pspConf parameter for alert 
	var pspConf = {};
	//Alert definition
	kony.ui.Alert(basicConf,pspConf);
	//alert(msg);		// alert alignment logic to be written for arabic
}

function msgBxCallBack(flag)
{
	if(flag)
		if(gblErrWidgetRefId != null && gblErrWidgetRefId != "")
		{
			gblErrWidgetRefId.setFocus(true);
			gblErrWidgetRefId = "";
		}
}
function showErrMsgWithHandle(msg,alertCallBack) 
{
	var OkMsg = kony.i18n.getLocalizedString("lblOk");
	var basicConf = {message: msg,
	alertType: constants.ALERT_TYPE_ERROR,
	alertTitle: "",yesLabel:OkMsg,
	noLabel: null, alertHandler: alertCallBack};
	//Defining pspConf parameter for alert 
	var pspConf = {};
	//Alert definition
	kony.ui.Alert(basicConf,pspConf); 
	//alert(msg);		// alert alignment logic to be written for arabic 
}

function showConfirmationMsgWithHandle(msg, alertCallBack, yesBtnTxt, noBtnTxt) 
{
	var yesBtnTxt = kony.i18n.getLocalizedString(yesBtnTxt);
	var noBtnTxt = kony.i18n.getLocalizedString(noBtnTxt);
	var msgTxt = kony.i18n.getLocalizedString(msg);
	
	if(yesBtnTxt == null || yesBtnTxt == "")
		yesBtnTxt = kony.i18n.getLocalizedString("lblYes");
		
	if(noBtnTxt == null || noBtnTxt == "")
		noBtnTxt = kony.i18n.getLocalizedString("lblNo");
		
	if(msgTxt == null || msgTxt == "")
		msgTxt = msg;
	
	var basicConf = {message: msgTxt,
	alertType: constants.ALERT_TYPE_CONFIRMATION,
	alertTitle: "",yesLabel:yesBtnTxt,
	noLabel: noBtnTxt, alertHandler: alertCallBack};
	//Defining pspConf parameter for alert 
	var pspConf = {};
	//Alert definition
	kony.ui.Alert(basicConf,pspConf);
	//alert(msg);		// alert alignment logic to be written for arabic
}

function goToManiMenu()
{
	frmMainMenu.show();
}