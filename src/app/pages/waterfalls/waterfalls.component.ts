import { Component, OnInit } from '@angular/core';
import { WaterfallService } from "../../services/waterfall.service";
import { Waterfall } from '../../models/waterfall';
import { Router } from '@angular/router';

@Component({
    selector: 'app-waterfalls',
    templateUrl: './waterfalls.component.html',
    styleUrls: ['./waterfalls.component.css']
})
export class WaterfallsComponent implements OnInit {

    public markers:{lat:number,lng:number,slug:string}[];
    public waterfalls:Waterfall[];
    constructor(private waterfallService: WaterfallService,private router:Router) { }

    ngOnInit() {
        this.waterfallService.waterfalls.subscribe(
            waterfalls => {
                this.waterfalls = waterfalls;
                this.loadMakers();
            }
        );
    }

    private loadMakers():void {
        this.markers = [];
        this.waterfalls.forEach(
            waterfall=>{
                this.markers.push({
                    lat:+waterfall.lat,
                    lng:+waterfall.lon,
                    slug:waterfall.slug
                });
            }
        );
    }

    public openLink(slug:string):void {
        this.router.navigate(["/","waterfall",slug]);
    }

}
