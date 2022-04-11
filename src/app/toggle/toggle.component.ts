import { Component, OnInit } from '@angular/core';
import { RESET_TOGGLES } from 'src/data/toggle.data';
import { ApiService } from 'src/types/api.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']  
})
export class ToggleComponent implements OnInit {
  readonly RESET_TOGGLES_TITLE: string = RESET_TOGGLES;
  constructor(public service: ApiService) {
   }

  ngOnInit(): void {
  }
/*
  isVisibleFilter(item: IToggle): boolean {
    if (this.toggle.length == 0) return false;
    if (item.value == ToggledFilters.All) return false;
    for (let i = 0; i < this.toggle.length; i++)
      if (this.toggle[i].value == item.value) return true;
    return false;
  }

  isMainFilter(item: IToggle): boolean {
    return item.value == ToggledFilters.All;
  }

  setFilter(item: IToggle): void {
    switch(item.value)
    {
      case ToggledFilters.All:
        this.toggle.forEach(i => {
          i.checked = false;
        });
        item.checked = true;
        this.onToggle.emit(item);
        break;
      default:
        item.checked = !item.checked;
        this.onToggle.emit(item);
        break;
    }
  }
*/
}
