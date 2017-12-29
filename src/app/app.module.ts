import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from './app.component';
import { WaterfallsComponent } from './pages/waterfalls/waterfalls.component';

const routes: Route[] = [
    {
        path:"",
        redirectTo: "waterfalls",
        pathMatch: "full"
    },
    {
        path:"waterfalls",
        component: WaterfallsComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    WaterfallsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
