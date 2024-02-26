import { Component, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html'
})
export class IntervalComponent implements OnDestroy {
  oneSecond
  threeSeconds
  constructor(){
    interval(500)
    
    this.oneSecond =
    interval(1000).subscribe((value)=>{
      console.log('ONE second ' + value);
    })

    this.threeSeconds = interval(3000)
  }
  goInterval(){
    this.threeSeconds.subscribe((value)=>{
      console.log('THREE seconds ' + value);
    })
  }

  ngOnDestroy(){
    this.oneSecond.unsubscribe()
  }

}
