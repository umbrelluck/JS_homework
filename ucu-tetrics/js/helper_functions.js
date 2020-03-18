var getCurrentObject = () => objects.find(object => object.state === 'falling');

function checkLeft(object) {
    if (object.state === "static")
        return false;
    for (pos of object.position) {
        if (pos[1] > 0) {
            found = object.position.some(elem => elem[1] == pos[1] - 1 && elem[0] == pos[0]);
            if (!found && playground[pos[0]][pos[1] - 1] != undefined)
                return false;
        }
        else return false;
    }
    return true;
}

function checkRight(object) {
    if (object.state === "static")
        return false;
    for (pos of object.position) {
        if (pos[1] < 4) {
            found = object.position.some(elem => elem[1] == pos[1] + 1 && elem[0] == pos[0]);
            if (!found && playground[pos[0]][pos[1] + 1] != undefined)
                return false;
        }
        else return false;
    }
    return true;
}

function checkDown(object) {
    playground = createPlayground();
    renderPlayground();

    if (object.state === "static") {
        console.log("whata");
        return false;
    }
    var found = false;
    for (pos of object.position) {
        if (pos[0] > 0) {
            // console.log("in check");
            found = object.position.some(elem => elem[0] == pos[0] - 1 && elem[1] == pos[1]);
            // console.log(JSON.parse(JSON.stringify(object.position)));
            // console.log(`${found}(${pos})(${pos[0] - 1},${pos[1]}) - ${typeof (playground[pos[0] - 1][pos[1]])}`);
            // console.log(playground[pos[0] - 1][pos[1]]);
            // console.log(playground);
            if (!found && typeof (playground[pos[0] - 1][pos[1]]) != "undefined") {
                return false;
            }
            console.log("out of check");
        }
        else return false;
    }
    // console.log(playground);
    // console.log(found);
    return true;
}

var createPlayground = () => (new Array(10).fill().map(el => (new Array(5).fill())));

function randomObjType() {
    var keys = Object.keys(TYPE_COLORS);
    return keys[keys.length * Math.random() << 0];
};

function checkFreeSpace(position, playgr) {
    for (pos of position)
        if (playgr[pos[0]][pos[1]] != undefined)
            return false;
    return true;
}

function setMovement(object, playgr) {
    if (!checkDown(object)) {
        object.state = "static";
        console.log("Element stopped");
        deleteLines();
    }
}

function checkLine(line) {
    let N = 5
    count = 0
    for (cell = 0; cell < N; cell++)
        if (playground[line][cell] != undefined)
            count++;
    console.log(`Count ${count}`);
    return (count == N) ? true : false;
}

function moveAllObjects(line) {

    
    // for (object of objects) {
    //     let coor = [];
    //     for (i = 0; i < object.position.length; i++) {
    //         coor = [object.position[i][0], object.position[i][1]];
    //         if (object.position[i][0] == line) {
    //             object.position.splice(i, 1);
    //             playground[coor[0]][coor[1]] = undefined;
    //             i--;
    //         }
    //         else if (object.position[i][0] > line) {
    //             console.log("Where are you now&");
    //             console.log(JSON.parse(JSON.stringify(coor)));
    //             console.log(JSON.parse(JSON.stringify(playground)));
    //             while (coor[0] > 0 && playground[coor[0] - 1][coor[1]] == undefined) {
    //                     console.log("Where are you&");
    //                 playground[coor[0]][coor[1]] = undefined;
    //                 playground[coor[0] - 1][coor[1]] = TYPE_COLORS[object.type];
    //                 object.position[i][0] -= 1;
    //                 coor[0] -= 1;
    //             }
    //         }
    //     }
    // }
    console.log(objects);
    renderPlayground();
}