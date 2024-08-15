import { CommonModule } from '@angular/common';
import { Component, ComponentRef, ElementRef, TemplateRef, viewChild, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
@ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer !: ViewContainerRef;
index = 1;


compRef!:ComponentRef<any>
async loadComponent() {
 const {DynamicComponent} = await import('./dynamic/dynamic.component');
 this.compRef = this.viewContainer.createComponent(DynamicComponent);
 this.compRef.instance.msg = this.viewContainer.length;
 
}

process(index:number) {
  console.log(this.viewContainer.get(index -1))
  // this.compRef.setInput('msg',`Input is Reset & value is ${this.viewContainer.length}`)
  // this.viewContainer.move(this.compRef.hostView, index - 1);
  this.viewContainer.detach(index - 1);
 }
}


