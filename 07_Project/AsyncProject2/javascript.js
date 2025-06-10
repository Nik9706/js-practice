const insert=document.getElementById('insert')

window.addEventListener('keydown',function (e){
insert.innerHTML=`
<div class='color'>
<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===""?space:"space"}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
</div>
     `; })