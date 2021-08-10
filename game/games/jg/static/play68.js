﻿function play68_init() {
	updateShare(0);
}

function goHome() {
	window.location.href = "https://buzhoushan.github.io/games/games/";
}

function play68_submitScore(score) {
	updateShareScore(score);
	setTimeout( function() { show_share(); }, 1000 );
}

function updateShare(bestScore) {
	imgUrl = 'https://buzhoushan.github.io/games/games/jgfx/static/icon.png';
	lineLink = 'https://buzhoushan.github.io/games/games/jgfx/';
	descContent = "来比比看谁的手指更厉害！";
	updateShareScore(bestScore);
	appid = '';
}

function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "创意游戏《激光防线》我得了" + bestScore + "分，你的手指有我的快吗？";
	}
	else{
		shareTitle = "创意游戏《激光防线》让你用手指画出激光线！";
	}
}