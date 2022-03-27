const paths = {
    'styles': {
        'src': 'src/assets/styles/index.scss',
        'dest': 'dist/',
    },
    'scripts': {
        'src': 'src/scripts/*.js',
        'dest': 'dist/',
    },
    'html': {
        'src': 'src/pages/*.html',
        'dest': 'dist/',
    },
    'images': {
        'src': ['src/assets/img/*.{jpg,jpeg,png,svg,gif,webp,ico}', 'src/assets/favicon.png'],
        'dest': 'dist/assets/',
    },
    'clean': {
        'dir': 'dist/',
    },
    'serve': {
        'dir': 'dist/',
    },
};

export default paths
