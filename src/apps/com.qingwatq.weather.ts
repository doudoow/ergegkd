// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "呱呱天气",
  "id": "com.qingwatq.weather",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.qingwatq.weather:id/titleArea\"] + [id=\"com.qingwatq.weather:id/closeImg\"]",
          "activityIds": "com.qingwatq.weather.home.HomeActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13476350"
        },
        {
          "matches": "[vid=\"titleArea\"] + [vid=\"closeImg\"]",
          "activityIds": ".home.HomeActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13476350"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.qingwatq.weather:id/titleArea\"] + [id=\"com.qingwatq.weather:id/closeImg\"]",
          "activityIds": "com.qingwatq.weather.home.HomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13476350"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.qingwatq.weather:id/titleArea\"] + [id=\"com.qingwatq.weather:id/closeImg\"]",
          "activityIds": "com.qingwatq.weather.home.HomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13476350"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.qingwatq.weather:id/titleArea\"] + [id=\"com.qingwatq.weather:id/closeImg\"]",
          "activityIds": "com.qingwatq.weather.home.HomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13476350"
        }
      ]
    }
  ]
});
