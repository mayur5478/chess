


<!DOCTYPE HTML>
<html>
	<head>
		<title>Chess</title>
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<?php include 'config/library.php' ;?>
		<style>
	#levelsDiv,#chaptersDiv,#subChaptersDiv,#problemsDiv{
		float:left;
		width: 25%;
		position :relative;
		height:80%;
	}	
	
	#wrap{
		width:100%;
	}
	
	#inputdiv{
		display: none;
	}
	
	
	
</style>

	</head>
	<body>
		<div id='wrap'>
			<?php include 'header/header.php' ;?>
			<div id="levelsDiv">
				<label>Level</label><br>
				
				<div id="levelsDivInner"></div><br>
				<button id="AddLevels">Add Levels</button>
	     	</div>
	     	<div id="chaptersDiv">
				<label>Chapter</label><br>
				<div id="chaptersDivLevel"></div>
				<div id="chaptersDivInner"></div>
	     	</div>
	     	<div id="subChaptersDiv">
				<label>SubChapter</label><br>
				<div id ="subChaptersDivChapterLevel"></div>
				<div id="subChaptersDivInner"></div>
	     	</div>
	     	<div id="problemsDiv">
				<label>Problem</label>
				<div id="problemsDivChapterLevelSubChapter"></div>
	     		<div id="problemsDivInner"></div>
	     	</div>
				<div id="inputdiv">
	     			<input id="inputtext">
	     		</div>
	     	 </div>	
			<?php include 'footer/footer.php' ;?>
<script  src="js/levelsofquestion.js"></script>	
	</body>
	
</html>
