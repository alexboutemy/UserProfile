import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    isHidden : true,
    quote : 'To beer or not to beer',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  showHideAge(): void  {
    this.user.isHidden=!this.user.isHidden;
  }
}
