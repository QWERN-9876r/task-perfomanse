onmessage(({
  data
}) => {
  const empyArr = new Array(64).fill(false);
  postMessage( /*#__PURE__*/_jsx("ul", {
    className: "section__panel-list",
    children: empyArr.map(() => data.items.map((item, index) => /*#__PURE__*/_jsx(Event, {
      ...item,
      onSize: data.onSize
    }, index)))
  }));
});