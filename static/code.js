// Code Html Tag Escape
var escapeHtml = (function (String) {
	var escapeMap = {
		'&': '&amp;',
		"'": '&#x27;',
		'`': '&#x60;',
		'"': '&quot;',
		'<': '&lt;',
		'>': '&gt;',
	};
	var escapeReg = '[';
	var reg;
	for (var p in escapeMap) {
		if (escapeMap.hasOwnProperty(p)) {
			escapeReg += p;
		}
	}
	escapeReg += ']';
	reg = new RegExp(escapeReg, 'g');
	return function escapeHtml (str) {
		str = (str === null || str === undefined) ? '' : '' + str;
		return str.replace(reg, function (match) {
			return escapeMap[match];
		});
	};
}(String));
var pre = document.querySelectorAll('.html');
for(var i = 0; i < pre.length; i++) {
	pre[i].innerHTML = escapeHtml(pre[i].innerHTML);
}
//input Clipboard
var clipboardDemos = new Clipboard('[data-input-clipboard]');

clipboardDemos.on('success', function(e) {
		e.clearSelection();

		console.info('Action:', e.action);
		console.info('Text:', e.text);
		console.info('Trigger:', e.trigger);

		// showTooltip(e.trigger, 'Copied!');
		showTooltip(e.trigger, 'Copied! Clipboard');

});

clipboardDemos.on('error', function(e) {
		console.error('Action:', e.action);
		console.error('Trigger:', e.trigger);

		showTooltip(e.trigger, fallbackMessage(e.action));
});

// Snippet
var snippets = document.querySelectorAll('.snippet');

[].forEach.call(snippets, function(snippet) {
		snippet.firstChild.insertAdjacentHTML('beforebegin', '<button class="btn" data-clipboard-snippet><img class="clippy" width="13" src="https://www.studiomic.net/svg/clippy.svg" alt="Copy to clipboard"></button>');
});

var clipboardSnippets = new Clipboard('[data-clipboard-snippet]', {
		target: function(trigger) {
				return trigger.nextElementSibling;
		}
});

clipboardSnippets.on('success', function(e) {
		e.clearSelection();

		showTooltip(e.trigger, 'Copied! Clipboard');
});

clipboardSnippets.on('error', function(e) {
		showTooltip(e.trigger, fallbackMessage(e.action));
});

// Tooltips
var btns = document.querySelectorAll('.btn');

for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('mouseleave', clearTooltip);
		btns[i].addEventListener('blur', clearTooltip);
}

function clearTooltip(e) {
		e.currentTarget.setAttribute('class', 'btn');
		e.currentTarget.removeAttribute('aria-label');
}

function showTooltip(elem, msg) {
		elem.setAttribute('class', 'btn tooltipped tooltipped-nw');
		elem.setAttribute('aria-label', msg);
}

// Simplistic detection, do not use it in production
function fallbackMessage(action) {
		var actionMsg = '';
		var actionKey = (action === 'cut' ? 'X' : 'C');

		if(/iPhone|iPad/i.test(navigator.userAgent)) {
				actionMsg = 'No support :(';
		}
		else if (/Mac/i.test(navigator.userAgent)) {
				actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
		}
		else {
				actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
		}

		return actionMsg;
}

hljs.initHighlightingOnLoad();
