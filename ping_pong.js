//  PingPong Challenge

function ping_pong() {
    // console.log('pingpong');
    let number = 20

    const pingPong = [];

    for (let i = 1; i <= number; i++) {
        // console.log(i);

        // console.log(i % 3);

        if (i % 3 === 0) {
            console.log(i);
            pingPong.push('Ping');
            continue;
        }
        if(i % 5 === 0){
            pingPong.push('Pong');
            continue;
        }
        pingPong.push(i);

    }
    console.log(pingPong);

}

ping_pong();