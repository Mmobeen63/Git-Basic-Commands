const arr=[
    {
        name: "mobeen",
        class: "8B",
        university: "comsats"
    },
    {
        name: "mobeen",
        class: "8B",
        university: "comsats"
    },
    {
        name: "usman",
        class: "3B",
        university: "comsats"
    },
    {
        name: "mobeen",
        class: "8B",
        university: "comsats"
    },
    {
        name: "usman",
        class: "8B",
        university: "comsats"
    },
    {
        name: "Shahmeer",
        class:"4B",
        university:"Bahria"
    }
 
]

const objectSort=(myArr)=>{
    const objArray= [];
    for(let i=0;i<myArr.length;i++){
        for(let j=i+1;j<myArr.length;j++){
            if(myArr[i].name==myArr[j].name){
                objArray.push({
                    name: myArr[i].name
                })
            }
            if(myArr[i].class==myArr[j].class){
                objArray.push({
                    class: myArr[i].class
                })
            }
            if(myArr[i].university==myArr[j].university){
                objArray.push({
                    university: myArr[i].university
                })
            }
        }
    }
    for(let i of objArray){
        console.log(i);
    }
    return objArray;
}
console.log(objectSort(arr));