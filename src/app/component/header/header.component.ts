import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { clear } from 'console';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GlobalUrlToRedirect,MessegeNoti } from '../../interfaces/GlobalUrlToRedirect';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public stdcode = '';
  private modalRef: BsModalRef;
  public message = '';

  private baseUrlRedirec = GlobalUrlToRedirect.BASE_REDIRECT_URL;
  constructor(
    private bnIdle: BnNgIdleService,
    private modalService: BsModalService,
    private router: Router
  ) {
    console.clear();
    this.bnIdle.startWatching(1800).subscribe((res) => {
      if (res) {
        //console.log("session expired");
        alert('Session expired, Please access system again');
        this.logout();
      }
    });
  }

  open(menu){
    menu.openMenu();
    }

  ngOnInit() {
    this.stdcode = sessionStorage.getItem('stdcode');
    if (this.stdcode == null) {
      alert('Please login again');
      this.backClicked();
    }
  }

  logout() {
    sessionStorage.removeItem('stdcode');
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = this.baseUrlRedirec;
  }

  backClicked() {
    sessionStorage.clear();
    window.location.href = this.baseUrlRedirec;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  btnconfirm(): void {
    this.message = 'Confirmed!';
    this.logout();
  }

  btndecline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  btnNav(str: Number): void {
    this.clearDataOnLoad(str);
  }

  clearDataOnLoad(str: Number): void {
    sessionStorage.removeItem('refkey');
    sessionStorage.removeItem('dataregister');
    sessionStorage.removeItem('reloadpayment');
    sessionStorage.removeItem('todoCourse');
    sessionStorage.removeItem('todoSelectCourse');
    sessionStorage.removeItem('Etsno');
    sessionStorage.removeItem('getrefkey');
    sessionStorage.removeItem('subrefkey');
    sessionStorage.removeItem('total');
    sessionStorage.removeItem('todoHis');
    sessionStorage.removeItem('fullrefkey');
    sessionStorage.removeItem('tmpdatetoStr');
    sessionStorage.removeItem('todoresults');

    setTimeout(() => {
      if (Number(str) === 1) {
        this.router.navigate(['/']);
      } else if (Number(str) === 2) {
        this.router.navigate(['qrpagelist']);
      } else if (Number(str) === 3) {
        this.router.navigate(['regisall']);
      } else if (Number(str) === 4) {
        this.router.navigate(['recieptall']);
      } else if (Number(str) === 5) {
        this.router.navigate(['policy']);
      } else if (Number(str) === 6) {
        this.router.navigate(['info']);
      }
    }, 500);
  }
}
