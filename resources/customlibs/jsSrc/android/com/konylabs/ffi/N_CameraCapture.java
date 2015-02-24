package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.raq.util.resizeimage.ImageResizeMain;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_CameraCapture extends JSLibrary {

 
	String[] methods = { };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new ImageMainActivity();
 return libs;
 }



	public N_CameraCapture(){
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
		return "CameraCapture";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 


class ImageMainActivity extends JSLibrary {

 
 
	public static final String CaptureImage = "CaptureImage";
 
	String[] methods = { CaptureImage };

	public Object createInstance(final Object[] params) {
 return new com.raq.util.resizeimage.ImageResizeMain(
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
 ret = this.CaptureImage(params[0]
 ,callback0
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
		return "ImageMainActivity";
	}

	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] CaptureImage( Object self ,com.konylabs.vm.Function inputKey0
 ){
 
		Object[] ret = null;
 ((com.raq.util.resizeimage.ImageResizeMain)self).CaptureImage( (com.konylabs.vm.Function)inputKey0
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
}

};
