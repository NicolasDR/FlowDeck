import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[side-panel]'
})
export class SidePanelDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
