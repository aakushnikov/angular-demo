import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/types/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ['span.navbar-text { font-size: 14pt; color: black; }']
})
export class MenuComponent implements OnInit {
  constructor(public service: ApiService) {
   }

  ngOnInit(): void {
  }
/*
  setFilter(item: IToggle): void {
    this.onToggle.emit(item);
  }
  */
}
