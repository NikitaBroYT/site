


// Math.floor(Math.random()*3)
var arr, arr_events = [],
	win_block, winner, again, winning, game;

var comp_sym = "o";
var user_sym = "x";

onload = function () {
	game = document.getElementById("game");
	arr = game.getElementsByClassName("inner");
	win_block = document.getElementById("win_block");
	win_text = win_block.getElementsByClassName("winner")[0];
	again = win_block.getElementsByClassName("again")[0];
	winning = game.getElementsByClassName("winning")[0];

	again.onclick = function () {
		winning.style.display = "none";
		win_block.style.display = "none";
		clearTable();
		randomMove();
	};

	for (var i = 0; i < arr.length; i++) {
		arr[i].onclick = function () {
			drawSym(this);
		};

		/* тут хотел использовать addEven.. и потом убрать его, когда определился победитель */
	}
	randomMove();

};

function randomMove() {
	var rnd = getRandomInt(2);
	console.log(rnd);
	if (rnd == 1) {
		autoDrawing();
	}
	return true;
}

function drawSym(item, sym = user_sym) {
	// console.log(item);
	if (item.hasChildNodes()) return false;
	item.innerHTML = sym;

	var winner = checkWinner();

	if (sym == user_sym && !winner)
		autoDrawing();


	if (winner == user_sym) {
		win_text.innerHTML = "Вы выиграли!";
		win_text.style.color = "green";
		winning.style.backgroundColor = "rgba(0,200,0, 0.5)";
	} else if (winner == comp_sym) {
		win_text.innerHTML = "Выиграл компьютер! Попоробуйте еще раз!";
		win_text.style.color = "red";
		winning.style.backgroundColor = "rgba(200,0,0, 0.5)";
	}
	if (winner) {
		winning.style.display = "block";
		win_block.style.display = "block";
	}
	return true;
}

function checkWinner() {
	var winner = "";
	var j = 0;


	var xy_1_1 = arr[0].innerHTML;
	var xy_1_2 = arr[4].innerHTML;
	var xy_1_3 = arr[8].innerHTML;

	var xy_2_1 = arr[2].innerHTML;
	var xy_2_2 = arr[4].innerHTML;
	var xy_2_3 = arr[6].innerHTML;

	if ((xy_1_1 && xy_1_2 && xy_1_3) || (xy_2_1 && xy_2_2 && xy_2_3)) {

		if (xy_1_1 == user_sym && xy_1_2 == user_sym && xy_1_3 == user_sym) {
			winner = user_sym;
		} else if (xy_1_1 == comp_sym && xy_1_2 == comp_sym && xy_1_3 == comp_sym) {
			winner = comp_sym;
		}


		if (xy_2_1 == user_sym && xy_2_2 == user_sym && xy_2_3 == user_sym) {
			winner = user_sym;
		} else if (xy_2_1 == comp_sym && xy_2_2 == comp_sym && xy_2_3 == comp_sym) {
			winner = comp_sym;
		}
	}




	if (!winner) {
		for (var i = 0; i < 3; i++) {

			// alert(i);

			var a1 = arr[i].innerHTML;
			var a2 = arr[i + 3].innerHTML;
			var a3 = arr[i + 6].innerHTML;

			var b1 = arr[i].innerHTML;
			var b2 = arr[i + 1].innerHTML;
			var b3 = arr[i + 2].innerHTML;


			// console.log("b1 = '" + (b1) + "' b2 = '" + (b2) + "' b3 = '" + (b3) +"'");

			if (a1 == user_sym && a2 == user_sym && a3 == user_sym) {
				winner = user_sym;
				break;
			} else if (a1 == comp_sym && a2 == comp_sym && a3 == comp_sym) {
				winner = comp_sym;
				break;
			}


			if (i != 0) j = 3 * i;

			b1 = arr[j].innerHTML;
			b2 = arr[j + 1].innerHTML;
			b3 = arr[j + 2].innerHTML;

			if (b1 == user_sym && b2 == user_sym && b3 == user_sym) {
				winner = user_sym;
				break;
			} else if (b1 == comp_sym && b2 == comp_sym && b3 == comp_sym) {
				winner = comp_sym;
				break;
			}
			if (winner)
				break;
		}
	}

	return winner;
}

function autoDrawing() {

	if (!ckeckFreeSpace()) {

		win_text.innerHTML = "Выиграла ничья! ";
		win_text.style.color = "blue";
		winning.style.display = "block";
		winning.style.backgroundColor = "rgba(0,0,200, 0.5)";
		win_block.style.display = "block";

		return false;
	}
	var el, rnd;

	do {
		rnd = getRandomInt(arr.length);
		el = arr[rnd];
		// console.log(rnd);
	} while (!drawSym(el, comp_sym));

	if (!ckeckFreeSpace()) {
		autoDrawing();
	}
}

function clearTable() {
	for (var i = 0; i < arr.length; i++) {
		arr[i].innerHTML = "";
	}
}

function ckeckFreeSpace() {
	var res = false;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i].hasChildNodes()) {
			res = false;
		} else {
			res = true;
			break;
		}
	}

	return res;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}







function addHandler(el, ev, func) {
	try {
		el.addEventListener(ev, func, false);
	} catch (e) {
		el.attachEvent("on" + ev, func);
	}
}


