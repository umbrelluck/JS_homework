function tune(array) {
    norm_freq = ["329.63", "246.94", "196.00", "146.83", "110.00", "82.41"];
    result = [];
    for (i = 0; i < array.length; i++)
        if (array[i] == 0)
            result.push("-")
        else if (1 > norm_freq[i] / array[i] && norm_freq[i] / array[i] > 0.97)
            result.push("•<");
        else if (0.97 >= norm_freq[i] / array[i])
            result.push("•<<");
        else if (1 < norm_freq[i] / array[i] && norm_freq[i] / array[i] < 1.03)
            result.push(">•");
        else if (norm_freq[i] / array[i] >= 1.03)
            result.push(">>•");
        else
            result.push("OK");
    return result;
}




// function tune(array) {
//     norm_freq = ["329.63", "246.94", "196.00", "146.83", "110.00", "82.41"];
//     result = [];
//     for (i = 0; i < array.length; i++)
//         if (array[i] == 0)
//             result.push("-")
//         else if (Math.abs(norm_freq[i] - array[i]) < 1)
//             result.push("OK");
//         else if (2 >= norm_freq[i] - array[i] && norm_freq[i] - array[i] >= 1)
//             result.push("•<");
//         else if (norm_freq[i] - array[i] < -2)
//             result.push("•<<");
//         else if (-2 <= norm_freq[i] - array[i] && norm_freq[i] - array[i] <= -1)
//             result.push(">•");
//         else if (norm_freq[i] - array[i] > -2)
//             result.push(">>•");

//     return result;
// }