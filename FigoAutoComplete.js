import React, { useState, useEffect } from 'react';

function Autocomplete(props) {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    setFiltered([...props.items]);
  }, [props]);

  const onChange = (e) => {
    setFiltered([...props.items]);
    setInput(e.currentTarget.value);
    setActive(0);
    setIsShow(true);
    props.onChange(e, e.currentTarget.value);
  };
  const onClick = (e, index) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
    props.onSelect(e.currentTarget.innerText, props.items[index]);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActive(0);
      setFiltered([]);
      setIsShow(false);
      setInput(props.items[active].text);
      props.onSelect(props.items[active].text, props.items[active]);
    } else if (e.keyCode === 38) {
      return (active === 0) ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
    return null;
  };
  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <div style={{
            position: 'absolute',
            boxSizing: 'border-box',
            width: '100%',
            border: '1px solid #cccccc',
            background: 'white',
            zIndex: 2,
          }}
          >
            {filtered.map((item, index) => (
              <div role="group" key={item.value} onClick={(e) => onClick(e, index)} style={{ background: index === active ? 'lightgray' : 'white', padding: '2px' }}>
                {item.text}
              </div>
            ))}
          </div>
        );
      }
    }
    return null;
  };
  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        {...props.inputProps}
      />
      {renderAutocomplete()}
    </div>
  );
}
export default Autocomplete;
