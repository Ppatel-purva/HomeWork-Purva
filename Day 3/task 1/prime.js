var num, i, chk, temp;
function checkPrime()
{
  num = parseInt(document.getElementById("num").value);
  if(num)
  {
    chk=0;
    temp = document.getElementById("Para");
    temp.style.display = "block";
    for(i=2; i<num; i++)
    {
      if(num%2==0)
      {
        chk++;
        break;
      }
    }
    if(chk==0)
      document.getElementById("res").innerHTML = "a Prime";
    else
      document.getElementById("res").innerHTML = "not a Prime";
  }
}

function checkeven() {
    const num = document.getElementById("readnum").value;
    if (num % 2 == 0)  {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

function checkprime() {
    const num = document.getElementById("readnum").value;
    let isPrime = true;
    for (let i = 2; i < num; i++)
    {
        if (num % i == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log("Prime");
    }
    else {
        console.log("Not Prime");
    }
}

