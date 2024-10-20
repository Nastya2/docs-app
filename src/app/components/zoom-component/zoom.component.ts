import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output, } from "@angular/core";


@Component({
    selector: 'zoom',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './zoom.component.html',
    styleUrl: './zoom.component.scss'
})

export class ZoomComponent {

    public value = 1;
    private minValue = 0.25;
    private maxValue = 3;
    @Output() emitValue: EventEmitter<number> = new EventEmitter();

    increase() {
        if(this.value >= this.maxValue) {
            return;
        }
        this.value += 0.25;
        this.emitValue.emit(this.value);
    }

    decrease() {
        if(this.value <= this.minValue) {
            return;
        }
        this.value -= 0.25;
        this.emitValue.emit(this.value);
    }
}
  