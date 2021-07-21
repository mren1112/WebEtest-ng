import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-waitingpage',
  templateUrl: './waitingpage.component.html',
  styleUrls: ['./waitingpage.component.css']
})
export class WaitingpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
      this.loadpage()
  }


 async loadpage() {
   await setTimeout(() => {
      this.router.navigate(['payment']);
    }, 3500);

  }

}
