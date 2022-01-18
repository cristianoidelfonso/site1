
/*
*    A lógica é simples:
*
*   1 – Identificar o momento em que o usuário clica no link
*   2 – Verificar o valor de href do link e encontrar o elemento com este ID na página
*   3 – Calcular a distância entre o elemento e o topo da página
*   4 – Animar o scroll até o local do elemento
*
*   Créditos: https://www.origamid.com/codex/scroll-suave-para-link-interno/
*/

// o a[href^="#"] seleciona apenas links com href="#"
$('.nav a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $('.nav a[href^="#"').removeClass('active');
    $(this).toggleClass('active');
    let id = $(this).attr('href');
    let targetOffset = $(id).offset().top;

    $('html, body').animate({ 
        scrollTop: targetOffset - 100
    }, 750);
});




