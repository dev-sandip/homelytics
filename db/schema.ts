import { pgTable, serial, text, integer, date, primaryKey, boolean } from 'drizzle-orm/pg-core';
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


export const loan = pgTable('loan', {
    id: serial('id').primaryKey(),
    borrowerId: text('borrower_id').notNull().references(() => users.id, { onDelete: "cascade" }),
    amount: integer('amount').notNull(),
    lenderId: text('lender_id').notNull().references(() => users.id, { onDelete: "cascade" }),
    isPaid: boolean('is_paid').notNull().default(false),
    isReceived: boolean('is_received').notNull().default(false),
    date: date('date').notNull().defaultNow(),
});


// Define relationships for the 'meterReadings' table
export const meterReadingsRelations = relations(meterReadings, ({ one }) => ({
    user: one(users, {
        fields: [meterReadings.userId],
        references: [users.id],
    }),
}));

export const schedule = pgTable('schedule', {
    name: text('name').notNull(),
    date: date('date').notNull(),
    time: text('time').notNull(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: "cascade" }),

});
