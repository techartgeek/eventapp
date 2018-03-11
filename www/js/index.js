var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        window.location = "http://viksharm-wx-5:3000";
    }
};

app.initialize();