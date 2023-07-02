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
              subMenu: [],
            },
            {
              ser: 2,
              routeName: 'Services',
              route: '/services',
              icon: 'perm_phone_msg',
              isActive: 0,
              subMenu: [
                {
                  ser: 1,
                  serviceId: 'general-council',
                  subRouteName: 'General Counsel',
                },
                {
                  ser: 2,
                  serviceId: 'criminal-litigation',
                  subRouteName: 'Criminal Litigation',
                },
                {
                  ser: 3,
                  serviceId: 'civil-litigation',
                  subRouteName: 'Civil Litigation',
                },
                {
                  ser: 4,
                  serviceId: 'arbitration-mediation',
                  subRouteName: 'Arbitration & Mediation',
                },
                {
                  ser: 5,
                  serviceId: 'commercial-law',
                  subRouteName: 'Commercial Law',
                },
                {
                  ser: 6,
                  serviceId: 'public-law',
                  subRouteName: 'Public Law',
                },
                {
                  ser: 7,
                  serviceId: 'property-law',
                  subRouteName: 'Property Law',
                },
              ],
            },
            {
              ser: 3,
              routeName: 'Blog',
              route: '/blog',
              icon: 'perm_phone_msg',
              isActive: 0,
              subMenu: [],
            },
            {
              ser: 4,
              routeName: 'About us',
              route: '/about',
              icon: 'developer_board',
              isActive: 0,
              subMenu: [],
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
              subMenu: [],
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
          component: 'home',
          title: 'Who we are',
          slogun: 'Develope and advance in career',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence. ',
          imgId: 'home.png',
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
              ser: 1,
              serviceId: 'general-counsel',
              imgId: '1.png',
              title: 'General Counsel',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              ser: 2,
              serviceId: 'criminal-litigation',
              imgId: '2.png',
              title: 'Criminal Litigation',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              ser: 3,
              serviceId: 'civil-litigation',
              imgId: '3.png',
              title: 'Civil Litigation',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              ser: 4,
              serviceId: 'arbitration-mediation',
              imgId: '4.png',
              title: 'Arbitration & Mediation',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              ser: 5,
              serviceId: 'commercial-law',
              imgId: '5.png',
              title: 'Commercial Law',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              ser: 6,
              serviceId: 'public-law',
              imgId: '6.png',
              title: 'Public Law',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            },
            {
              ser: 7,
              serviceId: 'property-law',
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
        {
          ser: 6,
          component: 'Social links',
          title: 'Get in touch',
          txt: 'check us on',
          contents: [
            {
              ser: 1,
              imgId: '1.png',
              title: 'facebook',
              link: '',
            },
            {
              ser: 2,
              imgId: '2.png',
              title: 'Instagram',
              link: '',
            },
            {
              ser: 3,
              imgId: '3.png',
              title: 'tiktok',
              link: '',
            },
          ],
        },
      ],
    },
    {
      ser: 3,
      page_id: 'about',
      data: [
        {
          ser: 1,
          title: 'Our team',
          description:
            'Our team of experienced educators and industry experts curate and deliver courses that are relevant, practical, and engaging. We leverage cutting-edge technology and instructional design principles to create immersive and interactive learning experiences. Whether you are a student seeking to expand your academic horizons, a professional aiming to upskill or reskill, or an enthusiast pursuing personal interests, we have a course for you.',
          txt: [
            {
              text: 'We are dedicated to revolutionizing education through our comprehensive range of online courses. With a passion for learning and a commitment to excellence, we strive to empower individuals around the globe to enhance their knowledge, skills, and career prospects.',
            },
            {
              text: 'We prioritize learner success and satisfaction, providing flexible learning options that fit seamlessly into busy lifestyles. Our intuitive platform offers 24/7 access to course materials, allowing learners to study at their own pace and convenience. Additionally, our responsive support team is readily available to assist learners throughout their educational journey.',
            },
            {
              text: 'Join us on a transformative learning journey, unlock your potential, and shape your future with the power of knowledge. Discover endless possibilities and embark on a path of personal and professional growth with Trained up',
            },
          ],
        },
        {
          ser: 2,
          title: 'Our mission',
          description:
            'Our mission is to provide accessible and high-quality online courses that empower learners to acquire new knowledge, develop valuable skills, and achieve personal and professional growth. We strive to create a dynamic and engaging learning environment that fosters curiosity, collaboration, and continuous improvement. Through our innovative and learner-centric approach, we aim to inspire and equip individuals from diverse backgrounds to unlock their full potential and pursue lifelong learning opportunities. We are committed to delivering exceptional educational experiences that promote self-paced learning, flexibility, and convenience, enabling our learners to thrive in an ever-evolving digital world.',
          txt: [
            {
              text: 'We are dedicated to revolutionizing education through our comprehensive range of online courses. With a passion for learning and a commitment to excellence, we strive to empower individuals around the globe to enhance their knowledge, skills, and career prospects.',
            },
            {
              text: 'We prioritize learner success and satisfaction, providing flexible learning options that fit seamlessly into busy lifestyles. Our intuitive platform offers 24/7 access to course materials, allowing learners to study at their own pace and convenience. Additionally, our responsive support team is readily available to assist learners throughout their educational journey.',
            },
          ],
        },
      ],
    },

    {
      ser: 4,
      page_id: 'contact',

      data: [
        {
          ser: 1,
          title: 'You are important',
          description:
            'We encourage you to connect with us on social media to stay updated on our latest courses, promotions, and educational content. Follow us on [Social Media Platform] for engaging discussions and to be a part of our vibrant learning community.',
          txt: [
            {
              text: 'If you have any questions about our courses, enrollment process, or any other aspect of our online learning platform, our dedicated support team is ready to help. You can also explore our Frequently Asked Questions (FAQs) section, which may already provide answers to commonly asked questions.',
            },
            {
              text: 'We understand the importance of timely responses, and we strive to provide efficient customer support. Our team will make every effort to respond to your inquiries promptly within our stated response time.',
            },
            {
              text: 'We are excited to assist you on your learning journey and help you achieve your educational goals. Your success is our priority, and we look forward to supporting you every step of the way.',
            },
          ],
        },
      ],
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
          ser: 1,
          serviceId: 'general-counsel',
          imgId: '1.png',
          title: 'General Counsel',
          txt: 'Lets start with General Counsel to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
          ],
        },
        {
          ser: 2,
          serviceId: 'criminal-litigation',
          imgId: '2.png',
          title: 'Criminal Litigation',
          txt: 'Lets start with Criminal litigation to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
          ],
        },
        {
          ser: 3,
          serviceId: 'civil-litigation',
          imgId: '3.png',
          title: 'Civil Litigation',
          txt: 'Lets start with Civil Litigation to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
          ],
        },
        {
          ser: 4,
          serviceId: 'arbitration-mediation',
          imgId: '4.png',
          title: 'Arbitration & Mediation',
          txt: 'Lets start with arbitration & mediation to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
          ],
        },
        {
          ser: 5,
          serviceId: 'commercial-law',
          imgId: '5.png',
          title: 'Commercial Law',
          txt: 'Lets start with Commercial Law to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
          ],
        },
        {
          ser: 6,
          serviceId: 'public-law',
          imgId: '6.png',
          title: 'Public Law',
          txt: 'Lets start with Public Law to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
          ],
        },
        {
          ser: 7,
          serviceId: 'property-law',
          imgId: '7.png',
          title: 'Property Law',
          txt: 'Lets start with Property Law to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights. Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
          contents: [
            {
              id: 1,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 2,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
            },
            {
              id: 3,
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients.',
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
