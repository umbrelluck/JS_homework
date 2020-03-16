var getCurrentObject = () => objects.find(object => object.state === 'falling');

function checkLeft(object, playgr) {
    if (object.state === "static")
        return false;
    for (pos of object.position) {
        found = object.position.some(elem => elem.includes(pos[1] - 1) && elem.includes(pos[0]))
        if (!found && playgr[pos[0]][pos[1] - 1] != undefined || pos[1] < 1)
            return false;
    }
    return true;
}

function checkRight(object, playgr) {
    if (object.state === "static")
        return false;
    for (pos of object.position) {
        found = object.position.some(elem => elem.includes(pos[1] + 1) && elem.includes(pos[0]))
        if (!found && playgr[pos[0]][pos[1] + 1] != undefined || pos[1] > 3)
            return false;
    }
    return true;
}

function checkDown(object, playgr) {
    if (object.state === "static")
        return false;
    for (pos of object.position) {
        found = object.position.some(elem => elem.includes(pos[0] - 1) && elem.includes(pos[1]))
        if (!found && playgr[pos[0] - 1][pos[1]] != undefined || pos[0] < 1)
            return false;
    }
    return true;
}

var createPlayground = () => (new Array(10).fill().map(el => (new Array(5).fill())));

function setMovement(object, playgr) {
    if (object.state === "falling" && !checkDown(object, playgr)) {
        object.state = "static";
        console.log("Element stopped");
    }
}