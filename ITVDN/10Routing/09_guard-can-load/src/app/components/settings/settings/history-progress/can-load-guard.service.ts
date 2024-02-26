import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CanLoadGuard implements CanLoad{

    constructor() { }

    canLoad(){
        return true;
    }

}
