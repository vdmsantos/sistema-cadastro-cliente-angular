// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
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
import { ListSorterComponent } from './components/list-sorter/list-sorter.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ListPaginatorComponent } from './components/list-paginator/list-paginator.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { SidebarMobileComponent } from './components/sidebar-mobile/sidebar-mobile.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ToLocaleStringPipe } from './pipes/to-locale-string.pipe';
import { DialogMobileListOptionsComponent } from './components/dialog-mobile-list-options/dialog-mobile-list-options.component';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        CadastrarClienteComponent,
        ListarClientesComponent,
        PageHeaderComponent,
        InputComponent,
        ListComponent,
        ListSorterComponent,
        InputSearchComponent,
        ListPaginatorComponent,
        DialogDeleteComponent,
        DialogEditComponent,
        FormCustomerComponent,
        SidebarMobileComponent,
        InicioComponent,
        ToLocaleStringPipe,
        DialogMobileListOptionsComponent
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
        ToastModule,
        HttpClientModule
    ],
    providers: [
        provideNgxMask(),
        MessageService,
        ConfirmationService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
