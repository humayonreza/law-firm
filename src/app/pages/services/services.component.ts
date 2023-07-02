import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  arrServiceObj: any = [];
  mediaPath: string = '';
  sliderCat1: string = 'slider';
  sliderCat2: string = 'review';
  service_id: any;
  slag: any;
  bannerImg: string = '';
  param: any;
  constructor(
    private contentService: ContentService,
    private backendService: BackendService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;

    this.route.queryParamMap.subscribe((params) => {
      this.param = params.get('param');
      this.arrServiceObj = this.contentService.web_content
        .filter((p: any) => p.page_id == 'services')[0]
        .data.filter((p: any) => p.serviceId == this.param);

      console.log(this.arrServiceObj);
    });
  }
}
