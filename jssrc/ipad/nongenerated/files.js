var segFilesData = [];
var isAlertShown = false;
var hdnFileIndexValue = 0;
var iOSFileBrowseFFIObject;
var imageConversionData;
var imageEncodeData = new Array();
var segDescDelData = [];
var isOld = false;

function retriveImagesFromGallery() {
    var deviceName = kony.os.deviceInfo().name;
    if (deviceName != "android") {
        //Creates an object of class 'ViewController'
        iOSFileBrowseFFIObject = new FileExplorer.iOSFileBrowseFFI();
        //Invokes method 'retriveGalleryPictures' on the object
        iOSFileBrowseFFIObject.retriveGalleryPictures();
    }
}

function imageArrayValues() {
    //Invokes method 'returnArrayValues' on the object
    var returnedValue = iOSFileBrowseFFIObject.returnArrayValues();
    var imageName = new Array();
    imageName = returnedValue["ImageName"];
    imageEncodeData = returnedValue["ImageEncode"];
    var segData = [];
    for (var i = 0; i < imageName.length; i++) {
        segData.push({
            hdnIndex: i,
            lblName: imageName[i],
            imageName: "file.png"
        });
    }
    popFileExplorer.segFiles.setData(segData);
    popFileExplorer.show();
}

function selectedImage() {
    var position = popFileExplorer.segFiles.selectedItems[0]["hdnIndex"];
    imageConversionData = imageEncodeData[position];
}

function showFilesAndFolders() {
    var deviceName = kony.os.deviceInfo().name;
    if (deviceName != "android") {
        imageArrayValues();
    } else {
        var returnedData = FileExplorer.openSDRoot();
        if (returnedData == null || returnedData == "") {
            alert("Insert SD card");
        } else {
            var returnList = returnedData.split("$");
            var segData = [];
            for (var i = 0; i < returnList.length; i++) {
                var conditn = (returnList[i].charAt(returnList[i].length - 1) == "/");
                var txt = conditn ? returnList[i].substring(0, returnList[i].length - 1) : returnList[i];
                var img = conditn ? "folder.png" : "file.png";
                segData.push({
                    hdnIndex: i,
                    lblName: txt,
                    imageName: img
                });
            }
            popFileExplorer.segFiles.setData(segData);
            popFileExplorer.show();
        }
    }
}

function getSubDirectories() {
    var position = popFileExplorer.segFiles.selectedItems[0]["hdnIndex"];
    var deviceName = kony.os.deviceInfo().name;
    var returnedData;
    if (deviceName == "android") {
        returnedData = FileExplorer.openSubFolders(position);
        var returnList = returnedData.split("$");
        kony.print("-getSubDirectories---" + returnList.length);
        if (returnList.length > 1) {
            var segData = [];
            for (var i = 2; i < returnList.length; i++) {
                var conditn = (returnList[i].charAt(returnList[i].length - 1) == "/");
                var txt = conditn ? returnList[i].substring(0, returnList[i].length - 1) : returnList[i];
                var img = conditn ? "folder.png" : "file.png";
                segData.push({
                    hdnIndex: i,
                    lblName: txt,
                    imageName: img
                });
            }
            popFileExplorer.segFiles.setData(segData);
        } else {
            fileselection(returnedData);
        }
    } else {
        var returnedFileName = popFileExplorer.segFiles.selectedItems[0]["lblName"];
        imageConversionData = imageEncodeData[position];
        fileselection(returnedFileName);
    }
}

