import { Query } from '../';
import type { TUsers, DBResp } from '../models';

const all = () => Query<TUsers[]>('SELECT * FROM users');

const one = (id: number) => Query<TUsers[]>('SELECT * FROM users WHERE id = ?', [id]);

const insert = (user: TUsers) => Query<DBResp>('INSERT INTO users SET ?', user);

const update = (user: TUsers, id: number) => Query<DBResp>('UPDATE users SET ? WHERE id = ?', [user, id]);

const destroy = (id: number) => Query<DBResp>('DELETE FROM users WHERE id = ?', [id]);

const find = (column: string, value: string | number) => Query<TUsers[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);

export default {
    all,
    one,
    insert,
    update,
    destroy,
    find
}