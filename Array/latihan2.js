// memanipulasi Array
/*
1. menampilkan isi semua array
    var namaMhs = [1, 'nama', true];
    console.log(namaMhs);

2. menambah array
    var angka = [];
    angka[0] = 1;
    angka[1] = 'Dua';
    angka[2] = false;
    console.log(angka);

3. menghapus isi aray
    var namaBinatang = ["monyet","kancil","kura-kura"];
    namaBinatang = undefined;
    console.log(namaBinatang);

4. menampilkan isi semua array dengan looping
    var nmaMhs = ['Adam Nizam', 'Gilang Pratama', 'M. Ansory', 'Tegar Imam Maulana', 'safwan hapiz'];
    for (i = 0; i < nmaMhs.length; i++) {
        console.log('mahasiswa index ke-' + i + ' : dengan nama : ' + nmaMhs[i]);
    }
    
 5. array method :
        - lenght = untuk mengetahui jumlah elemen pada array
        - join = method ini yang mengabungkan seluruh isi array dan mengubahnya menjadi string
            Example :
                var nmaMhs = ['Adam Nizam', 'Gilang Pratama', 'M. Ansory', 'Tegar Imam Maulana', 'safwan hapiz'];
                console.log(nmaMhs.join(' - '));
        - push = menambah / memasukkan element baru pada element terakhir array
            example :
                var nmaMhs = ['Adam Nizam', 'Gilang Pratama', 'M. Ansory', 'Tegar Imam Maulana', 'safwan hapiz'];
                nmaMhs.push('Adoq Blodok');
                console.log(nmaMhs.join(' - '));
                
                
        - pop = kebalikan dari push untuk menghapus element terkahir dari array
            Example :
                var nmaMhs = ['Adam Nizam', 'Gilang Pratama', 'M. Ansory', 'Tegar Imam Maulana', 'safwan hapiz'];
                nmaMhs.pop();
                console.log(nmaMhs.join(' - ')); 
                
        - unshift = sama seperti push & pop tapi method ini bekerja dari element pertama pada array 
                Example :
                    var nmaMhs = ['Adam Nizam', 'Gilang Pratama', 'M. Ansory', 'Tegar Imam Maulana', 'safwan hapiz'];
                    nmaMhs.unshift('Adoq');
                    console.log(nmaMhs.join(' - '));
                    
        - shift = kebalikan dari unshift menghilangkan element pertama 
                Example :
                    var nmaMhs = ['Adam Nizam', 'Gilang Pratama', 'M. Ansory', 'Tegar Imam Maulana', 'safwan hapiz'];
                    nmaMhs.shift();
                    console.log(nmaMhs.join('\n'));
        
        - slice = mengiris sebuah array dan digunakan ketika kita ingin mengambil beberapa element array dan mengubahnya menjadi array baru
                 Example:
                    var nmaMhs = ['Adam Nizam', 'Gilang Pratama', 'M. Ansory', 'Tegar Imam Maulana', 'safwan hapiz'];
                    nmaMhs.splice(1, 2, 'Zeen', 'Ronio');
                    alert(nmaMhs.join(' \n'));

        - splice = menyambung / menyisipkan pada tengah-tengah element array
                  Example :
                        var nmaMhs = ['Adam Nizam', 'Gilang Pratama', 'M. Ansory', 'Tegar Imam Maulana', 'safwan hapiz'];
                        var nmaMhsExample = nmaMhs.slice(1, 4);
                        alert(nmaMhsExample.join(' \n'));

        - foreEach = digunakan untuk melakukan looping pada array
                   Example :
                   // dengan melakukan forEach kita tidak perlu menentukan index atau incrememt 
                   var angka = [1, 2, 3, 4, 5, 7, 8, 9];
                   angka.forEach(function (e) {
                    console.log(e);
                    });

        - map = sama seperti forEach karna method ini mengembalikan nilai array
                    Example :
                        var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                        var coba = angka.map(function (e) {
                        return e * 2;
                        });
                        console.log(coba.join('-'));
            
         - sort = method ini digunakan untuk mengurutkan isi array
                   Example : 
                        var angka = [1, 6, 9, 5, 2, 3, 8, 4, 7, 20, 10, 30];
                        angka.sort(function (a, b) {
                        return a - b;
                        });
                        console.log(angka.join('-'));

         - filter = digunakan untuk mencari element dari array dan mengembalikannya dalam bentuk array , filter => mengembalikan banyak nilai
                   Example :
                        var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                        var coba = angka.filter(function (x) {
                        return x < 7;
                        });
                        console.log(coba.join('-'));

        - find = digunakan untuk mencari element dari array , find => mengembalikan banyak nilai
                  Example :
                     var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    var coba = angka.find(function (x) {
                    return x > 6 ;
                    });
                    console.log(coba);
                    
    */

