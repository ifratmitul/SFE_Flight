import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, ErrorComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  exports: [NavbarComponent, ErrorComponent],
})
export class CoreModule {}
