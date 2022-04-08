import { Query } from './index';

const all = () => Query('SELECT * FROM addresses');

const one = (id) => Query('Select * from addresses where id = ?', [id]);

const allState = () => Query('select * from reps');

const oneState = (state) => Query('select * from reps where state = ?', [state]);

const allSen = () => Query('select * from usSen');

const oneSen = (state) => Query('select * from usSen where state = ?', [state]);

const insert = (address) => Query('insert into addresses (address) values (?)', [address]);

const insertState = (id, name, state, photo, url, party, phone, district) => Query('insert into reps (id, name, state, photo, url, party, phone, district) values (?, ?, ?, ?, ?, ?, ?, ?)', [id, name, state, photo, url, party, phone, district]);

const insertSen = (id, name, state, photo, contact_form, party, phone) => Query('insert into usSen (id, name, state, photo, contact_form, party, phone) values (?, ?, ?, ?, ?, ?, ?)', [id, name, state, photo, contact_form, party, phone]);

export default {
    all,
    one,
    allState,
    oneState,
    allSen,
    oneSen,
    insert,
    insertState,
    insertSen
}