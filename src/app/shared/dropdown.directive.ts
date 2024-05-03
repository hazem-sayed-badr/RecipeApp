import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector:'[appdropdown]'
})
export class Dropdown{
  @HostBinding('class.open') isOpen=false;
     @HostListener('click')toggleOpen(){
      this.isOpen=!this.isOpen;
     }

}
