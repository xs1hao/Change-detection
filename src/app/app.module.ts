import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/parent/child/child.component';
import { SiblingComponent } from './pages/parent/sibling/sibling.component';
import { HttpClientModule } from '@angular/common/http';

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
        SiblingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
