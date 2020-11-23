import { VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AutoSizeVirtualScrollStrategy } from './auto-size-virtual-scroll';

export class CustomVirtualScrollStrategy extends AutoSizeVirtualScrollStrategy {
  constructor() {
    super(100, 200);
  }
}

/** @title Virtual scroll with a custom strategy */
@Component({
  selector: 'app-list',
  styleUrls: ['app-list.css'],
  templateUrl: 'app-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useClass: CustomVirtualScrollStrategy
    }
  ]
})

export class AppListComponent {
  items = Array.from({ length: 2000000 }).map((_, i) => `Item #${i}`);
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
