"use strict";

var forma = document.getElementById("forma"),
	salidaNom = document.getElementById("salidaNom"),
	salidaBol= document.getElementById("salidaBol"),
	salidaGrup = document.getElementById("salidaGrup"),
	salidaMat = document.getElementById("salidaMat"),
	salidaFecha = document.getElementById("salidaFecha"),
	salidaTotal = document.getElementById("salidaTotal"),
	txtFecha = forma["fecha"];	 
	 
	function procesa(){
		
	var Nom = String(forma["nom"].value),
		Bol = parseInt(forma["bol"].value), 
		Grup = String(forma["grup"].value),
		Mat = String(forma["mat"].value),
		Fecha = new Date(txtFecha.value);
		
	salidaNom.textContent = `Tu nombre es: ${Nom}`;
	salidaBol.textContent =`Tu boleta es: ${Bol}`;
	salidaGrup.textContent = `Tu grupo es: ${Grup}`;
	salidaMat.textContent = `Tu materia es: ${Mat}`;
	salidaFecha.textContent = `La fecha es la siguiente: ${Fecha.toUTCString()}`;
	

  }
