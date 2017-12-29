import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from './app.component';
import { WaterfallsComponent } from './pages/waterfalls/waterfalls.component';
import { HttpModule } from '@angular/http';
import { WaterfallService } from './services/waterfall.service';
import { WaterfallComponent } from './pages/waterfall/waterfall.component';

import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';


const routes: Route[] = [
    {
        path: "",
        redirectTo: "waterfalls",
        pathMatch: "full"
    },
    {
        path: "waterfalls",
        component: WaterfallsComponent
    },
    {
        path: "waterfall/:waterfall",
        component: WaterfallComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        WaterfallsComponent,
        WaterfallComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: environment.maps
        })
    ],
    providers: [
        WaterfallService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
