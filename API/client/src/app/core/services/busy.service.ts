import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyRequestConst = 0; 
  constructor(private spinnerService:NgxSpinnerService) { }

  busy(){
    this.busyRequestConst ++;
    this.spinnerService.show(undefined,{
      type:'_pacman',
      bdColor:'rgba(255,255,255,0.7)',
      color:'#FF4500'
    });
  }
  idle(){
    this.busyRequestConst --;
    if(this.busyRequestConst<=0)
    {
      this.busyRequestConst=0;
      this.spinnerService.hide();
    }
  }
}
