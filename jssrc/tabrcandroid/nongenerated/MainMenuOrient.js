var devicename = kony.os.deviceInfo().name;

function homeorientation() {
    var getorien = kony.os.getDeviceCurrentOrientation();
    var currlocale = kony.i18n.getCurrentLocale();
    kony.print("current locale------------------" + currlocale);
    kony.print("devicename ============" + devicename);
    if (devicename == "iPad") //|| devicename=="iPad Simulator")
    {
        if (getorien == 0) {
            if (currlocale == "en_US") {
                frmMainMenu.hbxhomeport.isVisible = true;
                frmMainMenu.hbxhomelands.isVisible = false;
                frmMainMenu.hbxhomeportar.isVisible = false;
                frmMainMenu.hbxhomelandar.isVisible = false;
            } else {
                frmMainMenu.hbxhomeportar.isVisible = true;
                frmMainMenu.hbxhomelandar.isVisible = false;
                frmMainMenu.hbxhomeport.isVisible = false;
                frmMainMenu.hbxhomelands.isVisible = false;
            }
            return;
        } else if (getorien == 1) {
            if (currlocale == "en_US") {
                frmMainMenu.hbxhomelands.isVisible = true;
                frmMainMenu.hbxhomeport.isVisible = false;
                frmMainMenu.hbxhomeportar.isVisible = false;
                frmMainMenu.hbxhomelandar.isVisible = false;
            } else {
                frmMainMenu.hbxhomeportar.isVisible = false;
                frmMainMenu.hbxhomelandar.isVisible = true;
                frmMainMenu.hbxhomelands.isVisible = false;
                frmMainMenu.hbxhomeport.isVisible = false;
            }
            return;
        }
    } else {
        if (getorien == 1) {
            if (currlocale == "en_US") {
                frmMainMenu.hbxhomeport.isVisible = true;
                frmMainMenu.hbxhomelands.isVisible = false;
                frmMainMenu.hbxhomeportar.isVisible = false;
                frmMainMenu.hbxhomelandar.isVisible = false;
            } else {
                frmMainMenu.hbxhomeportar.isVisible = true;
                frmMainMenu.hbxhomelandar.isVisible = false;
                frmMainMenu.hbxhomeport.isVisible = false;
                frmMainMenu.hbxhomelands.isVisible = false;
            }
            return;
        } else if (getorien == 2) {
            if (currlocale == "en_US") {
                frmMainMenu.hbxhomelands.isVisible = true;
                frmMainMenu.hbxhomeport.isVisible = false;
                frmMainMenu.hbxhomeportar.isVisible = false;
                frmMainMenu.hbxhomelandar.isVisible = false;
            } else {
                frmMainMenu.hbxhomeportar.isVisible = false;
                frmMainMenu.hbxhomelandar.isVisible = true;
                frmMainMenu.hbxhomelands.isVisible = false;
                frmMainMenu.hbxhomeport.isVisible = false;
            }
            return;
        }
    }
}

function frmOrient() {
    var curFrm = kony.application.getCurrentForm();
    frmOrient(curFrm);
}

