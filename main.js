$(document).ready(function(){
    $(".filter-item").click(function(){
        const value = $(this).attr("data-filter");
        if(value == "all") {
            $(".post-box").show("1000");
        }
        else{
            $('.post-box').not('.'+ value).hide('1000');
            $('.post-box').filter('.'+ value).show('1000');
        }
    })

    //Add active to bin
    $('.filter-item').click(function(){
     $(this).addClass('active-filter').siblings().removeClass('active-filter')
    })
});


//Header Background Change On Scroll

let header = document.querySelector('header')
 
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
})

const link =encodeURI(window.location.href);
const msg = encodeURIComponent('Hey Ifound this article');
const title = encodeURIComponent(document.querySelector('title').textContent);

console.log([link,msg,title]);

const fb =document.querySelector('.facebook');
fb.href = 'https://www.facebook.com/share.php?u=${link}';









