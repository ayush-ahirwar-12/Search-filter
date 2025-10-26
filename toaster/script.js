let parent=document.querySelector(".parent")

function toastContainer(config){
    return function toast(msg){
        let div = document.createElement("div");
        div.textContent = msg;
        div.className = `p-2 border w-fit duration-300 border-white rounded ${config.theme==="dark"?"bg-gray-300 text-white":"bg-gray-200 text-black"}`;
        parent.appendChild(div)
        if(config.positionX!=="left" || config.positionY!=="top"){
            parent.className+=`${config.positionX==="right"?" right-5":" left-5"} ${config.positionY==="bottom"?" bottom-5":" top-5"}`
        }

        setTimeout(() => {
        parent.removeChild(div)
            
        }, config.duration*1000);
    }
}


let toast=toastContainer({
    positionX:"right",
    positionY:"bottom",
    theme:"light",
    duration:3
})
toast("This is your notification")