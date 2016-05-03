app = IDE;
Object.keys(app).forEach(function(a){
    println ("-------------------");
    println (a);
    Object.keys(app).forEach(function(x){
        println("   " + x)
    });
})

