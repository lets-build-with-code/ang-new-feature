import { CommonModule } from '@angular/common';
import { Component,ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
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


async ngOnInit() {
  // const {DynamicComponent} = await import('./dynamic/dynamic.component');
  // this.viewContainer.createComponent(DynamicComponent)
}

}


