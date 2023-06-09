Array.prototype.limit = function (n) {
    return this.slice(0,n)
};

Array.prototype.random = function(){  
    return this[Math.floor(Math.random() * this.length)] ;  
};

Array.prototype.shuffle = function() {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this
}

String.prototype.captilize = function(){
    return `${this.charAt(0).toUpperCase()}${this.slice(1).toLowerCase()}`
};