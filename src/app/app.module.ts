import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/parent/child/child.component';
import { SiblingComponent } from './pages/parent/sibling/sibling.component';
import { HttpClientModule } from '@angular/common/http';
import { UnderchildComponent } from './pages/parent/child/underchild/underchild.component';

@NgModule({
    imports: [
        BrowserModule, 
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent,
        AnimationComponent,
        SiblingComponent,
        UnderchildComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
