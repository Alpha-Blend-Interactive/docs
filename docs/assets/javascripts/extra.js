(function (history) {
    const pushState = history.pushState;
    history.pushState = function (state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state}, arguments);
        }
        return pushState.apply(history, arguments);
    }
})(window.history);

window.onpopstate = history.onpushstate = function (e, arguments) {
    let path;
    if (arguments !== undefined && arguments.length >= 2) {
        path = getUrlParts(arguments[2]).pathname;
    } else {
        path = e.target.location.pathname;
    }
    updateTitle(path);
}

const words = {
    cck: "Creators"
};

function updateTitle(relativePath) {
    const splitted = relativePath.split('/').filter((e) => {
        return e
    });
    let title = "Documentation";
    for (const [key, value] of Object.entries(words)) {
        if (checkForWord(splitted, key)) title = value;
    }

    console.log(title)

    document.getElementById("dev-header-title").innerHTML = title;
}

function checkForWord(splitted, word) {
    if (splitted !== undefined && splitted.length > 0) {
        if (splitted[0].toLowerCase().includes(word.toLowerCase())) {
            return true;
        }
        if (splitted.length > 1 && splitted[1].toLowerCase().includes(word.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function getUrlParts(url) {
    const a = document.createElement('a');
    a.href = url;

    return {
        href: a.href,
        host: a.host,
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname,
        protocol: a.protocol,
        hash: a.hash,
        search: a.search
    };
}

document.addEventListener("DOMContentLoaded", function(){
    updateTitle(window.location.pathname);
});

