import './FormGroup.scss';

const FormGroup = ({ label, htmlFor, children }) => (
  <div className="form-group">
    <label htmlFor={htmlFor}>{label}</label>
    {children}
  </div>
);

export default FormGroup;
