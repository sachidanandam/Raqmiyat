/*
 function leftMenuAssignment(curFrm, leftMenuTy)
{
	kony.print("testing menu orientation ------.> "+leftMenuTy)
	var orient=kony.os.getDeviceCurrentOrientation();
	var childwidget=curFrm.vbxLeftMenu.widgets();
	kony.print("Widgest child @@------>"+childwidget);
	var len=childwidget.length;
	kony.print("Widgest child length@@------>"+len);
	if(orient==1)
	{		
		
					
					kony.print("Widgest child length------>"+childwidget.length);
					
					if(len > 0 && len!="undefined")
					{
							for(iwidgets=0;iwidgets<len;iwidgets++)
							{
								kony.print("Widgest child1------>"+childwidget[iwidgets]);
								kony.print("Widgest child id------>"+childwidget[iwidgets].id);
								curFrm.vbxLeftMenu.remove(childwidget[iwidgets]);
								kony.print("Removed widgtes------>");
				    		}
				    			
				  	}
				  	
				  	
				 	curFrm.vbxLeftMenu.isVisible=false;	
				  	curFrm.vbxLeftMenu.containerWeight=0.1;	
					curFrm.vbxRightMenu.containerWeight=99;				
					kony.print("Removed widgtes end------>");
	}
	else
	{	
	
				kony.print("now orientation ------>"+len)
				
					if(leftMenuTy == "1")
					{
					
						kony.print("testing menu orientation1 ------.> "+leftMenuTy)
						curFrm.vbxLeftMenu.add(hbxhdrCertificateAttest);
						curFrm.hbxhdrCertificateAttest.isVisible=true;
					}
					else if(leftMenuTy == "2")
					{
						kony.print("testing menu orientation2 ------.> "+leftMenuTy)
						curFrm.vbxLeftMenu.add(hbxhdrCertificateEqui);
						curFrm.hbxhdrCertificateEqui.isVisible=true;
					}
				
				curFrm.vbxLeftMenu.containerWeight=30;	
				curFrm.vbxRightMenu.containerWeight=70;	
		
	}
}
 
 */
function leftMenuAssignment(curFrm, leftMenuTy) {
    kony.print("testing menu orientation ------.> " + leftMenuTy)
    if (leftMenuTy == "1") {
        kony.print("testing menu orientation1 ------.> " + leftMenuTy)
        curFrm.vbxLeftMenu.add(hbxhdrCertificateAttest);
        curFrm.hbxhdrCertificateAttest.isVisible = true;
    } else if (leftMenuTy == "2") {
        kony.print("testing menu orientation2 ------.> " + leftMenuTy)
        curFrm.vbxLeftMenu.add(hbxhdrCertificateEqui);
        curFrm.hbxhdrCertificateEqui.isVisible = true;
    }
}

