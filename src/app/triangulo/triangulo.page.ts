import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.page.html',
  styleUrls: ['./triangulo.page.scss'],
})
export class TrianguloPage implements OnInit {
 
  
  constructor() {

   }

  ngOnInit() {
  }
 

CalcularArea(val1,val2){
    console.log(parseInt(val1),parseInt(val2));
  
    let base: number;
    base = (val1 * val2);
    alert("El area es: "+base)
    console.log(base);
    return base;
  }

  CalcularPerimetro(val1,val2){
    console.log(parseInt(val1),parseInt(val2));
  
    let base: number;
    base = 2*(val1+val2);
    alert("El perimetro es: "+base)
    console.log(base);
    return base;
  }

  


}
