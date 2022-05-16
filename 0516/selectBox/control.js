const btn = document.querySelector('.btn-select');
    const list = document.querySelector(".list-member");
    const arrLang = ['python','Java','Javascript','C#', 'C/C++'];
    
    arrLang.forEach((item)=>{
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        // button 태그에 속성설정 type = 'button'
        btn.textContent = item;
        li.appendChild(btn);
        list.appendChild(li);
    })

    btn.addEventListener('click', () => {
        btn.classList.toggle('on');
    });

    list.addEventListener('click', (event) => {
        if (event.target.nodeName === 'BUTTON') {
            btn.textContent = event.target.textContent;
            btn.classList.remove('on');
        }
    });
    list.addEventListener('mouseover',(e)=>{
        let mo = e.target.closest('li');
        // event.closest(selector) 는 event 의 상위 요소 중 selector와 일치하는
        // 가장 근접한 조상요소를 반환
        if(!mo){
            return console.log('li밖컨텐츠');
        }
        console.log(mo);
        console.log(e.target.textContent);
    })