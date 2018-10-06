import create from './components/create.vue'
import customersinfo from './components/customersinfo.vue'

const routes = [
	{ path: '/create', component: create, name: 'create' },
	{ path: '/customersinfo', component: customersinfo, name: 'customersinfo' }
]

export default routes