function fileselection(returnedData) {
    popFileExplorer.dismiss();
    var currentForm = kony.application.getCurrentForm();
    var deviceName = kony.os.deviceInfo().name;
    var returnFileName;
    if (deviceName == "android") {
        var returnFileNameSplit = returnedData.split("/");
        if (returnFileNameSplit.length >= 1) {
            returnFileName = returnFileNameSplit[returnFileNameSplit.length - 1]
        }
    } else {
        returnFileName = returnedData;
        returnedData = imageConversionData;
    }
    if (currentForm.segAttachment.data == null) {
        segFilesData = [];
        isAlertShown = false;
        hdnFileIndexValue = 0;
    }
    if (segFilesData.length != 0) {
        for (var i = 0; i < segFilesData.length; i++) {
            if (segFilesData[i].lblFileName == returnFileName && isAlertShown == false) {
                isAlertShown = true;
                alert("File Already Added " + isAlertShown);
            } else {
                segFilesData.push({
                    hdnFileIndex: hdnFileIndexValue,
                    hdPath: returnedData,
                    lblFileName: returnFileName,
                    imgAttachmentDel: "delete.png"
                });
                hdnFileIndexValue++;
                break;
            }
        }
    } else {
        segFilesData.push({
            hdnFileIndex: hdnFileIndexValue,
            hdPath: returnedData,
            lblFileName: returnFileName,
            imgAttachmentDel: "delete.png"
        });
        hdnFileIndexValue++;
    }
    currentForm.segAttachment.setData(segFilesData);
    gvCertEQuiReqDocCurtDoc++;
    currentForm.txtDescription.text = gvCertEQuiReqDoc[gvCertEQuiReqDocCurtDoc]["lblDescVal"];
}
var gblCounterFileUpload = 0;

function certEquiFileSelection(camObj) {
    if (gvCertEQuiReqDoc.length == 0) {
        alert(kony.i18n.getLocalizedString("lblNoNeedAttach"));
        return;
    }
    if (gblCounterFileUpload <= gvCertEQuiReqDoc.length) {
        returnedData = kony.convertToBase64(camObj.rawBytes);
        var currentForm = kony.application.getCurrentForm();
        var deviceName = kony.os.deviceInfo().name;
        var d = new Date();
        var name = d.getFullYear() + "" + d.getDate() + "" + d.getMonth() + "" + d.getMinutes() + "" + d.getMilliseconds();
        var returnFileName = name;
        if (currentForm.segAttachment.data == null) {
            segFilesData = [];
            isAlertShown = false;
            hdnFileIndexValue = 0;
        }
        if (segFilesData.length != 0) {
            for (var i = 0; i < segFilesData.length; i++) {
                if (segFilesData[i].lblFileName == returnFileName && isAlertShown == false) {
                    isAlertShown = true;
                    alert("File Already Added " + isAlertShown);
                } else {
                    segFilesData.push({
                        hdnFileIndex: hdnFileIndexValue,
                        hdPath: returnedData,
                        lblFileName: returnFileName,
                        imgAttachmentDel: "delete.png"
                    });
                    hdnFileIndexValue++;
                    break;
                }
            }
        } else {
            segFilesData.push({
                hdnFileIndex: hdnFileIndexValue,
                hdPath: returnedData,
                lblFileName: returnFileName,
                imgAttachmentDel: "delete.png"
            });
            hdnFileIndexValue++;
        }
        currentForm.segAttachment.setData(segFilesData);
        if (gblCounterFileUpload < gvCertEQuiReqDoc.length) {
            currentForm.txtDescription.text = gvCertEQuiReqDoc[gblCounterFileUpload]["lblDescVal"];
            gblCounterFileUpload++;
        } else {
            gblCounterFileUpload = 0;
            currentForm.txtDescription.text = gvCertEQuiReqDoc[0]["lblDescVal"];
            //gblCounterFileUpload++;
        }
    } else {
        alert(kony.i18n.getLocalizedString("lblReqDocMsg"));
    }
}
var isCaptureMaxlengthExceeds;

function certFileSelection(camObj) {
    returnedData = kony.convertToBase64(camObj.rawBytes);
    var attachLength = returnedData.toString().length;
    if (attachLength > 3145728) {
        isCaptureMaxlengthExceeds = true;
    } else {
        isCaptureMaxlengthExceeds = false;
    }
    var currentForm = kony.application.getCurrentForm();
    var deviceName = kony.os.deviceInfo().name;
    var d = new Date();
    var name = d.getFullYear() + "" + d.getDate() + "" + d.getMonth() + "" + d.getMinutes() + "" + d.getMilliseconds();
    var returnFileName = name;
    if (currentForm.segAttachment.data == null) {
        segFilesData = [];
        isAlertShown = false;
        hdnFileIndexValue = 0;
    }
    if (segFilesData.length != 0) {
        for (var i = 0; i < segFilesData.length; i++) {
            if (segFilesData[i].lblFileName == returnFileName && isAlertShown == false) {
                isAlertShown = true;
                alert("File Already Added " + isAlertShown);
            } else {
                segFilesData.push({
                    hdnFileIndex: hdnFileIndexValue,
                    hdPath: returnedData,
                    lblFileName: returnFileName,
                    imgAttachmentDel: "delete.png"
                });
                hdnFileIndexValue++;
                break;
            }
        }
    } else {
        segFilesData.push({
            hdnFileIndex: hdnFileIndexValue,
            hdPath: returnedData,
            lblFileName: returnFileName,
            imgAttachmentDel: "delete.png"
        });
        hdnFileIndexValue++;
    }
    currentForm.segAttachment.setData(segFilesData);
    // currentForm.hbxcaptureimage.setVisibility(false);
}

