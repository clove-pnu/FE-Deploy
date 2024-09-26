import { Venue } from '../utils/type';

const serverURL = process.env.NODE_ENV === 'production'
  ? 'http://cse.ticketclove.com/page/deploy'
  : 'http://localhost:3002';

export const venueData: Venue[] = [
  {
    name: '공연장 1',
    backgroundImage: `${serverURL}/images/1.png`,
    imageSize: {
      width: 1024,
      height: 944,
    },
    sections: [
      {
        sectionName: 'R',
        seats: [
          {
            x: 54,
            y: 182,
          },
          {
            x: 74,
            y: 182,
          },
          {
            x: 94,
            y: 182,
          },
          {
            x: 114,
            y: 182,
          },
          {
            x: 134,
            y: 182,
          },
        ],
      },
      {
        sectionName: 'S',
        seats: [
          {
            x: 54,
            y: 454,
          },
          {
            x: 74,
            y: 454,
          },
          {
            x: 94,
            y: 454,
          },
          {
            x: 114,
            y: 454,
          },
          {
            x: 134,
            y: 454,
          },
        ],
      },
      {
        sectionName: 'A',
        seats: [
          {
            x: 54,
            y: 726,
          },
          {
            x: 74,
            y: 726,
          },
          {
            x: 94,
            y: 726,
          },
          {
            x: 114,
            y: 726,
          },
          {
            x: 134,
            y: 726,
          },
        ],
      },
    ],
  },
  {
    name: '공연장 2',
    backgroundImage: `${serverURL}/images/2.png`,
    imageSize: {
      width: 760,
      height: 720,
    },
    sections: [
      {
        sectionName: 'A',
        seats: [
          {
            x: 52,
            y: 164,
          },
          {
            x: 72,
            y: 164,
          },
          {
            x: 92,
            y: 164,
          },
          {
            x: 112,
            y: 164,
          },
          {
            x: 132,
            y: 164,
          },
        ],
      },
      {
        sectionName: 'B',
        seats: [
          {
            x: 466,
            y: 164,
          },
          {
            x: 486,
            y: 164,
          },
          {
            x: 506,
            y: 164,
          },
          {
            x: 526,
            y: 164,
          },
          {
            x: 546,
            y: 164,
          },
        ],
      },
      {
        sectionName: 'C',
        seats: [
          {
            x: 52,
            y: 500,
          },
          {
            x: 72,
            y: 500,
          },
          {
            x: 92,
            y: 500,
          },
          {
            x: 112,
            y: 500,
          },
          {
            x: 132,
            y: 500,
          },
        ],
      },
    ],
  },
];
