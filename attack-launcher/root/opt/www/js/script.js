const BASE_SOCKET_URL = 'wss://attack-launcher.winattacklab.local/api/';
const VERBOSE = true;
const DEFAULT_TOOL = 'Deploy';

function getGetParam(paramName) {
    let result = DEFAULT_TOOL, tmp = [];
    location.search.substr(1).split('&').forEach(function (item) {
        tmp = item.split('=');
        if (tmp[0] === paramName) {
            result = decodeURIComponent(tmp[1]);
        }
    });
    return result;
}

function sanitizedTool(tool) {
    return tool.replace(' ', '').toLowerCase();
}

function setTitle(title) {
    $('title').text(title);
    $('h1').text(title);
}

function setNav(title) {
    $('.nav-link').each((i, item) => {
        if (item.lastChild.nodeValue.includes(title)) {
            $(item).addClass('active');
        }
    });
}

function log(message) {
    $('#shell').append(message + '\n');
    $('.pre-scrollable').scrollTop($('.pre-scrollable').prop('scrollHeight'));
}

function clear() {
    $('#shell').text('');
}

function setupWebSocket(url) {
    const ws = new WebSocket(url);
    ws.onmessage = function(event) {
        log(event.data);
    };
    if (VERBOSE) {
        ws.onopen = function() {
            log('\nCONNECT');
        };
        ws.onclose = function() {
            log('DISCONNECT');
        };
    }
}

$(document).ready(() => {
    const tool = getGetParam('tool');
    setTitle(tool);
    setNav(tool);
    const saneTool = sanitizedTool(tool);
    setupWebSocket(BASE_SOCKET_URL + saneTool);
});

$('#btn-run-task').click(() => {
    const tool = getGetParam('tool');
    const saneTool = sanitizedTool(tool);
    clear();
    setupWebSocket(`${BASE_SOCKET_URL}${saneTool}/task`);
});
