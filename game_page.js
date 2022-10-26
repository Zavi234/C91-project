P1_name= localStorage.getItem("PL1N");
P2_name= localStorage.getItem("PL2N");
console.log(P1_name)
P1_score=0
P2_score=0

document.getElementById("player1_name").innerHTML= P1_name+ " : "
document.getElementById("player2_name").innerHTML= P2_name+ " : "

document.getElementById("player1_score").innerHTML= P1_score
document.getElementById("player2_score").innerHTML= P2_score

document.getElementById("player_question").innerHTML= "Question Turn: "+P1_name
document.getElementById("player_answer").innerHTML= "Answer Turn: "+P2_name


function send()
{
    number1= document.getElementById("numebr1").value
    number2= document.getElementById("number2").value

    actual_answer= parseInt(number1) * parseInt(number2)
    question_number="<h4>"+ number1 +"X"+ number2 +"</h4>"
    input_box= "<br>Answer : <input type='text' id='input_check_box'>"
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row= question_number + input_box + check_button
    document.getElementById("output").innerHTML = row

    document.getElementById("number1").value = ""
    document.getElementById("number1").value = ""
}