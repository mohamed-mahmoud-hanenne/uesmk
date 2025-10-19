import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-documents',
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {

    // isOpen: { [key: number]: boolean } = {
    //   1: false,
    //   2: false,
    //   3: false,
    //   4: false,
    //   5: false,
    //   6: false,
    //   7: false,
    //   8: false
    // };

    // toggleIcon(index: number) {
    //   this.isOpen[index] = !this.isOpen[index];
    // }

    showList(title: string, items: string[]) {
    const htmlList = `
      <ul style="text-align: left; font-size: 0.95rem; line-height: 1.6; margin-left: 10px;">
        ${items.map(i => `<p style="margin-bottom: 8px;"><i class='bi bi-check-circle-fill text-success me-2'></i>${i}</p>`).join('')}
      </ul>
    `;

    Swal.fire({
      title: `<h4 style="color:#155724; font-weight:700;">${title}</h4>`,
      html: htmlList,
      background: '#f9fdf9',
      confirmButtonText: 'Fermer',
      confirmButtonColor: '#28a745',
      width: '42em',
      showClass: { popup: 'animate__animated animate__fadeInDown' },
      hideClass: { popup: 'animate__animated animate__fadeOutUp' }
    });
  }

}
