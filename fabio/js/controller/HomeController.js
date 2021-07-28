class HomeController{
    constructor(){
        this.show = true
        this.toggleMenu(this.show);
        this.reset(this.show);
    }

    toggleMenu(show){
        let navBar =  document.querySelector('#navbar')
        let menu = document.querySelector('.menu')
        navBar.addEventListener('click',() =>{
            console.log(show)
            show = !show
            show ? menu.style.display = 'none' :  menu.style.display = 'inline-block' 
           
            return false;
        })
        console.log(navBar);
    }

    reset(show){
        window.addEventListener('resize', function(event){
            var screenWidth =  window.innerWidth;
            let menu = document.querySelector('.menu')
            if(screenWidth > 950){
                menu.style.display = 'inline-block'
            }
        })
    }
}