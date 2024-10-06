import { LightningElement, track } from 'lwc';

export default class HelloExpressions extends LightningElement {

    @track firstNameValue;
    @track lastNameValue;
    @track upperCasedNameValue;

    updateName(event){
        try{
            let eventName = event.target.name;
            if(eventName=='first-name'){
                this.firstNameValue = event.target.value;
            }else{
                this.lastNameValue = event.target.value;
            }
            this.firstNameValue = (this.firstNameValue != undefined || this.firstNameValue != null) ? this.firstNameValue : '';
            this.lastNameValue = (this.lastNameValue != undefined || this.lastNameValue != null) ? this.lastNameValue : '';
            this.upperCasedNameValue = this.firstNameValue.toUpperCase() + ' ' + this.lastNameValue.toUpperCase();
        }catch(e){
            console.log('Error in updateName catch Block');
            console.log(e.message);
        }
    }
}