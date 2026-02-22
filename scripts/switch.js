const allbtn=document.getElementById("allbtn")
const interviewbtn=document.getElementById("interviewbtn")
const rejectbtn=document.getElementById("rejectbtn")
allbtn.addEventListener('click',()=>{
    showContainer('allbtn')
    currentTab="allbtn"
    showAllJobs()
})
interviewbtn.addEventListener("click",()=>{
    showContainer('interviewbtn')
    currentTab="interviewbtn"
    showInterViewJobs()
})
rejectbtn.addEventListener("click",()=>{
    showContainer('rejectbtn')
    currentTab="rejectbtn"
    showRejectJobs()
    
})