import { Component, HostListener } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { ViewComponent } from "./components/view-component/view.component";
import { CommonModule } from '@angular/common';
import { DocumentService, TDocument, TPage } from './services/document.service';
import { ZoomComponent } from "./components/zoom-component/zoom.component";
import { AnnotationComponent } from './components/ annotation-component/annotation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ViewComponent, CommonModule, ZoomComponent, AnnotationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  private pageSize = 1; // кол-во подгружаемых страниц за раз
  private currentPage = 0;
  public loadedPages: TPage[] = [];
  private document!: TDocument;
  public scale = 1;

  constructor(private documentService: DocumentService) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    if((window.innerHeight + window.scrollY) >= scrollHeight) {
      if(this.document) {
        this.loadPages();
      }
    }
  }

  ngOnInit() {
    this.getDocument();
  }

  getDocument() {
    this.documentService.getDocument().subscribe((doc) => {
      this.document = doc;
      this.loadPages();
    });
  }

  loadPages() {
    const countPages = this.document.pages.length;
    const countLoadedPages = this.loadedPages.length;
    if(countLoadedPages === countPages) {
      return;
    }
    this.currentPage += this.pageSize;
    this.loadedPages = this.document.pages.slice(0, this.currentPage);
  }

  getZoom(event: number) {
    this.scale = event;
  }

}


