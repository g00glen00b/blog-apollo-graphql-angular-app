import { Profile } from '../profile/profile';
import { Comment } from '../comment/comment';

export interface Article {
  id: number;
  title: string;
  author: Profile;
  text?: string;
  comments?: Comment[];
}
