function checkNFC() {
    showConfirmationMsgWithHandle("nfcmsg", checkNFCResponse, "lblcontinue", "cancel");
}

function checkNFCResponse(flag) {
    if (flag != true) return;
    NFCCall();
}

function NFCCall() {
    try {
        kony.print("Enter  NFCCall :---");
        //Creates an object of class 'NFCMain'
        var NFCMainObject = new NFC.NFCMain();
        //Invokes method 'Read' on the object
        gvNFC = NFCMainObject.NFCStatus();
        kony.print("Enter  NFCCall - gvNFC :---" + gvNFC);
        if (gvNFC == 1) {
            kony.print("Enter  NFCCall - Scan started :---");
            gvIsScanned = 1;
            NFCMainObject.Read(
            /**Function*/
            NFCCallback);
        }
    } catch (Err) {
        kony.print("Error while NFC Scan  :" + Err);
    }
}

function NFCCallback(result) {
    kony.print("Enter  NFC Call back:---");
    kony.print("Check Category:---" + selectedCategory);
    //if(selectedCategory = "graduate" || selectedCategory = "enrolled" || selectedCategory = "faculty")
    //{
    showLoadingIndicator(kony.i18n.getLocalizedString("lblPleaseWait"));
    kony.print("Check Category Valid---");
    ScanNfcAttestation(result);
    //}
}

function NFCSupport() {
    try {
        gvIsScanned = 0;
        //Creates an object of class 'NFCMain'
        var deviceName = kony.os.deviceInfo().name;
        kony.print("Device name :---" + deviceName)
        if (deviceName == "android") {
            kony.print("Device android :---" + deviceName);
            //Creates an object of class 'NFCMain'
            var NFCMainObject = new NFC.NFCMain();
            //Invokes method 'CheckNFCSupport' on the object
            gvNFC = NFCMainObject.CheckNFCSupport();
            kony.print("NFC support  :---" + gvNFC);
        } else gvNFC = 0; // not support android
    } catch (Err) {
        kony.print("Error while NFC Support check  :" + Err);
    }
}

function ValidateNFCSupport(CurFrm) {
    try {
        kony.print("Enter ValidateNFCSupport");
        kony.print("NFC support  :---" + gvNFC);
        if (gvNFC == 0) {
            kony.print("Current form  :---" + CurFrm);
            CurFrm.btnScan.isVisible = false;
            if (deviceName == "android" && gblDeviceInfo != "tab") {
                alertDialog(kony.i18n.getLocalizedString("nfcnotsupported")); //nfc not supported
            }
            kony.print("Visible ");
        }
    } catch (Err) {
        kony.print("Error while ValidateNFCSupport  :" + Err);
    }
}