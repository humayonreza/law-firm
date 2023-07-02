import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  mediaPath: string = '';
  // mediaPath: string = '';
  arrContents: any = [];
  arrNavByUser: any = [];
  isSmart: boolean = false;
  bannerImg: string = '';
  constructor(
    private backendService: BackendService,
    public contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.isSmart = screen.width < 500 ? true : false;
    this.mediaPath = this.backendService.mediaPath;
    this.bannerImg = screen.width < 500 ? 'aboutSmart.png' : 'aboutBig.png';
    this.arrContents = this.contentService.web_content.filter(
      (p: any) => p.page_id == 'about'
    )[0].data;
    console.log('About us :', this.contentService.web_content);
  }
}
