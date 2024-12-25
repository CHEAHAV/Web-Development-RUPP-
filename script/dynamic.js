document.addEventListener('DOMContentLoaded',()=>{
    let i = 1;
    let texts = ["Create a web page", "Style a web Page",
        "Interactive web page", "Responsive web Page",
        "Reusable User Interface"
    ];
    window.setInterval(function(){
        let dt = document.getElementById('dt');
        dt.innerText = texts[i];
    },2000);
})