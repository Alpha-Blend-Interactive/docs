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

    window.setTimeout(PopulateWhitelisted, 100);

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

function PopulateWhitelisted(){
    var elements = document.querySelectorAll("h1 div.whitelisted");
    
    for (var i=0; elements[i]; i++){
        
        if (!elements[i]) continue;
        if (elements[i].classList.contains("fin")) continue;
        
        var hasAvatar = false;
        var hasWorld = false;
        var hasProp = false;
        var list = elements[i].getAttribute("data-list");
        
        if (list.indexOf("A") !== -1) hasAvatar = true;
        if (list.indexOf("W") !== -1) hasWorld  = true;
        if (list.indexOf("P") !== -1) hasProp   = true;
        
        var avatar = document.createElement("div");
        avatar.classList.add("avatars");
        if (hasAvatar) avatar.classList.add("yes");
        else avatar.classList.add("no");
        elements[i].appendChild(avatar);

        var world = document.createElement("div");
        world.classList.add("worlds");
        if (hasWorld) world.classList.add("yes");
        else world.classList.add("no");
        elements[i].appendChild(world);

        var prop = document.createElement("div");
        prop.classList.add("props");
        if (hasProp) prop.classList.add("yes");
        else prop.classList.add("no");
        elements[i].appendChild(prop);

        elements[i].classList.add("fin");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    updateTitle(window.location.pathname);
});

