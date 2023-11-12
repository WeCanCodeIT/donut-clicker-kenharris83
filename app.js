    const itemInput = document.getElementById("donuts");
    const makeDonut = document.getElementById("makeDonut");
    const totalElement = document.getElementById("total");
    const autoClickerTotal = document.getElementById("autoClickers")
    const autoClickBtn = document.getElementById('autoClicker');
    const resetBtn = document.getElementById('resetBtn')
    let totalDonuts = 0;
    let autoClickerCount = 0;
    let autoClickerCost = 10;

    resetBtn.addEventListener('click', () =>{
        totalDonuts = 0;
        autoClickerCost = 10;
        autoClickerCount = 0;
        totalElement.innerHTML = totalDonuts
    });

    autoClickBtn.addEventListener('click', () =>{
        if(totalDonuts >= autoClickerCost){
            totalDonuts -= autoClickerCost;
            autoClickerCount ++;
            totalElement.innerHTML = totalDonuts
        } 
        });
        setInterval(() => {
            if(totalDonuts < autoClickerCost){
                autoClickBtn.disabled = true;
            } else{
                autoClickBtn.disabled = false;
            }
            totalDonuts += autoClickerCount
            totalElement.innerHTML = totalDonuts
            autoClickerTotal.innerHTML = autoClickerCount
        }, 1000);

    
    makeDonut.addEventListener('click', () =>{
    totalDonuts++;
    totalElement.innerHTML = totalDonuts
    });
    


    





