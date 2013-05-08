define(["jquery","bootstrap.min"], function($) {
    
    $(function() {

    	function randomUUID() {
 
			var s = [], itoh = '0123456789ABCDEF';
			for (var i = 0; i <36; i++) s[i] = Math.floor(Math.random()*0x10);
			s[14] = 4;
			s[19] = (s[19] & 0x3) | 0x8;
			for (var i = 0; i <36; i++) s[i] = itoh[s[i]];
			s[8] = s[13] = s[18] = s[23] = '-';
			return s.join('');
		 
		}

        $('#eliminar').click(function(){
	  		alert('Desea eliminar la fila');
	  	});

        $('#agregarFilaHorario').click(function(){
        	var valor = randomUUID();
		  	$('.horarios').prepend(
		  			'<tr>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td class="thcenter">'
		  		+			'<input type="radio" name="'+valor+'" id="optionsRadios1" value="option1" checked>'
		  		+			'&nbsp;Ene/Feb'
		  		+			'&nbsp;&nbsp;&nbsp;'
		  		+			'<input type="radio" name="'+valor+'" id="optionsRadios2" value="option2">'
		  		+			'&nbsp;Mar/Dic'
		  		+		'</td>'
		  		+		'<td class="thcenter">'
		  		+			'<input class="span1" type="text"/>'
		  		+		'</td>'
		  		+		'<td class="thhora thcenter">'
		  		+			'<input class="time" type="text"/> : <input class="time" type="text"/> - <input class="time"'
		  		+			'type="text"/> : <input class="time" type="text"/>'
		  		+		'</td>'
		  		+		'<td>'
		  		+			'<a href="#" class="btn"><i class="icon-ok"></i></a>&nbsp;&nbsp;'
		  		+			'<a href="#" id="eliminar" class="btn eliminar"><i class="icon-remove"></i></a>'
		  		+		'</td>'
		  		+	'</tr>'
		  	);
		});

    });

});