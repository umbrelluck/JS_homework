var getCurrentObject = () => objects.find(object => object.state === 'falling');

function checkLeft(object, playgr) {
    mini = 100;
    vert = -1
    for (pos of object.position)
        if (pos[1] < mini) {
            mini = pos[1];
            vert = pos[0];
        }
    return mini > 0 && playgr[vert][mini - 1] == undefined && object.state === "falling";
}

function checkRight(object, playgr) {
    maxi = -1;
    vert = -1;
    for (pos of object.position)
        if (pos[1] > maxi) {
            maxi = pos[1];
            vert = pos[0];
        }
    return maxi < 4 && playgr[vert][maxi + 1] == undefined && object.state === "falling";
}

function checkDown(object, playgr) {
    mini = 1000;
    hor = -1
    for (pos of object.position) {
        found = object.position.some(elem => elem.includes(pos[0] - 1) && elem.includes(pos[1]))
        if (!found && playgr[pos[0] - 1][pos[1]] != undefined)
            return false;
        if (mini < pos[0])
            mini = pos[0];
    }
    return object.state === "falling" && mini > 0;
}

var createPlayground = () => (new Array(10).fill().map(el => (new Array(5).fill())));

function setMovement(object, playgr) {
    if (!checkDown(object, playgr)) {
        object.state = "static";
        console.log("Element stopped");
    }
}