import { Query } from './index';

const all = () => Query('SELECT * FROM addresses');

const insert = (address) => Query('insert into addresses (address) values (?)', [address]);

export default {
    all,
    insert
}