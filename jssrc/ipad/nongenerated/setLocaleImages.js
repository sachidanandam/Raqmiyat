function setLocaleImage(formName) {
    var deviceName = kony.os.deviceInfo().name;
    kony.print("device name is " + deviceName);
    var curLocale = kony.i18n.getCurrentLocale();
    kony.print("Current locale is " + curLocale);
    if (deviceName != "android") {
        switch (formName) {
        case "frmMainMenu":
            if (curLocale == "ar_SA") {
                kony.print("Inside mainmenu and locale is Ar");
                frmMainMenu.imgFooter.src = "imgapp_ar.png";
            } else {
                kony.print("Inside mainmenu and locale is En");
                frmMainMenu.imgFooter.src = "imgapp_en.png";
            }
            break;
        case "frmAttestGrad1":
            if (curLocale == "ar_SA") {
                kony.print("Inside frmAttestGrad1 form for AR");
                app.headers["hbox155182739418707"]["vbxBack"]["imgBack"].src = "back_ar.png";
                frmAttestGrad1.btnNext.skin = "sknBtnNextar";
            } else {
                kony.print("Inside frmAttestGrad1 form for En");
                app.headers["hbox155182739418707"]["vbxBack"]["imgBack"].src = "back_en.png";
                frmAttestGrad1.btnNext.skin = "sknBtnNext";
            }
            break;
        case "frmAttestGrad2":
            if (curLocale == "ar_SA") {
                app.headers["hbox155182739418707"]["vbxBack"]["imgBack"].src = "back_ar.png";
                frmAttestGrad2.btnPrev.skin = "sknBtnPrevar";
                frmAttestGrad2.btnNext.skin = "sknBtnNextar";
            } else {
                app.headers["hbox155182739418707"]["vbxBack"]["imgBack"].src = "back_en.png";
                frmAttestGrad2.btnPrev.skin = "sknBtnPrev";
                frmAttestGrad2.btnNext.skin = "sknBtnNext";
            }
            break;
        case "frmAttestGrad3":
            if (curLocale == "ar_SA") {
                app.headers["hbox155182739418707"]["vbxBack"]["imgBack"].src = "back_ar.png";
                frmAttestGrad3.btnNext.skin = "sknBtnNextInactar";
                frmAttestGrad3.btnPrev.skin = "sknBtnPrevar";
            } else {
                app.headers["hbox155182739418707"]["vbxBack"]["imgBack"].src = "back_en.png";
                frmAttestGrad3.btnNext.skin = "sknBtnNextInact";
                frmAttestGrad3.btnPrev.skin = "sknBtnPrev";
            }
            break;
        case "frmCurntStudStatic":
            if (curLocale == "ar_SA") {
                app.headers["hbox1239147519723067"]["vbxBack"]["imgBack"].src = "back_ar.png";
            } else {
                app.headers["hbox1239147519723067"]["vbxBack"]["imgBack"].src = "back_en.png";
            }
        case "frmFacultyStatic":
            if (curLocale == "ar_SA") {
                app.headers["hbox155182739503017"]["vbxBack"]["imgBack"].src = "back_ar.png";
            } else {
                app.headers["hbox155182739503017"]["vbxBack"]["imgBack"].src = "back_en.png";
            }
        case "frmGradStaticPage1":
            if (curLocale == "ar_SA") {
                kony.print("Inside frmGradStaticPage1 page with Ar");
                if (frmGradStaticPage1.headers != undefined || frmGradStaticPage1.headers != null) {
                    frmGradStaticPage1.headers[0].imgBack.src = "back_ar.png";
                }
                //app.headers.hbox1239236892712888.imgBack.src="back_ar.png";
                if (frmGradStaticPage1.footers != undefined || frmGradStaticPage1.footers != null) {
                    frmGradStaticPage1.footers[0].btnPrev.skin = "sknBtnInvisiblear";
                    frmGradStaticPage1.footers[0].btnNext.skin = "sknBtnNextar";
                }
            } else {
                kony.print("Inside frmGradStaticPage1 page with En");
                app.headers.hbox1239236892712888["imgBack"].src = "back_en.png";
                app.footers.hbx1.btnPrev.skin = "sknBtnInvisible";
                app.footershbx1.btnNext.skin = "sknBtnNext";
            }
        case "frmGradStaticPage2":
            if (curLocale == "ar_SA") {
                app.headers["hbox1239236892712888"]["vbxBack"]["imgBack"].src = "back_ar.png";
                app.footers["hbx1"]["vbx1"]["hbx2"]["btnPrev"].skin = "sknBtnInvisiblear";
                app.footers["hbx1"]["vbx1"]["hbx2"]["btnNext"].skin = "sknBtnNextar";
            } else {
                app.headers["hbox1239236892712888"]["vbxBack"]["imgBack"].src = "back_en.png";
                app.footers["hbx1"]["vbx1"]["hbx2"]["btnPrev"].skin = "sknBtnInvisible";
                app.footers["hbx1"]["vbx1"]["hbx2"]["btnNext"].skin = "sknBtnNext";
            }
            break;
        case "frmNewReg":
            if (curLocale == "ar_SA") {
                app.headers["hbox1239147519709690"]["vbxBack"]["imgBack"].src = "back_ar.png";
            } else {
                app.headers["hbox1239236892712888"]["vbxBack"]["imgBack"].src = "back_en.png";
            }
            break;
        default:
            kony.print("No condition executed..");
        }
    }
}