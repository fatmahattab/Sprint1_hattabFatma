import { Component, OnInit } from '@angular/core';
import { Fruit } from '../model/fruit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitService } from '../services/fruit.service';
import { Saison } from '../model/saison.model';


@Component({
  selector: 'app-update-fruit',
  templateUrl: './update-fruit.component.html',
  styles: [
  ]
})
export class UpdateFruitComponent implements OnInit {
  currentFruit = new Fruit();
  saisons! : Saison[];
updatedSaiId! : number;
  constructor(private activatedRoute: ActivatedRoute,
                  private router :Router,
               private fruitService: FruitService) { }

  ngOnInit(): void {
      this.fruitService.listeSaison().
      subscribe(sais => {console.log(sais);
              this.saisons = sais._embedded.saisons;
      });


    this.fruitService.consulterFruit(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentFruit = prod;
      this.updatedSaiId=
      this.currentFruit.saison.idSai;
      } ) ;
      
  }

  updateFruit()
  { //console.log(this.currentProduit);

   // this.currentFruit.saison=this.fruitService.consulterSaison(this.updatedSaiId);


  /* this.fruitService.updateFruit(this.currentFruit);
  this.router.navigate(['fruits']); */
  this.currentFruit.saison = this.saisons.
  find(sai => sai.idSai == this.updatedSaiId)!;
  this.fruitService.updateFruit(this.currentFruit).subscribe(frui => {
    this.router.navigate(['fruits']); }
    );
  }
  
  

}
