"use client";
import dynamic from 'next/dynamic';
const InvoiceTable = dynamic(() => import('./InvoiceTable.client'), { ssr: false });

export default function Page() {
  return (
    <div>
      <h1>Your Invoices</h1>
      <InvoiceTable />
    </div>
  );
}