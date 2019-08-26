var job="bookkeeper"
for job(i=0; i<job.length;i++){
    if(job[i] == "k"){
        count++;
    }
    return count;
}

// removeSpace(str)
//     -return the string without spaces

var removeSpace = "The tacos are great";
removeSpace();
function removeSpace(str){
    var newstr = "";
    for(i=0; i<removeSpace.length; i++){
        if(removeSpace[i] != " "){
            newstr += removeSpace[i];
        }
    }
    console.log(newstr);
    return newstr;
}



// acronym(str)
//     -return the string with only the first letter of each word

