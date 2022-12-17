import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { AppConstants } from '../model/app-constants';
import { User } from '../model/user';
import { LocalStorageService } from '../service/local-storage-service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: User;
  username: string;
  userLoggedIn: boolean;
  vegetablesLink: string;
  fruitsLink: string;
  dryfruitsLink: string;
  nestleLink: string;
  hersheysLink: string;
  heinzLink: string;
  drOetkarLink: string;
  knorrLink: string;


  constructor(private router: Router, private localStorageService: LocalStorageService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.userLoggedIn = (localStorageService.getLoggedInUser() != null);
        if (this.userLoggedIn) {
          this.user = localStorageService.getLoggedInUser();
          this.username = this.user.firstName + ' ' + this.user.lastName;
        }
      }
    });
  }

  ngOnInit(): void {
    this.vegetablesLink = '/products/' + AppConstants.VEGETABLES;
    this.fruitsLink = '/products/' + AppConstants.FRUITS;
    this.dryfruitsLink = '/products/' + AppConstants.DRYFRUITS;
    this.nestleLink = '/products/' + AppConstants.NESTLE;
    this.hersheysLink = '/products/' + AppConstants.HERSHEYS;
    this.heinzLink = '/products/' + AppConstants.HEINZ;
    this.drOetkarLink = '/products/' + AppConstants.DR_OETKAR;
    this.knorrLink = '/products/' + AppConstants.KNORR;
    this.userLoggedIn = (this.localStorageService.getLoggedInUser() != null);
  }

  logout(): void {
    this.userLoggedIn = false;
    this.localStorageService.removeLoggedInUser();
    this.router.navigateByUrl('/');
  }

}
