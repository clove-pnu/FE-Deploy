export interface LoginResponse {
  grantType: string;
  accessToken: string;
  accessTokenExpiresIn: number;
}

export interface DeployedPlay {
  id: number;
  image: string;
  name: string;
  status: string;
  bookingStartDate: string;
  bookingEndDate: string;
}

export interface DeployedPlayDetail {
  pid: number;
  thumbnailUrl: string;
  title: string;
  deployDate: Date;
  status: string;
  bookingStartDate: Date;
  bookingEndDate: Date;
}

export interface Template {
  name: string;
  type: string;
  description: string;
}

export interface Image {
  data: Blob;
  ext: string;
}

export interface Seat {
  x: number;
  y: number;
}

export interface Section {
  sectionName: string;
  seats: Seat[];
}

export interface Venue {
  name: string;
  backgroundImage: string;
  sections: Section[];
}
