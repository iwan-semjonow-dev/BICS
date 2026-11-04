import { Injectable, BadRequestException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Pool } from 'pg';

type TransactionRow = {
  id: number;
  title: string;
  amount_cents: number;
  type: 'income' | 'expense';
  operation_date: string;
  zone: 'Basic' | 'Invest' | 'Chaos' | 'Signal' | null;
};

@Injectable()
export class AppService {
  private readonly pool = new Pool();
  getHello(): string {
    return 'Сервер BICS работает';
  }

  async getTransactions() {
    const result = await this.pool.query<TransactionRow>(`
    SELECT id, title, amount_cents, type, operation_date::text AS operation_date, zone
    FROM transactions
    ORDER BY id;
  `);
    return result.rows;
  }

  createTransaction(data: unknown) {
    if (data === null || typeof data !== 'object' || Array.isArray(data)) {
      throw new BadRequestException('Передайте данные транзакции объектом');
    }

    if (
      !('title' in data) ||
      typeof data.title !== 'string' ||
      data.title.trim() === ''
    ) {
      throw new BadRequestException('Введите название транзакции');
    }

    if (
      !('amount' in data) ||
      typeof data.amount !== 'number' ||
      !Number.isFinite(data.amount) ||
      data.amount <= 0
    ) {
      throw new BadRequestException('Сумма должна быть числом больше нуля');
    }

    if (
      !('type' in data) ||
      (data.type !== 'income' && data.type !== 'expense')
    ) {
      throw new BadRequestException('Выберите допустимый тип операции');
    }

    if (!('category' in data) || typeof data.category !== 'string') {
      throw new BadRequestException('Поле category должно быть строкой');
    }

    if (
      data.type === 'expense' &&
      !['Basic', 'Invest', 'Chaos', 'Signal'].includes(data.category)
    ) {
      throw new BadRequestException('Выберите доступную зону BICS');
    }

    if (data.type === 'income' && data.category !== '') {
      throw new BadRequestException('У дохода не должно быть зоны BICS');
    }

    const transaction = {
      title: data.title.trim(),
      amount: data.amount,
      type: data.type,
      category: data.category,
      createdAt: new Date().toISOString(),
      id: randomUUID(),
    };

    return transaction;
  }
}