function frmOrient(curFrm) {
    //Orientation Change in frmMenu
    if (curFrm == null || curFrm == "") curFrm = kony.application.getCurrentForm();
    var i = kony.os.getDeviceCurrentOrientation();
    kony.print("orientation............" + i);
    if (devicename == "iPad") {
        if (i == 0) {
            hboxHdrMain.hbxHdrPort.isVisible = true;
            hboxHdrMain.hboxHdrLanc.isVisible = false;
            try {
                curFrm.vbxLeftMenu.isVisible = false;
                curFrm.vbxLeftMenu.isVisible = false;
                curFrm.vbxLeftMenu.containerWeight = 0.1;
                curFrm.vbxRightMenu.containerWeight = 99.9;
            } catch (ex) {
                alert("Error orn " + ex);
            }
        } else if (i == 1) {
            hboxHdrMain.hbxHdrPort.isVisible = false;
            hboxHdrMain.hboxHdrLanc.isVisible = true;
            try {
                popPortraitAttestHeader.dismiss();
                popUpCertEquivalency.dismiss();
                curFrm.vbxLeftMenu.isVisible = true;
                curFrm.vbxLeftMenu.containerWeight = 30;
                curFrm.vbxRightMenu.containerWeight = 70;
            } catch (ex) {
                alert("Error orn " + ex);
            }
        }
    } else {
        if (i == 1) {
            hboxHdrMain.hbxHdrPort.isVisible = true;
            hboxHdrMain.hboxHdrLanc.isVisible = false;
            try {
                curFrm.vbxLeftMenu.isVisible = false;
                curFrm.vbxLeftMenu.isVisible = false;
                curFrm.vbxLeftMenu.containerWeight = 0.1;
                curFrm.vbxRightMenu.containerWeight = 99.9;
            } catch (ex) {
                alert("Error orn " + ex);
            }
        } else if (i == 2) {
            hboxHdrMain.hbxHdrPort.isVisible = false;
            hboxHdrMain.hboxHdrLanc.isVisible = true;
            try {
                popPortraitAttestHeader.dismiss();
                popUpCertEquivalency.dismiss();
                curFrm.vbxLeftMenu.isVisible = true;
                curFrm.vbxLeftMenu.containerWeight = 30;
                curFrm.vbxRightMenu.containerWeight = 70;
            } catch (ex) {
                alert("Error orn " + ex);
            }
        }
    }
}

function frmOrientLogo(curFrm) {
    var orients = kony.os.getDeviceCurrentOrientation();
    if (devicename == "iPad") {
        if (orients == 0) frmMainMenu.imgMainMenuLogo.src = "tablogo_portrait.png";
        else if (orients == 1) frmMainMenu.imgMainMenuLogo.src = "tablogo_land.png";
    } else {
        if (orients == 1) frmMainMenu.imgMainMenuLogo.src = "tablogo_portrait.png";
        else if (orients == 2) frmMainMenu.imgMainMenuLogo.src = "tablogo_land.png";
    }
}

function LeftMenuChange(PagId) {
    var currlocale = kony.i18n.getCurrentLocale();
    var pageOrient = kony.os.getDeviceCurrentOrientation();
    if (devicename == "iPad") {
        if (pageOrient == 1) {
            if (PagId == "1") {
                if (currlocale == "en_US") hbxhdrCertificateAttest.imghdrCertificateAttest.src = "vert_ca.png";
                else hbxhdrCertificateAttest.imghdrCertificateAttest.src = "ar_vert_ca.png";
            } else {
                if (currlocale == "en_US") hbxhdrCertificateEqui.iImgCertificateEquivalency.src = "vert_ce.png";
                else hbxhdrCertificateEqui.iImgCertificateEquivalency.src = "ar_vert_ce.png";
            }
        }
    } else {
        if (pageOrient == 2) {
            if (PagId == "1") {
                if (currlocale == "en_US") hbxhdrCertificateAttest.imghdrCertificateAttest.src = "vert_ca.png";
                else hbxhdrCertificateAttest.imghdrCertificateAttest.src = "ar_vert_ca.png";
            } else {
                if (currlocale == "en_US") hbxhdrCertificateEqui.iImgCertificateEquivalency.src = "vert_ce.png";
                else hbxhdrCertificateEqui.iImgCertificateEquivalency.src = "ar_vert_ce.png";
            }
        }
    }
}

function onfrmOrientionChange(curFrm) {
    frmOrient(curFrm);
    gvPrePg = curFrm;
    frmIntermediate.show();
}

function frmIntermediate_postShow() {
    if (gvPrePg == null || gvPrePg == "") {
        kony.print("Form obj not found");
        frmMainMenu.show();
    } else gvPrePg.show();
}