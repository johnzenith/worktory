import React from 'react';

interface Props {}

const DefaultContent: React.FC<Props> = props => {

  return (
    <main className="w-full order-3 flex items-center justify-start">
      DefaultContent
    </main>
  );
};

export default DefaultContent;