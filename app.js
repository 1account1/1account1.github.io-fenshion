const value = "안녕하세요";
let yarr = [];
let countt = 0;


fetch("https://opensheet.elk.sh/1SKotYYErxLQCxm9Y3VumQw07fl7DFklMaRM7bSVAcVg/Sheet1")
  .then(res => res.json())
  .then(data => {
        data.forEach(item => {
        console.log(item);
        yarr = data.map(item => Number(Object.values(item)[0]));
        document.getElementById('list').innerHTML = "<h4>"+item["메추"]+"</h4>" + document.getElementById('list').innerHTML;
    })
  });

fetch("https://opensheet.elk.sh/1SKotYYErxLQCxm9Y3VumQw07fl7DFklMaRM7bSVAcVg/Sheet2")
  .then(res => res.json())
  .then(data => {
        data.forEach(item => {
        console.log(item);
        yarr = data.map(item => Number(Object.values(item)[0]));
        document.getElementById('paylist').innerHTML = "<h4>"+item["수금"]+"</h4>" + document.getElementById('paylist').innerHTML;
    })
  });

function fi(){
    setTimeout(function(){
        fo();
    }, 500);
}
function fo(){
    setTimeout(function(){
        document.getElementById('yahho').style.opacity -= 0.1;
        if (countt < 10){
            fo()
            countt++;
        }else{
            countt=0;
        }
    }, 50);
}

async function mechu() {
    const value = document.getElementById("mechu").value;
    if (value == "김경민"){
        alert("응아니야")
    }
    if (value != "김경민"){
        document.getElementById('list').innerHTML = "<h3>"+value+"</h3>" + document.getElementById('list').innerHTML;
        document.getElementById('yahho').style.opacity = 1;
        fi();
        // SheetDB는 범용 표준을 따르므로 에러 없이 깔끔하게 객체 구조로 들어갑니다.
        const res = await fetch(
            "https://sheetdb.io/api/v1/pkm2qg1f67mhp", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "data": [
                        { "메추": value }
                    ]
                })
            }
        );
        

        console.log(await res.json());
    }
}

