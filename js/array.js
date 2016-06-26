var arr1 = [1,2,4],
	arr2 = [3,5,6];

/**
*** 合并数组
*   concat可以合并多个数组
*/
function concatArray(arr1,arr2){
	return arr1.concat(arr2);
}
//console.log(concatArray(arr1,arr2));

function pushArray(arr1,arr2){
	for(var i=0; i<arr2.length; i++){
		arr1.push(arr2[i]);
	}
	return arr1;
}
//console.log(pushArray(arr1,arr2));

function unshiftArray(arr1,arr2){
	for(var i=arr1.length-1; i>=0; i--){
		arr2.unshift(arr1[i]);
	}
	return arr2;
}
//console.log(unshiftArray(arr1,arr2));
function reduceArray(arr1,arr2){
	return arr2.reduce(function(prev, curr){
		prev.push(curr);
		return prev;
	},arr1);
}
//console.log(reduceArray(arr1,arr2));
/*
 *  相加
 */
function sum(num){
	var total = 0;
	for(var i=0; i<arguments.length; i++){
		if(!isNaN(arguments[i])){
			total+= Number(arguments[i]); 
		}
	}
	return total;
}
//console.log(sum(5,6,7));



















