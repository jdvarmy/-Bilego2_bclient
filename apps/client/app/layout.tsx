import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Bilego',
  description: 'Awesome bilego',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
