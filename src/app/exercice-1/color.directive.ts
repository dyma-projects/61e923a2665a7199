import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:keydown.ArrowLeft') keydownLeft(event) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }
  @HostListener('window:keydown.ArrowRight') keydownRight(event) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }
  @HostListener('window:keydown.ArrowUp') keydownUp(event) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
  }
  @HostListener('window:keydown.ArrowDown') keydownDown(event) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'pink');
  }

  ngOnInit() {
  }
}





// export class btnTchDirective {

//     constructor(private el: ElementRef, private renderer: Renderer2) { }

//     @HostListener('touch', ['$event'])
//     toggleColor(event){
//         if(event.action == "down"){
//             this.renderer.addClass(this.el.nativeElement, 'pressed');
//             // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', "blue");
//         }else{
//             this.renderer.removeClass(this.el.nativeElement, 'pressed');
//         }
//       }
// }
