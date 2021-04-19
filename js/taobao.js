window.onload = function(){

    //轮播图1
    const oDiv = document.querySelector(".lefts")
    const oUl = document.querySelector(".playone")
    const aLis = oUl.querySelectorAll("li")
    oUl.style.width = aLis.length * oDiv.offsetWidth +"px";
    oUl.style.left = -oDiv.offsetWidth + "px"
    const prev = document.querySelector(".prev")
    const next = document.querySelector(".next")
    const lines = document.querySelector(".line")
    const as = lines.querySelectorAll('a')
    let index = 0
    let water = false
    prev.addEventListener('click',function(){
        move(oDiv.offsetWidth,1)
    })
    next.addEventListener('click',function(){
        move(oDiv.offsetWidth,-1)
    })

    function move(offset,num){
        if(water){
            return
        }
        water = true
        for(var i = 0;i < as.length;i++){
            as[i].className = ''
        }
        if(num === 1){
            index--
        }else{
            index++
        }
        if(index > as.length - 1){
            index = 0
        }else if(index < 0){
            index = as.length - 1
        }
        as[index].className = 'active'
        let target = oUl.offsetLeft + offset * num
        let time = 800
        let timex = 4
        let clientx = offset/(time/timex)
        const timer = setInterval(function(){
            if(num === 1 && oUl.offsetLeft < target || num === -1 && oUl.offsetLeft > target){
                oUl.style.left = oUl.offsetLeft + clientx * num + "px"
            }else{
                oUl.style.left = target + "px"
                clearInterval(timer)
                water = false
                if(oUl.offsetLeft === 0){
                    oUl.style.left = -(aLis.length - 2) * offset + "px"
                }else if(oUl.offsetLeft === -(aLis.length - 1) * offset){
                    oUl.style.left = -offset + "px"
                }    
            }
            
        },timex)
    }
    let timer = setInterval(function(){
        move(oDiv.offsetWidth,-1)
    },3000)



    //轮播图2
    const oDivtwo = document.querySelector(".leftstwo")
    const oUltwo = document.querySelector(".playtwo")
    const aListwo = oUltwo.querySelectorAll("li")
    oUltwo.style.width = aListwo.length * oDivtwo.offsetWidth +"px";
    oUltwo.style.left = -oDivtwo.offsetWidth + "px"
    const prevtwo = document.querySelector(".prevtwo")
    const nexttwo = document.querySelector(".nexttwo")
    let watertwo = false
    prevtwo.addEventListener('click',function(){
        movetwo(oDivtwo.offsetWidth,1)
    })
    nexttwo.addEventListener('click',function(){
        movetwo(oDivtwo.offsetWidth,-1)
    })

    function movetwo(offset,num){
        if(watertwo){
            return
        }
        watertwo = true
        let target = oUltwo.offsetLeft + offset * num
        let time = 800
        let timex = 4
        let clientx = offset/(time/timex)
        const timertwo = setInterval(function(){
            if(num === 1 && oUltwo.offsetLeft < target || num === -1 && oUltwo.offsetLeft > target){
                oUltwo.style.left = oUltwo.offsetLeft + clientx * num + "px"
            }else{
                oUltwo.style.left = target + "px"
                clearInterval(timertwo)
                watertwo = false
                if(oUltwo.offsetLeft === 0){
                    oUltwo.style.left = -(aListwo.length - 2) * offset + "px"
                }else if(oUltwo.offsetLeft === -(aListwo.length - 1) * offset){
                    oUltwo.style.left = -offset + "px"
                }    
            }
            
        },timex)
    }
    let timertwo = setInterval(function(){
        movetwo(oDivtwo.offsetWidth,-1)
    },3000)



    //缓冲运动
    var div1 = document.getElementById("div1")
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    var iH = parseInt(scrollTop + (windowHeight - div1.offsetHeight)/2)
    starMove(iH)
    window.onscroll = function(){
        var div1 = document.getElementById("div1")
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        var iH = parseInt(scrollTop + (windowHeight - div1.offsetHeight)/2)
        starMove(iH)
    }
    window.onresize = function(){
        var div1 = document.getElementById("div1")
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        var iH = parseInt(scrollTop + (windowHeight - div1.offsetHeight)/2)
        starMove(iH)
    }
}
var close = null
function starMove(target){
    clearInterval(close)
    close = setInterval(function(){
        var speed = (target - div1.offsetTop)/8
        speed = speed > 0?Math.ceil(speed):Math.floor(speed)
        if(div1.offsetTop === target){
            clearInterval(close)
        }else{
            div1.style.top = div1.offsetTop + speed + "px"
        }
    },30)
}