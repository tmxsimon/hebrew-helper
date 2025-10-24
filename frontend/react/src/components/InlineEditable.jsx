import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const InlineEditable = ({
  value,
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
        <input
          className={`w-full ${classNameText}`}
          ref={inputRef}
          onChange={(e) => onValueChange(e.target.value)}
          onKeyDown={onKeyDown}
          value={value}
          readOnly
          {...inputProps}
        />
      )}
    </div>
  );
};

export default InlineEditable;
