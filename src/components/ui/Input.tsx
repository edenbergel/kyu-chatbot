import React from "react";

export const Input = ({
  value,
  placeholder,
  onChange,
  onKeyDown,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      className="border border-zinc-300 rounded-md p-2 w-[50vh] focus:outline-none focus:ring-2 focus:ring-foreground focus:border-foreground dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
};
