let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(" .main-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let removeBtn = document.querySelector(".remove-btn");
let addModal = true;
let removeFlag = false;
let colors = ['lightpink','blue','green','black'];
let modalPriorityColor = colors[colors.length-1];
var uid = new ShortUniqueId();

addBtn.addEventListener("click",function(){
    if(addModal){
        modal.style.display = "flex";
    }else{
        modal.style.display = "none";
    }
    addModal = !addModal;
})


for(let i=0;i<allPriorityColors.length;i++){
    let priorityDivOneColor = allPriorityColors[i];
    priorityDivOneColor.addEventListener("click",function(e){
        for(let j=0;j<allPriorityColors.length;j++){
            allPriorityColors[j].classList.remove("active");
        }
        priorityDivOneColor.classList.add("active");
        modalPriorityColor = priorityDivOneColor.classList[0];
    })
}

modal.addEventListener("keydown",function(e){
    let key=e.key;
    if(key=='Enter'){
        createTicket(modalPriorityColor,taskAreaCont.value);
        taskAreaCont.value = "";
        modal.style.display = "none";
        addModal = !addModal;
    }
})


removeBtn.addEventListener("click",function(){
    if(removeFlag){
        removeBtn.style.color = 'black'
    }else{
        removeBtn.style.color = "red"
    }
    removeFlag = !removeFlag;
})

function createTicket(ticketColor,task){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class','ticket-cont');
    ticketCont.innerHTML = `<div class = "ticket-color ${ticketColor}"></div>
                            <div class = "ticket-id"> #${uid()}</div>  
                            <div class = "task-area">${task}</div>
                            <div class="lock-unlock"><i class="fa fa-lock"></i></div>`
    mainCont.appendChild(ticketCont);

    //lock unlock handle
    let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
    let ticketTaskArea = ticketCont.querySelector(".task-area");
    lockUnlockBtn.addEventListener("click",function(){
        if(lockUnlockBtn.classList.contains("fa-lock")){
            lockUnlockBtn.classList.remove("fa-lock");
            lockUnlockBtn.classList.add("fa-unlock");
            ticketTaskArea.setAttribute("contenteditable","true");
        }else{
            lockUnlockBtn.classList.remove("fa-unlock");
            lockUnlockBtn.classList.add("fa-lock");
            ticketTaskArea.setAttribute("contenteditable","false");
        }
    })

    //handling delete 

    ticketCont.addEventListener("click",function(){
        if(removeFlag)
            ticketCont.remove();
    })

    let ticketColorBand = ticketCont.querySelector(".ticket-color");
    ticketColorBand.addEventListener("click",function(){
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColoridx = -1;
        for(let i=0;i<colors.length;i++){
            if(currentTicketColor==colors[i]){
            currentTicketColoridx = i;
            break;
        }
    }
    let nextColorIdx = (currentTicketColoridx+1)%colors.length;
    let nextColor = colors[nextColorIdx];
    ticketColorBand.classList.remove(currentTicketColor);
    ticketColorBand.classList.add(nextColor);
    })
}