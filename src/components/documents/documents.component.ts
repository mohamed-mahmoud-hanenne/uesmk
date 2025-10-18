import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {

  isOpen: { [key: number]: boolean } = {
      1: false,
      2: false,
      3: false,
      4: false
  };

toggleIcon(index: number) {
  this.isOpen[index] = !this.isOpen[index];
}


}
