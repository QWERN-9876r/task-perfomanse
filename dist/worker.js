onmessage = ({data}) => {
    for (let i = 0; i < 6; ++i) data = [...data, ...data]
    console.log(data);
    postMessage(data)
}