function homePressed() {
    var returnedData = FileExplorer.openSDRoot();
    var returnList = returnedData.split("$");
    var segData = [];
    for (var i = 0; i < returnList.length; i++) {
        var conditn = (returnList[i].charAt(returnList[i].length - 1) == "/");
        var txt = conditn ? returnList[i].substring(0, returnList[i].length - 1) : returnList[i];
        var img = conditn ? "folder.png" : "file.png";
        segData.push({
            hdnIndex: i,
            lblName: txt,
            imageName: img
        });
    }
    popFileExplorer.segFiles.setData(segData);
}

function backPressed() {
    var returnedData = FileExplorer.openSubFolders(1);
    var returnedRootData = FileExplorer.openSDRoot();
    var returnRootList = returnedRootData.split("$");
    var returnList = returnedData.split("$");
    var segData = [];
    if (returnList.length > 2) {
        if (returnList.length == returnRootList.length) {
            for (var i = 0; i < returnList.length; i++) {
                var conditn = (returnList[i].charAt(returnList[i].length - 1) == "/");
                var txt = conditn ? returnList[i].substring(0, returnList[i].length - 1) : returnList[i];
                var img = conditn ? "folder.png" : "file.png";
                segData.push({
                    hdnIndex: i,
                    lblName: txt,
                    imageName: img
                });
            }
            popFileExplorer.segFiles.setData(segData);
        } else {
            for (var i = 2; i < returnList.length; i++) {
                var conditn = (returnList[i].charAt(returnList[i].length - 1) == "/");
                var txt = conditn ? returnList[i].substring(0, returnList[i].length - 1) : returnList[i];
                var img = conditn ? "folder.png" : "file.png";
                segData.push({
                    hdnIndex: i,
                    lblName: txt,
                    imageName: img
                });
            }
            popFileExplorer.segFiles.setData(segData);
        }
    } else if (returnList.length > 1) {
        var returnedData = FileExplorer.openSDRoot();
        var returnList = returnedData.split("$");
        var segData = [];
        for (var i = 0; i < returnList.length; i++) {
            var conditn = (returnList[i].charAt(returnList[i].length - 1) == "/");
            var txt = conditn ? returnList[i].substring(0, returnList[i].length - 1) : returnList[i];
            var img = conditn ? "folder.png" : "file.png";
            segData.push({
                hdnIndex: i,
                lblName: txt,
                imageName: img
            });
        }
        popFileExplorer.segFiles.setData(segData);
    } else {
        fileselection(returnedData);
    }
}

function removeFile() {
    showConfirmationMsgWithHandle("removeConfMsg", removeFileAlertCb, "lblYes", "lblNo");
}

function removeFileAlertCb(flag) {
    if (flag != true) return;
    kony.print("removeFile Entered");
    var currentForm = kony.application.getCurrentForm();
    var position = currentForm.segAttachment.selectedIndex[1];
    kony.print("removeFile position " + position);
    var segData = currentForm.segAttachment.data;
    ///*
    segDescDelData.push({
        hdDesc: segData[position]["hdFileDesc"]
    });
    //*/
    currentForm.txtDescription.text = segData[position]["hdFileDesc"];
    currentForm.segAttachment.removeAt(position);
    //gblCamObj.splice(position, 1);
    segFilesData.splice(position, 1);
    //gblCounterFileUpload--;
    // currentForm.hbxcaptureimage.setVisibility(true);
    isOld = true;
    if (currentForm.segAttachment.data == null || currentForm.segAttachment.data == "" || currentForm.segAttachment.data.length == 0) {
        gblCounterFileUpload = 0;
        currentForm.txtDescription.text = gvCertEQuiReqDoc[gblCounterFileUpload]["lblDescVal"];
        isOld = false;
    }
}

