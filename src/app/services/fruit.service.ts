import { Injectable } from '@angular/core';
import { Fruit } from '../model/fruit.model';
import { Saison } from '../model/saison.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { SaisonWrapper } from '../model/saisonWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class FruitService {
  apiURLSai: string = 'http://localhost:8888/fruits/Sai';
  fruits!: Fruit[];
  fruit! :Fruit;
  //saisons !: Saison[];
  fruitsRecherche!:Fruit[];

  constructor(private http : HttpClient) {
    /* this.saisons = [ {idS : 1, nomS: "été"},
                         {idS : 2, nomS: "Printemps"},
                         {idS : 3, nomS : "hiver"},]; */
    this.fruits = [
      {idFruit: 1, nomFruit : "banane", prixFruit  : 3000, datedebutsaison: new Date("06/01/2022"),saison:{idSai : 2, nomSai: "Printemps"}},
      {idFruit : 2, nomFruit : "fraise", prixFruit  : 450, datedebutsaison : new Date("03/01/2022"),saison:{idSai : 1, nomSai: "été"}},
      {idFruit : 3, nomFruit :"orange", prixFruit : 900, datedebutsaison : new Date("07/01/2022"),saison:{idSai : 3, nomSai: "hiver"}}
  
    ];
   }
   /*listeFruit():Fruit[] {
    return this.fruits;
   }*/
   listeFruit(): Observable<Fruit[]>{
    return this.http.get<Fruit[]>(apiURL);
    }
    

/*    ajouterFruit( fruit: Fruit){
    this.fruits.push(fruit);
    } */
    ajouterFruit( frui: Fruit):Observable<Fruit>{
      return this.http.post<Fruit>(apiURL, frui, httpOptions);
      }

      supprimerFruit(id : number) {
        const url = `${apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

  
/*       consulterFruit(id:number): Fruit{
       return this.fruit = this.fruits.find(p => p.idFruit == id)!;
        //return this.fruit;
        } */
        consulterFruit(id: number): Observable<Fruit> {
          const url = `${apiURL}/${id}`;
          return this.http.get<Fruit>(url);
          }
        /* updateFruit(f:Fruit)
        {
        // console.log(p);
        //this.supprimerFruit(f);
        this.ajouterFruit(f);
        this.trierFruits();
        } */
        updateFruit(frui :Fruit) : Observable<Fruit>
           {
            return this.http.put<Fruit>(apiURL, frui, httpOptions);
              }

        trierFruits(){
          this.fruits = this.fruits.sort((n1,n2) => {
          if (n1.idFruit!>n2.idFruit!){
               return 1;
          }
          if (n1.idFruit! < n2.idFruit!) {
               return -1;
          }
          return 0;
          }
          );}

/*             listeSaison():Observable<Saison[]>{
              return this.http.get<Saison[]>(apiURL+"/Sai");
              } */
              listeSaison():Observable<SaisonWrapper>{
                return this.http.get<SaisonWrapper>(this.apiURLSai);
                }
                
           /*  consulterSaison(id:number): Saison{
            return this.saisons.find(sai => sai.idS == id)!;
            } */

           /*  rchercheParSaison(IdSaison:number) : Fruit[] {
              this.fruitsRecherche=[];
              this.fruits.forEach((cur,index) => {
                  if(IdSaison == cur.saison.idSai){
                      console.log("cur",cur);
                      this.fruitsRecherche.push(cur);
                          }
                      });
              return this.fruitsRecherche;
                      } */

  rchercheParSaison(id: number): Observable<Fruit[]> {
    const url = `${apiURL}/fSai/${id}`;
    return this.http.get<Fruit[]>(url);
  }

  rechercherParNom(nom: string):Observable< Fruit[]> {
    const url = `${apiURL}/fruiByName/${nom}`;
    return this.http.get<Fruit[]>(url);
    }

    ajouterSaison( sai: Saison):Observable<Saison>{
      return this.http.post<Saison>(this.apiURLSai, sai, httpOptions);
      }
      
}
