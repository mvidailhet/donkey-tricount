import { Component } from '@angular/core';
import { EditorsDataService } from 'src/app/services/editors-data.service';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss'],
})
export class HtmlEditorComponent {
  text: string;

  constructor(private editorsDataService: EditorsDataService) { }

  onTextChange() {
    setTimeout(() => {
      this.editorsDataService.setHtml(this.text);
    });
  }

}
