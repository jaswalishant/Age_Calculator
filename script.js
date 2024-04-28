let input=document.querySelector('.input');
input.max=new Date().toISOString().split("T")[0];
let row=document.querySelector(".row");

calculate=()=>{
    let bday= new Date(input.value);

    let d1=bday.getDate();
    let m1=bday.getMonth() +1;
    let y1=bday.getFullYear();

    let today=new Date();
    
    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    let d3,m3,y3;

    // for year difference;
    y3=y2-y1;

    // for month difference;
    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2 -m1;
    }

    // for days difference;
    if (d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDaysInMonth(y1,m1) +d2 -d1;
    }
    
    if(m3<0){
        m3=11
        y3--;
    }
    
    let p=document.createElement("p");
    if(input.value){
        p.innerHTML=`Your Age is ${y3} Years, ${m3} Months and ${d3} Days.`;
    }
    else{
        p.innerHTML="Enter a valid DATE OF BIRTH";
        p.style.color="red";
    }
    row.appendChild(p);

}

getDaysInMonth=(year,month)=>{
    return new Date(year,month,0).getDate();
}