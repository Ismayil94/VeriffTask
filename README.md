# Veriff task for Testing Engineer
---

## Task Description

For test description go [here](./docks/task-descriptions.pdf)

---

## Report

For html report go [here](./cypress/reports/index.html)

---

## How to run

1. `cd cypress`
2. `npm ci`
3. `docker run -it -v $PWD:/e2e -w /e2e cypress/included:9.3.0` - For running tests in docker container
4. `npm test` - For running tests locally

---
