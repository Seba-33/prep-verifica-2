import { CommonModule } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  @Input()name: string; // <-- aggiunta la proprietà name
  constructor() { 
    
  }
  ngOnInit() {
  }


}
