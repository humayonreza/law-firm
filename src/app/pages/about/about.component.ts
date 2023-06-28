import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
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
      (p: any) => p.page_id == 'about'
    )[0].data;
    console.log('About :', this.arrContents);
  }
}