function removerEvent(el, ev, func) {
	try {
		el.removeEventListener(ev, func, false);

	} catch (x) {
		el.detachEvent("on" + ev, func);

	}
}

function app() {
	document.getElementById('area').innerHTML =
		'Кнопка';
}

function app() {
	document.getElementById('area1').innerHTML =
		'Кнопка2'
}

function num() {
	var i = 1;
	while (i <= 10) {
		document.write('<br>');
		document.write('<h1>');
		document.write(i);
		i = i + 1;
	}
}

function go() {
	a = document.getElementById("input").value
	document.getElementById("results").value = a;
}


// ________________________________________
function CountDownTimer(duration, granularity) {

    this.time_format = this.getTimeFormat(duration);

    this.duration = this.toSeconds(duration);
    this.initialDuration = this.duration;
    this.granularity = granularity || 1000;
    this.running = false;
    this.onStopCallback = undefined;
    this.onRestartCallback = undefined;
    this.tickFunctions = [];

    this.timerHandle = undefined;
}



CountDownTimer.TIME_FORMAT_HHMMSS = "hh:mm:ss";
CountDownTimer.TIME_FORMAT_MMSS = "mm:ss";



CountDownTimer.prototype.getTimeFormat = function( timeStr )
{
    let formats = [ /^\d{2}:\d{2}:\d{2}$/, /^\d{2}:\d{2}$/ ];


    if( formats[0].test(timeStr) ) {
        return CountDownTimer.TIME_FORMAT_HHMMSS;
    }


    if( formats[1].test(timeStr) ) {
        return CountDownTimer.TIME_FORMAT_MMSS;
    }

    if( !timeStr ) return;

    throw new Error('Unsupported time format!');
};



CountDownTimer.prototype.onTick = function (callback) {
    if (typeof callback == 'function') {
        this.tickFunctions.push(callback);
    }

    return this;
};



CountDownTimer.prototype.toSeconds = function (str) {

    let timeParts = str.split(':');
    let hours, minutes, seconds;


    if ( this.time_format === CountDownTimer.TIME_FORMAT_MMSS  ) {
        [minutes, seconds] = timeParts;
        return (+minutes) * 60 + (+seconds);
    }

    if ( this.time_format === CountDownTimer.TIME_FORMAT_HHMMSS ) {
        [hours, minutes, seconds] = timeParts;
    }

    return (+hours) * 3600 + (+minutes) * 60 + (+seconds);
};



CountDownTimer.prototype.toTimeObject = function (seconds) {

    //if (seconds <= 3599) {
    if ( this.time_format === CountDownTimer.TIME_FORMAT_MMSS ) {
        return {
            minutes: (seconds / 60) | 0,
            seconds: (seconds % 60) | 0
        };
    }

    return {
        hours: (seconds / 3600) | 0,
        minutes: ((seconds / 60) | 0) % 60,
        seconds: (seconds % 60) | 0
    };
};




CountDownTimer.prototype.zeroPad = function (time) {

    let pad = (value) => value < 10 ? '0' + value : value;
    let _time = [];

    for( let prop in time ) {
        if( time.hasOwnProperty(prop) ) _time.push(pad(time[prop]));
    }

    return _time.join(':');
};



CountDownTimer.prototype.format = function (seconds) {
    return this.zeroPad(this.toTimeObject(seconds));
};



CountDownTimer.prototype.updateDuration = function(duration) {
    this.time_format = this.getTimeFormat(duration);
    this.duration = this.toSeconds(duration);
    this.initialDuration = this.duration;

    return this;
};


CountDownTimer.prototype.start = function () {
    // if timer is running simply return from it
    if (this.running) {
        return;
    }

    this.running = true;
    let that = this, diff;

    (function timer() {
        diff = that.duration--;

        if (diff >= 0) {
            that.timerHandle = setTimeout(timer, that.granularity);
        } else {

            // if onRestart callback exists
            // restart timer
            if( that.onRestartCallback ) {
                that.duration = that.initialDuration;
                that.running = false;
                clearTimeout(that.timerHandle);
                that.timerHandle = setTimeout(timer, that.granularity);
                that.onRestartCallback.call(that,that);
                return;
            }

            diff = 0;
            that.running = false;
            clearTimeout(that.timerHandle);
            if (that.onStopCallback) that.onStopCallback.call(null,that);
            return;
        }

        that.tickFunctions.forEach(function (callback) {
            callback.call(this, that);
        }, that);

    }());
};


CountDownTimer.prototype.onStop = function (callback) {
    this.onStopCallback = callback;
    return this;
};


CountDownTimer.prototype.onRestart = function(callback) {
    this.onRestartCallback = callback;
    return this;
};


CountDownTimer.prototype.stop = function() {
    this.duration = -1;
    this.running = false;
    clearTimeout(this.timerHandle);
};



 // div блок
 let el = element.classList.contains("div");

 // внутрений текст "00:00:00" или "00:00"
 let timer = new CountDownTimer(el.innerText);

 // на отсчет таймера
 timer.onTick((time) => el.innerText = timer.format(time));

 // рестарт таймер при окончании
 // здесь можно выполнять любое действие
 // необходимое вам
 timer.onRestart((self) => {
	 alert("Время закончилось")
 });

 timer.start();
// ________________________________________ обратный отсчёт


