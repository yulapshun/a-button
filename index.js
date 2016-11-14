(function() {
    var TIME_LIMIT = 30;

    var startTime = null;
    var time = 0;
    var interval = null;
    var stopped = false;

    var app = new Vue({
        el: '#app',
        data: {
            time: 0,
            clickCount: 0,
            cps: 0,
            btnActive: false
        },
        methods: {
            reset: function() {
                this.stop();
                startTime = null;
                time = 0;
                stopped = false;

                this.time = 0;
                this.clickCount = 0;
                this.cps = 0;
                this.btnActive = false;
            },
            stop: function() {
                clearInterval(interval);
                interval = null;
                stopped = true;
            },
            onBtnDown: function(e) {
                e.preventDefault();
                this.btnActive = true;
                if (!stopped) {
                    this.clickCount++;
                }
                if (!startTime && !stopped) {
                    startTime = new Date();
                    interval = setInterval(this.tick, 100);
                }
                this.cps = time < 0.005 ? 0 : (this.clickCount * 1000 / time).toFixed(2);
            },
            onBtnUp: function() {
                this.btnActive = false;
            },
            tick: function() {
                time = new Date() - startTime;
                this.time = Math.floor(time / 1000);
                if (time >= TIME_LIMIT * 1000) {
                    this.stop();
                }
            }
        }
    });


    window.onload = function() {
        document.body.addEventListener('touchmove', function(event) {
            event.preventDefault();
        }, false);
    }
})();
