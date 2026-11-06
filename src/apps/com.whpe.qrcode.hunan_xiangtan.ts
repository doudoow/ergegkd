// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "湘潭出行",
  "id": "com.whpe.qrcode.hunan_xiangtan",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.whpe.qrcode.hunan_xiangtan:id/interact_ad_root\"] > [id=\"com.whpe.qrcode.hunan_xiangtan:id/iv_close\"]",
          "activityIds": "com.whpe.qrcode.hunan_xiangtan.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13476265"
        },
        {
          "matches": "[vid=\"interact_ad_root\"] > [vid=\"iv_close\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13476265"
        },
        {
          "matches": "@[id=\"com.whpe.qrcode.hunan_xiangtan:id/iv_close\"] +n * >n [text=\"广告\"]",
          "activityIds": "com.whpe.qrcode.hunan_xiangtan.MainActivity",
          "fastQuery": true,
          "key": 2,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13476265"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.whpe.qrcode.hunan_xiangtan:id/iv_close\"] +n * >n [text=\"广告\"]",
          "activityIds": "com.whpe.qrcode.hunan_xiangtan.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13476265"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"com.whpe.qrcode.hunan_xiangtan:id/iv_close\"] +n * >n [text=\"广告\"]",
          "activityIds": "com.whpe.qrcode.hunan_xiangtan.MainActivity",
          "quickFind": true,
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13476265"
        }
      ]
    }
  ]
});
