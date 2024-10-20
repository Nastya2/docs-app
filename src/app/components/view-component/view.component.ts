import { Component, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { CommonModule } from "@angular/common";


@Component({
    selector: 'view',
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss'
})

export class ViewComponent {
    @Input() url: string = "";

    get urlView(): string {
        return "assets/" + this.url;
    }

    constructor() {}
}
  