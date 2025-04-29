import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 50 }, // 50 usuários virtuais durante 30 segundos
        { duration: '1m', target: 100 }, // 100 usuários virtuais durante 1 minuto
        { duration: '30s', target: 0 }, // Diminuir a carga de volta a 0 usuários
    ],
};

export default function () {
    const res = http.get('https://test.k6.io');
    check(res, {
        'is status 200': (r) => r.status === 200,
        'is body present': (r) => r.body.includes('Example Domain'),
    });
    sleep(1); // Dormir por 1 segundo entre as requisições
}

