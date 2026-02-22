const allbtn=document.getElementById("allbtn")
const interviewbtn=document.getElementById("interviewbtn")
const rejectbtn=document.getElementById("rejectbtn")
allbtn.addEventListener('click',()=>{
    showContainer('allbtn')
    // console.log('All btn')
    showAllJobs()
})
interviewbtn.addEventListener("click",()=>{
    showContainer('interviewbtn')
    showInterViewJobs()
    // console.log('interview btn')
})
rejectbtn.addEventListener("click",()=>{
    showContainer('rejectbtn')
    showRejectJobs()
    // console.log('reject btn')
})