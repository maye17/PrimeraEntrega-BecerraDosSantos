import Form from 'react-bootstrap/Form';
import './style.css'

function SelectBasic() {
  return (
    <div className='select'>
        <Form.Select aria-label="Default select example">
          <option>Selecione una categoría...</option>
          <option value="1">Cursos</option>
          <option value="2">Maquillajes</option>
        </Form.Select>
    </div>
  );
}

export default SelectBasic;