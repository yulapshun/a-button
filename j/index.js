(function() {
    var TIME_LIMIT = 30;
    var J_SIZE = 230;

    var startTime = null;
    var time = 0;
    var interval = null;

    var app = new Vue({
        el: '#app',
        data: {
            started: false,
            stopped: false,
            time: TIME_LIMIT,
            clickCount: 0,
            cps: 0,
            btnActive: false,
            showResult: false,
            jSize: J_SIZE
        },
        methods: {
            reset: function() {
                this.stop();
                startTime = null;
                time = 0;

                this.started = false;
                this.stopped = false;
                this.time = TIME_LIMIT;
                this.clickCount = 0;
                this.cps = 0;
                this.btnActive = false;
                this.showResult = false;
                this.jSize = J_SIZE;
            },
            stop: function() {
                clearInterval(interval);
                interval = null;
                this.started = false;
                this.stopped = true;
                this.showResult = true;
                this.cps = (this.clickCount * 1000 / time).toFixed(2);
            },
            onBtnDown: function(e) {
                e.preventDefault();
                if (this.btnActive) {
                    return;
                }
                this.btnActive = true;
                if (!this.stopped) {
                    this.started = true;
                    this.clickCount++;
                    this.jSize++;
                }
                if (!startTime && !this.stopped) {
                    startTime = new Date();
                    interval = setInterval(this.tick, 100);
                }
            },
            onBtnUp: function() {
                this.btnActive = false;
            },
            tick: function() {
                time = new Date() - startTime;
                this.time = Math.ceil(TIME_LIMIT - time / 1000);
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
