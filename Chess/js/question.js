				var that = this;
				var subChapter = location.search.split('subChapter=')[1]||''.split('&')[0] ;
				var chapter = location.search.split('&&subChapter=sub1')[0].split('chapterId=')[1];	
				var level = location.search.split('&&subChapter=sub1')[0].split('&&chapterId=')[0].split('levelId=')[1];
				var problem = location.search.split('&&subChapter=sub1')[0].split('&&chapterId=')[0].split('&&levelId=')[0].split('problemId=')[1];
					$.ajax({url:"config/showBoard.php",data:{problem:problem,level:level,chapter:chapter,subChapter:subChapter}}).done(function(data){
						if(data!="")
						{
							that.position = JSON.parse(data);
				          	var cfg ={
							  draggable: true,
							  dropOffBoard: 'trash',
							  position :that.position,
							  sparePieces: true
							};
				          	that.board = new ChessBoard('board',cfg);
				          	$('#saveAndNext').hide();
				          	$('#reset').hide();
				          	$('#delete').show();
				         }
				         else{
				         	var cfg ={
								  draggable: true,
								  dropOffBoard: 'trsh',
								  sparePieces: true
							};
							that.board = new ChessBoard('board',cfg);
						  	$('#saveAndNext').show();
				          	$('#reset').show();
				        	$('#delete').hide();
				         }	
					});
				$('#saveAndNext').on('click', function() {
					  var boardPositionNew = board.position();
	 		          var mover = $("#moverOptions").val();		
					  if( (!jQuery.isEmptyObject(boardPositionNew)) )
					  {
					  		$.ajax({url:"config/CaptureBoard.php",data:{BoardPosition:JSON.stringify(boardPositionNew),problemName:problem,Level:level,Chapter:chapter,SubChapter:subChapter}}).done(function(){
			          			window.location.href="next.php?mover="+mover+"problemName="+problem+'&&levelName='+level+'&&chapterName='+chapter +"&&subChapter="+subChapter;
			          		});
			          }
			          else{
			          		console.log("Error");
			          }
				});

			    var that = this;
				$('#delete').on('click', function() {
				      	
				      
					  $.ajax({url:"config/DeleteProblemByName.php",data:{name:problem,levelName:level,chapterName:chapter,subChapterName:subChapter}}).done(function(data){
							window.location.href="levelSelection.php";
			          				   });
					  
					});
					
				$('#reset').on('click', this.board.clear);
		