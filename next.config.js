const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	assetPrefix: !debug ? '/pages/david-leonard/theme-tools/out/' : '',
};
