var app = new Vue({
    el: '#app',
    data: {
        time: 0,
        clickCount: 0,
        cps: 0,
        startTime: null,
        interval: null,
        btnActive: false
    },
    methods: {
        reset: function() {
            this.time = 0;
            this.clickCount = 0;
            this.cps = 0;
            this.startTime = null;
            clearInterval(this.interval);
            this.interval = null;
            this.btnActive = false;
        },
        onBtnDown: function(e) {
            e.preventDefault();
            this.btnActive = true;
            this.clickCount++;
            if (!this.startTime) {
                var startTime = new Date();
                this.startTime = startTime;
                this.interval = setInterval((function() {
                    this.time = Math.floor((new Date() - startTime) / 1000);
                }).bind(this), 100);
            }
            var elapsedTime = ((new Date() - this.startTime) / 1000);
            this.cps = elapsedTime < 0.005 ? 0 : ((this.clickCount + this.clickCount) / elapsedTime).toFixed(2);
        },
        onBtnUp: function() {
            this.btnActive = false;
        },
        hihi: function() {
            this.btnActive = true;
        },
        hihi2: function() {
            this.btnActive = false;
        }
    }
});


window.onload = function() {
    document.body.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, false);
}
