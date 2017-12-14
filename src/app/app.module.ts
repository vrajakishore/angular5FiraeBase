import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyDJdilflWhwTXcx2u_lZ_l9w6ilC7BvBVs",
  authDomain: "myrooster-70111.firebaseapp.com",
  databaseURL: "https://myrooster-70111.firebaseio.com",
  projectId: "myrooster-70111",
  storageBucket: "",
  messagingSenderId: "188965762142"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule                            // And this
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
