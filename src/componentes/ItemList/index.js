import React from 'react';
import Form from 'react-bootstrap/Form';
import './style.css';


//recorriendo opciones en el menu de selección


function SelectBasic(props) {
  return (
    <div className='select'>
        <Form.Select aria-label="Default select example">
          <option>Selecione una categoría...</option>
          {props.children}
        </Form.Select>
    </div>
  );
}

export default SelectBasic;
