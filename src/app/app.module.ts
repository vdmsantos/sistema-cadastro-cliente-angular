// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// COMPONENTS
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CadastrarClienteComponent } from './pages/cadastrar-cliente/cadastrar-cliente.component';
import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
// OTHERS
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        CadastrarClienteComponent,
        ListarClientesComponent,
        PageHeaderComponent,
        InputComponent,
        ListComponent
    ],
    imports: [
        NgxMaskDirective,
        NgxMaskPipe,
        TooltipModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        ConfirmPopupModule,
    ],
    providers: [
        provideNgxMask(),
        MessageService,
        ConfirmationService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
