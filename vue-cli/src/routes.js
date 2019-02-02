import Product from './Components/Product/Product.vue';
import ProductDetail from './Components/Product/ProductDetail.vue';
import Login from './Components/Login.vue';

export const routes = [
    {path: '', component: Product},
    {path: '/detail', component: ProductDetail},
    {path: '/login', component: Login}
];