onmessage(({data}) => {
    const OneElement = data.items.map((item, index) =>
        <Event
            key={index}
            {...item}
            onSize={data.onSize}
        />
    ),
     LiArray = new Array(64)
    for ( let i = 0; i < 64; i++ ) liArray[i] = <OneElement/>

    postMessage( <ul className="section__panel-list"><LiArray/></ul> )
})