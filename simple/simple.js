(()=>{

    const $number = document.getElementById('sentence');
    const $button = document.getElementById('button');

    console.log($button);
    
    
    caliculate = ()=>{
        sum = 0
        for(let index = 1;index <= 10;index++){
       sum = sum + index;
       if(sum = 55){
        $number.textContent=sum;
       };
       
    }

}

$button.addEventListener('click',()=>{
    caliculate();

});
 


    


})()