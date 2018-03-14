var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        window.location = "https://cxe.corp.adobe.com:8080";
    }
};

app.initialize();