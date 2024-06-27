let timercount=10;

let downloadbtn=document.querySelector(".downloadbtn");
let timer=document.querySelector(".timer")
let link=document.querySelector(".link");
let wait=document.querySelector(".wait-text");
let downloadtext=document.querySelector(".download-text");
let file="C:/Users/santo/OneDrive/Desktop";
downloadbtn.addEventListener("click",function(){
    downloadbtn.style.display="none";
    timer.style.display="block";
    let countdown=setInterval(function timeout(){
        timercount-=1;
        timer.innerHTML="Download will begin automatically in <span>"+timercount+"</span> seconds"
        if(timercount<=0){
            timer.style.display="none";
            wait.style.display="block";
          

            setTimeout(() => {
                wait.style.display="none";
                downloadtext.style.display="block";
               
               let dl_href=file;
                window.location.href=dl_href;
                link.href=dl_href;

              
                
            }, 2000);
          

        }
    },1000)
})