const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
}

const toggleLightMode = () => {
    document.documentElement.classList.remove('dark');
}

const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const pages = document.querySelectorAll('article');
const mainContact = document.querySelector('.main-contact');

pages[0].classList.remove('hidden');

navList.forEach((item) => {
    item.addEventListener('click', () => {
        navList.forEach((navItem) => {
            navItem.classList.remove('text-primary', 'font-medium');
            navItem.classList.add('text-gray-950');
        });
        item.classList.remove('text-gray-950');
        item.classList.add('text-primary', 'font-medium');

        mainContact.scrollIntoView({ behavior: 'smooth' });
        
        pages.forEach((page) => {
            page.classList.contains(item.id) ? page.classList.remove('hidden') : page.classList.add('hidden');
        });
    });
});

const bottomContact = document.querySelector('.bottom-contact');
const btnShow = document.querySelector('.btn-show');

btnShow.addEventListener('click', () => {
    btnShow.classList.toggle('rotate-180'); 
    bottomContact.style.transition = 'height 0.5s ease';
    bottomContact.style.height = bottomContact.clientHeight === 0 ? 'auto' : '0';
    bottomContact.style.overflow = bottomContact.clientHeight === 0 ? 'hidden' : 'visible';
});
