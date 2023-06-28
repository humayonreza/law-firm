import { Injectable } from '@angular/core';

export interface web_content {
  ser: number;
  page_id: string;
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() {}

  web_content: web_content[] = [
    {
      ser: 1,
      page_id: 'navbar',
      data: [
        {
          id: 1,
          user_type: 'visitor',
          is_signed: 0,
          links: [
            {
              ser: 1,
              routeName: 'Home',
              route: '',
              icon: 'home',
              isActive: 0,
            },
            {
              ser: 2,
              routeName: 'Services',
              route: '/services',
              icon: 'perm_phone_msg',
              isActive: 0,
            },
            {
              ser: 3,
              routeName: 'Blog',
              route: '/blog',
              icon: 'perm_phone_msg',
              isActive: 0,
            },
            {
              ser: 4,
              routeName: 'About us',
              route: '/about',
              icon: 'developer_board',
              isActive: 0,
            },
            // {
            //   ser: 3,
            //   routeName: 'Practice Areas',
            //   route: '/about',
            //   icon: 'developer_board',isActive: 0,
            // },

            {
              ser: 5,
              routeName: 'Contact us',
              route: '/contact',
              icon: 'perm_phone_msg',
              isActive: 0,
            },
          ],
        },
      ],
    },
    {
      ser: 2,
      page_id: 'home',
      data: [
        {
          ser: 1,
          component: 'slider',
          contents: [
            {
              sliderId: 1,
              imgId: '1.png',
              title: 'Some title 1',
              txt: 'Some Text 1',
            },
            {
              sliderId: 2,
              imgId: '2.png',
              title: 'Some title 2',
              txt: 'Some Text 2',
            },
            {
              sliderId: 3,
              imgId: '3.png',
              title: 'Some title 3',
              txt: 'Some Text 3',
            },
            {
              sliderId: 4,
              imgId: '4.png',
              title: 'Some title 4',
              txt: 'Some Text 4',
            },
          ],
        },
        {
          ser: 2,
          component: 'portfolio',
          title: 'Who we are',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights and delivering successful outcomes. At JUST Law Firm, we understand that every legal situation is unique, and we approach each case with meticulous attention to detail and unwavering dedication. Our attorneys are well-versed in various areas of law, allowing us to handle a wide range of legal matters with expertise and precision. When you choose JUST Law Firm, you can expect responsive and compassionate service. We prioritize clear communication, ensuring that you are well-informed and involved in every step of the legal process. Your needs and objectives are at the forefront of our strategy, and we strive to achieve the best possible results for you.',
          contents: [
            {
              portfolioId: 1,
              imgId: '1.png',
              title: 'Easy Access to Legal Services',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights and delivering successful outcomes. At JUST Law Firm, we understand that every legal situation is unique',
            },
            {
              portfolioId: 2,
              imgId: '2.png',
              title: 'Affordable Cost',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights and delivering successful outcomes. At JUST Law Firm, we understand that every legal situation is unique',
            },
            {
              portfolioId: 3,
              imgId: '3.png',
              title: 'Quality Services',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights and delivering successful outcomes. At JUST Law Firm, we understand that every legal situation is unique',
            },
            {
              portfolioId: 4,
              imgId: '4.png',
              title: 'Integrated Experience',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights and delivering successful outcomes. At JUST Law Firm, we understand that every legal situation is unique',
            },
          ],
        },
        {
          ser: 3,
          component: 'services',
          title: 'Our Services',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence. ',

          contents: [
            {
              serviceId: 1,
              imgId: '1.png',
              title: 'General Counsel',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              serviceId: 2,
              imgId: '2.png',
              title: 'Criminal Litigation',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              serviceId: 3,
              imgId: '3.png',
              title: 'Civil Litigation',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              serviceId: 4,
              imgId: '4.png',
              title: 'Arbitration & Mediation',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              serviceId: 5,
              imgId: '5.png',
              title: 'Commercial Law',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              serviceId: 6,
              imgId: '6.png',
              title: 'Public Law',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              serviceId: 7,
              imgId: '7.png',
              title: 'Property Law',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
          ],
        },
        {
          ser: 4,
          component: 'clients',
          title: 'Our Clients',
          txt: 'Our satisfied corporate clients',
          contents: [
            {
              achievementId: 1,
              imgId: '1.png',
              title: 'Company One',
              txt: '',
            },
            {
              achievementId: 2,
              imgId: '2.png',
              title: 'Company Two',
              txt: '',
            },
            {
              achievementId: 3,
              imgId: '3.png',
              title: 'Company Three',
              txt: '',
            },
            {
              achievementId: 4,
              imgId: '4.png',
              title: 'Company Four',
              txt: '',
            },
          ],
        },
        // {
        //   ser: 4,
        //   component: 'Our Achievements',
        //   title: 'Our Achievements',
        //   txt: 'Welcome to Service Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights and delivering successful outcomes. At JUST Law Firm, we understand that every legal situation is unique. Welcome to Service Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights and delivering successful outcomes. At JUST Law Firm, we understand that every legal situation is unique',
        //   contents: [
        //     {
        //       achievementId: 1,
        //       imgId: '1.png',
        //       title: 'Achievement Title One',
        //       txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
        //     },
        //     {
        //       achievementId: 2,
        //       imgId: '2.png',
        //       title: 'Achievement Title Two',
        //       txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
        //     },
        //     {
        //       achievementId: 3,
        //       imgId: '3.png',
        //       title: 'Achievement Title Three',
        //       txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
        //     },
        //     {
        //       achievementId: 4,
        //       imgId: '4.png',
        //       title: 'Achievement Title Four',
        //       txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
        //     },
        //   ],
        // },
        {
          ser: 5,
          component: 'review',
          title: 'Client`s Review',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
          contents: [
            {
              reviewId: 1,
              reviewerName: 'Shot Wingly',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
            {
              reviewId: 2,
              reviewerName: 'Bill Gilmore',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
            {
              reviewId: 3,
              reviewerName: 'Tore Moree',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
            {
              reviewId: 1,
              reviewerName: 'Ana Smith',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
            {
              reviewId: 1,
              reviewerName: 'Mont Gomery',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
            {
              reviewId: 1,
              reviewerName: 'Peter Holtik',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
          ],
        },
      ],
    },
    {
      ser: 3,
      page_id: 'about',
      data: [{}],
    },
    {
      ser: 4,
      page_id: 'contact',
      data: [{}],
    },
    {
      ser: 5,
      page_id: 'blog',
      data: [{}],
    },
    {
      ser: 6,
      page_id: 'book-for-consultation',
      data: [{}],
    },
    {
      ser: 7,
      page_id: 'services',
      data: [
        {
          serviceId: 1,
          imgId: '1.png',
          title: 'Company Secretarial Services',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence. ',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
          ],
        },
        {
          serviceId: 2,
          imgId: '2.png',
          title: 'Services for NRBs',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence. ',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
          ],
        },
        {
          serviceId: 3,
          imgId: '3.png',
          title: 'Legal Templates',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence. ',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
          ],
        },
        {
          serviceId: 4,
          imgId: '4.png',
          title: 'Legal Packages',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence. ',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
          ],
        },
        {
          serviceId: 5,
          imgId: '5.png',
          title: 'Family Dispute Resolution Services',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence. ',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
          ],
        },
        {
          serviceId: 6,
          imgId: '6.png',
          title: 'One Stop Legal Service',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence.',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
          ],
        },
      ],
    },
    {
      ser: 8,
      page_id: 'footer',
      data: [
        {
          copyright: 'All right reserved by some org name',
          contents: [
            {
              id: 1,
              section: [
                {
                  id: 1,
                  txt: 'Our Goal',
                },
                {
                  id: 2,
                  txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
                },
                {
                  id: 3,
                  txt: '23 435 525 825',
                },
              ],
            },
            {
              id: 2,
              section: [
                {
                  id: 1,
                  txt: 'Important Links',
                },
                {
                  id: 2,
                  txt: 'Link 1',
                },
                {
                  id: 3,
                  txt: 'link 3',
                },
                {
                  id: 4,
                  txt: 'link 4',
                },
              ],
            },
            {
              id: 3,
              section: [
                {
                  id: 1,
                  txt: 'Keep in touch',
                },
                {
                  id: 2,
                  txt: '22 KiriBiri House,North Town, London',
                },
                {
                  id: 3,
                  txt: 'E: info@something.com',
                },
                {
                  id: 4,
                  txt: 'P: +43 45 456 443',
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
