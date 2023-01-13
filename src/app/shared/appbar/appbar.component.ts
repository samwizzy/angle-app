import { Component, OnInit } from '@angular/core';
import { swipeIn } from 'src/app/utility/animations/animations';
import { AuthService } from 'src/app/utility/services/auth.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  animations: [swipeIn],
})
export class AppbarComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
}
