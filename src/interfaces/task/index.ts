import { UserInterface } from 'interfaces/user';
import { AppointmentInterface } from 'interfaces/appointment';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  status: string;
  mechanic_id: string;
  appointment_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  appointment?: AppointmentInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  mechanic_id?: string;
  appointment_id?: string;
}
