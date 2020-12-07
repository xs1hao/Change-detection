import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CommonServiceService {

    constructor(
        private http: HttpClient,

    ) { }

    // 模拟调用GitHub的网址，获取30条用户信息；
    requestUsers() {
        return this.http.get(`https://api.github.com/users?since=1`)
            .pipe(map(res => {
                    return res;
                })
            )
    }
}
