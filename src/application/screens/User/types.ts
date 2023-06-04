export enum UserEntityRole {
  admin = 'bilego_admin',
  manager = 'admin_panel_manager',
  organizer = 'event_ceo',
  subscriber = 'subscriber',
}

export enum UserEntityStatus {
  inactive,
  active,
}

export type MediaType = { id?: number; name?: string; path?: string };

export interface User {
  uid: string;
  email: string;
  role?: UserEntityRole;
  name?: string;
  surname?: string;
  birthdate?: Date;
  phone?: string;
  status?: UserEntityStatus;
  access?: { ip: string; device: string; update: Date }[];
  avatar?: MediaType;
}
