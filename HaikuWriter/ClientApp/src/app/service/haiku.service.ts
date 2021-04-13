import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HaikuLine } from '../models/haiku-line.model';
import {Haiku} from '../models/haiku.model';
import { GenHaiku} from '../models/gen-haiku.model';

@Injectable({
  providedIn: 'root'
})
export class HaikuService {
  queryString: string = 'https://localhost:5001/Haiku/';

  constructor(private http: HttpClient) { }

  GetUnapprovedHaikuLines(): Observable<HaikuLine[]> {
    return this.http.get<HaikuLine[]>(`${this.queryString}unapprovedHaikuLine`);
  }
  GetUnapprovedHaikus(): Observable<Haiku[]> {
    return this.http.get<Haiku[]>(`${this.queryString}unapprovedHaiku`);
  }
  GeneHaiku(): Observable<GenHaiku> {
    return this.http.get<Haiku>(`${this.queryString}generateHaiku`);
  }
  WriteHaiku(username: string): Observable<Haiku>{
    return this.http.post<Haiku>(`${this.queryString}writeHaiku`, username)
  }
<<<<<<< HEAD

  getAllHaikus(): Observable<Haiku[]> {
    return this.http.get<Haiku[]>(`${this.queryString}allhaikus`);
  }

=======
  getAllHaikus(): Observable<Haiku[]> {
    return this.http.get<Haiku[]>(`${this.queryString}allhaikus`);
  }
>>>>>>> 55b9e15bf65853888265f23d213cf04bc4511436
  ApproveHaikuLine(hlid: number): Observable<boolean>{
    return this.http.post<boolean>(`${this.queryString}approveHaikuLine`, hlid);
  }
  DeleteHaikuLine(hlid: number): Observable<boolean>{
    return this.http.post<boolean>(`${this.queryString}deleteHaikuLine`, hlid);
  }
  ApproveHaiku(hid: number): Observable<boolean>{
    return this.http.post<boolean>(`${this.queryString}approveHaiku`, hid);
  }
  DeleteHaiku(hid: number): Observable<boolean>{
    console.log(hid);
    return this.http.post<boolean>(`${this.queryString}deleteHaiku`, hid);
  }
  SubmitHaikuLine(haikuline: HaikuLine): Observable<Haiku> {
    console.log(haikuline);
    return this.http.post<Haiku>(`${this.queryString}submitHaikuLine`, haikuline);
  }
  SubmitHaiku(haiku: Haiku): Observable<Haiku> {
    console.log(haiku);
    return this.http.post<Haiku>(`${this.queryString}submitHaiku`, haiku);
  }
}
