/*

    THIS = adalah sebuah keyword special yang secara otomatis itu didefinisikan pada setiap function

    1. object declaration  = this mengembalikan nilai global

    Examle : 
        function hello() {
        console.log(this);
        console.log('hello world!');
        }
        hello();


    2. object literal = this mengembalikan object yang bersangkutan
     Example : 
            var objectCoba = {};                            
            objectCoba.hello = function () {
            console.log(this);
            console.log('hello world!');
            };
            objectCoba.hello();

            var objectCoba = {
            nama: 'Adam Nizam',
            nim: 'TI17200001',
            jurusan: 'tehnik infomatika',
            };
            objectCoba.hello = function () {
            console.log(this);
            };
            objectCoba.hello();


    3. constructor = this mengembalikan object yang baru dibuat
       Example :
            function Mhs() {
            console.log(this);
            console.log('hellow world!');
            }
            var onjBaru = new Mhs();



 */

