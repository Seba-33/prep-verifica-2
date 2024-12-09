import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  standalone : true,
  imports: [CommonModule,UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  title = 'app';
  names: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; //Riempiamo il vettore
  }
  ngOnInit() {
  }


}
