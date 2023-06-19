import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { ServiceInterface } from 'interfaces/service';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  customer_id: string;
  service_id: string;
  receptionist_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  user_appointment_customer_idTouser?: UserInterface;
  service?: ServiceInterface;
  user_appointment_receptionist_idTouser?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  service_id?: string;
  receptionist_id?: string;
}
