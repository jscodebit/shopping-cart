import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective implements OnInit{
  @HostBinding('class.show') isOpen: boolean = false;
  @HostListener("document:click") clickout() {
    if (!this.isOpen) {
      this.isOpen = false;
    }
    this.isOpen = false;
  }
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.isOpen = false;
  }
}
