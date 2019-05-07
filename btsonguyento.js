let numb=20;
let count=0;
let n=2;
let kq='';
while(count<numb) {
    let i=2;
    for (; i < n; i++) {
        let x = n % i;
        if (x == 0) {
            break;
        } else {
        }
    }
    if (i == n) {
        kq += n +'</br>';
        count++;
    }
    n++;
}

document.write( kq);
