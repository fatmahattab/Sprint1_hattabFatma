import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruit } from '../model/fruit.model';
import { Saison } from '../model/saison.model';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {
  newFruit = new Fruit();
  message: string="";
  saisons! : Saison[];
  newIdSai! : number;
newSaison! : Saison;
  constructor(private fruitService: FruitService,
    private router:Router) { 
      

  }

  ngOnInit(): void {
   // this.saisons = this.fruitService.listeSaison();
   this.fruitService. listeSaison().
    subscribe(sais =>{console.log(sais);
      this.saisons = sais._embedded.saisons;
      
    });
  }
/*  
    


    addFruit(){
      this.fruitService.ajouterFruit(this.newFruit)
      .subscribe(frui=> {
      console.log(frui);
      this.router.navigate(['fruits']);
      });
      } */
      addFruit(){
        this.newFruit.saison = this.saisons.find(sai => sai.idSai == this.newIdSai)!;
        this.fruitService.ajouterFruit(this.newFruit)
        .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['fruits']);
        });
        }

}
