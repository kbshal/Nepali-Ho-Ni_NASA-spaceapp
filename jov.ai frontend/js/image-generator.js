let imgGenerator = document.getElementById("jupiter-images");
let generatorBtn = document.getElementById("generator");


   
generatorBtn.addEventListener("click", () => setTimeout(()=>{
    totalImg = 63;
    let imgList = [];
    for (let i = 0; i < totalImg; i++) {
        imgList.push(i);        
    }

    // Shuffle array
    let shuffled = imgList.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    // let selected = shuffled.slice(Math.random() * 10, totalImg);
    // console.log(selected[Math.ceil(Math.random() * 10)])


    let selected = shuffled.slice(0, totalImg);

    // imgGenerator.src=`../imgages/${selected[3]}.jpg`;
    imgGenerator.src=`../images/${selected[3]}.png`;

    console.log(selected[3]);
    
}, 1500));
