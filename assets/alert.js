const heartrate_lower_threshold = 60;
const heartrate_upper_threshold = 120;
const accelerometer_threshold = 8;
const temperature_lower_threshold = 10;
const temperature_upper_threshold = 43;
const smoke_threshold = 0.8;


let condition = [];

function generateItems() {

  db.collection("miners").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      if (
        doc.data().heartrate * -1 >= heartrate_upper_threshold ||
        doc.data().heartrate * -1 <= heartrate_lower_threshold
      ) {
        condition.push(`${doc.data().mname}\nHeart Rate: ${
          doc.data().heartrate
        }\nRisk: High`);
      } else if (doc.data().accelerometer >= accelerometer_threshold) {
        condition.push(`${doc.data().mname}\nSudden Acceleration Rate: ${
          doc.data().accelerometer
        }\nPossibility of Fall: High`)
      }
    });
  });

  db.collection("groups").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      if (doc.data().temperature.slice(-1) >= temperature_upper_threshold) {
        condition.push(`Group ${doc.data().gid}\nTemperature: ${
          doc.data().temperature.slice(-1)
        }\nTemperature has crossed upper threshold`)
      } else if(doc.data().temperature.slice(-1) <= temperature_lower_threshold){
        condition.push(`Group ${doc.data().gid}\nTemperature: ${
            doc.data().temperature.slice(-1)
          }\nTemperature has crossed lower threshold`)
      }else if (doc.data().smoke.slice(-1) >= smoke_threshold) {
        condition.push(`Group ${doc.data().gid}\nGas Concentration: ${
          doc.data().smoke.slice(-1)
        }\nGas concentration has crossed upper threshold.`)
      }
    });
  });

}

generateItems();