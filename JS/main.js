

var lista =[" Be yourself; everyone else is already taken Oscar Wilde " , " I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. Marilyn Monroe" 
    ,  "A room without books is like a body without a soul. Marcus Tullius Cicero"  
    ,  " Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.  Bernard M. Baruch"
     ,  "You only live once, but if you do it right, once is enough. Mae West"
      ,   "“Be the change that you wish to see in the world.” Mahatma Gandhi" 
      , "“In three words I can sum up everything I've learned about life: it goes on.” Robert Frost"  
      , "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”  J.K. Rowling, Harry Potter and the Goblet of Fire" 

      ,  "“If you tell the truth, you don't have to remember anything.” Mark Twain" 
        ,  " “Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . . C.S. Lewis, The Four Love"
        ] 



       
        function addText (){
           
                var randomNumber = Math.floor(Math.random()*lista.length);
                var randomElement =lista[randomNumber];
                document.getElementById("demo").innerText=randomElement

        }
        