import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  collapsed: boolean = true;
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(featureSelected: string){
    this.featureSelected.emit(featureSelected);
  }
}
