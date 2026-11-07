import { Injectable, BadRequestException } from '@nestjs/common';
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

  async createTransaction(data: unknown) {
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
      !('amount_cents' in data) ||
      typeof data.amount_cents !== 'number' ||
      !Number.isInteger(data.amount_cents) ||
      data.amount_cents <= 0
    ) {
      throw new BadRequestException(
        'Сумма должна быть положительным целым числом центов',
      );
    }

    if (data.amount_cents > 2147483647) {
      throw new BadRequestException(
        'Сумма не должна превышать 2147483647 центов',
      );
    }

    if (
      !('type' in data) ||
      (data.type !== 'income' && data.type !== 'expense')
    ) {
      throw new BadRequestException('Выберите допустимый тип операции');
    }

    if (
      !('zone' in data) ||
      (typeof data.zone !== 'string' && data.zone !== null)
    ) {
      throw new BadRequestException('Поле zone должно быть строкой или null');
    }

    if (
      data.type === 'expense' &&
      (data.zone === null ||
        !['Basic', 'Invest', 'Chaos', 'Signal'].includes(data.zone))
    ) {
      throw new BadRequestException('Выберите доступную зону BICS');
    }

    if (data.type === 'income' && data.zone !== null) {
      throw new BadRequestException('У дохода не должно быть зоны BICS');
    }

    const dateParts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Berlin',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(new Date());

    const year = dateParts.find((part) => part.type === 'year')!.value;
    const month = dateParts.find((part) => part.type === 'month')!.value;
    const day = dateParts.find((part) => part.type === 'day')!.value;

    const operationDate = `${year}-${month}-${day}`;

    const result = await this.pool.query<TransactionRow>(
      `INSERT INTO transactions (title, amount_cents, type, zone, operation_date)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, title, amount_cents, type, zone, operation_date::text AS operation_date`,
      [
        data.title.trim(),
        data.amount_cents,
        data.type,
        data.zone,
        operationDate,
      ],
    );
    return result.rows[0];
  }
}