function camerafficall() {
    try {
        kony.print("Heap Before FFI Call fficall=>" + kony.os.freeMemory());
        //Creates an object of class 'ImageMainActivity'
        var ImageMainActivityObject = new CameraCapture.ImageMainActivity();
        //Invokes method 'CaptureImage' on the object
        ImageMainActivityObject.CaptureImage(cameracallback);
    } catch (err) {
        kony.print("error while call :" + err);
    }
}

function cameracallback(returnedData) {
    //    alert("result" + result);
    kony.print("Heap After FFI Call callback=>" + kony.os.freeMemory());
    var currentForm = kony.application.getCurrentForm();
    /*
    if(result!=null || result!=""){
    	kony.print("--result-111-"+result.length);
    	kony.print("--result-222-"+result.toString().length);
    	kony.print("--result--"+result);
	    kony.print("Success=>"+kony.os.freeMemory());
	    alert("success");
    } else { 
	    kony.print("Failure");
	    alert("failure");
    }
    kony.print("Heap After FFI Call Final=>"+kony.os.freeMemory());
    */
    if (returnedData != null || returnedData != "") {
        if (gvCertEQuiReqDoc.length == 0) {
            alert(kony.i18n.getLocalizedString("lblNoNeedAttach"));
            return;
        }
        if (gblCounterFileUpload <= gvCertEQuiReqDoc.length) {
            var deviceName = kony.os.deviceInfo().name;
            var d = new Date();
            var name = d.getFullYear() + "" + d.getDate() + "" + d.getMonth() + "" + d.getMinutes() + "" + d.getMilliseconds();
            var returnFileName = name;
            if (currentForm.segAttachment.data == null) {
                segFilesData = [];
                isAlertShown = false;
                hdnFileIndexValue = 0;
            }
            /*if(segFilesData.length!=0){
					for(var i=0;i<segFilesData.length;i++){
						if(segFilesData[i].lblFileName==returnFileName && isAlertShown == false){
							isAlertShown = true;
							alert("File Already Added "+isAlertShown);
						} else{
							segFilesData.push({
											hdnFileIndex : hdnFileIndexValue,
											hdPath : returnedData.toString(),
											hdDesc : currentForm.txtDescription.text,
							                lblFileName : returnFileName,
							                imgAttachmentDel : "delete.png"
					    			});
					    	hdnFileIndexValue++;
					    	break;
						}
					}
				}else{*/
            segFilesData.push({
                hdnFileIndex: hdnFileIndexValue,
                hdPath: returnedData.toString(),
                hdFileDesc: currentForm.txtDescription.text,
                lblFileName: returnFileName,
                imgAttachmentDel: "delete.png"
            });
            hdnFileIndexValue++;
            //}
            currentForm.segAttachment.setData(segFilesData);
            currentForm.segAttachment.setVisibility(true);
            returnedData = null;
            // kony.print("gblCounterFileUpload-->>"+gblCounterFileUpload+"-----"+gvCertEQuiReqDoc.length);
            if (isOld == false) {
                if (gblCounterFileUpload == 0) {
                    gblCounterFileUpload = 1;
                    currentForm.txtDescription.text = gvCertEQuiReqDoc[gblCounterFileUpload]["lblDescVal"];
                    gblCounterFileUpload++;
                } else if (gblCounterFileUpload < gvCertEQuiReqDoc.length) {
                    currentForm.txtDescription.text = gvCertEQuiReqDoc[gblCounterFileUpload]["lblDescVal"];
                    gblCounterFileUpload++;
                } else if (gblCounterFileUpload == gvCertEQuiReqDoc.length) {
                    currentForm.txtDescription.text = "";
                    currentForm.lblDescription.setVisibility(false);
                    currentForm.txtDescription.setVisibility(false);
                    currentForm.hbxcaptureimage.setVisibility(false);
                }
            } else {
                if (segDescDelData.length == 0) {
                    currentForm.txtDescription.text = gvCertEQuiReqDoc[gblCounterFileUpload]["lblDescVal"];
                    isOld = false;
                } else {
                    currentForm.txtDescription.text = segDescDelData[0]["hdDesc"];
                    segDescDelData.splice(0, 1);
                }
            }
        } else {
            alert(kony.i18n.getLocalizedString("lblReqDocMsg"));
        }
    }
}