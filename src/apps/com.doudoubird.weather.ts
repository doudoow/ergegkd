// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "最准天气",
  "id": "com.doudoubird.weather",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_view\"] + [vid=\"delete_icon\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17358146",
          "exampleUrls": "https://e.gkd.li/2a61d3de-6117-4d85-8f4d-565f6ee00a57",
          "key": 0
        }
      ]
    }
  ]
});
