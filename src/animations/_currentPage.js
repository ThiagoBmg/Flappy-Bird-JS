// função que ativa o link no menu de acondo com a pagina do usuário
(function(){
    
    // buscando o titulo da pagina
    let tileElement = document.getElementsByTagName('title')[0];
    let name = tileElement.innerHTML;
    let itemA = document.querySelector('#itemA');
    let itemB = document.querySelector('#itemB');
    let itemC = document.querySelector('#itemC');
    // buscando o código da pagina 
    let pageName = name.split('[')[1].split(']')[0];

    const activeColor = '#0EC9B9'   

    // ativando link de acordo com o codigo da página atual
    switch(pageName){
        case 'HOME': 
            const defaultStyleA = getComputedStyle(itemB);
            itemA.style.color = activeColor
            itemB.style = defaultStyleA
            itemC.style = defaultStyleA
            break
        case 'SOBRE':
            const defaultStyleB = getComputedStyle(itemC);
            itemB.style.color =  activeColor
            itemA.style = defaultStyleB
            itemC.style = defaultStyleB
            break
        case 'JOGO':
            const defaultStyleC = getComputedStyle(itemA);
            itemA.style = defaultStyleC
            itemB.style = defaultStyleC
            itemC.style.color =  activeColor
            break
    }
})();