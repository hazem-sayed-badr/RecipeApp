import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector:'[appdropdown]'
})
export class Dropdown{
  @HostBinding('class.open') isOpen=false;
    constructor(private element:ElementRef, private renderer:Renderer2){

    }
     @HostListener('click')toggleOpen(){
      this.isOpen=!this.isOpen;
     }

}