function leftMenuUiSelect(pgId, curFrm) {
    //var curFrm = eventObj["id"];
    try {
        var uiorient = kony.os.getDeviceCurrentOrientation();
        if (uiorient == 2) {
            switch (pgId) {
            case "1.1":
            case "1.2":
            case "1.3":
                curFrm.btnHdrGraduateStud.skin = sknBtnBgTranFnBlackBrYellow;
                curFrm.btnhdrCurrentStud.skin = sknBtnBgTranFnBlackBrYellow;
                curFrm.btnhdrFacultyMem.skin = sknBtnBgTranFnBlackBrYellow;
                break;
            case "2.1":
            case "2.2":
            case "2.3":
            case "2.4":
                curFrm.btnHdrCertificateEquivalency.skin = sknBtnBgTranFnBlackBrYellow;
                curFrm.btnHdrStatusCertificate.skin = sknBtnBgTranFnBlackBrYellow;
                curFrm.btnHdrInquire.skin = sknBtnBgTranFnBlackBrYellow;
                curFrm.btnHdrCommittesDecision.skin = sknBtnBgTranFnBlackBrYellow;
                break;
            }
            switch (pgId) {
            case "1.1":
                curFrm.btnHdrGraduateStud.skin = sknBtnBgYellowFnBlackBrYellowPlain;
                break;
            case "1.2":
                curFrm.btnhdrCurrentStud.skin = sknBtnBgYellowFnBlackBrYellowPlain;
                break;
            case "1.3":
                curFrm.btnhdrFacultyMem.skin = sknBtnBgYellowFnBlackBrYellowPlain;
                break;
            case "2.1":
                curFrm.btnHdrCertificateEquivalency.skin = sknBtnBgYellowFnBlackBrYellowPlain;
                break;
            case "2.2":
                curFrm.btnHdrStatusCertificate.skin = sknBtnBgYellowFnBlackBrYellowPlain;
                break;
            case "2.3":
                curFrm.btnHdrInquire.skin = sknBtnBgYellowFnBlackBrYellowPlain;
                break;
            case "2.4":
                curFrm.btnHdrCommittesDecision.skin = sknBtnBgYellowFnBlackBrYellowPlain;
                break;
            }
        }
        kony.print("pgIdindex of " + pgId.indexOf("1."));
        kony.print("pgIdindex of " + pgId.indexOf("2."));
        kony.print("pgIdindex of " + pgId.indexOf("3."));
        if (pgId.indexOf("1.") != 0) {
            hboxHdrMain.hboxHdrMenuLan1.skin = sknMenuFrmHdr;
            hboxHdrMain.hboxHdrMenu1.skin = sknMenuFrmHdr;
            hboxHdrMain.lblHdrMenuLan1.skin = sknLblBgTranFnYellowTab;
            hboxHdrMain.lblHdrMenu1.skin = sknLblBgTranFnYellowTabP;
            hboxHdrMain.imgHdrMenuLan1.src = "attest_off_hdr";
            hboxHdrMain.imgHdrMenu1.src = "attest_off_hdr";
        }
        if (pgId.indexOf("2.") != 0) {
            hboxHdrMain.hboxHdrMenuLan2.skin = sknMenuFrmHdr;
            hboxHdrMain.hboxHdrMenu2.skin = sknMenuFrmHdr;
            hboxHdrMain.lblHdrMenuLan2.skin = sknLblBgTranFnYellowTab;
            hboxHdrMain.lblHdrMenu2.skin = sknLblBgTranFnYellowTabP;
            hboxHdrMain.imgHdrMenuLan2.src = "equivalency_off_hdr";
            hboxHdrMain.imgHdrMenu2.src = "equivalency_off_hdr";
        }
        if (pgId.indexOf("1.") != 0 && pgId.indexOf("2.") != 0) {
            hboxHdrMain.hboxHdrMenuLan3.skin = sknMenuFrmHdr;
            hboxHdrMain.hboxHdrMenu3.skin = sknMenuFrmHdr;
            hboxHdrMain.lblHdrMenuLan3.skin = sknLblBgTranFnYellowTab;
            hboxHdrMain.lblHdrMenu3.skin = sknLblBgTranFnYellowTabP;
            hboxHdrMain.imgHdrMenuLan3.src = "fahim_off_hdr";
            hboxHdrMain.imgHdrMenu3.src = "fahim_off_hdr";
        }
        switch (pgId) {
        case "1.1":
        case "1.2":
        case "1.3":
            hboxHdrMain.hboxHdrMenuLan1.skin = sknHbxBgYellowCnPlain;
            hboxHdrMain.hboxHdrMenu1.skin = sknHbxBgYellowCnPlain;
            hboxHdrMain.lblHdrMenuLan1.skin = sknLblBgTranFnRedTab;
            hboxHdrMain.lblHdrMenu1.skin = sknLblBgTranFnRedTabP;
            hboxHdrMain.imgHdrMenuLan1.src = "attest_on_hdr";
            hboxHdrMain.imgHdrMenu1.src = "attest_on_hdr";
            break;
        case "2.1":
        case "2.2":
        case "2.3":
        case "2.4":
            hboxHdrMain.hboxHdrMenuLan2.skin = sknHbxBgYellowCnPlain;
            hboxHdrMain.hboxHdrMenu2.skin = sknHbxBgYellowCnPlain;
            hboxHdrMain.lblHdrMenuLan2.skin = sknLblBgTranFnRedTab;
            hboxHdrMain.lblHdrMenu2.skin = sknLblBgTranFnRedTabP;
            hboxHdrMain.imgHdrMenuLan2.src = "equivalency_on_hdr";
            hboxHdrMain.imgHdrMenu2.src = "equivalency_on_hdr";
            break;
        default:
            hboxHdrMain.hboxHdrMenuLan3.skin = sknHbxBgYellowCnPlain;
            hboxHdrMain.hboxHdrMenu3.skin = sknHbxBgYellowCnPlain;
            hboxHdrMain.lblHdrMenuLan3.skin = sknLblBgTranFnRedTab;
            hboxHdrMain.lblHdrMenu3.skin = sknLblBgTranFnRedTabP;
            hboxHdrMain.imgHdrMenuLan3.src = "fahim_on_hdr";
            hboxHdrMain.imgHdrMenu3.src = "fahim_on_hdr";
        }
    } catch (ex) {
        //alert("Error1 " + ex);
        //alert("curfrm " + JSON.stringify(curFrm));
    }
}

