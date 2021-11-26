import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    if (localStorage.getItem('lang_for_translation')) {
      let lang = localStorage.getItem('lang_for_translation');
      translate.use(lang);
    } else {
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en\fr/) ? browserLang : 'en');
    }
  }

  storeLangInfo(lang) {
    localStorage.setItem('lang_for_translation', lang);
  }

  ngOnInit(): void {}
}
