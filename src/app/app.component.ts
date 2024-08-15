import { CommonModule } from '@angular/common';
import { Component, ComponentRef, ElementRef, TemplateRef, viewChild, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
@ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer !: ViewContainerRef;



async loadComponent() {
 const {DynamicComponent} = await import('./dynamic/dynamic.component');
  this.viewContainer.createComponent(DynamicComponent)
}

}


