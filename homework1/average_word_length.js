function avgWordLengthCalc(line) {
    res = 0;
    count = 0;
    words = line.matchAll(/\w+/g);
    for (word of words) {
        res += word[0].length;
        count++;
    }
    return res / count;
}