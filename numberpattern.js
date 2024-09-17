let spc = (xf) => {
    return " ".repeat(xf);
}

let n = 7
for(let i = 0; i<n; i++) {
    if ((i+1) < (n+1)/2) {
        console.log(spc(i)+`${i+1}`+spc(n-2*(i+1))+`${n-i}`+spc(i));
    }
    else if ((i+1) == (n+1)/2){
        console.log(spc(i)+`${i+1}`+spc(i));
    
    }
    else  {
        console.log(spc(n-(i+1))+`${n-i}`+spc(2*(i)-n)+`${i+1}`+spc(n-(i+1)));
    }
    
}