/*
Minimal theme switcher
*/

const themeSwitcher = {
    //Config
    buttonsTarget: "a[data-theme-switcher]",
    buttonAttribute: "data-theme-switcher",
    rootAttribute: "data-theme",

    //Init
    init(){
        document.querySelectorAll(this.buttonsTarget).forEach(
            function(button){
                button.addEventListener(
                "click", 
                function(event){
                    event.preventDefault();
                    document.querySelector("html").setAttribute(this.rootAttribute, event.target.getAttribute(this.buttonAttribute));
                }.bind(this),
                false
                );
            }.bind(this)
        );
    },
};

themeSwitcher.init();