import Bus01 from '@/components/bus/bus01'

import Bus02 from '@/components/bus/bus02'

import Hello from '@/components/hello'

export default [
	{
		path: '/hello',
		name: 'Hello',
		component: Hello
	}, {
		path: '/bus01',
		name: 'Bus01',
		component: Bus01
	}, {
		path: '/bus02',
		name: 'Bus02',
		component: Bus02
	}

]