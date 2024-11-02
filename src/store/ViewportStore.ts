// store/viewportStore.ts
import { makeAutoObservable, observable } from 'mobx';

class ViewportStore {
    width: number = window.innerWidth; // Initial width

    constructor() {
        makeAutoObservable(this, {
            width: observable,
        });
        window.addEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.width = window.innerWidth;
    };
}

const viewportStore = new ViewportStore();
export default viewportStore;
