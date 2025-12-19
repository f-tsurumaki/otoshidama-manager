# API設計

### 口座参照系

### API-101 残高照会

| 項目 | 内容 |
| --- | --- |
| API ID | API-101 |
| API名 | 残高照会 |
| Method | GET |
| パス | /accounts/balance |
| 概要 | ユーザーが保有する口座の残高一覧を取得 |
| 使用銀行API | 残高照会API |

**レスポンス例**

```json
{
"accounts":[
{
"accountId":"301010011594",
"accountType":"普通預金",
"balance":1455000,
"currency":"JPY"
}
]
}
```

---

### API-102 口座一覧照会

| 項目 | 内容 |
| --- | --- |
| API ID | API-102 |
| API名 | 口座一覧照会 |
| Method | GET |
| パス | /accounts |
| 概要 | ユーザーが保有する全口座情報を取得 |
| 使用銀行API | 口座一覧照会API |

**レスポンス例**

```json
{
"accounts":[
{
"accountId":"xxxx",
"accountType":"円普通預金"
},
{
"accountId":"yyyy",
"accountType":"つかいわけ口座"
}
]
}
```

---

### 明細系

### API-201 入出金明細照会

| 項目 | 内容 |
| --- | --- |
| API ID | API-201 |
| API名 | 入出金明細照会 |
| Method | GET |
| パス | /transactions |
| 概要 | 指定口座の入出金明細を取得 |
| 使用銀行API | 入出金明細照会API |

**クエリ例**

```
?fromDate=2025-01-01&toDate=2025-01-07
```

**レスポンス例**

```json
{
"transactions":[
{
"date":"2025-01-03",
"type":"入金",
"amount":10000,
"description":"お年玉"
}
]
}
```

---

### 振替系（今回の目玉）

### API-301 つかいわけ口座間振替

| 項目 | 内容 |
| --- | --- |
| API ID | API-301 |
| API名 | つかいわけ口座間振替 |
| Method | POST |
| パス | /api/transfers |
| 概要 | つかいわけ口座間で振替を実行 |
| 使用銀行API | つかいわけ口座間振替API |

**リクエスト例**

```json
{
"fromAccountId":"xxxx",
"toAccountId":"yyyy",
"amount":5000
}
```

**レスポンス例**

```json
{
"status":"SUCCESS",
"message":"振替が完了しました"
}
```