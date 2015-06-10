$(function(){
    	var that = this,
    		levelSelected ,
    		chapterSelected,
    		subChapterSelected;
    	$("#AddLevels").click(function(){
    	
		$("#inputdiv").dialog({
		  resizable: false,
		  height:140,
		   modal: true,
		   title:"LevelName",
		  buttons: {
		    "Ok": function() {
		    	var newname = $(this).find("#inputtext").val();
		    	$( this ).dialog( "close" );
				var htmltext = "<br><a   href='#' id="+newname+">"+newname+"</a>";
				$("#levelsDivInner").append(htmltext);	
				$('a'+'#'+newname).bind('click',that.onLevelClick);
				$('#inputtext').val("");			
			 },
		    Cancel: function() {
		      $( this ).dialog( "close" );
		    }
		  }
		});
		//open add level php 
		     	
		
	});
	that.onLevelClick  = function(){
						var id = this.id,
							parentId = $('#'+this.id).parent().parent().attr('id');
						levelSelected = id ;
						if(parentId.indexOf('level')>-1){
							addChapter(id);					
						}
		};
	var addChapter = function(id){
		  var levelID = id;
		  $.ajax({url:'config/getChaptersFromLevel.php',data:{levelId:levelID}}).done(function(option){
		  		var selector = $("#chaptersDivInner");
		  		selector.empty();
		  		if(option!=""){
		  			var chapterList = option.split(" ");
		  			chapterList.pop();
		  			for(var index in chapterList){
		  				var htmltext = "<br><a class='chapter'  href='#' id="+chapterList[index]+">"+chapterList[index]+"</a>";
				 		selector.append(htmltext);
				 		$('a'+'#'+chapterList[index]).bind('click',that.onChapterClick);
		  			}
		  		}
		  		
		  		var htmltext = "<br>"+levelSelected+'->';
				$("#chaptersDivLevel").empty().append(htmltext);
				var selector = $('#addchapter') ;
		  		if(selector.length == 0)
		  		{
		  			var htmltext = "<br><button id='addchapter'>Add Chapters</button>";
					$("#chaptersDiv").append(htmltext);
					$('#addchapter').bind('click',that.onChapterButtonClick);			
				}
		});
	};
	
	that.onChapterButtonClick = function(){
		//open add chapter php 
		// display the added chap to select menu
		$("#inputdiv").dialog({
		  resizable: false,
		  height:140,
		  modal: true,
		  title:"ChapterName",
		  buttons: {
		    "Ok": function() {
			    	var newname = $(this).find("#inputtext").val();
			    	$( this ).dialog( "close" );
	  				var htmltext = "<br><a class='chapter' href='#' id="+newname+">"+newname+"</a>";
			 		$("#chaptersDivInner").append(htmltext);	
			 		$('a'+'#'+newname).bind('click',that.onChapterClick);
			 		$('#inputtext').val("");
			 },
		    Cancel: function() {
		      $( this ).dialog( "close" );
		    }
		  }
		});
	};
	
		that.onChapterClick  = function(){
						var id = this.id,
							parentId = $('#'+this.id).parent().parent().attr('id');
						chapterSelected = id;
						if(parentId.indexOf('chapter')>-1){
							addSubChapter(id);					
						}
		};
	var addSubChapter = function(id){
		  var chapterID = id;
		  $.ajax({url:'config/getSubChaptersFromChapter.php',data:{chapterId:chapterID,levelId:levelSelected}}).done(function(option){
		  		var selector = $("#subChaptersDivInner");
		  		selector.empty();
		  		if(option!=""){
		  			var subChapterList = option.split(" ");
		  				
		  			subChapterList.pop();
		  			for(var index in subChapterList){
		  				var htmltext = "<br><a  href='#' id="+subChapterList[index]+">"+subChapterList[index]+"</a>";
				 		selector.append(htmltext);
		 		 		$('a'+'#'+subChapterList[index]).bind('click',that.onSubChapterClick);
		  			}
		  		}
		  		var htmltext = "<br>"+levelSelected+'->'+chapterSelected+'->';
				$("#subChaptersDivChapterLevel").empty().append(htmltext);
		
		  		var selector = $('#addsubchapter');
		  		if(selector.length == 0)
		  		{
		  			var htmltext = "<br><button id='addsubchapter'>Add Sub Chapters</button>";
					$("#subChaptersDiv").append(htmltext);
					$('#addsubchapter').bind('click',that.onSubChapterButtonClick);			
			  	}
			});
	};
	
	that.onSubChapterButtonClick = function(){
		//open add chapter php 
		// display the added chap to select menu
		$("#inputdiv").dialog({
		  resizable: false,
		  height:140,
		  modal: true,
		  title:"SubChapterName",
		  buttons: {
		    "Ok": function() {
			    	var newname = $(this).find("#inputtext").val();
			    	$( this ).dialog( "close" );
	  				var htmltext = "<br><a class='chapter' href='#' id="+newname+">"+newname+"</a>";
			 		$("#subChaptersDivInner").append(htmltext);	
			 		$('a'+'#'+newname).bind('click',that.onSubChapterClick);
			 		$('#inputtext').val("");
			 },
		    Cancel: function() {
		      $( this ).dialog( "close" );
		    }
		  }
		});
	};
	that.onSubChapterClick= function(){
					var id = this.id,
							parentId = $('#'+this.id).parent().parent().attr('id');
						subChapterSelected = id;
							
						if(parentId.indexOf('subChapter')>-1){
							addProblem(id);					
						}
		};
	var addProblem = function(id){
		  $.ajax({url:'config/getProblems.php',data:{levelId:levelSelected,chapterId:chapterSelected,subChapterId:subChapterSelected}}).done(function(option){
		  		if(option!=""){
		  			var problemList = option.split(" "),
		  				selector = $("#problemDivInner");
		  			selector.empty();
		  			problemList.pop();
		  			for(var index in problemList){
		  				var htmltext = "<br><a  href='#' id="+problemList[index]+">Problem"+parseInt(problemList[index])+"</a>";
				 		selector.append(htmltext);	
		  			}
		  		}
		  		var htmltext = "<br>"+levelSelected+'->'+chapterSelected+'->'+subChapterSelected+'->';
				$("#problemsDivChapterLevelSubChapter").empty().append(htmltext);
		  		var selector = $('#addproblem');
		  		if(selector.length == 0)
		  		{
		  			var htmltext = "<br><button id='addproblem'>Add Problems</button>";
					$("#problemsDiv").append(htmltext);
					$('#addproblem').bind('click',that.onProblemClick);			
			  	}
			});
	};
			
	
	that.onProblemClick = function(){
			/*
			var id = this.id;
						window.location.href ="problem.php?problemId="+id;			
			*/
					$("#inputdiv").dialog({
		  resizable: false,
		  height:140,
		  modal: true,
		  title:"ProblemName",
		  buttons: {
		    "Ok": function() {
			    	var newname = $(this).find("#inputtext").val();
			    	$( this ).dialog( "close" );
	  				var htmltext = "<br><a class='problem' href='#' id="+newname+">"+newname+"</a>";
			 		$("#problemsDivInner").append(htmltext);	
			 		//$('a'+'#'+newname).bind('click',that.onSubChapterClick);
			 		$('#inputtext').val("");
			 },
		    Cancel: function() {
		      $( this ).dialog( "close" );
		    }
		  }
		});	};
		
}); 
