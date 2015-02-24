function setArabicLocale()
{ 
		kony.i18n.setCurrentLocaleAsync("ar_SA", appInitlocaleArOnSuccess, appInitlocaleArOnFailure, null);
}

function appInitlocaleArOnSuccess()
{
	isArabicLocale = true;
	kony.print("set to Arabic");
}

function appInitlocaleArOnFailure()
{
	kony.print("could not set to Arabic");
}

function changeAppLanguageToArabic()
{
	kony.print("Current device locale before changing is : " + kony.i18n.getCurrentDeviceLocale());
	kony.print("Current locale before changing is : " + kony.i18n.getCurrentLocale());
	kony.i18n.setCurrentLocaleAsync("ar_SA", onLocaleArSuccess, onLocaleArFailure, null);
	//kony.i18n.setDefaultLocaleAsync("ar_SA", onDefaultLocaleSuccess, onDefaultLocaleFailure, null);
	kony.print("Current device locale after changing is : " + kony.i18n.getCurrentDeviceLocale());
	kony.print("Current locale after changing is : " + kony.i18n.getCurrentLocale());
}

function onDefaultLocaleSuccess() {
}

function onDefaultLocaleFailure() {
}

function onLocaleArSuccess()
{
	frmLoginAR.show();
	if(gblDeviceInfo=="tab"){
	destroyAllTabletForms()
	}else{
	destroyAllForms();
	loadi18GraStudStep2();
	}
	frmLogin.destroy();
	//theme change here
	//html string for browsers here
	loadi18CurStud();
	loadi18FacMembers();
	loadi18GraStudStep1();
	//loadi18GraStudStep2();
	isArabicLocale = true;
}

function onLocaleArFailure()
{
	//
}

function changeAppLanguageToEnglish()
{
	kony.print("Current device locale before changing is : " + kony.i18n.getCurrentDeviceLocale());
	kony.print("Current locale before changing is : " + kony.i18n.getCurrentLocale());
	kony.i18n.setCurrentLocaleAsync("en_US", onLocaleEnSuccess, onLocaleEnFailure, null);
	//kony.i18n.setDefaultLocaleAsync("en_US", onDefaultLocaleSuccess, onDefaultLocaleFailure, null);
	kony.print("Current device locale After changing is : " + kony.i18n.getCurrentDeviceLocale());
	kony.print("Current locale After changing is : " + kony.i18n.getCurrentLocale());
}

function onLocaleEnSuccess()
{
	frmLogin.show();
	if(gblDeviceInfo=="tab"){
	destroyAllTabletForms()
	}else{
	destroyAllForms();
	loadi18GraStudStep2();
	}
	frmLoginAR.destroy();
	
	//theme change here
	//html string for browsers here
	loadi18CurStud();
	loadi18FacMembers();
	loadi18GraStudStep1();
	//loadi18GraStudStep2();
	isArabicLocale = false;
}

function onLocaleEnFailure()
{
	//
}

function changeThemeToDefault()
{
	kony.theme.setCurrentTheme("default", onEngSuccessCallback, onEngErrorCallback);
	
	function onEngSuccessCallback()
	{
		kony.print("changed theme to default for english");
	}
	
	function onEngErrorCallback()
	{
		kony.print("could not change theme to default");
	}
}


function changeThemeToArabic()
{
	kony.theme.setCurrentTheme("Arabic", onArSuccessCallback, onArErrorCallback);
	
	function onArSuccessCallback()
	{
		kony.print("changed theme to Arabic for arabic");
	}
	
	function onArErrorCallback()
	{
		kony.print("could not change theme to arabic");
	}
}

function changeThemeToLandscape()
{
	kony.theme.setCurrentTheme("landscape", onLdSuccessCallback, onLdErrorCallback);
	
	function onLdSuccessCallback()
	{
		kony.print("changed theme to Arabic for arabic");
	}
	
	function onLdErrorCallback()
	{
		kony.print("could not change theme to arabic");
	}
}