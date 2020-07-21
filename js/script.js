window.addEventListener('DOMContentLoaded', function () {
    let popup = document.querySelector('.popup'),
        btn = document.querySelector('.btn'),
        close = popup.querySelector('.popup__close');

    btn.addEventListener('click', function () {
        popupHandler.call(this);
    })
    close.addEventListener('click', function () {
        popupHandler.call(this)
    })

    function popupHandler() {
        if (this === btn) {
            popup.classList.add('show')

            popup.addEventListener('click', function (event) {
                if (this === event.target) {
                    popup.classList.remove('show')
                }
            })
        } else if (this === close) {
            popup.classList.remove('show')
        }
    }




    /*youtube videos*/
    function youtubeShowVideo() {
        var i, y, v, n;
        v = document.querySelectorAll(".popup__video");
        for (n = 0; n < v.length; n++) {
            y = v[n];
            i = document.createElement("img");
            i.setAttribute("src", "./img/preview.jpg");
            i.setAttribute("alt", "video-preview");
            i.setAttribute("class", "thumb");
            y.appendChild(i);
            y.addEventListener('click', function () {
                var a = document.createElement("iframe");
                a.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id);
                a.style.width = this.style.width;
                a.style.height = this.style.height;
                this.parentNode.replaceChild(a, this)
            })
        }
    }
    youtubeShowVideo();



    /*parallax*/

    function parallax(event) {
        this.querySelectorAll('.parallax__layer').forEach((element, index) => {
            let speed = element.dataset.speed;

            if (index == 0) {
                element.style.transform = `translateX(${event.clientX * speed / 100}px)`
            } else {
                element.style.transform = `translateX(${event.clientX * speed / 100}px) translateY(${event.clientY * speed / 100}px)`
            }

        })
    }

    document.addEventListener('mousemove', parallax);




    /*select*/

    let selectBox = document.querySelector('.header__select'), 
        selectCurrent = selectBox.querySelector('.select__current'),
        countriesList = selectBox.querySelector('.select__countrylist'),
        countriesItems = countriesList.querySelectorAll('.select__item');

    selectCurrent.addEventListener('click', function () {
        countriesList.classList.toggle('active')

        countriesItems.forEach(element => {
            element.addEventListener('click', function() {
                
                let countryIndex = element.dataset.country;
                selectCurrent.classList.remove('ru', 'ua', 'by');
                selectCurrent.classList.add(`${countryIndex}`);
                selectCurrent.dataset.country = countryIndex
                countriesList.classList.remove('active')
            })
        })
    })

    document.addEventListener('click', function (event) {
        if (!selectBox.contains(event.target)) {
            countriesList.classList.remove('active')
        }
    })





    /*gleam*/
    function createGleam() {
        let ourLine1 = document.querySelector('.spaceLine_1'),
            gleam1 = document.createElement('div'),
            ourLineHeight1 = +getComputedStyle(ourLine1).height.slice(0, -2),
            ourLine2 = document.querySelector('.spaceLine_2'),
            gleam2 = document.createElement('div'),
            ourLineHeight2 = +getComputedStyle(ourLine2).height.slice(0, -2),
            ourLine3 = document.querySelector('.spaceLine_3'),
            gleam3 = document.createElement('div'),
            ourLineHeight3 = +getComputedStyle(ourLine3).height.slice(0, -2);

        gleam1.classList.add('gleam1', 'gleam')
        ourLine1.appendChild(gleam1)
        gleam1.style.top = '0px'

        gleam2.classList.add('gleam2', 'gleam')
        ourLine2.appendChild(gleam2)
        gleam2.style.bottom = '0px'

        gleam3.classList.add('gleam3', 'gleam')
        ourLine3.appendChild(gleam3)
        gleam3.style.top = '0px'

        function moveGleam1(arg1){
            
            let checkCoords = +arg1.style.top.slice(0, -2) + 40;
                
            if (checkCoords >= ourLineHeight1) {
                arg1.style.top = '0px'

                setTimeout(moveGleam1, 10, arg1)
            } else {
                let currentPlaceNum = +arg1.style.top.slice(0, -2) + 1
            
                arg1.style.top = `${currentPlaceNum}px`
    
                setTimeout(moveGleam1, 10, arg1)
            }
        }

        function moveGleam2(arg2){
            
            let checkCoords = +arg2.style.bottom.slice(0, -2) + 40;
                
            if (checkCoords >= ourLineHeight2) {
                arg2.style.bottom = '0px'

                setTimeout(moveGleam2, 10, arg2)
            } else {
                let currentPlaceNum = +arg2.style.bottom.slice(0, -2) + 1.5
            
                arg2.style.bottom = `${currentPlaceNum}px`
    
                setTimeout(moveGleam2, 10, arg2)
            }
        }

        function moveGleam3(arg3){
            
            let checkCoords = +arg3.style.top.slice(0, -2) + 40;
                
            if (checkCoords >= ourLineHeight3) {
                arg3.style.top = '0px'

                setTimeout(moveGleam3, 10, arg3)
            } else {
                let currentPlaceNum = +arg3.style.top.slice(0, -2) + .5
            
                arg3.style.top = `${currentPlaceNum}px`
    
                setTimeout(moveGleam3, 10, arg3)
            }
        }



        setTimeout(moveGleam1, 10, gleam1)
        setTimeout(moveGleam2, 10, gleam2)
        setTimeout(moveGleam3, 10, gleam3)
    }

    createGleam()

    /*light under cursor*/
    let light = document.createElement('div');

    light.classList.add('lightCursor');
    document.body.appendChild(light);

    document.addEventListener('mousemove', function(event){
            
        let coordsLight = `top: ${event.clientY + 5}px; left: ${event.clientX + 5}px`
        light.style.cssText = coordsLight;
        console.log(coordsLight)
        
    })




})




