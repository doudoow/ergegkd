// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小飞机网盘",
  "id": "com.xiaofeiji.app.disk",
  "groups": [
    {
      "name": "分段广告",
      "desc": "点击关闭-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Image[visibleToUser=true] < View + View >2 [text=\"广告\"]",
          "activityIds": "com.xiaofeiji.app.disk.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13857392"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            3
          ],
          "activityIds": "com.xiaofeiji.app.disk.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13857537"
        },
        {
          "matches": "[id=\"android:id/content\"] >5 [text=\"不感兴趣\"]",
          "preKeys": 0,
          "activityIds": "com.xiaofeiji.app.disk.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13857537"
        },
        {
          "matches": "@Image[visibleToUser=true] < View + View >2 [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13857392"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            3
          ],
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13857537"
        }
      ]
    }
  ]
});
