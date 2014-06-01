function applyMap(targets,mapping,input){
    var rtn= [];
    console.log(">>>input:\n" + input +"\n<<<<")
    //Create a hashmap of all of the column mappings
    var hash = {};
    var mappedColumn;
    for (var i= 0; i < mapping.length; i++){
        var map = mapping[i];
        var column = Object.getOwnPropertyNames(map)[0];
        mappedColumn = map[column];
        hash[column] = mappedColumn;
    }

    //Within each line of the input, verify that it within the target, then apply the mapping
    for (var l=0; l< input.length; l++){
        var line = input[l];
        var mappedLine = {};
        for (var inputColumn in line)
        {
            console.log("line " + l +": inputColumn:" +inputColumn);
            if (targets.indexOf(inputColumn) >=0){
                mappedColumn = (hash[inputColumn] !== undefined) ? hash[inputColumn] : inputColumn;
                mappedLine[inputColumn] = line[mappedColumn];
                rtn[l] = mappedLine;
            }
        }


    }
    console.log("rtn:" + rtn);
    return rtn;
}
