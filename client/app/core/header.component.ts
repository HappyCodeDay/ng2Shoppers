import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: "so-header",
    templateUrl: "../app/core/header.component.html"
})
export class HeaderComponent implements OnInit{
    get isLoggedIn(): boolean{
        return this.authenticationService.IsLoggedIn;
    }

    constructor(private authenticationService: AuthenticationService){
        
    }   

    ngOnInit(){
        this.authenticationService.checkCredentials();
        // if(this.authenticationService.IsLoggedIn)
        // {
        //     this.isLoggedIn = true;
        // }
        // else
        // {
        //     this.isLoggedIn = false;
        // }
    }

    logout(){
        this.authenticationService.logout();
        // this.isLoggedIn = false;
    }
}