import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const res = http.get('https://test.k6.io');
    check(res, {
        'is status 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200,
    });
}

