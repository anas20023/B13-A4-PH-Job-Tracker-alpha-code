const interviewButton=document.querySelectorAll(".interview_btn")
const rejectButton=document.querySelectorAll(".reject_btn")
// console.log(interviewButton)
// console.log(rejectButton)
interviewButton.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(e.target.parentNode.parentNode)
    })
})