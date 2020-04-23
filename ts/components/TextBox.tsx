import React from 'react'; // --(a);

// 親コンポーネントから渡されるプロパティを定義する // --(b)
interface IProps {
    // ラベル文字列
    label: string;
    // テキストボックスのタイプ
    type: 'text' | `password`;
    // テキストボックスに表示する値
    value: string;
    // 値の確定時にその値を親プロパティが取得するためにコールバック関数を提供する
    onChangeText: (value: string) => void;
}

/**
 * ラベル付きのテキストボックスを提供する
 */
export const TextBox: React.FC<IProps> = ({
  label, type, value, onChangeText
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
}
