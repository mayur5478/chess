<?php 
$dbc = mysqli_connect('localhost:3308','root','root','ChessDb');
$chapterId = filter_input(INPUT_GET,'chapterId');
$levelId = filter_input(INPUT_GET,'levelId');
$query = "select distinct(SubChapter) from training_hierarchy where Chapter = '$chapterId'&& Level='$levelId' ";
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