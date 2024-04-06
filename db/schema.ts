import { pgTable, serial, text, integer, date, primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Define the 'users' table
export const users = pgTable('users', {
    id: text('user_id').primaryKey(),
    name: text('name').notNull(),
});

// Define the 'meterReadings' table
export const meterReadings = pgTable('meterReadings', {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: "cascade" }),
    month: date('month').notNull(),
    value: integer('value').notNull(),
});

// Define the 'loan' table
export const loan = pgTable('loan', {
    id: serial('id').primaryKey(),
    borrowerId: text('borrower_id').notNull().references(() => users.id, { onDelete: "cascade" }), // References the user who borrowed the loan
    amount: integer('amount').notNull(),
    lenderId: text('lender_id').notNull().references(() => users.id, { onDelete: "cascade" }), // References the user who provided the loan
});

// Define relationships for the 'meterReadings' table
export const meterReadingsRelations = relations(meterReadings, ({ one }) => ({
    user: one(users, {
        fields: [meterReadings.userId],
        references: [users.id],
    }),
}));
// Define relationships for the 'loan' table
export const loanRelations = relations(loan, ({ one }) => ({
    borrower: one(users, {
        fields: [loan.borrowerId],
        references: [users.id],
    }),
    lender: one(users, {
        fields: [loan.lenderId],
        references: [users.id],
    }),
}));