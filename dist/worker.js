onmessage = function({data}) {
    let allItems = data
    const Items = structuredClone(allItems)
    allItems.length += 508;
    for ( let i = 7, j = 0; i < allItems.length; i++, j++ ) {
    if ( j === Items.length ) j = 0
    allItems[i] = Items[j]
    }
    postMessage(allItems)
}