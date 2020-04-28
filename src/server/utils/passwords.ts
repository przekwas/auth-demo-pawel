import * as bcrypt from 'bcrypt';

export const generateSalt = (password: string) => {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export const comparePassword = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
}