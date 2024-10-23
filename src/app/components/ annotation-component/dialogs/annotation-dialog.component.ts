import { Component, Inject } from "@angular/core";
import { DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { FormsModule } from "@angular/forms";
import { TAnnotation, TypeAnnotation } from "../annotation.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'annotation-dialog',
    standalone: true,
    imports: [DialogModule, FormsModule, CommonModule],
    templateUrl: './annotation-dialog.component.html',
    styleUrl: './annotation-dialog.component.scss'
})

export class AnnotationDialogComponent {

    public isText: boolean = true;

    constructor(private dialogRef: DialogRef, 
                @Inject(DIALOG_DATA) private data: {type: TypeAnnotation}) {}

    public dataSend: string | File  = "";

    ngOnInit() {
        this.data.type === TypeAnnotation.text ? this.isText = true: this.isText = false;
    }

    changeFile(event: Event | null) {
        if(event) {
            const target = event.target as HTMLInputElement;
            const files = target.files as FileList;
            this.dataSend = files[0];
        }
    }

    public close() {
        this.data = {
            type: this.data.type,
            annotation: this.dataSend
        } as TAnnotation;
        this.dialogRef.close(this.data);
    }
    
}
  