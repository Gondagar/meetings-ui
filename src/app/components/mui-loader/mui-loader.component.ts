import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';


import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mui-loader',
  templateUrl: './mui-loader.component.html',
  styleUrls: ['./mui-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiLoaderComponent implements OnInit, OnDestroy {
  public loading: boolean;
  public requestSubscription: Subscription;

  constructor(private apiService: ApiService, private cdRef: ChangeDetectorRef) {
    this.loading = false;
  }

  ngOnInit() {
    this.requestSubscription = this.apiService.loading.subscribe(loading => {
      this.loading = loading;
      this.cdRef.markForCheck();

      return loading;
    });
  }

  ngOnDestroy() {
    this.requestSubscription.unsubscribe();
  }
}
