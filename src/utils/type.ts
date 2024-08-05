export interface LoginResponse {
  grantType: string;
  accessToken: string;
  accessTokenExpiresIn: number;
}

export interface DeployedPlay {
  pid: number;
  thumbnailUrl: string;
  title: string;
  playType: string;
  bookedSeatCount: number;
  totalSeatCount: number;
  status: string;
  deployDate: Date;
}

export interface DeployedPlayDetail {
  pid: number;
  thumbnailUrl: string;
  title: string;
  deployDate: Date;
  status: string;
  bookingStartDate: Date;
  bookingEndDate: Date;
  bookedSeatCount: number;
  totalSeatCount: number;
}

export interface Template {
  name: string;
  type: string;
  description: string;
}
