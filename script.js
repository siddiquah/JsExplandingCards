const panels = document.querySelectorAll('.panel'); 
panels.forEach(panel => {
    panel.addEventListener('click', function(){
        if(!this.classList.contains('active')){
            panels.forEach(panel => panel.classList.remove('active'));
            this.classList.add('active');
        }
    });
});