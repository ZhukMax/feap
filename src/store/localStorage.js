function supportStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function setState(options) {
    if (!supportStorage()) {
        return false;
    } else {
        try {
            localStorage.setItem(options.name, JSON.stringify(options.value));
            return true;
        } catch (e) {
            if (e === 'QUOTA_EXCEEDED_ERR') {
                console.log("localStorage memory limit!");
                return false;
            }
        }
    }
}

function getState(options) {
    if (!supportStorage()) {
        console.log("localStorage don't work!");
        return options.value;
    }

    if (localStorage.getItem(options.name) === null) {
        return options.value;
    } else {
        return JSON.parse(localStorage.getItem(options.name));
    }
}

function clearState(options) {
    if (!supportStorage()) {
        return false;
    } else {
        localStorage.removeItem(options.name);
        return true;
    }
}

export { supportStorage, setState, getState, clearState };
