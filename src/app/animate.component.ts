import {
    Component,
    OnInit,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-animate',
    template: `<div id="e"></div>`,
    styleUrls: ['./animate.component.css']
})
export class AnimateComponent implements OnInit {
    e;
    flag = true;
    left = 0;
    constructor() { }

    ngOnInit(): void {
        this.e = document.getElementById("e");
        this.animloop();
    }

    ngOnChanges(changes: SimpleChanges): void { }


    render = () => {
        if (this.flag == true) {
            if (this.left >= 100) {
                this.flag = false
            }
            this.e.style.left = ` ${this.left++}px`
        } else {
            if (this.left <= 0) {
                this.flag = true
            }
            this.e.style.left = ` ${this.left--}px`
        }
    }

    //requestAnimationFrame效果
    animloop = () => {
        this.render();
        window.requestAnimationFrame(this.animloop);
    }

}
