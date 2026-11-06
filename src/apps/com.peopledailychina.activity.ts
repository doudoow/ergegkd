// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "人民日报",
  "id": "com.peopledailychina.activity",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"advert_iv_del\"][visibleToUser=true]",
          "activityIds": "com.peopledailychina.activity.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15175151",
          "exampleUrls": "https://m.gkd.li/57941037/53c28fe8-9db9-45d8-82b3-7034aa10d2ed",
          "key": 0
        },
        {
          "matches": "[vid=\"advert_iv_del\"][visibleToUser=true]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15175151",
          "exampleUrls": "https://m.gkd.li/57941037/53c28fe8-9db9-45d8-82b3-7034aa10d2ed",
          "key": 1
        }
      ]
    }
  ]
});
