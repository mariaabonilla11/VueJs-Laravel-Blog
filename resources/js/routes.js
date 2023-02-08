const Home = () => import('./components/Home.vue')
const Contacto = () => import('./components/Contacto.vue')


const Mostrar = () => import('./components/blog/Mostrar.vue')
const Crear = () => import('./components/blog/Crear.vue')
const Editar = () => import('./components/blog/Editar.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    },
    {
        name: 'mostrarBlogs',
        path: '/blogs',
        component: Mostrar
    },
    {
        name: 'editarBlog',
        path: '/editar/:id',
        component: Editar
    },
    {
        name: 'crearBlog',
        path: '/crear',
        component: Crear
    },
];