import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
    id: number;
    value: string;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    items$ = new BehaviorSubject<Item[]>(null);

    array1: Item[] = [
        { id: 1, value: 'Black' },
        { id: 2, value: 'Red' },
        { id: 3, value: 'Blonde' },
        { id: 4, value: 'Brown' },
    ];

    array2: Item[] = [
        // { id: 5, value: 'Ronnie' },
        // { id: 6, value: 'Bobbie' },
        // { id: 7, value: 'Ricky' },
        // { id: 8, value: 'Mike' },
        // { id: 9, value: 'Ralph' },
        // { id: 10, value: 'Johnny' },
    ];

    currentArray = 1;

    constructor() { }

    ngOnInit() {

        // items list first set to values from array1
        this.items$.next(this.array1);

    }

    swap() {
        if (this.currentArray === 1) {
            this.items$.next(this.array2);
            this.currentArray = 2;
        } else {
            this.items$.next(this.array1);
            this.currentArray = 1;
        }
    }

}
