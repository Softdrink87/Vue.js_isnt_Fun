const Vue = require('vue');

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'this message has loaded to' + new Date(),
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen : true,
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'learning javascript' },
            { text: 'learning vue.js' },
            { text: 'learning something good!' },
        ]
    }
});