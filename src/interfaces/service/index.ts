import { AppointmentInterface } from 'interfaces/appointment';
import { GarageInterface } from 'interfaces/garage';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  garage_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  garage?: GarageInterface;
  _count?: {
    appointment?: number;
  };
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  garage_id?: string;
}
