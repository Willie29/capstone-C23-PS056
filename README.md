# Capstone-C23-PS056
# Title : Sorak (Soeara Rakyat)

## <b>Members</b> 
1. (MD) A166DKY4343 – Alma Alifia Halimatunnisa – Universitas Diponegoro - [Active]
2. (CC) C166DSX3027 – Fariel Ahmad Sudrajat– Universitas Diponegoro - [Active]
3. (CC) C303DSX2618 – Willyam Dyanata – Universitas Pelita Harapan - [Active] 
4. (ML) M166DSX2489 –Ibrahim Erlangga – Universitas Diponegoro - [Active]
5. (ML) M303DKX3947 –Prapta Arya Therawan – Universitas Pelita Harapan - [Active]
6. (ML) M303DSX1882 – Rovario Khogus Limando – Universitas Pelita Harapan - [Active]

## Description
We're planning to make an application full with people's aspiration for the government. 


## Machine Learning
- Gathering Datasets of Indonesian's badword
- Making an NLP to detect a badword in the user's report.

<br>

---
## Cloud Computing
- Responsible for the backend of the app.
- Deploying the backend to the cloud using App Engine
- Set up a bucket to store image
- Set up databases for the app


### <b>Cloud Storage</b>
We're using the cloud storage to store the image from user's posts. We named it "sorak-bucket".
![Alt text](img/image.png)

### <b>Cloud SQL</b>
We're using MySQL 8.0 for the database and we named it "sorak_db" which include 3 tables such as "users", "posts", and "votes".
![Alt text](img/cloudSQL.png)

### <b>Authentication</b>
nih fariel

### <b>Sorak - API</b>

#### Deployment
![Alt text](img/Appengine.png)
#### Endpoints list

<details>
 <summary>Add Post | <code>POST</code> <code><b>/post</b></code></summary>

#### URL

`/post`

#### Method

`POST`

#### Parameters

> | key                   | type     | data type | description |
> | --------------------- | -------- | --------- | ----------- |
> | user_id                  | required | string       | N/A         |
> | category                 | required | string    | N/A         |
> | caption                  | required | string       | N/A         |
> | attachment                 | required | .img, .png    | N/A         |
</details>

<details>
 <summary>Save Vote| <code>POST</code> <code><b>/vote</b></code></summary>

#### URL

`/vote`

#### Method

`POST`

#### Parameters

`user_id, post_id`

 </details>

<details>
 <summary>Get Post by Vote | <code>GET</code> <code><b>/post/byvote</b></code></summary>

#### URL

`/post/byvote`

#### Method

`GET`

#### Parameters

`N/A`

#### Responses

status: `200 OK`

```json
[
    {
        "post_id": "postGAq8cQHTF6",
        "user_id": "user01",
        "category": "aspirasi",
        "caption": "kalau ada yang ribet napa pilih yang gampang",
        "image_url": " https://storage.googleapis.com/sorak-bucket/20230616-032206",
        "createdAt": "2023-06-14T04:35:47.000Z",
        "vote": 5
    },
    {
        "post_id": "postiG-MsnM7eD",
        "user_id": "user03",
        "category": "pengaduhan",
        "caption": "Pohon tumbang penyebab banjir ini masih dibiarkan dan tidak ada tindakan dari pemerintah",
        "image_url": "https://storage.googleapis.com/sorak-bucket/20230616-032112 ",
        "createdAt": "2023-06-14T11:30:33.000Z",
        "vote": 4
    },
    {
        "post_id": "postleK3FuHcbY",
        "user_id": "user02",
        "category": "pengaduhan",
        "caption": "Ini jalan ga ada yang perbaikin udah 10 tahun",
        "image_url": "https://storage.googleapis.com/sorak-bucket/20230616-032406",
        "createdAt": "2023-06-14T11:27:16.000Z",
        "vote": 2
    }
]
```

</details>

<details>
 <summary>Get Post by Date | <code>GET</code> <code><b>/post/bydate</b></code></summary>

#### URL

`/post/bydate`

#### Method

`GET`

#### Parameters

`N/A`

#### Responses

status: `200 OK`

```json
[
    {
        "post_id": "postiG-MsnM7eD",
        "user_id": "user03",
        "category": "pengaduhan",
        "caption": "Pohon tumbang penyebab banjir ini masih dibiarkan dan tidak ada tindakan dari pemerintah",
        "image_url": "https://storage.googleapis.com/sorak-bucket/20230616-032112 ",
        "createdAt": "2023-06-14T11:30:33.000Z",
        "vote": 4
    },
    {
        "post_id": "postleK3FuHcbY",
        "user_id": "user02",
        "category": "pengaduhan",
        "caption": "Ini jalan ga ada yang perbaikin udah 10 tahun",
        "image_url": "https://storage.googleapis.com/sorak-bucket/20230616-032406",
        "createdAt": "2023-06-14T11:27:16.000Z",
        "vote": 2
    },
    {
        "post_id": "postGAq8cQHTF6",
        "user_id": "user01",
        "category": "aspirasi",
        "caption": "kalau ada yang ribet napa pilih yang gampang",
        "image_url": " https://storage.googleapis.com/sorak-bucket/20230616-032206",
        "createdAt": "2023-06-14T04:35:47.000Z",
        "vote": 5
    }
]
```

</details>

<details>
 <summary>Get Post by ID | <code>GET</code> <code><b>/post/{post_id}</b></code></summary>

#### URL

`/post/{post_id}`

#### Method

`GET`

#### Parameters

`post_id`

#### Responses

status: `200 OK`

```json
{
    "post": {
        "post_id": "postGAq8cQHTF6",
        "user_id": "user01",
        "category": "aspirasi",
        "caption": "kalau ada yang ribet napa pilih yang gampang",
        "image_url": " https://storage.googleapis.com/sorak-bucket/20230616-032206",
        "createdAt": "2023-06-14T04:35:47.000Z",
        "vote": 5
    }
}
```

</details><br>

---

## Mobile Development
- Responsible for the UI/UX design
- Making the frontend aplication

## Step by Step

### Machine Learning
1. prepare data
2. cleaning data
3. parse data
4. create model
5. evaluate model
6. export model
