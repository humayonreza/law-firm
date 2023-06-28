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
  arrContents: any = [];
  mediaPath: string = '';
  sliderCat1: string = 'slider';
  sliderCat2: string = 'review';
  service_id: any;
  slag: any;
  bannerImg: string = '';
  constructor(
    private contentService: ContentService,
    private backendService: BackendService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;

    this.route.queryParamMap.subscribe((params) => {
      this.service_id = params.get('service_id') ? params.get('service_id') : 0;
      let data = this.contentService.web_content.filter(
        (p: any) => p.page_id == 'services'
      )[0].data;

      if (this.service_id > 0) {
        this.arrContents = data.filter(
          (p: any) => p.serviceId == this.service_id
        );
      } else {
        this.arrContents = data;
        console.log('1234');
      }

      this.bannerImg =
        screen.width > 500 ? 'bannerBig/banner.png' : 'bannerSmart/banner.png';
      console.log('Data : ', data);
      console.log('Service Id: ', this.service_id);
      console.log('Services :', this.arrContents);
      console.log('bannerImg :', this.bannerImg);
    });
  }
}
