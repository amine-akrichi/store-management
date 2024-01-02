import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-category-dialog',
  templateUrl: './update-category-dialog.component.html',
  styleUrl: './update-category-dialog.component.css'
})
export class UpdateCategoryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
}
