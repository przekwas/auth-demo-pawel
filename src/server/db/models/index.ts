export interface TUsers {
	id?: number;
	email?: string;
	password?: string;
	role?: string;
	created_at?: Date;
}

export interface TTokens {
	id?: number;
	userid?: number;
	uniq?: string;
	jwt?: string;
	created_at?: Date;
}

export interface DBResp {
	affectedRows?: number;
	insertId?: number;
}