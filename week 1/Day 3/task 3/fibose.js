function fibo(){
    var A = 0;
    var B = 1;
    var C;
 
    var N = document.getElementById("number").value;
 
    document.write(A+"<br />");
    document.write(B+"<br />");
 
    for(var i=3; i <= N;i++)
    {
        C = A + B;
        A = B;
        B = C;
 
        document.write(C+"<br />");
    }
}

function printFib() {
    num = document.getElementById("readnum").value;
    console.log(fibIttrative(num))
}

function fib(num) {
    if (num <= 2) {
        return 1;
    }
    return fib(num-1) + fib(num-2);
}


function fibIttrative(num) {
    let arr = [1, 1];
    // if (num <= arr.length) return arr[num-1]

    for(let i=2; i<num; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    // console.log(arr);
    return arr;
}