import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
// import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
// import {InMemoryDataService} from "./service/in-memory-data.service";

import './rxjs-extensions';
/**
 * Created by student on 9/20/2016.
 */

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}