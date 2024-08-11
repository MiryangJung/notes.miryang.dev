---
title: PostgreSQL auto increment 초기화
---

```
ALTER TABLE {TableName}
    ALTER COLUMN {ColumnName} RESTART SET START {Number};
```