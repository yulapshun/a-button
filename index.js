(function() {
    
    window.onload = function() {

        document.body.addEventListener('touchmove', function(event) {
            event.preventDefault();
        }, false);

        var leftCount = 0;
        var rightCount = 0;

        var startTime = null;
        var nextClick = 'left';

        var leftBtn = document.querySelector('#left');
        var rightBtn = document.querySelector('#right');
        var leftCountDiv = document.querySelector('#left_count');
        var rightCountDiv = document.querySelector('#right_count');
        var cpsDiv = document.querySelector('#cps');

        leftBtn.addEventListener('touchstart', function() {
            if (nextClick !== 'left') {
                return;
            }
            leftCount++;
            if (!startTime) {
                startTime = new Date();
            }
            var cps = (leftCount + rightCount) / ((new Date() - startTime) / 1000);

            leftCountDiv.innerHTML = leftCount;
            leftBtn.classList.remove('next-btn');
            rightBtn.classList.add('next-btn');
            cpsDiv.innerHTML = cps;

            nextClick = 'right';
        });
        rightBtn.addEventListener('touchstart', function() {
            if (nextClick !== 'right') {
                return;
            }
            rightCount++;
            if (!startTime) {
                startTime = new Date();
            }
            var cps = (leftCount + rightCount) / ((new Date() - startTime) / 1000);

            rightCountDiv.innerHTML = rightCount;
            leftBtn.classList.add('next-btn');
            rightBtn.classList.remove('next-btn');
            cpsDiv.innerHTML = cps;

            nextClick = 'left';
        });
    }
})();
