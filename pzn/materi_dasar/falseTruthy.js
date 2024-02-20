var truthy = 420 && 120;
var falsy = 410 || 'string';

if(falsy == truthy){
    console.log('benar')
} else {
    console.log('salah');
}