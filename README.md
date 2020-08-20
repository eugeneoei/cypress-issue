## Cypress throws `URI malformed` error when `GET` request with query string is made eg. `/api/query?tag=10%`

This repository reproduces error stated. Runs on `NodeJS` and requires `nodemon`

---

### Steps to reproduce error

1. Install all dependencies:
```bash
npm install
```

2. Start NodeJS:
```bash
# required nodemon
npm run start
```

3. Start Cypress:
```bash
npm run cypress
```

4. Run Spec file
Select `test.spec.js`