import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,UserItemComponent,UserListComponent,HelloWorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mihali2';
  names: string[] = [];
  

}




