import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-saved-profile',
  templateUrl: 'saved-profile.html',
})
export class SavedProfile {

  // You can get this data from your API. This is a dumb data for being an example.
  public images = [
    {
      id: 1,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'http://ionicframework.com/dist/preview-app/www/assets/img/advance-card-bttf.png'
    },
    {
      id: 2,
      username: 'candelibas',
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      post_img: 'http://ionicframework.com/dist/preview-app/www/assets/img/advance-card-bttf.png'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
