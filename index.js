var app = new Vue({
    el: '#app',
    data: {
        cps: 0,
        leftCount: 0,
        rightCount: 0,
        nextBtn: 'left',
        startTime: null
    },
    methods: {
        onTouchLeft: function() {
            if (this.nextBtn !== 'left') {
                return;
            }
            this.leftCount++;
            if (!this.startTime) {
                this.startTime = new Date();
            }
            this.cps = (this.leftCount + this.rightCount) / ((new Date() - this.startTime) / 1000);

            this.nextBtn = 'right';
        },
        onTouchRight: function() {
            if (this.nextBtn !== 'right') {
                return;
            }
            this.rightCount++;
            if (!this.startTime) {
                this.startTime = new Date();
            }
            this.cps = (this.leftCount + this.rightCount) / ((new Date() - this.startTime) / 1000);

            this.nextBtn = 'left';
        }
    },
    computed: {
        leftBtnClass: function() {
            return {
                'next-btn': this.nextBtn === 'left'
            };
        },
        rightBtnClass: function() {
            return {
                'next-btn': this.nextBtn === 'right'
            };
        }
    }
});


window.onload = function() {
    document.body.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, false);
}
