const mysql = require('mysql2/promise');

async function connectDB() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME // 환경 변수에서 DB 정보를 가져옴
        });
        
        console.log('✅ MySQL 연결 성공! 현재 DB:', process.env.DB_NAME);
        
        // 연결 테스트 쿼리 실행
        const [rows] = await connection.execute('SELECT 1 + 1 AS solution');
        console.log('DB 테스트 결과:', rows[0].solution);

        return connection;
    } catch (error) {
        console.error('❌ MySQL 연결 실패! 오류:', error.message);
        return null;
    }
}

module.exports = connectDB; // 이 함수를 외부(index.js)에서 사용할 수 있도록 내보냅니다.