import {Component, inject, Input} from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-info-popup',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatChipSet,
    MatChip,
    MatButton,
    MatAnchor,
    MatIcon
  ],
  templateUrl: './info-popup.component.html',
  styleUrl: './info-popup.component.scss'
})
export class InfoPopupComponent {
  readonly dialogRef = inject(MatDialogRef);
  @Input() title: string = '';
  @Input() keywords: string[] = [];
  @Input() message: string = '';

  close() {
    this.dialogRef.close()
  }
}
