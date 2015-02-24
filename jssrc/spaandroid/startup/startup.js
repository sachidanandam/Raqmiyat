//startup.js file
function MOHESRpreappinit_seq0(params) {
    setArabicLocale.call(this);
    invokeJavaService.call(this);
    NFCSupport.call(this);
};

function MOHESRpostappinit_seq0(params) {
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
var appConfig = {
    appId: "MOHESR",
    appName: "MoHESR",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "94.56.136.117",
    serverPort: "80",
    secureServerPort: null,
    url: "http://94.56.136.117:80/middleware/MWServlet",
    secureurl: "https://94.56.136.117/middleware/MWServlet",
    middlewareContext: "middleware"
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
    initializesegmentPopFileHeader();
    initializefooImg();
    initializeftrCertificateEqiStep1();
    initializeftrCertificateEqiStep2();
    initializeftrGradAttestStep1();
    initializeftrGradAttestStep2();
    initializereqdocsfooter();
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
    frmLoginGlobals();
    frmLoginARGlobals();
    frmMainMenuGlobals();
    frmNewRegGlobals();
    frmPaymentGlobals();
    popFileExplorerGlobals();
    reqdocumentspopusGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
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
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
};
kony.print = function() {
    return;
};