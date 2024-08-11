import { CommonModule } from '@angular/common';
import { Component, ComponentRef, ElementRef, viewChild, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DynamicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('viewContainer',{read: ViewContainerRef}) viewContainer !: ViewContainerRef

// constructor(private viewContainerRef : ViewContainerRef) {
//   // this.viewContainerRef.createComponent(DynamicComponent);
// }

addComponent() {
  // this.viewContainerRef.createComponent(DynamicComponent);
  this.viewContainer.createComponent(DynamicComponent)
}
}


