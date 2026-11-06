// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "手机性能排行",
  "id": "com.nasoft.socmark",
  "groups": [
    {
      "name": "局部广告",
      "desc": "点击x掉",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"btn_banner_ad_clear\"]",
          "activityIds": ".ui.SearchScoreActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28173008",
          "key": 0
        }
      ]
    }
  ]
});
