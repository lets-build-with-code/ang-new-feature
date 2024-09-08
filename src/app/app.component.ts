import { CommonModule } from '@angular/common';
import { Component,ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailComponent } from './detail/detail.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
show = false;

setShow() {
  this.show = true;
}


ngOnInit() {
  setTimeout(() => this.show = true, 5000)
}

}


