import { LightningElement, api } from 'lwc';

export default class LoadAnyLwc extends LightningElement {
    componentConstructor;
    lwcName;

    @api get componentName() {
        return this.lwcName;
    }

    set componentName(value) {
        this.setAttribute('lwcName', value);
        this.lwcName = value;
        this.handleComponentNameChange();
    }

    handleComponentNameChange() {
        if (this.lwcName) {
            import(`c/${this.lwcName}`)
                .then(({ default: ctor }) => this.componentConstructor = ctor)
                .catch(err => console.log('Error importing component',err));
        }
    }
}