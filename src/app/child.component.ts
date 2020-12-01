import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnInit,
    ApplicationRef,
    SimpleChanges
} from '@angular/core';
import { ParentComponent } from './parent.component';
import { interval, Observable } from 'rxjs';
import { throttleTime, map, scan } from 'rxjs/operators';

@Component({
    selector: 'app-child',
    template: `
        <p>
            在组件中关闭变更检测，只有值发生变化之后，在onchange() 方法中在执行子组件的变更检测。
        </p>
        <h1 (click)="counter()" title="click addCount">Child: {{name}}</h1>
        <h5>Title: {{name + ' 555'}}</h5>
        <p>Today: {{getDate() | date}}</p>
        <p>Count: {{count}}</p>
        <p>num: {{num$ | async}}</p>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit {
    @Input() name = '';
    count = 0;
    num$: Observable<number>;

    constructor(
        private parentComponent: ParentComponent,
        public cdr: ChangeDetectorRef
    ) { }

    /**
     * 
     * 只要父组件中对子组件做了属性绑定，不管是在 OnChanges，OnInit，DoCheck，AfterContentInit 和 AfterViewInit 
     * 中的任意一个声明周期钩子中执行下述代码都会报错。
     * 
     */

    ngOnInit(): void {
        // 如果 父子组件之间有通过input输入属性title 那么会在开发环境报错；
        // this.parentComponent.title = '在child组件中的title ~';

        console.log('child-----OnInit');

        this.cdr.detach();

        // setTimeout(() => {
        //   this.count = 10;
        //   this.cdr.detectChanges(); // 手动发起该组件到各个子组件的变更检测;
        // });

        //this.num$=interval(2000);
    }

    ngOnChanges(changes: SimpleChanges): void {
        // this.parentComponent.title = 'angular next!';
        console.log('child-----OnChanges');

        // 在输入属性发生变化以后，手动执行变更检测；在init 中关闭检测

        setTimeout(() => {
            this.cdr.detectChanges(); // 手动发起该组件到各个子组件的变更检测;
        }, 2000);
    }

    ngDoCheck(): void {
        // this.parentComponent.title = 'angular next!';
        console.log('child-----DoCheck');
    }

    ngAfterContentInit(): void {
        // this.parentComponent.title = 'angular next!';
        console.log('child-----AfterContentInit');
    }

    ngAfterViewInit(): void {
        //this.parentComponent.title = 'angular next!';
        console.log('child-----AfterViewInit');
    }

    getDate() {
        return new Date();
    }

    counter() {
        this.count++;
    }
}
