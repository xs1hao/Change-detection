import {
    Component,
    OnInit,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-animate',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
    e;
    flag = true;
    right = 0;
    constructor() { }

    ngOnInit(): void {
        this.e = document.getElementById("e");
        this.animloop();
    }

    ngOnChanges(changes: SimpleChanges): void { }


    render = () => {
        if (this.flag == true) {
            if (this.right >= 100) {
                this.flag = false
            }
            this.e.style.right = ` ${this.right++}px`
        } else {
            if (this.right <= 0) {
                this.flag = true
            }
            this.e.style.right = ` ${this.right--}px`
        }
    }

    // requestAnimationFrame效果
    animloop = () => {
        this.render();
        window.requestAnimationFrame(this.animloop);
    }

}
