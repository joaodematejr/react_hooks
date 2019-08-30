import React, {useState, useEffect} from 'react';

export default function App() {

  const name = useFormInput('Mary');
  const surName = useFormInput('Poppins');
  const width = useWindowWidth();

  //DECLARACAO DE UMA VARIAVEL INICIAL 
  const [count, setCount] = useState(0);

  useDocumentTitle(name.value + ' ' + surName.value);

  return (
    <div className="App">
      <header className="App-header">
      <input placeholder='Name' {...name} />
      <input placeholder='SurName' {...surName} />
      <h1>{width}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      </header>
    </div>
  );
}

function useFormInput(initialValue){
  const [value, setValue] = useState (initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

function useDocumentTitle(title){
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth(){
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize);
    return() =>{
      window.removeEventListener('resize', handleResize);
    }
  });
  return width
}
