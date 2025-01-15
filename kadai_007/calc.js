let num=10; 

 // 変数numの値が３の倍数かつ５の倍数の時、３と５の倍数ですという文字を出力する
 if (num % 3 === 0 && num % 5 === 0 ) {
  console.log('3と５の倍数です');
} else if (num % 3 === 0) {
 // 変数numの値が３の倍数であれば、３の倍数ですという文字列を出力する   
  console.log('３の倍数です');
} else if (num % 5 === 0) {
 // 変数numの値が５の倍数であれば、５の倍数ですという文字列を出力する 
  console.log('５の倍数です');
} else {
  console.log(num);
}

 