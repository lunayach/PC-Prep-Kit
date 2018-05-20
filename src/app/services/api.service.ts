import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class APIService {

  private _headers: HttpHeaders;
  private _localStorageKey = environment.localStorageKey;

  constructor(private _http: HttpClient) {
  }

  /**
   * Set generic headers for all requests
   */
  private _setHeaders() {
    this._headers = new HttpHeaders();
    this._headers.append('Content-Type', 'application/json');
    this._headers.append('Accept', 'application/json');
    this.setTokenHeader();
  }

  /**
   * Perform GET request
   * @param  {string}          url URL of the API
   * @return {Observable<any>}     Return response
   */
  public get(url: string): Observable<any> {
    this._setHeaders();
    return this._http.get(url, {headers: this._headers}).pipe(
      catchError(this._handleError));
  }

  /**
   * Perform POST request
   * @param  {string}          url  URL of the API
   * @param  {Object}          body Request body
   * @return {Observable<any>}      Return response
   */
  public post(url: string, body: Object): Observable<any> {
    this._setHeaders();
    return this._http.post(url, body, {headers: this._headers}).pipe(
      catchError(this._handleError));
  }

  /**
   * Perform POST with a File request
   * @param  {string}          url  URL of the API
   * @param  {Object}          body Request body
   * @return {Observable<any>}      Return response
   */
  public postFile(url: string, body: Object): Observable<any> {
    // Need new header object for this API call
    this._headers = new HttpHeaders();
    this.setTokenHeader();
    return this._http.post(url, body, {headers: this._headers}).pipe(
      catchError(this._handleError));
  }

  /**
   * Perform PUT request
   * @param  {string}          url  URL of the API
   * @param  {Object}          body Request body
   * @return {Observable<any>}      Return response
   */
  public put(url: string, body: Object): Observable<any> {
    this._setHeaders();
    return this._http.put(url, body, {headers: this._headers}).pipe(
      catchError(this._handleError));
  }

  /**
   * Perform PATCH request
   * @param  {string}          url  URL of the API
   * @param  {Object}          body Request body
   * @return {Observable<any>}      Return response
   */
  public patch(url: string, body: Object): Observable<any> {
    this._setHeaders();
    return this._http.patch(url, body, {headers: this._headers}).pipe(
      catchError(this._handleError));
  }

  /**
   * Generic error handle
   * @param {Response} error Response object
   */
  // Made error handling more robust
  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  /**
   * Set Token header
   */
  private setTokenHeader() {
    const token = localStorage.getItem(this._localStorageKey);
    if (token) {
      this._headers.append('x-access-token', token);
    }
  }
}
