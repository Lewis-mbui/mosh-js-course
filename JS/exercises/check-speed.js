const speedLimit = 70;

function checkSpeed(speed) {
  const points = Math.floor((speed - speedLimit) / 5);

  if (points < 1) console.log('OK');
  else if (points >= 12) console.log('License Suspended');
  else console.log('Points: ' + points);
}

checkSpeed(180);