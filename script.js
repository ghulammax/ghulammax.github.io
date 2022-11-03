var tanya = true;
while ( tanya ) {
	// menangkap pilihan player
	var p = prompt('pilih : gajah, semut, orang');

	//menangkap pilihan komputer
	//membangkitkan bilangan random
	var comp = Math.random();

	if( comp < 0.34 ) {
		comp = 'gajah';
	} else if ( comp >= 0.34 && comp < 0.67 ) {
		comp = 'orang'
	} else {
		comp = 'semut'
	}
	console.log(comp);


	var hasil = '';
	//menentukan rules
	if( p == comp ) {
		hasil ='SERI';
	} else if ( p == 'gajah') {
		if ( comp == 'orang') {
			hasil = 'MENANG';
		} else {
			hasil = 'KALAH';
		}
	} else if ( p == 'orang') {
		if ( comp  == 'gajah') {
			hasil = 'KALAH';
		} else {
			hasil = 'MENANG';
		}
	} else if ( p == 'semut') {
		hasil = ( comp == 'orang') ? 'KALAH' : 'MENANG';
	} else {
		hasil = 'memasukan pilihan yang salah'
	}

	//tampilkan hasilnya
	alert( 'kamu memilih : ' + p + ' dan komputer memillih : ' + comp + '\n maka hasilnya : kamu ' + hasil);

	tanya = confirm('lagi?');
}

alert('terima kasih sudah bermain')