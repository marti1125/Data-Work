define(["jquery","bootstrap.min"], function($) {
    
    $(function() {

        $('.eliminar').click(function(){
	  		alert('Desea eliminar la fila');
	  	});

        $('#agregarFilaHorario').click(function(){
		  	$('.horarios').append(
		  			'<tr>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td><input type="checkbox"></td>'
		  		+		'<td class="thcenter">'
		  		+			'<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>'
		  		+			'&nbsp;Ene/Feb'
		  		+			'&nbsp;&nbsp;&nbsp;'
		  		+			'<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">'
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