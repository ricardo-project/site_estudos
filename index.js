alert("teste")
alert(materiais.length)
var captPag = ["Conjuntos", "O que é função?", "Plano Cartesiano", "Gráfico de funções", "Funções polinomiais", "Função Exponencial", "Função Logarítmica", "Função Trigonométrica", "Função Modular"];
var subCaptPag = ["Representação de um conjunto", "Condição de um ou mais conjuntos"];
var conjImg = new Array([/*1*/"https://images5.alphacoders.com/919/thumb-1920-919004.jpg", "Por exemplo, uma biblioteca abriga, em suas estantes, vários conjuntos de elementos, tais denominados <b>livros</b>, de acordo com suas categorias!", false],
[/*2*/"https://cdn.britannica.com/65/126865-050-633DCA21/Leonhard-Euler.jpg", "<b>Leonhard Euler</b>, matemático suíço reconhecido por suas inúmeras contribuições a esta ciência, teria desenvolvido os <b>Diagramas de Euler</b> para representação de conjuntos, apesar de haver controvérsias quanto à autoria real...", false,
/*3*/"https://d3d00swyhr67nd.cloudfront.net/w1200h1200/collection/CU/GCA/CU_GCA_GC0085-001.jpg", "Contudo, <b>John Venn</b>, outro um matemático inglês, adaptou os diagramas desenvolvidos anteriormente, considerando todas as relações possíveis entre uma quantidade finita de conjuntos: os <b>Diagramas de Venn-Euler!</b>, ou simplesmente <b>Diagramas de Venn</b>", false],
[/*4*/"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Example_of_a_set.svg/1024px-Example_of_a_set.svg.png", "Um simples <b>Diagrama de Venn-Euler</b>, contendo um único conjunto cujo respectivos elementos são formas geométricas!", "linear-gradient(rgb(180,180,180), rgb(90,90,90))"],
[/*5*/"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Function_color_example_3.svg/800px-Function_color_example_3.svg.png", "As variáveis não precisam restringir somente a valores numéricos. A função da imagem <b>associa as formas</b>, do conjunto X, <b>com as cores que as preenchem</b>, do conjunto Y!", "linear-gradient(white, rgb(180,180,180))"]);
var otherOpt = new Array("Sobre o autor", "Objetivo do site", "Todas as páginas");
var contentExtra = new Array(/*1*/["<p class=title>Conheça Leonhard Paul Euler</p><p>Provavelmente nunca houve um matemático tão influente em tantas áreas desta ciência quanto Leonhard Euler - suíço, nascido em 1707 em Basilia. Com um ano de idade, mudou-se para Riehen, onde viveu parte da infância. Foi inicialmente educado pelo pai e, logo após, com um professor particular aos sete anos. Voltou à cidade natal em 13 anos para estudar no curso de Teologia, recebendo o grau de Mestre em Artes três anos depois.</p><p>Seguindo os interesses familiares, matriculou-se na faculdade de Teologia, que não o agradou (apesar de sua religiosidade). Portanto, com o apoio do seu professor e matemático Johann Bernoulli e consentimento do pai, Euler mudou para o curos de matemática, finalizado em 1726. Após isso, no ano seguinte, foi declarado membro da Academia de Ciências de São Petesburgo pela imperatriz Catarina I, e lecionou Física e Matemática na mesma academia (a partir de 1730 e 1733, respectivamente).</p>", "https://s3-sa-east-1.amazonaws.com/manual-do-enem-test/527f62fcbe604bf59de23f8f9e1afde9-Leonhard_Euler_by_Handmann.png"], /*2*/["<p class=title>Conheça John Venn</p><p>Nascido em 1834, <b>o britânico John Venn ingressou na <i>Universidade de Cambridge</i> aos 19 anos</b>, licenciando-se em 1857. Contudo, <b>tornou-se sacerdote anglicano</b> dois anos depois, seguindo a tendência da família. Retornou à Cambridge em 1862 como <b>professor de Ciência Moral</b>, ensinando lógica e probabilidade.</p><p>O desenvolvimento de seus diagramas (seu trabalho mais conhecido) deve-se sobretudo aos seus estudos que culminaram na <b>Teoria Booleana</b>, fundamental na lógica dos computadores atualmente! <b>Faleceu de causas naturais</b> em 1923, aos 88 anos.</p>", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/John_Venn_2.jpg/440px-John_Venn_2.jpg"]);
var informContent = new Array(/*1*/"<p>Representação dinâmica de variados tipos de funções no Plano Cartesiano: respectivamente, funções trigonométricas (seno e cosseno), afim (1º grau), quadrática (2º grau) e exponencial.</p>", /*2*/"<p class=title>Conceito!</p><p>Um conjunto é um agrupamento de elementos. De acordo com o contexto em que um conjunto é formulado, um elemento pode ser, por exemplo, valores numéricos, ou até mesmo objetos do nosso cotidiano!</p>", /*3*/"<p class=title>Conceito!</p><p>Função é a relação existentes entre os valores de duas ou mais grandezas, que podem ser tanto variáveis independentes (que não mudam de acordo com outras variáveis) e as variáveis dependentes (que mudam de acordo com outras variáveis). A equação que as relacionam é denominada lei da função!</p>")
var contentSect = document.querySelector("#content")
var classParag = document.getElementsByClassName("parag")
var allPCpt = document.getElementsByClassName("paragCapt")
var tagCond = false //---> "False" quando for <p>; "True" quando for <li>!
var addClassNum = new Array();
    addClassNum["LI"] = 0
    addClassNum["P"] = 1
for(let y = 0; y < classParag.length; y++) {
    let tagElement = classParag[y].tagName
    if(tagElement == "LI" && tagCond == false) {
        tagCond = true
        classParag[y].style.marginTop = "0px"
        classParag[y].style.paddingTop = "30px"
    } else if((tagElement == "P" && tagCond == true) || (tagElement == "LI" && y == classParag.length - 1)) {
        tagCond = false
        classParag[y - addClassNum[tagElement]].style.marginBottom = "0px"
        classParag[y - addClassNum[tagElement]].style.paddingBottom = "30px"
    }
} for(var f = 0; f < allPCpt.length; f++) {
    allPCpt[f].innerHTML = '<img src="https://cdn.icon-icons.com/icons2/809/PNG/512/education_school_folder_icon-icons.com_66123.png" width=50 height=50>' + captPag[f];
} var allSubCpt = document.getElementsByClassName("subCapt")
var classSeta = document.getElementsByClassName("setaSectImg")
var divColuna = document.getElementsByClassName("coluna")
var classB = document.getElementsByClassName("b")
var condOpenImg = false //---> "True" se a imagem estiver aberta em uma aba especial (elemento de id "sectImg"); "False" caso contrário!
var artcIntrod = document.querySelector("#introdPag > article")
var cnvElement = document.querySelector("#introdPag > article > canvas")
var ctx = cnvElement.getContext("2d")
var conjInform = document.getElementsByClassName("divInform")
var idInform = document.querySelector("#divInform")
//var imgInform = idInform.querySelector("div.icon > img")
var conjContent = document.getElementsByClassName("content")
var menuElement = document.querySelector("#menuIniciar")
var divMLElement = document.querySelector("#menuLateral > div.divMenuLateral")
var divMenuOpt = document.querySelector("#menuMatDiv > div")
var menuContent = document.querySelector("#menu")
var divMenu = document.querySelector("#menu > article > div")
var articleMenu = document.querySelector("#menu > article > aside")
var childArtcMenu = articleMenu.childNodes
var imgDstq = document.querySelector("#imgDestaque")
var setasArtc = document.querySelector("#artcSetas")
var headSect = document.querySelector("#headSectImg")
var setSectImg
var setTranstImg
var eventTeclaImg = function() {
    let numTecla = event.keyCode
    if((numTecla == 37 && numImgDstq !== 0) || (numTecla == 39 && numImgDstq !== allFigure.length - 1)) {
        nextImg(numTecla - 38)
    }
};
var condImgDstq = true
var menuIcon = document.querySelector("#menuMatDiv > span > img")
var menuIconOut = document.querySelector("#menuLateral > p > img")
var paragMenuIconOut = document.querySelector("#menuLateral > p")
var lateral = document.querySelector("#menuLateral")
var introdNav = document.querySelector("#menuIntrodNav")
var introdDiv = document.querySelector("#menuIntrod > div")
var childIntrodDiv = introdDiv.childNodes
var inptPsq = document.querySelector("#divMenuPesq > div > input")
var iconPsq = document.querySelector("#divMenuPesq > div > span:nth-child(1) > img")
var iconLixo = document.querySelector("#divMenuPesq > div > span:nth-child(3) > img")
var imgElement = document.querySelector("#sectImg")
var bckLtr
var setBckLtr
var comprImg
var altImg
var prop = 1
var numImgDstq
var valueScroll
var valueCapt
var scroll1
var countScroll
var setScroll
for(let k = 0; k < classB.length; k++) {
    const kCons = k
    let bDiv = classB[kCons].childNodes[0]
    let divPrinc
    let divCont1
    let divCont2
    let widthCont
    let condDiv1 = false
    let condDiv2 = false
    let condDivDirect
    let setDivCont
    function valueDistDiv(newconst) {
        divPrinc.style.opacity = newconst
        if(condDivDirect == 0) { //---> "Div" informativa à esquerda
            divCont1.style.left = -30*(2 - newconst) + "px"
            divCont2.style.left = -(widthCont + 30*(2 - newconst)) + "px"
        } else if(condDivDirect == 1) { //---> "Div" informativa acima
            divCont1.style.bottom = 30*(1 - newconst) + "px"
            divCont2.style.bottom = (50 - 30*newconst) + "px"
        } else if(condDivDirect == 2) { //---> "Div" informativa à direita
            divCont1.style.right = -30*(2 - newconst) + "px"
            divCont2.style.right = -(widthCont + 30*(2 - newconst)) + "px"
        } else if(condDivDirect == 3) { //---> "Div" informativa abaixo
            divCont1.style.top = (bDiv.offsetHeight + 30*(1 - newconst)) + "px"
            divCont2.style.top = (bDiv.offsetHeight + 50 - 30*newconst) + "px"
        }
    } classB[kCons].addEventListener("mouseenter", function() {
        clearTimeout(setDivCont)
        bDiv.style.color = "sandybrown"
        if(condDiv1 == false) {
            condDiv1 = true
            divPrinc = document.createElement("div")
            divCont1 = document.createElement("div")
            divCont2 = document.createElement("div")
            let divImg = document.createElement("div")
            let content = document.createElement("aside")
            let image = document.createElement("img")
            let distTop = bDiv.offsetTop - (window.scrollY + menuContent.offsetHeight)
            let distBottom = window.innerHeight - bDiv.offsetHeight - (bDiv.offsetTop - window.scrollY)
            let distLeft = bDiv.offsetLeft
            let distRight = (window.innerWidth - 26) - bDiv.offsetWidth - distLeft
            divCont1.className = "b1"
            divCont2.className = "b2"
            content.innerHTML = contentExtra[kCons][0]
            if(contentExtra[kCons][1] !== undefined) {
                image.src = contentExtra[kCons][1]
                image.addEventListener("load", function() {
                    let widthImg = image.naturalWidth*300/image.naturalHeight
                    let heightImg = 300
                    widthCont = 350
                    let heightCont = 300
                    let directCont = false //---> "False" para direção horizontal; "True" para direção vertical!
                    if(widthImg <= 350) {
                        widthCont += widthImg
                        widthCont = Math.floor(widthCont)
                    } else {
                        heightImg = 105000/widthImg
                        heightCont += heightImg
                        widthImg = 350
                        divCont2.style.flexDirection = "column"
                        directCont = true
                    } let condLeft = false
                    let condRight = false
                    if(1.5*(widthCont + 30) < distLeft) {
                        condLeft = true
                    } if(1.5*(widthCont + 30) < distRight) {
                        condRight = true
                    } let distDivHeight = (heightCont - bDiv.offsetHeight)/2
                    if((condLeft == true || condRight == true) && (distDivHeight < distTop && distDivHeight < distBottom)) {
                        divCont1.style.top = (bDiv.offsetHeight/2 - 15) + "px"
                        divCont2.style.top = -distDivHeight + "px"
                        if(distLeft >= distRight) { //===> Lado esquerdo
                            divCont1.style.left = "-60px"
                            divCont2.style.left = -(widthCont + 60) + "px"
                            divCont1.style.borderTop = "15px solid transparent"
                            divCont1.style.borderBottom = "15px solid transparent"
                            divCont1.style.borderLeft = "20px solid rgb(122,122,122)"
                            condDivDirect = 0
                        } else { //===> Lado direito
                            divCont1.style.right = "-60px"
                            divCont2.style.right = -(widthCont + 60) + "px"
                            condDivDirect = 2
                            divCont1.style.borderTop = "15px solid transparent"
                            divCont1.style.borderBottom = "15px solid transparent"
                            divCont1.style.borderRight = "20px solid rgb(122,122,122)"
                            if(directCont == false) {
                                divCont2.style.flexDirection = "row-reverse"
                            }
                        }
                    } else {
                        divPrinc.style.display = "flex"
                        divPrinc.style.justifyContent = "center"
                        if(window.innerWidth - 56 >= widthCont) {
                            let partWCont = (widthCont - bDiv.offsetWidth)/2
                            if(distLeft - 15 < partWCont) {
                                divCont2.style.left = (15 - distLeft) + "px"   
                            } else if(distRight - 15 < partWCont) {
                                divCont2.style.right = (15 - distRight) + "px"
                            }
                        } else {
                            divCont2.style.left = -(distLeft - 15 + (widthCont - window.innerWidth + 56)/2) + "px"
                        } if(distTop >= distBottom) { //--> "Div" informativa acima
                            divCont1.style.bottom = "30px"
                            divCont2.style.bottom = "50px"
                            divCont1.style.borderLeft = "15px solid transparent"
                            divCont1.style.borderRight = "15px solid transparent"
                            divCont1.style.borderTop = "20px solid rgb(122,122,122)"
                            condDivDirect = 1
                        } else { //--> "Div" informativa abaixo
                            divCont1.style.top = (bDiv.offsetHeight + 30) + "px"
                            divCont2.style.top = (bDiv.offsetHeight + 50) + "px"
                            divCont1.style.borderLeft = "15px solid transparent"
                            divCont1.style.borderRight = "15px solid transparent"
                            divCont1.style.borderBottom = "20px solid rgb(122,122,122)"
                            condDivDirect = 3
                            if(directCont == true) {
                                divCont2.style.flexDirection = "column-reverse"
                            }
                        }
                    } divImg.style.width = widthImg + "px"
                    divImg.style.height = heightImg + "px"
                    setDivCont = setTimeout(function() {
                        valueDistDiv(1)
                    }, 100)
                    condDiv2 = true
                })
                divImg.appendChild(image)
                divCont2.appendChild(divImg)
            } divCont2.appendChild(content)
            divPrinc.appendChild(divCont1)
            divPrinc.appendChild(divCont2)
            classB[kCons].insertBefore(divPrinc, bDiv)
        } else if(condDiv1 == true) {
            valueDistDiv(1)
        }
    }); classB[kCons].addEventListener("mouseleave", function() {
        bDiv.style.color = "rgb(150,150,150)"
        clearTimeout(setDivCont)
        if(condDiv2 == true) {
            valueDistDiv(0)
            setDivCont = setTimeout(function() {
                condDiv1 = false
                classB[kCons].removeChild(divPrinc)
            }, 300)
        } else if(condDiv2 == false) {
            condDiv1 = false
            classB[kCons].removeChild(divPrinc)
        }
    })
} for(var r = 0; r <= 1; r++) {
    const rCons = r
    classSeta[r].addEventListener("click", function() { nextImg(2*rCons - 1) })
} var wDivLat = parseFloat(divMLElement.style.width) - 30;
for(let t = 0; t < materiais.length; t++) { //---> Navs e Links das matérias no menu lateral!
    let navElement = document.createElement("nav");
    navElement.className = "opt borderOpt shadowOpt transt1";
    navElement.style.marginTop = 12*(1 - Math.pow(0, t)) + "px";
    let pElement = document.createElement("p");
    pElement.textContent = materiais[t][0][0];
    pElement.className = "txtSpc";
    pElement.style.padding = "10px";
    navElement.appendChild(pElement);
    divMLElement.appendChild(navElement);
    const altPElement = pElement.offsetHeight;
    navElement.style.width = wDivLat + "px";
    navElement.style.height = altPElement + "px";
    createParagMenu(t, navElement, 0);
    navElement.addEventListener("mouseenter", function() {
        navElement.style.height = navElement.scrollHeight + "px";
    });
    navElement.addEventListener("mouseleave", function() {
        navElement.style.height = altPElement + "px";
    });
} for(let u = 0; u < otherOpt.length; u++) { //---> Links para outras páginas do site!
    let newDiv = document.createElement("div")
    newDiv.className = "opt mrgOpt2 borderOpt txtSpc transt2"
    newDiv.textContent = otherOpt[u]
    divMenuOpt.insertBefore(newDiv, document.querySelector("#menuMatDiv > div > div"))
    newDiv.style.height = (newDiv.offsetHeight - 40) + "px"
} for(var g = 0; g < allSubCpt.length; g++) {
    allSubCpt[g].innerHTML = subCaptPag[g];
} for(var k = 0; k < captPag.length; k++) {
    var divElement = document.createElement("div")
    divElement.textContent = captPag[k]
    const kCons = k
    divElement.addEventListener("click", function() {
        clearInterval(setScroll)
        scroll1 = window.scrollY
        countScroll = 0
        if(topParagCapt(kCons) !== scroll1) {
            setScroll = setInterval(function() {
                countScroll++
                const scrollEixoY = scroll1 + (topParagCapt(kCons) - scroll1)*(1 - Math.cos(Math.PI*countScroll/50))/2
                window.scrollTo(0, scrollEixoY);
                if(countScroll == 50) {
                    clearInterval(setScroll)
                }
            }, 20)
        }
    })
    articleMenu.appendChild(divElement)
} var numFuncGph = 0;
var classImg = document.getElementsByClassName("img")
var allFigure = document.getElementsByTagName("figure")
var percent = new Array(1, 0.7, 0.85, 1, 1);
var countImg = 0
var countImgLoad = 0
for(var k = 0; k < conjImg.length; k++) {
    let comprImg = conjImg[k].length;
    for(var j = 0; j < comprImg; j += 3) {
        let figLet = document.createElement("figure")
        let figCptLet = document.createElement("figcaption")
        let imgLet = document.createElement("img")
        let bck = conjImg[k][j + 2]
        if(bck !== false) {
            imgLet.style.background = bck
        } imgLet.src = conjImg[k][j]
        imgLet.alt = countImg + 1
        figCptLet.innerHTML = conjImg[k][j + 1]
        if(j < comprImg/3 - 1) {
            figLet.className = "space"
        } figLet.appendChild(imgLet)
        figLet.appendChild(figCptLet)
        figLet.addEventListener("mouseenter", function() { filterImg(imgLet, figCptLet, 0.2, 1) })
        figLet.addEventListener("mouseleave", function() { filterImg(imgLet, figCptLet, 1, 0) })
        const countCons = countImg
        figLet.addEventListener("click", function() {
            clearTimeout(setSectImg)
            condOpenImg = true
            imgElement.style.transition = "all 0.6s ease-in-out"
            imgElement.style.marginTop = "0px"
            numImgDstq = countCons
            newImgDstq(false)
            imgDstq.style.display = "block"
            document.addEventListener("keydown", eventTeclaImg)
        }); classImg[k].appendChild(figLet)
        imgLet.addEventListener("load", function() {
            figLet.style.height = figLet.offsetWidth*imgLet.naturalHeight*percent[countCons]/imgLet.naturalWidth + "px"
            countImgLoad++
            if(countImgLoad == countImg) {
                document.querySelector("body").style.transition = "all 1.5s ease"
                document.querySelector("body").style.opacity = 1
                contentTela(true);
                window.addEventListener("resize", function() { contentTela(false) });
                setTimeout(function() {
                    document.querySelector("#sectProgress").style.display = "none"
                    Winf = idInform.scrollWidth
                    let altDiv = idInform.querySelector("div.content").scrollHeight
                    if(altDiv < 70) {
                        altDiv = 70
                    } Hinf.push(altDiv)
                    for(let u = 0; u < conjInform.length; u++) {
                        let infH = conjInform[u].scrollHeight - 16
                        Hinf.push(infH)
                    }
                }, 1500)
            }
        }); countImg++
    }
} var functGphX = function() {
    if(constGphX == undefined) {
        document.addEventListener("mousemove", function() { drawGphIntrod() })
        document.addEventListener("mousemove", function() { drawGphFunct() })
        document.removeEventListener("mousemove", functGphX)
    }
}; document.addEventListener("mousemove", functGphX);
document.querySelector("#headSectImg > span > img").addEventListener("click", function() {
    if(condOpenImg == true) {
        imgElement.style.marginTop = window.innerHeight + "px";
        condOpenImg = false;
        setSectImg = setTimeout(function() {
            imgElement.style.transition = "none";
            imgDstq.style.display = "none";
        }, 600/*Tempo de transição do elemento*/);
    }
}); function topParagCapt(orderValue) {
    return (allPCpt[orderValue].offsetTop + allPCpt[orderValue].offsetHeight - window.innerHeight + 1);
} function nextImg(constNext) {
    if(condImgDstq == true) {
        numImgDstq += constNext;
        newImgDstq(true);
    }
} function equationZoom(newcond) {
    let v0
    if(W > H) {
        v0 = H
    } else {
        v0 = W
    } let v1 = 1
    let v2 = W*(1 - newcond) + H*newcond
    let v3 = wW*(1 - newcond) + wH*newcond
    if(v2 < v3) {
        v1--
    } let v4 = propXW*(1 - newcond) + propYH*newcond
    return (100*v0/937 + v1*(v2 - v3)/2)*(1 - 2*v4);
} function funcZoomImgFunc() {
    let mL = equationZoom(0) //---> Margem lateral esquerda da imagem de destaque!
    let mT = equationZoom(1) //---> Margem superior da imagem de destaque!
    imgDstq.style.marginLeft = mL + "px";
    imgDstq.style.marginTop = mT + "px";
} function funcZoomImgFuncDefinProp() {
    propXW = event.clientX/wW
    propYH = event.clientY/wH
    funcZoomImgFunc()
} var propXW
var propYH
var funcZoomImg1 = function() { funcZoomImgFuncDefinProp() }
var funcZoomImg2 = function() { funcZoomImgFunc() }
var W //---> Comprimento da imagem de destaque!
var H //---> Altura da imagem de destaque!
var Winf
var Hinf = new Array()
let informBck = document.createElement("div")
let infDivImg = document.createElement("div")
let infDivCont = document.createElement("div")
let infDivContTxt = document.createElement("div")
informBck.className = "back"
infDivImg.className = "icon"
infDivImg.innerHTML = '<img src="https://image.flaticon.com/icons/png/512/684/684802.png" height=50>'
infDivContTxt.className = "content"
infDivCont.appendChild(infDivContTxt)
idInform.appendChild(informBck)
idInform.appendChild(infDivImg)
idInform.appendChild(infDivCont)
idInform.addEventListener("mouseenter", function() {
    idInform.style.width = Winf + "px"
    idInform.style.height = Hinf[0] + "px"
    informBck.style.opacity = 1
    infDivImg.querySelector("img").style.filter = "invert(0.7)"
});
idInform.addEventListener("mouseleave", function() {
    idInform.style.width = "50px"
    idInform.style.height = "50px"
    informBck.style.opacity = 0
    infDivImg.querySelector("img").style.filter = "invert(1)"
});
for(let u = 0; u < conjInform.length; u++) {
    const uCons = u
    let inf = conjInform[uCons]
    let image = document.createElement("img")
    let divIcon = document.createElement("div")
    let divContent = document.createElement("div")
    let divGeral = document.createElement("div")
    image.src = "https://image.flaticon.com/icons/png/512/684/684802.png"
    image.height = 50
    divIcon.className = "icon"
    divContent.className = "content"
    divIcon.appendChild(image)
    divGeral.appendChild(divIcon)
    divGeral.appendChild(divContent)
    inf.appendChild(divGeral)
    inf.addEventListener("mouseenter", function() {
        inf.style.width = "500px"
        inf.style.height = Hinf[uCons + 1] + "px"
        image.style.filter = "invert(0.6)"
        bckAside.style.opacity = 1
    })
    inf.addEventListener("mouseleave", function() {
        inf.style.width = "50px"
        inf.style.height = "50px"
        image.style.filter = "invert(0.8)"
        bckAside.style.opacity = 0
    })
} for(let a = 0; a < conjContent.length; a++) {
    conjContent[a].innerHTML = informContent[a]
} imgDstq.addEventListener("click", function() {
    if(condImgDstq == true) {
        transitImgDstq();
        if(prop == 1) {
            setasArtc.style.display = "none"
            headSect.style.display = "none"
            imgDstq.style.cursor = "zoom-out"
            prop = 2
            document.addEventListener("mousemove", funcZoomImg1)
            window.addEventListener("resize", funcZoomImg2)
        } else {
            setasArtc.style.display = "flex"
            headSect.style.display = "block"
            imgDstq.style.cursor = "zoom-in"
            prop = 1
            imgDstq.style.marginLeft = "0px"
            imgDstq.style.marginTop = "0px"
            document.removeEventListener("mousemove", funcZoomImg1)
            window.removeEventListener("resize", funcZoomImg2)
        } medidaImgFunc()
        if(prop !== 1) {
            funcZoomImgFuncDefinProp();
        }
    }
});
menuIcon.addEventListener("click", function() {
    clearTimeout(setBckLtr)
    bckLtr = document.createElement("section")
    bckLtr.id = "backMenuLateral"
    bckLtr.className = "classFixed"
    menuElement.insertBefore(bckLtr, lateral)
    setTimeout(function() {
        bckLtr.style.opacity = 1
    }, 50)
    lateral.style.left = "0px"
});
menuIconOut.addEventListener("click", function() {
    bckLtr.style.opacity = 0
    lateral.style.left = "-450px"
    setBckLtr = setTimeout(function() {
        menuElement.removeChild(bckLtr)
    }, 300)
});
menuIconOut.addEventListener("mouseenter", function() { paragMenuIconOut.style.height = "80px" });
menuIconOut.addEventListener("mouseleave", function() { paragMenuIconOut.style.height = "70px" });
inptPsq.addEventListener("keydown", function() {
    if(event.keyCode == 13) { //---> Tecla Enter pressionada!
        pesquisaFunc()
    }
});
iconLixo.addEventListener("click", function() { limparInput(inptPsq) });
iconPsq.addEventListener("click", function() { pesquisaFunc() });
function getStyle(newelement, newproperty) {
    return window.getComputedStyle(newelement).getPropertyValue(newproperty)
} function filterImg(newimg, newfigcpt, imgvalue, figcptvalue) {
    newimg.style.filter = "brightness(" + imgvalue + ")";
    newimg.style.width = (100 + figcptvalue*20) + "%";
    newfigcpt.style.filter = "opacity(" + figcptvalue + ")";
} function pesquisaFunc() {
    var newBusca = "";
    var splitNewBusca = inptPsq.value.split(" ");
    for(var y = 0; y < splitNewBusca.length; y++) {
        if(splitNewBusca[y] !== "") {
            if(newBusca !== "") {
                newBusca += " ";
            } newBusca += splitNewBusca[y];
        }
    } if(newBusca.length <= 1) {
        alert("Se o valor do campo de entrada for vazio, preenchido exclusivamente por espaço ou que possui somente um caractere distinto de um espaço, a pesquisa será inviabilizada!");
        limparInput(inptPsq);
    } else {
        alert("Busca concluída com sucesso!");
        //Script que permite a busca de um termo nas páginas!
    }
} function createParagMenu(newvalue, newelement, newconst) {
    for(let a = 1; a < materiais[newvalue].length; a++) {
        let newParag = document.createElement("p");
        let newTagA = document.createElement("a");
        newParag.className = "paragopt";
        if(a == 1) {
            newParag.style.paddingTop = newconst*15 + "px";
        } else if(a == materiais[newvalue].length - 1) {
            newParag.style.paddingBottom = "16px";
        } newTagA.textContent = materiais[newvalue][a][0];
        newParag.appendChild(newTagA);
        newelement.appendChild(newParag);
    }
} function limparInput(newelement) { //---> Um único elemento HTML input!
    newelement.value = ""
    newelement.focus()
} function limparConjInput(newelement, newvalue) { //---> Nome ou classe que remeta a um conjunto de elementos HTML input!
    for(var k = 0; k < newelement.length; k++) {
        newelement[k].value = ""
    } newelement[newvalue].focus()
} window.addEventListener("resize", function() {
    redimensFunc()
    drawGphIntrod()
    drawGphFunct()
})
document.addEventListener("scroll", function() { contentTela(false) })
document.addEventListener("load", functIntrod())
var wW
var wH
var wHAnt
function functIntrod() {
    redimensFunc()
    ctx.font = "bold italic 50px Roboto"
    drawGphIntrod()
} function mostrarOptMenu(elementnav, elementdiv) {
    elementnav.style.marginLeft = elementdiv.offsetLeft + "px"
    elementnav.style.height = elementnav.scrollHeight + "px"
    elementnav.style.borderColor = "rgb(255,0,170)"
    elementdiv.style.borderColor = "rgb(255,0,170)"
    elementdiv.style.color = "silver"
    elementdiv.style.backgroundColor = "black"
} function ocultarOptMenu(elementnav, elementdiv) {
    elementnav.style.height = "0px"
    elementnav.style.borderColor = "silver"
    elementdiv.style.borderColor = "silver"
    elementdiv.style.color = "white"
    elementdiv.style.backgroundColor = "transparent"
} function contentTela(newcond) { //---> O parâmetro recebe dois valores, que indicam o tipo de evento em que a função será ativada: 'true' = carregamento da página; 'false' = outros mais!
    let scroll = window.scrollY
    if(newcond == true) {
        let quantCapt = -1
        for(let k = 0; k < allPCpt.length; k++) {
            if(allPCpt[k].offsetTop + allPCpt[k].offsetHeight < window.innerHeight + scroll) {
                quantCapt++
            } else {
                break
            }
        } valueCapt = quantCapt
    } else if(newcond == false) {
        if(valueScroll > scroll || wHAnt > wH) { //---> Rolagem pra cima ou diminuição da altura do browser
            for(let l = valueCapt; l >= 0; l--) {
                if(allPCpt[l].offsetTop + allPCpt[l].offsetHeight > window.innerHeight + scroll) {
                    childArtcMenu[valueCapt].style.background = "linear-gradient(to right, rgb(172,127,148), rgb(190,140,160))"
                    valueCapt--
                } else {
                    break
                }
            }
        } else if(valueScroll < scroll || wHAnt < wH) { //---> Rolagem pra baixo ou aumento da altura do browser
            for(let m = valueCapt + Math.pow(0, valueCapt + 1); m < allPCpt.length; m++) {
                if(allPCpt[m].offsetTop + allPCpt[m].offsetHeight < window.innerHeight + scroll) {
                    valueCapt = m
                    childArtcMenu[valueCapt].style.background = "linear-gradient(to right, rgb(172,127,148), rgb(190,140,160))"
                } else {
                    break
                }
            }
        }
    } let positValue = -menuContent.scrollWidth
    if(valueCapt >= 0) {
        positValue += childArtcMenu[valueCapt].offsetLeft + 230/*Comprimento das respectivas "divs" ("width" + 2*"padding") CONFIRA CSS!*/
        childArtcMenu[valueCapt].style.background = "linear-gradient(to right, rgb(190,140,160), rgb(255,191,207))"
    } divMenu.style.backgroundPosition = positValue + "px 0px"
    valueScroll = scroll
    wHAnt = wH
} function redimensFunc() {
    wW = window.innerWidth
    wH = window.innerHeight
    if(condOpenImg == false) {
        imgElement.style.marginTop = wH + "px"
        divMenu.style.width = menuContent.scrollWidth + "px"
    } if(imgDstq.style.display == "block") {
        medidaImgFunc();
    } cnvElement.width = wW - 26/*Largura da barra de rolagem, em pixels (Confira CSS)*/;
    let border = "350px"
    if(wW < 1200) {
        border = 7*wW/24 + "px"
    } border = "0px " + border
    artcIntrod.style.borderRadius = border
    cnvElement.style.borderRadius = border
    let widContent = 800
    if(wW < 946) { //---> Comprimento máximo da seção de conteúdo, incluindo "width" e "padding"s (Total: 120px)!
        widContent = wW - 146
    } contentSect.style.width = widContent + "px"
    if(divMenuOpt.offsetWidth == divMenuOpt.scrollWidth) {
        divMenuOpt.style.background = "none"
    } else {
        divMenuOpt.style.background = "linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0) 10px, rgba(0,0,0,0), rgba(0,0,0,0) calc(100% - 10px), rgba(0,0,0,0.7))"
    } let curs
    if(document.querySelector("#menuIntrod").offsetWidth < introdDiv.offsetWidth + 30) {
        introdDiv.style.opacity = 0
        introdNav.style.display = "none"
        curs = "default"
    } else {
        introdDiv.style.opacity = 1
        introdNav.style.display = "block"
        curs = "pointer"
    }
    for(var j = 0; j < childIntrodDiv.length; j++) {
        childIntrodDiv[j].style.cursor = curs
    }
} function medidaImgFunc() {
    /*Originalmente, os valores de comprimento e altura são as respectivas medidas originais do elemento!*/
    if(comprImg > 0.7*wW || altImg > 0.7*wH) { //---> Se as medidas originais da imagem ultrapassarem 70% das respectivas medidas da tela!
        let propTela = wW/wH //---> Relação do comprimento e da altura da tela!
        let proportImg = comprImg/altImg //---> Relação do comprimento e da altura originais da imagem!
        if(propTela > proportImg) { //---> Relativamente, o comprimento em relação à altura da tela é maior que a do comprimento da imagem em relação à altura da imagem!
            H = 0.7*wH
            W = H*proportImg
        } else { //---> Situação inversa!
            W = 0.7*wW
            H = W/proportImg
        }
    } else {
        W = comprImg
        H = altImg
    } W *= prop
    H *= prop
    imgDstq.style.width = W + "px"
    imgDstq.style.height = H + "px"
    let menorMed;
    if(W > H) {
        menorMed = H
    } else {
        menorMed = W
    } imgDstq.style.borderRadius = (menorMed*20/656) + "px"
} function transitImgDstq() {
    imgDstq.style.transition = "all 0.3s ease"
    condImgDstq = false
    setTranstImg = setTimeout(function() {
        imgDstq.style.transition = "none"
        condImgDstq = true
    }, 300);
} function newImgDstq(newcond) {
    classSeta[0].style.display = "block"
    classSeta[1].style.display = "block"
    setasArtc.style.justifyContent = "space-between"
    if(numImgDstq == 0) {
        classSeta[0].style.display = "none"
        setasArtc.style.justifyContent = "flex-end"
    } if(numImgDstq == allFigure.length - 1) {
        classSeta[1].style.display = "none"
        setasArtc.style.justifyContent = "flex-start"
    } let image = allFigure[numImgDstq].childNodes[0]
    let descrit = allFigure[numImgDstq].childNodes[1].innerHTML
    imgDstq.src = image.src
    imgDstq.style.background = image.style.background
    if(newcond == true) {
        transitImgDstq()
    } document.querySelector("#headSectImg > p").innerHTML = descrit
    comprImg = imgDstq.naturalWidth //---> Comprimento original da imagem!
    altImg = imgDstq.naturalHeight //---> Altura original da imagem!
    medidaImgFunc();
} var constGphY;
var constGphX;
function valorY(value, constFunc, newcondFuncDeriv, newcondType) {
    var result = 0;
    if(newcondFuncDeriv == false) { //---> Função y em função de x
        if(newcondType[0] == 0) { //---> Função Polinomial
            for(var k = constFunc.length - 1; k >= 0; k--) {
                result += constFunc[constFunc.length - 1 - k]*Math.pow(value, k);
            }
        } else if(newcondType[0] == 1) { //---> Função Exponencial
            result = constFunc[0]*Math.pow(constFunc[1], value) + constFunc[2];
        } else if(newcondType[0] == 2) { //---> Função Logarítmica
            result = Math.log(value)/Math.log(constFunc);
        } else if(newcondType[0] == 3) { //---> Função Trigonométrica
            value = value*constFunc[1] + constFunc[2];
            if(newcondType[1] == 0) { //---> Seno
                result = Math.sin(value);
            } else if(newcondType[1] == 1) { //---> Cosseno
                result = Math.cos(value);
            } else if(newcondType[1] == 2) { //---> Tangente
                result = Math.tan(value);
            } else if(newcondType[1] == 3) { //---> Cossecante
                result = 1/Math.sin(value);
            } else if(newcondType[1] == 4) { //---> Secante
                result = 1/Math.cos(value);
            } else if(newcondType[1] == 5) { //---> Cotangente
                result = 1/Math.tan(value);
            } result *= constFunc[0];
        }
    } else if(newcondFuncDeriv == true) { //---> Derivada da função y em função de x
        if(newcondType[0] == 0) { //---> Função Polinomial
            for(var k = constFunc.length - 1; k >= 1; k--) {
                result += constFunc[constFunc.length - 1 - k]*k*Math.pow(value, (k - 1));
            }
        } else if(newcondType[0] == 1) { //---> Função Exponencial
            result = constFunc[0]*Math.pow(constFunc[1], value)*Math.log(constFunc[1]);
        } else if(newcondType[0] == 2) { //---> Função Logarítmica
            result = 1/(value*Math.log(constFunc));
        } else if(newcondType[0] == 3) { //---> Função Trigonométrica
            value = value*constFunc[1] + constFunc[2];
            if(newcondType[1] == 0) { //---> Seno
                result = Math.cos(value);
            } else if(newcondType[1] == 1) { //---> Cosseno
                result = -Math.sin(value);
            } else if(newcondType[1] == 2) { //---> Tangente
                result = Math.pow(Math.cos(value), -2);
            } else if(newcondType[1] == 3) { //---> Cossecante
                result = -Math.cos(value)/Math.pow(Math.sin(value), 2);
            } else if(newcondType[1] == 4) { //---> Secante
                result = Math.sin(value)/Math.pow(Math.cos(value), 2);
            } else if(newcondType[1] == 5) { //---> Cotangente
                result = -Math.pow(Math.sin(value), -2);
            } result *= constFunc[0]*constFunc[1];
        }
    } return result;
} function valorYFuncGph(valueFuncGph, newcond) {
    var conjCons;
    var typeFunc;
    if(numFuncGph <= 1) { //---> Senóide e Cossenóide
        conjCons = [1, 1, 0];
        typeFunc = [3, numFuncGph];
    } else if(numFuncGph > 1 && numFuncGph <= 3) { //---> Reta e parábola
        conjCons = new Array();
        for(var a = 0; a < numFuncGph; a++) {
            conjCons.push(Math.pow(0, a));
        } typeFunc = [0];
    } else if(numFuncGph == 4) { //---> Curva exponencial
        conjCons = [1, Math.E, 0];
        typeFunc = [1];
    } return valorY(valueFuncGph, conjCons, newcond, typeFunc)
} function drawGphIntrod() {
    var centerW = Math.ceil(wW/2 - 2);
    ctx.clearRect(0, 0, cnvElement.width, cnvElement.height);
    ctx.fillStyle = "rgb(100,100,100)";
    ctx.fillRect(3, 348, wW, 4);
    ctx.fillRect(centerW, 0, 4, wH);
    ctx.fillText("x", 3, 345);
    ctx.fillText("y", Math.ceil(wW/2 + 5), 30);
} function drawGphFunct() {
    constGphX = event.clientX*2/wW - 1;
    constGphY = event.clientY*2/wH - 1;
    ctx.fillStyle = "black";
    ctx.beginPath();
    var conjAngle = new Array();
    var conjY = new Array();
    for(var t = 0; t <= wW - 26; t++) {
        var valorX = (t - Math.ceil(wW/2 - 2) - 1)/120 - constGphX*2;
        var yPix = constGphY*valorYFuncGph(valorX, false)*120 + 350;
        var angDerivX = Math.atan(constGphY*valorYFuncGph(valorX, true));
        conjY.push(yPix);
        conjAngle.push(angDerivX);
        ctx.lineTo(t - 4*Math.sin(angDerivX), yPix + 4*Math.cos(angDerivX));
    } for(var t = wW - 26; t >= 0; t--) {
        ctx.lineTo(t + 4*Math.sin(conjAngle[t]), conjY[t] - 4*Math.cos(conjAngle[t]));
    } ctx.fill();
}
