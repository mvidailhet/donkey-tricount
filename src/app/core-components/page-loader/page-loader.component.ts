import { Component, Input } from '@angular/core';
import { CoerceBoolean } from 'src/app/decorators/coerce-boolean';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
})
export class PageLoaderComponent {

  @Input() isLoading!: boolean | undefined;
  @Input() message!: string;
  @Input() color = 'primary';

  @CoerceBoolean()
  @Input()
  showOverlay: string | boolean = false;

}
