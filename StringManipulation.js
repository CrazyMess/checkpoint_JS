//reverse
function reverse (str){
    let res="";
    for(i=str.length-1;i>=0;--i){
        res += str[i];
    }
   
    return res;
}


//count
 function count (str){
    return str.length;
 }


//capitalize
 function capitalize (str){
    cap=str.split(' ');
    for(i=0;i<cap.length;++i){
       
       cap[i]=cap[i][0].toUpperCase() + cap[i].slice(1);
    }
     return cap.join(' ');
 }
