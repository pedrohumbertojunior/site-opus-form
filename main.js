var currentTab = 0; // A guia atual é definida como a primeira guia (0)
showTab(currentTab); // Exibir a guia atual

function showTab(n) {
  // Esta função irá mostrar a aba especificada do formulário ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // e corrija os botões Anterior/Próximo... :
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... e execute uma função que exibe o indicador de etapa correto:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // Esta função irá descobrir qual guia exibir
  var x = document.getElementsByClassName("tab");
  // Saia da função se algum campo na guia atual for inválido:
  if (n == 1 && !validateForm()) return false;
  // Ocultar a guia atual:
  x[currentTab].style.display = "none";
  // Aumente ou diminua a guia atual em 1:
  currentTab = currentTab + n;
  // se chegou ao final do formulário... :
  if (currentTab >= x.length) {
    //...o formulário é enviado:
    document.getElementById("regForm").submit();
    return false;
  }
  // Caso contrário, exiba a guia correta:
  showTab(currentTab);
}

function validateForm() {
  // Esta função trata da validação dos campos do formulário
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // Um loop que verifica todos os campos de entrada na guia atual:
  for (i = 0; i < y.length; i++) {
    // Se um campo estiver vazio...
    if (y[i].value == "") {
      // adicione uma classe "inválida" ao campo:
      y[i].className += " invalid";
      // e defina o status válido atual como false:
      valid = false;
    }
  }
  // Se o status válido for verdadeiro, marque a etapa como concluída e válida:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // retornar o status válido
}

function fixStepIndicator(n) {
  // Esta função remove a classe "ativa" de todas as etapas...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... e adiciona a classe "active" à etapa atual:
  x[n].className += " active";
}


/* Defina a largura da barra lateral para 250px (mostre) */ 
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /*Defina a largura da barra lateral para 0 (oculte-a) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }






