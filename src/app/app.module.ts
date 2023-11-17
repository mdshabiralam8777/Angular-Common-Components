import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuiInputsComponent } from './CommonUserInterface/cui-inputs/cui-inputs.component';
import { CuiButtonComponent } from './CommonUserInterface/cui-button/cui-button.component';
import { CuiDropdownComponent } from './CommonUserInterface/cui-dropdown/cui-dropdown.component';
import { CuiTableComponent } from './CommonUserInterface/cui-table/cui-table.component';
import { CuiModalComponent } from './CommonUserInterface/cui-modal/cui-modal.component';
import { CuiCollapsibleContainerComponent } from './CommonUserInterface/cui-collapsible-container/cui-collapsible-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CuiInputsComponent,
    CuiButtonComponent,
    CuiDropdownComponent,
    CuiTableComponent,
    CuiModalComponent,
    CuiCollapsibleContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
