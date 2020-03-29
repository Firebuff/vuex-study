
import Hello from '@/components/hello'
import Bus from '@/components/bus/bus'

// 该文件中的组件已在index.js中引入和导出， 所以直接写目录，会自动 读取 index.js 这个文件（node.js默认的)
import Count from '@/components/countUp' 



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
	}

]