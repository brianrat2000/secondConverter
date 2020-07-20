function secondsToTimeConverter(sec){
    let hours = sec / 3600;
    let fullHours = Math.floor(hours);

    let minuts = hours % 1 * 60;
    let fullMinuts = Math.floor(minuts);

    let seconds = minuts % 1 * 60;
    let fullSeconds = Math.floor(seconds);

    let correctHours = Math.ceil(Math.log10(fullHours + 1)) > 1 ? `${fullHours}` : Math.ceil(Math.log10(fullHours + 1)) == 1 ? `0${fullHours}` : `00`
    let correctMinuts = Math.ceil(Math.log10(fullMinuts + 1)) > 1 ? `${fullMinuts}` : Math.ceil(Math.log10(fullMinuts + 1)) == 1 ? `0${fullMinuts}` : `00`
    let correctSeconds = Math.ceil(Math.log10(fullSeconds + 1)) > 1 ? `${fullSeconds}` : Math.ceil(Math.log10(fullSeconds + 1)) == 1 ? `0${fullSeconds}` : `00`

    return sec >= 0 && sec <= 86400 ? `${correctHours}:${correctMinuts}:${correctSeconds}` : `Minimum value is 0. Max valuo is 86400`;
}