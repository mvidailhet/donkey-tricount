import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EditorsData, EditorsDataService } from 'src/app/services/editors-data.service';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent {
  srcdoc: SafeHtml;

  constructor(
    private domSanitizer: DomSanitizer,
    private editorsDataService: EditorsDataService
  ) {
      this.editorsDataService.editorsDataChanged.subscribe((newData: EditorsData) => {
        this.srcdoc = this.bypassHTMLSecurity(
          `<html><head><title></title><style>${newData.css}</style></head><body>${newData.html}</body></html>`
        );
      });
  }

  bypassHTMLSecurity(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
