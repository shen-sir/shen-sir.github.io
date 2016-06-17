(function(){
	//时间戳转换
function getLocalTime(nS) {  
	var timecheck = new Date(parseInt(nS));
 return timecheck.getMonth()+1 + '/' + timecheck.getDate() + ' ' + timecheck.getHours() + ':' +timecheck.getMinutes()
}
//ajax
var request = new XMLHttpRequest();
request.open('GET', 'http://test.api.xiugr.com/xiugr-server-service/restful/reward/RewardInfoList/27e69389-4fb7-4189-a68c-14714648d7dc', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
    resp = JSON.parse(resp);//序列化
    resp.result.userVideoResults = resp.result.userVideoResults.filter(function (item) {
    	// console.log(item);
    	item.createTime = getLocalTime(item.createTime);
	  return item
	})

    var vm = new Vue({
    	el:'#app',
    	data:resp
    })
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

})()