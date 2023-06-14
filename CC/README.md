# Sorak - API

## Endpoints 

<details>
 <summary>Add Post | <code>POST</code> <code><b>/post</b></code></summary>

##### URL

`/post`

##### Method

`POST`

##### Parameters

> | key                   | type     | data type | description |
> | --------------------- | -------- | --------- | ----------- |
> | category                  | required | string       | N/A         |
> | caption                 | required | string    | N/A         |

</details>

<details>
 <summary>Save Vote| <code>POST</code> <code><b>/vote</b></code></summary>

##### URL

`/vote`

##### Method

`POST`

> | key                   | type     | data type | description |
> | --------------------- | -------- | --------- | ----------- |
> | category                  | required | string       | N/A         |
> | caption                 | required | string    | N/A         |

 </details>

<details>
 <summary>Get Post by Vote | <code>GET</code> <code><b>/post/byvote</b></code></summary>

##### URL

`/post/byvote`

##### Method

`GET`

##### Parameters

`N/A`

##### Responses

status: `200 OK`

```json
[
    {
        "post_id": "postGAq8cQHTF6",
        "user_id": "user01",
        "category": "aspirasi",
        "caption": "kalau ada yang ribet napa pilih yang gampang",
        "image_url": "aspirasi2023-06-14 11:35:47.com",
        "createdAt": "2023-06-14T04:35:47.000Z",
        "vote": 5
    },
    {
        "post_id": "postiG-MsnM7eD",
        "user_id": "user03",
        "category": "pengaduhan",
        "caption": "Pohon tumbang penyebab banjir ini masih dibiarkan dan tidak ada tindakan dari pemerintah",
        "image_url": "pengaduhan2023-06-14 18:30:33.com",
        "createdAt": "2023-06-14T11:30:33.000Z",
        "vote": 4
    },
    {
        "post_id": "postleK3FuHcbY",
        "user_id": "user02",
        "category": "pengaduhan",
        "caption": "Ini jalan ga ada yang perbaikin udah 10 tahun",
        "image_url": "pengaduhan2023-06-14 18:27:16.com",
        "createdAt": "2023-06-14T11:27:16.000Z",
        "vote": 2
    }
]
```

</details>

<details>
 <summary>Get Post by Date | <code>GET</code> <code><b>/postbydate</b></code></summary>

##### URL

`/postbydate`

##### Method

`GET`

##### Parameters

`N/A`

##### Responses

status: `200 OK`

```json
[
    {
        "post_id": "postiG-MsnM7eD",
        "user_id": "user03",
        "category": "pengaduhan",
        "caption": "Pohon tumbang penyebab banjir ini masih dibiarkan dan tidak ada tindakan dari pemerintah",
        "image_url": "pengaduhan2023-06-14 18:30:33.com",
        "createdAt": "2023-06-14T11:30:33.000Z",
        "vote": 4
    },
    {
        "post_id": "postleK3FuHcbY",
        "user_id": "user02",
        "category": "pengaduhan",
        "caption": "Ini jalan ga ada yang perbaikin udah 10 tahun",
        "image_url": "pengaduhan2023-06-14 18:27:16.com",
        "createdAt": "2023-06-14T11:27:16.000Z",
        "vote": 2
    },
    {
        "post_id": "postGAq8cQHTF6",
        "user_id": "user01",
        "category": "aspirasi",
        "caption": "kalau ada yang ribet napa pilih yang gampang",
        "image_url": "aspirasi2023-06-14 11:35:47.com",
        "createdAt": "2023-06-14T04:35:47.000Z",
        "vote": 5
    }
]
```

</details>

<details>
 <summary>Get Post by ID | <code>GET</code> <code><b>/post/{post_id}</b></code></summary>

##### URL

`/post/{post_id}`

##### Method

`GET`

##### Parameters

`post_id`

##### Responses

status: `200 OK`

```json
{
    "post": {
        "post_id": "postGAq8cQHTF6",
        "user_id": "user01",
        "category": "aspirasi",
        "caption": "kalau ada yang ribet napa pilih yang gampang",
        "image_url": "aspirasi2023-06-14 11:35:47.com",
        "createdAt": "2023-06-14T04:35:47.000Z",
        "vote": 5
    }
}
```

</details>