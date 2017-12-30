import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private router:Router) {}
    public ngOnInit():void {
        this.router.events.subscribe(
            (event:RouterEvent) => {
                if(event instanceof NavigationEnd)
                    setTimeout(()=>document.body.scrollTop = 0,10)
            }
        )
    }
    title = 'app';
}
