import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
   message:string = "Welcome to ionic (Michael Ganesan) This is way too cool!"
  constructor(public navCtrl: NavController) {

  }

}
