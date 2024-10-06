import { LightningElement, track, wire } from 'lwc';
import getConfigurations from '@salesforce/apex/LWCConfigurationService.getConfigurations';
export default class MultiPageLwc extends LightningElement {
    @track pages = [];
    @track currentPageIndex = 0;

    @wire(getConfigurations)
    wiredConfigs({ error, data }) {
        if (data) {
            this.pages = data;
            this.currentPageIndex = 0;
        } else if (error) {
            console.error(error);
        }
    }

    get currentPage() {
        return this.pages[this.currentPageIndex];
    }

    handlePrevious() {
        if (this.currentPageIndex > 0) {
            this.currentPageIndex--;
        }
    }

    handleNext() {
        if (this.currentPageIndex < (this.pages.length - 1)) {
            this.currentPageIndex++;
        }
    }
}