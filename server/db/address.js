import { Query } from './index';

const all = () => Query('SELECT * FROM addresses');

const one = (id) => Query('Select * from addresses where id = ?', [id]);

const allState = () => Query('select * from usreps');

const oneState = (state) => Query('select * from usreps where state = ?', [state]);

const insert = (address) => Query('insert into addresses (address) values (?)', [address]);

const insertState = (id, name, state) => Query('insert into usreps (id, name, state) values (?, ?, ?)', [id, name, state]);

export default {
    all,
    one,
    allState,
    oneState,
    insert,
    insertState
}