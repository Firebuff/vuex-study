
import Hello from '@/pages/hello'
import Bus from '@/pages/bus'
import Count from '@/pages/count' 
import Pane from '@/pages/pane' 
import Recursion from '@/pages/recursion' 
import Api from '@/pages/api' 
import Admin from '@/pages/admin' 



export default [
	{
		path: '/hello',
		name: 'Hello',
		component: Hello
	}, {
		path: '/bus',
		name: 'Bus',
		component: Bus
	}, {
		path: '/count',
		name: 'Count',
		component: Count
	}, {
		path: '/pane',
		name: 'Pane',
		component: Pane
	}, {
		path: '/recursion',
		name: 'Recursion',
		component: Recursion
	}, {
		path: '/api',
		name: 'Api',
		component: Api
	}, {
		path: '/admin',
		name: 'Admin',
		component: Admin
	}

]