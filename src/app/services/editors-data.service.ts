import { EventEmitter, Injectable } from '@angular/core';

export interface EditorsData {
  html: string;
  css: string;
}

@Injectable({
  providedIn: 'root'
})
export class EditorsDataService {
  editorsData: EditorsData = {
    html: '',
    css: '',
  };
  editorsDataChanged = new EventEmitter<EditorsData>();

  setHtml(html: string) {
    this.editorsData = { ...this.editorsData, html };
    this.editorsDataChanged.emit(this.editorsData);
  }

  setCss(css: string) {
    this.editorsData = { ...this.editorsData, css };
    this.editorsDataChanged.emit(this.editorsData);
  }
}
