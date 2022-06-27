function runningPace (distance, time) {
    timeString = time.split(':');
    var seconds = timeString[0]*60 + +timeString[1];
    var restSeconds = Math.floor(Number.parseFloat((seconds/60) % distance/distance * 60)+0.00001);
    var pace = Math.floor(seconds/distance/60) + ":" + (restSeconds.toString().length > 1 && restSeconds.toString().length !==0 ? restSeconds : "0" + restSeconds.toString());
    console.log(pace);
}
runningPace(0.2, "0:38")