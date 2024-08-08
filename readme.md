# Shelter Information API

このプロジェクトは、避難所情報を管理するためのAPIを提供します。APIは、特定の県または避難所IDに基づいて避難所情報を取得したり、新しい避難所情報を追加したりする機能を持っています。

## セットアップ

### 前提条件

- Docker
- Docker Compose

### 手順

1. このリポジトリをクローンします。

    ```sh
    git clone <your-repo-url>
    cd <your-repo-directory>
    ```

2. Dockerコンテナをビルドして起動します。

    ```sh
    docker-compose up --build
    ```

    これにより、バックエンド（Node.js + Express）とMongoDBのコンテナが起動します。

## APIエンドポイント

### 1. 県に基づいて避難所情報を取得

- **URL:** `/shelters/:prefecture`
- **メソッド:** `GET`
- **説明:** 指定された県の避難所情報を取得します。

#### リクエスト例

```sh
curl -X GET http://backend:4001/shelters/Aichi
```
```json
[{"_id":"66b44f72cc03d8103ff3f55b","id":3,"name":"避難所C","location":"市区町村Z","prefecture":"Aichi","capacity":200,"food":70,"water":80,"medicines":{"medicine1":"50","medicine2":"40","medicine3":"30"}},{"_id":"66b44f72cc03d8103ff3f55e","id":6,"name":"避難所F","location":"市区町村U","prefecture":"Aichi","capacity":220,"food":80,"water":90,"medicines":{"medicine1":"55","medicine2":"45","medicine3":"35"}}]

```
### 2. 避難所IDに基づいて避難所情報を取得

- **URL:** `/location/:shelterid`
- **メソッド:** `GET`
- **説明:** 指定された避難所IDの避難所情報を取得します。

#### リクエスト例

```sh
curl -X GET http://backend:4001/location/hinanzyo/1  # 1 は例として避難所ID
```

```json
{"_id":"66b44f72cc03d8103ff3f559","id":1,"name":"避難所A","location":"市区町村X","prefecture":"Tokyo","capacity":100,"food":20,"water":30,"medicines":{"medicine1":"30","medicine2":"20","medicine3":"10"}}

```

### 3. 新しい避難所情報を追加

- **URL:** `/shelters`
- **メソッド:** `POST`
- **説明:** 新しい避難所情報を追加します。
- **リクエストボディ:** 以下のJSON形式で送信します。

    ```json
    {
      "id": 1,
      "name": "Shelter A",
      "prefecture": "Aichi",
      "capacity": 100,
      "food": 50,
      "water": 200,
      "medicine1": "Painkillers",
      "medicine2": "Bandages",
      "medicine3": "Antibiotics"
    }
    ```

#### リクエスト例

```sh
curl -X POST http://backend:4001/shelters \
-H "Content-Type: application/json" \
-d '{
  "id": 1,
  "name": "Shelter A",
  "prefecture": "Aichi",
  "capacity": 100,
  "food": 50,
  "water": 200,
  "medicine1": "Painkillers",
  "medicine2": "Bandages",
  "medicine3": "Antibiotics"
}'
```
### 4. 避難所IDに基づいて避難者情報を取得

- **URL:** `/people/:shelterid`
- **メソッド:** `GET`
- **説明:** 指定された避難所IDに基づいて、その避難所に所属する避難者情報を取得します。

### 例

#### リクエスト

```sh
curl -X GET http://backend:4001/people/2
```

#### レスポンス

```json
[
  {
    "_id": "66b23bc0797a00169cf3f555",
    "rakutenId": "r44556",
    "name": "井上花子",
    "birthDate": "1987-09-22T00:00:00.000Z",
    "gender": "女性",
    "requiredMedicine": "Aspirin",
    "medicinePerDay": 2,
    "shelterId": 2
  },
  {
    "_id": "66b23bc0797a00169cf3f558",
    "rakutenId": "r55667",
    "name": "山本健太",
    "birthDate": "1988-03-20T00:00:00.000Z",
    "gender": "男性",
    "requiredMedicine": "Paracetamol",
    "medicinePerDay": 3,
    "shelterId": 2
  }
]
```

### ５. 避難所IDに基づいて避難者情報+薬の備蓄量や需要量を取得

- **URL:** `shelters/:shelterid/medicine-stats:`
- **メソッド:** `GET`
- **説明:** 指定された避難所IDに基づいて、その避難所の情報に加えて、薬の備蓄量や需要量を取得します。

### 例

#### リクエスト

```sh
curl -X GET http://backend:4001/shelters/1/medicine-stats
```

#### レスポンス

```json
  {
    "id":1,
    "name":"避難所A",
    "prefecture":"Tokyo",
    "capacity":100,
    "food":20,
    "water":30,
    "medicines":
    {
      "medicine1":"30",
      "medicine2":"20",
      "medicine3":"10"
    },
    "stock":
    {
      "medicine1":30,
      "medicine2":20,
      "medicine3":10
    },
    "demand":
    {
      "medicine1":2,
      "medicine2":6,
      "medicine3":1
    },
    "daysSupply":
    {
      "medicine1":15,
      "medicine2":3,
      "medicine3":10
    }
  }
```

このエンドポイントを利用することで、指定された避難所IDに所属するすべての避難者の情報を取得することができます。



## ログとエラー処理

MongoDBとの接続に失敗した場合、またはデータの取得・保存に失敗した場合、サーバー適切なエラーメッセージをコンソールに出力し、HTTPステータスコード500または400を返します。

## 開発

### 開発サーバーの起動

開発用のサーバーを起動するには、以下のコマンドを実行します。

```sh
docker-compose up --build
```

これにより、バックエンドサーバーがポート4001で、フロントエンドがポート3000で起動します。

### コードの変更

コードの変更はリアルタイムで反映されます。変更を保存すると、Dockerコンテナ内のアプリケーションが自動的に再起動されます。

