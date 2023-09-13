import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];
  isEdit:boolean = false;

  constructor () {
    this.name = 'Audi';
    this.speed = 300;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серебристый'
    }
    this.options = ["ABS", "Автопилот", "Автопаркинг"];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  ngOnInit(): void {
    this.model = 'Audi';
    this.speed = 300;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серебристый'
    };
    this.options = ["ABS", "Автопилот", "Автопаркинг"];
  }

  addOpt(option:string) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option:string) {
    for(let i = 0; i < this.options.length; i++) {
      if(this.options[i] == option)
      this.options.splice(i, 1);
      break;
    }
  }

  carSelect(carName:string) {
    if(carName == 'bmw') {
    this.name = 'BMW';
    this.speed = 320;
    this.model = 'M8';
    this.colors = {
      car: 'Черный',
      salon: 'Белый',
      wheels: 'Черный'
    };
    this.options = ["ABS", "Автопаркинг", "Дрифт"];
  } else if (carName == 'audi') {
    this.name = 'Audi';
    this.speed = 300;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серебристый'
    }
    this.options = ["Система трека", "Круизконтроль", "Автопаркинг"];
  } else {
    this.name = 'Mercedes';
    this.speed = 280;
    this.model = 'E63s';
    this.colors = {
      car: 'Белый',
      salon: 'Белый',
      wheels: 'Черные'
    }
    this.options = ["ABS", "Автопаркинг", "Массаж"];
  }
}
}

interface Colors {
  car:string;
  salon:string;
  wheels:string;
}
 