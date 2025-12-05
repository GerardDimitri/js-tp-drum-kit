import {settings} from "./settings";

const drumKit = {
    init() {
        document.documentElement.classList.add(settings.jsEnabledClass);
        this.audioElements = {};
        document.querySelectorAll(settings.audioSelector).forEach((audioElement)=>{
            this.audioElements[audioElement.dataset.key] = audioElement;
        });
        console.log(this.audioElements);

        this.addEventListeners();
    },
    play(key) {
        if (this.audioElements[key]) {
            this.audioElements[key].play();
            document.body.classList.add(key);
        }
    },
    addEventListeners() {
        document.querySelectorAll(settings.keyBtnSelector).forEach((keyBtnElement) => {
            keyBtnElement.addEventListener('click', (evt) => {
                this.play(evt.currentTarget.dataset.key);
            });
        });
        window.addEventListener('keydown', (evt) => {
            this.play(evt.key);
        });
        document.addEventListener('transitionend', () =>{
            document.body.className = '';
        })
    },
};
drumKit.init()