import { Component, inject, Inject } from "@angular/core";
import { RouterOutlet, ActivatedRoute } from "@angular/router";
import { API } from "../../api/service";


@Component({
    selector: 'view',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss'
})

export class ViewComponent {

    public urlView: string = "";

    constructor(@Inject(API) private date: any,
                private route: ActivatedRoute) {}

    ngOnInit() {
        const viewId = this.route.snapshot.paramMap.get('id');
        this.urlView = "assets/" + this.getRoute(Number(viewId));
    }

    getRoute(viewId: number): string {
        return this.date.pages.find((page: any) => page.number === viewId).imageUrl;
    }
   
  
}
  