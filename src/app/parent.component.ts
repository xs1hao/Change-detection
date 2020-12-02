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
    SimpleChanges
} from '@angular/core';


@Component({
    selector: 'app-parent',
    template: `
        <button (click)="modTitle()" title="click modify title">Parent: {{name}}</button>
        <h3>Title: 
            <span style="color: #23c6c7">
                {{title}}
            </span>    
        </h3>
        <app-child [name]="title"></app-child>
        <app-animate></app-animate>
        <!-- <app-child></app-child> -->
    `
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit {
    @Input() name = 'angular parent';
    title = 'hello child';

    constructor(public cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        console.log('parent-----OnInit');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('parent-----OnChanges');
    }

    ngDoCheck(): void {
        console.log('parent-----DoCheck');
    }

    ngAfterContentInit(): void {
        console.log('parent-----AfterContentInit');
    }

    ngAfterViewInit(): void {
        console.log('parent-----AfterViewInit');
    }

    modTitle() {
        this.title += ' Next!';
    }
}
