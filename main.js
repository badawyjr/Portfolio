var sections = document.querySelectorAll('section');

onscroll = function(){
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop && 
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            var currentid = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentid);
        }
    });
};


var removeAllActiveClasses = function() {
    document.querySelectorAll(".sidebar nav a").forEach( (e1) => {
        e1.classList.remove("active");
    });
};

var addActiveClass = function(id){
    // console.log(id);
    var selector = `.sidebar nav a[href="#${id}"]`;
    console.log(selector);
    document.querySelector(selector).classList.add("active");
};

