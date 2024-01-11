import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CadastrarClienteComponent } from './pages/cadastrar-cliente/cadastrar-cliente.component';
import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        CadastrarClienteComponent,
        ListarClientesComponent,
        PageHeaderComponent,
        InputComponent
    ],
    imports: [
        NgxMaskDirective,
        NgxMaskPipe,
        TooltipModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        provideNgxMask(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
