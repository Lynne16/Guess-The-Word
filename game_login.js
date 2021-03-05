function AddUser(){
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;

    localStorage.setItem("Player 1 Name",player1_name);
    localStorage.setItem("Player 2 Name",player2_name);

    window.location="game_page.html";
}