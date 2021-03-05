player1_name = localStorage.getItem("Player 1 Name");
player2_name = localStorage.getItem("Player 2 Name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name +":";
document.getElementById("player2_name").innerHTML=player2_name +":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn- "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+ player2_name;

function Send(){
    get_word=document.getElementById("word").value;
    lower_word=get_word.toLowerCase();
    console.log("Word in lower case = " + lower_word);

    charAt1= lower_word.charAt(1);
    console.log(charAt1);

    charAt_Middle_No= Math.floor(lower_word.length/2);
    charAt_Middle=lower_word.charAt(charAt_Middle_No);
    console.log(charAt_Middle);

    charAt_2nd_last_No=lower_word.length - 2;
    charAt_2nd_last=lower_word.charAt(charAt_2nd_last_No);
    console.log(charAt_2nd_last);

    remove_charAt1=lower_word.replace(charAt1,"_ ");
    remove_charAt_Middle=remove_charAt1.replace(charAt_Middle,"_ ");
    remove_charAt_2nd_last=remove_charAt_Middle.replace(charAt_2nd_last,"_ ");
    manupulated_word=remove_charAt_2nd_last;
    console.log(manupulated_word);

    question_word="<h4 id word_display> Q. "+manupulated_word+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br> <button class='btn btn-info' onclick='Check()'>Check </button>"
    row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

function Check(){
    get_answer=document.getElementById("input_check_box").value;
    answer= get_answer.toLowerCase();
    console.log("answer in the lower case= "+ answer);

    if(answer == lower_word){
        if(answer_turn == "player1" ){

           player1_score= player1_score+ 1;
           document.getElementById("player1_score").innerHTML= player1_score;
        }
        else{
            player2_score= player2_score+ 1;
            document.getElementById("player2_score").innerHTML= player2_score; 
        }
    }

    if(question_turn == "player1"){

        question_turn="player2";
        document.getElementById("player_question").innerHTML= "Question Turn - "+ player2_name ;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML= "Question Turn - "+ player1_name;   
    }

    if(answer_turn == "player1"){

        answer_turn="player2";
        document.getElementById("player_answer").innerHTML= "Answer Turn - "+ player2_name ;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML= "Answer Turn - "+ player1_name;   
    }

    document.getElementById("output").innerHTML="";
}