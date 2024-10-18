import React from 'react';

interface TransactionItemProps {
  date: string;
  emoji: string;
  title: string;
  category: string;
  amount: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ date, emoji, title, category, amount }) => (
  <>
    <div className="text-sm text-neutral-500">{date}</div>
    <div className="flex gap-6 mt-3.5">
      <div className="text-4xl font-bold">{emoji}</div>
      <div className="flex flex-col self-start">
        <div className="self-start text-base font-medium text-black">{title}</div>
        <div className="text-xs text-neutral-500">{category}</div>
      </div>
    </div>
    <div className="self-start mt-10 text-base text-neutral-500">{amount}</div>
  </>
);

export default TransactionItem;