import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getDataMethod() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }
}
