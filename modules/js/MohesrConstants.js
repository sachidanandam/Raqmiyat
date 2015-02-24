function setMohesrGlobals()			//to be used as an identifier for the three flows
{
	category_Graduate = "graduate";
	category_Enrolled = "enrolled";
	category_Faculty = "faculty";
	
}
var gblNfcFlag=false;
var attestSubmenu="";
var gblCurrentLocale = "Tablet";
var gblErrWidgetRefId = "";

var gvWsUsrId = "webservice";
var gvWsPwd = "wEbsErViCe$35#";
var gvAppNo = "";
var gvCretNo = "";
var gvPreCretNo = "";
var gvTranNo = "";
var gvPreTranCretCnt = ""; 
var gvModuleSelect="";
var gvSubModuleSelect="";
var attachalert=false;

var gvNFC="";
var gvIsScanned=0;
var gvScannedCertType="";
var gvScannedInstId=0;
function getCurrentLocale()
{
	gblCurrentLocale = kony.i18n.getCurrentLocale();
	return gblCurrentLocale;
}