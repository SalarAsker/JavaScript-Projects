
let users = [
    {
        name:"Emily Watson",
        text:"I was blown away by the cutting-edge technology of Samsung's mobile phones. The sleek design and top-notch performance exceeded my expectations. I highly recommend Samsung for anyone looking for a reliable and innovative mobile device.",
        imageURL:"https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Sara Andersson",
        text:"I recently purchased a mobile phone from apple and I'm beyond impressed with the product quality and performance. The sleek design and cutting-edge technology make it stand out from other brands. I highly recommend apple for anyone looking for a top-notch mobile device.",
        imageURL:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Alexa Johnson",
        text:"I am extremely satisfied with the mobile phones from apple. The quality is unmatched, and the designs are sleek and modern. I love how apple always introduces fresh features in their different names of phones. Definitely a loyal customer for life!",
        imageURL:"https://images.unsplash.com/photo-1613755387189-ad38197761ef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Sophie Anderson",
        text:"I have been a loyal customer of Apple for years and their mobile phones continue to impress me with their sleek design and top-notch performance. I wouldn't choose any other brand for my tech needs. Their dedication to innovation sets them apart from the rest.",
        imageURL:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Jessica Thompson",
        text:"I am extremely satisfied with my recent purchase from Apple. Their mobile phones are top-notch with the latest technology. I highly recommend Apple for anyone in need of a reliable device.",
        imageURL:"https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];


const maxUsers = users.length;
let currentUser = 0;

document.querySelector('.next')
.addEventListener('click', ()=>{

    currentUser++;
    if( currentUser >= maxUsers){ currentUser = 0;}
    document.querySelector('.image').src = users[currentUser]['imageURL'];
    document.querySelector('.testimonial-text').textContent = users[currentUser]['text'];
    document.querySelector('.name').textContent = users[currentUser]['name'];


});