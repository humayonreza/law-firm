import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-bookforconsultation',
  templateUrl: './bookforconsultation.component.html',
  styleUrls: ['./bookforconsultation.component.scss'],
})
export class BookforconsultationComponent implements OnInit {
  arrContents: any = [];
  mediaPath: string = '';
  sliderCat1: string = 'slider';
  sliderCat2: string = 'review';
  constructor(
    private contentService: ContentService,
    private backendService: BackendService
  ) {}
  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;
    this.arrContents = this.contentService.web_content.filter(
      (p: any) => p.page_id == 'book-for-consultation'
    )[0].data;
    console.log('Book-for-consultation :', this.arrContents);
  }
}