function leftMenuAssignmentMasterPg() {
    frmMasterPg.vbxLeftMenu.add(hbxhdrCertificateAttest);
    frmMasterPg.vbxLeftMenu.add(hbxhdrCertificateEqui);
}

function leftMenuAssSelect(pgId) {
    try {
        gvModuleSelect = pgId;
        frmMasterPg.btnHdrGraduateStud.skin = sknBtnBgTranFnBlackBrYellow;
        frmMasterPg.btnhdrCurrentStud.skin = sknBtnBgTranFnBlackBrYellow;
        frmMasterPg.btnhdrFacultyMem.skin = sknBtnBgTranFnBlackBrYellow;
        frmMasterPg.btnHdrCertificateEquivalency.skin = sknBtnBgTranFnBlackBrYellow;
        frmMasterPg.btnHdrStatusCertificate.skin = sknBtnBgTranFnBlackBrYellow;
        frmMasterPg.btnHdrInquire.skin = sknBtnBgTranFnBlackBrYellow;
        frmMasterPg.btnHdrCommittesDecision.skin = sknBtnBgTranFnBlackBrYellow;
        hboxHdrMain.hboxHdrMenuLan1.skin = sknMenuFrmHdr;
        hboxHdrMain.hboxHdrMenu1.skin = sknMenuFrmHdr;
        hboxHdrMain.hboxHdrMenuLan2.skin = sknMenuFrmHdr;
        hboxHdrMain.hboxHdrMenu2.skin = sknMenuFrmHdr;
        hboxHdrMain.hboxHdrMenuLan3.skin = sknMenuFrmHdr;
        hboxHdrMain.hboxHdrMenu3.skin = sknMenuFrmHdr;
        hboxHdrMain.lblHdrMenuLan1.skin = sknLblBgTranFnYellowTab;
        hboxHdrMain.lblHdrMenu1.skin = sknLblBgTranFnYellowTabP;
        hboxHdrMain.lblHdrMenuLan2.skin = sknLblBgTranFnYellowTab;
        hboxHdrMain.lblHdrMenu2.skin = sknLblBgTranFnYellowTabP;
        hboxHdrMain.lblHdrMenuLan3.skin = sknLblBgTranFnYellowTab;
        hboxHdrMain.lblHdrMenu3.skin = sknLblBgTranFnYellowTabP;
        hboxHdrMain.imgHdrMenuLan1.src = "attest_off_hdr";
        hboxHdrMain.imgHdrMenu1.src = "attest_off_hdr";
        hboxHdrMain.imgHdrMenuLan2.src = "equivalency_off_hdr";
        hboxHdrMain.imgHdrMenu2.src = "equivalency_off_hdr";
        hboxHdrMain.imgHdrMenuLan3.src = "fahim_off_hdr";
        hboxHdrMain.imgHdrMenu3.src = "fahim_off_hdr";
        switch (pgId) {
        case "1":
            hboxHdrMain.hboxHdrMenuLan1.skin = sknHbxBgYellowCnPlain;
            hboxHdrMain.hboxHdrMenu1.skin = sknHbxBgYellowCnPlain;
            frmMasterPg.hbxhdrCertificateAttest.isVisible = true;
            frmMasterPg.hbxhdrCertificateEqui.isVisible = false;
            hboxHdrMain.lblHdrMenuLan1.skin = sknLblBgTranFnRedTab;
            hboxHdrMain.lblHdrMenu1.skin = sknLblBgTranFnRedTabP;
            hboxHdrMain.imgHdrMenuLan1.src = "attest_on_hdr";
            hboxHdrMain.imgHdrMenu1.src = "attest_on_hdr";
            break;
        case "2":
            hboxHdrMain.hboxHdrMenuLan2.skin = sknHbxBgYellowCnPlain;
            hboxHdrMain.hboxHdrMenu2.skin = sknHbxBgYellowCnPlain;
            frmMasterPg.hbxhdrCertificateAttest.isVisible = false;
            frmMasterPg.hbxhdrCertificateEqui.isVisible = true;
            hboxHdrMain.lblHdrMenuLan2.skin = sknLblBgTranFnRedTab;
            hboxHdrMain.lblHdrMenu2.skin = sknLblBgTranFnRedTabP;
            hboxHdrMain.imgHdrMenuLan2.src = "equivalency_on_hdr";
            hboxHdrMain.imgHdrMenu2.src = "equivalency_on_hdr";
            break;
        default:
            hboxHdrMain.hboxHdrMenuLan3.skin = sknHbxBgYellowCnPlain;
            hboxHdrMain.hboxHdrMenu3.skin = sknHbxBgYellowCnPlain;
            hboxHdrMain.lblHdrMenuLan3.skin = sknLblBgTranFnRedTab;
            hboxHdrMain.lblHdrMenu3.skin = sknLblBgTranFnRedTabP;
            hboxHdrMain.imgHdrMenuLan3.src = "fahim_on_hdr";
            hboxHdrMain.imgHdrMenu3.src = "fahim_on_hdr";
            frmMasterPg.hbxhdrCertificateAttest.isVisible = false;
            frmMasterPg.hbxhdrCertificateEqui.isVisible = false;
        }
        frmOrient(frmMasterPg);
    } catch (ex) {
        alert("Error Master " + ex);
    }
}

