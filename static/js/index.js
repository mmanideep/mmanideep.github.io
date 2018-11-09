let tab_body = $("#nav-tabContent");
let highlight_tab_css = "highlight-tab-title";
let about_tab_id = "#about-tab";
let work_exp_tab_id = "#work-exp";
let interests_tab_id = "#interests";
let tab_ids = [about_tab_id, work_exp_tab_id, interests_tab_id];

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

function highlightTab(element){
    for (let i=0; i<tab_ids.length; i++){
        $(tab_ids[i]).removeClass(highlight_tab_css);
    }
    $(element).addClass(highlight_tab_css);
}

function loadAbout(){
    tab_body.load("static/templates/about.html").fadeIn(400);
    highlightTab($(about_tab_id));
}

function loadWorkExp(){
    tab_body.load("static/templates/work-experience.html");
    highlightTab($(work_exp_tab_id));
}

function loadInterests(){
    tab_body.load("static/templates/interests.html");
    highlightTab($(interests_tab_id));
}

loadAbout();

screen.orientation.lock('portrait');
