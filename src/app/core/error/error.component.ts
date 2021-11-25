import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  error: any;
  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    this.error =
      navigation &&
      navigation.extras &&
      navigation.extras.state &&
      navigation.extras.state.error;
  }

  ngOnInit(): void {}
}
