import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-new-feature';
   items =
   [
    {id:1, name:"A"},
    {id:1, name:"B"},
    {id:1, name:"C"},
    {id:1, name:"D"},
  ];


}
