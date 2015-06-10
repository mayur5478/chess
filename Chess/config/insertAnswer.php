<?php
    $dbc = mysqli_connect('localhost:3308',"root","root","ChessDb");
	$questionId = filter_input(INPUT_GET,'QuestionId'); 
	$answerId = filter_input(INPUT_GET,'AnswerId'); 
	$userMove = $_REQUEST['UserMove'];
	$adminMove = $_REQUEST['AdminMove'];
	$moveId = 1;

for ($i=0;$i<count($userMove);$i++ ) {
	$currentUserMove =  $userMove[$i];
	$currentAdminMove =  $adminMove[$i];
	$query = "insert into puzzle_answer values('$moveId','$questionId','$answerId','$currentUserMove','$currentAdminMove')";
	$r= mysqli_query($dbc,$query);
	$moveId = $moveId + 1;
}

	$dbc.exit;
?>