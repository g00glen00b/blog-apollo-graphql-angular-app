import { Profile } from '../profile/profile';

export interface Comment {
  id: number;
  text: string;
  author: Profile;
}
