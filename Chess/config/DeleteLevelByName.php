<?php 
$dbc = include 'setup.php';
$name = filter_input(INPUT_GET,'name');
$query = "delete from training_hierarchy where LevelName = '$name'";
$r = mysqli_query($dbc,$query);
    if ($r)//if update query was successfull
    {
		echo "Level deleted";
	}	

?>