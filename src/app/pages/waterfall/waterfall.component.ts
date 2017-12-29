import { Component, OnInit } from '@angular/core';
import { WaterfallService } from '../../services/waterfall.service';
import { ActivatedRoute } from '@angular/router';
import { Waterfall } from '../../models/waterfall';

@Component({
    selector: 'app-waterfall',
    templateUrl: './waterfall.component.html',
    styleUrls: ['./waterfall.component.css']
})
export class WaterfallComponent implements OnInit {

    public lat:number;
    public lng:number;
    public image:string;
    public waterfall:Waterfall;
    constructor(private waterfallService:WaterfallService,private route:ActivatedRoute) {
        
    }

    ngOnInit() {
        let slug:string;
        slug = this.route.snapshot.params["waterfall"];
        this.loadWaterfall(slug);
        this.route.params.subscribe(
            params=>this.loadWaterfall(params["waterfall"])
        )
    }

    private loadWaterfall(slug:string):void {
        this.waterfallService.waterfall(slug).subscribe(
            waterfall=>{
                this.waterfall=waterfall;
                this.setImage();
                this.lat = +this.waterfall.lat;
                this.lng = +this.waterfall.lon;
            }
        )
    }

    public setImage(index:number=0):void {
        if(this.waterfall!=null)
            this.image = this.waterfall.images[index];
    }

}
