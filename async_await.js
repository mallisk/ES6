// Async Js Programing
// Callbacks, Promises, Async & Await

const datas = [
    {name: "malli", profession: "software Engineer" },
    { name: "Ajay", profession: "software Engineer" },
]

function getDatas(){
    setTimeout(()=>{
        let output = ""
        datas.forEach((data,index)=>{
            output += `<li> ${data.name}</li>` 
        })
        document.body.innerHTML = output;
    },1000)
}

function createData (newdata){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            datas.push(newdata);
            console.log(datas);
            let err = false;
            if(!err){
                resolve();
            }else{
                reject(); 
            }
        },2000)   
    })
    
}

// createData({name:"raj", profession:"software enginner"})
// .then(getDatas)
// .catch(console.log("error bandoide loude"));


// Async & Await

async function start (){
    await createData({name:"raj", profession:"software enginner"})
    getDatas();
}

start();