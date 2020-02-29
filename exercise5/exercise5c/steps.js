function steps(num) {
    for (let i = 0; i < num; i++) {
        var stair = '#';
        var space = ' ';
        if (num > 1) {
            for (let j = 0; j < num; j++) {
                space = ' ';
            }
            stair + space;
        }
    }
    return stair;
}

steps(3)
