let rawImg = document.getElementById("raw-coloration");
let optimizedImg = document.getElementById("optimized-coloration")
let colorationBtn = document.getElementById("coloraion-img-btn2");


   

colorationBtn.addEventListener("click", () => {
    totalImg = 10;
    let imgList = [];
    for (let i = 01; i <= totalImg; i++) {
        imgList.push(i);        
    }

    // Shuffle array
    let shuffled = imgList.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    // let selected = shuffled.slice(Math.random() * 10, totalImg);
    // console.log(selected[Math.ceil(Math.random() * 10)])


    let selected = shuffled.slice(0, totalImg);

    // imgcoloraization.src=`../imgages/${selected[3]}.jpg`;

    rawImg.src=`../raw_images/raw_${selected[2]}.png`;
    optimizedImg.src=`../colored_images/color_${selected[2]}.jpg`;
   
});
