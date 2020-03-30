
import Hello from '@/pages/hello'
import Bus from '@/pages/bus'
import Count from '@/pages/count' 
import Pane from '@/pages/pane' 



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
	}

]