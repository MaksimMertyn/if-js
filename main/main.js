const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text1 = document.getElementById ("text1");
console.log (text1);
const text2 = document.getElementById ("text2");
console.log (text2);
const text3 = document.getElementById ("text3");
console.log (text3);

function changeColor( ) {
    let i = 0;
    return function (event) {
        event.target.style.color = colors [ i ];
        i++;
        if ( i >= colors.length) {
            i = 0;
        }
    }

};

const changeColor1 = changeColor ( );
text1.addEventListener ("click" , changeColor1);
const changeColor2 = changeColor ( );
text2.addEventListener ("click" , changeColor2);
const changeColor3 = changeColor ( );
text3.addEventListener ("click" , changeColor3);