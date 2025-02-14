import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './pages/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarProdutoComponent } from './pages/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './pages/listar-produtos/listar-produtos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CadastrarPedidoComponent } from './pages/cadastrar-pedido/cadastrar-pedido.component';
import { ListarPedidoComponent } from './pages/listar-pedido/listar-pedido.component';

export const APP_ROUTE_PATHS = {
    INICIO: 'inicio',
    LISTAR_CLIENTES: 'listar-clientes',
    CADASTRAR_CLIENTE: 'cadastrar-cliente',
    CADASTRAR_PRODUTO: 'cadastrar-produto',
    LISTAR_PRODUTOS: 'listar-produtos',
    CADASTRAR_PEDIDO: 'cadastrar-pedido',
    LISTAR_PEDIDOS: 'listar-pedidos',
};

const routes: Routes = [
    { path: '', redirectTo: APP_ROUTE_PATHS.INICIO, pathMatch: 'full' },
    { path: APP_ROUTE_PATHS.INICIO, component: InicioComponent },
    {
        path: APP_ROUTE_PATHS.LISTAR_CLIENTES,
        component: ListarClientesComponent,
    },
    {
        path: APP_ROUTE_PATHS.CADASTRAR_CLIENTE,
        component: CadastrarClienteComponent,
    },
    {
        path: APP_ROUTE_PATHS.CADASTRAR_PRODUTO,
        component: CadastrarProdutoComponent,
    },
    {
        path: APP_ROUTE_PATHS.LISTAR_PRODUTOS,
        component: ListarProdutosComponent,
    },
    {
        path: APP_ROUTE_PATHS.CADASTRAR_PEDIDO,
        component: CadastrarPedidoComponent,
    },
    {
        path: APP_ROUTE_PATHS.LISTAR_PEDIDOS,
        component: ListarPedidoComponent,
    },
    { path: '**', redirectTo: APP_ROUTE_PATHS.INICIO, pathMatch: 'prefix' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
