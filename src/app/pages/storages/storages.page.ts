import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.page.html',
  styleUrls: ['./storages.page.scss'],
})
export class StoragesPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  back() {
    this.navCtrl.back();
  }

  nav(route) {
    this.navCtrl.navigateForward(route);
  }
}
