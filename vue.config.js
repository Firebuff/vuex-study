const path = require('path')

const resolve = function (dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	lintOnSave: false,
	chainWebpack: config => {
		config.resolve.alias
			.set('@',resolve('src'))
			.set('_c',resolve('src/components'))
	}
}