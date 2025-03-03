import { Component, inject } from '@angular/core';
import { MatDialogClose, MatDialogContent, MAT_DIALOG_DATA, MatDialogActions } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrl: './details-dialog.component.scss',
  imports: [MatDialogContent, MatIcon, MatIconButton, MatDialogClose, NgIf, MatDialogActions, MatButton]
})
export class DetailsDialogComponent {
  data = inject(MAT_DIALOG_DATA);
}
