

function aaa(i, fu){
    if (i > 0) fu(i*2);
}



function get() {
    var i = 0
    while(true) {
        i++
        if (i == 10000000) break;
    }
    return 1
}
function after(i,fu) {
    fu(i+get())
}
RunLoop.async {
    var i = 1+ get()
    print(i)
}


class P  {
    fuc then
}