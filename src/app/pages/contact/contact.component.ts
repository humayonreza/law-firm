import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  mediaPath: string = '';
  // mediaPath: string = '';
  arrContents: any = [];
  arrNavByUser: any = [];
  isSmart: boolean = false;
  bannerImg: string = '';
  msg_email: string = '';
  student_id: number = 0;

  msg_title: string = '';
  msg_body: string = '';

  constructor(
    private backendService: BackendService,
    public contentService: ContentService
  ) {}

  submit_query(data: any) {}

  ngOnInit(): void {
    this.isSmart = screen.width < 500 ? true : false;
    this.mediaPath = this.backendService.mediaPath;
    this.bannerImg =
      screen.width < 500 ? 'contactusSmart.png' : 'contactusBig.png';
    // this.bannerImg = screen.width < 500 ? 'contactus.png' : 'contactus.png';

    this.arrContents = this.contentService.web_content.filter(
      (p: any) => p.page_id == 'contact'
    )[0].data;
    console.log('Contact us :', this.arrContents);
  }
}
