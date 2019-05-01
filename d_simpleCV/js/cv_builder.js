
let contact_info={
                    name:"Heba Ayman Mohammed",
                    address:"18 Nagib Mahfouz , Agoza, Giza, Egypt",
                    mobile:"01272677303",
                    email:"hebaayman77177@gmail.com",
                    github:"",
                    linkdin:"",
                    hackerrank:""
                    };
                    



///////////


let skills = [{name:"Programming languages", content:"python,html5,css3,javascript:jquery,php,sql,bash scripting,matlab,c++,prolog"},
              {name:"Object oriented programming",content:""},
              {name:"Problem solving",content:"3 stars in hackerrank team in problem solving"},
              {name:"Regex",content:""},
              {name:"Beginner in machine learning and deep learning",content:"numpy, panda, scikit-learn"},
              {name:"Git",content:""}];

let projects={projects:[{content:"<span class='solid'>Implementing simple interpreter</span>,that interprets Pascal expressions , i programmed it in python, i used recursive descent parser , and used AST as an internal data structure ,and traversed it for interpreting"},
                        {content:"<span class='solid'>Making a bash script that automate creating repeated tasks for making small web projects </span> in this scrip I create the directories and files , add the libraries and add the repeated code that is written in almost every project ."},
                        {content:"<span class='solid'>Making  the PSD of Edrak website </span>from html and css."},
                        {content:"<span class='solid'>Implementing my cv  </span>from html,css and js."}
                        ],
                display:function(){
                    $('#projects').append(project_begin);
                    for (i in projects.projects){
                            let content=htmlproject.replace("%data%",projects.projects[i].content);
                            $('#projects').append(content);
                            }
                }
                };

let education ="Undergraduate, university of Ain Shams ,faculty of engineering ,department of computer science ,expected graduation year : 2019 .";

let objective="to work with a reputed organization in a position where i can develop and utilize my skills and prove my worth.";

projects.display();
/*
$('#projects').append(project_begin);
for (i in projects.projects){
 let content=htmlproject.replace("%data%",projects.projects[i].content);
 $('#projects').append(content);
    
}*/

                        
 
 $('#skills').append(skills_begin);
for (i in skills){
 let chs=htmlskill
 chs=chs.replace("%header%",skills[i].name);
 chs=chs.replace("%content%",skills[i].content);
 $('#skills').append(chs);
    
}                       
                        
                        
                        
$('#education').append(htmleducation.replace("%data%",education));
$('#objective').append(htmlobjective.replace("%data%",objective));
                        
                        
                        
                        
 $('#contact').append(htmlname.replace("%data%",contact_info.name));
 $('#contact').append(htmladdress.replace("%data%",contact_info.address));
 $('#contact').append(htmlmobile.replace("%data%",contact_info.mobile));
 $('#contact').append(htmlmail.replace(/%data%/g,contact_info.email));
 $('#contact').append(htmllast);
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
