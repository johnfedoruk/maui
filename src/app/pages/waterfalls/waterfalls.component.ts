import { Component, OnInit } from '@angular/core';
import { WaterfallService } from "../../services/waterfall.service";
import { Waterfall } from '../../models/waterfall';

@Component({
    selector: 'app-waterfalls',
    templateUrl: './waterfalls.component.html',
    styleUrls: ['./waterfalls.component.css']
})
export class WaterfallsComponent implements OnInit {

    public waterfalls:Waterfall[];
    constructor(private waterfallService: WaterfallService) { }

    ngOnInit() {
        this.waterfallService.waterfalls.subscribe(
            waterfalls => this.waterfalls = waterfalls
        );
    }

}
