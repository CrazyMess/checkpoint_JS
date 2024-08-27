//Min Max
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }

  function MinMax2(arr){
    min=arr[0];
    max=arr[0];
    for(i=0;i<arr.length;++i){
        if(min>arr[i]){
            min=arr[i];
        }else if(max<arr[i]){
            max=arr[i];
        }
    }
    return [min,max];
  }

//sum
function sumArr(arr){
    sum=0;
    for(i=0;i<arr.length;++i){
        sum += arr[i];
    }
    return sum;
}

//filtering even numbers
function filter(arr){
    res=[];
    for(i=0;i<arr.length;++i){
        if(arr[i]%2==0){
            res.push(arr[i]);
        }
    }
    return res;
}
