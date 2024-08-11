import { CommonModule } from '@angular/common';
import { Component, ComponentRef, ElementRef, TemplateRef, viewChild, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
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
@ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer !: ViewContainerRef;
@ViewChild('templateContainer', {read: TemplateRef}) templateContainer !: 
TemplateRef<any>;


getStudentsDetails() {
  const students = [
    {rollno:1, name:'sun', course:'angular'},
    {rollno:2, name:'sam', course:'angular'},
    {rollno:3, name:'sid', course:'java'},
  ];

  this.viewContainer.createEmbeddedView(this.templateContainer, {students})
}

}


