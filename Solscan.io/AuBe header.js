function GenerateAuBeHeader() {
    let now = Date.now().toString();
    let utf8Encode = new TextEncoder();
    let nowBytes = utf8Encode.encode(now);
    let hcBytes = utf8Encode.encode("!1HaiBa4Nam6**%");
    
    let dataBytes = new Uint8Array(13);
    for (i = 0; i < nowBytes.length; i++) {
        dataBytes[i] = nowBytes[i] ^ hcBytes[i % hcBytes.length];
    }
    //console.log(dataBytes);

    let dataStr = new TextDecoder().decode(dataBytes);
    //console.log(dataStr);

    let encodedData = encodeURIComponent(dataStr);
    console.log(encodedData);
    return encodedData;
}