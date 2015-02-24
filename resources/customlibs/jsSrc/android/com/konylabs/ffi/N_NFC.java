package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.raqmiyat.nfc.NFCMain;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_NFC extends JSLibrary {

 
	String[] methods = { };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new NFCMain();
 return libs;
 }



	public N_NFC(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "NFC";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 


class NFCMain extends JSLibrary {

 
 
	public static final String Read = "Read";
 
 
	public static final String NFCStatus = "NFCStatus";
 
 
	public static final String CheckNFCSupport = "CheckNFCSupport";
 
	String[] methods = { Read, NFCStatus, CheckNFCSupport };

	public Object createInstance(final Object[] params) {
 return new com.raqmiyat.nfc.NFCMain(
 );
 }


	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.Function callback0 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 callback0 = (com.konylabs.vm.Function)params[0+inc];
 }
 ret = this.Read(params[0]
 ,callback0
 );
 
 			break;
 		case 1:
 if (paramLen < 0 || paramLen > 1){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 ret = this.NFCStatus(params[0]
 );
 
 			break;
 		case 2:
 if (paramLen < 0 || paramLen > 1){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 ret = this.CheckNFCSupport(params[0]
 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "NFCMain";
	}

	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] Read( Object self ,com.konylabs.vm.Function inputKey0
 ){
 
		Object[] ret = null;
 ((com.raqmiyat.nfc.NFCMain)self).Read( (com.konylabs.vm.Function)inputKey0
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] NFCStatus( Object self ){
 
		Object[] ret = null;
 Double val = new Double(((com.raqmiyat.nfc.NFCMain)self).NFCStatus( ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] CheckNFCSupport( Object self ){
 
		Object[] ret = null;
 Double val = new Double(((com.raqmiyat.nfc.NFCMain)self).CheckNFCSupport( ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
}

};
