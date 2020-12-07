import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonServiceService } from 'src/app/pages/parent/common-service.service';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    @Input() name = 'angular parent';
    title = 'hello child';
    userGroup: any
    constructor(
        public cdr: ChangeDetectorRef,
        public commonService: CommonServiceService,
    ) { }

    ngOnInit(): void {
        console.log('parent-----OnInit');
        this.getMockData();
    }

    getMockData() {
        this.commonService.requestUsers().subscribe(res => {
            if (Array.isArray(res)) {
                this.userGroup = res.slice(0,5);
            }
            this.commonService.uerSubject$.next(res);
        })
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
