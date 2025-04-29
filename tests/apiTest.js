import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const res = http.get('https://jsonplaceholder.typicode.com/todos/1');
    check(res, {
        'is status 200': (r) => r.status === 200,
        'is todo id 1': (r) => JSON.parse(r.body).id === 1,
    });
}

