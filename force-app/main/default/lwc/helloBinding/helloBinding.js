import { LightningElement, track } from 'lwc';

export default class HelloBinding extends LightningElement {

    @track inputValue;
    @track helloNameValue;

    updateName(event){
        try{
            let inputValue = event.target.value;
            if(inputValue != undefined || inputValue != null){
                this.helloNameValue = `Hello ${inputValue.toUpperCase()} !!!`;
            }
        }catch(e){
            console.log('Inside catch block of updateName');
            console.log(e.message);
        }
    }
}