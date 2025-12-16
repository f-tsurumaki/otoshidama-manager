# teamB_section8
2025年12月16日作成_お年玉運用アプリ

## 🚀環境構築手順

### 1. リポジトリをクローン

### 2. 環境変数ファイルを作成

#### バックエンド用
backend/.envを作成(notionに貼ります)

#### フロントエンド用
frontend/.env.localを作成（notionに貼ります）

### 3. バックエンドを動作確認（Docker）
```bash
# Dockerコンテナをビルド・起動
docker-compose up --build

# バックグラウンドで起動する場合
docker-compose up -d --build
```

**確認**:
- ブラウザで http://localhost:4000/health にアクセス
- Hello World! が表示されればOK

### 4. フロントエンドの動作確認
```bash
cd frontend

# 依存関係をインストール
npm install

# 開発サーバー起動
npm run dev
```

**確認**:
- ブラウザで http://localhost:3000 にアクセス
- Next.jsのデフォルトの画面が表示されればOK
---