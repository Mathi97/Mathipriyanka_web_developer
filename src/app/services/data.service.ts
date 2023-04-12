import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
    public selectedSlot: any;
    public dateInfo: any;
    constructor() {
    }



}
