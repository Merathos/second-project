import { Label } from './styles';

const BlogsCheckbox = ({ name, label, id, checked, onChange }) => {
  return (
    <Label>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={checked}
        name={name}
      />
      <span>{label}</span>
    </Label>
  );
};

export default BlogsCheckbox;
