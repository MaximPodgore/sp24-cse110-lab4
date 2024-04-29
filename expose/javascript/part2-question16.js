for (let key in jsonObject) {
    const value = jsonObject[key];
    
    if (key.startsWith('r') || (value % 2 !== 0)) {
        console.log(value);
    }
}