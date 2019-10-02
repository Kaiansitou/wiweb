let mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve('./resources/assets'),
            path.resolve('./node_modules')
        ]
    }
});

mix.less('resources/less/index.less', 'public/css/index.css');
mix.less('resources/less/data.less', 'public/css/data.css');
mix.less('resources/less/brand.less', 'public/css/brand.css');
mix.less('resources/less/market.less', 'public/css/market.css');
mix.less('resources/less/media.less', 'public/css/media.css');
mix.less('resources/less/contact.less', 'public/css/contact.css');
mix.less('resources/less/join.less', 'public/css/join.css');

mix.scripts([
    'node_modules/swiper/dist/js/swiper.min.js'
], 'public/js/vendor.js');
mix.styles([
    'node_modules/swiper/dist/css/swiper.min.css'
], 'public/css/vendor.css');

mix.copy('resources/images', 'public/images');