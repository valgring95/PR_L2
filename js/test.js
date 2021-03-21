let y = []
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        y.push(i * j, '\t')
    }
    let j = y.toString()
    console.log(j.replace(/,/g, ''))
    y = []
}

