// 获取设计 
function designs(fna,num){     
      let design = {
       ow:[[1,2,3],[1,3,4],[1,2,4],[1,2,3]],
       tw:[
       [[2,1],[2,4],[3,3],[3,2],[4,1],[4,2]],
       [[1,2],[1,3],[1,4],[3,1],[3,2],[4,1],[4,2],[4,3]],
       [[1,1],[1,2],[1,3],[1,4],[2,1],[2,4],[4,1],[4,2],[4,4]],
       [[1,1],[1,2],[1,3],[1,4],[2,1],[2,3],[2,4],[3,1],[3,2],[3,4]]
       ],
      }
     if(! typeof fna == 'number'){return false;}
     var nt = num== 2 ? 'tw' : 'ow';
     return design[nt][fna-1];
   }

   // arr in array
   function arrInArray(sArr,bArr){
    for(var i =0;i<bArr.length;i++){
      if(bArr[i][0] ==sArr[0] && bArr[i][1] ==sArr[1]){
        return true;
      }
    }
   }

/**封装 ajax 请求
  *str 传入 汉字
  *callback 回调函数 处理结果  //{"result":["zhong1","guo2"]}
  */
  function getPinYin(str,callback)
 {
 var xmlhttp;
 if (window.XMLHttpRequest)
   {// code for IE7+, Firefox, Chrome, Opera, Safari
   xmlhttp=new XMLHttpRequest();
   }
 else
   {// code for IE6, IE5
   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
   }
 xmlhttp.onreadystatechange=function()
   {
   if (xmlhttp.readyState==4 && xmlhttp.status==200)
     {
      callback(eval("("+ xmlhttp.responseText +")"));
     }
   }
 xmlhttp.open("GET","https://helloacm.com/api/pinyin/?cached&s="+str+"&t=1",true);
 xmlhttp.send();
 }

/**
*拼音最后一位显示音调直接返回数字
*
*/
  function yd(str)
  {
    if(str){
      return str.substring(str.length-1,str.length) ;
    }else{
      return false;
    }
  }

//点击复制功能
  window.onload= function () {
    new Clipboard('.btns', {
        text: function(trigger) {
       let appDom = document.getElementById('app');
       let copyTips = document.createElement('div');
       copyTips.className = 'tips';
       copyTips.innerText = '复制成功啦，赶快去粘贴吧！'
       appDom.appendChild(copyTips)
       setTimeout(function(){
        appDom.removeChild(copyTips);
       },1000);

            return trigger.innerText;
        }
    });
};

   
