function tabuada () {
 var n = document.getElementById ('num')  
 var tab = document.getElementById ('seltab')
    if (n.value.length == 0) {window.alert ('Insira um número.')} else {
        var n2 = Number(n.value)
        var c = 1
        tab.innerHTML = ''
        while (c<=100) {
            var item = document.createElement ('option')
            item.text = `${n2} x ${c} = ${n2*c}`
            tab.appendChild(item)
            c++
        }
    }
    
}