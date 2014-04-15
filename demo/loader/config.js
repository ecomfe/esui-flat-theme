require.config({
    packages: [
        {
            name: 'esui',
            location: '//127.0.0.1:8848/esui/src'
        },
        {
            name: 'mini-event',
            location: '//127.0.0.1:8848/mini-event/src',
            main: 'main'
        },
        {
            name: 'underscore',
            location: '//127.0.0.1:8848/underscore',
            main: 'underscore'
        },
        {
            name: 'moment',
            location: '//127.0.0.1:8848/moment',
            main: 'moment'
        }
    ]
});
document.createElement('header');