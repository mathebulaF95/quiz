import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  answer : boolean = false;
  sub : boolean = false;
  food : boolean = false;
  tel : boolean = false;
  cover : boolean = false;
  restarts : boolean = false;

  score = 0;
  pre;
  pres;
  press;
  click;
  clickk;
  clickkk;
  fre;
  fres;
  fress;
  vut;
  vuto;
  vutom;
  mah;
  mahl;
  mahlor;
  black;
  black2;
  june;
  june2;
  born;
  born2;
  died;
  died2;
  last;
  last2;
  mus;
  mus1;
  mus2;
  iris;
  iris1;
  iris2;
  lul;
  lul1;
  lul2;
  tiy;
  tiy1;
  tiy2;
  fifi;
  fifi1;
  fifi2;


 constructor(public navCtrl: NavController) {
      
      this.cover = true;
    
  }

start(){
  this.cover = false;
  this.food = true;
}

  clickn(){
   this.food= false;
   this.sub=true;
  }

  clickne(){
    this.sub = false;
    this.tel = true;
  }

  clickAnswer(){
    this.tel = false;
    this.answer = true;

    if(this.black == true){
      this.score = this.score +=1;
    }

    if(this.june2 == true){
      this.score = this.score +=1;
    }

    if(this.born2 == true){
      this.score = this.score +=1;
    }

    if(this.died == true){
      this.score = this.score +=1;
    }

      if(this.last2 == true){
        this.score = this.score +=1;
      }

    if(this.pres == true){
      this.score = this.score += 1;
    }

    if(this.clickkk == true){
      this.score = this.score +=1;
    }

    if (this.fre == true){
      this.score = this.score +=1;
    }

    if(this.vut == true){
    this.score = this.score +=1;
  }

 if(this.mahlor == true){
   this.score = this.score += 1;
 }

 if(this.mus2 == true){
   this.score = this.score +=1;
 }

 if(this.iris == true){
   this.score = this.score +=1;
 }

 if(this.lul1 == true){
   this.score = this.score +=1;
 }

 if(this.tiy == true){
   this.score = this.score +=1;
 }

 if(this.fifi1 == true){
   this.score = this.score +=1;
 }
}

restart(){
  this.answer = false;
  this.food = true;
}
}
