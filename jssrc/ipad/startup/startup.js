//startup.js file
function MOHESRpreappinit_seq0(params) {
    setArabicLocale.call(this);
    invokeJavaService.call(this);
    NFCSupport.call(this);
};

function MOHESRpostappinit_seq0(params) {
    gblDeviceInfo = "tab";
    layoutManagerInit.call(this);
    switchToArabicLayout.call(this, changeAppLanguageToArabic);
    setMohesrGlobals.call(this);
    if (kony.i18n.isLocaleSupportedByDevice("ar_SA") == false) {
        isArabicLocale = false;
        isArabicSupported = false;
        kony.i18n.setCurrentLocaleAsync("en_US", appInitlocaleEnOnSuccess, appInitlocaleEnOnFailure, null);
        frmLogin.lnklanguage.setVisibility(false);
        return frmLogin;
    }

    function appInitlocaleEnOnSuccess() {
        alert("set to English");
    }

    function appInitlocaleEnOnFailure() {
        kony.print("could not set to English");
    }
    hideDefaultAppLoadingIndicator.call(this);
    setAppIdleTimeOut.call(this);
};
var globalhttpheaders = {};
var appConfig = {
    appId: "MOHESR",
    appName: "MoHESR",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "94.56.136.120",
    serverPort: "9090",
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://94.56.136.120:9090/middleware/MWServlet",
    secureurl: "https://94.56.136.120/middleware/MWServlet"
};
sessionID = "";
isMale = true;
camBase64 = "";
selectedCategory = "";
isArabicLocale = true;
isArabicSupported = true;
isAttestedInside = true;
isAttested = false;
gblDeviceInfo = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializehdrCommon();
    initializehdrNewUsrFrm();
    initializeleftMenuTempCertAttest();
    initializeleftMenuTempCertEquival();
    initializesegmentPopFileHeader();
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
    frmLoginGlobals();
    frmLoginARGlobals();
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
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        preappinit: MOHESRpreappinit_seq0,
        init: appInit,
        postappinit: MOHESRpostappinit_seq0,
        showstartupform: function() {
            frmLoginAR.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
kony.print = function() {
    return;
};