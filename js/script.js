about=["Государство", "Столица", "Континент", "Часть света",  "Разница во времени",  
           "Денежная единица",  "Географические объекты",  "Литературные произведения",
		   "Исторические события"];
cntr=["italy", "france", "switzerland","hungary","romania",
  "japan","afghanistan","india","brazilia","canada",
"argentina","kolumbia","england","mexico"]
var obj1={Countries:JSON.parse(JSON.stringify(countries)),
  outCountries:function(){


function makeTableFromCountry (nomer,i)
	{
    let div= "<div "+"id="+'"'+cntr[i]+'"'+"class="+'"bg"'+" >"; //проводим инициализацию максимально удобно для нас
		let tab="<table width=100%>";
		let tr="<tr>";
		let td="<td>";
		let h1="<h1>"+nomer[0]+"</h1>";
			td="<td colspan = 2 >"+h1+"</td>";
			tr+=td;
			tr+="</tr>"
			tab+=tr;
			
		for (let i=1 ; i<6 ; i++) //цикл для записи основной информации о стране
				{
					td="<td>"+about[i]+"</td>"; //левую часть таблицы берем с массива about
						tr="<tr>"+td; //добавляем столб из массива about в строку
							td="<td>"+nomer[i]+"</td>"; //столб 2 из массива сountries
						tr+=td+"</tr>"; //добавляем столб в строку и завершаем ее
					tab+=tr; //добавляем строку в таблицу
				} 

    let gobj=nomer[6].length; //географические объекты
    for (let i=0;i<gobj;i++)
			{
				td="<td>"+"</td>"
				if (i===0) { td="<td>"+about[6]+"</td>"; }
						tr="<tr>"+td; //1 столб к строке
							td="<td>"+nomer[6][i]; //2 столб с самим геогр объектом
						tr+=td+"</tr>"; //2 столб к строке
				tab+=tr; //строку к столбу
			} 
    let knigi=nomer[7].length;  //литературные проивзедения
		for (let i=0;i<knigi;i++)
			{
				td="<td>"+"</td>"
				if (i===0) { td="<td>"+about[7]+"</td>"; }
					tr="<tr>"+td; //1 столб к строке
					td="<td>"+nomer[7][i]; //2 столб с самим литературным произв
				tr+=td+"</tr>"; //2 столб к строке
				tab+=tr; //строку к столбу
			}
	let j=0; // исторические события
            for ( let key in nomer[8]) // не используем свойства
				{
                let length=Object.keys(nomer[8]).length; 
                tr="<tr>";
                    td="<td>";
                        sob1=about[8];
                        sob2=nomer[8][key];
                        j++;
                        if (j===Math.floor(length/2)) 
                            td+=sob1;
                        tr+=td;
                    td="<td>";
                    td+=key;
                    td+="-";
                    td+=sob2;
                tr+=td;
                tab+=tr; // все складываем в переменную
            }
            
	
		tab+="</table>";
		div+=tab;
		div+="</div>";
    return div;
	}
		var aper = this.Countries.map(makeTableFromCountry);

aper.forEach(function (info, i, arr){
  document.write(info);
  document.write("<br>");
})

	}
};


var data = parseInt(prompt("Введите data(от -10 до 10): "));

while(data > 10 || data < -10){
    data = parseInt(prompt("Значение должно быть от -10 до 10. Введите еще раз: "));
}



function Change(){
    
  this.Countries = JSON.parse(JSON.stringify(countries));

  this.changeCountries=function (data){
      for(let i = 0; i < this.Countries.length; i++){
        if(this.Countries[i][4] > data){
          this.Countries[i][0] = this.Countries[i][0].toUpperCase();
          alert(this.Countries[i][0]);
        }
      }
  }
};


 var obj2 = new Change();
 //показать как (не)изменились данные поля countries объекта obj2.
//obj1.OutCountries.bind(obj2)(); 
  
obj2.changeCountries(data);
 obj1.outCountries.call(obj2);
 obj1.outCountries();   //при этом вызове не должно меняться