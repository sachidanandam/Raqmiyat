// Auto generated layout manager module. Do not Modify
var LAYOUTMANAGER = LAYOUTMANAGER || {}


LAYOUTMANAGER.getInstance = function() {


//*********************Private Properties and Methods****************************//
var isDefaultLayout = true;


//*********************Public Properties and Methods****************************//
var layoutManager = {}


//Invoke the following function in the post app init - without fail
//This function is not accessible from Event Editor. See below for alternative API that will be accessible from Event Editor
layoutManager.init = function(){
isDefaultLayout = true;
kony.print("layoutManager : init successful");
}


// Invoke this when you want to switch to the Default Layout for which the App is designed.
// Example: Invoke this for switching to Left To Right (LTR) Layout (for English)
//This function is not accessible from Event Editor. See below for alternative API that will be accessible from Event Editor
layoutManager.switchToDefaultLayout = function(fnCallBack){
kony.print("layoutManager : switchToDefaultLayout : starts");

isDefaultLayout = true;

// Destroy all un necessary data in the current layout
this.destroyForms();

// Re Assign forms/templates to original layout
// Create all the templates specific to En Layout
initializehdrCommon(); 
initializehdrNewUsrFrm(); 
initializeleftMenuTempCertAttest(); 
initializeleftMenuTempCertEquival(); 
initializesegmentPopFileHeader(); 
// Create all the forms specific to En Layout
frmApplicationInquiryStatusGlobals();
frmApplicationStatusGlobals();
frmApplicationStatusDetailsGlobals();
frmApplicationSubmitGlobals();
frmAttestGrad1Globals();
frmCertEnquApplicationSubmitGlobals();
frmCertEquivalencyTab1Globals();
frmCertEquivalencyTab2Globals();
frmCertEquivalStaticPageGlobals();
frmCertificateEquivalencyLandingGlobals();
frmCertRequestGlobals();
frmCommitteesDecisionStaticPgGlobals();
frmCurntStudStaticGlobals();
frmFacultyStaticGlobals();
frmFahimGlobals();
frmGradStaticPage1Globals();
frmInquireAboutInstStaticPageGlobals();
frmIntermediateGlobals();
frmMainMenuGlobals();
frmMainMenubkGlobals();
frmMasterPgGlobals();
frmNewRegGlobals();
frmPaymentGlobals();
popAttachmentConfirmationGlobals();
popFileExplorerGlobals();
poplandattestGlobals();
popPortraitAttestHeaderGlobals();
popUpCertEquivalencyGlobals();
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
layoutManager.switchToArabicLayout = function(fnCallBack){
kony.print("layoutManager : switchToArabicLayout : starts");

isDefaultLayout = false;

// Destroy all un necessary data in the current layout
this.destroyForms();

// Create all the templates specific to Ar Layout
initializehdrCommonAr(); 
initializehdrNewUsrFrmAr(); 
initializeleftMenuTempCertAttestAr(); 
initializeleftMenuTempCertEquivalAr(); 
initializesegmentPopFileHeaderAr(); 


// Re Assign original template variables to Ar objects
hboxHdrMain = hboxHdrMainAr;
hbox17257961466800 = hbox17257961466800Ar;
hboxnewhdrtitle = hboxnewhdrtitleAr;
hbxhdrCertificateAttest = hbxhdrCertificateAttestAr;
hbxhdrCertificateEqui = hbxhdrCertificateEquiAr;
hboxFileBrowseHeader = hboxFileBrowseHeaderAr;


// Create all the forms specific to Ar Layout
frmApplicationInquiryStatusGlobalsAr();
frmApplicationStatusGlobalsAr();
frmApplicationStatusDetailsGlobalsAr();
frmApplicationSubmitGlobalsAr();
frmAttestGrad1GlobalsAr();
frmCertEnquApplicationSubmitGlobalsAr();
frmCertEquivalencyTab1GlobalsAr();
frmCertEquivalencyTab2GlobalsAr();
frmCertEquivalStaticPageGlobalsAr();
frmCertificateEquivalencyLandingGlobalsAr();
frmCertRequestGlobalsAr();
frmCommitteesDecisionStaticPgGlobalsAr();
frmCurntStudStaticGlobalsAr();
frmFacultyStaticGlobalsAr();
frmFahimGlobalsAr();
frmGradStaticPage1GlobalsAr();
frmInquireAboutInstStaticPageGlobalsAr();
frmIntermediateGlobalsAr();
frmMainMenuGlobalsAr();
frmMainMenubkGlobalsAr();
frmMasterPgGlobalsAr();
frmNewRegGlobalsAr();
frmPaymentGlobalsAr();
popAttachmentConfirmationGlobalsAr();
popFileExplorerGlobalsAr();
poplandattestGlobalsAr();
popPortraitAttestHeaderGlobalsAr();
popUpCertEquivalencyGlobalsAr();
reqdocumentspopusGlobalsAr();
// Provision for Manually Duplicated forms in Ar Layout


// Re Assign original forms variables to Ar objects
frmApplicationInquiryStatus = frmApplicationInquiryStatusAr;
frmApplicationStatus = frmApplicationStatusAr;
frmApplicationStatusDetails = frmApplicationStatusDetailsAr;
frmApplicationSubmit = frmApplicationSubmitAr;
frmAttestGrad1 = frmAttestGrad1Ar;
frmCertEnquApplicationSubmit = frmCertEnquApplicationSubmitAr;
frmCertEquivalencyTab1 = frmCertEquivalencyTab1Ar;
frmCertEquivalencyTab2 = frmCertEquivalencyTab2Ar;
frmCertEquivalStaticPage = frmCertEquivalStaticPageAr;
frmCertificateEquivalencyLanding = frmCertificateEquivalencyLandingAr;
frmCertRequest = frmCertRequestAr;
frmCommitteesDecisionStaticPg = frmCommitteesDecisionStaticPgAr;
frmCurntStudStatic = frmCurntStudStaticAr;
frmFacultyStatic = frmFacultyStaticAr;
frmFahim = frmFahimAr;
frmGradStaticPage1 = frmGradStaticPage1Ar;
frmInquireAboutInstStaticPage = frmInquireAboutInstStaticPageAr;
frmIntermediate = frmIntermediateAr;
frmMainMenu = frmMainMenuAr;
frmMainMenubk = frmMainMenubkAr;
frmMasterPg = frmMasterPgAr;
frmNewReg = frmNewRegAr;
frmPayment = frmPaymentAr;
popAttachmentConfirmation = popAttachmentConfirmationAr;
popFileExplorer = popFileExplorerAr;
poplandattest = poplandattestAr;
popPortraitAttestHeader = popPortraitAttestHeaderAr;
popUpCertEquivalency = popUpCertEquivalencyAr;
reqdocumentspopus = reqdocumentspopusAr;
// Provision for Manually Duplicated forms in Ar Layout

kony.print("layoutManager : switchToArabicLayout : ends");
// Proceed with user defined logic after layout reversal
fnCallBack();
}

// This function is used to destroy all the forms of the application
layoutManager.destroyForms = function(){
kony.print("Inside the destroy forms function");
frmApplicationInquiryStatus.destroy();
frmApplicationStatus.destroy();
frmApplicationStatusDetails.destroy();
frmApplicationSubmit.destroy();
frmAttestGrad1.destroy();
frmCertEnquApplicationSubmit.destroy();
frmCertEquivalencyTab1.destroy();
frmCertEquivalencyTab2.destroy();
frmCertEquivalStaticPage.destroy();
frmCertificateEquivalencyLanding.destroy();
frmCertRequest.destroy();
frmCommitteesDecisionStaticPg.destroy();
frmCurntStudStatic.destroy();
frmFacultyStatic.destroy();
frmFahim.destroy();
frmGradStaticPage1.destroy();
frmInquireAboutInstStaticPage.destroy();
frmIntermediate.destroy();
frmMainMenu.destroy();
frmMainMenubk.destroy();
frmMasterPg.destroy();
frmNewReg.destroy();
frmPayment.destroy();
popAttachmentConfirmation.destroy();
popFileExplorer.destroy();
poplandattest.destroy();
popPortraitAttestHeader.destroy();
popUpCertEquivalency.destroy();
reqdocumentspopus.destroy();
}


// Invoke this when you want to know the current layout being used by the App
//This function is not accessible from Event Editor. 
layoutManager.isDefaultLayout = function(){
return isDefaultLayout;
}




layoutManager.updateMasterData = function(widgetObj, values){
var widgetType = "";
try {
	widgetType = kony.type(widgetObj);
}catch (e) {	
	//swallow, nothing can be done
	kony.print("layoutManager: Cannot Update Master Data. Error : " + e);
	return;
}
kony.print("layoutManager: Master Data update requested for widget type : " + widgetType);
if (widgetType == "kony.ui.CheckBoxGroup" || 
	widgetType == "kony.ui.RadioButtonGroup" ||
	widgetType == "kony.ui.ComboBox" ||
	widgetType == "kony.ui.ListBox" ||
	widgetType == "kony.ui.PickerView") {
kony.print("layoutManager: Master Data update supported");
} else {
	kony.print("layoutManager: Master Data update not supported");
	return;
}
kony.print("layoutManager: Checking -- Is Default Layout ? " + arLayoutManager.isDefaultLayout());
if (!arLayoutManager.isDefaultLayout()) {
	var reverseValues = [];
	try {
		for (var i=(values.length-1);i>=0;i--) {
			reverseValues.push(values[i]);
		}
	kony.print("layoutManager: This is Reverse Layout. Assigning master data in Reverse order");
	widgetObj.masterData = reverseValues;
	}catch (e) {
	// swallow- do nothing
	kony.print("layoutManager: This is Reverse Layout. Assigning master data in AS IS order because of exception " + e);
		widgetObj.masterData = values;
	}
}else {
	kony.print("layoutManager: This is Default Layout. Assigning master data in AS IS order");
	widgetObj.masterData = values;
}
}




layoutManager.getSliderSelectedValue = function(sliderObj){
	var currValue = sliderObj.selectedValue;
	if (!arLayoutManager.isDefaultLayout()) {
		var stepVal = sliderObj.step;
		var minVal = sliderObj.min;
		var maxVal = sliderObj.max;
		var reverseValue = maxVal - (currValue-minVal);
		kony.print("layoutManager: Reverse Layout. So returning reverse value: " + reverseValue);
		return reverseValue;
	} else {
		kony.print("layoutManager: Default Layout. So returning actual value: " + currValue);
		return currValue;
	}
}
layoutManager.updateSliderSelectedValue = function(sliderObj, newValue){
	var stepVal = sliderObj.step;
	var minVal = sliderObj.min;
	var maxVal = sliderObj.max;
	if (newValue<minVal || newValue>maxVal) {
		kony.print("Cannot udpate slider value. " + newValue +" not within min-max limits of the slider : " +minVal+"-"+maxVal);
		return;
	}
	if (!arLayoutManager.isDefaultLayout()) {
		var reverseValue = maxVal - (newValue-minVal);
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
}catch (e) {	
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
		for (var i=(values.length-1);i>=0;i--) {
			reverseValues.push(values[i]);
		}
	kony.print("layoutManager: This is Reverse Layout. Assigning master data in Reverse order");
	segmentObj.setData(reverseValues);
	}catch (e) {
	// swallow- do nothing
	kony.print("layoutManager: This is Reverse Layout. Assigning master data in AS IS order because of exception " + e);
		segmentObj.setData(values);
	}
}else {
	kony.print("layoutManager: This is Default Layout. Assigning master data in AS IS order");
	segmentObj.setData(values);
}
}




layoutManager.updateSliderLeftRightSkins = function(sliderObj, leftSkinValue, rightSkinValue) {
	if (!arLayoutManager.isDefaultLayout()) {
		kony.print("layoutManager: This is Reverse Layout. Assigning left/right skins in reverse order");
		sliderObj.leftSkin = rightSkinValue;
		sliderObj.rightSkin = leftSkinValue;
	}else {
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
