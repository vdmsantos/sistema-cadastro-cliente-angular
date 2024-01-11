import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './pages/cadastrar-cliente/cadastrar-cliente.component';

export const APP_ROUTE_PATHS = {
    LISTAR_CLIENTES: 'listar-clientes',
    CADASTRAR_CLIENTE: 'cadastrar-cliente',
}

const routes: Routes = [
    { path: '', redirectTo: APP_ROUTE_PATHS.LISTAR_CLIENTES, pathMatch: 'full' },
    { path: APP_ROUTE_PATHS.LISTAR_CLIENTES, component: ListarClientesComponent },
    { path: APP_ROUTE_PATHS.CADASTRAR_CLIENTE, component: CadastrarClienteComponent },
    { path: '**', redirectTo: APP_ROUTE_PATHS.LISTAR_CLIENTES, pathMatch: 'prefix' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
