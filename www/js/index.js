var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        window.location = "http://viksharm-wx-3:3000";
    }
};

app.initialize();