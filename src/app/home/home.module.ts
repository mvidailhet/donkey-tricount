import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { IframeComponent } from '../components/iframe/iframe.component';
import { HtmlEditorComponent } from '../components/html-editor/html-editor.component';
import { CssEditorComponent } from '../components/css-editor/css-editor.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    IframeComponent,
    HtmlEditorComponent,
    CssEditorComponent,
  ],
})
export class HomePageModule {}
