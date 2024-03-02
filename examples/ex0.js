var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

var idx = 0
while(idx < 100) {
    if(numeros[idx] < 2) {
        console.log('o numero nao é primo =>')
        console.log(numeros[idx])

    }     else {
        var idx2 = idx
        var break_called = false
        while(idx2 > 1) {
            if(numeros[idx] % numeros[idx2 - 1] == 0) {
                    console.log('o numero nao é primo =>')
                    console.log(numeros[idx])
                    var break_called = true
                    break
           
                } var idx2 = idx2 - 1

   
        }     if(break_called == false) {
            console.log('o numero é primo =>')
            console.log(numeros[idx])

   
        }
}     var idx = idx + 1}