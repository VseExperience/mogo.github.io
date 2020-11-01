/**
 * Определение мобильной операционной системы
 * Эта функция возвращает что-то одно из 'iOS', 'Android', 'Windows Phone', или 'Probably Desktop'
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {

  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone идет первым потому что UA тоже содержит "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    // Определение Android
    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // Определение iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "Probably Desktop";
}

document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){

    var hrefForIOS = "https:/maps.apple.com/?q=59.85451466138811,30.324647426605228&ll=59.85451466138811,30.324647426605228";
    var hrefForOther = "geo:59.85451466138811,30.324647426605228";

    var systemName = getMobileOperatingSystem(); // получаем название операционной системы
    var currentElement = document.getElementById("geo-btn"); // получаем необходимый элемент

    // подмена href если ОС - iOS
    if (systemName == "iOS") {
        currentElement.href = hrefForIOS;
    }

});
