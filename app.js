$(document).ready(function()
{
	//alert("hello world");
		$(".navbar-brand1").addClass('animated fadeIn');
				
		$("#animate1").addClass('animated flip');
		$("#animate2").addClass('animated fadeIn');
		$("#animate3").addClass('animated rotateIn');
		$("#animate4").addClass('animated slideInUp');
		$("#animate5").addClass('animated rotateOut');
		$("#animate6").addClass('animated slideOutUp');
		$("#animate7").addClass('animated hing');
		$("#animate8").addClass('animated zoomOut');
		
		$("#p1").mouseover(function(){
   		 $("#p1").css("background-color", "lightblue");
		});

		$("#p1").mouseleave(function(){

			$("#p1").css("background-color","blue");
		});

		$("#animategly").addClass('animated flip');




	     $("#imgdemo1").css("opacity", 0.5);

	    $("#imgdemo1").hover(function() {

        $(this).animate({opacity: 1.0}, 500);

    	}, function() {

        $(this).animate({opacity: 0.5}, 500);

    	});
    	 $("#imgdemo2").css("opacity", 0.5);

	    $("#imgdemo2").hover(function() {

        $(this).animate({opacity: 1.0}, 500);

    	}, function() {

        $(this).animate({opacity: 0.5}, 500);

    	});

    	 $("#imgdemo3").css("opacity", 0.5);

	    $("#imgdemo3").hover(function() {

        $(this).animate({opacity: 1.0}, 500);

    	}, function() {

        $(this).animate({opacity: 0.5}, 500);

    	});

	     $("#imgdemo4").css("opacity", 0.5);

	    $("#imgdemo4").hover(function() {

        $(this).animate({opacity: 1.0}, 500);

    	}, function() {

        $(this).animate({opacity: 0.5}, 500);

    	});

 		$("#imgdemo5").css("opacity", 0.5);

	    $("#imgdemo5").hover(function() {

        $(this).animate({opacity: 1.0}, 500);

    	}, function() {

        $(this).animate({opacity: 0.5}, 500);

    	});

	     $("#imgdemo6").css("opacity", 0.5);

	    $("#imgdemo6").hover(function() {

        $(this).animate({opacity: 1.0}, 500);

    	}, function() {

        $(this).animate({opacity: 0.5}, 500);

    	});
    	 $("#imgdemo7").css("opacity", 0.5);

	    $("#imgdemo7").hover(function() {

        $(this).animate({opacity: 1.0}, 500);

    	}, function() {

        $(this).animate({opacity: 0.5}, 500);

    	});

    	 $("#imgdemo8").css("opacity", 0.5);

	    $("#imgdemo8").hover(function() {

        $(this).animate({opacity: 1.0}, 500);

    	}, function() {

        $(this).animate({opacity: 0.5}, 500);

    	});

	     

	
	
		//$("#h2").addClass('animated flip');



		/*$("button").addClass('animated flip');
		$(".jumbotron").addClass('animated flash');
		$("#btn1").addClass('animated fadeIn');
		$("#btn2").addClass('btn-primary');
		$("#btn5").addClass('btn-primary');
		$("button").removeClass('btn-default');
		$("#btn1").css("color","yellow");*/

		/*$(".btn1").prop("disabled",false);
		$("h2").html("<h2>welcome to jquery</h2>");
		$("#btn3").appendTo(".right");
		$(".left").clone().appendTo(".right");
		$(".row").parent().css("background-color","blue");*/
	});


