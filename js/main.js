function ajaxWithGenerateSheet(ajaxOptions){
    let deferred = new $.Deferred;

    $.ajax(ajaxOptions).done(function(date){
        deferred.resolve(date); //resolve()でdoneメソッドを呼び出す
    }).fail(function(date){
        deferred.reject(date);//reject()でfailメソッドを呼び出す
    });

    return deferred.promise();//戻り値はpromiseにする
}

$('#generate-sheet-btn').on('click',function(){
    
    let url = 'http://localhost:8000/';
    ajaxWithGenerateSheet({
        url:url + 'api/sheet',
        type: 'get',
    }).done(function(date){
        $('#row1 td,#row2 td,#row3 td,#row4 td,#row5 td').remove();
        let dateTr1 = date.slice(0,5);
        let dateTr2 = date.slice(5,10);
        let dateTr3 = date.slice(10,15);
        let dateTr4 = date.slice(15,20);
        let dateTr5 = date.slice(20,25);
        dateTr1.forEach(function(num){
            $('#row1').append('<td>' + num + '</td>');
        });
        dateTr2.forEach(function(num){
            $('#row2').append('<td>' + num + '</td>');
        });
        dateTr3.forEach(function(num){
            $('#row3').append('<td>' + num + '</td>');
        });
        dateTr4.forEach(function(num){
            $('#row4').append('<td>' + num + '</td>');
        });
        dateTr5.forEach(function(num){
            $('#row5').append('<td>' + num + '</td>');
        });
        console.log('データ1:' + dateTr1);
        console.log('データ2:' + dateTr2);
        console.log('データ3:' + dateTr3);
        console.log('データ4:' + dateTr4);
        console.log('データ5:' + dateTr5);
    });
});
