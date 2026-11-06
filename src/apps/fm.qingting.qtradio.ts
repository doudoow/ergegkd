// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "蜻蜓FM",
  "id": "fm.qingting.qtradio",
  "groups": [
    {
      "name": "局部广告-播放界面的广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"fm.qingting.qtradio:id/view_ad_close\"]",
          "activityIds": ".QTRadioActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12640438",
          "exampleUrls": "https://e.gkd.li/bef1954c-a0c8-441e-ab77-6967089e906c"
        },
        {
          "matches": "@[id=\"fm.qingting.qtradio:id/iv_close\"] + RelativeLayout >2 [text=\"广告\"]",
          "activityIds": ".QTRadioActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12640981",
          "exampleUrls": "https://e.gkd.li/1562b618-074d-4f10-a1ae-c62c5390fd1a"
        },
        {
          "matches": "[vid=\"view_ad_close\"]",
          "activityIds": ".QTRadioActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12640438",
          "exampleUrls": "https://e.gkd.li/bef1954c-a0c8-441e-ab77-6967089e906c"
        },
        {
          "matches": "@[vid=\"iv_close\"] + RelativeLayout >2 [text=\"广告\"]",
          "activityIds": ".QTRadioActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12640981",
          "exampleUrls": "https://e.gkd.li/1562b618-074d-4f10-a1ae-c62c5390fd1a"
        }
      ]
    }
  ]
});
