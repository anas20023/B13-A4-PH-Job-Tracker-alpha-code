const allbtn=document.getElementById("allbtn")
const interviewbtn=document.getElementById("interviewbtn")
const rejectbtn=document.getElementById("rejectbtn")
allbtn.addEventListener('click',()=>{
    showContainer('allbtn')
})
interviewbtn.addEventListener("click",()=>{
    showContainer('interviewbtn')
})
rejectbtn.addEventListener("click",()=>{
    showContainer('rejectbtn')
})