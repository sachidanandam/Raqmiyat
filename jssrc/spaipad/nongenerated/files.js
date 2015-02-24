var segFilesData = [];
var isAlertShown = false;
var hdnFileIndexValue = 0;
var iOSFileBrowseFFIObject;
var imageConversionData;
var imageEncodeData = new Array();

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
    currentForm.segAttachment.removeAt(position);
    segFilesData.splice(position, 1);
}