function navToMasterPg(menuId) {
    switch (menuId) {
    case "1":
        frmMasterPg["hbxhdrCertificateAttest"].isVisible = true;
        frmMasterPg["hbxhdrCertificateEqui"].isVisible = false;
        break;
    case "2":
        frmMasterPg["hbxhdrCertificateAttest"].isVisible = false;
        frmMasterPg["hbxhdrCertificateEqui"].isVisible = true;
        break;
    }
    frmMasterPg.show();
}

function leftMenuNav(pgId) {
    gvSubModuleSelect = pgId;
    var orient = kony.os.getDeviceCurrentOrientation();
    switch (pgId) {
    case "1.1":
        gvModuleSelect = "1";
        frmGradStaticPage1.show();
        if (orient == 1) popPortraitAttestHeader.dismiss();
        break;
    case "1.2":
        gvModuleSelect = "1";
        frmCurntStudStatic.show();
        if (orient == 1) popPortraitAttestHeader.dismiss();
        break;
    case "1.3":
        gvModuleSelect = "1";
        frmFacultyStatic.show();
        if (orient == 1) popPortraitAttestHeader.dismiss();
        break;
    case "2.1":
        gvModuleSelect = "2";
        frmCertificateEquivalencyLanding.show();
        popUpCertEquivalency.dismiss();
        break;
    case "2.2":
        gvModuleSelect = "2";
        frmApplicationStatus.show();
        if (orient == 1) popUpCertEquivalency.dismiss();
        break;
    case "2.3":
        gvModuleSelect = "2";
        frmInquireAboutInstStaticPage.show();
        if (orient == 1) popUpCertEquivalency.dismiss();
        break;
    case "2.4":
        gvModuleSelect = "2";
        frmCommitteesDecisionStaticPg.show();
        if (orient == 1) popUpCertEquivalency.dismiss();
        break;
    }
}