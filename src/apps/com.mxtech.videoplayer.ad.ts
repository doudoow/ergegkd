// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "MX 播放器",
  "id": "com.mxtech.videoplayer.ad",
  "groups": [
    {
      "name": "全屏广告-谷歌广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"Advertisement\"] + View >(2) View + Button[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12642204",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-谷歌广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"Advertisement\"] + View >(2) View + Button[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642204"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "谷歌广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[desc=\"Advertisement\"] + View >(2) View + Button[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642204"
          ],
          "key": 0
        }
      ]
    }
  ]
});
