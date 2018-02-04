import { Component, Input } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html'
})
export class ProfileCardComponent {
  @Input()
  profile: Profile;

  constructor() { }
}
