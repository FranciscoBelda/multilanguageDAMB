import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {TranslateConfigService} from "../../services/translate-config.service";
import {TranslateModule} from "@ngx-translate/core";
import {ActionSheetController} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {ellipse, languageOutline, square, triangle,close} from "ionicons/icons";

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule]
})
export class Tab1Page implements OnInit {
  language: any;
  constructor(private actionSheetCtrl: ActionSheetController,
              private translateConfigService: TranslateConfigService) {
    this.translateConfigService.getDefaultLanguage();
    this.language = this.translateConfigService.getCurrentLanguage();
    addIcons({languageOutline,triangle,ellipse,square,close})
  }
  async changeLanguage() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Languages',
      buttons: [{
        text: 'English',
        icon: 'language-outline',
        handler: () => {
          this.language = 'en';
          this.translateConfigService.setLanguage('en');
        }
      }, {
        text: 'Spanish',
        icon: 'language-outline',
        handler: () => {
          this.language = 'es';
          this.translateConfigService.setLanguage('es');
        }
      }, {
        text: 'Arabic',
        icon: 'language-outline',
        handler: () => {
          this.language = 'ar';
          this.translateConfigService.setLanguage('ar');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');

        }
      }]
    });
    await actionSheet.present();
    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role,
      data);
  }
  ngOnInit() {
  }

}
