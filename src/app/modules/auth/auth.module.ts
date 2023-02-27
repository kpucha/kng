import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { SignComponent } from './components/sign/sign.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignComponent],
  imports: [CommonModule, MaterialModule, TranslateModule, RouterModule],
  providers: [AuthService],
  exports: [SignComponent],
})
export class AuthModule {}
