import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,{
    // ngZone: 'noop' // 禁用zone.js 事件不在触发；DOM 的更新依赖于 tick() 的触发，zone.js 帮助开发者省去了手动触发的操作。
})
  .catch(err => console.error(err));
