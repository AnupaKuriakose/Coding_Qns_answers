function convertToPM(str)
{
    let [hours, minutes, seconds] = str.split(":");;
    console.log(parseInt(hours, 10));
    hours = parseInt(hours, 10) + 12;
    console.log(hours+':'+minutes+':'+seconds);

}
convertToPM("7:55:30");

//OR
const convertTime12to24 = time12h => {
    const [time, modifier] = time12h.split(" ");
   
    let [hours, minutes] = time.split(":");
   
    if (hours === "12") {
      hours = "00";
    }
   
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
   
    return `${hours}:${minutes}`;
  };
   
  var convertedTime = convertTime12to24("01:00 PM");
  console.log(convertedTime);