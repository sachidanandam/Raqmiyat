function popupCertificateEqui() {
    //Displaying Popups in Certificate Equivalency in frmMenu
    var context1 = {
        "widget": hboxHdrMain.hboxHdrMenu2,
        "anchor": "bottom",
        "sizetoanchorwidth": true
    };
    popUpCertEquivalency.setContext(context1);
    popUpCertEquivalency.show();
}

function popupCertificateAttest() {
    //Displaying Popups in Certificate Attestation in frmMenu
    var context1 = {
        "widget": hboxHdrMain.hboxHdrMenu1,
        "anchor": "bottom",
        "sizetoanchorwidth": true
    };
    popPortraitAttestHeader.setContext(context1);
    popPortraitAttestHeader.show();
}