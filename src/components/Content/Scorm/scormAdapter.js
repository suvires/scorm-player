class scormAdapter {

    constructor(id, state, dispatch, updateContentProgress) {
        this.id = id;        
        this.state = state;
        this.dispatch = dispatch;
        this.updateContentProgress = updateContentProgress;
    }

	LMSInitialize() {  
        //console.log("LMSInitialize"); 
        return; 
    }

    LMSSetValue(_parameter, value) {  
        //console.log("LMSSetValue"); 
        //console.log(_parameter);
        //console.log(value);
        if (_parameter !== "cmi.suspend_data" && _parameter !== "cmi.core.score.raw") {            
            return true;
        }        
        
        if (_parameter === "cmi.core.score.raw") {   
            //console.log('Updating content progress to ' + value);                                    
            this.dispatch(this.updateContentProgress({id: this.id, progress: value}));				            
        }
        
        if (_parameter === "cmi.suspend_data") {   
            //console.log("Updating suspend data");
            this.state.contents[this.id].suspend_data = value
        }
        
        return; 
    }

    LMSGetValue(_parameter) {
        //console.log("LMSGetValue ");
        //console.log(_parameter);

        let value = "";

        if (_parameter === "cmi.suspend_data") {
            value = this.state.contents[this.id].suspend_data;
        } 

        return value;
     }

     LMSGetLastError() {  
        //console.log("LMSGetLastError"); 
        return; 
    }

     LMSGetErrorString() {  
        //console.log("LMSInitialize"); 
        return; 
    }

    LMSGetDiagnostic() {  
        //console.log("LMSGetDiagnostic"); 
        return; 
    }

    LMSCommit() {  
        //console.log("LMSCommit"); 
        return; 
    }

    LMSFinish() {  
        //console.log("LMSFinish"); 
        return; 
    }

}

export default scormAdapter