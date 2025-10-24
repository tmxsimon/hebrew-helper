import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const InlineEditable = ({
  value,
  placeholder,
  isEditMode,
  onValueChange,
  onKeyDown,
  href,
  className = "",
  classNameText = "",
  ...inputProps
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditMode) inputRef.current?.focus();
  }, [isEditMode]);

  return (
    <div className={`flex h-full w-full items-center ${className}`}>
      {isEditMode ? (
        <input
          placeholder={placeholder}
          className={`w-full ${classNameText}`}
          ref={inputRef}
          onChange={(e) => onValueChange(e.target.value)}
          onKeyDown={onKeyDown}
          value={value}
          {...inputProps}
        />
      ) : href ? (
        <Link
          to={href}
          className={`flex h-full w-full items-center overflow-hidden hover:underline ${classNameText}`}
        >
          {value}
        </Link>
      ) : (
        <span className={`w-full overflow-hidden ${classNameText}`}>
          {value}
        </span>
      )}
    </div>
  );
};

export default InlineEditable;
