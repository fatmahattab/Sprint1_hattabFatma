import { Component, OnInit } from '@angular/core';
import { Fruit } from '../model/fruit.model';
import { FruitService } from '../services/fruit.service';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits !: Fruit[];
  constructor( private fruitService: FruitService) {
   //this.fruits=fruitService.listeFruit();
   }
 
  ngOnInit(): void {
    this.chargerFruits();
    }
    
    chargerFruits(){
      this.fruitService.listeFruit().subscribe(fr => {
        console.log(fr);
        this.fruits = fr;
        });
      }
      
 supprimerFruit(f: Fruit)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.fruitService.supprimerFruit(f.idFruit).subscribe(() => {
console.log("fruit supprimé");
this.chargerFruits();
});
} 

  /* supprimerFruit(f:Fruit){
    //console.log(f);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.fruitService.supprimerFruit(f);
  } */


}
