import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Waterfall } from '../models/waterfall';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable()
export class WaterfallService {

    private _waterfalls:Waterfall[];
    private waterfalls$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http:Http) {
        this.http.get("/assets/data/waterfalls.json").subscribe(
            data => {
                this._waterfalls = data.json();
                this.waterfalls$.next(true);
            }
        )
    }

    public get waterfalls():Observable<Waterfall[]> {
        return new Observable<Waterfall[]>(
            observer => {
                this.waterfalls$.subscribe(
                    loaded=> {
                        if(loaded==true) {
                            observer.next(this._waterfalls);
                            observer.complete();
                        }
                    }
                )
            }
        )
    }

    public waterfall(slug:string):Observable<Waterfall> {
        return new Observable<Waterfall>(
            observer => {
                this.waterfalls.subscribe(
                    waterfalls => {
                        let waterfall = waterfalls.find(waterfall=>waterfall.slug==slug);
                        observer.next(waterfall);
                        observer.complete();
                    }
                )
            }
        )
    }
}
