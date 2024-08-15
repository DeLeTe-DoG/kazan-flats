let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

// функция обратного вызова
let callback = function(entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    })
}

// наблюдатель
let observer = new IntersectionObserver(callback, options)

let targets = document.querySelectorAll(".anim");
targets.forEach(target => {
    observer.observe(target);
})




// let animItems = document.querySelectorAll("._animItems");

// if (animItems.length > 0) {
//     window.addEventListener('scroll', anim);
//     function anim() {
//         for (let i = 0; i < animItems.length; i++) {
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;

//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHeight)) {
//                 animItem.classList.add("_.active");
//             } else {
//                 animItem.classList.remove("_.active");
//             }
//         }

//     }
    
//     function offset(el) {
//         var rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
// }