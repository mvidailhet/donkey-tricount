import { Component } from '@angular/core';
import { EditorsDataService } from 'src/app/services/editors-data.service';

@Component({
  selector: 'app-css-editor',
  templateUrl: './css-editor.component.html',
  styleUrls: ['./css-editor.component.scss'],
})
export class CssEditorComponent {
  text: string;

  constructor(private editorsDataService: EditorsDataService) {}

  onTextChange() {
    setTimeout(() => {
      this.editorsDataService.setCss(this.text);
    });
  }
}
