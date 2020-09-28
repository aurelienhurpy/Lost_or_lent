import { Subject } from 'rxjs';

export class UIService{

    loadingStateChanges = new Subject<boolean>();

}