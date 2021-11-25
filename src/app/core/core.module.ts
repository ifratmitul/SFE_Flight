import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [NavbarComponent, ErrorComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  exports: [NavbarComponent, ErrorComponent],
})
export class CoreModule {}
