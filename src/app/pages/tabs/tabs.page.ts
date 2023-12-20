import {Component, EnvironmentInjector, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateConfigService} from "../../services/translate-config.service";
import {IonRouterOutlet} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {ellipse, languageOutline, square, triangle} from "ionicons/icons";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, IonRouterOutlet]
})
export class TabsPage implements OnInit {
  public environmentInjector =
    inject(EnvironmentInjector);
  language: any;
  constructor(private translateConfigService: TranslateConfigService,
              private translateService: TranslateService) {
    this.translateConfigService.getDefaultLanguage();
    this.language = this.translateConfigService.getCurrentLanguage();
    addIcons({languageOutline,triangle,ellipse,square});
  }

  ngOnInit() {
  }

}
