function timer() {
    var nDate = new Date();
    var nashaDate = new Date(2020,5,30,0,0,0); //задаем дату
    var result = (nashaDate - nDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
       var sec = Math.floor((result/1000)%60);
	
       var min = Math.floor((result/1000/60)%60);
	
       var hours = Math.floor((result/1000/60/60)%24);
	
       var days = Math.floor(result/1000/60/60/24);
	
    if (sec < 10) sec = '0' + sec;
    if (min < 10) min = '0' + min;
    if (hours < 10) hours = '0' + hours;
    var elmnt = document.getElementById('timer');
    elmnt.innerHTML = days + ' : ' + hours + ' : ' + min + ' : ' + sec;
    setTimeout(timer, 1000);
}
window.onload = function() {
    timer();
}