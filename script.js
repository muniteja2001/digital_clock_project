// const hour = now.getHours();
        // const minute = now.getMinutes();
        // const second = now.getSeconds();
        
        setInterval(()=>{
            var date = new Date();
            let hour=document.getElementById('hour').innerHTML=date.getHours();
            document.getElementById('minute').innerHTML=date.getMinutes();
            document.getElementById('second').innerHTML=date.getSeconds();
            if(hour>=12){
            document.getElementById('meridian').innerHTML='PM';
        }
        else{
            dcocument.getElementById('meridian').innerHTML='AM';
        }
            
        },1000);

        