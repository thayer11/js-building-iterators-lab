// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {
var previousValue;
var currentValue;
var currentIndex;
var reduceValue;
	for(var i = 0; i < arr.length; i++){
		currentIndex = i;
		currentValue = arr[i];
		previousValue = 1;

	if((initialValue === "" || initialValue === null || initialValue === undefined))
		previousValue = arr[0];
		currentValue = arr[1];
		initialValue = arr[i];
	}
reduceValue = callback(previousValue, currentValue, currentIndex, arr);
}
	return reduceValue;
//  CODE INSIDE HERE   //
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
