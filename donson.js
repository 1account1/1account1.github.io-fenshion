let spnd = 0;
let cash = 240000;

fetch("https://opensheet.elk.sh/1SKotYYErxLQCxm9Y3VumQw07fl7DFklMaRM7bSVAcVg/Sheet3")
  .then(res => res.json())
  .then(data => {
        data.forEach(item => {
        console.log(item);
        yarr = data.map(item => Number(Object.values(item)[0]));
        document.getElementById('list').innerHTML += "<h4>"+item["돈쓴"]+"</h4>";
        spnd += Number(item["돈쓴"].split("/")[1]);
        cash -= Number(item["돈쓴"].split("/")[1]);
        document.getElementById('dason').innerText = spnd;
        document.getElementById('namon').innerText = cash;
        document.getElementById('invnamon').innerText = cash/8;
    })
  });

async function mechu() {
    const value = document.getElementById("mechu").value;
    const valu = Number(value.split("/")[1]);
    spnd += valu;
    cash -= valu;
    document.getElementById('dason').innerText = spnd;
    document.getElementById('namon').innerText = cash;
    document.getElementById('invnamon').innerText = cash/8;
    document.getElementById('list').innerHTML += "<h4>"+value+"</h4>";
    const res = await fetch(
        "https://sheetdb.io/api/v1/pkm2qg1f67mhp?sheet=Sheet3", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "data": [
                    { "돈쓴": value }
                ]
            })
        }
    );
    

    console.log(await res.json());
}