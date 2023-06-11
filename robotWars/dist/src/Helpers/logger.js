Logger = {
    enable:false,
    level: 0,
    debug: function(log, ...args){
        if(this.enable && this.level <= 0){
            console.log(log, ...args)
        }
    },
    info: function(log, ...args){
        if(this.enable && this.level <= 1){
            console.log(log, ...args)
        }
    },
    warn: function(log, ...args){
        if(this.enable && this.level <= 2){
            console.warn(log, ...args)
        }
    },
    error:function(log){
        if(this.enable && this.level <= 3){
            console.error(log, ...args)
        }
    }    
}