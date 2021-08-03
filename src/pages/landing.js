window.onload = () => {
    if (window.location.href === "http://waylab.kr/") { // by pocas
        const text = document.getElementById("main_text");

        text.classList.add("anion");
        text.innerHTML = "대회가 종료되었습니다!";
    
        // let items = ["대회는 7월 24일 정각에 시작합니다!", "사전 가입이 가능합니다!", "공지사항은 디스코드에서 확인해주세요!", "WayLabCTF에 오신 여러분을 환영합니다!",];
        let items = ["1st : D1N0 님! (3,691 점)", "2nd : as3617 님! (3,501 점)", "3rd : yo 님! (3,491 점)", "수상하신 모든 분들 축하합니다!!", "특별상은 추후에 공지됩니다!", "대회가 종료되었습니다!"];

        let answer;
        let number = 0;

        let cont = document.querySelector(".cont");

        function print() {
            answer = items[number];
            text.innerHTML = answer;
            number += 1;
            if(number === items.length) number = 0;
        }
    
        setInterval(print, 2500);
        
        let stDate = new Date().getTime();
        let countdown_to = stDate > new Date('2021-07-24 00:00:00').getTime() ? "07/26/2021" : "07/24/2021";

        let r;
        var ringer = {
            countdown_to: countdown_to,
            rings: {
                'DAYS': { 
                    s: 86400000, // mseconds in a day,
                    max: 365
                },
                'HOURS': {
                    s: 3600000, // mseconds per hour,
                    max: 24
                },
                'MINUTES': {
                    s: 60000, // mseconds per minute
                    max: 60
                },
                'SECONDS': {
                    s: 1000,
                    max: 60
                },
                //   'MICROSEC': {
                //     s: 10,
                //     max: 100
                //   }
            },
            r_count: 4,
            r_spacing: 10, // px
            r_size: 100, // px
            r_thickness: 2, // px
            update_interval: 11, // ms
            
            
            init: function(){
                
                r = ringer;
                r.cvs = document.createElement('canvas'); 
                
                r.size = { 
                    w: (r.r_size + r.r_thickness) * r.r_count + (r.r_spacing*(r.r_count-1)), 
                    h: (r.r_size + r.r_thickness) 
                };
            
                r.cvs.setAttribute('width',r.size.w);           
                r.cvs.setAttribute('height',r.size.h);
                r.ctx = r.cvs.getContext('2d');
                document.querySelector(".container").append(r.cvs);
                r.cvs = (r.cvs);
                r.ctx.textAlign = 'center';
                r.actual_size = r.r_size + r.r_thickness;
                r.countdown_to_time = new Date(r.countdown_to).getTime();
                //   r.cvs.css({ width: r.size.w+"px", height: r.size.h+"px" });
                r.cvs.style.width = r.size.w+"px";
                r.cvs.style.height = r.size.h+"px";
                r.go();
            },
            ctx: null,
            go: function(){
                var idx=0;
                
                r.time = (new Date().getTime()) - r.countdown_to_time;
                
                
                for(var r_key in r.rings) r.unit(idx++,r_key,r.rings[r_key]);  
                let stDate = new Date().getTime();
                let edDate = stDate > new Date('2021-07-24 00:00:00').getTime() ? (stDate > new Date('2021-07-26 00:00:00').getTime() ? "end" : new Date('2021-07-26 00:00:00').getTime()) : new Date('2021-07-24 00:00:00').getTime();
                if(edDate == "end") {
                    cont.innerHTML = "대회가 종료되었습니다!";
                } else {
                    if(edDate == new Date('2021-07-24 00:00:00').getTime()) cont.innerHTML = "대회 시작까지 남은시간";
                    else {
                        cont.innerHTML = "대회 끝나는 시간까지";
                        r.countdown_to_time = new Date('2021-07-26 00:00:00').getTime();
                    }
                }
                
                setTimeout(r.go,r.update_interval);
            },
            unit: function(idx,label,ring) {
                var x,y, value, ring_secs = ring.s;
                value = parseFloat(r.time/ring_secs);
                r.time-=Math.round(parseInt(value)) * ring_secs;
                value = Math.abs(value);
                
                x = (r.r_size*.5 + r.r_thickness*.5);
                x +=+(idx*(r.r_size+r.r_spacing+r.r_thickness));
                y = r.r_size*.5;
                y += r.r_thickness*.5;
            
                
                // calculate arc end angle
                var degrees = 360-(value / ring.max) * 360.0;
                var endAngle = degrees * (Math.PI / 180);
                
                r.ctx.save();
            
                r.ctx.translate(x,y);
                r.ctx.clearRect(r.actual_size*-0.5,r.actual_size*-0.5,r.actual_size,r.actual_size);
            
                // first circle
                r.ctx.strokeStyle = "rgba(128,128,128,0.2)";
                r.ctx.beginPath();
                r.ctx.arc(0,0,r.r_size/2,0,2 * Math.PI, 2);
                r.ctx.lineWidth =r.r_thickness;
                r.ctx.stroke();
                
                // second circle
                r.ctx.strokeStyle = "rgba(253, 1, 119, 0.9)";
                r.ctx.beginPath();
                r.ctx.arc(0,0,r.r_size/2,0,endAngle, 1);
                r.ctx.lineWidth =r.r_thickness;
                r.ctx.stroke();
                
                // label
                r.ctx.fillStyle = "#ffffff";
                
                r.ctx.font = '12px Helvetica';
                r.ctx.fillText(label, 0, 23);
                r.ctx.fillText(label, 0, 23);   
                
                r.ctx.font = 'bold 40px Helvetica';
                r.ctx.fillText(Math.floor(value), 0, 10);
                
                r.ctx.restore();
            }
        }
          
        ringer.init();
    }
}