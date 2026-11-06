// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小熊有好货",
  "id": "com.xiaoxiongyhh",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "View[childCount=2] > ImageView + Button[childCount=0][clickable=true]",
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13401975"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "View[childCount=2] > ImageView + Button[childCount=0][clickable=true]",
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "key": 0,
          "name": "天降福利",
          "snapshotUrls": "https://i.gkd.li/i/13401975"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "View[childCount=2] > ImageView + Button[childCount=0][clickable=true]",
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "key": 0,
          "name": "天降福利",
          "snapshotUrls": "https://i.gkd.li/import/13401975"
        }
      ]
    }
  ]
});
