import { Venue } from '../utils/type';

const serverURL = process.env.NODE_ENV === 'production'
  ? 'http://cse.ticketclove.com/page/deploy'
  : 'http://localhost:3002';

export const venueData: Venue[] = [
  {
    name: '공연장 1',
    backgroundImage: `${serverURL}/images/1.png`,
    sections: [
      {
        sectionName: 'R',
        seats: [
          {
            x: 24,
            y: 88,
          },
          {
            x: 44,
            y: 88,
          },
          {
            x: 64,
            y: 88,
          },
          {
            x: 84,
            y: 88,
          },
          {
            x: 104,
            y: 88,
          },
        ],
      },
      {
        sectionName: 'S',
        seats: [
          {
            x: 24,
            y: 224,
          },
          {
            x: 44,
            y: 224,
          },
          {
            x: 64,
            y: 224,
          },
          {
            x: 84,
            y: 224,
          },
          {
            x: 104,
            y: 224,
          },
        ],
      },
      {
        sectionName: 'A',
        seats: [
          {
            x: 24,
            y: 360,
          },
          {
            x: 44,
            y: 360,
          },
          {
            x: 64,
            y: 360,
          },
          {
            x: 84,
            y: 360,
          },
          {
            x: 104,
            y: 360,
          },
        ],
      },
    ],
  },
  {
    name: '공연장 2',
    backgroundImage: `${serverURL}/images/2.png`,
    sections: [
      {
        sectionName: 'A',
        seats: [
          {
            x: 24,
            y: 88,
          },
          {
            x: 44,
            y: 88,
          },
          {
            x: 64,
            y: 88,
          },
          {
            x: 84,
            y: 88,
          },
          {
            x: 104,
            y: 88,
          },
        ],
      },
      {
        sectionName: 'B',
        seats: [
          {
            x: 24,
            y: 224,
          },
          {
            x: 44,
            y: 224,
          },
          {
            x: 64,
            y: 224,
          },
          {
            x: 84,
            y: 224,
          },
          {
            x: 104,
            y: 224,
          },
        ],
      },
      {
        sectionName: 'C',
        seats: [
          {
            x: 24,
            y: 360,
          },
          {
            x: 44,
            y: 360,
          },
          {
            x: 64,
            y: 360,
          },
          {
            x: 84,
            y: 360,
          },
          {
            x: 104,
            y: 360,
          },
        ],
      },
    ],
  },
];
