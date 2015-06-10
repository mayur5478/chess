<?php 
$dbc = mysqli_connect('localhost:3308','root','root','ChessDb');
$levelId = filter_input(INPUT_GET,'levelId');
$chapterId = filter_input(INPUT_GET,'chapterId');
$subChapterId = filter_input(INPUT_GET,'subChapterId');
$query = "select distinvt(Problem_Id) from problems where Level='$levelId' && SubChapter = '$subChapterId' && Chapter = '$chapterId'";
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