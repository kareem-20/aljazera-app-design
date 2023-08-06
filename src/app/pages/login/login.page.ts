import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonPopover, NavController } from '@ionic/angular';
import {
  parsePhoneNumber,
  getCountries,
  getCountryCallingCode,
} from 'libphonenumber-js';
import { countryCodeEmoji, emojiCountryCode } from 'country-code-emoji';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  @ViewChild('popover') popover: IonPopover;
  isOpen = false;
  countries: any[] = [];
  country: any;
  filteredCountries: any[] = [];
  viewCountries: any[] = [];
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      phone: [''],
      password: [''],
    });
  }
  ngOnInit() {
    this.countrys();
  }

  countrys() {
    this.country = {
      callingCode: getCountryCallingCode('IQ'),
      code: 'IQ',
      emoji: countryCodeEmoji('IQ'),
    };
    let countries = getCountries().map((code) => {
      return {
        code,
        callingCode: getCountryCallingCode(code),
        emoji: countryCodeEmoji(code),
      };
    });
    this.countries = countries;
    console.log(countryCodeEmoji('EG'));

    this.getViewCountries();
  }
  getViewCountries() {
    // if (this.searchText.trim() != '')
    //   this.viewCountries = this.filteredCountries;
    // else
    this.viewCountries = this.countries;
  }
  nav(route: string): void {
    this.navCtrl.navigateForward(route);
  }

  validPhoneNumber(number: string) {
    return parsePhoneNumber(number, this.country.code).isValid();
  }

  async chooseCountry(event: any) {
    this.popover.event = event;
    this.isOpen = true;
  }
  selectCountry(c: any) {
    console.log(c);
    this.country = c;
  }
  submit() {
    // this.authService.login({ ...this.form.value });
  }
}
