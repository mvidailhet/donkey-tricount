import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PageLoaderComponent } from './page-loader/page-loader.component';

@NgModule({
  declarations: [PageLoaderComponent],
  exports: [PageLoaderComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class CoreComponentsModule {}
