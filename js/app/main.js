define(["jquery","bootstrap.min"], function($) {
    
    $(function() {

    	function randomUUID() {
 
			var s = [], itoh = '0123456789ABCDEF';
			for (var i = 0; i <36; i++) s[i] = Math.floor(Math.random()*0x10);
			s[14] = 4;
			s[19] = (s[19] & 0x3) | 0x8;
			for (var i = 0; i <36; i++) s[i] = itoh[s[i]];
			s[8] = s[13] = s[18] = s[23] = '_';
			return s.join('');
		 
		}

        $('#eliminar').click(function(){
	  		alert('Desea eliminar la fila');
	  	});

        $('#agregarFilaHorario').click(function(){
        	var valor = randomUUID();
		  	$('.horarios').prepend(
		  			'<tr class="filahora" id="'+valor+'">'
		  		+		'<td><input class="control" type="checkbox" id="'+valor+'-1"></td>'
		  		+		'<td><input class="control" type="checkbox" id="'+valor+'-2"></td>'
		  		+		'<td><input class="control" type="checkbox" id="'+valor+'-3"></td>'
		  		+		'<td><input class="control" type="checkbox" id="'+valor+'-4"></td>'
		  		+		'<td><input class="control" type="checkbox" id="'+valor+'-5"></td>'
		  		+		'<td><input class="control" type="checkbox" id="'+valor+'-6"></td>'
		  		+		'<td class="thcenter">'
		  		+			'<input class="controlradio" type="radio" name="'+valor+'" id="'+valor+'" value="option1" checked>'
		  		+			'&nbsp;A'
		  		+			'&nbsp;&nbsp;&nbsp;'
		  		+			'<input class="controlradio" type="radio" name="'+valor+'" id="'+valor+'" value="option2">'
		  		+			'&nbsp;B'
		  		+		'</td>'
		  		+		'<td class="thcenter">'
		  		+			'<input class="span1 control" type="text" id="'+valor+'-7"/>'
		  		+		'</td>'
		  		+		'<td class="thhora thcenter">'
		  		+			'<input class="time control" type="text" id="'+valor+'-8" /> : <input class="time control" type="text" id="'+valor+'-9"/> - <input class="time control"'
		  		+			'type="text" id="'+valor+'-10"/> : <input class="time control" type="text" id="'+valor+'-11"/>'
		  		+		'</td>'
		  		+		'<td>'
		  		+			'<a href="#" class="btn"><i class="icon-ok"></i></a>&nbsp;&nbsp;'
		  		+			'<a href="#" id="eliminar" class="btn eliminar"><i class="icon-remove"></i></a>'
		  		+		'</td>'
		  		+	'</tr>'
		  	);	
			

			$('.controlradio').click( function(){

				var id = $(this).attr('id');
				var idsencundario = id.split("-");
				var idfinalpintar = idsencundario[0];	
				
				$( "#"+ idfinalpintar).css('background','#FFD700');

			});

			$('.control').change(function() {

				var id = $(this).attr('id');
				var idsencundario = id.split("-");
				var idfinalpintar = idsencundario[0];	
				
				$( "#"+ idfinalpintar).css('background','#FFD700');							
				
			});

		});

    });

});

