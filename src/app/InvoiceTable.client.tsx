import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface Invoice {
    invoice: string;
    paymentStatus: string;
    totalAmount: string;
    paymentMethod: string;
}

const DUMMY_INVOICES: Invoice[] = [
    { invoice: 'INV001', paymentStatus: 'Paid', totalAmount: '$1500', paymentMethod: 'Credit Card' },
    { invoice: 'INV002', paymentStatus: 'Pending', totalAmount: '$500', paymentMethod: 'PayPal' },
    // 추가 더미 데이터...
];

const InvoiceTable = () => {

    const [invoices, setInvoices] = useState<Invoice[]>([]);

    useEffect(() => {
        // API 호출 대신 더미 데이터 사용
        setInvoices(DUMMY_INVOICES);
    }, []);

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

export default InvoiceTable;
