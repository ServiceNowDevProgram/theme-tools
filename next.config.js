const dev = process.env.NODE_ENV !== 'production';
const dokku = process.env.DEPLOY_TARGET === 'dokku';

module.exports = {
	// assetPrefix: !dev ? '/pages/david-leonard/theme-tools/out/' : '',
	basePath: !dev && !dokku ? '/pages/david-leonard/theme-tools/out' : '',
	trailingSlash: dokku ? true : undefined,
};
