//  PingPong Challenge

/**
 * this function takes doesn't take any input.
 * this function prints number 1-20 and all those numbers which can be divided by 3 those got replaced with PING and those who can be divided by 5 got replaced by PONG.
 * it first starts a loop
 * then it checks all the element from the loop on every iteration
 *   if the number is divided by 3 or not, if yes- it pushing ping, then continue (means: pushing ping into the array and then skip this iteration and jump to the next)
 *   then another checking for numbers which can be divided by 5. pushed 'pong' here and continue
 * 
 *  and behind all these conditions its pushing the loop element into the array and finally returning the array
 */

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
        if (i % 5 === 0) {
            pingPong.push('Pong');
            continue;
        }
        pingPong.push(i);

    }
    console.log(pingPong);

}

ping_pong();