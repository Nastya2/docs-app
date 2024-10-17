import { Component, Inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { API } from "../../api/service";


@Component({
    selector: 'view',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss'
})

export class ViewComponent {
    constructor(@Inject(API) private date: any) {}


    ngOnInit() {
        console.log(this.date);
    }
   
  
}
  