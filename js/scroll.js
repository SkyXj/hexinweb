//生成表格内容
let htmlLeft = '';
let htmlRight = '';
for (let i = 1; i <= 7; i++) {
    htmlLeft += '<tr>';
    htmlLeft += '<td>' + i + '</td>';
    htmlLeft += '</tr>';
}
for (let i = 1; i <= 7; i++) {
    htmlRight += '<tr>';
    htmlRight += '<td>A</td>';
    htmlRight += '<td>100</td>';
    htmlRight += '<td>500</td>';
    htmlRight += '<td>1</td>';
    htmlRight += '</tr>';
}
$('#left-table2').html(htmlLeft);
$('#right-table2').html(htmlRight);
//滚动
 // $('#right-div2').on('scroll',function(){
 //     let top=$(this).scrollTop();
 //     let left=$(this).scrollLeft();
 //     $('#left-div2').scrollTop(top);
 //     $('#right-div1').scrollLeft(left);
 // })