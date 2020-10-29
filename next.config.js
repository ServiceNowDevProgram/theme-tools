const TARGET_ENV = {
	DEV: 'DEV',
	DOKKU: 'DOKKU',
	GH_PAGES: 'GH_PAGES',
};

let targetEnv;
if (process.env.NODE_ENV !== 'production') {
	targetEnv = TARGET_ENV.DEV;
} else if (process.env.TARGET_ENV === 'dokku') {
	targetEnv = TARGET_ENV.DOKKU;
} else {
	targetEnv = TARGET_ENV.GH_PAGES;
}

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	// assetPrefix: !debug ? '/pages/david-leonard/theme-tools/out/' : '',
	basePath: GH_PAGES ? '/pages/david-leonard/theme-tools/out' : '',
	distDir: DOKKU ? 'dokku_out' : undefined,
};
