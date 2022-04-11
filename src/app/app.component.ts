import { Component } from '@angular/core';
import { ApiService } from 'src/types/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'skillbox-3';

  constructor(public service: ApiService) {
    
  }
}
