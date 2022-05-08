const db = require('./db');
const Block = require('./models/Block');
const TARGET_DIFFICULTY = BigInt("0x00" + "F".repeat(63));

let mining = true;
mine();

function startMining() {
    mining = true;
    mine();
}

function stopMining() {
    mining = false;
}

function mine() {
    if (!mining) return;

    const block = new Block;
    while(BigInt("0x" + block.hash()) >= TARGET_DIFFICULTY) {
        block.nonce++;
    }

    db.blockchain.addBlock(block);

    console.log(`Just mined block #${db.blockchain.blockHeight()} with a hash of ${block.hash()} at nonce ${block.nonce}`);

    setTimeout(mine, 5000);
}

module.exports = {
    startMining,
    stopMining,
};