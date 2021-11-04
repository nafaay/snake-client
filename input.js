
let connection;
const setupInput = (conn) => {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on('data', (key) => {
        if (key === '\u0003'){
            process.exit();
        }
        if (key === 'w'){
            conn.write("Move: up");
        }
       if (key === 'a'){
            conn.write("Move: left");
        }
        if (key === 's'){
            conn.write("Move: down");
        }
        if (key === 'd'){
            conn.write("Move: right");
        }
        if (key === 'n'){
            conn.write('Say: Hello Everyone!!');
        }
    });
    
    return stdin;
};

module.exports = { setupInput };
