var sign = prompt('What is your astrological sign?').toLowerCase();
alert('Sensing your future by consulting the plimpies...')
switch (sign) {
    case 'taurus':
        alert('If you believe this rubish, you need shooting!');
        break;
    case 'virgo':
        alert('You are an angel strawberry smile with a strawberry halo.');
        break;
    case 'leo':
        alert('You just want to buy a shitload of alcohol just so you can talk to someone else about how great you are.');
        break;
    default:
        alert('please enter a valid sign');
        break;
}