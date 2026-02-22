const interviewButton = document.querySelectorAll(".interview_btn")
const rejectButton = document.querySelectorAll(".reject_btn")
// console.log(interviewButton)
// console.log(rejectButton)
for (const btn of interviewButton) {
    btn.addEventListener("click", (e) => {
        const mostParent=e.target.parentNode.parentNode.parentNode.parentNode.childNodes
        // console.log(e.target.parentElement.parentElement)
    })
}