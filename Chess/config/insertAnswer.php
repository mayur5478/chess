<?php
  $dbc = mysqli_connect('localhost:3308',"root","root","ChessDb");
$questionId = filter_input(INPUT_GET,'QuestionId'); 
$userMove = $_REQUEST['UserMove'];
$adminMove = $_REQUEST['AdminMove'];
$answerId = filter_input(INPUT_GET,'AnswerId'); 
$moveId = 1;

for ($i=0;$i<count($userMove);$i++ ) {
	
	$query = "insert into puzzle_answer values('$moveId','$questionId','$answerId',$userMove[$i],$adminMove[$i])";
	$r= mysqli_query($dbc,$query);
	$moveId = $moveId + 1;
}


$dbc.exit;
?>