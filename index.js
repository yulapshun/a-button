(function() {
    window.onload = function() {

        document.body.addEventListener('touchmove', function(event) {
            event.preventDefault();
        }, false);

        var leftCount = 0;
        var rightCount = 0;

        var nextClick = 'left';

        var leftBtn = document.querySelector('#left');
        var rightBtn = document.querySelector('#right');
        var display = document.querySelector('#display');
        var leftCountDiv = document.querySelector('#left_count');
        var rightCountDiv = document.querySelector('#right_count');

        leftBtn.addEventListener('touchstart', function() {
            if (nextClick !== 'left') {
                return;
            }
            leftCount++;
            leftCountDiv.innerHTML = leftCount;
            leftBtn.classList.remove('next-btn');
            rightBtn.classList.add('next-btn');

            nextClick = 'right';
        });
        rightBtn.addEventListener('touchstart', function() {
            if (nextClick !== 'right') {
                return;
            }
            rightCount++;
            rightCountDiv.innerHTML = rightCount;
            leftBtn.classList.add('next-btn');
            rightBtn.classList.remove('next-btn');

            nextClick = 'left';
        });
    }
})();
