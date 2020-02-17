//yarn add mocha --dev để cài mocha test cho project
//vào package.json chỉnh test: "mocha -w" để chạy và tự cập nhật thay đổi
//hoặc dùng nodemon --exec 'mocha'
const add = require('../src/add');
const assert = require('assert');

describe('Test file add.js', () => {
    it('Can add natural number', () => {
        assert(add(5, 5) === 10);
    });
});