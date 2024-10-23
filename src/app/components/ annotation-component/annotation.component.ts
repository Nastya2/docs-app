import { Component, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { AnnotationDialogComponent } from "./dialogs/annotation-dialog.component";
import { MatIconModule } from '@angular/material/icon';

export type TAnnotationText = {
    type: TypeAnnotation.text,
    annotation: string
}

export type TAnnotationImage = {
    type: TypeAnnotation.image,
    annotation: File
}

export type TAnnotation = TAnnotationImage | TAnnotationText;

export enum TypeAnnotation {
    "text",
    "image"
}

@Component({
    selector: 'annotation',
    standalone: true,
    imports: [RouterOutlet, CommonModule, DragDropModule, DialogModule, MatIconModule],
    templateUrl: './annotation.component.html',
    styleUrl: './annotation.component.scss'
})

export class AnnotationComponent {

    public typeAnnotation = TypeAnnotation;
    public annotationsText: string[] = [];
    public annotationsImage: string[] = [];

    constructor(private dialog: Dialog) {}

    openDialog(type: TypeAnnotation): void {
        const dialogRef = this.dialog.open<TAnnotation>(AnnotationDialogComponent, {
          width: '250px',
          data: { type },
        });
    
        dialogRef.closed.subscribe((annotation) => {
            if(annotation) {
                switch(annotation.type) {
                    case(TypeAnnotation.text):
                        this.annotationsText.push(annotation.annotation);
                        break;
                    case(TypeAnnotation.image):
                        this.loadImage(annotation.annotation);
                        break;
                }
            }
        });
    }

    loadImage(file: File): void {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
            const result = e.target?.result;
            if (typeof result === 'string') {
                this.annotationsImage.push(result);
            }
        };

        reader.readAsDataURL(file); 
    }

    deleteAnnotation(annotation: string[], text: string) {
        const index = annotation.indexOf(text);
        if(index !== -1) {
            annotation.splice(index,1);
        }
    }   
}
  