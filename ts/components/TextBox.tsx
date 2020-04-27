import React from 'react'; // --(a);

interface IProps {
  label: string;
  type: 'text' | `password`;
  value: string;
  onChangeText: (value: string) => void;
}

export const TextBox: React.FC<IProps> = ({
  label,
  type,
  value,
  onChangeText,
}) => {
  return (
    <span>
      {label}
      <input
        name="username"
        type={type}
        value={value}
        onChange={(ev) => onChangeText(ev.target.value)}
      />
    </span>
  );
};
