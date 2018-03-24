//
function titleCase(str) {
    var strLower = str.toLowerCase();
    var strArr = strLower.split(' ');
    var output = strArr.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return output.join(' ');
}

titleCase("I'm shOrt sTout a little tea pot");
