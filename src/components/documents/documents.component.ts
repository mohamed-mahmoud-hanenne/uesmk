import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {

  isOpen: { [key: number]: boolean } = {};

toggleIcon(index: number) {
  this.isOpen[index] = !this.isOpen[index];
}


}
