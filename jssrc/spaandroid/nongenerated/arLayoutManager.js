// Auto generated layout manager module. Do not Modify
var LAYOUTMANAGER = LAYOUTMANAGER || {}
LAYOUTMANAGER.getInstance = function() {
    //*********************Private Properties and Methods****************************//
    var isDefaultLayout = true;
    //*********************Public Properties and Methods****************************//
    var layoutManager = {}
    //Invoke the following function in the post app init - without fail
    //This function is not accessible from Event Editor. See below for alternative API that will be accessible from Event Editor
    layoutManager.init = function() {
            isDefaultLayout = true;
            kony.print("layoutManager : init successful");
        }
        // Invoke this when you want to switch to the Default Layout for which the App is designed.
        // Example: Invoke this for switching to Left To Right (LTR) Layout (for English)
        //This function is not accessible from Event Editor. See below for alternative API that will be accessible from Event Editor
        layoutManager.switchToDefaultLayout = function(fnCallBack) {
            kony.print("layoutManager : switchToDefaultLayout : starts");
            isDefaultLayout = true;
            // Destroy all un necessary data in the current layout
            this.destroyForms();
            // Re Assign forms/templates to original layout
            // Create all the templates specific to En Layout
            initializefooImg();
            initializeftrCertificateEqiStep1();
            initializeftrCertificateEqiStep2();
            initializeftrGradAttestStep1();
            initializeftrGradAttestStep2();
            initializehdrCertEquStatus();
            initializehdrCertificateEqu();
            initializehdrCertificateEquivalency();
            initializehdrCommitteeDecision();
            initializehdrCommon();
            initializehdrCommonWithSubHdr();
            initializehdrCurStudStatic();
            initializehdrEqui();
            initializehdrFacStatic();
            initializehdrFahim();
            initializehdrGradAttest();
            initializehdrGradAttestStaticStep1();
            initializehdrInquireAbtInst();
            initializehdrMainMenu();
            initializehdrNewUsrFrm();
            initializehdrStatusCert();
            initializereqdocsfooter();
            initializesegmentPopFileHeader();
            // Create all the forms specific to En Layout
            frmApplicationInquiryStatusGlobals();
            frmApplicationStatusGlobals();
            frmApplicationStatusDetailsGlobals();
            frmApplicationSubmitGlobals();
            frmAttachmentConfirmationGlobals();
            frmAttestGrad1Globals();
            frmAttestGrad2Globals();
            frmAttestGrad3Globals();
            frmCerEquivalencyAttachGlobals();
            frmCertEnquApplicationSubmitGlobals();
            frmCertEquivalency1Globals();
            frmCertEquivalency2Globals();
            frmCertEquivalency3Globals();
            frmCertEquivalency4Globals();
            frmCertEquivalStaticPageGlobals();
            frmCertEquivalStaticPage1Globals();
            frmCertificateEquivalencyLandingGlobals();
            frmCertRequest1Globals();
            frmCertRequest2Globals();
            frmCertRequest3Globals();
            frmCommitteesDecision1Globals();
            frmCommitteesDecision2Globals();
            frmCommitteesDecisionStaticPageGlobals();
            frmCurntStudStaticGlobals();
            frmDummyGlobals();
            frmFacultyStaticGlobals();
            frmFahimGlobals();
            frmFahimFAQsGlobals();
            frmGradStaticPage1Globals();
            frmGradStaticPage2Globals();
            frmInquireAboutInstStaticPageGlobals();
            frmMainMenuGlobals();
            frmNewRegGlobals();
            frmPaymentGlobals();
            popFileExplorerGlobals();
            reqdocumentspopusGlobals();
            // Provision for Manually Duplicated forms in En Layout
            // Nullify all Arabic layout objects
            kony.print("layoutManager : switchToDefaultLayout : ends");
            // Proceed with user defined logic after layout reversal
            fnCallBack();
        }
        // Invoke this when you want to reverse the default layout of the App
        // Example: Invoke this for switching to Right To Left (RTL) Layout (for Arabic)
        //This function is not accessible from Event Editor. See below for alternative API that will be accessible from Event Editor
        layoutManager.switchToArabicLayout = function(fnCallBack) {
            kony.print("layoutManager : switchToArabicLayout : starts");
            isDefaultLayout = false;
            // Destroy all un necessary data in the current layout
            this.destroyForms();
            // Create all the templates specific to Ar Layout
            initializefooImgAr();
            initializeftrCertificateEqiStep1Ar();
            initializeftrCertificateEqiStep2Ar();
            initializeftrGradAttestStep1Ar();
            initializeftrGradAttestStep2Ar();
            initializehdrCertEquStatusAr();
            initializehdrCertificateEquAr();
            initializehdrCertificateEquivalencyAr();
            initializehdrCommitteeDecisionAr();
            initializehdrCommonAr();
            initializehdrCommonWithSubHdrAr();
            initializehdrCurStudStaticAr();
            initializehdrEquiAr();
            initializehdrFacStaticAr();
            initializehdrFahimAr();
            initializehdrGradAttestAr();
            initializehdrGradAttestStaticStep1Ar();
            initializehdrInquireAbtInstAr();
            initializehdrMainMenuAr();
            initializehdrNewUsrFrmAr();
            initializehdrStatusCertAr();
            initializereqdocsfooterAr();
            initializesegmentPopFileHeaderAr();
            // Re Assign original template variables to Ar objects
            hbox153428946261734 = hbox153428946261734Ar;
            hbox17239193184129614 = hbox17239193184129614Ar;
            hbox17239193184129613 = hbox17239193184129613Ar;
            hbx1 = hbx1Ar;
            hbox1239236892720313 = hbox1239236892720313Ar;
            hbox17231149333112 = hbox17231149333112Ar;
            hbox17231149333136 = hbox17231149333136Ar;
            hbox17230851705888532 = hbox17230851705888532Ar;
            hbox17231149331172 = hbox17231149331172Ar;
            hbox172311493311196 = hbox172311493311196Ar;
            hbox172311493319628 = hbox172311493319628Ar;
            hbox172311493319652 = hbox172311493319652Ar;
            hbxCommonHdr = hbxCommonHdrAr;
            hbxCommonHdrWtSub = hbxCommonHdrWtSubAr;
            hbxCommonSubHdr = hbxCommonSubHdrAr;
            hbox1239147519723067 = hbox1239147519723067Ar;
            hbox12391475197230 = hbox12391475197230Ar;
            hbox155182739503017 = hbox155182739503017Ar;
            hbox181499092127451 = hbox181499092127451Ar;
            hbox155182739418707 = hbox155182739418707Ar;
            hbox1239236892712888 = hbox1239236892712888Ar;
            hbox172311493310632 = hbox172311493310632Ar;
            hbox172311493310656 = hbox172311493310656Ar;
            hbox153428946468519 = hbox153428946468519Ar;
            hbox123914751970 = hbox123914751970Ar;
            hbox1239147519709690 = hbox1239147519709690Ar;
            hbox1728596477254 = hbox1728596477254Ar;
            hboxFileBrowseHeader = hboxFileBrowseHeaderAr;
            // Create all the forms specific to Ar Layout
            frmApplicationInquiryStatusGlobalsAr();
            frmApplicationStatusGlobalsAr();
            frmApplicationStatusDetailsGlobalsAr();
            frmApplicationSubmitGlobalsAr();
            frmAttachmentConfirmationGlobalsAr();
            frmAttestGrad1GlobalsAr();
            frmAttestGrad2GlobalsAr();
            frmAttestGrad3GlobalsAr();
            frmCerEquivalencyAttachGlobalsAr();
            frmCertEnquApplicationSubmitGlobalsAr();
            frmCertEquivalency1GlobalsAr();
            frmCertEquivalency2GlobalsAr();
            frmCertEquivalency3GlobalsAr();
            frmCertEquivalency4GlobalsAr();
            frmCertEquivalStaticPageGlobalsAr();
            frmCertEquivalStaticPage1GlobalsAr();
            frmCertificateEquivalencyLandingGlobalsAr();
            frmCertRequest1GlobalsAr();
            frmCertRequest2GlobalsAr();
            frmCertRequest3GlobalsAr();
            frmCommitteesDecision1GlobalsAr();
            frmCommitteesDecision2GlobalsAr();
            frmCommitteesDecisionStaticPageGlobalsAr();
            frmCurntStudStaticGlobalsAr();
            frmDummyGlobalsAr();
            frmFacultyStaticGlobalsAr();
            frmFahimGlobalsAr();
            frmFahimFAQsGlobalsAr();
            frmGradStaticPage1GlobalsAr();
            frmGradStaticPage2GlobalsAr();
            frmInquireAboutInstStaticPageGlobalsAr();
            frmMainMenuGlobalsAr();
            frmNewRegGlobalsAr();
            frmPaymentGlobalsAr();
            popFileExplorerGlobalsAr();
            reqdocumentspopusGlobalsAr();
            // Provision for Manually Duplicated forms in Ar Layout
            // Re Assign original forms variables to Ar objects
            frmApplicationInquiryStatus = frmApplicationInquiryStatusAr;
            frmApplicationStatus = frmApplicationStatusAr;
            frmApplicationStatusDetails = frmApplicationStatusDetailsAr;
            frmApplicationSubmit = frmApplicationSubmitAr;
            frmAttachmentConfirmation = frmAttachmentConfirmationAr;
            frmAttestGrad1 = frmAttestGrad1Ar;
            frmAttestGrad2 = frmAttestGrad2Ar;
            frmAttestGrad3 = frmAttestGrad3Ar;
            frmCerEquivalencyAttach = frmCerEquivalencyAttachAr;
            frmCertEnquApplicationSubmit = frmCertEnquApplicationSubmitAr;
            frmCertEquivalency1 = frmCertEquivalency1Ar;
            frmCertEquivalency2 = frmCertEquivalency2Ar;
            frmCertEquivalency3 = frmCertEquivalency3Ar;
            frmCertEquivalency4 = frmCertEquivalency4Ar;
            frmCertEquivalStaticPage = frmCertEquivalStaticPageAr;
            frmCertEquivalStaticPage1 = frmCertEquivalStaticPage1Ar;
            frmCertificateEquivalencyLanding = frmCertificateEquivalencyLandingAr;
            frmCertRequest1 = frmCertRequest1Ar;
            frmCertRequest2 = frmCertRequest2Ar;
            frmCertRequest3 = frmCertRequest3Ar;
            frmCommitteesDecision1 = frmCommitteesDecision1Ar;
            frmCommitteesDecision2 = frmCommitteesDecision2Ar;
            frmCommitteesDecisionStaticPage = frmCommitteesDecisionStaticPageAr;
            frmCurntStudStatic = frmCurntStudStaticAr;
            frmDummy = frmDummyAr;
            frmFacultyStatic = frmFacultyStaticAr;
            frmFahim = frmFahimAr;
            frmFahimFAQs = frmFahimFAQsAr;
            frmGradStaticPage1 = frmGradStaticPage1Ar;
            frmGradStaticPage2 = frmGradStaticPage2Ar;
            frmInquireAboutInstStaticPage = frmInquireAboutInstStaticPageAr;
            frmMainMenu = frmMainMenuAr;
            frmNewReg = frmNewRegAr;
            frmPayment = frmPaymentAr;
            popFileExplorer = popFileExplorerAr;
            reqdocumentspopus = reqdocumentspopusAr;
            // Provision for Manually Duplicated forms in Ar Layout
            kony.print("layoutManager : switchToArabicLayout : ends");
            // Proceed with user defined logic after layout reversal
            fnCallBack();
        }
        // This function is used to destroy all the forms of the application
        layoutManager.destroyForms = function() {
            kony.print("Inside the destroy forms function");
            frmApplicationInquiryStatus.destroy();
            frmApplicationStatus.destroy();
            frmApplicationStatusDetails.destroy();
            frmApplicationSubmit.destroy();
            frmAttachmentConfirmation.destroy();
            frmAttestGrad1.destroy();
            frmAttestGrad2.destroy();
            frmAttestGrad3.destroy();
            frmCerEquivalencyAttach.destroy();
            frmCertEnquApplicationSubmit.destroy();
            frmCertEquivalency1.destroy();
            frmCertEquivalency2.destroy();
            frmCertEquivalency3.destroy();
            frmCertEquivalency4.destroy();
            frmCertEquivalStaticPage.destroy();
            frmCertEquivalStaticPage1.destroy();
            frmCertificateEquivalencyLanding.destroy();
            frmCertRequest1.destroy();
            frmCertRequest2.destroy();
            frmCertRequest3.destroy();
            frmCommitteesDecision1.destroy();
            frmCommitteesDecision2.destroy();
            frmCommitteesDecisionStaticPage.destroy();
            frmCurntStudStatic.destroy();
            frmDummy.destroy();
            frmFacultyStatic.destroy();
            frmFahim.destroy();
            frmFahimFAQs.destroy();
            frmGradStaticPage1.destroy();
            frmGradStaticPage2.destroy();
            frmInquireAboutInstStaticPage.destroy();
            frmMainMenu.destroy();
            frmNewReg.destroy();
            frmPayment.destroy();
            popFileExplorer.destroy();
            reqdocumentspopus.destroy();
        }
        // Invoke this when you want to know the current layout being used by the App
        //This function is not accessible from Event Editor. 
        layoutManager.isDefaultLayout = function() {
            return isDefaultLayout;
        }
    layoutManager.updateMasterData = function(widgetObj, values) {
        var widgetType = "";
        try {
            widgetType = kony.type(widgetObj);
        } catch (e) {
            //swallow, nothing can be done
            kony.print("layoutManager: Cannot Update Master Data. Error : " + e);
            return;
        }
        kony.print("layoutManager: Master Data update requested for widget type : " + widgetType);
        if (widgetType == "kony.ui.CheckBoxGroup" || widgetType == "kony.ui.RadioButtonGroup" || widgetType == "kony.ui.ComboBox" || widgetType == "kony.ui.ListBox" || widgetType == "kony.ui.PickerView") {
            kony.print("layoutManager: Master Data update supported");
        } else {
            kony.print("layoutManager: Master Data update not supported");
            return;
        }
        kony.print("layoutManager: Checking -- Is Default Layout ? " + arLayoutManager.isDefaultLayout());
        if (!arLayoutManager.isDefaultLayout()) {
            var reverseValues = [];
            try {
                for (var i = (values.length - 1); i >= 0; i--) {
                    reverseValues.push(values[i]);
                }
                kony.print("layoutManager: This is Reverse Layout. Assigning master data in Reverse order");
                widgetObj.masterData = reverseValues;
            } catch (e) {
                // swallow- do nothing
                kony.print("layoutManager: This is Reverse Layout. Assigning master data in AS IS order because of exception " + e);
                widgetObj.masterData = values;
            }
        } else {
            kony.print("layoutManager: This is Default Layout. Assigning master data in AS IS order");
            widgetObj.masterData = values;
        }
    }
    layoutManager.getSliderSelectedValue = function(sliderObj) {
        var currValue = sliderObj.selectedValue;
        if (!arLayoutManager.isDefaultLayout()) {
            var stepVal = sliderObj.step;
            var minVal = sliderObj.min;
            var maxVal = sliderObj.max;
            var reverseValue = maxVal - (currValue - minVal);
            kony.print("layoutManager: Reverse Layout. So returning reverse value: " + reverseValue);
            return reverseValue;
        } else {
            kony.print("layoutManager: Default Layout. So returning actual value: " + currValue);
            return currValue;
        }
    }
    layoutManager.updateSliderSelectedValue = function(sliderObj, newValue) {
        var stepVal = sliderObj.step;
        var minVal = sliderObj.min;
        var maxVal = sliderObj.max;
        if (newValue < minVal || newValue > maxVal) {
            kony.print("Cannot udpate slider value. " + newValue + " not within min-max limits of the slider : " + minVal + "-" + maxVal);
            return;
        }
        if (!arLayoutManager.isDefaultLayout()) {
            var reverseValue = maxVal - (newValue - minVal);
            kony.print("layoutManager: Reverse Layout. So updating reverse value: " + reverseValue);
            sliderObj.selectedValue = reverseValue;
        } else {
            kony.print("layoutManager: Default Layout. So updating actual value: " + newValue);
            sliderObj.selectedValue = newValue;
        }
    }
    layoutManager.updatePageViewSegmentData = function(segmentObj, values) {
        var widgetType = "";
        try {
            widgetType = kony.type(segmentObj);
        } catch (e) {
            //swallow, nothing can be done
            kony.print("layoutManager: Cannot Update Segment Data. Error : " + e);
            return;
        }
        kony.print("layoutManager: Master Data update requested for widget type : " + widgetType + " values:" + JSON.stringify(values));
        if (widgetType == "kony.ui.SegmentUI2") {
            kony.print("layoutManager: Master Data update supported for the segment/view");
        } else {
            kony.print("layoutManager: Master Data update not needed for the widget type/view type");
            return;
        }
        kony.print("layoutManager: Checking -- Is Default Layout ? " + arLayoutManager.isDefaultLayout());
        if (!arLayoutManager.isDefaultLayout()) {
            var reverseValues = [];
            try {
                for (var i = (values.length - 1); i >= 0; i--) {
                    reverseValues.push(values[i]);
                }
                kony.print("layoutManager: This is Reverse Layout. Assigning master data in Reverse order");
                segmentObj.setData(reverseValues);
            } catch (e) {
                // swallow- do nothing
                kony.print("layoutManager: This is Reverse Layout. Assigning master data in AS IS order because of exception " + e);
                segmentObj.setData(values);
            }
        } else {
            kony.print("layoutManager: This is Default Layout. Assigning master data in AS IS order");
            segmentObj.setData(values);
        }
    }
    layoutManager.updateSliderLeftRightSkins = function(sliderObj, leftSkinValue, rightSkinValue) {
        if (!arLayoutManager.isDefaultLayout()) {
            kony.print("layoutManager: This is Reverse Layout. Assigning left/right skins in reverse order");
            sliderObj.leftSkin = rightSkinValue;
            sliderObj.rightSkin = leftSkinValue;
        } else {
            kony.print("layoutManager: This is Default Layout. Assigning left/right skins in AS IS order");
            sliderObj.leftSkin = leftSkinValue;
            sliderObj.rightSkin = rightSkinValue;
        }
    }
    return layoutManager;
}
//Invoke the following function in the post app init - without fail
//This function is accessible from Event Editor
function layoutManagerInit() {
    arLayoutManager = LAYOUTMANAGER.getInstance();
    arLayoutManager.init();
}
// Invoke this when you want to switch to the Default Layout for which the App is designed.
// Example: Invoke this for switching to Left To Right (LTR) Layout (for English)
//This function is accessible from Event Editor
function switchToDefaultLayout(fnCallBack) {
    arLayoutManager.switchToDefaultLayout(fnCallBack);
}
// Invoke this when you want to reverse the default layout of the App
// Example: Invoke this for switching to Right To Left (RTL) Layout (for Arabic)
//This function is accessible from Event Editor
function switchToArabicLayout(fnCallBack) {
    arLayoutManager.switchToArabicLayout(fnCallBack);
}