<?php 
$dbc = mysqli_connect('localhost:3308','root','root','ChessDb');
$id = filter_input(INPUT_GET,'levelId');
$query = "select distinct(Chapter) from training_hierarchy where Level = '$id'";
$r = mysqli_query($dbc,$query);
if($r)
{
	while($row = mysqli_fetch_array($r)){
		echo $row[0];
		echo " ";
	}
	
}
else{
	echo "";
}

?>