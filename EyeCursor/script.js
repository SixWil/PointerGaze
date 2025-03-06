ytor = document.querySelectorAll('td');

for (let i = 0; i < ytor.length; i++) {
    ytor[i].addEventListener('mouseover', () => { syn(i) } );
    ytor[i].addEventListener('mouseout', () => { defaultGase() } );
}

LeftEye = document.getElementById('LeftEye');
RightEye = document.getElementById('RightEye');

function defaultGase(){
    LeftEye.style.left = '505px';
    LeftEye.style.top = '273px';
    RightEye.style.left = '707px';
    RightEye.style.top = '270px';
}

function syn(i) {
    switch(i){
        case 0:
            LeftEye.style.top = '266px';
            RightEye.style.top = '266px';
            LeftEye.style.left = '490px';
            RightEye.style.left = '690px';
            break;
        case 1:
            LeftEye.style.top = '266px';
            RightEye.style.top = '266px';
            LeftEye.style.left = '510px';
            RightEye.style.left = '700px';
            break;
        case 2:
            LeftEye.style.top = '266px';
            RightEye.style.top = '266px';
            LeftEye.style.left = '515px';
            RightEye.style.left = '717px';
            break;
        case 3:
            defaultGase();
            LeftEye.style.left = '495px';
            RightEye.style.left = '695px';
            break;
        case 4:
            defaultGase();
            LeftEye.style.left = '510px';
            RightEye.style.left = '700px';
            break;
        case 5:
            defaultGase();
            LeftEye.style.left = '515px';
            RightEye.style.left = '717px';
            break;
        case 6:
            LeftEye.style.top = '280px';
            RightEye.style.top = '280px';
            LeftEye.style.left = '490px';
            RightEye.style.left = '690px';
            break;
        case 7:
            LeftEye.style.left = '510px';
            RightEye.style.left = '700px';
            LeftEye.style.top = '280px';
            RightEye.style.top = '280px';

            break;
        case 8:
            LeftEye.style.top = '280px';
            RightEye.style.top = '280px';
            LeftEye.style.left = '515px';
            RightEye.style.left = '717px';
            break;
        case 9:
            defaultGase();
            
            break;
        case 10:
            defaultGase();
            
            break;
    }
}